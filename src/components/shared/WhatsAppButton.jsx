export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2340000000000"
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      data-whatsapp
      style={{
        position: 'fixed', bottom: 24, left: 24, width: 58, height: 60,
        borderRadius: 30, background: 'rgb(37,211,102)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        zIndex: 98, textDecoration: 'none',
      }}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.62 1.44 5.13L2 22l5.13-1.55c1.44.79 3.08 1.24 4.91 1.24 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.35-.5.05-1.02.24-3.42-.72-2.9-1.16-4.76-4.13-4.9-4.32-.14-.19-1.17-1.56-1.17-2.97 0-1.4.73-2.09 1-2.38.24-.26.55-.32.73-.32.2 0 .35 0 .5.01.16.01.38-.06.6.46.24.56.79 1.94.86 2.08.07.14.11.3.02.48-.09.18-.14.3-.28.46-.14.16-.29.36-.42.48-.14.13-.28.27-.12.55.16.28.72 1.19 1.55 1.93 1.07.94 1.98 1.24 2.26 1.38.28.14.44.12.6-.05.16-.16.68-.79.86-1.07.18-.28.36-.23.6-.14.24.09 1.52.72 1.78.85.26.13.43.19.5.3.06.11.06.65-.18 1.33z" />
      </svg>
    </a>
  );
}
