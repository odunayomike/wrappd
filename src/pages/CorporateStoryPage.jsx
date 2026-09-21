import WrappdCorporateSections from '../components/corporate-sections/WrappdCorporateSections.jsx';
import useDocumentHead from '../hooks/useDocumentHead.js';
import '../components/corporate-sections/fig-tokens.css';

export default function CorporateStoryPage() {
  useDocumentHead({
    title: 'Our Corporate Story',
    description: "How Wrapp'd helps companies gift with intention.",
  });
  return <WrappdCorporateSections />;
}
