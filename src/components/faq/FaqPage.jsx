import { NavBar3 } from './NavBar3.jsx';
import { PromoBanner } from './PromoBanner.jsx';
import { WrappDLogo } from './WrappDLogo.jsx';

// figma node: 113:1285 faq-page
export function FaqPage(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "100%",
      minHeight: 1024,
      backgroundColor: "rgb(255,255,255)",
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
        background: "linear-gradient(180deg, rgb(245,237,224) 0.00%, rgb(248,248,246) 100.00%), linear-gradient(var(--burgundy-deep-wine),var(--burgundy-deep-wine))",
        display: "flex",
        flexDirection: "column",
        gap: 24,
        padding: "120px 80px 90px 80px",
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
            }}>GOOD QUESTIONS</span>
          </div>
          <span data-heading="hero" style={{
            position: "relative",
            width: 850,
            fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 64,
            textAlign: "center",
            lineHeight: 1.149999976158142,
            color: "var(--burgundy-berry)",
            flexShrink: 0,
          }}>Everything you're wondering</span>
          <span data-text-block style={{
            position: "relative",
            width: 680,
            opacity: 0.85,
            fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 18,
            textAlign: "center",
            lineHeight: 1.600000023841858,
            color: "var(--burgundy-deep-wine)",
            flexShrink: 0,
          }}>Asked, answered, no small print.</span>
        </div>
      </div>
      <div data-section="content" style={{
        position: "relative",
        backgroundColor: "var(--tan-ivory)",
        display: "flex",
        flexDirection: "column",
        gap: 64,
        padding: "80px 80px 100px 80px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div data-text-block data-faq-card style={{
          position: "relative",
          width: 880,
          borderRadius: 28,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1.500px var(--tan-cream), 0px 16px 32px 0px rgba(106,30,46,0.051)",
          display: "flex",
          flexDirection: "column",
          gap: 56,
          padding: "64px 64px 64px 64px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
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
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              padding: "20px 0px 20px 0px",
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
                  fontSize: 22,
                  lineHeight: "100%",
                  color: "var(--burgundy-deep-wine)",
                  flexGrow: 1,
                }}>How fast can you deliver?</span>
                <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={11.668} height={2} viewBox="0 -1 11.668 2" fill="none" style={{
                    position: "absolute",
                    left: 4.166,
                    top: 10,
                    width: 11.668,
                    height: 2,
                    color: "var(--burgundy-rose)",
                  }}>
                    <path d={"M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 0 L 0 -1 Z M 11.668 1 C 12.22 1 12.668 0.552 12.668 0 C 12.668 -0.552 12.22 -1 11.668 -1 L 11.668 0 L 11.668 1 Z M 0 0 L 0 1 L 11.668 1 L 11.668 0 L 11.668 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
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
              }}>Ready-made boxes: within 2 days across Lagos. Curated boxes: 3-5 days, because good curation takes a moment. Need it urgently? Ask - we love a challenge.</span>
              <svg height={1} viewBox="0 0 752 1" fill="none" style={{
                position: "relative",
                height: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
                color: "var(--tan-cream)",
              }}>
                <path d={"M 0 0 L 752 0 L 752 1 L 0 1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              padding: "20px 0px 20px 0px",
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
                  fontSize: 22,
                  lineHeight: "100%",
                  color: "var(--burgundy-deep-wine)",
                  flexGrow: 1,
                }}>Do you deliver outside Lagos?</span>
                <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={11.668} height={11.668} viewBox="0 0 11.668 11.668" fill="none" style={{
                    position: "absolute",
                    left: 4.166,
                    top: 4.166,
                    width: 11.668,
                    height: 11.668,
                    color: "var(--burgundy-rose)",
                  }}>
                    <path d={"M 0 4.834 C -0.552 4.834 -1 5.282 -1 5.834 C -1 6.386 -0.552 6.834 0 6.834 L 0 5.834 L 0 4.834 Z M 11.668 6.834 C 12.22 6.834 12.668 6.386 12.668 5.834 C 12.668 5.282 12.22 4.834 11.668 4.834 L 11.668 5.834 L 11.668 6.834 Z M 6.834 0 C 6.834 -0.552 6.386 -1 5.834 -1 C 5.282 -1 4.834 -0.552 4.834 0 L 5.834 0 L 6.834 0 Z M 4.834 11.668 C 4.834 12.22 5.282 12.668 5.834 12.668 C 6.386 12.668 6.834 12.22 6.834 11.668 L 5.834 11.668 L 4.834 11.668 Z M 0 5.834 L 0 6.834 L 11.668 6.834 L 11.668 5.834 L 11.668 4.834 L 0 4.834 L 0 5.834 Z M 5.834 0 L 4.834 0 L 4.834 11.668 L 5.834 11.668 L 6.834 11.668 L 6.834 0 L 5.834 0 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
              <svg height={1} viewBox="0 0 752 1" fill="none" style={{
                position: "relative",
                height: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
                color: "var(--tan-cream)",
              }}>
                <path d={"M 0 0 L 752 0 L 752 1 L 0 1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              padding: "20px 0px 20px 0px",
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
                  fontSize: 22,
                  lineHeight: "100%",
                  color: "var(--burgundy-deep-wine)",
                  flexGrow: 1,
                }}>What does delivery cost?</span>
                <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={11.668} height={11.668} viewBox="0 0 11.668 11.668" fill="none" style={{
                    position: "absolute",
                    left: 4.166,
                    top: 4.166,
                    width: 11.668,
                    height: 11.668,
                    color: "var(--burgundy-rose)",
                  }}>
                    <path d={"M 0 4.834 C -0.552 4.834 -1 5.282 -1 5.834 C -1 6.386 -0.552 6.834 0 6.834 L 0 5.834 L 0 4.834 Z M 11.668 6.834 C 12.22 6.834 12.668 6.386 12.668 5.834 C 12.668 5.282 12.22 4.834 11.668 4.834 L 11.668 5.834 L 11.668 6.834 Z M 6.834 0 C 6.834 -0.552 6.386 -1 5.834 -1 C 5.282 -1 4.834 -0.552 4.834 0 L 5.834 0 L 6.834 0 Z M 4.834 11.668 C 4.834 12.22 5.282 12.668 5.834 12.668 C 6.386 12.668 6.834 12.22 6.834 11.668 L 5.834 11.668 L 4.834 11.668 Z M 0 5.834 L 0 6.834 L 11.668 6.834 L 11.668 5.834 L 11.668 4.834 L 0 4.834 L 0 5.834 Z M 5.834 0 L 4.834 0 L 4.834 11.668 L 5.834 11.668 L 6.834 11.668 L 6.834 0 L 5.834 0 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
              <svg height={1} viewBox="0 0 752 1" fill="none" style={{
                position: "relative",
                height: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
                color: "var(--tan-cream)",
              }}>
                <path d={"M 0 0 L 752 0 L 752 1 L 0 1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              padding: "20px 0px 20px 0px",
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
                  fontSize: 22,
                  lineHeight: "100%",
                  color: "var(--burgundy-deep-wine)",
                  flexGrow: 1,
                }}>How do I pay?</span>
                <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={11.668} height={11.668} viewBox="0 0 11.668 11.668" fill="none" style={{
                    position: "absolute",
                    left: 4.166,
                    top: 4.166,
                    width: 11.668,
                    height: 11.668,
                    color: "var(--burgundy-rose)",
                  }}>
                    <path d={"M 0 4.834 C -0.552 4.834 -1 5.282 -1 5.834 C -1 6.386 -0.552 6.834 0 6.834 L 0 5.834 L 0 4.834 Z M 11.668 6.834 C 12.22 6.834 12.668 6.386 12.668 5.834 C 12.668 5.282 12.22 4.834 11.668 4.834 L 11.668 5.834 L 11.668 6.834 Z M 6.834 0 C 6.834 -0.552 6.386 -1 5.834 -1 C 5.282 -1 4.834 -0.552 4.834 0 L 5.834 0 L 6.834 0 Z M 4.834 11.668 C 4.834 12.22 5.282 12.668 5.834 12.668 C 6.386 12.668 6.834 12.22 6.834 11.668 L 5.834 11.668 L 4.834 11.668 Z M 0 5.834 L 0 6.834 L 11.668 6.834 L 11.668 5.834 L 11.668 4.834 L 0 4.834 L 0 5.834 Z M 5.834 0 L 4.834 0 L 4.834 11.668 L 5.834 11.668 L 6.834 11.668 L 6.834 0 L 5.834 0 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
              <svg height={1} viewBox="0 0 752 1" fill="none" style={{
                position: "relative",
                height: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
                color: "var(--tan-cream)",
              }}>
                <path d={"M 0 0 L 752 0 L 752 1 L 0 1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              padding: "20px 0px 20px 0px",
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
                  fontSize: 22,
                  lineHeight: "100%",
                  color: "var(--burgundy-deep-wine)",
                  flexGrow: 1,
                }}>What if something arrives damaged?</span>
                <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={11.668} height={11.668} viewBox="0 0 11.668 11.668" fill="none" style={{
                    position: "absolute",
                    left: 4.166,
                    top: 4.166,
                    width: 11.668,
                    height: 11.668,
                    color: "var(--burgundy-rose)",
                  }}>
                    <path d={"M 0 4.834 C -0.552 4.834 -1 5.282 -1 5.834 C -1 6.386 -0.552 6.834 0 6.834 L 0 5.834 L 0 4.834 Z M 11.668 6.834 C 12.22 6.834 12.668 6.386 12.668 5.834 C 12.668 5.282 12.22 4.834 11.668 4.834 L 11.668 5.834 L 11.668 6.834 Z M 6.834 0 C 6.834 -0.552 6.386 -1 5.834 -1 C 5.282 -1 4.834 -0.552 4.834 0 L 5.834 0 L 6.834 0 Z M 4.834 11.668 C 4.834 12.22 5.282 12.668 5.834 12.668 C 6.386 12.668 6.834 12.22 6.834 11.668 L 5.834 11.668 L 4.834 11.668 Z M 0 5.834 L 0 6.834 L 11.668 6.834 L 11.668 5.834 L 11.668 4.834 L 0 4.834 L 0 5.834 Z M 5.834 0 L 4.834 0 L 4.834 11.668 L 5.834 11.668 L 6.834 11.668 L 6.834 0 L 5.834 0 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
              <svg height={1} viewBox="0 0 752 1" fill="none" style={{
                position: "relative",
                height: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
                color: "var(--tan-cream)",
              }}>
                <path d={"M 0 0 L 752 0 L 752 1 L 0 1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              padding: "20px 0px 20px 0px",
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
                  fontSize: 22,
                  lineHeight: "100%",
                  color: "var(--burgundy-deep-wine)",
                  flexGrow: 1,
                }}>Can I see the curated box before it's sent?</span>
                <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={11.668} height={11.668} viewBox="0 0 11.668 11.668" fill="none" style={{
                    position: "absolute",
                    left: 4.166,
                    top: 4.166,
                    width: 11.668,
                    height: 11.668,
                    color: "var(--burgundy-rose)",
                  }}>
                    <path d={"M 0 4.834 C -0.552 4.834 -1 5.282 -1 5.834 C -1 6.386 -0.552 6.834 0 6.834 L 0 5.834 L 0 4.834 Z M 11.668 6.834 C 12.22 6.834 12.668 6.386 12.668 5.834 C 12.668 5.282 12.22 4.834 11.668 4.834 L 11.668 5.834 L 11.668 6.834 Z M 6.834 0 C 6.834 -0.552 6.386 -1 5.834 -1 C 5.282 -1 4.834 -0.552 4.834 0 L 5.834 0 L 6.834 0 Z M 4.834 11.668 C 4.834 12.22 5.282 12.668 5.834 12.668 C 6.386 12.668 6.834 12.22 6.834 11.668 L 5.834 11.668 L 4.834 11.668 Z M 0 5.834 L 0 6.834 L 11.668 6.834 L 11.668 5.834 L 11.668 4.834 L 0 4.834 L 0 5.834 Z M 5.834 0 L 4.834 0 L 4.834 11.668 L 5.834 11.668 L 6.834 11.668 L 6.834 0 L 5.834 0 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
              <svg height={1} viewBox="0 0 752 1" fill="none" style={{
                position: "relative",
                height: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
                color: "var(--tan-cream)",
              }}>
                <path d={"M 0 0 L 752 0 L 752 1 L 0 1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              padding: "20px 0px 20px 0px",
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
                  fontSize: 22,
                  lineHeight: "100%",
                  color: "var(--burgundy-deep-wine)",
                  flexGrow: 1,
                }}>Can the gift be anonymous?</span>
                <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={11.668} height={11.668} viewBox="0 0 11.668 11.668" fill="none" style={{
                    position: "absolute",
                    left: 4.166,
                    top: 4.166,
                    width: 11.668,
                    height: 11.668,
                    color: "var(--burgundy-rose)",
                  }}>
                    <path d={"M 0 4.834 C -0.552 4.834 -1 5.282 -1 5.834 C -1 6.386 -0.552 6.834 0 6.834 L 0 5.834 L 0 4.834 Z M 11.668 6.834 C 12.22 6.834 12.668 6.386 12.668 5.834 C 12.668 5.282 12.22 4.834 11.668 4.834 L 11.668 5.834 L 11.668 6.834 Z M 6.834 0 C 6.834 -0.552 6.386 -1 5.834 -1 C 5.282 -1 4.834 -0.552 4.834 0 L 5.834 0 L 6.834 0 Z M 4.834 11.668 C 4.834 12.22 5.282 12.668 5.834 12.668 C 6.386 12.668 6.834 12.22 6.834 11.668 L 5.834 11.668 L 4.834 11.668 Z M 0 5.834 L 0 6.834 L 11.668 6.834 L 11.668 5.834 L 11.668 4.834 L 0 4.834 L 0 5.834 Z M 5.834 0 L 4.834 0 L 4.834 11.668 L 5.834 11.668 L 6.834 11.668 L 6.834 0 L 5.834 0 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
              <svg height={1} viewBox="0 0 752 1" fill="none" style={{
                position: "relative",
                height: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
                color: "var(--tan-cream)",
              }}>
                <path d={"M 0 0 L 752 0 L 752 1 L 0 1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              padding: "20px 0px 20px 0px",
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
                  fontSize: 22,
                  lineHeight: "100%",
                  color: "var(--burgundy-deep-wine)",
                  flexGrow: 1,
                }}>I'm ordering for a company - where do I start?</span>
                <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={11.668} height={11.668} viewBox="0 0 11.668 11.668" fill="none" style={{
                    position: "absolute",
                    left: 4.166,
                    top: 4.166,
                    width: 11.668,
                    height: 11.668,
                    color: "var(--burgundy-rose)",
                  }}>
                    <path d={"M 0 4.834 C -0.552 4.834 -1 5.282 -1 5.834 C -1 6.386 -0.552 6.834 0 6.834 L 0 5.834 L 0 4.834 Z M 11.668 6.834 C 12.22 6.834 12.668 6.386 12.668 5.834 C 12.668 5.282 12.22 4.834 11.668 4.834 L 11.668 5.834 L 11.668 6.834 Z M 6.834 0 C 6.834 -0.552 6.386 -1 5.834 -1 C 5.282 -1 4.834 -0.552 4.834 0 L 5.834 0 L 6.834 0 Z M 4.834 11.668 C 4.834 12.22 5.282 12.668 5.834 12.668 C 6.386 12.668 6.834 12.22 6.834 11.668 L 5.834 11.668 L 4.834 11.668 Z M 0 5.834 L 0 6.834 L 11.668 6.834 L 11.668 5.834 L 11.668 4.834 L 0 4.834 L 0 5.834 Z M 5.834 0 L 4.834 0 L 4.834 11.668 L 5.834 11.668 L 6.834 11.668 L 6.834 0 L 5.834 0 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div data-faq-cta style={{
            position: "relative",
            height: 198,
            borderTop: "1px solid var(--tan-cream)",
            borderRight: "1px solid var(--tan-cream)",
            borderBottom: "1px solid var(--tan-cream)",
            borderLeft: "1px solid var(--tan-cream)",
            display: "flex",
            flexDirection: "column",
            gap: 24,
            padding: "48px 0px 48px 0px",
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
              gap: 8,
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
                textAlign: "center",
                lineHeight: "100%",
                color: "var(--burgundy-deep-wine)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Still wondering something?</span>
              <span style={{
                position: "relative",
                opacity: 0.8,
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 15,
                textAlign: "center",
                lineHeight: "100%",
                color: "var(--primary-burgundy)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>A real human replies. Quickly.</span>
            </div>
            <div data-faq-btn style={{
              position: "relative",
              width: 320,
              borderRadius: 100,
              backgroundColor: "var(--burgundy-deep-wine)",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "18px 40px 18px 40px",
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
              }}>Chat on WhatsApp</span>
              <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
                color: "var(--tan-ivory)",
              }}>
                <path d={"M 0 7 C -0.552 7 -1 7.448 -1 8 C -1 8.552 -0.552 9 0 9 L 0 8 L 0 7 Z M 16 8 L 16.707 8.707 L 17.414 8 L 16.707 7.293 L 16 8 Z M 8.707 -0.707 C 8.317 -1.098 7.683 -1.098 7.293 -0.707 C 6.902 -0.317 6.902 0.317 7.293 0.707 L 8 0 L 8.707 -0.707 Z M 7.293 15.293 C 6.902 15.683 6.902 16.317 7.293 16.707 C 7.683 17.098 8.317 17.098 8.707 16.707 L 8 16 L 7.293 15.293 Z M 0 8 L 0 9 L 16 9 L 16 8 L 16 7 L 0 7 L 0 8 Z M 16 8 L 16.707 7.293 L 8.707 -0.707 L 8 0 L 7.293 0.707 L 15.293 8.707 L 16 8 Z M 16 8 L 15.293 7.293 L 7.293 15.293 L 8 16 L 8.707 16.707 L 16.707 8.707 L 16 8 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
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
                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  flexShrink: 0,
                  color: "var(--burgundy-deep-wine)",
                }}>
                  <path d={"M 12.4 3.1 C 12.124 3.1 11.9 3.324 11.9 3.6 C 11.9 3.876 12.124 4.1 12.4 4.1 L 12.4 3.6 L 12.4 3.1 Z M 12.408 4.1 C 12.684 4.1 12.908 3.876 12.908 3.6 C 12.908 3.324 12.684 3.1 12.408 3.1 L 12.408 3.6 L 12.408 4.1 Z M 11.2 7.496 L 11.694 7.423 L 11.694 7.423 L 11.2 7.496 Z M 8.504 4.8 L 8.577 4.306 L 8.577 4.306 L 8.504 4.8 Z M 12.4 3.6 L 12.4 4.1 L 12.408 4.1 L 12.408 3.6 L 12.408 3.1 L 12.4 3.1 L 12.4 3.6 Z M 11.2 7.496 L 10.705 7.57 C 10.788 8.131 10.693 8.705 10.431 9.209 L 10.875 9.439 L 11.319 9.67 C 11.677 8.979 11.809 8.193 11.694 7.423 L 11.2 7.496 Z M 10.875 9.439 L 10.431 9.209 C 10.169 9.713 9.756 10.122 9.248 10.377 L 9.473 10.824 L 9.698 11.271 C 10.393 10.921 10.96 10.361 11.319 9.67 L 10.875 9.439 Z M 9.473 10.824 L 9.248 10.377 C 8.741 10.633 8.166 10.722 7.605 10.631 L 7.526 11.125 L 7.447 11.619 C 8.215 11.742 9.003 11.62 9.698 11.271 L 9.473 10.824 Z M 7.526 11.125 L 7.605 10.631 C 7.045 10.541 6.527 10.276 6.125 9.875 L 5.772 10.228 L 5.418 10.582 C 5.968 11.132 6.678 11.495 7.447 11.619 L 7.526 11.125 Z M 5.772 10.228 L 6.125 9.875 C 5.724 9.473 5.459 8.955 5.369 8.395 L 4.875 8.474 L 4.381 8.553 C 4.505 9.322 4.868 10.032 5.418 10.582 L 5.772 10.228 Z M 4.875 8.474 L 5.369 8.395 C 5.278 7.834 5.367 7.259 5.623 6.752 L 5.176 6.527 L 4.729 6.302 C 4.38 6.997 4.258 7.785 4.381 8.553 L 4.875 8.474 Z M 5.176 6.527 L 5.623 6.752 C 5.878 6.244 6.287 5.831 6.791 5.569 L 6.561 5.125 L 6.33 4.681 C 5.639 5.04 5.079 5.607 4.729 6.302 L 5.176 6.527 Z M 6.561 5.125 L 6.791 5.569 C 7.295 5.307 7.869 5.212 8.43 5.295 L 8.504 4.8 L 8.577 4.306 C 7.807 4.191 7.021 4.323 6.33 4.681 L 6.561 5.125 Z M 8.504 4.8 L 8.43 5.295 C 9.003 5.38 9.534 5.647 9.944 6.056 L 10.297 5.703 L 10.651 5.349 C 10.089 4.788 9.362 4.422 8.577 4.306 L 8.504 4.8 Z M 10.297 5.703 L 9.944 6.056 C 10.353 6.466 10.62 6.997 10.705 7.57 L 11.2 7.496 L 11.694 7.423 C 11.578 6.638 11.212 5.911 10.651 5.349 L 10.297 5.703 Z M 4 0 L 4 1 L 12 1 L 12 0 L 12 -1 L 4 -1 L 4 0 Z M 12 0 L 12 1 C 13.657 1 15 2.343 15 4 L 16 4 L 17 4 C 17 1.239 14.761 -1 12 -1 L 12 0 Z M 16 4 L 15 4 L 15 12 L 16 12 L 17 12 L 17 4 L 16 4 Z M 16 12 L 15 12 C 15 13.657 13.657 15 12 15 L 12 16 L 12 17 C 14.761 17 17 14.761 17 12 L 16 12 Z M 12 16 L 12 15 L 4 15 L 4 16 L 4 17 L 12 17 L 12 16 Z M 4 16 L 4 15 C 2.343 15 1 13.657 1 12 L 0 12 L -1 12 C -1 14.761 1.239 17 4 17 L 4 16 Z M 0 12 L 1 12 L 1 4 L 0 4 L -1 4 L -1 12 L 0 12 Z M 0 4 L 1 4 C 1 2.343 2.343 1 4 1 L 4 0 L 4 -1 C 1.239 -1 -1 1.239 -1 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
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
                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  flexShrink: 0,
                  color: "var(--burgundy-deep-wine)",
                }}>
                  <path d={"M 16 0 L 17 0 L 17 -1 L 16 -1 L 16 0 Z M 4.364 6.4 L 4.364 7.4 L 5.364 7.4 L 5.364 6.4 L 4.364 6.4 Z M 0 6.4 L 0 5.4 L -1 5.4 L -1 6.4 L 0 6.4 Z M 0 9.6 L -1 9.6 L -1 10.6 L 0 10.6 L 0 9.6 Z M 4.364 9.6 L 5.364 9.6 L 5.364 8.6 L 4.364 8.6 L 4.364 9.6 Z M 4.364 16 L 3.364 16 L 3.364 17 L 4.364 17 L 4.364 16 Z M 10.182 16 L 10.182 17 L 11.182 17 L 11.182 16 L 10.182 16 Z M 10.182 9.6 L 10.182 8.6 L 9.182 8.6 L 9.182 9.6 L 10.182 9.6 Z M 14.545 9.6 L 14.545 10.6 L 15.189 10.6 L 15.456 10.014 L 14.545 9.6 Z M 16 6.4 L 16.91 6.814 L 17.553 5.4 L 16 5.4 L 16 6.4 Z M 10.182 6.4 L 9.182 6.4 L 9.182 7.4 L 10.182 7.4 L 10.182 6.4 Z M 16 3.2 L 16 4.2 L 17 4.2 L 17 3.2 L 16 3.2 Z M 16 0 L 16 -1 L 11.636 -1 L 11.636 0 L 11.636 1 L 16 1 L 16 0 Z M 11.636 0 L 11.636 -1 C 9.579 -1 7.555 -0.553 6.012 0.295 L 6.494 1.172 L 6.976 2.048 C 8.161 1.396 9.836 1 11.636 1 L 11.636 0 Z M 6.494 1.172 L 6.012 0.295 C 4.494 1.13 3.364 2.418 3.364 4 L 4.364 4 L 5.364 4 C 5.364 3.46 5.766 2.713 6.976 2.048 L 6.494 1.172 Z M 4.364 4 L 3.364 4 L 3.364 6.4 L 4.364 6.4 L 5.364 6.4 L 5.364 4 L 4.364 4 Z M 4.364 6.4 L 4.364 5.4 L 0 5.4 L 0 6.4 L 0 7.4 L 4.364 7.4 L 4.364 6.4 Z M 0 6.4 L -1 6.4 L -1 9.6 L 0 9.6 L 1 9.6 L 1 6.4 L 0 6.4 Z M 0 9.6 L 0 10.6 L 4.364 10.6 L 4.364 9.6 L 4.364 8.6 L 0 8.6 L 0 9.6 Z M 4.364 9.6 L 3.364 9.6 L 3.364 16 L 4.364 16 L 5.364 16 L 5.364 9.6 L 4.364 9.6 Z M 4.364 16 L 4.364 17 L 10.182 17 L 10.182 16 L 10.182 15 L 4.364 15 L 4.364 16 Z M 10.182 16 L 11.182 16 L 11.182 9.6 L 10.182 9.6 L 9.182 9.6 L 9.182 16 L 10.182 16 Z M 10.182 9.6 L 10.182 10.6 L 14.545 10.6 L 14.545 9.6 L 14.545 8.6 L 10.182 8.6 L 10.182 9.6 Z M 14.545 9.6 L 15.456 10.014 L 16.91 6.814 L 16 6.4 L 15.09 5.986 L 13.635 9.186 L 14.545 9.6 Z M 16 6.4 L 16 5.4 L 10.182 5.4 L 10.182 6.4 L 10.182 7.4 L 16 7.4 L 16 6.4 Z M 10.182 6.4 L 11.182 6.4 L 11.182 4 L 10.182 4 L 9.182 4 L 9.182 6.4 L 10.182 6.4 Z M 10.182 4 L 11.182 4 C 11.182 4.146 11.127 4.248 11.091 4.295 C 11.06 4.337 11.046 4.334 11.09 4.311 L 10.608 3.434 L 10.126 2.558 C 9.699 2.793 9.182 3.267 9.182 4 L 10.182 4 Z M 10.608 3.434 L 11.09 4.311 C 11.184 4.259 11.379 4.2 11.636 4.2 L 11.636 3.2 L 11.636 2.2 C 11.122 2.2 10.578 2.31 10.126 2.558 L 10.608 3.434 Z M 11.636 3.2 L 11.636 4.2 L 16 4.2 L 16 3.2 L 16 2.2 L 11.636 2.2 L 11.636 3.2 Z M 16 3.2 L 17 3.2 L 17 0 L 16 0 L 15 0 L 15 3.2 L 16 3.2 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
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
                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  flexShrink: 0,
                  color: "var(--burgundy-deep-wine)",
                }}>
                  <path d={"M 11.7 4.8 C 11.7 4.524 11.476 4.3 11.2 4.3 C 10.924 4.3 10.7 4.524 10.7 4.8 L 11.2 4.8 L 11.7 4.8 Z M 14.273 3.035 L 13.881 3.346 L 13.881 3.346 L 14.273 3.035 Z M 9.838 0.214 L 9.953 -0.273 L 9.838 0.214 Z M 2.874 14.142 L 3.194 13.758 L 3.194 13.758 L 2.874 14.142 Z M 7.792 15.997 L 7.779 16.497 L 7.779 16.497 L 7.792 15.997 Z M 13.1 14.8 C 13.321 14.634 13.366 14.321 13.2 14.1 C 13.034 13.879 12.721 13.834 12.5 14 L 12.8 14.4 L 13.1 14.8 Z M 11.2 4.8 L 10.7 4.8 L 10.7 8.8 L 11.2 8.8 L 11.7 8.8 L 11.7 4.8 L 11.2 4.8 Z M 11.2 8.8 L 10.7 8.8 C 10.7 9.569 11.006 10.307 11.549 10.851 L 11.903 10.497 L 12.256 10.144 C 11.9 9.787 11.7 9.304 11.7 8.8 L 11.2 8.8 Z M 11.903 10.497 L 11.549 10.851 C 12.093 11.394 12.831 11.7 13.6 11.7 L 13.6 11.2 L 13.6 10.7 C 13.096 10.7 12.613 10.5 12.256 10.144 L 11.903 10.497 Z M 13.6 11.2 L 13.6 11.7 C 14.369 11.7 15.107 11.394 15.651 10.851 L 15.297 10.497 L 14.944 10.144 C 14.587 10.5 14.104 10.7 13.6 10.7 L 13.6 11.2 Z M 15.297 10.497 L 15.651 10.851 C 16.194 10.307 16.5 9.569 16.5 8.8 L 16 8.8 L 15.5 8.8 C 15.5 9.304 15.3 9.787 14.944 10.144 L 15.297 10.497 Z M 16 8.8 L 16.5 8.8 L 16.5 8 L 16 8 L 15.5 8 L 15.5 8.8 L 16 8.8 Z M 16 8 L 16.5 8 C 16.5 6.085 15.853 4.227 14.665 2.725 L 14.273 3.035 L 13.881 3.346 C 14.93 4.67 15.5 6.31 15.5 8 L 16 8 Z M 14.273 3.035 L 14.665 2.725 C 13.477 1.224 11.816 0.167 9.953 -0.273 L 9.838 0.214 L 9.723 0.701 C 11.367 1.089 12.833 2.021 13.881 3.346 L 14.273 3.035 Z M 9.838 0.214 L 9.953 -0.273 C 8.089 -0.713 6.132 -0.51 4.398 0.301 L 4.609 0.754 L 4.821 1.207 C 6.352 0.491 8.079 0.312 9.723 0.701 L 9.838 0.214 Z M 4.609 0.754 L 4.398 0.301 C 2.663 1.113 1.254 2.486 0.397 4.199 L 0.845 4.422 L 1.292 4.646 C 2.047 3.135 3.291 1.923 4.821 1.207 L 4.609 0.754 Z M 0.845 4.422 L 0.397 4.199 C -0.459 5.911 -0.712 7.863 -0.321 9.737 L 0.169 9.635 L 0.658 9.533 C 0.313 7.879 0.536 6.157 1.292 4.646 L 0.845 4.422 Z M 0.169 9.635 L -0.321 9.737 C 0.071 11.612 1.084 13.299 2.554 14.526 L 2.874 14.142 L 3.194 13.758 C 1.897 12.676 1.004 11.187 0.658 9.533 L 0.169 9.635 Z M 2.874 14.142 L 2.554 14.526 C 4.024 15.753 5.865 16.447 7.779 16.497 L 7.792 15.997 L 7.805 15.497 C 6.116 15.454 4.492 14.841 3.194 13.758 L 2.874 14.142 Z M 7.792 15.997 L 7.779 16.497 C 9.693 16.547 11.568 15.949 13.1 14.8 L 12.8 14.4 L 12.5 14 C 11.148 15.014 9.494 15.541 7.805 15.497 L 7.792 15.997 Z M 11.2 8 L 10.2 8 C 10.2 9.215 9.215 10.2 8 10.2 L 8 11.2 L 8 12.2 C 10.32 12.2 12.2 10.32 12.2 8 L 11.2 8 Z M 8 11.2 L 8 10.2 C 6.785 10.2 5.8 9.215 5.8 8 L 4.8 8 L 3.8 8 C 3.8 10.32 5.68 12.2 8 12.2 L 8 11.2 Z M 4.8 8 L 5.8 8 C 5.8 6.785 6.785 5.8 8 5.8 L 8 4.8 L 8 3.8 C 5.68 3.8 3.8 5.68 3.8 8 L 4.8 8 Z M 8 4.8 L 8 5.8 C 9.215 5.8 10.2 6.785 10.2 8 L 11.2 8 L 12.2 8 C 12.2 5.68 10.32 3.8 8 3.8 L 8 4.8 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
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
                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
                  position: "relative",
                  width: 16,
                  height: 16,
                  flexShrink: 0,
                  color: "var(--burgundy-deep-wine)",
                }}>
                  <path d={"M 16 16 L 16 17 L 17 17 L 17 16 L 16 16 Z M 12.8 16 L 11.8 16 L 11.8 17 L 12.8 17 L 12.8 16 Z M 9.6 16 L 9.6 17 L 10.6 17 L 10.6 16 L 9.6 16 Z M 6.4 16 L 5.4 16 L 5.4 17 L 6.4 17 L 6.4 16 Z M 0 5.895 L 0 4.895 L -1 4.895 L -1 5.895 L 0 5.895 Z M 3.2 5.895 L 4.2 5.895 L 4.2 4.895 L 3.2 4.895 L 3.2 5.895 Z M 3.2 16 L 3.2 17 L 4.2 17 L 4.2 16 L 3.2 16 Z M 0 16 L -1 16 L -1 17 L 0 17 L 0 16 Z M 11.2 5.053 L 11.2 6.053 C 12.191 6.053 13.152 6.466 13.869 7.221 L 14.594 6.533 L 15.319 5.844 C 14.236 4.703 12.755 4.053 11.2 4.053 L 11.2 5.053 Z M 14.594 6.533 L 13.869 7.221 C 14.588 7.978 15 9.014 15 10.105 L 16 10.105 L 17 10.105 C 17 8.516 16.401 6.982 15.319 5.844 L 14.594 6.533 Z M 16 10.105 L 15 10.105 L 15 16 L 16 16 L 17 16 L 17 10.105 L 16 10.105 Z M 16 16 L 16 15 L 12.8 15 L 12.8 16 L 12.8 17 L 16 17 L 16 16 Z M 12.8 16 L 13.8 16 L 13.8 10.105 L 12.8 10.105 L 11.8 10.105 L 11.8 16 L 12.8 16 Z M 12.8 10.105 L 13.8 10.105 C 13.8 9.409 13.538 8.732 13.056 8.226 L 12.331 8.914 L 11.606 9.603 C 11.725 9.728 11.8 9.908 11.8 10.105 L 12.8 10.105 Z M 12.331 8.914 L 13.056 8.226 C 12.573 7.717 11.907 7.421 11.2 7.421 L 11.2 8.421 L 11.2 9.421 C 11.342 9.421 11.489 9.48 11.606 9.603 L 12.331 8.914 Z M 11.2 8.421 L 11.2 7.421 C 10.493 7.421 9.827 7.717 9.344 8.226 L 10.069 8.914 L 10.794 9.603 C 10.911 9.48 11.058 9.421 11.2 9.421 L 11.2 8.421 Z M 10.069 8.914 L 9.344 8.226 C 8.862 8.732 8.6 9.409 8.6 10.105 L 9.6 10.105 L 10.6 10.105 C 10.6 9.908 10.675 9.728 10.794 9.603 L 10.069 8.914 Z M 9.6 10.105 L 8.6 10.105 L 8.6 16 L 9.6 16 L 10.6 16 L 10.6 10.105 L 9.6 10.105 Z M 9.6 16 L 9.6 15 L 6.4 15 L 6.4 16 L 6.4 17 L 9.6 17 L 9.6 16 Z M 6.4 16 L 7.4 16 L 7.4 10.105 L 6.4 10.105 L 5.4 10.105 L 5.4 16 L 6.4 16 Z M 6.4 10.105 L 7.4 10.105 C 7.4 9.014 7.812 7.978 8.531 7.221 L 7.806 6.533 L 7.081 5.844 C 5.999 6.982 5.4 8.516 5.4 10.105 L 6.4 10.105 Z M 7.806 6.533 L 8.531 7.221 C 9.248 6.466 10.209 6.053 11.2 6.053 L 11.2 5.053 L 11.2 4.053 C 9.645 4.053 8.164 4.703 7.081 5.844 L 7.806 6.533 Z M 0 5.895 L 0 6.895 L 3.2 6.895 L 3.2 5.895 L 3.2 4.895 L 0 4.895 L 0 5.895 Z M 3.2 5.895 L 2.2 5.895 L 2.2 16 L 3.2 16 L 4.2 16 L 4.2 5.895 L 3.2 5.895 Z M 3.2 16 L 3.2 15 L 0 15 L 0 16 L 0 17 L 3.2 17 L 3.2 16 Z M 0 16 L 1 16 L 1 5.895 L 0 5.895 L -1 5.895 L -1 16 L 0 16 Z M 3.2 1.684 L 2.2 1.684 C 2.2 2.111 1.884 2.368 1.6 2.368 L 1.6 3.368 L 1.6 4.368 C 3.084 4.368 4.2 3.118 4.2 1.684 L 3.2 1.684 Z M 1.6 3.368 L 1.6 2.368 C 1.316 2.368 1 2.111 1 1.684 L 0 1.684 L -1 1.684 C -1 3.118 0.116 4.368 1.6 4.368 L 1.6 3.368 Z M 0 1.684 L 1 1.684 C 1 1.257 1.316 1 1.6 1 L 1.6 0 L 1.6 -1 C 0.116 -1 -1 0.251 -1 1.684 L 0 1.684 Z M 1.6 0 L 1.6 1 C 1.884 1 2.2 1.257 2.2 1.684 L 3.2 1.684 L 4.2 1.684 C 4.2 0.251 3.084 -1 1.6 -1 L 1.6 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
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
export default FaqPage;
