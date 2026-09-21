import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext(null);

const STORAGE_KEY = 'wrappd_cart';

function computeDerived(items) {
  return {
    items,
    itemCount: items.reduce((sum, i) => sum + i.quantity, 0),
    subtotal: items.reduce((sum, i) => sum + i.linePrice, 0),
  };
}

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const items = JSON.parse(raw);
      if (Array.isArray(items) && items.length) return computeDerived(items);
    }
  } catch { /* ignore */ }
  return computeDerived([]);
}

function saveCart(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch { /* ignore */ }
}

function cartReducer(state, action) {
  let items;
  switch (action.type) {
    case 'ADD_ITEM': {
      const { productId, name, price, edition, message } = action.payload;
      const existing = state.items.find(
        (i) => i.productId === productId && i.edition === edition
      );
      if (existing) {
        items = state.items.map((i) =>
          i === existing
            ? { ...i, quantity: i.quantity + 1, linePrice: (i.quantity + 1) * i.price }
            : i
        );
      } else {
        items = [
          ...state.items,
          { productId, name, price, edition, message: message || '', quantity: 1, linePrice: price },
        ];
      }
      break;
    }
    case 'REMOVE_ITEM': {
      const { productId, edition } = action.payload;
      items = state.items.filter(
        (i) => !(i.productId === productId && i.edition === edition)
      );
      break;
    }
    case 'UPDATE_QUANTITY': {
      const { productId, edition, quantity } = action.payload;
      if (quantity < 1) {
        items = state.items.filter(
          (i) => !(i.productId === productId && i.edition === edition)
        );
      } else {
        items = state.items.map((i) =>
          i.productId === productId && i.edition === edition
            ? { ...i, quantity, linePrice: quantity * i.price }
            : i
        );
      }
      break;
    }
    case 'CLEAR_CART':
      items = [];
      break;
    default:
      return state;
  }
  return computeDerived(items);
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, null, loadCart);

  useEffect(() => {
    saveCart(state.items);
  }, [state.items]);

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
