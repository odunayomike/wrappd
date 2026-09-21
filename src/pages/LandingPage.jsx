import WrappdLandingPage from '../components/landing/WrappdLandingPage.jsx';
import useDocumentHead from '../hooks/useDocumentHead.js';
import '../components/landing/fig-tokens.css';
import '../components/landing/fig-assets.css';

export default function LandingPage() {
  useDocumentHead({
    title: "Wrapp'd — Premium Gift Boxes in Nigeria",
    description: 'Thoughtful, hand-packed gift boxes delivered across Nigeria.',
  });
  return <WrappdLandingPage />;
}
