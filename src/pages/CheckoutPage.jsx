import { useState, useEffect } from 'react';
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

const inputStyle = {
  width: '100%', boxSizing: 'border-box', fontFamily: FONT, fontSize: 14, padding: '14px 16px',
  borderRadius: 12, border: '1px solid rgb(232,212,180)', backgroundColor: '#fff', color: DARK,
  outline: 'none',
};

const labelStyle = {
  fontFamily: FONT, fontWeight: 500, fontSize: 13, color: DARK, marginBottom: 6, display: 'block',
};

export default function CheckoutPage() {
  const { items, subtotal, dispatch } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '', email: '', phone: '', address: '', city: '', state: '', notes: '',
  });

  useEffect(() => {
    if (items.length === 0) navigate('/cart', { replace: true });
  }, [items.length, navigate]);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'CLEAR_CART' });
    navigate('/order-confirmation');
  };

  if (items.length === 0) return null;

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: CREAM, display: 'flex', flexDirection: 'column' }}>
      <PromoBanner style={{ flexShrink: 0, alignSelf: 'stretch', width: 'auto' }} />
      <NavBar3 style={{ flexShrink: 0, alignSelf: 'stretch', width: 'auto' }} />

      <form onSubmit={onSubmit} style={{ flex: 1, padding: '48px 80px 80px', maxWidth: 1100, margin: '0 auto', width: '100%', boxSizing: 'border-box', display: 'flex', gap: 48 }}>
        {/* Shipping form */}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontFamily: HEADING_FONT, fontWeight: 600, fontSize: 36, color: DARK, marginBottom: 32 }}>Checkout</h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <label style={labelStyle}>Full Name</label>
              <input name="name" value={form.name} onChange={onChange} required style={inputStyle} />
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>Email</label>
                <input name="email" type="email" value={form.email} onChange={onChange} required style={inputStyle} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>Phone</label>
                <input name="phone" type="tel" value={form.phone} onChange={onChange} required style={inputStyle} />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Delivery Address</label>
              <input name="address" value={form.address} onChange={onChange} required style={inputStyle} />
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>City</label>
                <input name="city" value={form.city} onChange={onChange} required style={inputStyle} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>State</label>
                <input name="state" value={form.state} onChange={onChange} required style={inputStyle} />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Delivery Notes (optional)</label>
              <textarea name="notes" value={form.notes} onChange={onChange} rows={3}
                style={{ ...inputStyle, resize: 'vertical' }} />
            </div>
          </div>
        </div>

        {/* Order summary */}
        <div style={{ width: 360, flexShrink: 0 }}>
          <div style={{ backgroundColor: '#fff', borderRadius: 20, padding: 28, boxShadow: '0 2px 8px rgba(74,15,28,0.06)', position: 'sticky', top: 24 }}>
            <h2 style={{ fontFamily: HEADING_FONT, fontWeight: 600, fontSize: 22, color: DARK, marginBottom: 20, marginTop: 0 }}>Order Summary</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 20 }}>
              {items.map((item) => (
                <div key={`${item.productId}-${item.edition}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <span style={{ fontFamily: FONT, fontSize: 14, fontWeight: 500, color: DARK }}>{item.name}</span>
                    <span style={{ fontFamily: FONT, fontSize: 12, color: GREY }}> x{item.quantity}</span>
                    <span style={{
                      display: 'inline-block', marginLeft: 6, fontFamily: FONT, fontWeight: 500, fontSize: 10,
                      color: BURGUNDY, backgroundColor: CREAM, borderRadius: 4, padding: '2px 6px',
                      textTransform: 'uppercase',
                    }}>{item.edition}</span>
                  </div>
                  <span style={{ fontFamily: FONT, fontSize: 14, fontWeight: 500, color: DARK }}>{formatPrice(item.linePrice)}</span>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid rgb(232,212,180)', paddingTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: FONT, fontSize: 14, color: GREY }}>Subtotal</span>
                <span style={{ fontFamily: FONT, fontSize: 14, fontWeight: 500, color: DARK }}>{formatPrice(subtotal)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: FONT, fontSize: 14, color: GREY }}>Delivery</span>
                <span style={{ fontFamily: FONT, fontSize: 14, fontWeight: 500, color: 'rgb(56,142,60)' }}>Free</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgb(232,212,180)', paddingTop: 14, marginTop: 4 }}>
                <span style={{ fontFamily: FONT, fontSize: 16, fontWeight: 600, color: DARK }}>Total</span>
                <span style={{ fontFamily: FONT, fontSize: 18, fontWeight: 600, color: DARK }}>{formatPrice(subtotal)}</span>
              </div>
            </div>

            <button type="submit" style={{
              width: '100%', marginTop: 24, fontFamily: FONT, fontWeight: 600, fontSize: 16, color: '#fff',
              backgroundColor: BURGUNDY, border: 'none', borderRadius: 100, padding: '18px 20px',
              cursor: 'pointer', letterSpacing: '0.5px',
            }}>Place Order</button>
          </div>
        </div>
      </form>
    </div>
  );
}
