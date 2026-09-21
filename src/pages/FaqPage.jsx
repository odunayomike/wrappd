import { useEffect, useRef } from 'react';
import FaqPageView from '../components/faq/FaqPage.jsx';
import '../components/faq/fig-tokens.css';

// The Figma source only authored answer copy for one FAQ item ("How fast can
// you deliver?") — the rest are collapsed rows with no answer text anywhere
// in the file. All rows still toggle (icon flips + <-> x) for real click
// feedback; only the one with real copy shows/hides its answer.
export default function FaqPage() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const questions = [
      'How fast can you deliver?',
      'Do you deliver outside Lagos?',
      'What does delivery cost?',
      'How do I pay?',
      'What if something arrives damaged?',
      "Can I see the curated box before it's sent?",
      'Can the gift be anonymous?',
      "I'm ordering for a company - where do I start?",
    ];
    const handlers = [];
    questions.forEach((q) => {
      const span = Array.from(root.querySelectorAll('span')).find((el) => el.children.length === 0 && el.textContent.trim() === q);
      if (!span) return;
      const row = span.parentElement; // Question Row
      const item = row.parentElement; // Accordion Item wrapper
      const iconWrap = row.lastElementChild;
      const answer = Array.from(item.children).find((el) => el !== row && el.tagName === 'SPAN');
      let open = !!answer && getComputedStyle(answer).display !== 'none';
      iconWrap.style.cursor = 'pointer';
      row.style.cursor = 'pointer';
      const paint = () => {
        iconWrap.style.transform = open ? 'rotate(45deg)' : 'rotate(0deg)';
        iconWrap.style.transition = 'transform 0.15s ease';
        if (answer) answer.style.display = open ? '' : 'none';
      };
      const handler = (e) => { e.stopPropagation(); open = !open; paint(); };
      row.addEventListener('click', handler);
      handlers.push([row, handler]);
      paint();
    });

    return () => handlers.forEach(([el, h]) => el.removeEventListener('click', h));
  }, []);

  return (
    <div ref={rootRef}>
      <FaqPageView />
    </div>
  );
}
