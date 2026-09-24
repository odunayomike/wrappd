import { Link } from 'react-router-dom';
import { WrappDLogo } from './WrappDLogo.jsx';

// figma node: 114:1558 NavBar
export function NavBar3(_p = {}) {
  const props = _p;
  return (
    <div data-navbar className={props.className} style={{
      width: "100%",
      backgroundColor: "var(--burgundy-deep-wine)",
      borderTop: "1px solid rgba(255,255,255,0.102)",
      borderRight: "1px solid rgba(255,255,255,0.102)",
      borderBottom: "1px solid rgba(255,255,255,0.102)",
      borderLeft: "1px solid rgba(255,255,255,0.102)",
      display: "flex",
      flexDirection: "row",
      padding: "20px 80px 20px 80px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <Link to="/" style={{
          position: "relative",
          width: 109.585,
          height: 33.66,
          flexShrink: 0,
          color: "var(--primary-warm-tan)",
          textDecoration: "none",
        }}>
        <WrappDLogo
          style={{ transform: "scale(0.529, 0.529)", transformOrigin: "0 0", color: "var(--primary-warm-tan)" }}
          property1={"monochrome light"}
        />
      </Link>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 32,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            opacity: 0.85,
            fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--tan-ivory)",
            flexShrink: 0,
          }}>{props.text1 ?? "Home"}</span>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              opacity: 0.85,
              fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--tan-ivory)",
              flexShrink: 0,
            }}>{props.text2 ?? "Services"}</span>
            <svg width={8} height={4.500} viewBox="0 0 8 4.500" fill="none" style={{
              position: "relative",
              width: 8,
              height: 4.5,
              flexShrink: 0,
              color: "var(--burgundy-rose)",
            }}>
              <path d={"M 0.374 -0.332 C 0.19 -0.539 -0.126 -0.557 -0.332 -0.374 C -0.539 -0.19 -0.557 0.126 -0.374 0.332 L 0 0 L 0.374 -0.332 Z M 4 4.5 L 3.626 4.832 C 3.721 4.939 3.857 5 4 5 C 4.143 5 4.279 4.939 4.374 4.832 L 4 4.5 Z M 8.374 0.332 C 8.557 0.126 8.539 -0.19 8.332 -0.374 C 8.126 -0.557 7.81 -0.539 7.626 -0.332 L 8 0 L 8.374 0.332 Z M 0 0 L -0.374 0.332 L 3.626 4.832 L 4 4.5 L 4.374 4.168 L 0.374 -0.332 L 0 0 Z M 4 4.5 L 4.374 4.832 L 8.374 0.332 L 8 0 L 7.626 -0.332 L 3.626 4.168 L 4 4.5 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <span style={{
            position: "relative",
            opacity: 0.85,
            fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--tan-ivory)",
            flexShrink: 0,
          }}>{props.text3 ?? "Shop"}</span>
          <span style={{
            position: "relative",
            opacity: 0.85,
            fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--tan-ivory)",
            flexShrink: 0,
          }}>{props.text4 ?? "Curate"}</span>
          <span style={{
            position: "relative",
            opacity: 0.85,
            fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--tan-ivory)",
            flexShrink: 0,
          }}>FAQ</span>
          <span style={{
            position: "relative",
            opacity: 0.85,
            fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--tan-ivory)",
            flexShrink: 0,
          }}>Blog</span>
          <span style={{
            position: "relative",
            opacity: 0.85,
            fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--tan-ivory)",
            flexShrink: 0,
          }}>Contact us</span>
        </div>
      </div>
      <div style={{
          position: "relative",
          width: 235,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 64,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 32,
              height: 32,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={31.203} height={32} viewBox="0 0 31.203 32" fill="none" style={{
                position: "absolute",
                left: 0.297,
                top: 0,
                width: 31.203,
                height: 32,
                color: "var(--primary-warm-tan)",
              }}>
                <path d={"M 2.703 7.5 C 2.464 6.938 2.13 6.443 1.703 6.016 C 1.276 5.589 0.776 5.25 0.203 5 C 0.766 4.76 1.26 4.427 1.688 4 C 2.115 3.573 2.453 3.073 2.703 2.5 C 2.943 3.063 3.276 3.557 3.703 3.984 C 4.13 4.411 4.63 4.75 5.203 5 C 4.641 5.24 4.146 5.573 3.719 6 C 3.292 6.427 2.953 6.927 2.703 7.5 Z M 28.703 8.5 C 28.943 9.063 29.276 9.557 29.703 9.984 C 30.13 10.411 30.63 10.75 31.203 11 C 30.641 11.24 30.146 11.573 29.719 12 C 29.292 12.427 28.953 12.927 28.703 13.5 C 28.464 12.938 28.13 12.443 27.703 12.016 C 27.276 11.589 26.776 11.25 26.203 11 C 26.766 10.76 27.26 10.427 27.688 10 C 28.115 9.573 28.453 9.073 28.703 8.5 Z M 22.703 10 C 22.214 8.865 21.542 7.87 20.688 7.016 C 19.833 6.161 18.839 5.49 17.703 5 C 18.839 4.51 19.833 3.839 20.688 2.984 C 21.542 2.13 22.214 1.135 22.703 0 C 23.193 1.135 23.865 2.13 24.719 2.984 C 25.573 3.839 26.568 4.51 27.703 5 C 26.568 5.49 25.573 6.161 24.719 7.016 C 23.865 7.87 23.193 8.865 22.703 10 Z M 22.703 3.031 C 22.12 3.771 21.464 4.427 20.734 5 C 21.464 5.583 22.12 6.24 22.703 6.969 C 23.276 6.24 23.932 5.583 24.672 5 C 23.932 4.427 23.276 3.771 22.703 3.031 Z M 11.375 12.266 C 10.885 12.266 10.427 12.167 10 11.969 C 9.573 11.771 9.193 11.495 8.859 11.141 C 8.526 10.786 8.276 10.391 8.109 9.953 C 7.943 9.516 7.849 9.052 7.828 8.563 C 7.828 7.948 7.953 7.375 8.203 6.844 C 8.453 6.313 8.797 5.844 9.234 5.438 C 9.672 5.031 10.161 4.714 10.703 4.484 C 11.245 4.255 11.828 4.135 12.453 4.125 C 13.328 4.125 14.104 4.307 14.781 4.672 C 15.458 5.036 16.036 5.526 16.516 6.141 C 16.995 6.755 17.349 7.443 17.578 8.203 C 17.807 8.964 17.932 9.75 17.953 10.563 C 17.953 11.656 17.776 12.677 17.422 13.625 C 17.068 14.573 16.583 15.443 15.969 16.234 C 15.354 17.026 14.62 17.714 13.766 18.297 C 12.911 18.88 12.005 19.385 11.047 19.813 C 10.953 19.854 10.833 19.875 10.688 19.875 C 10.448 19.875 10.245 19.792 10.078 19.625 C 9.911 19.458 9.828 19.25 9.828 19 C 9.828 18.625 10.005 18.354 10.359 18.188 C 11.151 17.813 11.88 17.411 12.547 16.984 C 13.214 16.557 13.802 16.063 14.313 15.5 C 14.823 14.938 15.234 14.302 15.547 13.594 C 15.859 12.885 16.068 12.063 16.172 11.125 C 16.182 11.021 16.188 10.922 16.188 10.828 C 16.188 10.734 16.193 10.63 16.203 10.516 C 16.203 9.974 16.125 9.427 15.969 8.875 C 15.813 8.323 15.578 7.823 15.266 7.375 C 14.953 6.927 14.563 6.568 14.094 6.297 C 13.625 6.026 13.078 5.885 12.453 5.875 C 12.099 5.875 11.75 5.943 11.406 6.078 C 11.063 6.214 10.755 6.406 10.484 6.656 C 10.214 6.906 9.995 7.188 9.828 7.5 C 9.661 7.813 9.578 8.167 9.578 8.563 C 9.578 8.802 9.625 9.036 9.719 9.266 C 9.813 9.495 9.938 9.703 10.094 9.891 C 10.25 10.078 10.443 10.229 10.672 10.344 C 10.901 10.458 11.141 10.516 11.391 10.516 C 11.641 10.516 11.839 10.479 11.984 10.406 C 12.13 10.333 12.25 10.229 12.344 10.094 C 12.438 9.958 12.51 9.828 12.563 9.703 C 12.615 9.578 12.677 9.448 12.75 9.313 C 12.823 9.177 12.911 9.078 13.016 9.016 C 13.12 8.953 13.271 8.911 13.469 8.891 C 13.708 8.891 13.917 8.979 14.094 9.156 C 14.271 9.333 14.359 9.542 14.359 9.781 C 14.359 9.833 14.349 9.901 14.328 9.984 C 14.245 10.318 14.109 10.625 13.922 10.906 C 13.734 11.188 13.505 11.427 13.234 11.625 C 12.964 11.823 12.677 11.979 12.375 12.094 C 12.073 12.208 11.74 12.266 11.375 12.266 Z M 24.99 14 C 25.077 14 25.159 14.034 25.22 14.095 L 28.704 17.592 C 29.092 17.981 29.091 18.612 28.703 19.001 C 28.314 19.389 27.685 19.39 27.295 19.003 L 25.703 17.422 L 25.703 29 C 25.703 30.657 24.36 32 22.703 32 L 6.703 32 C 5.046 32 3.703 30.657 3.703 29 L 3.703 17.422 L 2.111 19.003 C 1.721 19.39 1.092 19.389 0.704 19.001 C 0.315 18.612 0.314 17.981 0.702 17.592 L 4.186 14.095 C 4.247 14.034 4.33 14 4.416 14 L 12.953 14 C 12.589 14.427 12.188 14.802 11.75 15.125 C 11.313 15.448 10.839 15.74 10.328 16 L 5.703 16 L 5.703 27 C 5.703 28.657 7.046 30 8.703 30 L 20.703 30 C 22.36 30 23.703 28.657 23.703 27 L 23.703 16 L 18.531 16 C 18.708 15.677 18.87 15.349 19.016 15.016 C 19.161 14.682 19.292 14.344 19.406 14 L 24.99 14 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <div style={{
            position: "relative",
            borderRadius: 100,
            backgroundColor: "var(--primary-warm-tan)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "14px 28px 14px 28px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 15,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "0.500px",
              color: "var(--primary-burgundy)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Start Gifting</span>
            <div style={{
              position: "relative",
              width: 16,
              height: 16,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={9.334} height={9.334} viewBox="0 0 9.334 9.334" fill="none" style={{
                position: "absolute",
                left: 3.333,
                top: 3.333,
                width: 9.334,
                height: 9.334,
                color: "var(--primary-burgundy)",
              }}>
                <path d={"M 0 3.667 C -0.552 3.667 -1 4.115 -1 4.667 C -1 5.219 -0.552 5.667 0 5.667 L 0 4.667 L 0 3.667 Z M 9.334 4.667 L 10.042 5.374 L 10.749 4.667 L 10.042 3.96 L 9.334 4.667 Z M 5.374 -0.707 C 4.984 -1.098 4.351 -1.098 3.96 -0.707 C 3.57 -0.317 3.57 0.317 3.96 0.707 L 4.667 0 L 5.374 -0.707 Z M 3.96 8.627 C 3.57 9.018 3.57 9.651 3.96 10.042 C 4.351 10.432 4.984 10.432 5.374 10.042 L 4.667 9.334 L 3.96 8.627 Z M 0 4.667 L 0 5.667 L 9.334 5.667 L 9.334 4.667 L 9.334 3.667 L 0 3.667 L 0 4.667 Z M 9.334 4.667 L 10.042 3.96 L 5.374 -0.707 L 4.667 0 L 3.96 0.707 L 8.627 5.374 L 9.334 4.667 Z M 9.334 4.667 L 8.627 3.96 L 3.96 8.627 L 4.667 9.334 L 5.374 10.042 L 10.042 5.374 L 9.334 4.667 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
    </div>
  );
}
export default NavBar3;
