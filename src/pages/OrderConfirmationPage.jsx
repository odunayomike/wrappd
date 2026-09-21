import { useNavigate } from 'react-router-dom';
import useDocumentHead from '../hooks/useDocumentHead.js';
import { NavBar3 } from '../components/shop/NavBar3.jsx';
import { PromoBanner } from '../components/shop/PromoBanner.jsx';
import '../components/shop/fig-tokens.css';

const CREAM = 'rgb(245,237,224)';
const BURGUNDY = 'rgb(106,30,46)';
const DARK = 'rgb(74,15,28)';
const GREY = 'rgb(92,86,87)';
const FONT = 'Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
const HEADING_FONT = 'Baskervville, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

const orderNumber = `WRP-${Date.now()}`;

export default function OrderConfirmationPage() {
  useDocumentHead({
    title: 'Order Confirmed',
    description: 'Your gift is on its way.',
  });
  const navigate = useNavigate();

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: CREAM, display: 'flex', flexDirection: 'column' }}>
      <PromoBanner style={{ flexShrink: 0, alignSelf: 'stretch', width: 'auto' }} />
      <NavBar3 style={{ flexShrink: 0, alignSelf: 'stretch', width: 'auto' }} />

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 24px' }}>
        <div style={{ textAlign: 'center', maxWidth: 480 }}>
          {/* Checkmark icon */}
          <div style={{
            width: 72, height: 72, borderRadius: '50%', backgroundColor: BURGUNDY,
            display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px',
          }}>
            <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h1 style={{ fontFamily: HEADING_FONT, fontWeight: 600, fontSize: 40, color: DARK, margin: '0 0 12px' }}>Thank You!</h1>
          <p style={{ fontFamily: FONT, fontSize: 16, color: GREY, margin: '0 0 8px', lineHeight: 1.5 }}>
            Your order has been placed successfully.
          </p>
          <p style={{ fontFamily: FONT, fontSize: 14, color: GREY, margin: '0 0 32px' }}>
            Order number: <strong style={{ color: DARK }}>{orderNumber}</strong>
          </p>
          <p style={{ fontFamily: FONT, fontSize: 14, color: GREY, margin: '0 0 40px', lineHeight: 1.5 }}>
            We&rsquo;ll send a confirmation to your email shortly. Your gift box is being prepared with love!
          </p>

          <button
            onClick={() => navigate('/shop')}
            style={{
              fontFamily: FONT, fontWeight: 600, fontSize: 16, color: '#fff',
              backgroundColor: BURGUNDY, border: 'none', borderRadius: 100, padding: '18px 40px',
              cursor: 'pointer', letterSpacing: '0.5px',
            }}
          >Back to Shop</button>
        </div>
      </div>
    </div>
  );
}
