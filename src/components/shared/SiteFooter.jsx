import { WrappDLogo } from '../landing/WrappDLogo.jsx';

export default function SiteFooter() {
  return (
    <div data-section="footer" style={{
      position: "relative",
      backgroundColor: "var(--burgundy-deep-wine)",
      display: "flex",
      flexDirection: "column",
      gap: 60,
      padding: "80px 80px 40px 80px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch",
    }}>
      <div data-footer-cols style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 280,
          display: "flex",
          flexDirection: "column",
          gap: 24,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 109.585,
            height: 33.66,
            flexShrink: 0,
            color: "var(--primary-warm-tan)",
          }}>
            <WrappDLogo
              style={{ transform: "scale(0.529, 0.529)", transformOrigin: "0 0", color: "var(--primary-warm-tan)" }}
              property1={"monochrome light"}
            />
          </div>
          <span style={{
            position: "relative",
            opacity: 0.7,
            fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: 1.5,
            color: "var(--tan-ivory)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Wrapp'd is Australia's premium bespoke gift-boxing platform. Hand-packed with boutique local treats and hand-tied ribbons.</span>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 16,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 36,
              height: 36,
              borderRadius: 18,
              backgroundColor: "var(--primary-warm-tan)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{ position: "relative", width: 16, height: 16, overflow: "hidden", flexShrink: 0 }}>
                <svg width={13.334} height={13.334} viewBox="0 0 13.334 13.334" fill="none" style={{ position: "absolute", left: 1.333, top: 1.333, width: 13.334, height: 13.334, color: "var(--burgundy-deep-wine)" }}>
                  <path d={"M 10.334 2.5 C 10.058 2.5 9.834 2.724 9.834 3 C 9.834 3.276 10.058 3.5 10.334 3.5 L 10.334 3 L 10.334 2.5 Z M 10.341 3.5 C 10.617 3.5 10.841 3.276 10.841 3 C 10.841 2.724 10.617 2.5 10.341 2.5 L 10.341 3 L 10.341 3.5 Z M 9.334 6.247 L 8.839 6.321 L 9.334 6.247 Z M 7.087 4.001 L 7.014 4.495 L 7.087 4.001 Z M 10.334 3 L 10.334 3.5 L 10.341 3.5 L 10.341 3 L 10.341 2.5 L 10.334 2.5 L 10.334 3 Z M 3.334 0 L 3.334 0.5 L 10.001 0.5 L 10.001 0 L 10.001 -0.5 L 3.334 -0.5 L 3.334 0 Z M 10.001 0 L 10.001 0.5 C 11.566 0.5 12.834 1.769 12.834 3.334 L 13.334 3.334 L 13.834 3.334 C 13.834 1.216 12.118 -0.5 10.001 -0.5 L 10.001 0 Z M 13.334 3.334 L 12.834 3.334 L 12.834 10.001 L 13.334 10.001 L 13.834 10.001 L 13.834 3.334 L 13.334 3.334 Z M 13.334 10.001 L 12.834 10.001 C 12.834 11.566 11.566 12.834 10.001 12.834 L 10.001 13.334 L 10.001 13.834 C 12.118 13.834 13.834 12.118 13.834 10.001 L 13.334 10.001 Z M 10.001 13.334 L 10.001 12.834 L 3.334 12.834 L 3.334 13.334 L 3.334 13.834 L 10.001 13.834 L 10.001 13.334 Z M 3.334 13.334 L 3.334 12.834 C 1.769 12.834 0.5 11.566 0.5 10.001 L 0 10.001 L -0.5 10.001 C -0.5 12.118 1.216 13.834 3.334 13.834 L 3.334 13.334 Z M 0 10.001 L 0.5 10.001 L 0.5 3.334 L 0 3.334 L -0.5 3.334 L -0.5 10.001 L 0 10.001 Z M 0 3.334 L 0.5 3.334 C 0.5 1.769 1.769 0.5 3.334 0.5 L 3.334 0 L 3.334 -0.5 C 1.216 -0.5 -0.5 1.216 -0.5 3.334 L 0 3.334 Z M 9.334 6.247 L 8.839 6.321 C 8.906 6.772 8.829 7.232 8.619 7.637 L 9.063 7.867 L 9.507 8.097 C 9.814 7.506 9.926 6.833 9.828 6.174 L 9.334 6.247 Z M 9.063 7.867 L 8.619 7.637 C 8.409 8.041 8.077 8.369 7.67 8.574 L 7.895 9.021 L 8.12 9.467 C 8.715 9.168 9.2 8.688 9.507 8.097 L 9.063 7.867 Z M 7.895 9.021 L 7.67 8.574 C 7.263 8.779 6.802 8.85 6.352 8.778 L 6.272 9.272 L 6.193 9.765 C 6.85 9.871 7.525 9.767 8.12 9.467 L 7.895 9.021 Z M 6.272 9.272 L 6.352 8.778 C 5.902 8.706 5.486 8.493 5.164 8.171 L 4.81 8.524 L 4.457 8.878 C 4.928 9.349 5.535 9.659 6.193 9.765 L 6.272 9.272 Z M 4.81 8.524 L 5.164 8.171 C 4.841 7.848 4.629 7.433 4.556 6.983 L 4.063 7.062 L 3.569 7.142 C 3.675 7.799 3.986 8.407 4.457 8.878 L 4.81 8.524 Z M 4.063 7.062 L 4.556 6.983 C 4.484 6.533 4.555 6.071 4.76 5.664 L 4.314 5.44 L 3.867 5.215 C 3.568 5.81 3.463 6.484 3.569 7.142 L 4.063 7.062 Z M 4.314 5.44 L 4.76 5.664 C 4.965 5.257 5.293 4.925 5.698 4.715 L 5.468 4.271 L 5.237 3.828 C 4.646 4.134 4.167 4.62 3.867 5.215 L 4.314 5.44 Z M 5.468 4.271 L 5.698 4.715 C 6.102 4.505 6.563 4.428 7.014 4.495 L 7.087 4.001 L 7.16 3.506 C 6.501 3.408 5.829 3.521 5.237 3.828 L 5.468 4.271 Z M 7.087 4.001 L 7.014 4.495 C 7.474 4.563 7.899 4.778 8.228 5.106 L 8.582 4.753 L 8.935 4.399 C 8.455 3.919 7.832 3.606 7.16 3.506 L 7.087 4.001 Z M 8.582 4.753 L 8.228 5.106 C 8.557 5.435 8.771 5.861 8.839 6.321 L 9.334 6.247 L 9.828 6.174 C 9.729 5.502 9.416 4.88 8.935 4.399 L 8.582 4.753 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
            <div style={{
              position: "relative",
              width: 36,
              height: 36,
              borderRadius: 18,
              backgroundColor: "var(--primary-warm-tan)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{ position: "relative", width: 16, height: 16, overflow: "hidden", flexShrink: 0 }}>
                <svg width={7.333} height={13.334} viewBox="0 0 7.333 13.334" fill="none" style={{ position: "absolute", left: 4.667, top: 1.333, width: 7.333, height: 13.334, color: "var(--burgundy-deep-wine)" }}>
                  <path d={"M 7.333 0 L 7.833 0 L 7.833 -0.5 L 7.333 -0.5 L 7.333 0 Z M 5.333 0 L 5.333 -0.5 L 5.333 0 Z M 2 3.334 L 1.5 3.334 L 2 3.334 Z M 2 5.334 L 2 5.834 L 2.5 5.834 L 2.5 5.334 L 2 5.334 Z M 0 5.334 L 0 4.834 L -0.5 4.834 L -0.5 5.334 L 0 5.334 Z M 0 8.001 L -0.5 8.001 L -0.5 8.501 L 0 8.501 L 0 8.001 Z M 2 8.001 L 2.5 8.001 L 2.5 7.501 L 2 7.501 L 2 8.001 Z M 2 13.334 L 1.5 13.334 L 1.5 13.834 L 2 13.834 L 2 13.334 Z M 4.666 13.334 L 4.666 13.834 L 5.166 13.834 L 5.166 13.334 L 4.666 13.334 Z M 4.666 8.001 L 4.666 7.501 L 4.166 7.501 L 4.166 8.001 L 4.666 8.001 Z M 6.666 8.001 L 6.666 8.501 L 7.057 8.501 L 7.151 8.122 L 6.666 8.001 Z M 7.333 5.334 L 7.818 5.455 L 7.973 4.834 L 7.333 4.834 L 7.333 5.334 Z M 4.666 5.334 L 4.166 5.334 L 4.166 5.834 L 4.666 5.834 L 4.666 5.334 Z M 5.333 2.667 L 5.333 3.167 L 5.333 2.667 Z M 7.333 2.667 L 7.333 3.167 L 7.833 3.167 L 7.833 2.667 L 7.333 2.667 Z M 7.333 0 L 7.333 -0.5 L 5.333 -0.5 L 5.333 0 L 5.333 0.5 L 7.333 0.5 L 7.333 0 Z M 5.333 0 L 5.333 -0.5 C 4.316 -0.5 3.341 -0.096 2.623 0.623 L 2.976 0.976 L 3.33 1.33 C 3.861 0.799 4.582 0.5 5.333 0.5 L 5.333 0 Z M 2.976 0.976 L 2.623 0.623 C 1.904 1.342 1.5 2.317 1.5 3.334 L 2 3.334 L 2.5 3.334 C 2.5 2.582 2.798 1.861 3.33 1.33 L 2.976 0.976 Z M 2 3.334 L 1.5 3.334 L 1.5 5.334 L 2 5.334 L 2.5 5.334 L 2.5 3.334 L 2 3.334 Z M 2 5.334 L 2 4.834 L 0 4.834 L 0 5.334 L 0 5.834 L 2 5.834 L 2 5.334 Z M 0 5.334 L -0.5 5.334 L -0.5 8.001 L 0 8.001 L 0.5 8.001 L 0.5 5.334 L 0 5.334 Z M 0 8.001 L 0 8.501 L 2 8.501 L 2 8.001 L 2 7.501 L 0 7.501 L 0 8.001 Z M 2 8.001 L 1.5 8.001 L 1.5 13.334 L 2 13.334 L 2.5 13.334 L 2.5 8.001 L 2 8.001 Z M 2 13.334 L 2 13.834 L 4.666 13.834 L 4.666 13.334 L 4.666 12.834 L 2 12.834 L 2 13.334 Z M 4.666 13.334 L 5.166 13.334 L 5.166 8.001 L 4.666 8.001 L 4.166 8.001 L 4.166 13.334 L 4.666 13.334 Z M 4.666 8.001 L 4.666 8.501 L 6.666 8.501 L 6.666 8.001 L 6.666 7.501 L 4.666 7.501 L 4.666 8.001 Z M 6.666 8.001 L 7.151 8.122 L 7.818 5.455 L 7.333 5.334 L 6.848 5.213 L 6.181 7.879 L 6.666 8.001 Z M 7.333 5.334 L 7.333 4.834 L 4.666 4.834 L 4.666 5.334 L 4.666 5.834 L 7.333 5.834 L 7.333 5.334 Z M 4.666 5.334 L 5.166 5.334 L 5.166 3.334 L 4.666 3.334 L 4.166 3.334 L 4.166 5.334 L 4.666 5.334 Z M 4.666 3.334 L 5.166 3.334 C 5.166 3.289 5.184 3.247 5.215 3.216 L 4.862 2.862 L 4.508 2.509 C 4.289 2.727 4.166 3.024 4.166 3.334 L 4.666 3.334 Z M 4.862 2.862 L 5.215 3.216 C 5.246 3.184 5.289 3.167 5.333 3.167 L 5.333 2.667 L 5.333 2.167 C 5.024 2.167 4.727 2.29 4.508 2.509 L 4.862 2.862 Z M 5.333 2.667 L 5.333 3.167 L 7.333 3.167 L 7.333 2.667 L 7.333 2.167 L 5.333 2.167 L 5.333 2.667 Z M 7.333 2.667 L 7.833 2.667 L 7.833 0 L 7.333 0 L 6.833 0 L 6.833 2.667 L 7.333 2.667 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
            <div style={{
              position: "relative",
              width: 36,
              height: 36,
              borderRadius: 18,
              backgroundColor: "var(--primary-warm-tan)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{ position: "relative", width: 16, height: 16, overflow: "hidden", flexShrink: 0 }}>
                <svg width={13.334} height={13.334} viewBox="0 0 13.334 13.334" fill="none" style={{ position: "absolute", left: 1.333, top: 1.333, width: 13.334, height: 13.334, color: "var(--burgundy-deep-wine)" }}>
                  <path d={"M 9.834 4 C 9.834 3.724 9.61 3.5 9.334 3.5 C 9.058 3.5 8.834 3.724 8.834 4 L 9.334 4 L 9.834 4 Z M 9.334 7.334 L 8.834 7.334 L 9.334 7.334 Z M 13.334 7.334 L 13.834 7.334 L 13.334 7.334 Z M 10.968 12.401 C 11.188 12.235 11.233 11.922 11.068 11.701 C 10.902 11.48 10.588 11.435 10.368 11.601 L 10.668 12.001 L 10.968 12.401 Z M 9.334 4 L 8.834 4 L 8.834 7.334 L 9.334 7.334 L 9.834 7.334 L 9.834 4 L 9.334 4 Z M 9.334 7.334 L 8.834 7.334 C 8.834 7.997 9.097 8.633 9.566 9.102 L 9.92 8.748 L 10.273 8.395 C 9.992 8.113 9.834 7.732 9.834 7.334 L 9.334 7.334 Z M 9.92 8.748 L 9.566 9.102 C 10.035 9.571 10.671 9.834 11.334 9.834 L 11.334 9.334 L 11.334 8.834 C 10.936 8.834 10.555 8.676 10.273 8.395 L 9.92 8.748 Z M 11.334 9.334 L 11.334 9.834 C 11.997 9.834 12.633 9.571 13.102 9.102 L 12.749 8.748 L 12.395 8.395 C 12.114 8.676 11.732 8.834 11.334 8.834 L 11.334 9.334 Z M 12.749 8.748 L 13.102 9.102 C 13.571 8.633 13.834 7.997 13.834 7.334 L 13.334 7.334 L 12.834 7.334 C 12.834 7.732 12.676 8.113 12.395 8.395 L 12.749 8.748 Z M 13.334 7.334 L 13.834 7.334 L 13.834 6.667 L 13.334 6.667 L 12.834 6.667 L 12.834 7.334 L 13.334 7.334 Z M 13.334 6.667 L 13.834 6.667 C 13.834 5.053 13.289 3.485 12.287 2.219 L 11.895 2.53 L 11.503 2.84 C 12.365 3.929 12.834 5.278 12.834 6.667 L 13.334 6.667 Z M 11.895 2.53 L 12.287 2.219 C 11.285 0.953 9.885 0.063 8.314 -0.308 L 8.199 0.178 L 8.084 0.665 C 9.436 0.984 10.641 1.751 11.503 2.84 L 11.895 2.53 Z M 8.199 0.178 L 8.314 -0.308 C 6.743 -0.679 5.092 -0.509 3.63 0.176 L 3.841 0.628 L 4.053 1.081 C 5.312 0.492 6.732 0.346 8.084 0.665 L 8.199 0.178 Z M 3.841 0.628 L 3.63 0.176 C 2.167 0.86 0.979 2.018 0.257 3.462 L 0.704 3.686 L 1.151 3.909 C 1.772 2.667 2.795 1.67 4.053 1.081 L 3.841 0.628 Z M 0.704 3.686 L 0.257 3.462 C -0.465 4.906 -0.679 6.552 -0.349 8.132 L 0.141 8.03 L 0.63 7.928 C 0.346 6.568 0.53 5.152 1.151 3.909 L 0.704 3.686 Z M 0.141 8.03 L -0.349 8.132 C -0.019 9.713 0.835 11.135 2.075 12.17 L 2.395 11.786 L 2.716 11.402 C 1.649 10.512 0.914 9.288 0.63 7.928 L 0.141 8.03 Z M 2.395 11.786 L 2.075 12.17 C 3.314 13.204 4.867 13.79 6.481 13.832 L 6.494 13.332 L 6.507 12.832 C 5.118 12.796 3.782 12.292 2.716 11.402 L 2.395 11.786 Z M 6.494 13.332 L 6.481 13.832 C 8.095 13.874 9.676 13.37 10.968 12.401 L 10.668 12.001 L 10.368 11.601 C 9.256 12.435 7.896 12.868 6.507 12.832 L 6.494 13.332 Z M 9.334 6.667 L 8.834 6.667 C 8.834 7.864 7.864 8.834 6.667 8.834 L 6.667 9.334 L 6.667 9.834 C 8.416 9.834 9.834 8.416 9.834 6.667 L 9.334 6.667 Z M 6.667 9.334 L 6.667 8.834 C 5.47 8.834 4.5 7.864 4.5 6.667 L 4 6.667 L 3.5 6.667 C 3.5 8.416 4.918 9.834 6.667 9.834 L 6.667 9.334 Z M 4 6.667 L 4.5 6.667 C 4.5 5.47 5.47 4.5 6.667 4.5 L 6.667 4 L 6.667 3.5 C 4.918 3.5 3.5 4.918 3.5 6.667 L 4 6.667 Z M 6.667 4 L 6.667 4.5 C 7.864 4.5 8.834 5.47 8.834 6.667 L 9.334 6.667 L 9.834 6.667 C 9.834 4.918 8.416 3.5 6.667 3.5 L 6.667 4 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
            <div style={{
              position: "relative",
              width: 36,
              height: 36,
              borderRadius: 18,
              backgroundColor: "var(--primary-warm-tan)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{ position: "relative", width: 16, height: 16, overflow: "hidden", flexShrink: 0 }}>
                <svg width={13.334} height={12.667} viewBox="0 0 13.334 12.667" fill="none" style={{ position: "absolute", left: 1.333, top: 1.333, width: 13.334, height: 12.667, color: "var(--burgundy-deep-wine)" }}>
                  <path d={"M 9.334 4 L 9.334 3.5 L 9.334 4 Z M 13.334 12.667 L 13.334 13.167 L 13.834 13.167 L 13.834 12.667 L 13.334 12.667 Z M 10.668 12.667 L 10.168 12.667 L 10.168 13.167 L 10.668 13.167 L 10.668 12.667 Z M 8.001 12.667 L 8.001 13.167 L 8.501 13.167 L 8.501 12.667 L 8.001 12.667 Z M 5.334 12.667 L 4.834 12.667 L 4.834 13.167 L 5.334 13.167 L 5.334 12.667 Z M 0 4.667 L 0 4.167 L -0.5 4.167 L -0.5 4.667 L 0 4.667 Z M 2.667 4.667 L 3.167 4.667 L 3.167 4.167 L 2.667 4.167 L 2.667 4.667 Z M 2.667 12.667 L 2.667 13.167 L 3.167 13.167 L 3.167 12.667 L 2.667 12.667 Z M 0 12.667 L -0.5 12.667 L -0.5 13.167 L 0 13.167 L 0 12.667 Z M 9.334 4 L 9.334 4.5 C 10.262 4.5 11.153 4.869 11.809 5.525 L 12.163 5.172 L 12.516 4.818 C 11.672 3.974 10.528 3.5 9.334 3.5 L 9.334 4 Z M 12.163 5.172 L 11.809 5.525 C 12.466 6.182 12.834 7.072 12.834 8 L 13.334 8 L 13.834 8 C 13.834 6.807 13.36 5.662 12.516 4.818 L 12.163 5.172 Z M 13.334 8 L 12.834 8 L 12.834 12.667 L 13.334 12.667 L 13.834 12.667 L 13.834 8 L 13.334 8 Z M 13.334 12.667 L 13.334 12.167 L 10.668 12.167 L 10.668 12.667 L 10.668 13.167 L 13.334 13.167 L 13.334 12.667 Z M 10.668 12.667 L 11.168 12.667 L 11.168 8 L 10.668 8 L 10.168 8 L 10.168 12.667 L 10.668 12.667 Z M 10.668 8 L 11.168 8 C 11.168 7.514 10.974 7.048 10.631 6.704 L 10.277 7.057 L 9.923 7.411 C 10.08 7.567 10.168 7.779 10.168 8 L 10.668 8 Z M 10.277 7.057 L 10.631 6.704 C 10.287 6.36 9.82 6.167 9.334 6.167 L 9.334 6.667 L 9.334 7.167 C 9.555 7.167 9.767 7.255 9.923 7.411 L 10.277 7.057 Z M 9.334 6.667 L 9.334 6.167 C 8.848 6.167 8.381 6.36 8.038 6.704 L 8.391 7.057 L 8.745 7.411 C 8.901 7.255 9.113 7.167 9.334 7.167 L 9.334 6.667 Z M 8.391 7.057 L 8.038 6.704 C 7.694 7.048 7.501 7.514 7.501 8 L 8.001 8 L 8.501 8 C 8.501 7.779 8.588 7.567 8.745 7.411 L 8.391 7.057 Z M 8.001 8 L 7.501 8 L 7.501 12.667 L 8.001 12.667 L 8.501 12.667 L 8.501 8 L 8.001 8 Z M 8.001 12.667 L 8.001 12.167 L 5.334 12.167 L 5.334 12.667 L 5.334 13.167 L 8.001 13.167 L 8.001 12.667 Z M 5.334 12.667 L 5.834 12.667 L 5.834 8 L 5.334 8 L 4.834 8 L 4.834 12.667 L 5.334 12.667 Z M 5.334 8 L 5.834 8 C 5.834 7.072 6.203 6.182 6.859 5.525 L 6.505 5.172 L 6.152 4.818 C 5.308 5.662 4.834 6.807 4.834 8 L 5.334 8 Z M 6.505 5.172 L 6.859 5.525 C 7.515 4.869 8.406 4.5 9.334 4.5 L 9.334 4 L 9.334 3.5 C 8.141 3.5 6.996 3.974 6.152 4.818 L 6.505 5.172 Z M 0 4.667 L 0 5.167 L 2.667 5.167 L 2.667 4.667 L 2.667 4.167 L 0 4.167 L 0 4.667 Z M 2.667 4.667 L 2.167 4.667 L 2.167 12.667 L 2.667 12.667 L 3.167 12.667 L 3.167 4.667 L 2.667 4.667 Z M 2.667 12.667 L 2.667 12.167 L 0 12.167 L 0 12.667 L 0 13.167 L 2.667 13.167 L 2.667 12.667 Z M 0 12.667 L 0.5 12.667 L 0.5 4.667 L 0 4.667 L -0.5 4.667 L -0.5 12.667 L 0 12.667 Z M 2.667 1.333 L 2.167 1.333 C 2.167 1.794 1.794 2.167 1.333 2.167 L 1.333 2.667 L 1.333 3.167 C 2.346 3.167 3.167 2.346 3.167 1.333 L 2.667 1.333 Z M 1.333 2.667 L 1.333 2.167 C 0.873 2.167 0.5 1.794 0.5 1.333 L 0 1.333 L -0.5 1.333 C -0.5 2.346 0.321 3.167 1.333 3.167 L 1.333 2.667 Z M 0 1.333 L 0.5 1.333 C 0.5 0.873 0.873 0.5 1.333 0.5 L 1.333 0 L 1.333 -0.5 C 0.321 -0.5 -0.5 0.321 -0.5 1.333 L 0 1.333 Z M 1.333 0 L 1.333 0.5 C 1.794 0.5 2.167 0.873 2.167 1.333 L 2.667 1.333 L 3.167 1.333 C 3.167 0.321 2.346 -0.5 1.333 -0.5 L 1.333 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 80,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{ position: "relative", width: 120, display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start", flexWrap: "nowrap", flexShrink: 0 }}>
            <span style={{ position: "relative", fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontWeight: 700, fontSize: 14, lineHeight: "100%", color: "var(--tan-ivory)", flexShrink: 0, alignSelf: "stretch" }}>Shop</span>
            <span style={{ position: "relative", opacity: 0.7, fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontWeight: 400, fontSize: 13, lineHeight: "100%", color: "var(--tan-ivory)", flexShrink: 0, alignSelf: "stretch" }}>Best Sellers</span>
            <span style={{ position: "relative", opacity: 0.7, fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontWeight: 400, fontSize: 13, lineHeight: "100%", color: "var(--tan-ivory)", flexShrink: 0, alignSelf: "stretch" }}>Create Custom</span>
            <span style={{ position: "relative", opacity: 0.7, fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontWeight: 400, fontSize: 13, lineHeight: "100%", color: "var(--tan-ivory)", flexShrink: 0, alignSelf: "stretch" }}>Corporate Tiers</span>
          </div>
          <div style={{ position: "relative", width: 120, display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start", flexWrap: "nowrap", flexShrink: 0 }}>
            <span style={{ position: "relative", fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontWeight: 700, fontSize: 14, lineHeight: "100%", color: "var(--tan-ivory)", flexShrink: 0, alignSelf: "stretch" }}>Company</span>
            <span style={{ position: "relative", opacity: 0.7, fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontWeight: 400, fontSize: 13, lineHeight: "100%", color: "var(--tan-ivory)", flexShrink: 0, alignSelf: "stretch" }}>About Us</span>
            <span style={{ position: "relative", opacity: 0.7, fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontWeight: 400, fontSize: 13, lineHeight: "100%", color: "var(--tan-ivory)", flexShrink: 0, alignSelf: "stretch" }}>Sustainability</span>
            <span style={{ position: "relative", opacity: 0.7, fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontWeight: 400, fontSize: 13, lineHeight: "100%", color: "var(--tan-ivory)", flexShrink: 0, alignSelf: "stretch" }}>Careers</span>
          </div>
          <div style={{ position: "relative", width: 120, display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start", flexWrap: "nowrap", flexShrink: 0 }}>
            <span style={{ position: "relative", fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontWeight: 700, fontSize: 14, lineHeight: "100%", color: "var(--tan-ivory)", flexShrink: 0, alignSelf: "stretch" }}>Support</span>
            <span style={{ position: "relative", opacity: 0.7, fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontWeight: 400, fontSize: 13, lineHeight: "100%", color: "var(--tan-ivory)", flexShrink: 0, alignSelf: "stretch" }}>Track Shipment</span>
            <span style={{ position: "relative", opacity: 0.7, fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontWeight: 400, fontSize: 13, lineHeight: "100%", color: "var(--tan-ivory)", flexShrink: 0, alignSelf: "stretch" }}>FAQ &amp; Returns</span>
            <span style={{ position: "relative", opacity: 0.7, fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontWeight: 400, fontSize: 13, lineHeight: "100%", color: "var(--tan-ivory)", flexShrink: 0, alignSelf: "stretch" }}>Contact Support</span>
          </div>
        </div>
      </div>
      <svg height={1} viewBox="0 -0.500 1280 1" fill="none" style={{ position: "relative", height: 1, flexShrink: 0, alignSelf: "stretch", color: "var(--tan-ivory)" }}>
        <path d={"M 0 -0.5 L 0 0 L 1280 0 L 1280 -0.5 L 1280 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div data-footer-bottom style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{ position: "relative", opacity: 0.5, fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontWeight: 400, fontSize: 12, whiteSpace: "nowrap", lineHeight: "100%", color: "var(--tan-ivory)", flexShrink: 0 }}>© 2026 Wrapp'd. All rights reserved.</span>
        <div style={{ position: "relative", display: "flex", flexDirection: "row", gap: 24, alignItems: "center", flexWrap: "nowrap", flexShrink: 0 }}>
          <span style={{ position: "relative", opacity: 0.5, fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontWeight: 400, fontSize: 12, whiteSpace: "nowrap", lineHeight: "100%", color: "var(--tan-ivory)", flexShrink: 0 }}>Privacy Policy</span>
          <span style={{ position: "relative", opacity: 0.5, fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontWeight: 400, fontSize: 12, whiteSpace: "nowrap", lineHeight: "100%", color: "var(--tan-ivory)", flexShrink: 0 }}>Terms of Service</span>
          <span style={{ position: "relative", opacity: 0.5, fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontWeight: 400, fontSize: 12, whiteSpace: "nowrap", lineHeight: "100%", color: "var(--tan-ivory)", flexShrink: 0 }}>Carbon Neutral Policy</span>
        </div>
      </div>
    </div>
  );
}
