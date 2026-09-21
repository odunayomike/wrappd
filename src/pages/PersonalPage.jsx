import PersonalGiftingPage from '../components/personal/PersonalGiftingPage.jsx';
import useDocumentHead from '../hooks/useDocumentHead.js';
import '../components/personal/fig-tokens.css';
import '../components/personal/fig-assets.css';

export default function PersonalPage() {
  useDocumentHead({
    title: 'Personal Gifting',
    description: 'Curated personal gift boxes for birthdays, love, and celebrations.',
  });
  return <PersonalGiftingPage />;
}
