import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { useToast } from '../components/shared/Toast.jsx';
import { getProductBySlug, formatPrice, LUXE_SURCHARGE } from '../data/products.js';
import useDocumentHead from '../hooks/useDocumentHead.js';
import ProductView from '../components/product/ProductView.jsx';
import '../components/product/fig-tokens.css';
import '../components/product/fig-assets.css';
import '../components/shop/fig-assets.css';

export default function ProductPage() {
  const { id } = useParams();
  const { dispatch } = useCart();
  const { showToast } = useToast();
  const rootRef = useRef(null);
  const editionRef = useRef('Standard');
  const messageRef = useRef('');

  const product = getProductBySlug(id);

  useDocumentHead({
    title: product ? product.name : 'Product Not Found',
    description: product ? product.description : '',
  });

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !product) return;

    // Reset edition on product change
    editionRef.current = 'Standard';

    const leaves = Array.from(root.querySelectorAll('span')).filter(
      (el) => el.children.length === 0
    );

    // Update displayed price (find it by the formatted default or current value)
    const priceEl = leaves.find(
      (el) => getComputedStyle(el).fontWeight === '700' &&
        getComputedStyle(el).fontSize === '28px'
    );
    if (priceEl) priceEl.textContent = formatPrice(product.price);

    // Edition toggle
    const stdLabel = leaves.find((el) => el.textContent.trim() === 'Standard');
    const luxeLabel = leaves.find((el) => el.textContent.trim() === 'Luxe Edition');
    const stdCard = stdLabel ? stdLabel.parentElement : null;
    const luxeCard = luxeLabel ? luxeLabel.parentElement : null;

    const paintEdition = (isStandard) => {
      if (stdCard) {
        stdCard.style.boxShadow = isStandard
          ? 'inset 0 0 0 2px rgb(106,30,46)'
          : 'inset 0 0 0 1px rgb(232,212,180)';
      }
      if (luxeCard) {
        luxeCard.style.boxShadow = isStandard
          ? 'inset 0 0 0 1px rgb(232,212,180)'
          : 'inset 0 0 0 2px rgb(106,30,46)';
      }
      if (priceEl) {
        priceEl.textContent = formatPrice(
          isStandard ? product.price : product.price + LUXE_SURCHARGE
        );
      }
    };

    const handlers = [];

    if (stdCard) {
      stdCard.style.cursor = 'pointer';
      const h = (e) => { e.stopPropagation(); editionRef.current = 'Standard'; paintEdition(true); };
      stdCard.addEventListener('click', h);
      handlers.push([stdCard, h]);
    }
    if (luxeCard) {
      luxeCard.style.cursor = 'pointer';
      const h = (e) => { e.stopPropagation(); editionRef.current = 'Luxe'; paintEdition(false); };
      luxeCard.addEventListener('click', h);
      handlers.push([luxeCard, h]);
    }

    // Message input — find the placeholder text and make its container editable
    const msgPlaceholder = leaves.find(
      (el) => el.textContent.trim().startsWith('Type your personal message')
    );
    const msgContainer = msgPlaceholder ? msgPlaceholder.parentElement : null;
    if (msgContainer) {
      msgContainer.contentEditable = 'true';
      msgContainer.style.cursor = 'text';
      msgContainer.style.outline = 'none';
      msgContainer.style.minHeight = '60px';

      const onFocus = () => {
        if (msgPlaceholder.style.opacity === '0.6' || msgPlaceholder.style.opacity === '') {
          msgPlaceholder.style.opacity = '1';
          msgPlaceholder.textContent = '';
        }
      };
      const onBlur = () => {
        const text = msgContainer.textContent.trim();
        messageRef.current = text;
        if (!text) {
          msgPlaceholder.style.opacity = '0.6';
          msgPlaceholder.textContent = 'Type your personal message here. Our calligrapher will handwrite this in elegant ink on your behalf...';
        }
      };
      const onInput = () => {
        messageRef.current = msgContainer.textContent.trim();
      };
      msgContainer.addEventListener('focus', onFocus);
      msgContainer.addEventListener('blur', onBlur);
      msgContainer.addEventListener('input', onInput);
      handlers.push(
        [msgContainer, onFocus, 'focus'],
        [msgContainer, onBlur, 'blur'],
        [msgContainer, onInput, 'input']
      );
    }

    // Add to cart button
    const addBtn = leaves.find(
      (el) => el.textContent.trim() === 'Add to Box & Cart'
    );
    const addBtnContainer = addBtn ? addBtn.parentElement : null;
    if (addBtnContainer) {
      const h = (e) => {
        e.stopPropagation();
        const edition = editionRef.current;
        const price = edition === 'Luxe'
          ? product.price + LUXE_SURCHARGE
          : product.price;
        dispatch({
          type: 'ADD_ITEM',
          payload: {
            productId: product.id,
            name: product.name,
            price,
            edition,
            message: messageRef.current,
          },
        });
        showToast(`${product.name} added to cart!`);
      };
      addBtnContainer.addEventListener('click', h);
      handlers.push([addBtnContainer, h]);
    }

    return () => {
      handlers.forEach(([el, h, evt]) => el.removeEventListener(evt || 'click', h));
    };
  }, [id, product, dispatch, showToast]);

  if (!product) {
    return (
      <div style={{ padding: 80, textAlign: 'center', fontFamily: 'Geist, sans-serif', color: 'rgb(74,15,28)' }}>
        <h2>Product not found</h2>
      </div>
    );
  }

  return (
    <div ref={rootRef}>
      <ProductView
        productImages={[product.heroImage]}
        productName={product.name}
        productTagline={product.tagline}
        productPrice={formatPrice(product.price)}
        productItems={product.items}
      />
    </div>
  );
}
