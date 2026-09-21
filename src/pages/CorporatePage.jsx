import CorporateGiftingPage from '../components/corporate/CorporateGiftingPage.jsx';
import useDocumentHead from '../hooks/useDocumentHead.js';
import '../components/corporate/fig-tokens.css';
import '../components/corporate/fig-assets.css';

export default function CorporatePage() {
  useDocumentHead({
    title: 'Corporate Gifting',
    description: 'Premium corporate gift boxes for teams, clients, and milestones.',
  });
  return <CorporateGiftingPage />;
}
