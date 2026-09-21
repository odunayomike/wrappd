import ContactPageContent from '../components/contact/ContactPage.jsx';
import useDocumentHead from '../hooks/useDocumentHead.js';
import '../components/contact/fig-tokens.css';
import '../components/contact/fig-assets.css';

export default function ContactPage() {
  useDocumentHead({
    title: 'Contact Us',
    description: 'Get in touch with our Lagos studio team.',
  });
  return <ContactPageContent />;
}
