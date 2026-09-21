import CurationForm from '../components/curation/CurationForm.jsx';
import useDocumentHead from '../hooks/useDocumentHead.js';
import '../components/curation/fig-tokens.css';

export default function CurationPage() {
  useDocumentHead({
    title: 'Curate Your Box',
    description: 'Build a custom gift box tailored to your recipient.',
  });
  return <CurationForm />;
}
