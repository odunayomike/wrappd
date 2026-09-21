import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { formatPrice } from '../data/products.js';
import { NavBar3 } from '../components/shop/NavBar3.jsx';
import { PromoBanner } from '../components/shop/PromoBanner.jsx';
import '../components/shop/fig-tokens.css';

const CREAM = 'rgb(245,237,224)';
const BURGUNDY = 'rgb(106,30,46)';
const DARK = 'rgb(74,15,28)';
const GREY = 'rgb(92,86,87)';
const FONT = 'Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
const HEADING_FONT = 'Baskervville, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

export default function CartPage() {
  const { items, subtotal, dispatch } = useCart();
  const navigate = useNavigate();

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: CREAM, display: 'flex', flexDirection: 'column' }}>
      <PromoBanner style={{ flexShrink: 0, alignSelf: 'stretch', width: 'auto' }} />
      <NavBar3 style={{ flexShrink: 0, alignSelf: 'stretch', width: 'auto' }} />

      <div style={{ flex: 1, padding: '48px 80px 80px', maxWidth: 900, margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <h1 style={{ fontFamily: HEADING_FONT, fontWeight: 600, fontSize: 36, color: DARK, marginBottom: 32 }}>Your Cart</h1>

        {items.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <p style={{ fontFamily: FONT, fontSize: 18, color: GREY, marginBottom: 24 }}>Your cart is empty</p>
            <button
              onClick={() => navigate('/shop')}
              style={{
                fontFamily: FONT, fontWeight: 600, fontSize: 15, color: '#fff', backgroundColor: BURGUNDY,
                border: 'none', borderRadius: 100, padding: '16px 32px', cursor: 'pointer',
              }}
            >Continue Shopping</button>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {items.map((item) => (
                <div key={`${item.productId}-${item.edition}`} style={{
                  backgroundColor: '#fff', borderRadius: 20, padding: '24px 28px',
                  display: 'flex', alignItems: 'center', gap: 20,
                  boxShadow: '0 2px 8px rgba(74,15,28,0.06)',
                }}>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 16, color: DARK }}>{item.name}</span>
                    <span style={{
                      display: 'inline-block', marginLeft: 10, fontFamily: FONT, fontWeight: 500, fontSize: 11,
                      color: BURGUNDY, backgroundColor: 'rgb(245,237,224)', borderRadius: 6, padding: '3px 8px',
                      textTransform: 'uppercase', letterSpacing: '0.5px',
                    }}>{item.edition}</span>
                    {item.message && (
                      <p style={{ fontFamily: FONT, fontSize: 13, color: GREY, marginTop: 6, fontStyle: 'italic' }}>
                        &ldquo;{item.message}&rdquo;
                      </p>
                    )}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <button onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { productId: item.productId, edition: item.edition, quantity: item.quantity - 1 } })}
                      style={{ width: 32, height: 32, borderRadius: 8, border: `1px solid rgb(232,212,180)`, background: '#fff', cursor: 'pointer', fontFamily: FONT, fontSize: 18, color: DARK, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >&minus;</button>
                    <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 15, color: DARK, minWidth: 20, textAlign: 'center' }}>{item.quantity}</span>
                    <button onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { productId: item.productId, edition: item.edition, quantity: item.quantity + 1 } })}
                      style={{ width: 32, height: 32, borderRadius: 8, border: `1px solid rgb(232,212,180)`, background: '#fff', cursor: 'pointer', fontFamily: FONT, fontSize: 18, color: DARK, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >+</button>
                  </div>

                  <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 16, color: DARK, minWidth: 90, textAlign: 'right' }}>
                    {formatPrice(item.linePrice)}
                  </span>

                  <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { productId: item.productId, edition: item.edition } })}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: GREY, fontSize: 18 }}
                    aria-label="Remove item"
                  >&times;</button>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 32, padding: '24px 0', borderTop: '1px solid rgb(232,212,180)' }}>
              <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 18, color: DARK }}>Subtotal</span>
              <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 22, color: DARK }}>{formatPrice(subtotal)}</span>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              style={{
                width: '100%', fontFamily: FONT, fontWeight: 600, fontSize: 16, color: '#fff',
                backgroundColor: BURGUNDY, border: 'none', borderRadius: 100, padding: '20px 20px',
                cursor: 'pointer', letterSpacing: '0.5px',
              }}
            >Proceed to Checkout</button>
          </>
        )}
      </div>
    </div>
  );
}
