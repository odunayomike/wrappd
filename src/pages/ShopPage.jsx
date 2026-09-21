import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ShopGiftBoxesView from '../components/shop/ShopGiftBoxesView.jsx';
import useDocumentHead from '../hooks/useDocumentHead.js';
import '../components/shop/fig-tokens.css';
import '../components/shop/fig-assets.css';

const MAROON = 'rgb(106,30,46)';
const ACTIVE_BG = 'rgb(74,15,28)', INACTIVE_BG = 'rgb(245,237,224)';

export default function ShopPage() {
  useDocumentHead({
    title: 'Shop Gift Boxes',
    description: 'Browse curated gift boxes for birthdays, love, milestones and more.',
  });
  const rootRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Gift boxes / Shop items toggle
    const leaves = Array.from(root.querySelectorAll('span')).filter((el) => el.children.length === 0);
    const boxesTabLabel = leaves.find((el) => el.textContent.trim() === 'Gift boxes');
    const itemsTabLabel = leaves.find((el) => el.textContent.trim() === 'Shop items');
    const gridEls = Array.from(root.querySelectorAll('div')).filter((el) => getComputedStyle(el).display === 'grid');
    let onBoxesClick, onItemsClick;
    if (boxesTabLabel && itemsTabLabel && gridEls.length >= 2) {
      const boxesTab = boxesTabLabel.parentElement;
      const itemsTab = itemsTabLabel.parentElement;
      const productsBlock = gridEls[0].parentElement;
      const filterBar = productsBlock.previousElementSibling;
      const paint = (showBoxes) => {
        boxesTab.style.backgroundColor = showBoxes ? MAROON : 'rgba(0,0,0,0)';
        boxesTabLabel.style.color = showBoxes ? 'rgb(255,255,255)' : MAROON;
        itemsTab.style.backgroundColor = showBoxes ? 'rgba(0,0,0,0)' : MAROON;
        itemsTabLabel.style.color = showBoxes ? MAROON : 'rgb(255,255,255)';
        productsBlock.style.display = showBoxes ? '' : 'none';
        if (filterBar) filterBar.style.display = showBoxes ? '' : 'none';
      };
      onBoxesClick = (e) => { e.stopPropagation(); paint(true); };
      onItemsClick = (e) => { e.stopPropagation(); paint(false); };
      boxesTab.style.cursor = 'pointer';
      itemsTab.style.cursor = 'pointer';
      boxesTab.addEventListener('click', onBoxesClick);
      itemsTab.addEventListener('click', onItemsClick);
      paint(true);
    }

    // Filter chips
    const chipLabels = ['All boxes', 'Birthdays', 'Love and anniversaries', 'New babies', 'Congratulations', 'Self-care', 'Thank you'];
    const chips = chipLabels
      .map((label) => leaves.find((el) => el.textContent.trim() === label))
      .filter(Boolean)
      .map((span) => span.parentElement);
    const chipHandlers = [];
    if (chips.length === chipLabels.length) {
      chips.forEach((chip) => {
        chip.style.cursor = 'pointer';
        const handler = (e) => {
          e.stopPropagation();
          chips.forEach((c) => {
            const active = c === chip;
            c.style.backgroundColor = active ? ACTIVE_BG : INACTIVE_BG;
            c.firstElementChild.style.color = active ? 'rgb(255,255,255)' : 'rgb(74,15,28)';
          });
        };
        chip.addEventListener('click', handler);
        chipHandlers.push([chip, handler]);
      });
    }

    // Product card CTAs -> product page (resolve slug from card's product name)
    const nameToSlug = {
      'The Birthday Box': 'birthday-box',
      'The Love Box': 'love-box',
      'Welcome, Little One': 'welcome-little-one',
      'The Boss Move': 'boss-move',
      'The Soft Life Box': 'soft-life-box',
      'The Thank You Box': 'thank-you-box',
    };
    const productCtas = leaves.filter((el) => el.textContent.trim() === 'Select box');
    const productHandlers = [];
    productCtas.forEach((el) => {
      const card = el.closest('div');
      if (card) card.style.cursor = 'pointer';
      // Walk up to find a sibling/ancestor span with a known product name
      let slug = 'soft-life-box';
      let container = el.parentElement;
      for (let i = 0; i < 8 && container; i++, container = container.parentElement) {
        const nameSpan = Array.from(container.querySelectorAll('span')).find(
          (s) => s.children.length === 0 && nameToSlug[s.textContent.trim()]
        );
        if (nameSpan) { slug = nameToSlug[nameSpan.textContent.trim()]; break; }
      }
      const handler = (e) => { e.stopPropagation(); navigate('/product/' + slug); };
      el.addEventListener('click', handler);
      productHandlers.push([el, handler]);
    });

    // Extra cards -> shop (extras don't have dedicated product pages)
    const extraNames = ['Fresh flowers', 'Scented candles', 'Chocolates and treats', 'Something bubbly', 'Balloons', 'Handwritten cards'];
    const extraHandlers = [];
    extraNames.forEach((name) => {
      const span = leaves.find((el) => el.textContent.trim() === name);
      const card = span ? span.parentElement.parentElement : null;
      if (!card) return;
      card.style.cursor = 'pointer';
      const handler = (e) => { e.stopPropagation(); navigate('/product/soft-life-box'); };
      card.addEventListener('click', handler);
      extraHandlers.push([card, handler]);
    });

    return () => {
      if (boxesTabLabel && onBoxesClick) boxesTabLabel.parentElement.removeEventListener('click', onBoxesClick);
      if (itemsTabLabel && onItemsClick) itemsTabLabel.parentElement.removeEventListener('click', onItemsClick);
      chipHandlers.forEach(([el, h]) => el.removeEventListener('click', h));
      productHandlers.forEach(([el, h]) => el.removeEventListener('click', h));
      extraHandlers.forEach(([el, h]) => el.removeEventListener('click', h));
    };
  }, [navigate]);

  return (
    <div ref={rootRef}>
      <ShopGiftBoxesView />
    </div>
  );
}
