import { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { useCart } from '../../context/CartContext.jsx';
import SiteFooter from './SiteFooter.jsx';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Corporate Gifting', path: '/corporate' },
  { label: 'Personal Gifting', path: '/personal' },
  { label: 'Shop', path: '/shop' },
  { label: 'Curate', path: '/curate' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact us', path: '/contact' },
  { label: 'Cart', path: '/cart' },
];

function MobileDrawer({ open, onClose, onNavigate }) {
  return createPortal(
    <>
      <div
        className={`mobile-nav-overlay${open ? ' open' : ''}`}
        onClick={onClose}
      />
      <nav
        className={`mobile-nav-drawer${open ? ' open' : ''}`}
        aria-label="Mobile navigation"
      >
        <button className="mobile-nav-close" onClick={onClose} aria-label="Close menu">
          &times;
        </button>
        {NAV_LINKS.map(({ label, path }) => (
          <div
            key={path}
            className="nav-link"
            onClick={() => { onNavigate(path); onClose(); }}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') { onNavigate(path); onClose(); } }}
          >
            {label}
          </div>
        ))}
      </nav>
    </>,
    document.body
  );
}

// Wires the shared NavBar's text links to real routes since the generated
// NavBar3 component ships as static markup with no click handlers or <Link>s.
export default function SiteChrome({ children }) {
  const wrapRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { itemCount } = useCart();
  const [isMobile, setIsMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    const onChange = (e) => {
      setIsMobile(e.matches);
      if (!e.matches) setDrawerOpen(false);
    };
    setIsMobile(mql.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  // Toggle body scroll lock when drawer is open
  useEffect(() => {
    document.body.classList.toggle('nav-open', drawerOpen);
    return () => document.body.classList.remove('nav-open');
  }, [drawerOpen]);

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  // Inject hamburger button into the navbar on mobile
  useEffect(() => {
    if (!isMobile) return;
    const wrap = wrapRef.current;
    if (!wrap) return;

    const injectHamburger = () => {
      const navbar = wrap.querySelector('[data-navbar]');
      if (!navbar || navbar.querySelector('.hamburger-btn')) return true;

      const btn = document.createElement('button');
      btn.className = 'hamburger-btn';
      btn.setAttribute('aria-label', 'Open menu');
      btn.innerHTML = '<span></span><span></span><span></span>';
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        setDrawerOpen((prev) => !prev);
      });
      navbar.appendChild(btn);
      return true;
    };

    let tries = 0;
    const interval = setInterval(() => {
      if (injectHamburger() || ++tries > 40) clearInterval(interval);
    }, 150);

    return () => {
      clearInterval(interval);
      const btn = wrapRef.current?.querySelector('.hamburger-btn');
      if (btn) btn.remove();
    };
  }, [isMobile, location.pathname]);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const routes = [
      [/^home$/i, '/'],
      [/^curate$|let us curate|start my curation|set up my calendar/i, '/curate'],
      [/^faq$|good questions|faq & returns/i, '/faq'],
      [/corporate gifting|corporate story|gift your team|let's talk about your team|get started today/i, '/corporate'],
      [/personal gifting|for someone|loved one|send a personal gift|send a gift now|for you\b/i, '/personal'],
      [/^shop$|shop gifts|browse boxes|select box|select this box|explore experiences|view box|gift boxes/i, '/shop'],
      [/contact us|contact support|get in touch|talk to us|enquir|book consultation|book the conversation/i, '/contact'],
      [/start gifting|get started gifting/i, '/shop'],
      [/^cart$/i, '/cart'],
    ];

    const onClick = (e) => {
      if (e.target.closest('[data-services-dd]')) return;
      let el = e.target;
      for (let i = 0; i < 6 && el && el !== wrap; i++, el = el.parentElement) {
        const t = (el.textContent || '').trim();
        if (!t || t.length > 60) continue;
        if (/^services$/i.test(t)) return;
        for (const [re, path] of routes) {
          if (re.test(t)) { navigate(path); return; }
        }
      }
    };
    const onMove = (e) => {
      let el = e.target;
      for (let i = 0; i < 6 && el && el !== wrap; i++, el = el.parentElement) {
        const t = (el.textContent || '').trim();
        if (t && t.length <= 60 && routes.some(([re]) => re.test(t))) {
          e.target.style.cursor = 'pointer';
          return;
        }
      }
    };
    wrap.addEventListener('click', onClick);
    wrap.addEventListener('mouseover', onMove);

    const buildDropdown = () => {
      const leaves = Array.from(wrap.querySelectorAll('div,span,p')).filter(
        (el) => el.children.length === 0 && el.textContent.trim() === 'Services'
      );
      const target = leaves[0];
      if (!target || target.dataset.ddBuilt) return true;
      target.dataset.ddBuilt = '1';
      target.style.position = 'relative';
      target.style.cursor = 'pointer';
      const dd = document.createElement('div');
      dd.setAttribute('data-services-dd', '1');
      dd.style.cssText = 'position:absolute;top:100%;left:-8px;padding-top:10px;display:none;z-index:60;';
      const inner = document.createElement('div');
      inner.style.cssText = 'background:rgb(255,255,255);border-radius:14px;box-shadow:0 12px 32px rgba(74,15,28,0.18);padding:8px;min-width:210px;display:flex;flex-direction:column;gap:2px;font-family:Geist,sans-serif;font-size:14px;font-weight:400;white-space:nowrap;text-align:left;';
      [['Corporate Gifting', '/corporate'], ['Personal Gifting', '/personal']].forEach(([label, path]) => {
        const a = document.createElement('a');
        a.textContent = label;
        a.href = path;
        a.style.cssText = 'display:block;padding:10px 14px;border-radius:10px;color:rgb(74,15,28);text-decoration:none;';
        a.addEventListener('click', (e) => { e.preventDefault(); navigate(path); });
        a.addEventListener('mouseenter', () => { a.style.background = 'rgb(245,237,224)'; });
        a.addEventListener('mouseleave', () => { a.style.background = ''; });
        inner.appendChild(a);
      });
      dd.appendChild(inner);
      target.appendChild(dd);
      let n = target;
      while (n && n !== wrap) {
        if (getComputedStyle(n).position === 'static') n.style.position = 'relative';
        n.style.zIndex = '1000';
        n = n.parentElement;
      }
      let hideT;
      const show = () => { clearTimeout(hideT); dd.style.display = 'block'; };
      const hide = () => { hideT = setTimeout(() => { dd.style.display = 'none'; }, 200); };
      target.addEventListener('mouseenter', show);
      target.addEventListener('mouseleave', hide);
      return true;
    };
    let tries = 0;
    const ddInterval = setInterval(() => {
      if (buildDropdown() || ++tries > 40) clearInterval(ddInterval);
    }, 150);

    // Cart badge on gift-box icon (32x32 div with SVG child)
    const badgeId = '__wrappd-cart-badge';
    const injectBadge = () => {
      const divs = Array.from(wrap.querySelectorAll('div'));
      const giftIcon = divs.find(
        (d) => d.style.width === '32px' && d.style.height === '32px' && d.querySelector('svg')
      );
      if (!giftIcon) return false;
      giftIcon.style.position = 'relative';
      giftIcon.style.cursor = 'pointer';
      giftIcon.addEventListener('click', (e) => { e.stopPropagation(); navigate('/cart'); });

      // Remove old badge if any
      const old = giftIcon.querySelector('#' + badgeId);
      if (old) old.remove();

      if (itemCount > 0) {
        const badge = document.createElement('span');
        badge.id = badgeId;
        badge.textContent = itemCount > 99 ? '99+' : String(itemCount);
        badge.style.cssText = 'position:absolute;top:-4px;right:-6px;min-width:18px;height:18px;border-radius:9px;background:rgb(106,30,46);color:#fff;font-family:Geist,sans-serif;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;padding:0 4px;box-sizing:border-box;pointer-events:none;line-height:1;';
        giftIcon.appendChild(badge);
      }
      return true;
    };
    let badgeTries = 0;
    const badgeInterval = setInterval(() => {
      if (injectBadge() || ++badgeTries > 40) clearInterval(badgeInterval);
    }, 150);

    // Hide "Blog" nav link (no blog page yet)
    const hideBlog = () => {
      const leaves = Array.from(wrap.querySelectorAll('span')).filter(
        (el) => el.children.length === 0 && el.textContent.trim() === 'Blog'
      );
      if (!leaves.length) return false;
      leaves.forEach((el) => { el.style.display = 'none'; });
      return true;
    };
    let blogTries = 0;
    const blogInterval = setInterval(() => {
      if (hideBlog() || ++blogTries > 40) clearInterval(blogInterval);
    }, 150);

    // Fixed navbar on scroll
    let navbar = wrap.querySelector('[data-navbar]');
    let navPlaceholder = null;
    let navOffsetTop = 0;
    const initFixedNav = () => {
      if (navbar) return true;
      navbar = wrap.querySelector('[data-navbar]');
      return !!navbar;
    };
    const onScroll = () => {
      if (!navbar) return;
      if (!navPlaceholder) {
        // Measure initial offset once the navbar is in the DOM
        navOffsetTop = navbar.getBoundingClientRect().top + window.scrollY;
      }
      if (window.scrollY >= navOffsetTop) {
        if (!navbar.classList.contains('navbar-fixed')) {
          // Insert a placeholder to prevent layout shift
          navPlaceholder = document.createElement('div');
          navPlaceholder.style.height = navbar.offsetHeight + 'px';
          navbar.parentNode.insertBefore(navPlaceholder, navbar);
          navbar.classList.add('navbar-fixed');
        }
      } else {
        if (navbar.classList.contains('navbar-fixed')) {
          navbar.classList.remove('navbar-fixed');
          if (navPlaceholder) {
            navPlaceholder.remove();
            navPlaceholder = null;
          }
        }
      }
    };
    let fixedNavTries = 0;
    const fixedNavInterval = setInterval(() => {
      if (initFixedNav() || ++fixedNavTries > 40) clearInterval(fixedNavInterval);
    }, 150);
    window.addEventListener('scroll', onScroll, { passive: true });

    // Hide per-page inline footers (Figma-generated)
    const hideFooter = () => {
      const spans = Array.from(wrap.querySelectorAll('span'));
      const copy = spans.find((s) => s.textContent.trim() === '\u00A9 2026 Wrapp\'d. All rights reserved.');
      if (!copy) return false;
      // Walk up to find the footer container (dark bg div)
      let el = copy.parentElement;
      while (el && el !== wrap) {
        const bg = el.style.backgroundColor;
        if (bg === 'rgb(74, 15, 28)' || bg === 'rgb(74,15,28)' || bg === 'var(--burgundy-deep-wine)') {
          el.style.display = 'none';
          return true;
        }
        el = el.parentElement;
      }
      return false;
    };
    let footerTries = 0;
    const footerInterval = setInterval(() => {
      if (hideFooter() || ++footerTries > 40) clearInterval(footerInterval);
    }, 150);

    return () => {
      wrap.removeEventListener('click', onClick);
      wrap.removeEventListener('mouseover', onMove);
      window.removeEventListener('scroll', onScroll);
      clearInterval(ddInterval);
      clearInterval(badgeInterval);
      clearInterval(blogInterval);
      clearInterval(footerInterval);
      clearInterval(fixedNavInterval);
      if (navbar) navbar.classList.remove('navbar-fixed');
      if (navPlaceholder) navPlaceholder.remove();
    };
  }, [navigate, location.pathname, itemCount]);

  return (
    <div ref={wrapRef} data-site style={{ width: '100%', overflowX: 'hidden' }}>
      {children}
      <SiteFooter />
      {isMobile && (
        <MobileDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          onNavigate={navigate}
        />
      )}
    </div>
  );
}
