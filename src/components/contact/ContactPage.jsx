import { NavBar3 } from './NavBar3.jsx';
import { PromoBanner } from './PromoBanner.jsx';
import { WrappDLogo } from './WrappDLogo.jsx';

// figma node: 88:1693 contact-page
export function ContactPage(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "100%",
      minHeight: 1024,
      backgroundColor: "var(--tan-ivory)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <PromoBanner style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }} />
        <NavBar3 style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }} />
      </div>
      <div data-section="hero" style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "var(--tan-ivory)",
        display: "flex",
        flexDirection: "column",
        gap: 24,
        padding: "120px 80px 80px 80px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 100,
            backgroundColor: "var(--tan-cream)",
            display: "flex",
            flexDirection: "row",
            padding: "6px 14px 6px 14px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "1.500px",
              color: "var(--primary-burgundy)",
              textTransform: "uppercase",
              flexShrink: 0,
            }}>SAY HELLO</span>
          </div>
          <span data-heading="hero" style={{
            position: "relative",
            fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 72,
            textAlign: "center",
            lineHeight: 1.0499999523162842,
            letterSpacing: "-1px",
            color: "var(--primary-burgundy)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>We'd love to hear from you</span>
          <span data-text-block style={{
            position: "relative",
            width: 680,
            opacity: 0.8,
            fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 18,
            textAlign: "center",
            lineHeight: 1.600000023841858,
            color: "var(--burgundy-deep-wine)",
            flexShrink: 0,
          }}>Have a question about custom curations, shipping times, or corporate options? Drop us a line and our Lagos studio team will get right back to you.</span>
        </div>
      </div>
      <div data-section="split" style={{
        position: "relative",
        backgroundColor: "var(--tan-ivory)",
        display: "flex",
        flexDirection: "row",
        gap: 80,
        padding: "40px 80px 100px 80px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          borderRadius: 24,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1.500px var(--tan-cream)",
          display: "flex",
          flexDirection: "column",
          gap: 32,
          padding: "48px 48px 48px 48px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 36,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--burgundy-deep-wine)",
              flexShrink: 0,
            }}>Send a Message</span>
            <span style={{
              position: "relative",
              fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: 18,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--burgundy-rose)",
              flexShrink: 0,
            }}>"Tell us what you're celebrating."</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--burgundy-deep-wine)",
                flexShrink: 0,
              }}>Full Name</span>
              <input placeholder="e.g. Sarah Jenkins" style={{
                position: "relative",
                height: 48,
                borderRadius: 8,
                backgroundColor: "var(--tan-ivory)",
                boxShadow: "inset 0 0 0 1px var(--tan-cream)",
                boxSizing: "border-box",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "100%",
                border: "none",
                outline: "none",
                resize: "none",
                padding: "16px",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 15,
                lineHeight: "100%",
                color: "var(--primary-burgundy)",
              }} />
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 16,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexGrow: 1,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "var(--burgundy-deep-wine)",
                  flexShrink: 0,
                }}>Email Address</span>
                <input placeholder="olamide@example.com" style={{
                position: "relative",
                height: 48,
                borderRadius: 8,
                backgroundColor: "var(--tan-ivory)",
                boxShadow: "inset 0 0 0 1px var(--tan-cream)",
                boxSizing: "border-box",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "100%",
                border: "none",
                outline: "none",
                resize: "none",
                padding: "16px",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 15,
                lineHeight: "100%",
                color: "var(--primary-burgundy)",
              }} />
              </div>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexGrow: 1,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "var(--burgundy-deep-wine)",
                  flexShrink: 0,
                }}>Phone Number</span>
                <input placeholder="+234 900 000 000" style={{
                position: "relative",
                height: 48,
                borderRadius: 8,
                backgroundColor: "var(--tan-ivory)",
                boxShadow: "inset 0 0 0 1px var(--tan-cream)",
                boxSizing: "border-box",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "100%",
                border: "none",
                outline: "none",
                resize: "none",
                padding: "16px",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 15,
                lineHeight: "100%",
                color: "var(--primary-burgundy)",
              }} />
              </div>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--burgundy-deep-wine)",
                flexShrink: 0,
              }}>Inquiry Type</span>
              <select defaultValue="" style={{
                position: "relative",
                height: 48,
                borderRadius: 8,
                backgroundColor: "var(--tan-ivory)",
                boxShadow: "inset 0 0 0 1px var(--tan-cream)",
                padding: "0 16px",
                boxSizing: "border-box",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "100%",
                border: "none",
                outline: "none",
                appearance: "auto",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 15,
                lineHeight: "100%",
                color: "var(--primary-burgundy)",
              }}>
                <option value="" disabled>Select an option</option>
                <option value="personal">Personal</option>
                <option value="corporate">Corporate</option>
                <option value="custom">Custom Curation</option>
              </select>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--burgundy-deep-wine)",
                flexShrink: 0,
              }}>Your Message</span>
              <textarea placeholder="Share your gifting ideas or ask us anything..." rows={4} style={{
                position: "relative",
                height: 120,
                borderRadius: 8,
                backgroundColor: "var(--tan-ivory)",
                boxShadow: "inset 0 0 0 1px var(--tan-cream)",
                boxSizing: "border-box",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "100%",
                border: "none",
                outline: "none",
                resize: "none",
                padding: "16px",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 15,
                lineHeight: "100%",
                color: "var(--primary-burgundy)",
              }} />
            </div>
          </div>
          <div style={{
            position: "relative",
            borderRadius: 100,
            backgroundColor: "var(--burgundy-deep-wine)",
            display: "flex",
            flexDirection: "row",
            gap: 20,
            padding: "16px 32px 16px 32px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            cursor: "pointer",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "0.500px",
              color: "var(--tan-ivory)",
              flexShrink: 0,
            }}>Book Consultation</span>
            <div style={{
              position: "relative",
              width: 16,
              height: 16,
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <svg width={16} viewBox="0 0 16 16" fill="none" style={{
                position: "relative",
                width: 16,
                flexShrink: 0,
                alignSelf: "stretch",
                color: "var(--tan-ivory)",
              }}>
                <path d={"M 0 7 C -0.552 7 -1 7.448 -1 8 C -1 8.552 -0.552 9 0 9 L 0 8 L 0 7 Z M 16 8 L 16.707 8.707 L 17.414 8 L 16.707 7.293 L 16 8 Z M 8.707 -0.707 C 8.317 -1.098 7.683 -1.098 7.293 -0.707 C 6.902 -0.317 6.902 0.317 7.293 0.707 L 8 0 L 8.707 -0.707 Z M 7.293 15.293 C 6.902 15.683 6.902 16.317 7.293 16.707 C 7.683 17.098 8.317 17.098 8.707 16.707 L 8 16 L 7.293 15.293 Z M 0 8 L 0 9 L 16 9 L 16 8 L 16 7 L 0 7 L 0 8 Z M 16 8 L 16.707 7.293 L 8.707 -0.707 L 8 0 L 7.293 0.707 L 15.293 8.707 L 16 8 Z M 16 8 L 15.293 7.293 L 7.293 15.293 L 8 16 L 8.707 16.707 L 16.707 8.707 L 16 8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 440,
          display: "flex",
          flexDirection: "column",
          gap: 48,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 24,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 36,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--burgundy-deep-wine)",
              flexShrink: 0,
            }}>Our Studio</span>
            <span style={{
              position: "relative",
              fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              lineHeight: 1.600000023841858,
              color: "var(--primary-burgundy)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Nestled in the heart of Lagos, our creative packing studio is where we custom curate, wrap, and hand-tie every single premium box.</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 24,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 16,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: "rgba(106,30,46,0.102)",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 24,
                  height: 24,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "relative",
                    width: 24,
                    overflow: "hidden",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <svg width={15.998} height={20.002} viewBox="0 0 15.998 20.002" fill="none" style={{
                      position: "absolute",
                      left: 4.001,
                      top: 1.999,
                      width: 15.998,
                      height: 20.002,
                      color: "var(--primary-burgundy)",
                    }}>
                      <path d={"M 15.998 8.001 L 16.998 8.001 L 15.998 8.001 Z M 8.6 19.801 L 9.201 20.6 L 9.228 20.58 L 9.254 20.558 L 8.6 19.801 Z M 7.999 20.002 L 7.999 21.002 L 7.999 20.002 Z M 7.398 19.801 L 6.745 20.558 L 6.77 20.58 L 6.797 20.6 L 7.398 19.801 Z M 7.999 0 L 7.999 -1 L 7.999 0 Z M 15.998 8.001 L 14.998 8.001 C 14.998 10.16 13.782 12.488 12.201 14.565 C 10.643 16.613 8.851 18.263 7.947 19.044 L 8.6 19.801 L 9.254 20.558 C 10.209 19.733 12.116 17.98 13.792 15.777 C 15.446 13.604 16.998 10.835 16.998 8.001 L 15.998 8.001 Z M 8.6 19.801 L 7.999 19.002 L 7.999 19.002 L 7.999 20.002 L 7.999 21.002 C 8.433 21.002 8.855 20.861 9.201 20.6 L 8.6 19.801 Z M 7.999 20.002 L 7.999 19.002 L 7.999 19.002 L 7.398 19.801 L 6.797 20.6 C 7.144 20.861 7.566 21.002 7.999 21.002 L 7.999 20.002 Z M 7.398 19.801 L 8.052 19.044 C 7.147 18.263 5.355 16.613 3.797 14.565 C 2.217 12.488 1 10.16 1 8.001 L 0 8.001 L -1 8.001 C -1 10.835 0.553 13.604 2.206 15.777 C 3.882 17.98 5.79 19.733 6.745 20.558 L 7.398 19.801 Z M 0 8.001 L 1 8.001 C 1 6.144 1.737 4.363 3.05 3.05 L 2.343 2.343 L 1.636 1.636 C -0.052 3.324 -1 5.614 -1 8.001 L 0 8.001 Z M 2.343 2.343 L 3.05 3.05 C 4.363 1.738 6.143 1 7.999 1 L 7.999 0 L 7.999 -1 C 5.612 -1 3.323 -0.052 1.636 1.636 L 2.343 2.343 Z M 7.999 0 L 7.999 1 C 9.855 1 11.636 1.738 12.948 3.05 L 13.655 2.343 L 14.363 1.636 C 12.675 -0.052 10.386 -1 7.999 -1 L 7.999 0 Z M 13.655 2.343 L 12.948 3.05 C 14.261 4.363 14.998 6.144 14.998 8.001 L 15.998 8.001 L 16.998 8.001 C 16.998 5.614 16.05 3.324 14.363 1.636 L 13.655 2.343 Z M 10.999 8.001 L 9.999 8.001 C 9.999 9.106 9.103 10.001 7.999 10.001 L 7.999 11.001 L 7.999 12.001 C 10.208 12.001 11.999 10.21 11.999 8.001 L 10.999 8.001 Z M 7.999 11.001 L 7.999 10.001 C 6.895 10.001 5.999 9.106 5.999 8.001 L 4.999 8.001 L 3.999 8.001 C 3.999 10.21 5.79 12.001 7.999 12.001 L 7.999 11.001 Z M 4.999 8.001 L 5.999 8.001 C 5.999 6.896 6.895 6 7.999 6 L 7.999 5 L 7.999 4 C 5.79 4 3.999 5.792 3.999 8.001 L 4.999 8.001 Z M 7.999 5 L 7.999 6 C 9.103 6 9.999 6.896 9.999 8.001 L 10.999 8.001 L 11.999 8.001 C 11.999 5.792 10.208 4 7.999 4 L 7.999 5 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  letterSpacing: "1px",
                  color: "var(--burgundy-rose)",
                  textTransform: "uppercase",
                  flexShrink: 0,
                }}>Address</span>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "var(--burgundy-deep-wine)",
                  flexShrink: 0,
                }}>123 Gift Lane, Victoria Island, Lagos</span>
              </div>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 16,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: "rgba(106,30,46,0.102)",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 24,
                  height: 24,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <svg width={24} viewBox="0 0 24 24" fill="none" style={{
                    position: "relative",
                    width: 24,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    color: "var(--primary-burgundy)",
                  }}>
                    <path d={"M 14.198 17.482 L 13.317 19.277 L 13.34 19.288 L 13.364 19.299 L 14.198 17.482 Z M 14.99 17.555 L 15.475 19.496 L 15.475 19.496 L 14.99 17.555 Z M 15.654 17.118 L 14.064 15.904 L 14.063 15.907 L 15.654 17.118 Z M 16.08 16.56 L 17.67 17.774 L 17.675 17.767 L 17.68 17.76 L 16.08 16.56 Z M 16.927 15.853 L 17.821 17.642 L 17.821 17.642 L 16.927 15.853 Z M 23.297 16.303 L 24.711 14.889 L 24.711 14.889 L 23.297 16.303 Z M 23.297 23.297 L 24.711 24.711 L 24.711 24.711 L 23.297 23.297 Z M 6.326 17.674 L 7.741 16.259 L 7.741 16.259 L 6.326 17.674 Z M 0.703 0.703 L -0.711 -0.711 L -0.711 -0.711 L 0.703 0.703 Z M 7.697 0.703 L 9.111 -0.711 L 9.111 -0.711 L 7.697 0.703 Z M 8.147 7.073 L 9.935 7.968 L 9.935 7.968 L 8.147 7.073 Z M 7.44 7.92 L 8.64 9.52 L 8.64 9.52 L 7.44 7.92 Z M 6.878 8.341 L 5.678 6.741 L 5.672 6.746 L 5.665 6.752 L 6.878 8.341 Z M 6.439 9.018 L 8.385 9.479 L 8.385 9.479 L 6.439 9.018 Z M 6.528 9.821 L 4.73 10.697 L 4.734 10.704 L 6.528 9.821 Z M 14.198 17.482 L 13.364 19.299 C 14.025 19.603 14.769 19.672 15.475 19.496 L 14.99 17.555 L 14.505 15.615 C 14.682 15.571 14.868 15.588 15.033 15.664 L 14.198 17.482 Z M 14.99 17.555 L 15.475 19.496 C 16.18 19.319 16.805 18.908 17.245 18.329 L 15.654 17.118 L 14.063 15.907 C 14.173 15.762 14.329 15.659 14.505 15.615 L 14.99 17.555 Z M 15.654 17.118 L 17.244 18.332 L 17.67 17.774 L 16.08 16.56 L 14.49 15.346 L 14.064 15.904 L 15.654 17.118 Z M 16.08 16.56 L 17.68 17.76 C 17.717 17.71 17.766 17.67 17.821 17.642 L 16.927 15.853 L 16.032 14.065 C 15.421 14.37 14.89 14.814 14.48 15.36 L 16.08 16.56 Z M 16.927 15.853 L 17.821 17.642 C 17.877 17.614 17.938 17.6 18 17.6 L 18 15.6 L 18 13.6 C 17.317 13.6 16.643 13.759 16.032 14.065 L 16.927 15.853 Z M 18 15.6 L 18 17.6 L 21.6 17.6 L 21.6 15.6 L 21.6 13.6 L 18 13.6 L 18 15.6 Z M 21.6 15.6 L 21.6 17.6 C 21.706 17.6 21.808 17.642 21.883 17.717 L 23.297 16.303 L 24.711 14.889 C 23.886 14.064 22.767 13.6 21.6 13.6 L 21.6 15.6 Z M 23.297 16.303 L 21.883 17.717 C 21.958 17.792 22 17.894 22 18 L 24 18 L 26 18 C 26 16.833 25.536 15.714 24.711 14.889 L 23.297 16.303 Z M 24 18 L 22 18 L 22 21.6 L 24 21.6 L 26 21.6 L 26 18 L 24 18 Z M 24 21.6 L 22 21.6 C 22 21.706 21.958 21.808 21.883 21.883 L 23.297 23.297 L 24.711 24.711 C 25.536 23.886 26 22.767 26 21.6 L 24 21.6 Z M 23.297 23.297 L 21.883 21.883 C 21.808 21.958 21.706 22 21.6 22 L 21.6 24 L 21.6 26 C 22.767 26 23.886 25.536 24.711 24.711 L 23.297 23.297 Z M 21.6 24 L 21.6 22 C 16.402 22 11.416 19.935 7.741 16.259 L 6.326 17.674 L 4.912 19.088 C 9.338 23.514 15.341 26 21.6 26 L 21.6 24 Z M 6.326 17.674 L 7.741 16.259 C 4.065 12.584 2 7.598 2 2.4 L 0 2.4 L -2 2.4 C -2 8.659 0.486 14.662 4.912 19.088 L 6.326 17.674 Z M 0 2.4 L 2 2.4 C 2 2.294 2.042 2.192 2.117 2.117 L 0.703 0.703 L -0.711 -0.711 C -1.536 0.114 -2 1.233 -2 2.4 L 0 2.4 Z M 0.703 0.703 L 2.117 2.117 C 2.192 2.042 2.294 2 2.4 2 L 2.4 0 L 2.4 -2 C 1.233 -2 0.114 -1.536 -0.711 -0.711 L 0.703 0.703 Z M 2.4 0 L 2.4 2 L 6 2 L 6 0 L 6 -2 L 2.4 -2 L 2.4 0 Z M 6 0 L 6 2 C 6.106 2 6.208 2.042 6.283 2.117 L 7.697 0.703 L 9.111 -0.711 C 8.286 -1.536 7.167 -2 6 -2 L 6 0 Z M 7.697 0.703 L 6.283 2.117 C 6.358 2.192 6.4 2.294 6.4 2.4 L 8.4 2.4 L 10.4 2.4 C 10.4 1.233 9.936 0.114 9.111 -0.711 L 7.697 0.703 Z M 8.4 2.4 L 6.4 2.4 L 6.4 6 L 8.4 6 L 10.4 6 L 10.4 2.4 L 8.4 2.4 Z M 8.4 6 L 6.4 6 C 6.4 6.062 6.386 6.123 6.358 6.179 L 8.147 7.073 L 9.935 7.968 C 10.241 7.357 10.4 6.683 10.4 6 L 8.4 6 Z M 8.147 7.073 L 6.358 6.179 C 6.33 6.234 6.29 6.283 6.24 6.32 L 7.44 7.92 L 8.64 9.52 C 9.186 9.11 9.63 8.579 9.935 7.968 L 8.147 7.073 Z M 7.44 7.92 L 6.24 6.32 L 5.678 6.741 L 6.878 8.341 L 8.078 9.941 L 8.64 9.52 L 7.44 7.92 Z M 6.878 8.341 L 5.665 6.752 C 5.077 7.2 4.663 7.838 4.493 8.558 L 6.439 9.018 L 8.385 9.479 C 8.343 9.659 8.239 9.819 8.092 9.931 L 6.878 8.341 Z M 6.439 9.018 L 4.493 8.558 C 4.322 9.277 4.406 10.033 4.73 10.697 L 6.528 9.821 L 8.326 8.944 C 8.407 9.11 8.428 9.299 8.385 9.479 L 6.439 9.018 Z M 6.528 9.821 L 4.734 10.704 C 6.569 14.432 9.587 17.446 13.317 19.277 L 14.198 17.482 L 15.08 15.686 C 12.143 14.245 9.767 11.872 8.322 8.937 L 6.528 9.821 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  letterSpacing: "1px",
                  color: "var(--burgundy-rose)",
                  textTransform: "uppercase",
                  flexShrink: 0,
                }}>Phone</span>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "var(--burgundy-deep-wine)",
                  flexShrink: 0,
                }}>+61 3 9876 5432</span>
              </div>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 16,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: "rgba(106,30,46,0.102)",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 24,
                  height: 24,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "relative",
                    width: 24,
                    overflow: "hidden",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <svg width={20.002} height={15.998} viewBox="0 0 20.002 15.998" fill="none" style={{
                      position: "absolute",
                      left: 1.999,
                      top: 4.001,
                      width: 20.002,
                      height: 15.998,
                      color: "var(--primary-burgundy)",
                    }}>
                      <path d={"M 20.539 3.843 C 21.005 3.547 21.142 2.928 20.845 2.463 C 20.548 1.997 19.93 1.86 19.464 2.156 L 20.002 3 L 20.539 3.843 Z M 11.01 8.726 L 11.512 9.591 L 11.53 9.581 L 11.547 9.57 L 11.01 8.726 Z M 10.005 8.997 L 10.005 7.997 L 10.005 8.997 Z M 9.001 8.726 L 8.464 9.57 L 8.481 9.581 L 8.499 9.591 L 9.001 8.726 Z M 0.537 2.156 C 0.071 1.86 -0.547 1.997 -0.844 2.463 C -1.14 2.929 -1.003 3.547 -0.537 3.843 L 0 3 L 0.537 2.156 Z M 20.002 3 L 19.464 2.156 L 10.473 7.883 L 11.01 8.726 L 11.547 9.57 L 20.539 3.843 L 20.002 3 Z M 11.01 8.726 L 10.508 7.861 C 10.355 7.95 10.182 7.997 10.005 7.997 L 10.005 8.997 L 10.005 9.997 C 10.535 9.997 11.054 9.857 11.512 9.591 L 11.01 8.726 Z M 10.005 8.997 L 10.005 7.997 C 9.829 7.997 9.655 7.95 9.503 7.861 L 9.001 8.726 L 8.499 9.591 C 8.956 9.857 9.476 9.997 10.005 9.997 L 10.005 8.997 Z M 9.001 8.726 L 9.538 7.882 L 0.537 2.156 L 0 3 L -0.537 3.843 L 8.464 9.57 L 9.001 8.726 Z M 2 0 L 2 1 L 18.001 1 L 18.001 0 L 18.001 -1 L 2 -1 L 2 0 Z M 18.001 0 L 18.001 1 C 18.554 1 19.002 1.448 19.002 2 L 20.002 2 L 21.002 2 C 21.002 0.343 19.658 -1 18.001 -1 L 18.001 0 Z M 20.002 2 L 19.002 2 L 19.002 13.999 L 20.002 13.999 L 21.002 13.999 L 21.002 2 L 20.002 2 Z M 20.002 13.999 L 19.002 13.999 C 19.002 14.551 18.554 14.998 18.001 14.998 L 18.001 15.998 L 18.001 16.998 C 19.658 16.998 21.002 15.656 21.002 13.999 L 20.002 13.999 Z M 18.001 15.998 L 18.001 14.998 L 2 14.998 L 2 15.998 L 2 16.998 L 18.001 16.998 L 18.001 15.998 Z M 2 15.998 L 2 14.998 C 1.448 14.998 1 14.551 1 13.999 L 0 13.999 L -1 13.999 C -1 15.656 0.343 16.998 2 16.998 L 2 15.998 Z M 0 13.999 L 1 13.999 L 1 2 L 0 2 L -1 2 L -1 13.999 L 0 13.999 Z M 0 2 L 1 2 C 1 1.448 1.448 1 2 1 L 2 0 L 2 -1 C 0.343 -1 -1 0.343 -1 2 L 0 2 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  letterSpacing: "1px",
                  color: "var(--burgundy-rose)",
                  textTransform: "uppercase",
                  flexShrink: 0,
                }}>Email</span>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "var(--burgundy-deep-wine)",
                  flexShrink: 0,
                }}>hello@wrappd.com.au</span>
              </div>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 16,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: "rgba(106,30,46,0.102)",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 24,
                  height: 24,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "relative",
                    width: 24,
                    overflow: "hidden",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>
                    <svg width={20.002} height={20.002} viewBox="0 0 20.002 20.002" fill="none" style={{
                      position: "absolute",
                      left: 1.999,
                      top: 1.999,
                      width: 20.002,
                      height: 20.002,
                      color: "var(--primary-burgundy)",
                    }}>
                      <path d={"M 11.001 4 C 11.001 3.448 10.553 3 10.001 3 C 9.449 3 9.001 3.448 9.001 4 L 10.001 4 L 11.001 4 Z M 10.001 10.001 L 9.001 10.001 L 9.001 10.619 L 9.554 10.895 L 10.001 10.001 Z M 13.554 12.895 C 14.048 13.142 14.649 12.942 14.896 12.448 C 15.143 11.954 14.942 11.354 14.448 11.107 L 14.001 12.001 L 13.554 12.895 Z M 10.001 4 L 9.001 4 L 9.001 10.001 L 10.001 10.001 L 11.001 10.001 L 11.001 4 L 10.001 4 Z M 10.001 10.001 L 9.554 10.895 L 13.554 12.895 L 14.001 12.001 L 14.448 11.107 L 10.448 9.106 L 10.001 10.001 Z M 20.002 10.001 L 19.002 10.001 C 19.002 14.972 14.972 19.002 10.001 19.002 L 10.001 20.002 L 10.001 21.002 C 16.076 21.002 21.002 16.076 21.002 10.001 L 20.002 10.001 Z M 10.001 20.002 L 10.001 19.002 C 5.03 19.002 1 14.972 1 10.001 L 0 10.001 L -1 10.001 C -1 16.076 3.925 21.002 10.001 21.002 L 10.001 20.002 Z M 0 10.001 L 1 10.001 C 1 5.03 5.03 1 10.001 1 L 10.001 0 L 10.001 -1 C 3.925 -1 -1 3.925 -1 10.001 L 0 10.001 Z M 10.001 0 L 10.001 1 C 14.972 1 19.002 5.03 19.002 10.001 L 20.002 10.001 L 21.002 10.001 C 21.002 3.925 16.076 -1 10.001 -1 L 10.001 0 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                  </div>
                </div>
              </div>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  letterSpacing: "1px",
                  color: "var(--burgundy-rose)",
                  textTransform: "uppercase",
                  flexShrink: 0,
                }}>Business Hours</span>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "var(--burgundy-deep-wine)",
                  flexShrink: 0,
                }}>Mon–Fri: 9am – 5pm AEST</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        background: "linear-gradient(180deg, rgb(245,237,224) 0.00%, rgb(232,212,180) 100.00%)",
        display: "flex",
        flexDirection: "column",
        gap: 32,
        padding: "80px 80px 80px 80px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 36,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--burgundy-deep-wine)",
            flexShrink: 0,
          }}>Visit Our Studio</span>
          <span style={{
            position: "relative",
            fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--primary-burgundy)",
            flexShrink: 0,
          }}>Located close to public transport with plenty of boutique coffee spots nearby. Let us know before coming by!</span>
        </div>
        <div className="fig-asset-ab211ef19d012301" style={{
          position: "relative",
          height: 400,
          overflow: "hidden",
          borderRadius: 24,
          boxShadow: "inset 0 0 0 4px var(--tan-ivory)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 581,
            top: 139.5,
            display: "flex",
            flexDirection: "column",
            gap: 4,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <div style={{
              position: "relative",
              borderRadius: 100,
              backgroundColor: "var(--burgundy-deep-wine)",
              boxShadow: "inset 0 0 0 2px var(--tan-ivory)",
              display: "flex",
              flexDirection: "row",
              padding: "12px 12px 12px 12px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 13,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--tan-ivory)",
                flexShrink: 0,
              }}>wrapp'd studio</span>
            </div>
            <div style={{
              position: "relative",
              width: 16,
              height: 16,
              borderRadius: "50%",
              backgroundColor: "var(--burgundy-deep-wine)",
              boxShadow: "inset 0 0 0 2px var(--tan-ivory)",
              flexShrink: 0,
            }} />
          </div>
        </div>
      </div>
      <div data-section="content" style={{
        position: "relative",
        backgroundColor: "var(--tan-ivory)",
        display: "flex",
        flexDirection: "column",
        gap: 56,
        padding: "100px 80px 100px 80px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 100,
            backgroundColor: "var(--tan-cream)",
            display: "flex",
            flexDirection: "row",
            padding: "6px 14px 6px 14px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "1.500px",
              color: "var(--primary-burgundy)",
              textTransform: "uppercase",
              flexShrink: 0,
            }}>QUESTIONS &amp; ANSWERS</span>
          </div>
          <span data-heading="section" style={{
            position: "relative",
            fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 48,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--burgundy-deep-wine)",
            flexShrink: 0,
          }}>Frequently Asked Questions</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            borderTop: "1px solid var(--tan-cream)",
            borderRight: "1px solid var(--tan-cream)",
            borderBottom: "1px solid var(--tan-cream)",
            borderLeft: "1px solid var(--tan-cream)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: "24px 0px 24px 0px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                lineHeight: "100%",
                color: "var(--burgundy-deep-wine)",
                flexGrow: 1,
              }}>How long does delivery take?</span>
              <div style={{
                position: "relative",
                width: 24,
                height: 24,
                opacity: 0.6,
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 24,
                  overflow: "hidden",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <svg width={14.002} height={14.002} viewBox="0 0 14.002 14.002" fill="none" style={{
                    position: "absolute",
                    left: 4.999,
                    top: 4.999,
                    width: 14.002,
                    height: 14.002,
                    color: "var(--burgundy-deep-wine)",
                  }}>
                    <path d={"M 0 6.001 C -0.552 6.001 -1 6.449 -1 7.001 C -1 7.553 -0.552 8.001 0 8.001 L 0 7.001 L 0 6.001 Z M 14.002 8.001 C 14.554 8.001 15.002 7.553 15.002 7.001 C 15.002 6.449 14.554 6.001 14.002 6.001 L 14.002 7.001 L 14.002 8.001 Z M 8.001 0 C 8.001 -0.552 7.553 -1 7.001 -1 C 6.449 -1 6.001 -0.552 6.001 0 L 7.001 0 L 8.001 0 Z M 6.001 14.002 C 6.001 14.554 6.449 15.002 7.001 15.002 C 7.553 15.002 8.001 14.554 8.001 14.002 L 7.001 14.002 L 6.001 14.002 Z M 0 7.001 L 0 8.001 L 14.002 8.001 L 14.002 7.001 L 14.002 6.001 L 0 6.001 L 0 7.001 Z M 7.001 0 L 6.001 0 L 6.001 14.002 L 7.001 14.002 L 8.001 14.002 L 8.001 0 L 7.001 0 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
            </div>
            <span style={{
              position: "relative",
              opacity: 0.8,
              fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 15,
              lineHeight: 1.600000023841858,
              color: "var(--primary-burgundy)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Lagos local orders are delivered next-day. Standard shipping across Nigeria takes 3–5 business days, while express options arrive within 1–2 business days.</span>
          </div>
          <div style={{
            position: "relative",
            borderTop: "1px solid var(--tan-cream)",
            borderRight: "1px solid var(--tan-cream)",
            borderBottom: "1px solid var(--tan-cream)",
            borderLeft: "1px solid var(--tan-cream)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: "24px 0px 24px 0px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                lineHeight: "100%",
                color: "var(--burgundy-deep-wine)",
                flexGrow: 1,
              }}>Can I customise my gift box?</span>
              <div style={{
                position: "relative",
                width: 24,
                height: 24,
                opacity: 0.6,
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 24,
                  overflow: "hidden",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <svg width={14.002} height={14.002} viewBox="0 0 14.002 14.002" fill="none" style={{
                    position: "absolute",
                    left: 4.999,
                    top: 4.999,
                    width: 14.002,
                    height: 14.002,
                    color: "var(--burgundy-deep-wine)",
                  }}>
                    <path d={"M 0 6.001 C -0.552 6.001 -1 6.449 -1 7.001 C -1 7.553 -0.552 8.001 0 8.001 L 0 7.001 L 0 6.001 Z M 14.002 8.001 C 14.554 8.001 15.002 7.553 15.002 7.001 C 15.002 6.449 14.554 6.001 14.002 6.001 L 14.002 7.001 L 14.002 8.001 Z M 8.001 0 C 8.001 -0.552 7.553 -1 7.001 -1 C 6.449 -1 6.001 -0.552 6.001 0 L 7.001 0 L 8.001 0 Z M 6.001 14.002 C 6.001 14.554 6.449 15.002 7.001 15.002 C 7.553 15.002 8.001 14.554 8.001 14.002 L 7.001 14.002 L 6.001 14.002 Z M 0 7.001 L 0 8.001 L 14.002 8.001 L 14.002 7.001 L 14.002 6.001 L 0 6.001 L 0 7.001 Z M 7.001 0 L 6.001 0 L 6.001 14.002 L 7.001 14.002 L 8.001 14.002 L 8.001 0 L 7.001 0 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
            </div>
            <span style={{
              position: "relative",
              opacity: 0.8,
              fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 15,
              lineHeight: 1.600000023841858,
              color: "var(--primary-burgundy)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Absolutely. You can choose from our predefined selections or completely swap out items to craft a personalized curation. Just choose the 'Let Us Curate' option or email us directly.</span>
          </div>
          <div style={{
            position: "relative",
            borderTop: "1px solid var(--tan-cream)",
            borderRight: "1px solid var(--tan-cream)",
            borderBottom: "1px solid var(--tan-cream)",
            borderLeft: "1px solid var(--tan-cream)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: "24px 0px 24px 0px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                lineHeight: "100%",
                color: "var(--burgundy-deep-wine)",
                flexGrow: 1,
              }}>Do you offer corporate gifting?</span>
              <div style={{
                position: "relative",
                width: 24,
                height: 24,
                opacity: 0.6,
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 24,
                  overflow: "hidden",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <svg width={14.002} height={14.002} viewBox="0 0 14.002 14.002" fill="none" style={{
                    position: "absolute",
                    left: 4.999,
                    top: 4.999,
                    width: 14.002,
                    height: 14.002,
                    color: "var(--burgundy-deep-wine)",
                  }}>
                    <path d={"M 0 6.001 C -0.552 6.001 -1 6.449 -1 7.001 C -1 7.553 -0.552 8.001 0 8.001 L 0 7.001 L 0 6.001 Z M 14.002 8.001 C 14.554 8.001 15.002 7.553 15.002 7.001 C 15.002 6.449 14.554 6.001 14.002 6.001 L 14.002 7.001 L 14.002 8.001 Z M 8.001 0 C 8.001 -0.552 7.553 -1 7.001 -1 C 6.449 -1 6.001 -0.552 6.001 0 L 7.001 0 L 8.001 0 Z M 6.001 14.002 C 6.001 14.554 6.449 15.002 7.001 15.002 C 7.553 15.002 8.001 14.554 8.001 14.002 L 7.001 14.002 L 6.001 14.002 Z M 0 7.001 L 0 8.001 L 14.002 8.001 L 14.002 7.001 L 14.002 6.001 L 0 6.001 L 0 7.001 Z M 7.001 0 L 6.001 0 L 6.001 14.002 L 7.001 14.002 L 8.001 14.002 L 8.001 0 L 7.001 0 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
            </div>
            <span style={{
              position: "relative",
              opacity: 0.8,
              fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 15,
              lineHeight: 1.600000023841858,
              color: "var(--primary-burgundy)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Yes, corporate brand experiences are our specialty. We provide bulk customization, branded ribbon, custom note cards, and full logistic handling for small and large companies alike.</span>
          </div>
          <div style={{
            position: "relative",
            borderTop: "1px solid var(--tan-cream)",
            borderRight: "1px solid var(--tan-cream)",
            borderBottom: "1px solid var(--tan-cream)",
            borderLeft: "1px solid var(--tan-cream)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: "24px 0px 24px 0px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                lineHeight: "100%",
                color: "var(--burgundy-deep-wine)",
                flexGrow: 1,
              }}>What is your return policy?</span>
              <div style={{
                position: "relative",
                width: 24,
                height: 24,
                opacity: 0.6,
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 24,
                  overflow: "hidden",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <svg width={14.002} height={14.002} viewBox="0 0 14.002 14.002" fill="none" style={{
                    position: "absolute",
                    left: 4.999,
                    top: 4.999,
                    width: 14.002,
                    height: 14.002,
                    color: "var(--burgundy-deep-wine)",
                  }}>
                    <path d={"M 0 6.001 C -0.552 6.001 -1 6.449 -1 7.001 C -1 7.553 -0.552 8.001 0 8.001 L 0 7.001 L 0 6.001 Z M 14.002 8.001 C 14.554 8.001 15.002 7.553 15.002 7.001 C 15.002 6.449 14.554 6.001 14.002 6.001 L 14.002 7.001 L 14.002 8.001 Z M 8.001 0 C 8.001 -0.552 7.553 -1 7.001 -1 C 6.449 -1 6.001 -0.552 6.001 0 L 7.001 0 L 8.001 0 Z M 6.001 14.002 C 6.001 14.554 6.449 15.002 7.001 15.002 C 7.553 15.002 8.001 14.554 8.001 14.002 L 7.001 14.002 L 6.001 14.002 Z M 0 7.001 L 0 8.001 L 14.002 8.001 L 14.002 7.001 L 14.002 6.001 L 0 6.001 L 0 7.001 Z M 7.001 0 L 6.001 0 L 6.001 14.002 L 7.001 14.002 L 8.001 14.002 L 8.001 0 L 7.001 0 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
            </div>
            <span style={{
              position: "relative",
              opacity: 0.8,
              fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 15,
              lineHeight: 1.600000023841858,
              color: "var(--primary-burgundy)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Due to the handmade and perishable nature of some gift boxes, we cannot accept standard returns. However, if any item is damaged or falls short of perfection, we will make it right instantly.</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "var(--burgundy-deep-wine)",
        display: "flex",
        flexDirection: "column",
        gap: 40,
        padding: "120px 80px 120px 80px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div data-decorative style={{
          position: "absolute",
          left: 166,
          top: 218,
          width: 1108,
          height: 554,
          opacity: 0.15,
          borderRadius: "50%",
          backgroundColor: "var(--burgundy-rose)",
        }} />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span data-heading="section" style={{
            position: "relative",
            width: 900,
            fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 56,
            textAlign: "center",
            lineHeight: 1.149999976158142,
            color: "var(--primary-warm-tan)",
            flexShrink: 0,
          }}>Let's create something special together.</span>
          <span data-text-block style={{
            position: "relative",
            width: 600,
            opacity: 0.8,
            fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 18,
            textAlign: "center",
            lineHeight: "100%",
            color: "var(--tan-ivory)",
            flexShrink: 0,
          }}>Ready to design a custom corporate tier or personal curation? Let's talk.</span>
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
          cursor: "pointer",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 15,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "0.500px",
            color: "var(--burgundy-deep-wine)",
            flexShrink: 0,
          }}>Get Started Gifting →</span>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <svg width={16} viewBox="0 0 16 16" fill="none" style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
              color: "var(--burgundy-deep-wine)",
            }}>
              <path d={"M 0 7 C -0.552 7 -1 7.448 -1 8 C -1 8.552 -0.552 9 0 9 L 0 8 L 0 7 Z M 16 8 L 16.707 8.707 L 17.414 8 L 16.707 7.293 L 16 8 Z M 8.707 -0.707 C 8.317 -1.098 7.683 -1.098 7.293 -0.707 C 6.902 -0.317 6.902 0.317 7.293 0.707 L 8 0 L 8.707 -0.707 Z M 7.293 15.293 C 6.902 15.683 6.902 16.317 7.293 16.707 C 7.683 17.098 8.317 17.098 8.707 16.707 L 8 16 L 7.293 15.293 Z M 0 8 L 0 9 L 16 9 L 16 8 L 16 7 L 0 7 L 0 8 Z M 16 8 L 16.707 7.293 L 8.707 -0.707 L 8 0 L 7.293 0.707 L 15.293 8.707 L 16 8 Z M 16 8 L 15.293 7.293 L 7.293 15.293 L 8 16 L 8.707 16.707 L 16.707 8.707 L 16 8 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
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
            <WrappDLogo
              style={{
                position: "relative",
                width: 207.2,
                height: 63.66,
                flexShrink: 0,
              }}
              property1={"monochrome light"}
            />
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
            }}>Wrapp'd is premium bespoke gift-boxing, hand-packed with boutique local treats, finished with hand-tied ribbons and love.</span>
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
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <svg width={16} viewBox="0 0 16 16" fill="none" style={{
                    position: "relative",
                    width: 16,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    color: "var(--burgundy-deep-wine)",
                  }}>
                    <path d={"M 12.4 3.1 C 12.124 3.1 11.9 3.324 11.9 3.6 C 11.9 3.876 12.124 4.1 12.4 4.1 L 12.4 3.6 L 12.4 3.1 Z M 12.408 4.1 C 12.684 4.1 12.908 3.876 12.908 3.6 C 12.908 3.324 12.684 3.1 12.408 3.1 L 12.408 3.6 L 12.408 4.1 Z M 11.2 7.496 L 10.705 7.57 L 11.2 7.496 Z M 8.504 4.8 L 8.43 5.295 L 8.504 4.8 Z M 12.4 3.6 L 12.4 4.1 L 12.408 4.1 L 12.408 3.6 L 12.408 3.1 L 12.4 3.1 L 12.4 3.6 Z M 4 0 L 4 0.5 L 12 0.5 L 12 0 L 12 -0.5 L 4 -0.5 L 4 0 Z M 12 0 L 12 0.5 C 13.933 0.5 15.5 2.067 15.5 4 L 16 4 L 16.5 4 C 16.5 1.515 14.485 -0.5 12 -0.5 L 12 0 Z M 16 4 L 15.5 4 L 15.5 12 L 16 12 L 16.5 12 L 16.5 4 L 16 4 Z M 16 12 L 15.5 12 C 15.5 13.933 13.933 15.5 12 15.5 L 12 16 L 12 16.5 C 14.485 16.5 16.5 14.485 16.5 12 L 16 12 Z M 12 16 L 12 15.5 L 4 15.5 L 4 16 L 4 16.5 L 12 16.5 L 12 16 Z M 4 16 L 4 15.5 C 2.067 15.5 0.5 13.933 0.5 12 L 0 12 L -0.5 12 C -0.5 14.485 1.515 16.5 4 16.5 L 4 16 Z M 0 12 L 0.5 12 L 0.5 4 L 0 4 L -0.5 4 L -0.5 12 L 0 12 Z M 0 4 L 0.5 4 C 0.5 2.067 2.067 0.5 4 0.5 L 4 0 L 4 -0.5 C 1.515 -0.5 -0.5 1.515 -0.5 4 L 0 4 Z M 11.2 7.496 L 10.705 7.57 C 10.788 8.131 10.693 8.705 10.431 9.209 L 10.875 9.439 L 11.319 9.67 C 11.677 8.979 11.809 8.193 11.694 7.423 L 11.2 7.496 Z M 10.875 9.439 L 10.431 9.209 C 10.169 9.713 9.756 10.122 9.248 10.377 L 9.473 10.824 L 9.698 11.271 C 10.393 10.921 10.96 10.361 11.319 9.67 L 10.875 9.439 Z M 9.473 10.824 L 9.248 10.377 C 8.741 10.633 8.166 10.722 7.605 10.631 L 7.526 11.125 L 7.447 11.619 C 8.215 11.742 9.003 11.62 9.698 11.271 L 9.473 10.824 Z M 7.526 11.125 L 7.605 10.631 C 7.045 10.541 6.527 10.276 6.125 9.875 L 5.772 10.228 L 5.418 10.582 C 5.968 11.132 6.678 11.495 7.447 11.619 L 7.526 11.125 Z M 5.772 10.228 L 6.125 9.875 C 5.724 9.473 5.459 8.955 5.369 8.395 L 4.875 8.474 L 4.381 8.553 C 4.505 9.322 4.868 10.032 5.418 10.582 L 5.772 10.228 Z M 4.875 8.474 L 5.369 8.395 C 5.278 7.834 5.367 7.259 5.623 6.752 L 5.176 6.527 L 4.729 6.302 C 4.38 6.997 4.258 7.785 4.381 8.553 L 4.875 8.474 Z M 5.176 6.527 L 5.623 6.752 C 5.878 6.244 6.287 5.831 6.791 5.569 L 6.561 5.125 L 6.33 4.681 C 5.639 5.04 5.079 5.607 4.729 6.302 L 5.176 6.527 Z M 6.561 5.125 L 6.791 5.569 C 7.295 5.307 7.869 5.212 8.43 5.295 L 8.504 4.8 L 8.577 4.306 C 7.807 4.191 7.021 4.323 6.33 4.681 L 6.561 5.125 Z M 8.504 4.8 L 8.43 5.295 C 9.003 5.38 9.534 5.647 9.944 6.056 L 10.297 5.703 L 10.651 5.349 C 10.089 4.788 9.362 4.422 8.577 4.306 L 8.504 4.8 Z M 10.297 5.703 L 9.944 6.056 C 10.353 6.466 10.62 6.997 10.705 7.57 L 11.2 7.496 L 11.694 7.423 C 11.578 6.638 11.212 5.911 10.651 5.349 L 10.297 5.703 Z"} fill="currentColor" fillRule="nonzero" />
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
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <svg width={16} viewBox="0 0 16 16" fill="none" style={{
                    position: "relative",
                    width: 16,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    color: "var(--burgundy-deep-wine)",
                  }}>
                    <path d={"M 16 0 L 16.5 0 L 16.5 -0.5 L 16 -0.5 L 16 0 Z M 4.364 4 L 3.864 4 L 4.364 4 Z M 4.364 6.4 L 4.364 6.9 L 4.864 6.9 L 4.864 6.4 L 4.364 6.4 Z M 0 6.4 L 0 5.9 L -0.5 5.9 L -0.5 6.4 L 0 6.4 Z M 0 9.6 L -0.5 9.6 L -0.5 10.1 L 0 10.1 L 0 9.6 Z M 4.364 9.6 L 4.864 9.6 L 4.864 9.1 L 4.364 9.1 L 4.364 9.6 Z M 4.364 16 L 3.864 16 L 3.864 16.5 L 4.364 16.5 L 4.364 16 Z M 10.182 16 L 10.182 16.5 L 10.682 16.5 L 10.682 16 L 10.182 16 Z M 10.182 9.6 L 10.182 9.1 L 9.682 9.1 L 9.682 9.6 L 10.182 9.6 Z M 14.545 9.6 L 14.545 10.1 L 14.867 10.1 L 15.001 9.807 L 14.545 9.6 Z M 16 6.4 L 16.455 6.607 L 16.777 5.9 L 16 5.9 L 16 6.4 Z M 10.182 6.4 L 9.682 6.4 L 9.682 6.9 L 10.182 6.9 L 10.182 6.4 Z M 11.636 3.2 L 11.636 3.7 L 11.636 3.2 Z M 16 3.2 L 16 3.7 L 16.5 3.7 L 16.5 3.2 L 16 3.2 Z M 16 0 L 16 -0.5 L 11.636 -0.5 L 11.636 0 L 11.636 0.5 L 16 0.5 L 16 0 Z M 11.636 0 L 11.636 -0.5 C 9.643 -0.5 7.706 -0.066 6.253 0.733 L 6.494 1.172 L 6.735 1.61 C 8.009 0.909 9.772 0.5 11.636 0.5 L 11.636 0 Z M 6.494 1.172 L 6.253 0.733 C 4.812 1.526 3.864 2.679 3.864 4 L 4.364 4 L 4.864 4 C 4.864 3.2 5.448 2.317 6.735 1.61 L 6.494 1.172 Z M 4.364 4 L 3.864 4 L 3.864 6.4 L 4.364 6.4 L 4.864 6.4 L 4.864 4 L 4.364 4 Z M 4.364 6.4 L 4.364 5.9 L 0 5.9 L 0 6.4 L 0 6.9 L 4.364 6.9 L 4.364 6.4 Z M 0 6.4 L -0.5 6.4 L -0.5 9.6 L 0 9.6 L 0.5 9.6 L 0.5 6.4 L 0 6.4 Z M 0 9.6 L 0 10.1 L 4.364 10.1 L 4.364 9.6 L 4.364 9.1 L 0 9.1 L 0 9.6 Z M 4.364 9.6 L 3.864 9.6 L 3.864 16 L 4.364 16 L 4.864 16 L 4.864 9.6 L 4.364 9.6 Z M 4.364 16 L 4.364 16.5 L 10.182 16.5 L 10.182 16 L 10.182 15.5 L 4.364 15.5 L 4.364 16 Z M 10.182 16 L 10.682 16 L 10.682 9.6 L 10.182 9.6 L 9.682 9.6 L 9.682 16 L 10.182 16 Z M 10.182 9.6 L 10.182 10.1 L 14.545 10.1 L 14.545 9.6 L 14.545 9.1 L 10.182 9.1 L 10.182 9.6 Z M 14.545 9.6 L 15.001 9.807 L 16.455 6.607 L 16 6.4 L 15.545 6.193 L 14.09 9.393 L 14.545 9.6 Z M 16 6.4 L 16 5.9 L 10.182 5.9 L 10.182 6.4 L 10.182 6.9 L 16 6.9 L 16 6.4 Z M 10.182 6.4 L 10.682 6.4 L 10.682 4 L 10.182 4 L 9.682 4 L 9.682 6.4 L 10.182 6.4 Z M 10.182 4 L 10.682 4 C 10.682 4.02 10.673 4.019 10.692 3.995 C 10.712 3.967 10.759 3.922 10.849 3.872 L 10.608 3.434 L 10.367 2.996 C 10.017 3.189 9.682 3.527 9.682 4 L 10.182 4 Z M 10.608 3.434 L 10.849 3.872 C 11.032 3.772 11.315 3.7 11.636 3.7 L 11.636 3.2 L 11.636 2.7 C 11.186 2.7 10.729 2.797 10.367 2.996 L 10.608 3.434 Z M 11.636 3.2 L 11.636 3.7 L 16 3.7 L 16 3.2 L 16 2.7 L 11.636 2.7 L 11.636 3.2 Z M 16 3.2 L 16.5 3.2 L 16.5 0 L 16 0 L 15.5 0 L 15.5 3.2 L 16 3.2 Z"} fill="currentColor" fillRule="nonzero" />
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
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <svg width={16} viewBox="0 0 16 16" fill="none" style={{
                    position: "relative",
                    width: 16,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    color: "var(--burgundy-deep-wine)",
                  }}>
                    <path d={"M 11.7 4.8 C 11.7 4.524 11.476 4.3 11.2 4.3 C 10.924 4.3 10.7 4.524 10.7 4.8 L 11.2 4.8 L 11.7 4.8 Z M 11.2 8.8 L 10.7 8.8 L 11.2 8.8 Z M 16 8.8 L 16.5 8.8 L 16 8.8 Z M 13.1 14.8 C 13.321 14.634 13.366 14.321 13.2 14.1 C 13.034 13.879 12.721 13.834 12.5 14 L 12.8 14.4 L 13.1 14.8 Z M 11.2 4.8 L 10.7 4.8 L 10.7 8.8 L 11.2 8.8 L 11.7 8.8 L 11.7 4.8 L 11.2 4.8 Z M 11.2 8.8 L 10.7 8.8 C 10.7 9.569 11.006 10.307 11.549 10.851 L 11.903 10.497 L 12.256 10.144 C 11.9 9.787 11.7 9.304 11.7 8.8 L 11.2 8.8 Z M 11.903 10.497 L 11.549 10.851 C 12.093 11.394 12.831 11.7 13.6 11.7 L 13.6 11.2 L 13.6 10.7 C 13.096 10.7 12.613 10.5 12.256 10.144 L 11.903 10.497 Z M 13.6 11.2 L 13.6 11.7 C 14.369 11.7 15.107 11.394 15.651 10.851 L 15.297 10.497 L 14.944 10.144 C 14.587 10.5 14.104 10.7 13.6 10.7 L 13.6 11.2 Z M 15.297 10.497 L 15.651 10.851 C 16.194 10.307 16.5 9.569 16.5 8.8 L 16 8.8 L 15.5 8.8 C 15.5 9.304 15.3 9.787 14.944 10.144 L 15.297 10.497 Z M 16 8.8 L 16.5 8.8 L 16.5 8 L 16 8 L 15.5 8 L 15.5 8.8 L 16 8.8 Z M 16 8 L 16.5 8 C 16.5 6.085 15.853 4.227 14.665 2.725 L 14.273 3.035 L 13.881 3.346 C 14.93 4.67 15.5 6.31 15.5 8 L 16 8 Z M 14.273 3.035 L 14.665 2.725 C 13.477 1.224 11.816 0.167 9.953 -0.273 L 9.838 0.214 L 9.723 0.701 C 11.367 1.089 12.833 2.021 13.881 3.346 L 14.273 3.035 Z M 9.838 0.214 L 9.953 -0.273 C 8.089 -0.713 6.132 -0.51 4.398 0.301 L 4.609 0.754 L 4.821 1.207 C 6.352 0.491 8.079 0.312 9.723 0.701 L 9.838 0.214 Z M 4.609 0.754 L 4.398 0.301 C 2.663 1.113 1.254 2.486 0.397 4.199 L 0.845 4.422 L 1.292 4.646 C 2.047 3.135 3.291 1.923 4.821 1.207 L 4.609 0.754 Z M 0.845 4.422 L 0.397 4.199 C -0.459 5.911 -0.712 7.863 -0.321 9.737 L 0.169 9.635 L 0.658 9.533 C 0.313 7.879 0.536 6.157 1.292 4.646 L 0.845 4.422 Z M 0.169 9.635 L -0.321 9.737 C 0.071 11.612 1.084 13.299 2.554 14.526 L 2.874 14.142 L 3.194 13.758 C 1.897 12.676 1.004 11.187 0.658 9.533 L 0.169 9.635 Z M 2.874 14.142 L 2.554 14.526 C 4.024 15.753 5.865 16.447 7.779 16.497 L 7.792 15.997 L 7.805 15.497 C 6.116 15.454 4.492 14.841 3.194 13.758 L 2.874 14.142 Z M 7.792 15.997 L 7.779 16.497 C 9.693 16.547 11.568 15.949 13.1 14.8 L 12.8 14.4 L 12.5 14 C 11.148 15.014 9.494 15.541 7.805 15.497 L 7.792 15.997 Z M 11.2 8 L 10.7 8 C 10.7 9.491 9.491 10.7 8 10.7 L 8 11.2 L 8 11.7 C 10.043 11.7 11.7 10.043 11.7 8 L 11.2 8 Z M 8 11.2 L 8 10.7 C 6.509 10.7 5.3 9.491 5.3 8 L 4.8 8 L 4.3 8 C 4.3 10.043 5.957 11.7 8 11.7 L 8 11.2 Z M 4.8 8 L 5.3 8 C 5.3 6.509 6.509 5.3 8 5.3 L 8 4.8 L 8 4.3 C 5.957 4.3 4.3 5.957 4.3 8 L 4.8 8 Z M 8 4.8 L 8 5.3 C 9.491 5.3 10.7 6.509 10.7 8 L 11.2 8 L 11.7 8 C 11.7 5.957 10.043 4.3 8 4.3 L 8 4.8 Z"} fill="currentColor" fillRule="nonzero" />
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
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  flexWrap: "nowrap",
                  flexShrink: 0,
                }}>
                  <svg width={16} viewBox="0 0 16 16" fill="none" style={{
                    position: "relative",
                    width: 16,
                    flexShrink: 0,
                    alignSelf: "stretch",
                    color: "var(--burgundy-deep-wine)",
                  }}>
                    <path d={"M 11.2 5.053 L 11.2 4.553 L 11.2 5.053 Z M 16 16 L 16 16.5 L 16.5 16.5 L 16.5 16 L 16 16 Z M 12.8 16 L 12.3 16 L 12.3 16.5 L 12.8 16.5 L 12.8 16 Z M 9.6 16 L 9.6 16.5 L 10.1 16.5 L 10.1 16 L 9.6 16 Z M 6.4 16 L 5.9 16 L 5.9 16.5 L 6.4 16.5 L 6.4 16 Z M 0 5.895 L 0 5.395 L -0.5 5.395 L -0.5 5.895 L 0 5.895 Z M 3.2 5.895 L 3.7 5.895 L 3.7 5.395 L 3.2 5.395 L 3.2 5.895 Z M 3.2 16 L 3.2 16.5 L 3.7 16.5 L 3.7 16 L 3.2 16 Z M 0 16 L -0.5 16 L -0.5 16.5 L 0 16.5 L 0 16 Z M 11.2 5.053 L 11.2 5.553 C 12.332 5.553 13.423 6.026 14.232 6.877 L 14.594 6.533 L 14.957 6.188 C 13.965 5.144 12.614 4.553 11.2 4.553 L 11.2 5.053 Z M 14.594 6.533 L 14.232 6.877 C 15.041 7.729 15.5 8.89 15.5 10.105 L 16 10.105 L 16.5 10.105 C 16.5 8.641 15.948 7.231 14.957 6.188 L 14.594 6.533 Z M 16 10.105 L 15.5 10.105 L 15.5 16 L 16 16 L 16.5 16 L 16.5 10.105 L 16 10.105 Z M 16 16 L 16 15.5 L 12.8 15.5 L 12.8 16 L 12.8 16.5 L 16 16.5 L 16 16 Z M 12.8 16 L 13.3 16 L 13.3 10.105 L 12.8 10.105 L 12.3 10.105 L 12.3 16 L 12.8 16 Z M 12.8 10.105 L 13.3 10.105 C 13.3 9.534 13.085 8.981 12.694 8.57 L 12.331 8.914 L 11.969 9.259 C 12.178 9.479 12.3 9.783 12.3 10.105 L 12.8 10.105 Z M 12.331 8.914 L 12.694 8.57 C 12.302 8.158 11.765 7.921 11.2 7.921 L 11.2 8.421 L 11.2 8.921 C 11.483 8.921 11.76 9.039 11.969 9.259 L 12.331 8.914 Z M 11.2 8.421 L 11.2 7.921 C 10.635 7.921 10.098 8.158 9.706 8.57 L 10.069 8.914 L 10.431 9.259 C 10.64 9.039 10.917 8.921 11.2 8.921 L 11.2 8.421 Z M 10.069 8.914 L 9.706 8.57 C 9.315 8.981 9.1 9.534 9.1 10.105 L 9.6 10.105 L 10.1 10.105 C 10.1 9.783 10.222 9.479 10.431 9.259 L 10.069 8.914 Z M 9.6 10.105 L 9.1 10.105 L 9.1 16 L 9.6 16 L 10.1 16 L 10.1 10.105 L 9.6 10.105 Z M 9.6 16 L 9.6 15.5 L 6.4 15.5 L 6.4 16 L 6.4 16.5 L 9.6 16.5 L 9.6 16 Z M 6.4 16 L 6.9 16 L 6.9 10.105 L 6.4 10.105 L 5.9 10.105 L 5.9 16 L 6.4 16 Z M 6.4 10.105 L 6.9 10.105 C 6.9 8.89 7.359 7.729 8.168 6.877 L 7.806 6.533 L 7.443 6.188 C 6.452 7.231 5.9 8.641 5.9 10.105 L 6.4 10.105 Z M 7.806 6.533 L 8.168 6.877 C 8.977 6.026 10.068 5.553 11.2 5.553 L 11.2 5.053 L 11.2 4.553 C 9.786 4.553 8.435 5.144 7.443 6.188 L 7.806 6.533 Z M 0 5.895 L 0 6.395 L 3.2 6.395 L 3.2 5.895 L 3.2 5.395 L 0 5.395 L 0 5.895 Z M 3.2 5.895 L 2.7 5.895 L 2.7 16 L 3.2 16 L 3.7 16 L 3.7 5.895 L 3.2 5.895 Z M 3.2 16 L 3.2 15.5 L 0 15.5 L 0 16 L 0 16.5 L 3.2 16.5 L 3.2 16 Z M 0 16 L 0.5 16 L 0.5 5.895 L 0 5.895 L -0.5 5.895 L -0.5 16 L 0 16 Z M 3.2 1.684 L 2.7 1.684 C 2.7 2.363 2.184 2.868 1.6 2.868 L 1.6 3.368 L 1.6 3.868 C 2.784 3.868 3.7 2.866 3.7 1.684 L 3.2 1.684 Z M 1.6 3.368 L 1.6 2.868 C 1.016 2.868 0.5 2.363 0.5 1.684 L 0 1.684 L -0.5 1.684 C -0.5 2.866 0.416 3.868 1.6 3.868 L 1.6 3.368 Z M 0 1.684 L 0.5 1.684 C 0.5 1.006 1.016 0.5 1.6 0.5 L 1.6 0 L 1.6 -0.5 C 0.416 -0.5 -0.5 0.502 -0.5 1.684 L 0 1.684 Z M 1.6 0 L 1.6 0.5 C 2.184 0.5 2.7 1.006 2.7 1.684 L 3.2 1.684 L 3.7 1.684 C 3.7 0.502 2.784 -0.5 1.6 -0.5 L 1.6 0 Z"} fill="currentColor" fillRule="nonzero" />
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
            <div style={{
              position: "relative",
              width: 120,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--tan-ivory)",
                flexShrink: 0,
              }}>Shop</span>
              <span style={{
                position: "relative",
                opacity: 0.7,
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 13,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--tan-ivory)",
                flexShrink: 0,
              }}>Best Sellers</span>
              <span style={{
                position: "relative",
                opacity: 0.7,
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 13,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--tan-ivory)",
                flexShrink: 0,
              }}>Create Custom</span>
              <span style={{
                position: "relative",
                opacity: 0.7,
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 13,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--tan-ivory)",
                flexShrink: 0,
              }}>Corporate Tiers</span>
            </div>
            <div style={{
              position: "relative",
              width: 120,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--tan-ivory)",
                flexShrink: 0,
              }}>Company</span>
              <span style={{
                position: "relative",
                opacity: 0.7,
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 13,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--tan-ivory)",
                flexShrink: 0,
              }}>About Us</span>
              <span style={{
                position: "relative",
                opacity: 0.7,
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 13,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--tan-ivory)",
                flexShrink: 0,
              }}>Sustainability</span>
              <span style={{
                position: "relative",
                opacity: 0.7,
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 13,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--tan-ivory)",
                flexShrink: 0,
              }}>Careers</span>
            </div>
            <div style={{
              position: "relative",
              width: 120,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--tan-ivory)",
                flexShrink: 0,
              }}>Support</span>
              <span style={{
                position: "relative",
                opacity: 0.7,
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 13,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--tan-ivory)",
                flexShrink: 0,
              }}>Track Shipment</span>
              <span style={{
                position: "relative",
                opacity: 0.7,
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 13,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--tan-ivory)",
                flexShrink: 0,
              }}>FAQ &amp; Returns</span>
              <span style={{
                position: "relative",
                opacity: 0.7,
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 13,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--tan-ivory)",
                flexShrink: 0,
              }}>Contact Support</span>
            </div>
          </div>
        </div>
        <svg height={1} viewBox="0 -0.500 1280 1" fill="none" style={{
          position: "relative",
          height: 1,
          opacity: 0.2,
          flexShrink: 0,
          alignSelf: "stretch",
          color: "var(--tan-ivory)",
        }}>
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
          <span style={{
            position: "relative",
            opacity: 0.5,
            fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--tan-ivory)",
            flexShrink: 0,
          }}>© 2026 Wrapp'd. All rights reserved.</span>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 24,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              opacity: 0.5,
              fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--tan-ivory)",
              flexShrink: 0,
            }}>Privacy Policy</span>
            <span style={{
              position: "relative",
              opacity: 0.5,
              fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--tan-ivory)",
              flexShrink: 0,
            }}>Terms of Service</span>
            <span style={{
              position: "relative",
              opacity: 0.5,
              fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "var(--tan-ivory)",
              flexShrink: 0,
            }}>Carbon Neutral Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactPage;
