import { NavBar3 } from './NavBar3.jsx';
import { PromoBanner } from './PromoBanner.jsx';
import { WrappDLogo } from './WrappDLogo.jsx';

// figma node: 88:1506 personal-gifting-page
export function PersonalGiftingPage(_p = {}) {
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
        flexDirection: "row",
        gap: 60,
        padding: "100px 80px 100px 80px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div data-decorative style={{
          position: "absolute",
          left: 1040,
          top: -100,
          width: 600,
          height: 600,
          opacity: 0.08,
          borderRadius: "50%",
          backgroundColor: "var(--primary-warm-tan)",
        }} />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 32,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
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
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
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
                }}>PERSONAL GIFTING</span>
              </div>
            </div>
            <span data-heading="hero" style={{
              position: "relative",
              fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 72,
              lineHeight: 1.0499999523162842,
              letterSpacing: "-1px",
              color: "var(--primary-burgundy)",
              flexShrink: 0,
              alignSelf: "stretch",
              whiteSpace: "pre-wrap",
            }}>{"For the people you\ncan't stop thinking about."}</span>
            <span style={{
              position: "relative",
              opacity: 0.9,
              fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 18,
              lineHeight: 1.600000023841858,
              color: "var(--burgundy-deep-wine)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Turn that thought into a gift they'll never forget. Shop a beautiful ready-made box, or let us design one around your person, wrapped, carded, and delivered with love.</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
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
              }}>Start gifting →</span>
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
                  color: "var(--burgundy-deep-wine)",
                }}>
                  <path d={"M 0 3.667 C -0.552 3.667 -1 4.115 -1 4.667 C -1 5.219 -0.552 5.667 0 5.667 L 0 4.667 L 0 3.667 Z M 9.334 4.667 L 10.042 5.374 L 10.749 4.667 L 10.042 3.96 L 9.334 4.667 Z M 5.374 -0.707 C 4.984 -1.098 4.351 -1.098 3.96 -0.707 C 3.57 -0.317 3.57 0.317 3.96 0.707 L 4.667 0 L 5.374 -0.707 Z M 3.96 8.627 C 3.57 9.018 3.57 9.651 3.96 10.042 C 4.351 10.432 4.984 10.432 5.374 10.042 L 4.667 9.334 L 3.96 8.627 Z M 0 4.667 L 0 5.667 L 9.334 5.667 L 9.334 4.667 L 9.334 3.667 L 0 3.667 L 0 4.667 Z M 9.334 4.667 L 10.042 3.96 L 5.374 -0.707 L 4.667 0 L 3.96 0.707 L 8.627 5.374 L 9.334 4.667 Z M 9.334 4.667 L 8.627 3.96 L 3.96 8.627 L 4.667 9.334 L 5.374 10.042 L 10.042 5.374 L 9.334 4.667 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 480,
          overflow: "hidden",
          borderRadius: 24,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          width: "calc(50% - 30px)",
          flexShrink: 0,
        }}>
          <div className="fig-asset-cd969ac31df420c4" style={{ position: "relative", flexGrow: 1, alignSelf: "stretch" }} />
        </div>
      </div>
      <div data-section="content" style={{
        position: "relative",
        backgroundColor: "var(--tan-ivory)",
        display: "flex",
        flexDirection: "column",
        gap: "clamp(32px, 5vw, 64px)",
        padding: "clamp(48px, 8vw, 100px) clamp(20px, 5vw, 80px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          alignSelf: "stretch",
        }}>
          <span data-heading="section" style={{
            position: "relative",
            fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(28px, 5vw, 48px)",
            textAlign: "center",
            lineHeight: 1.1,
            color: "var(--burgundy-deep-wine)",
            alignSelf: "stretch",
          }}>Two ways in. Both end in a happy dance.</span>
          <span style={{
            position: "relative",
            fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            textAlign: "center",
            lineHeight: "100%",
            color: "var(--primary-burgundy)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Know what they'd love? Shop it. No idea? Hand it to us.</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "clamp(24px, 3vw, 40px)",
          alignItems: "stretch",
          flexWrap: "wrap",
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
            padding: "clamp(24px, 4vw, 48px)",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            flexBasis: 300,
            minWidth: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(28px, 4vw, 36px)",
                lineHeight: 1.2,
                color: "var(--burgundy-deep-wine)",
              }}>Shop the boxes</span>
              <span style={{
                position: "relative",
                fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "clamp(16px, 3vw, 20px)",
                lineHeight: 1.3,
                color: "var(--burgundy-rose)",
              }}>"I'll know it when I see it."</span>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: 1.600000023841858,
                color: "var(--primary-burgundy)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Browse our ready-made boxes by occasion. Found the one? Add your message, order in minutes, and we'll wrap it and deliver it anywhere in Lagos.</span>
              <span style={{
                position: "relative",
                opacity: 0.6,
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "100%",
                color: "var(--burgundy-deep-wine)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Want to swap an item or add a personal touch? Just ask. Tweaks are always welcome.</span>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                borderRadius: 100,
                boxShadow: "inset 0 0 0 1.500px var(--primary-burgundy)",
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
                  color: "var(--primary-burgundy)",
                  flexShrink: 0,
                }}>Browse boxes →</span>
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
          <div style={{
            position: "relative",
            borderRadius: 24,
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "inset 0 0 0 1.500px var(--tan-cream)",
            display: "flex",
            flexDirection: "column",
            gap: 32,
            padding: "clamp(24px, 4vw, 48px)",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            flexBasis: 300,
            minWidth: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(28px, 4vw, 36px)",
                lineHeight: 1.2,
                color: "var(--burgundy-deep-wine)",
              }}>Let us curate</span>
              <span style={{
                position: "relative",
                fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "clamp(16px, 3vw, 20px)",
                lineHeight: 1.3,
                color: "var(--burgundy-rose)",
              }}>"I honestly have no idea."</span>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: 1.600000023841858,
                color: "var(--primary-burgundy)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Our favourite kind of brief. Tell us about them, a short form, or a quick call if you'd rather talk, and we'll design a one-of-a-kind box around who they are, then deliver it on your behalf.</span>
              <span style={{
                position: "relative",
                opacity: 0.6,
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: 1.4,
                color: "var(--burgundy-deep-wine)",
              }}>All that's left for you is the "wait… how did you know?"</span>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                borderRadius: 100,
                boxShadow: "inset 0 0 0 1.500px var(--primary-burgundy)",
                display: "flex",
                flexDirection: "row",
                gap: 8,
                padding: "14px 28px 14px 28px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
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
                }}>Curate my box →</span>
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
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            opacity: 0.8,
            fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 15,
            lineHeight: 1.5,
            textAlign: "center",
            color: "var(--primary-burgundy)",
          }}>P.S. — the person you're gifting is allowed to be you. We'll never tell.</span>
        </div>
      </div>
      <div data-section="content" style={{
        position: "relative",
        backgroundColor: "var(--tan-cream)",
        display: "flex",
        flexDirection: "column",
        gap: 56,
        padding: "100px 80px 100px 80px",
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
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              borderRadius: 100,
              backgroundColor: "var(--tan-ivory)",
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
              }}>MOMENTS WORTH MARKING</span>
            </div>
          </div>
          <span data-heading="section" style={{
            position: "relative",
            fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 48,
            textAlign: "center",
            lineHeight: "100%",
            color: "var(--burgundy-deep-wine)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>For every occasion and for no occasion at all</span>
          <span data-text-block style={{
            position: "relative",
            width: 720,
            opacity: 0.8,
            fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            textAlign: "center",
            lineHeight: 1.5,
            color: "var(--burgundy-deep-wine)",
            flexShrink: 0,
          }}>Sometimes the best gifts arrive on an ordinary Tuesday.</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 24,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 410.667,
            overflow: "hidden",
            borderRadius: 16,
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "inset 0 0 0 1px var(--tan-ivory)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div className="fig-asset-8518899b6d476a4e" style={{
              position: "relative",
              height: 180,
              flexShrink: 0,
              alignSelf: "stretch",
            }} />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 16,
              padding: "24px 24px 24px 24px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: "rgba(106,30,46,0.1)",
                display: "flex",
                flexDirection: "column",
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
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 2,
                    top: 1.999,
                    width: 20.002,
                    height: 20.002,
                    overflow: "hidden",
                  }}>
                    <svg width={16.677} height={16.669} viewBox="0 0 16.677 16.669" fill="none" style={{
                      position: "absolute",
                      left: 1.666,
                      top: 1.666,
                      width: 16.677,
                      height: 16.669,
                      color: "var(--primary-burgundy)",
                    }}>
                      <path d={"M 4.109 8.086 C 4.294 7.565 4.022 6.994 3.502 6.809 C 2.981 6.624 2.41 6.896 2.225 7.416 L 3.167 7.751 L 4.109 8.086 Z M 0 16.669 L -0.942 16.335 L -1.645 18.313 L 0.334 17.612 L 0 16.669 Z M 9.252 14.453 C 9.772 14.269 10.045 13.697 9.861 13.177 C 9.676 12.656 9.105 12.383 8.584 12.568 L 8.918 13.51 L 9.252 14.453 Z M 1.667 -0.167 C 1.115 -0.167 0.667 0.281 0.667 0.833 C 0.667 1.386 1.115 1.833 1.667 1.833 L 1.667 0.833 L 1.667 -0.167 Z M 1.675 1.833 C 2.228 1.833 2.675 1.386 2.675 0.833 C 2.675 0.281 2.228 -0.167 1.675 -0.167 L 1.675 0.833 L 1.675 1.833 Z M 16.669 4.001 C 16.117 4.001 15.669 4.449 15.669 5.001 C 15.669 5.553 16.117 6.001 16.669 6.001 L 16.669 5.001 L 16.669 4.001 Z M 16.677 6.001 C 17.23 6.001 17.677 5.553 17.677 5.001 C 17.677 4.449 17.23 4.001 16.677 4.001 L 16.677 5.001 L 16.677 6.001 Z M 10.835 -1 C 10.283 -1 9.835 -0.552 9.835 0 C 9.835 0.552 10.283 1 10.835 1 L 10.835 0 L 10.835 -1 Z M 10.843 1 C 11.395 1 11.843 0.552 11.843 0 C 11.843 -0.552 11.395 -1 10.843 -1 L 10.843 0 L 10.843 1 Z M 16.669 14.003 C 16.117 14.003 15.669 14.45 15.669 15.003 C 15.669 15.555 16.117 16.003 16.669 16.003 L 16.669 15.003 L 16.669 14.003 Z M 16.677 16.003 C 17.23 16.003 17.677 15.555 17.677 15.003 C 17.677 14.45 17.23 14.003 16.677 14.003 L 16.677 15.003 L 16.677 16.003 Z M 16.987 0.948 C 17.51 0.773 17.793 0.206 17.617 -0.318 C 17.442 -0.841 16.875 -1.124 16.351 -0.948 L 16.669 0 L 16.987 0.948 Z M 14.802 0.625 L 15.118 1.574 L 15.12 1.573 L 14.802 0.625 Z M 13.169 3.226 L 14.162 3.11 L 14.16 3.098 L 13.169 3.226 Z M 10.176 5.784 L 11.157 5.979 L 11.159 5.971 L 10.176 5.784 Z M 9.02 6.473 C 8.913 7.015 9.265 7.541 9.807 7.649 C 10.349 7.756 10.875 7.404 10.982 6.862 L 10.001 6.668 L 9.02 6.473 Z M 16.296 10.096 C 16.808 10.302 17.39 10.054 17.597 9.542 C 17.803 9.029 17.555 8.447 17.042 8.24 L 16.669 9.168 L 16.296 10.096 Z M 15.986 8.893 L 16.359 7.965 L 16.353 7.963 L 15.986 8.893 Z M 14.335 9.818 L 13.35 9.645 L 13.349 9.654 L 13.347 9.663 L 14.335 9.818 Z M 12.502 9.835 C 11.949 9.835 11.502 10.283 11.502 10.835 C 11.502 11.387 11.949 11.835 12.502 11.835 L 12.502 10.835 L 12.502 9.835 Z M 8.429 -0.373 C 8.223 -0.886 7.64 -1.134 7.128 -0.928 C 6.615 -0.722 6.367 -0.139 6.573 0.373 L 7.501 0 L 8.429 -0.373 Z M 7.776 0.683 L 8.706 0.316 L 8.704 0.31 L 7.776 0.683 Z M 6.851 2.334 L 6.992 3.324 L 7.008 3.321 L 7.024 3.319 L 6.851 2.334 Z M 4.834 4.167 C 4.834 4.72 5.282 5.167 5.834 5.167 C 6.386 5.167 6.834 4.72 6.834 4.167 L 5.834 4.167 L 4.834 4.167 Z M 3.167 7.751 L 2.225 7.416 L -0.942 16.335 L 0 16.669 L 0.942 17.004 L 4.109 8.086 L 3.167 7.751 Z M 0 16.669 L 0.334 17.612 L 9.252 14.453 L 8.918 13.51 L 8.584 12.568 L -0.334 15.727 L 0 16.669 Z M 1.667 0.833 L 1.667 1.833 L 1.675 1.833 L 1.675 0.833 L 1.675 -0.167 L 1.667 -0.167 L 1.667 0.833 Z M 16.669 5.001 L 16.669 6.001 L 16.677 6.001 L 16.677 5.001 L 16.677 4.001 L 16.669 4.001 L 16.669 5.001 Z M 10.835 0 L 10.835 1 L 10.843 1 L 10.843 0 L 10.843 -1 L 10.835 -1 L 10.835 0 Z M 16.669 15.003 L 16.669 16.003 L 16.677 16.003 L 16.677 15.003 L 16.677 14.003 L 16.669 14.003 L 16.669 15.003 Z M 16.669 0 L 16.351 -0.948 L 14.485 -0.323 L 14.802 0.625 L 15.12 1.573 L 16.987 0.948 L 16.669 0 Z M 14.802 0.625 L 14.486 -0.324 C 13.735 -0.073 13.094 0.43 12.672 1.101 L 13.519 1.633 L 14.366 2.164 C 14.541 1.886 14.807 1.678 15.118 1.574 L 14.802 0.625 Z M 13.519 1.633 L 12.672 1.101 C 12.251 1.771 12.076 2.567 12.177 3.353 L 13.169 3.226 L 14.16 3.098 C 14.119 2.773 14.191 2.443 14.366 2.164 L 13.519 1.633 Z M 13.169 3.226 L 12.175 3.341 C 12.19 3.472 12.087 3.584 11.96 3.584 L 11.96 4.584 L 11.96 5.584 C 13.3 5.584 14.313 4.413 14.162 3.11 L 13.169 3.226 Z M 11.96 4.584 L 11.96 3.584 L 11.643 3.584 L 11.643 4.584 L 11.643 5.584 L 11.96 5.584 L 11.96 4.584 Z M 11.643 4.584 L 11.643 3.584 C 10.458 3.584 9.419 4.414 9.194 5.597 L 10.176 5.784 L 11.159 5.971 C 11.2 5.755 11.395 5.584 11.643 5.584 L 11.643 4.584 Z M 10.176 5.784 L 9.195 5.59 L 9.02 6.473 L 10.001 6.668 L 10.982 6.862 L 11.157 5.979 L 10.176 5.784 Z M 16.669 9.168 L 17.042 8.24 L 16.359 7.965 L 15.986 8.893 L 15.612 9.821 L 16.296 10.096 L 16.669 9.168 Z M 15.986 8.893 L 16.353 7.963 C 15.045 7.446 13.593 8.266 13.35 9.645 L 14.335 9.818 L 15.32 9.991 C 15.344 9.854 15.492 9.773 15.618 9.823 L 15.986 8.893 Z M 14.335 9.818 L 13.347 9.663 C 13.333 9.758 13.245 9.835 13.144 9.835 L 13.144 10.835 L 13.144 11.835 C 14.225 11.835 15.155 11.045 15.323 9.974 L 14.335 9.818 Z M 13.144 10.835 L 13.144 9.835 L 12.502 9.835 L 12.502 10.835 L 12.502 11.835 L 13.144 11.835 L 13.144 10.835 Z M 7.501 0 L 6.573 0.373 L 6.848 1.057 L 7.776 0.683 L 8.704 0.31 L 8.429 -0.373 L 7.501 0 Z M 7.776 0.683 L 6.846 1.051 C 6.896 1.177 6.815 1.325 6.678 1.349 L 6.851 2.334 L 7.024 3.319 C 8.403 3.076 9.223 1.624 8.706 0.316 L 7.776 0.683 Z M 6.851 2.334 L 6.71 1.344 C 5.615 1.5 4.834 2.455 4.834 3.526 L 5.834 3.526 L 6.834 3.526 C 6.834 3.475 6.853 3.426 6.886 3.386 C 6.919 3.347 6.957 3.329 6.992 3.324 L 6.851 2.334 Z M 5.834 3.526 L 4.834 3.526 L 4.834 4.167 L 5.834 4.167 L 6.834 4.167 L 6.834 3.526 L 5.834 3.526 Z M 7.501 9.168 L 6.794 9.875 C 7.526 10.607 8.028 11.366 8.268 11.967 C 8.39 12.27 8.426 12.486 8.425 12.612 C 8.424 12.733 8.394 12.694 8.46 12.628 L 9.168 13.335 L 9.875 14.042 C 10.287 13.63 10.422 13.099 10.425 12.625 C 10.428 12.156 10.306 11.675 10.125 11.224 C 9.762 10.316 9.084 9.337 8.208 8.461 L 7.501 9.168 Z M 9.168 13.335 L 8.46 12.628 C 8.527 12.562 8.565 12.592 8.445 12.593 C 8.318 12.594 8.102 12.557 7.8 12.436 C 7.198 12.195 6.44 11.693 5.707 10.961 L 5 11.668 L 4.293 12.375 C 5.17 13.252 6.148 13.929 7.056 14.293 C 7.508 14.474 7.989 14.596 8.457 14.593 C 8.931 14.59 9.463 14.454 9.875 14.042 L 9.168 13.335 Z M 5 11.668 L 5.707 10.961 C 4.975 10.229 4.473 9.47 4.233 8.869 C 4.111 8.567 4.075 8.351 4.076 8.224 C 4.077 8.103 4.107 8.142 4.041 8.208 L 3.333 7.501 L 2.626 6.794 C 2.214 7.206 2.079 7.737 2.076 8.212 C 2.073 8.68 2.195 9.161 2.376 9.613 C 2.739 10.52 3.417 11.499 4.293 12.375 L 5 11.668 Z M 3.333 7.501 L 4.041 8.208 C 3.974 8.274 3.936 8.244 4.056 8.243 C 4.183 8.242 4.399 8.279 4.701 8.4 C 5.303 8.641 6.061 9.143 6.794 9.875 L 7.501 9.168 L 8.208 8.461 C 7.331 7.584 6.352 6.907 5.445 6.543 C 4.993 6.362 4.512 6.24 4.044 6.243 C 3.57 6.246 3.038 6.382 2.626 6.794 L 3.333 7.501 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                  </div>
                </div>
              </div>
              <span style={{
                position: "relative",
                fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 22,
                lineHeight: "100%",
                color: "var(--burgundy-deep-wine)",
                flexGrow: 1,
              }}>Birthdays</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 410.667,
            overflow: "hidden",
            borderRadius: 16,
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "inset 0 0 0 1px var(--tan-ivory)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div className="fig-asset-46d094321e6c02f9" style={{
              position: "relative",
              height: 180,
              flexShrink: 0,
              alignSelf: "stretch",
            }} />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 16,
              padding: "24px 24px 24px 24px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: "rgba(106,30,46,0.1)",
                display: "flex",
                flexDirection: "column",
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
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 2,
                    top: 1.999,
                    width: 20.002,
                    height: 20.002,
                    overflow: "hidden",
                  }}>
                    <svg width={11.485} height={15.835} viewBox="0 0 11.485 15.835" fill="none" style={{
                      position: "absolute",
                      left: 4.258,
                      top: 2.5,
                      width: 11.485,
                      height: 15.835,
                      color: "var(--primary-burgundy)",
                    }}>
                      <path d={"M 0.142 6.701 C -0.3 7.032 -0.39 7.659 -0.058 8.101 C 0.273 8.543 0.9 8.632 1.341 8.301 L 0.742 7.501 L 0.142 6.701 Z M 11.344 8.301 C 11.785 7.97 11.875 7.343 11.544 6.901 C 11.212 6.459 10.586 6.37 10.144 6.701 L 10.744 7.501 L 11.344 8.301 Z M 0.005 0.92 L 0.999 0.816 L 0.999 0.816 L 0.005 0.92 Z M 0.833 0 L 0.833 -1 L 0.832 -1 L 0.833 0 Z M 10.652 0 L 10.652 -1 L 10.652 -1 L 10.652 0 Z M 11.48 0.921 L 10.486 0.816 L 10.486 0.816 L 11.48 0.921 Z M 10.068 14.343 L 11.063 14.448 L 11.063 14.448 L 10.068 14.343 Z M 8.41 15.835 L 8.41 14.835 L 8.41 14.835 L 8.41 15.835 Z M 3.075 15.835 L 3.075 14.835 L 3.07 14.835 L 3.075 15.835 Z M 1.408 14.343 L 0.414 14.447 L 0.414 14.448 L 1.408 14.343 Z M 0.742 7.501 L 1.341 8.301 C 1.89 7.89 2.557 7.667 3.242 7.667 L 3.242 6.667 L 3.242 5.667 C 2.124 5.667 1.036 6.03 0.142 6.701 L 0.742 7.501 Z M 3.242 6.667 L 3.242 7.667 C 3.927 7.667 4.594 7.89 5.143 8.301 L 5.743 7.501 L 6.343 6.701 C 5.448 6.03 4.36 5.667 3.242 5.667 L 3.242 6.667 Z M 5.743 7.501 L 5.143 8.301 C 6.037 8.972 7.125 9.334 8.243 9.334 L 8.243 8.334 L 8.243 7.334 C 7.558 7.334 6.891 7.112 6.343 6.701 L 5.743 7.501 Z M 8.243 8.334 L 8.243 9.334 C 9.361 9.334 10.449 8.972 11.344 8.301 L 10.744 7.501 L 10.144 6.701 C 9.595 7.112 8.929 7.334 8.243 7.334 L 8.243 8.334 Z M 0.005 0.92 L 0.999 0.816 C 1.002 0.839 0.999 0.863 0.992 0.885 L 0.041 0.576 L -0.91 0.266 C -0.99 0.511 -1.017 0.769 -0.99 1.024 L 0.005 0.92 Z M 0.041 0.576 L 0.992 0.885 C 0.985 0.907 0.973 0.928 0.957 0.945 L 0.214 0.276 L -0.529 -0.393 C -0.701 -0.203 -0.831 0.022 -0.91 0.266 L 0.041 0.576 Z M 0.214 0.276 L 0.957 0.945 C 0.942 0.962 0.923 0.976 0.901 0.986 L 0.494 0.072 L 0.087 -0.841 C -0.147 -0.737 -0.357 -0.584 -0.529 -0.393 L 0.214 0.276 Z M 0.494 0.072 L 0.901 0.986 C 0.88 0.995 0.857 1 0.834 1 L 0.833 0 L 0.832 -1 C 0.576 -1 0.322 -0.946 0.087 -0.841 L 0.494 0.072 Z M 0.833 0 L 0.833 1 L 10.652 1 L 10.652 0 L 10.652 -1 L 0.833 -1 L 0.833 0 Z M 10.652 0 L 10.651 1 C 10.628 1 10.605 0.995 10.584 0.986 L 10.991 0.072 L 11.398 -0.841 C 11.163 -0.946 10.909 -1 10.652 -1 L 10.652 0 Z M 10.991 0.072 L 10.584 0.986 C 10.562 0.976 10.543 0.962 10.528 0.945 L 11.271 0.276 L 12.015 -0.393 C 11.843 -0.584 11.633 -0.737 11.398 -0.841 L 10.991 0.072 Z M 11.271 0.276 L 10.528 0.945 C 10.512 0.928 10.5 0.907 10.493 0.885 L 11.444 0.576 L 12.395 0.268 C 12.316 0.023 12.186 -0.202 12.015 -0.393 L 11.271 0.276 Z M 11.444 0.576 L 10.493 0.885 C 10.486 0.863 10.483 0.839 10.486 0.816 L 11.48 0.921 L 12.475 1.026 C 12.502 0.77 12.475 0.512 12.395 0.268 L 11.444 0.576 Z M 11.48 0.921 L 10.486 0.816 L 9.074 14.239 L 10.068 14.343 L 11.063 14.448 L 12.475 1.026 L 11.48 0.921 Z M 10.068 14.343 L 9.074 14.238 C 9.057 14.402 8.979 14.554 8.857 14.664 L 9.525 15.408 L 10.194 16.151 C 10.684 15.71 10.994 15.104 11.063 14.448 L 10.068 14.343 Z M 9.525 15.408 L 8.857 14.664 C 8.734 14.774 8.575 14.835 8.41 14.835 L 8.41 15.835 L 8.409 16.835 C 9.068 16.836 9.704 16.592 10.194 16.151 L 9.525 15.408 Z M 8.41 15.835 L 8.41 14.835 L 3.075 14.835 L 3.075 15.835 L 3.075 16.835 L 8.41 16.835 L 8.41 15.835 Z M 3.075 15.835 L 3.07 14.835 C 2.904 14.836 2.744 14.776 2.621 14.665 L 1.954 15.41 L 1.287 16.156 C 1.78 16.597 2.419 16.839 3.081 16.835 L 3.075 15.835 Z M 1.954 15.41 L 2.621 14.665 C 2.498 14.555 2.42 14.403 2.403 14.238 L 1.408 14.343 L 0.414 14.448 C 0.483 15.106 0.795 15.715 1.287 16.156 L 1.954 15.41 Z M 1.408 14.343 L 2.403 14.239 L 0.999 0.816 L 0.005 0.92 L -0.99 1.024 L 0.414 14.447 L 1.408 14.343 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                  </div>
                </div>
              </div>
              <span style={{
                position: "relative",
                fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 22,
                lineHeight: "100%",
                color: "var(--burgundy-deep-wine)",
                flexGrow: 1,
              }}>Weddings &amp; Anniversaries</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 410.667,
            overflow: "hidden",
            borderRadius: 16,
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "inset 0 0 0 1px var(--tan-ivory)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div className="fig-asset-0209dcd293450b8c" style={{
              position: "relative",
              height: 180,
              flexShrink: 0,
              alignSelf: "stretch",
            }} />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 16,
              padding: "24px 24px 24px 24px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: "rgba(106,30,46,0.1)",
                display: "flex",
                flexDirection: "column",
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
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 2,
                    top: 1.999,
                    width: 20.002,
                    height: 20.002,
                    overflow: "hidden",
                  }}>
                    <svg width={16.549} height={14.929} viewBox="0 0 16.549 14.929" fill="none" style={{
                      position: "absolute",
                      left: 1.726,
                      top: 2.5,
                      width: 16.549,
                      height: 14.929,
                      color: "var(--primary-burgundy)",
                    }}>
                      <path d={"M 7.122 9.977 C 6.648 9.693 6.034 9.846 5.75 10.32 C 5.466 10.794 5.619 11.408 6.093 11.692 L 6.607 10.834 L 7.122 9.977 Z M 10.456 11.692 C 10.929 11.408 11.083 10.794 10.799 10.32 C 10.515 9.846 9.9 9.693 9.427 9.977 L 9.941 10.834 L 10.456 11.692 Z M 10.775 6.501 C 10.222 6.501 9.775 6.948 9.775 7.501 C 9.775 8.053 10.222 8.501 10.775 8.501 L 10.775 7.501 L 10.775 6.501 Z M 10.783 8.501 C 11.335 8.501 11.783 8.053 11.783 7.501 C 11.783 6.948 11.335 6.501 10.783 6.501 L 10.783 7.501 L 10.783 8.501 Z M 15.249 2.611 C 14.936 2.156 14.314 2.041 13.859 2.354 C 13.404 2.667 13.289 3.289 13.602 3.745 L 14.426 3.178 L 15.249 2.611 Z M 15.609 6.001 L 14.627 6.191 L 14.723 6.682 L 15.173 6.901 L 15.609 6.001 Z M 15.609 9.001 L 15.173 8.101 L 14.734 8.314 L 14.631 8.791 L 15.609 9.001 Z M 0.94 9.001 L 1.918 8.791 L 1.816 8.314 L 1.376 8.101 L 0.94 9.001 Z M 0 7.501 L 1 7.501 L 0 7.501 Z M 0.94 6.001 L 1.376 6.901 L 1.821 6.685 L 1.92 6.201 L 0.94 6.001 Z M 8.275 0 L 8.275 -1 L 8.273 -1 L 8.275 0 Z M 9.275 3.334 C 9.275 2.781 8.827 2.334 8.275 2.334 C 7.722 2.334 7.275 2.781 7.275 3.334 L 8.275 3.334 L 9.275 3.334 Z M 5.774 6.501 C 5.222 6.501 4.774 6.948 4.774 7.501 C 4.774 8.053 5.222 8.501 5.774 8.501 L 5.774 7.501 L 5.774 6.501 Z M 5.782 8.501 C 6.335 8.501 6.782 8.053 6.782 7.501 C 6.782 6.948 6.335 6.501 5.782 6.501 L 5.782 7.501 L 5.782 8.501 Z M 6.607 10.834 L 6.093 11.692 C 6.684 12.047 7.45 12.251 8.274 12.251 L 8.274 11.251 L 8.274 10.251 C 7.765 10.251 7.364 10.122 7.122 9.977 L 6.607 10.834 Z M 8.274 11.251 L 8.274 12.251 C 9.099 12.251 9.864 12.047 10.456 11.692 L 9.941 10.834 L 9.427 9.977 C 9.184 10.122 8.783 10.251 8.274 10.251 L 8.274 11.251 Z M 10.775 7.501 L 10.775 8.501 L 10.783 8.501 L 10.783 7.501 L 10.783 6.501 L 10.775 6.501 L 10.775 7.501 Z M 14.426 3.178 L 13.602 3.745 C 14.108 4.481 14.457 5.314 14.627 6.191 L 15.609 6.001 L 16.591 5.81 C 16.368 4.663 15.912 3.574 15.249 2.611 L 14.426 3.178 Z M 15.609 6.001 L 15.173 6.901 C 15.286 6.955 15.381 7.04 15.448 7.147 L 16.295 6.616 L 17.142 6.084 C 16.876 5.66 16.496 5.319 16.045 5.101 L 15.609 6.001 Z M 16.295 6.616 L 15.448 7.147 C 15.514 7.253 15.549 7.376 15.549 7.501 L 16.549 7.501 L 17.549 7.501 C 17.549 7 17.408 6.509 17.142 6.084 L 16.295 6.616 Z M 16.549 7.501 L 15.549 7.501 C 15.549 7.626 15.514 7.749 15.448 7.855 L 16.295 8.386 L 17.142 8.917 C 17.408 8.493 17.549 8.002 17.549 7.501 L 16.549 7.501 Z M 16.295 8.386 L 15.448 7.855 C 15.381 7.961 15.286 8.046 15.173 8.101 L 15.609 9.001 L 16.045 9.901 C 16.496 9.683 16.876 9.342 17.142 8.917 L 16.295 8.386 Z M 15.609 9.001 L 14.631 8.791 C 14.319 10.246 13.518 11.549 12.361 12.484 L 12.99 13.262 L 13.619 14.04 C 15.131 12.817 16.179 11.112 16.587 9.211 L 15.609 9.001 Z M 12.99 13.262 L 12.361 12.484 C 11.205 13.419 9.762 13.929 8.275 13.929 L 8.275 14.929 L 8.275 15.929 C 10.22 15.929 12.106 15.262 13.619 14.04 L 12.99 13.262 Z M 8.275 14.929 L 8.275 13.929 C 6.787 13.929 5.345 13.419 4.188 12.484 L 3.559 13.262 L 2.931 14.04 C 4.443 15.262 6.33 15.929 8.275 15.929 L 8.275 14.929 Z M 3.559 13.262 L 4.188 12.484 C 3.031 11.549 2.23 10.246 1.918 8.791 L 0.94 9.001 L -0.037 9.211 C 0.37 11.112 1.418 12.817 2.931 14.04 L 3.559 13.262 Z M 0.94 9.001 L 1.376 8.101 C 1.263 8.046 1.168 7.961 1.102 7.855 L 0.255 8.386 L -0.593 8.917 C -0.327 9.342 0.054 9.683 0.504 9.901 L 0.94 9.001 Z M 0.255 8.386 L 1.102 7.855 C 1.035 7.749 1 7.626 1 7.501 L 0 7.501 L -1 7.501 C -1 8.002 -0.859 8.493 -0.593 8.917 L 0.255 8.386 Z M 0 7.501 L 1 7.501 C 1 7.376 1.035 7.253 1.102 7.147 L 0.255 6.616 L -0.593 6.084 C -0.859 6.509 -1 7 -1 7.501 L 0 7.501 Z M 0.255 6.616 L 1.102 7.147 C 1.168 7.04 1.263 6.955 1.376 6.901 L 0.94 6.001 L 0.504 5.101 C 0.054 5.319 -0.327 5.66 -0.593 6.084 L 0.255 6.616 Z M 0.94 6.001 L 1.92 6.201 C 2.219 4.735 3.015 3.417 4.173 2.469 L 3.54 1.695 L 2.907 0.922 C 1.392 2.16 0.352 3.884 -0.039 5.801 L 0.94 6.001 Z M 3.54 1.695 L 4.173 2.469 C 5.331 1.522 6.78 1.003 8.277 1 L 8.275 0 L 8.273 -1 C 6.316 -0.996 4.421 -0.317 2.907 0.922 L 3.54 1.695 Z M 8.275 0 L 8.275 1 C 8.933 1 9.449 1.182 9.774 1.416 C 10.093 1.646 10.192 1.889 10.192 2.084 L 11.192 2.084 L 12.192 2.084 C 12.192 1.112 11.665 0.313 10.943 -0.207 C 10.225 -0.724 9.283 -1 8.275 -1 L 8.275 0 Z M 11.192 2.084 L 10.192 2.084 C 10.192 2.457 10.071 2.752 9.923 2.936 C 9.777 3.117 9.63 3.167 9.525 3.167 L 9.525 4.167 L 9.525 5.167 C 11.185 5.167 12.192 3.59 12.192 2.084 L 11.192 2.084 Z M 9.525 4.167 L 9.525 3.167 C 9.44 3.167 9.364 3.156 9.303 3.14 C 9.24 3.124 9.202 3.104 9.187 3.094 C 9.17 3.084 9.191 3.092 9.218 3.135 C 9.249 3.184 9.275 3.255 9.275 3.334 L 8.275 3.334 L 7.275 3.334 C 7.275 4.023 7.688 4.511 8.113 4.782 C 8.532 5.048 9.039 5.167 9.525 5.167 L 9.525 4.167 Z M 5.774 7.501 L 5.774 8.501 L 5.782 8.501 L 5.782 7.501 L 5.782 6.501 L 5.774 6.501 L 5.774 7.501 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                  </div>
                </div>
              </div>
              <span style={{
                position: "relative",
                fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 22,
                lineHeight: "100%",
                color: "var(--burgundy-deep-wine)",
                flexGrow: 1,
              }}>New Babies</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 410.667,
            overflow: "hidden",
            borderRadius: 16,
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "inset 0 0 0 1px var(--tan-ivory)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div className="fig-asset-da06b111e209c20a" style={{
              position: "relative",
              height: 180,
              flexShrink: 0,
              alignSelf: "stretch",
            }} />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 16,
              padding: "24px 24px 24px 24px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: "rgba(106,30,46,0.1)",
                display: "flex",
                flexDirection: "column",
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
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 2,
                    top: 1.999,
                    width: 20.002,
                    height: 20.002,
                    overflow: "hidden",
                  }}>
                    <svg width={16.669} height={16.671} viewBox="0 0 16.669 16.671" fill="none" style={{
                      position: "absolute",
                      left: 1.668,
                      top: 1.666,
                      width: 16.669,
                      height: 16.671,
                      color: "var(--primary-burgundy)",
                    }}>
                      <path d={"M 10.707 3.46 C 10.316 3.07 9.683 3.07 9.293 3.46 C 8.902 3.851 8.902 4.484 9.293 4.874 L 10 4.167 L 10.707 3.46 Z M 11.793 7.375 C 12.183 7.765 12.817 7.765 13.207 7.375 C 13.598 6.984 13.598 6.351 13.207 5.96 L 12.5 6.668 L 11.793 7.375 Z M 3.499 3.334 C 3.499 2.781 3.052 2.334 2.499 2.334 C 1.947 2.334 1.499 2.781 1.499 3.334 L 2.499 3.334 L 3.499 3.334 Z M 1.499 6.668 C 1.499 7.22 1.947 7.668 2.499 7.668 C 3.052 7.668 3.499 7.22 3.499 6.668 L 2.499 6.668 L 1.499 6.668 Z M 15.167 10.001 C 15.167 9.449 14.719 9.001 14.167 9.001 C 13.614 9.001 13.167 9.449 13.167 10.001 L 14.167 10.001 L 15.167 10.001 Z M 13.167 13.335 C 13.167 13.887 13.614 14.335 14.167 14.335 C 14.719 14.335 15.167 13.887 15.167 13.335 L 14.167 13.335 L 13.167 13.335 Z M 7.666 0 C 7.666 -0.552 7.219 -1 6.666 -1 C 6.114 -1 5.666 -0.552 5.666 0 L 6.666 0 L 7.666 0 Z M 5.666 1.667 C 5.666 2.219 6.114 2.667 6.666 2.667 C 7.219 2.667 7.666 2.219 7.666 1.667 L 6.666 1.667 L 5.666 1.667 Z M 4.166 6.001 C 4.718 6.001 5.166 5.553 5.166 5.001 C 5.166 4.448 4.718 4.001 4.166 4.001 L 4.166 5.001 L 4.166 6.001 Z M 0.833 4.001 C 0.28 4.001 -0.167 4.448 -0.167 5.001 C -0.167 5.553 0.28 6.001 0.833 6.001 L 0.833 5.001 L 0.833 4.001 Z M 15.834 12.668 C 16.386 12.668 16.834 12.221 16.834 11.668 C 16.834 11.116 16.386 10.668 15.834 10.668 L 15.834 11.668 L 15.834 12.668 Z M 12.5 10.668 C 11.948 10.668 11.5 11.116 11.5 11.668 C 11.5 12.221 11.948 12.668 12.5 12.668 L 12.5 11.668 L 12.5 10.668 Z M 7.5 1.833 C 8.052 1.833 8.5 1.386 8.5 0.833 C 8.5 0.281 8.052 -0.167 7.5 -0.167 L 7.5 0.833 L 7.5 1.833 Z M 5.833 -0.167 C 5.281 -0.167 4.833 0.281 4.833 0.833 C 4.833 1.386 5.281 1.833 5.833 1.833 L 5.833 0.833 L 5.833 -0.167 Z M 16.367 1.367 L 15.66 2.074 L 15.669 2.083 L 16.367 1.367 Z M 15.3 0.3 L 14.589 1.003 L 14.593 1.007 L 15.3 0.3 Z M 14.583 0.001 L 14.583 1.001 L 14.583 0.001 Z M 13.867 0.3 L 14.574 1.007 L 14.577 1.003 L 13.867 0.3 Z M 0.299 13.868 L 1.003 14.579 L 1.006 14.575 L 0.299 13.868 Z M 0.299 15.302 L 1.006 14.595 L 1.003 14.591 L 0.299 15.302 Z M 1.366 16.369 L 2.083 15.671 L 2.073 15.662 L 1.366 16.369 Z M 2.799 16.369 L 2.092 15.662 L 2.083 15.671 L 2.799 16.369 Z M 16.367 2.8 L 15.669 2.084 L 15.66 2.093 L 16.367 2.8 Z M 10 4.167 L 9.293 4.874 L 11.793 7.375 L 12.5 6.668 L 13.207 5.96 L 10.707 3.46 L 10 4.167 Z M 2.499 3.334 L 1.499 3.334 L 1.499 6.668 L 2.499 6.668 L 3.499 6.668 L 3.499 3.334 L 2.499 3.334 Z M 14.167 10.001 L 13.167 10.001 L 13.167 13.335 L 14.167 13.335 L 15.167 13.335 L 15.167 10.001 L 14.167 10.001 Z M 6.666 0 L 5.666 0 L 5.666 1.667 L 6.666 1.667 L 7.666 1.667 L 7.666 0 L 6.666 0 Z M 4.166 5.001 L 4.166 4.001 L 0.833 4.001 L 0.833 5.001 L 0.833 6.001 L 4.166 6.001 L 4.166 5.001 Z M 15.834 11.668 L 15.834 10.668 L 12.5 10.668 L 12.5 11.668 L 12.5 12.668 L 15.834 12.668 L 15.834 11.668 Z M 7.5 0.833 L 7.5 -0.167 L 5.833 -0.167 L 5.833 0.833 L 5.833 1.833 L 7.5 1.833 L 7.5 0.833 Z M 16.367 1.367 L 17.074 0.66 L 16.007 -0.407 L 15.3 0.3 L 14.593 1.007 L 15.66 2.074 L 16.367 1.367 Z M 15.3 0.3 L 16.011 -0.404 C 15.824 -0.592 15.602 -0.742 15.357 -0.844 L 14.972 0.079 L 14.586 1.001 C 14.588 1.002 14.588 1.003 14.589 1.003 L 15.3 0.3 Z M 14.972 0.079 L 15.357 -0.844 C 15.112 -0.947 14.849 -0.999 14.583 -0.999 L 14.583 0.001 L 14.583 1.001 C 14.584 1.001 14.585 1.001 14.586 1.001 L 14.972 0.079 Z M 14.583 0.001 L 14.583 -0.999 C 14.318 -0.999 14.055 -0.947 13.81 -0.844 L 14.195 0.079 L 14.58 1.001 C 14.581 1.001 14.582 1.001 14.583 1.001 L 14.583 0.001 Z M 14.195 0.079 L 13.81 -0.844 C 13.565 -0.742 13.343 -0.592 13.156 -0.404 L 13.867 0.3 L 14.577 1.003 C 14.578 1.003 14.579 1.002 14.58 1.001 L 14.195 0.079 Z M 13.867 0.3 L 13.159 -0.407 L -0.408 13.161 L 0.299 13.868 L 1.006 14.575 L 14.574 1.007 L 13.867 0.3 Z M 0.299 13.868 L -0.404 13.158 C -0.593 13.344 -0.743 13.567 -0.845 13.812 L 0.078 14.197 L 1.001 14.582 C 1.001 14.581 1.002 14.58 1.003 14.579 L 0.299 13.868 Z M 0.078 14.197 L -0.845 13.812 C -0.947 14.057 -1 14.32 -1 14.585 L 0 14.585 L 1 14.585 C 1 14.584 1 14.583 1.001 14.582 L 0.078 14.197 Z M 0 14.585 L -1 14.585 C -1 14.851 -0.947 15.113 -0.845 15.358 L 0.078 14.973 L 1.001 14.588 C 1 14.587 1 14.586 1 14.585 L 0 14.585 Z M 0.078 14.973 L -0.845 15.358 C -0.743 15.604 -0.593 15.826 -0.404 16.013 L 0.299 15.302 L 1.003 14.591 C 1.002 14.59 1.001 14.589 1.001 14.588 L 0.078 14.973 Z M 0.299 15.302 L -0.408 16.009 L 0.659 17.076 L 1.366 16.369 L 2.073 15.662 L 1.006 14.595 L 0.299 15.302 Z M 1.366 16.369 L 0.649 17.066 C 0.835 17.258 1.058 17.41 1.305 17.514 L 1.693 16.593 L 2.082 15.671 L 2.082 15.671 L 1.366 16.369 Z M 1.693 16.593 L 1.305 17.514 C 1.551 17.618 1.815 17.671 2.082 17.671 L 2.082 16.671 L 2.082 15.671 L 2.082 15.671 L 1.693 16.593 Z M 2.082 16.671 L 2.082 17.671 C 2.35 17.671 2.614 17.618 2.86 17.514 L 2.471 16.593 L 2.082 15.671 L 2.082 15.671 L 2.082 16.671 Z M 2.471 16.593 L 2.86 17.514 C 3.107 17.41 3.33 17.258 3.516 17.066 L 2.799 16.369 L 2.083 15.671 L 2.082 15.671 L 2.471 16.593 Z M 2.799 16.369 L 3.506 17.076 L 17.074 3.507 L 16.367 2.8 L 15.66 2.093 L 2.092 15.662 L 2.799 16.369 Z M 16.367 2.8 L 17.064 3.517 C 17.256 3.33 17.408 3.108 17.512 2.861 L 16.591 2.472 L 15.669 2.084 L 15.669 2.084 L 16.367 2.8 Z M 16.591 2.472 L 17.512 2.861 C 17.616 2.615 17.669 2.351 17.669 2.083 L 16.669 2.083 L 15.669 2.083 L 15.669 2.084 L 16.591 2.472 Z M 16.669 2.083 L 17.669 2.083 C 17.669 1.816 17.616 1.552 17.512 1.305 L 16.591 1.694 L 15.669 2.083 L 15.669 2.083 L 16.669 2.083 Z M 16.591 1.694 L 17.512 1.305 C 17.408 1.059 17.256 0.836 17.064 0.65 L 16.367 1.367 L 15.669 2.083 L 15.669 2.083 L 16.591 1.694 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                  </div>
                </div>
              </div>
              <span style={{
                position: "relative",
                fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 22,
                lineHeight: "100%",
                color: "var(--burgundy-deep-wine)",
                flexGrow: 1,
              }}>Congratulations</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 410.667,
            overflow: "hidden",
            borderRadius: 16,
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "inset 0 0 0 1px var(--tan-ivory)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div className="fig-asset-158e4cc6cc9b74c8" style={{
              position: "relative",
              height: 180,
              flexShrink: 0,
              alignSelf: "stretch",
            }} />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 16,
              padding: "24px 24px 24px 24px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: "rgba(106,30,46,0.1)",
                display: "flex",
                flexDirection: "column",
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
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 2,
                    top: 1.999,
                    width: 20.002,
                    height: 20.002,
                    overflow: "hidden",
                  }}>
                    <svg width={16.669} height={15.001} viewBox="0 0 16.669 15.001" fill="none" style={{
                      position: "absolute",
                      left: 1.666,
                      top: 1.666,
                      width: 16.669,
                      height: 15.001,
                      color: "var(--primary-burgundy)",
                    }}>
                      <path d={"M 8.335 7.334 C 7.782 7.334 7.335 7.782 7.335 8.334 C 7.335 8.886 7.782 9.334 8.335 9.334 L 8.335 8.334 L 8.335 7.334 Z M 8.343 9.334 C 8.895 9.334 9.343 8.886 9.343 8.334 C 9.343 7.782 8.895 7.334 8.343 7.334 L 8.343 8.334 L 8.343 9.334 Z M 10.669 3.334 C 10.669 3.886 11.116 4.334 11.669 4.334 C 12.221 4.334 12.669 3.886 12.669 3.334 L 11.669 3.334 L 10.669 3.334 Z M 10.002 0 L 10.002 -1 L 10.002 0 Z M 6.668 0 L 6.668 -1 L 6.668 0 Z M 5.001 1.667 L 4.001 1.667 L 5.001 1.667 Z M 4.001 3.334 C 4.001 3.886 4.449 4.334 5.001 4.334 C 5.553 4.334 6.001 3.886 6.001 3.334 L 5.001 3.334 L 4.001 3.334 Z M 17.22 10.002 C 17.681 9.698 17.808 9.077 17.504 8.616 C 17.2 8.156 16.579 8.029 16.118 8.333 L 16.669 9.167 L 17.22 10.002 Z M 8.335 11.67 L 8.335 10.67 L 8.335 11.67 Z M 0.551 8.333 C 0.09 8.029 -0.53 8.156 -0.835 8.616 C -1.139 9.077 -1.012 9.698 -0.551 10.002 L 0 9.167 L 0.551 8.333 Z M 8.335 8.334 L 8.335 9.334 L 8.343 9.334 L 8.343 8.334 L 8.343 7.334 L 8.335 7.334 L 8.335 8.334 Z M 11.669 3.334 L 12.669 3.334 L 12.669 1.667 L 11.669 1.667 L 10.669 1.667 L 10.669 3.334 L 11.669 3.334 Z M 11.669 1.667 L 12.669 1.667 C 12.669 0.959 12.388 0.281 11.887 -0.219 L 11.18 0.488 L 10.473 1.195 C 10.598 1.32 10.669 1.49 10.669 1.667 L 11.669 1.667 Z M 11.18 0.488 L 11.887 -0.219 C 11.387 -0.719 10.709 -1 10.002 -1 L 10.002 0 L 10.002 1 C 10.179 1 10.348 1.07 10.473 1.195 L 11.18 0.488 Z M 10.002 0 L 10.002 -1 L 6.668 -1 L 6.668 0 L 6.668 1 L 10.002 1 L 10.002 0 Z M 6.668 0 L 6.668 -1 C 5.96 -1 5.282 -0.719 4.782 -0.219 L 5.489 0.488 L 6.196 1.195 C 6.321 1.07 6.491 1 6.668 1 L 6.668 0 Z M 5.489 0.488 L 4.782 -0.219 C 4.282 0.281 4.001 0.959 4.001 1.667 L 5.001 1.667 L 6.001 1.667 C 6.001 1.49 6.071 1.32 6.196 1.195 L 5.489 0.488 Z M 5.001 1.667 L 4.001 1.667 L 4.001 3.334 L 5.001 3.334 L 6.001 3.334 L 6.001 1.667 L 5.001 1.667 Z M 16.669 9.167 L 16.118 8.333 C 13.809 9.858 11.102 10.67 8.335 10.67 L 8.335 11.67 L 8.335 12.67 C 11.494 12.67 14.584 11.742 17.22 10.002 L 16.669 9.167 Z M 8.335 11.67 L 8.335 10.67 C 5.567 10.67 2.861 9.858 0.551 8.333 L 0 9.167 L -0.551 10.002 C 2.086 11.742 5.175 12.67 8.335 12.67 L 8.335 11.67 Z M 1.667 3.334 L 1.667 4.334 L 15.002 4.334 L 15.002 3.334 L 15.002 2.334 L 1.667 2.334 L 1.667 3.334 Z M 15.002 3.334 L 15.002 4.334 C 15.371 4.334 15.669 4.632 15.669 5 L 16.669 5 L 17.669 5 C 17.669 3.527 16.475 2.334 15.002 2.334 L 15.002 3.334 Z M 16.669 5 L 15.669 5 L 15.669 13.334 L 16.669 13.334 L 17.669 13.334 L 17.669 5 L 16.669 5 Z M 16.669 13.334 L 15.669 13.334 C 15.669 13.703 15.371 14.001 15.002 14.001 L 15.002 15.001 L 15.002 16.001 C 16.475 16.001 17.669 14.807 17.669 13.334 L 16.669 13.334 Z M 15.002 15.001 L 15.002 14.001 L 1.667 14.001 L 1.667 15.001 L 1.667 16.001 L 15.002 16.001 L 15.002 15.001 Z M 1.667 15.001 L 1.667 14.001 C 1.299 14.001 1 13.703 1 13.334 L 0 13.334 L -1 13.334 C -1 14.807 0.194 16.001 1.667 16.001 L 1.667 15.001 Z M 0 13.334 L 1 13.334 L 1 5 L 0 5 L -1 5 L -1 13.334 L 0 13.334 Z M 0 5 L 1 5 C 1 4.632 1.299 4.334 1.667 4.334 L 1.667 3.334 L 1.667 2.334 C 0.194 2.334 -1 3.527 -1 5 L 0 5 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                  </div>
                </div>
              </div>
              <span style={{
                position: "relative",
                fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 22,
                lineHeight: "100%",
                color: "var(--burgundy-deep-wine)",
                flexGrow: 1,
              }}>Thank You</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 410.667,
            overflow: "hidden",
            borderRadius: 16,
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "inset 0 0 0 1px var(--tan-ivory)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div className="fig-asset-abe88e8d2442139e" style={{
              position: "relative",
              height: 180,
              flexShrink: 0,
              alignSelf: "stretch",
            }} />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 16,
              padding: "24px 24px 24px 24px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: "rgba(106,30,46,0.1)",
                display: "flex",
                flexDirection: "column",
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
                  flexShrink: 0,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 2,
                    top: 1.999,
                    width: 20.002,
                    height: 20.002,
                    overflow: "hidden",
                  }}>
                    <svg width={16.669} height={16.667} viewBox="0 0 16.669 16.667" fill="none" style={{
                      position: "absolute",
                      left: 1.666,
                      top: 1.626,
                      width: 16.669,
                      height: 16.667,
                      color: "var(--primary-burgundy)",
                    }}>
                      <path d={"M 17.669 7.542 C 17.669 6.99 17.222 6.542 16.669 6.542 C 16.117 6.542 15.669 6.99 15.669 7.542 L 16.669 7.542 L 17.669 7.542 Z M 16.669 8.375 L 17.669 8.38 L 17.669 8.375 L 16.669 8.375 Z M 9.068 1.037 C 9.618 1.092 10.108 0.691 10.163 0.142 C 10.218 -0.408 9.818 -0.898 9.268 -0.953 L 9.168 0.042 L 9.068 1.037 Z M 5.801 9.442 C 5.469 9 4.843 8.911 4.401 9.242 C 3.959 9.573 3.869 10.2 4.201 10.642 L 5.001 10.042 L 5.801 9.442 Z M 12.468 10.642 C 12.8 10.2 12.71 9.573 12.269 9.242 C 11.827 8.911 11.2 9 10.869 9.442 L 11.669 10.042 L 12.468 10.642 Z M 5.834 4.875 C 5.282 4.875 4.834 5.323 4.834 5.875 C 4.834 6.427 5.282 6.875 5.834 6.875 L 5.834 5.875 L 5.834 4.875 Z M 5.843 6.875 C 6.395 6.875 6.843 6.427 6.843 5.875 C 6.843 5.323 6.395 4.875 5.843 4.875 L 5.843 5.875 L 5.843 6.875 Z M 10.835 4.875 C 10.283 4.875 9.835 5.323 9.835 5.875 C 9.835 6.427 10.283 6.875 10.835 6.875 L 10.835 5.875 L 10.835 4.875 Z M 10.843 6.875 C 11.396 6.875 11.843 6.427 11.843 5.875 C 11.843 5.323 11.396 4.875 10.843 4.875 L 10.843 5.875 L 10.843 6.875 Z M 11.669 1.542 C 11.116 1.542 10.669 1.989 10.669 2.542 C 10.669 3.094 11.116 3.542 11.669 3.542 L 11.669 2.542 L 11.669 1.542 Z M 16.669 3.542 C 17.222 3.542 17.669 3.094 17.669 2.542 C 17.669 1.989 17.222 1.542 16.669 1.542 L 16.669 2.542 L 16.669 3.542 Z M 15.169 0.042 C 15.169 -0.511 14.721 -0.958 14.169 -0.958 C 13.617 -0.958 13.169 -0.511 13.169 0.042 L 14.169 0.042 L 15.169 0.042 Z M 13.169 5.042 C 13.169 5.594 13.617 6.042 14.169 6.042 C 14.721 6.042 15.169 5.594 15.169 5.042 L 14.169 5.042 L 13.169 5.042 Z M 16.669 7.542 L 15.669 7.542 L 15.669 8.375 L 16.669 8.375 L 17.669 8.375 L 17.669 7.542 L 16.669 7.542 Z M 16.669 8.375 L 15.669 8.37 C 15.662 9.851 15.207 11.294 14.364 12.51 L 15.185 13.08 L 16.007 13.65 C 17.08 12.101 17.66 10.264 17.669 8.38 L 16.669 8.375 Z M 15.185 13.08 L 14.364 12.51 C 13.52 13.727 12.329 14.66 10.945 15.187 L 11.301 16.122 L 11.657 17.056 C 13.418 16.386 14.934 15.198 16.007 13.65 L 15.185 13.08 Z M 11.301 16.122 L 10.945 15.187 C 9.562 15.714 8.051 15.81 6.612 15.462 L 6.377 16.434 L 6.143 17.406 C 7.974 17.849 9.896 17.727 11.657 17.056 L 11.301 16.122 Z M 6.377 16.434 L 6.612 15.462 C 5.173 15.115 3.873 14.34 2.883 13.24 L 2.14 13.909 L 1.396 14.578 C 2.657 15.978 4.311 16.964 6.143 17.406 L 6.377 16.434 Z M 2.14 13.909 L 2.883 13.24 C 1.893 12.139 1.258 10.765 1.064 9.298 L 0.072 9.429 L -0.919 9.561 C -0.671 11.429 0.136 13.177 1.396 14.578 L 2.14 13.909 Z M 0.072 9.429 L 1.064 9.298 C 0.869 7.831 1.123 6.339 1.792 5.018 L 0.9 4.566 L 0.008 4.114 C -0.843 5.795 -1.167 7.693 -0.919 9.561 L 0.072 9.429 Z M 0.9 4.566 L 1.792 5.018 C 2.461 3.698 3.515 2.611 4.813 1.901 L 4.333 1.023 L 3.853 0.146 C 2.2 1.051 0.86 2.434 0.008 4.114 L 0.9 4.566 Z M 4.333 1.023 L 4.813 1.901 C 6.112 1.19 7.595 0.889 9.068 1.037 L 9.168 0.042 L 9.268 -0.953 C 7.393 -1.142 5.506 -0.758 3.853 0.146 L 4.333 1.023 Z M 5.001 10.042 C 4.201 10.642 4.201 10.642 4.201 10.643 C 4.201 10.643 4.202 10.643 4.202 10.643 C 4.202 10.644 4.203 10.644 4.203 10.645 C 4.204 10.646 4.205 10.647 4.206 10.648 C 4.207 10.651 4.21 10.654 4.212 10.657 C 4.217 10.664 4.224 10.672 4.231 10.681 C 4.247 10.701 4.267 10.726 4.293 10.756 C 4.344 10.817 4.415 10.899 4.507 10.994 C 4.689 11.184 4.955 11.434 5.298 11.684 C 5.982 12.181 7.017 12.709 8.335 12.709 L 8.335 11.709 L 8.335 10.709 C 7.568 10.709 6.937 10.403 6.474 10.066 C 6.245 9.9 6.068 9.733 5.951 9.61 C 5.892 9.55 5.85 9.501 5.825 9.471 C 5.812 9.455 5.803 9.445 5.799 9.44 C 5.797 9.437 5.796 9.436 5.797 9.436 C 5.797 9.437 5.797 9.437 5.798 9.438 C 5.798 9.438 5.799 9.439 5.799 9.44 C 5.799 9.44 5.8 9.44 5.8 9.441 C 5.8 9.441 5.8 9.441 5.8 9.441 C 5.801 9.442 5.801 9.442 5.001 10.042 Z M 8.335 11.709 L 8.335 12.709 C 9.652 12.709 10.688 12.181 11.371 11.684 C 11.715 11.434 11.98 11.184 12.163 10.994 C 12.254 10.899 12.326 10.817 12.377 10.756 C 12.402 10.726 12.423 10.701 12.438 10.681 C 12.446 10.672 12.452 10.664 12.457 10.657 C 12.46 10.654 12.462 10.651 12.464 10.648 C 12.465 10.647 12.466 10.646 12.466 10.645 C 12.467 10.644 12.467 10.644 12.468 10.643 C 12.468 10.643 12.468 10.643 12.468 10.643 C 12.468 10.642 12.468 10.642 11.669 10.042 C 10.869 9.442 10.869 9.442 10.869 9.441 C 10.869 9.441 10.869 9.441 10.869 9.441 C 10.87 9.44 10.87 9.44 10.87 9.44 C 10.871 9.439 10.871 9.438 10.871 9.438 C 10.872 9.437 10.873 9.437 10.873 9.436 C 10.873 9.436 10.872 9.437 10.87 9.44 C 10.866 9.445 10.858 9.455 10.845 9.471 C 10.819 9.501 10.777 9.55 10.719 9.61 C 10.601 9.733 10.424 9.9 10.195 10.066 C 9.732 10.403 9.101 10.709 8.335 10.709 L 8.335 11.709 Z M 5.834 5.875 L 5.834 6.875 L 5.843 6.875 L 5.843 5.875 L 5.843 4.875 L 5.834 4.875 L 5.834 5.875 Z M 10.835 5.875 L 10.835 6.875 L 10.843 6.875 L 10.843 5.875 L 10.843 4.875 L 10.835 4.875 L 10.835 5.875 Z M 11.669 2.542 L 11.669 3.542 L 16.669 3.542 L 16.669 2.542 L 16.669 1.542 L 11.669 1.542 L 11.669 2.542 Z M 14.169 0.042 L 13.169 0.042 L 13.169 5.042 L 14.169 5.042 L 15.169 5.042 L 15.169 0.042 L 14.169 0.042 Z"} fill="currentColor" fillRule="nonzero" />
                    </svg>
                  </div>
                </div>
              </div>
              <span style={{
                position: "relative",
                fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 22,
                lineHeight: "100%",
                color: "var(--burgundy-deep-wine)",
                flexGrow: 1,
              }}>Just Because</span>
            </div>
          </div>
        </div>
      </div>
      <div data-section="content" style={{
        position: "relative",
        background: "linear-gradient(0deg, rgb(245,237,224) -29.73%, rgb(255,255,255) 8.49%, rgb(255,255,255) 53.08%, rgb(232,212,180) 97.68%)",
        borderTop: "1px solid rgb(229,231,235)",
        borderRight: "1px solid rgb(229,231,235)",
        borderBottom: "1px solid rgb(229,231,235)",
        borderLeft: "1px solid rgb(229,231,235)",
        display: "flex",
        flexDirection: "column",
        gap: 64,
        padding: "30px 80px 80px 80px",
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
          gap: 8,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span data-heading="section" style={{
            position: "relative",
            fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 48,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--burgundy-deep-wine)",
            flexShrink: 0,
          }}>How curation works</span>
          <span style={{
            position: "relative",
            fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--burgundy-deep-wine)",
            flexShrink: 0,
          }}>Thoughtful, beautiful gifting made remarkably simple.</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 32,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 20,
            backgroundColor: "var(--tan-ivory)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            padding: "32px 32px 32px 32px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
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
              <div style={{
                position: "relative",
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "var(--tan-cream)",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "var(--burgundy-deep-wine)",
                  flexShrink: 0,
                }}>1</span>
              </div>
              <div style={{
                position: "relative",
                width: 24,
                height: 24,
                opacity: 0.3,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "absolute",
                  left: 3,
                  top: 3,
                  width: 18,
                  height: 18,
                  overflow: "hidden",
                }}>
                  <svg width={15.001} height={15.001} viewBox="0 0 15.001 15.001" fill="none" style={{
                    position: "absolute",
                    left: 1.499,
                    top: 1.499,
                    width: 15.001,
                    height: 15.001,
                    color: "var(--burgundy-deep-wine)",
                  }}>
                    <path d={"M 8.875 10.927 L 8.434 11.825 L 8.446 11.83 L 8.457 11.836 L 8.875 10.927 Z M 9.785 10.7 L 8.99 10.093 L 8.989 10.094 L 9.785 10.7 Z M 10.051 10.351 L 10.846 10.958 L 10.851 10.951 L 10.051 10.351 Z M 13.501 15.001 L 13.501 16.001 L 13.501 15.001 Z M 0 1.5 L 1 1.5 L 0 1.5 Z M 1.5 0 L 1.5 -1 L 1.5 0 Z M 3.75 0 L 3.75 -1 L 3.75 0 Z M 4.65 4.95 L 5.25 5.75 L 5.25 5.75 L 4.65 4.95 Z M 4.299 5.214 L 3.699 4.414 L 3.692 4.419 L 4.299 5.214 Z M 4.025 5.637 L 4.998 5.867 L 4.025 5.637 Z M 4.08 6.138 L 3.181 6.577 L 3.183 6.58 L 4.08 6.138 Z M 8.875 10.927 L 8.457 11.836 C 8.819 12.002 9.226 12.04 9.612 11.943 L 9.37 10.973 L 9.127 10.003 C 9.182 9.989 9.24 9.994 9.292 10.018 L 8.875 10.927 Z M 9.37 10.973 L 9.612 11.943 C 9.998 11.847 10.339 11.622 10.58 11.305 L 9.785 10.7 L 8.989 10.094 C 9.023 10.049 9.072 10.017 9.127 10.003 L 9.37 10.973 Z M 9.785 10.7 L 10.579 11.306 L 10.846 10.958 L 10.051 10.351 L 9.256 9.744 L 8.99 10.093 L 9.785 10.7 Z M 10.051 10.351 L 10.851 10.951 C 10.897 10.889 10.958 10.838 11.027 10.804 L 10.58 9.909 L 10.133 9.015 C 9.786 9.188 9.484 9.44 9.251 9.751 L 10.051 10.351 Z M 10.58 9.909 L 11.027 10.804 C 11.097 10.769 11.173 10.751 11.251 10.751 L 11.251 9.751 L 11.251 8.751 C 10.863 8.751 10.48 8.841 10.133 9.015 L 10.58 9.909 Z M 11.251 9.751 L 11.251 10.751 L 13.501 10.751 L 13.501 9.751 L 13.501 8.751 L 11.251 8.751 L 11.251 9.751 Z M 13.501 9.751 L 13.501 10.751 C 13.634 10.751 13.761 10.803 13.855 10.897 L 14.562 10.19 L 15.269 9.483 C 14.8 9.014 14.164 8.751 13.501 8.751 L 13.501 9.751 Z M 14.562 10.19 L 13.855 10.897 C 13.949 10.991 14.001 11.118 14.001 11.251 L 15.001 11.251 L 16.001 11.251 C 16.001 10.588 15.738 9.952 15.269 9.483 L 14.562 10.19 Z M 15.001 11.251 L 14.001 11.251 L 14.001 13.501 L 15.001 13.501 L 16.001 13.501 L 16.001 11.251 L 15.001 11.251 Z M 15.001 13.501 L 14.001 13.501 C 14.001 13.634 13.949 13.761 13.855 13.855 L 14.562 14.562 L 15.269 15.269 C 15.738 14.8 16.001 14.164 16.001 13.501 L 15.001 13.501 Z M 14.562 14.562 L 13.855 13.855 C 13.761 13.949 13.634 14.001 13.501 14.001 L 13.501 15.001 L 13.501 16.001 C 14.164 16.001 14.8 15.738 15.269 15.269 L 14.562 14.562 Z M 13.501 15.001 L 13.501 14.001 C 10.186 14.001 7.006 12.684 4.661 10.34 L 3.954 11.047 L 3.247 11.754 C 5.967 14.473 9.655 16.001 13.501 16.001 L 13.501 15.001 Z M 3.954 11.047 L 4.661 10.34 C 2.317 7.995 1 4.816 1 1.5 L 0 1.5 L -1 1.5 C -1 5.346 0.528 9.034 3.247 11.754 L 3.954 11.047 Z M 0 1.5 L 1 1.5 C 1 1.367 1.053 1.24 1.146 1.146 L 0.439 0.439 L -0.268 -0.268 C -0.737 0.201 -1 0.837 -1 1.5 L 0 1.5 Z M 0.439 0.439 L 1.146 1.146 C 1.24 1.053 1.367 1 1.5 1 L 1.5 0 L 1.5 -1 C 0.837 -1 0.201 -0.737 -0.268 -0.268 L 0.439 0.439 Z M 1.5 0 L 1.5 1 L 3.75 1 L 3.75 0 L 3.75 -1 L 1.5 -1 L 1.5 0 Z M 3.75 0 L 3.75 1 C 3.883 1 4.01 1.053 4.104 1.146 L 4.811 0.439 L 5.518 -0.268 C 5.049 -0.737 4.413 -1 3.75 -1 L 3.75 0 Z M 4.811 0.439 L 4.104 1.146 C 4.198 1.24 4.25 1.367 4.25 1.5 L 5.25 1.5 L 6.25 1.5 C 6.25 0.837 5.987 0.201 5.518 -0.268 L 4.811 0.439 Z M 5.25 1.5 L 4.25 1.5 L 4.25 3.75 L 5.25 3.75 L 6.25 3.75 L 6.25 1.5 L 5.25 1.5 Z M 5.25 3.75 L 4.25 3.75 C 4.25 3.828 4.232 3.905 4.198 3.974 L 5.092 4.421 L 5.986 4.868 C 6.16 4.521 6.25 4.138 6.25 3.75 L 5.25 3.75 Z M 5.092 4.421 L 4.198 3.974 C 4.163 4.043 4.112 4.104 4.05 4.15 L 4.65 4.95 L 5.25 5.75 C 5.561 5.518 5.813 5.216 5.986 4.868 L 5.092 4.421 Z M 4.65 4.95 L 4.05 4.15 L 3.699 4.414 L 4.299 5.214 L 4.899 6.014 L 5.25 5.75 L 4.65 4.95 Z M 4.299 5.214 L 3.692 4.419 C 3.371 4.664 3.145 5.013 3.052 5.407 L 4.025 5.637 L 4.998 5.867 C 4.984 5.924 4.952 5.973 4.906 6.008 L 4.299 5.214 Z M 4.025 5.637 L 3.052 5.407 C 2.958 5.8 3.004 6.213 3.181 6.577 L 4.08 6.138 L 4.979 5.7 C 5.004 5.752 5.011 5.811 4.998 5.867 L 4.025 5.637 Z M 4.08 6.138 L 3.183 6.58 C 4.306 8.861 6.152 10.705 8.434 11.825 L 8.875 10.927 L 9.315 10.029 C 7.43 9.104 5.905 7.581 4.977 5.697 L 4.08 6.138 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
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
                fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 24,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--burgundy-deep-wine)",
                flexShrink: 0,
              }}>Tell us about them</span>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: 1.5,
                color: "var(--burgundy-deep-wine)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>A short form or a quick call, whichever feels easier. Who they are, the occasion, your budget.</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            borderRadius: 20,
            backgroundColor: "var(--tan-ivory)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            padding: "32px 32px 32px 32px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
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
              <div style={{
                position: "relative",
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "var(--tan-cream)",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "var(--burgundy-deep-wine)",
                  flexShrink: 0,
                }}>2</span>
              </div>
              <div style={{
                position: "relative",
                width: 24,
                height: 24,
                opacity: 0.3,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={20.002} height={19.999} viewBox="0 0 20.002 19.999" fill="none" style={{
                  position: "absolute",
                  left: 1.999,
                  top: 1.999,
                  width: 20.002,
                  height: 19.999,
                  color: "var(--burgundy-deep-wine)",
                }}>
                  <path d={"M 19.176 4.812 L 18.469 4.105 L 18.469 4.105 L 19.176 4.812 Z M 15.189 0.825 L 14.482 0.118 L 14.482 0.118 L 15.189 0.825 Z M 1.842 14.174 L 2.548 14.882 L 2.549 14.881 L 1.842 14.174 Z M 1.342 15.004 L 0.386 14.711 L 0.385 14.714 L 1.342 15.004 Z M 0.021 19.356 L -0.936 19.066 L -0.937 19.07 L 0.021 19.356 Z M 0.644 19.978 L 0.932 20.936 L 0.934 20.935 L 0.644 19.978 Z M 4.997 18.658 L 5.288 19.615 L 5.288 19.615 L 4.997 18.658 Z M 5.827 18.161 L 6.533 18.869 L 6.535 18.868 L 5.827 18.161 Z M 19.176 4.812 L 19.883 5.52 C 20.599 4.803 21.001 3.832 21.002 2.819 L 20.002 2.819 L 19.002 2.819 C 19.002 3.301 18.81 3.764 18.469 4.105 L 19.176 4.812 Z M 20.002 2.819 L 21.002 2.819 C 21.002 1.806 20.599 0.835 19.883 0.119 L 19.176 0.826 L 18.469 1.533 C 18.81 1.874 19.002 2.337 19.002 2.819 L 20.002 2.819 Z M 19.176 0.826 L 19.883 0.119 C 19.167 -0.597 18.196 -1 17.183 -1 L 17.183 0 L 17.183 1 C 17.665 1 18.128 1.192 18.469 1.533 L 19.176 0.826 Z M 17.183 0 L 17.183 -1 C 16.17 -1 15.199 -0.598 14.482 0.118 L 15.189 0.825 L 15.896 1.533 C 16.237 1.192 16.7 1 17.183 1 L 17.183 0 Z M 15.189 0.825 L 14.482 0.118 L 1.135 13.467 L 1.842 14.174 L 2.549 14.881 L 15.896 1.532 L 15.189 0.825 Z M 1.842 14.174 L 1.136 13.466 C 0.788 13.813 0.53 14.241 0.386 14.711 L 1.342 15.004 L 2.298 15.297 C 2.346 15.141 2.432 14.998 2.548 14.882 L 1.842 14.174 Z M 1.342 15.004 L 0.385 14.714 L -0.936 19.066 L 0.021 19.356 L 0.978 19.647 L 2.299 15.295 L 1.342 15.004 Z M 0.021 19.356 L -0.937 19.07 C -1.015 19.329 -1.021 19.605 -0.954 19.867 L 0.015 19.622 L 0.985 19.376 C 1.007 19.464 1.005 19.556 0.979 19.642 L 0.021 19.356 Z M 0.015 19.622 L -0.954 19.867 C -0.888 20.13 -0.751 20.369 -0.56 20.561 L 0.147 19.853 L 0.853 19.145 C 0.917 19.209 0.963 19.289 0.985 19.376 L 0.015 19.622 Z M 0.147 19.853 L -0.56 20.561 C -0.368 20.752 -0.128 20.888 0.134 20.954 L 0.378 19.984 L 0.622 19.014 C 0.709 19.036 0.789 19.082 0.853 19.145 L 0.147 19.853 Z M 0.378 19.984 L 0.134 20.954 C 0.397 21.02 0.673 21.014 0.932 20.936 L 0.644 19.978 L 0.356 19.02 C 0.443 18.994 0.534 18.992 0.622 19.014 L 0.378 19.984 Z M 0.644 19.978 L 0.934 20.935 L 5.288 19.615 L 4.997 18.658 L 4.707 17.701 L 0.354 19.021 L 0.644 19.978 Z M 4.997 18.658 L 5.288 19.615 C 5.758 19.472 6.186 19.216 6.533 18.869 L 5.827 18.161 L 5.122 17.453 C 5.006 17.568 4.863 17.654 4.706 17.701 L 4.997 18.658 Z M 5.827 18.161 L 6.535 18.868 L 19.883 5.519 L 19.176 4.812 L 18.469 4.105 L 5.12 17.454 L 5.827 18.161 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
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
                fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 24,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--burgundy-deep-wine)",
                flexShrink: 0,
              }}>We design their box</span>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: 1.5,
                color: "var(--burgundy-deep-wine)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Every item chosen for who they are then wrapped beautifully and finished with your handwritten card.</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            borderRadius: 20,
            backgroundColor: "var(--tan-ivory)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            padding: "32px 32px 32px 32px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
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
              <div style={{
                position: "relative",
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "var(--tan-cream)",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "var(--burgundy-deep-wine)",
                  flexShrink: 0,
                }}>3</span>
              </div>
              <div style={{
                position: "relative",
                width: 24,
                height: 24,
                opacity: 0.3,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={18} height={19} viewBox="0 0 18 19" fill="none" style={{
                  position: "absolute",
                  left: 3,
                  top: 1.999,
                  width: 18,
                  height: 19,
                  color: "var(--burgundy-deep-wine)",
                }}>
                  <path d={"M 8 19 C 8 19.552 8.448 20 9 20 C 9.552 20 10 19.552 10 19 L 9 19 L 8 19 Z M 4.5 0 L 4.5 1 L 4.509 1 L 4.517 1 L 4.5 0 Z M 2 2.5 L 1 2.5 L 2 2.5 Z M 4.5 6 C 5.052 6 5.5 5.553 5.5 5 C 5.5 4.448 5.052 4 4.5 4 L 4.5 5 L 4.5 6 Z M 13.5 0 L 13.483 1 L 13.491 1 L 13.5 1 L 13.5 0 Z M 13.5 4 C 12.948 4 12.5 4.448 12.5 5 C 12.5 5.553 12.948 6 13.5 6 L 13.5 5 L 13.5 4 Z M 1 17 L 0 17 L 1 17 Z M 9 5 L 8 5 L 8 19 L 9 19 L 10 19 L 10 5 L 9 5 Z M 9 5 L 9.972 4.764 C 9.582 3.156 8.896 1.719 7.956 0.675 L 7.213 1.344 L 6.469 2.013 C 7.135 2.752 7.695 3.863 8.028 5.236 L 9 5 Z M 7.213 1.344 L 7.956 0.675 C 7.011 -0.376 5.805 -1.022 4.483 -0.999 L 4.5 0 L 4.517 1 C 5.124 0.99 5.809 1.279 6.469 2.013 L 7.213 1.344 Z M 4.5 0 L 4.5 -1 C 3.572 -1 2.682 -0.631 2.025 0.026 L 2.732 0.733 L 3.439 1.44 C 3.721 1.158 4.102 1 4.5 1 L 4.5 0 Z M 2.732 0.733 L 2.025 0.026 C 1.369 0.682 1 1.572 1 2.5 L 2 2.5 L 3 2.5 C 3 2.103 3.158 1.721 3.439 1.44 L 2.732 0.733 Z M 2 2.5 L 1 2.5 C 1 3.429 1.369 4.319 2.025 4.975 L 2.732 4.268 L 3.439 3.561 C 3.158 3.28 3 2.898 3 2.5 L 2 2.5 Z M 2.732 4.268 L 2.025 4.975 C 2.682 5.632 3.572 6 4.5 6 L 4.5 5 L 4.5 4 C 4.102 4 3.721 3.842 3.439 3.561 L 2.732 4.268 Z M 9 5 L 9.972 5.236 C 10.305 3.863 10.865 2.752 11.531 2.013 L 10.787 1.344 L 10.044 0.675 C 9.104 1.719 8.418 3.156 8.028 4.764 L 9 5 Z M 10.787 1.344 L 11.531 2.013 C 12.191 1.279 12.876 0.99 13.483 1 L 13.5 0 L 13.517 -0.999 C 12.195 -1.022 10.989 -0.376 10.044 0.675 L 10.787 1.344 Z M 13.5 0 L 13.5 1 C 13.898 1 14.279 1.158 14.561 1.44 L 15.268 0.733 L 15.975 0.026 C 15.318 -0.631 14.428 -1 13.5 -1 L 13.5 0 Z M 15.268 0.733 L 14.561 1.44 C 14.842 1.721 15 2.103 15 2.5 L 16 2.5 L 17 2.5 C 17 1.572 16.631 0.682 15.975 0.026 L 15.268 0.733 Z M 16 2.5 L 15 2.5 C 15 2.898 14.842 3.28 14.561 3.561 L 15.268 4.268 L 15.975 4.975 C 16.631 4.319 17 3.429 17 2.5 L 16 2.5 Z M 15.268 4.268 L 14.561 3.561 C 14.279 3.842 13.898 4 13.5 4 L 13.5 5 L 13.5 6 C 14.428 6 15.318 5.632 15.975 4.975 L 15.268 4.268 Z M 17 9 L 16 9 L 16 17 L 17 17 L 18 17 L 18 9 L 17 9 Z M 17 17 L 16 17 C 16 17.265 15.895 17.52 15.707 17.707 L 16.414 18.414 L 17.121 19.121 C 17.684 18.559 18 17.796 18 17 L 17 17 Z M 16.414 18.414 L 15.707 17.707 C 15.52 17.895 15.265 18 15 18 L 15 19 L 15 20 C 15.796 20 16.559 19.684 17.121 19.121 L 16.414 18.414 Z M 15 19 L 15 18 L 3 18 L 3 19 L 3 20 L 15 20 L 15 19 Z M 3 19 L 3 18 C 2.735 18 2.48 17.895 2.293 17.707 L 1.586 18.414 L 0.879 19.121 C 1.441 19.684 2.204 20 3 20 L 3 19 Z M 1.586 18.414 L 2.293 17.707 C 2.105 17.52 2 17.265 2 17 L 1 17 L 0 17 C 0 17.796 0.316 18.559 0.879 19.121 L 1.586 18.414 Z M 1 17 L 2 17 L 2 9 L 1 9 L 0 9 L 0 17 L 1 17 Z M 17 9 L 17 10 C 18.105 10 19 9.105 19 8 L 18 8 L 17 8 L 17 9 Z M 18 8 L 19 8 L 19 6 L 18 6 L 17 6 L 17 8 L 18 8 Z M 18 6 L 19 6 C 19 4.895 18.105 4 17 4 L 17 5 L 17 6 L 18 6 Z M 17 5 L 17 4 L 1 4 L 1 5 L 1 6 L 17 6 L 17 5 Z M 1 5 L 1 4 C -0.105 4 -1 4.895 -1 6 L 0 6 L 1 6 L 1 5 Z M 0 6 L -1 6 L -1 8 L 0 8 L 1 8 L 1 6 L 0 6 Z M 0 8 L -1 8 C -1 9.105 -0.105 10 1 10 L 1 9 L 1 8 L 0 8 Z M 17 9 L 17 8 L 1 8 L 1 9 L 1 10 L 17 10 L 17 9 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
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
                fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 24,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--burgundy-deep-wine)",
                flexShrink: 0,
              }}>We deliver. You shine.</span>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: 1.5,
                color: "var(--burgundy-deep-wine)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>It arrives on their doorstep, on time. The gasp, the photos, the credit all yours.</span>
            </div>
          </div>
        </div>
      </div>
      <div data-section="content" style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, rgb(254,254,254) 0.00%, rgb(245,237,224) 100.00%)",
        display: "flex",
        flexDirection: "column",
        gap: 40,
        padding: "80px 80px 80px 80px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div data-decorative style={{
          position: "absolute",
          left: 320,
          top: 215,
          width: 800,
          height: 400,
          opacity: 0.12,
          borderRadius: "50%",
          backgroundColor: "var(--primary-warm-tan)",
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
          <span data-heading="section" data-text-block style={{
            position: "relative",
            width: 900,
            fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 56,
            textAlign: "center",
            lineHeight: 1.149999976158142,
            color: "var(--primary-burgundy)",
            flexShrink: 0,
          }}>There's someone you've been meaning to celebrate.</span>
          <span data-text-block style={{
            position: "relative",
            width: 600,
            opacity: 0.8,
            fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 18,
            textAlign: "center",
            lineHeight: "100%",
            color: "var(--primary-burgundy)",
            flexShrink: 0,
          }}>This is your sign.</span>
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
          }}>Send them a box →</span>
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
              color: "var(--burgundy-deep-wine)",
            }}>
              <path d={"M 0 3.667 C -0.552 3.667 -1 4.115 -1 4.667 C -1 5.219 -0.552 5.667 0 5.667 L 0 4.667 L 0 3.667 Z M 9.334 4.667 L 10.042 5.374 L 10.749 4.667 L 10.042 3.96 L 9.334 4.667 Z M 5.374 -0.707 C 4.984 -1.098 4.351 -1.098 3.96 -0.707 C 3.57 -0.317 3.57 0.317 3.96 0.707 L 4.667 0 L 5.374 -0.707 Z M 3.96 8.627 C 3.57 9.018 3.57 9.651 3.96 10.042 C 4.351 10.432 4.984 10.432 5.374 10.042 L 4.667 9.334 L 3.96 8.627 Z M 0 4.667 L 0 5.667 L 9.334 5.667 L 9.334 4.667 L 9.334 3.667 L 0 3.667 L 0 4.667 Z M 9.334 4.667 L 10.042 3.96 L 5.374 -0.707 L 4.667 0 L 3.96 0.707 L 8.627 5.374 L 9.334 4.667 Z M 9.334 4.667 L 8.627 3.96 L 3.96 8.627 L 4.667 9.334 L 5.374 10.042 L 10.042 5.374 L 9.334 4.667 Z"} fill="currentColor" fillRule="nonzero" />
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
                color: "var(--primary-warm-tan)",
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
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={13.334} height={13.334} viewBox="0 0 13.334 13.334" fill="none" style={{
                    position: "absolute",
                    left: 1.333,
                    top: 1.333,
                    width: 13.334,
                    height: 13.334,
                    color: "var(--burgundy-deep-wine)",
                  }}>
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
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={13.334} height={13.334} viewBox="0 0 13.334 13.334" fill="none" style={{
                    position: "absolute",
                    left: 1.333,
                    top: 1.333,
                    width: 13.334,
                    height: 13.334,
                    color: "var(--burgundy-deep-wine)",
                  }}>
                    <path d={"M 13.334 0 L 13.834 0 L 13.834 -0.5 L 13.334 -0.5 L 13.334 0 Z M 3.637 3.334 L 3.137 3.334 L 3.637 3.334 Z M 3.637 5.334 L 3.637 5.834 L 4.137 5.834 L 4.137 5.334 L 3.637 5.334 Z M 0 5.334 L 0 4.834 L -0.5 4.834 L -0.5 5.334 L 0 5.334 Z M 0 8.001 L -0.5 8.001 L -0.5 8.501 L 0 8.501 L 0 8.001 Z M 3.637 8.001 L 4.137 8.001 L 4.137 7.501 L 3.637 7.501 L 3.637 8.001 Z M 3.637 13.334 L 3.137 13.334 L 3.137 13.834 L 3.637 13.834 L 3.637 13.334 Z M 8.486 13.334 L 8.486 13.834 L 8.986 13.834 L 8.986 13.334 L 8.486 13.334 Z M 8.486 8.001 L 8.486 7.501 L 7.986 7.501 L 7.986 8.001 L 8.486 8.001 Z M 12.122 8.001 L 12.122 8.501 L 12.444 8.501 L 12.577 8.208 L 12.122 8.001 Z M 13.334 5.334 L 13.79 5.541 L 14.111 4.834 L 13.334 4.834 L 13.334 5.334 Z M 8.486 5.334 L 7.986 5.334 L 7.986 5.834 L 8.486 5.834 L 8.486 5.334 Z M 9.698 2.667 L 9.698 3.167 L 9.698 2.667 Z M 13.334 2.667 L 13.334 3.167 L 13.834 3.167 L 13.834 2.667 L 13.334 2.667 Z M 13.334 0 L 13.334 -0.5 L 9.698 -0.5 L 9.698 0 L 9.698 0.5 L 13.334 0.5 L 13.334 0 Z M 9.698 0 L 9.698 -0.5 C 8.026 -0.5 6.397 -0.136 5.171 0.538 L 5.412 0.976 L 5.653 1.414 C 6.7 0.839 8.155 0.5 9.698 0.5 L 9.698 0 Z M 5.412 0.976 L 5.171 0.538 C 3.957 1.206 3.137 2.189 3.137 3.334 L 3.637 3.334 L 4.137 3.334 C 4.137 2.71 4.593 1.997 5.653 1.414 L 5.412 0.976 Z M 3.637 3.334 L 3.137 3.334 L 3.137 5.334 L 3.637 5.334 L 4.137 5.334 L 4.137 3.334 L 3.637 3.334 Z M 3.637 5.334 L 3.637 4.834 L 0 4.834 L 0 5.334 L 0 5.834 L 3.637 5.834 L 3.637 5.334 Z M 0 5.334 L -0.5 5.334 L -0.5 8.001 L 0 8.001 L 0.5 8.001 L 0.5 5.334 L 0 5.334 Z M 0 8.001 L 0 8.501 L 3.637 8.501 L 3.637 8.001 L 3.637 7.501 L 0 7.501 L 0 8.001 Z M 3.637 8.001 L 3.137 8.001 L 3.137 13.334 L 3.637 13.334 L 4.137 13.334 L 4.137 8.001 L 3.637 8.001 Z M 3.637 13.334 L 3.637 13.834 L 8.486 13.834 L 8.486 13.334 L 8.486 12.834 L 3.637 12.834 L 3.637 13.334 Z M 8.486 13.334 L 8.986 13.334 L 8.986 8.001 L 8.486 8.001 L 7.986 8.001 L 7.986 13.334 L 8.486 13.334 Z M 8.486 8.001 L 8.486 8.501 L 12.122 8.501 L 12.122 8.001 L 12.122 7.501 L 8.486 7.501 L 8.486 8.001 Z M 12.122 8.001 L 12.577 8.208 L 13.79 5.541 L 13.334 5.334 L 12.879 5.127 L 11.667 7.794 L 12.122 8.001 Z M 13.334 5.334 L 13.334 4.834 L 8.486 4.834 L 8.486 5.334 L 8.486 5.834 L 13.334 5.834 L 13.334 5.334 Z M 8.486 5.334 L 8.986 5.334 L 8.986 3.334 L 8.486 3.334 L 7.986 3.334 L 7.986 5.334 L 8.486 5.334 Z M 8.486 3.334 L 8.986 3.334 C 8.986 3.371 8.971 3.388 8.977 3.379 C 8.986 3.368 9.014 3.337 9.082 3.3 L 8.841 2.862 L 8.6 2.424 C 8.295 2.592 7.986 2.896 7.986 3.334 L 8.486 3.334 Z M 8.841 2.862 L 9.082 3.3 C 9.219 3.224 9.441 3.167 9.698 3.167 L 9.698 2.667 L 9.698 2.167 C 9.312 2.167 8.916 2.25 8.6 2.424 L 8.841 2.862 Z M 9.698 2.667 L 9.698 3.167 L 13.334 3.167 L 13.334 2.667 L 13.334 2.167 L 9.698 2.167 L 9.698 2.667 Z M 13.334 2.667 L 13.834 2.667 L 13.834 0 L 13.334 0 L 12.834 0 L 12.834 2.667 L 13.334 2.667 Z"} fill="currentColor" fillRule="nonzero" />
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
                  flexShrink: 0,
                }}>
                  <svg width={13.334} height={13.334} viewBox="0 0 13.334 13.334" fill="none" style={{
                    position: "absolute",
                    left: 1.333,
                    top: 1.333,
                    width: 13.334,
                    height: 13.334,
                    color: "var(--burgundy-deep-wine)",
                  }}>
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
                <div style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={13.334} height={13.334} viewBox="0 0 13.334 13.334" fill="none" style={{
                    position: "absolute",
                    left: 1.333,
                    top: 1.333,
                    width: 13.334,
                    height: 13.334,
                    color: "var(--burgundy-deep-wine)",
                  }}>
                    <path d={"M 9.334 4.211 L 9.334 3.711 L 9.334 4.211 Z M 13.334 13.334 L 13.334 13.834 L 13.834 13.834 L 13.834 13.334 L 13.334 13.334 Z M 10.668 13.334 L 10.168 13.334 L 10.168 13.834 L 10.668 13.834 L 10.668 13.334 Z M 8.001 13.334 L 8.001 13.834 L 8.501 13.834 L 8.501 13.334 L 8.001 13.334 Z M 5.334 13.334 L 4.834 13.334 L 4.834 13.834 L 5.334 13.834 L 5.334 13.334 Z M 0 4.913 L 0 4.413 L -0.5 4.413 L -0.5 4.913 L 0 4.913 Z M 2.667 4.913 L 3.167 4.913 L 3.167 4.413 L 2.667 4.413 L 2.667 4.913 Z M 2.667 13.334 L 2.667 13.834 L 3.167 13.834 L 3.167 13.334 L 2.667 13.334 Z M 0 13.334 L -0.5 13.334 L -0.5 13.834 L 0 13.834 L 0 13.334 Z M 9.334 4.211 L 9.334 4.711 C 10.254 4.711 11.142 5.095 11.8 5.789 L 12.163 5.444 L 12.525 5.1 C 11.683 4.214 10.536 3.711 9.334 3.711 L 9.334 4.211 Z M 12.163 5.444 L 11.8 5.789 C 12.46 6.483 12.834 7.43 12.834 8.422 L 13.334 8.422 L 13.834 8.422 C 13.834 7.18 13.366 5.985 12.525 5.1 L 12.163 5.444 Z M 13.334 8.422 L 12.834 8.422 L 12.834 13.334 L 13.334 13.334 L 13.834 13.334 L 13.834 8.422 L 13.334 8.422 Z M 13.334 13.334 L 13.334 12.834 L 10.668 12.834 L 10.668 13.334 L 10.668 13.834 L 13.334 13.834 L 13.334 13.334 Z M 10.668 13.334 L 11.168 13.334 L 11.168 8.422 L 10.668 8.422 L 10.168 8.422 L 10.168 13.334 L 10.668 13.334 Z M 10.668 8.422 L 11.168 8.422 C 11.168 7.925 10.98 7.444 10.639 7.085 L 10.277 7.429 L 9.914 7.774 C 10.074 7.941 10.168 8.174 10.168 8.422 L 10.668 8.422 Z M 10.277 7.429 L 10.639 7.085 C 10.298 6.725 9.829 6.518 9.334 6.518 L 9.334 7.018 L 9.334 7.518 C 9.547 7.518 9.756 7.607 9.914 7.774 L 10.277 7.429 Z M 9.334 7.018 L 9.334 6.518 C 8.839 6.518 8.37 6.725 8.029 7.085 L 8.391 7.429 L 8.754 7.774 C 8.912 7.607 9.122 7.518 9.334 7.518 L 9.334 7.018 Z M 8.391 7.429 L 8.029 7.085 C 7.688 7.444 7.501 7.925 7.501 8.422 L 8.001 8.422 L 8.501 8.422 C 8.501 8.174 8.594 7.941 8.754 7.774 L 8.391 7.429 Z M 8.001 8.422 L 7.501 8.422 L 7.501 13.334 L 8.001 13.334 L 8.501 13.334 L 8.501 8.422 L 8.001 8.422 Z M 8.001 13.334 L 8.001 12.834 L 5.334 12.834 L 5.334 13.334 L 5.334 13.834 L 8.001 13.834 L 8.001 13.334 Z M 5.334 13.334 L 5.834 13.334 L 5.834 8.422 L 5.334 8.422 L 4.834 8.422 L 4.834 13.334 L 5.334 13.334 Z M 5.334 8.422 L 5.834 8.422 C 5.834 7.43 6.208 6.483 6.868 5.789 L 6.505 5.444 L 6.143 5.1 C 5.302 5.985 4.834 7.18 4.834 8.422 L 5.334 8.422 Z M 6.505 5.444 L 6.868 5.789 C 7.527 5.095 8.414 4.711 9.334 4.711 L 9.334 4.211 L 9.334 3.711 C 8.132 3.711 6.985 4.214 6.143 5.1 L 6.505 5.444 Z M 0 4.913 L 0 5.413 L 2.667 5.413 L 2.667 4.913 L 2.667 4.413 L 0 4.413 L 0 4.913 Z M 2.667 4.913 L 2.167 4.913 L 2.167 13.334 L 2.667 13.334 L 3.167 13.334 L 3.167 4.913 L 2.667 4.913 Z M 2.667 13.334 L 2.667 12.834 L 0 12.834 L 0 13.334 L 0 13.834 L 2.667 13.834 L 2.667 13.334 Z M 0 13.334 L 0.5 13.334 L 0.5 4.913 L 0 4.913 L -0.5 4.913 L -0.5 13.334 L 0 13.334 Z M 2.667 1.404 L 2.167 1.404 C 2.167 1.927 1.77 2.307 1.333 2.307 L 1.333 2.807 L 1.333 3.307 C 2.37 3.307 3.167 2.43 3.167 1.404 L 2.667 1.404 Z M 1.333 2.807 L 1.333 2.307 C 0.897 2.307 0.5 1.927 0.5 1.404 L 0 1.404 L -0.5 1.404 C -0.5 2.43 0.297 3.307 1.333 3.307 L 1.333 2.807 Z M 0 1.404 L 0.5 1.404 C 0.5 0.88 0.897 0.5 1.333 0.5 L 1.333 0 L 1.333 -0.5 C 0.297 -0.5 -0.5 0.377 -0.5 1.404 L 0 1.404 Z M 1.333 0 L 1.333 0.5 C 1.77 0.5 2.167 0.88 2.167 1.404 L 2.667 1.404 L 3.167 1.404 C 3.167 0.377 2.37 -0.5 1.333 -0.5 L 1.333 0 Z"} fill="currentColor" fillRule="nonzero" />
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
export default PersonalGiftingPage;
