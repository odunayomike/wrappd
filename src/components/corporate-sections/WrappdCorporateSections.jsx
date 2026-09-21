import { NavBar3 } from './NavBar3.jsx';
import { PromoBanner } from './PromoBanner.jsx';
import { WrappDLogo } from './WrappDLogo.jsx';

// figma node: 112:1012 wrappd-corporate-sections
export function WrappdCorporateSections(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "100%",
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
        backgroundColor: "var(--tan-ivory)",
        display: "flex",
        flexDirection: "column",
        gap: 64,
        padding: "100px 120px 30px 120px",
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
          gap: 32,
          alignItems: "flex-start",
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
            }}>CLIENT STORY</span>
          </div>
          <div data-section="split" style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 48,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <span data-heading="hero" data-text-block style={{
              position: "relative",
              width: 721,
              fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 72,
              lineHeight: 1.0499999523162842,
              letterSpacing: "-1px",
              color: "var(--primary-burgundy)",
              flexShrink: 0,
            }}>How Wildreams celebrates its team with wrapp'd</span>
            <span style={{
              position: "relative",
              fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 18,
              lineHeight: 1.600000023841858,
              color: "var(--primary-burgundy)",
              flexGrow: 1,
            }}>Wildreams, a creative advertising agency in Lagos, partners with wrapp'd across their employee journey — from welcome boxes for new hires to milestone and festive gifting for the whole team.</span>
          </div>
        </div>
        <div data-section="content" style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 24,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 20,
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "0px 8px 24px 0px rgba(106,30,46,0.0314)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: "32px 32px 32px 32px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 64,
              lineHeight: "100%",
              color: "var(--primary-burgundy)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>100%</span>
            <span style={{
              position: "relative",
              width: 291,
              fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 22,
              lineHeight: 1.399999976158142,
              color: "var(--burgundy-deep-wine)",
              flexShrink: 0,
            }}>of occasions covered, all year round</span>
          </div>
          <div style={{
            position: "relative",
            borderRadius: 20,
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "0px 8px 24px 0px rgba(106,30,46,0.0314)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: "32px 32px 32px 32px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 64,
              lineHeight: "100%",
              color: "var(--primary-burgundy)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>0 hours</span>
            <span style={{
              position: "relative",
              width: 281,
              fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 22,
              lineHeight: 1.399999976158142,
              color: "var(--burgundy-deep-wine)",
              flexShrink: 0,
            }}>of gifting admin for their busy HR team</span>
          </div>
          <div style={{
            position: "relative",
            borderRadius: 20,
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "0px 8px 24px 0px rgba(106,30,46,0.0314)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: "32px 32px 32px 32px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 64,
              lineHeight: "100%",
              color: "var(--primary-burgundy)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>1 partner</span>
            <span style={{
              position: "relative",
              fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 22,
              lineHeight: 1.399999976158142,
              color: "var(--burgundy-deep-wine)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>for customized boxes and experiences</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          borderRadius: 28,
          backgroundColor: "var(--tan-cream)",
          display: "flex",
          flexDirection: "row",
          gap: 32,
          padding: "48px 68px 48px 68px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            opacity: 0.4,
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 96,
            whiteSpace: "nowrap",
            lineHeight: "60px",
            color: "var(--primary-burgundy)",
            flexShrink: 0,
          }}>“</span>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 24,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 34,
              lineHeight: 1.2699999809265137,
              color: "var(--burgundy-deep-wine)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Gifting was always a bottleneck for us. We wanted to make our team feel valued, but compiling addresses and hand-packing took hours. With wrapp'd, we setup our annual milestones once, and they deliver gorgeous bespoke boxes right to our employees' doors perfectly on schedule.</span>
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
                fontSize: 21,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--burgundy-deep-wine)",
                flexShrink: 0,
              }}>Oluwaseun Adeyemi</span>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--primary-burgundy)",
                flexShrink: 0,
              }}>Head of People &amp; Culture, Wildreams</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        background: "linear-gradient(180deg, rgb(245,237,224) 0.00%, rgb(212,180,131) 100.00%)",
        display: "flex",
        flexDirection: "column",
        gap: 56,
        padding: "70px 120px 70px 120px",
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
          <span data-heading="section" style={{
            position: "relative",
            fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 58,
            textAlign: "center",
            lineHeight: "100%",
            color: "var(--burgundy-berry)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Pick a time that works</span>
          <span style={{
            position: "relative",
            fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 23,
            textAlign: "center",
            lineHeight: "100%",
            color: "var(--burgundy-deep-wine)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>30 minutes to map your gifting year. No commitment, no pressure.</span>
        </div>
        <div data-text-block style={{
          position: "relative",
          width: 880,
          overflow: "hidden",
          borderRadius: 16,
          backgroundColor: "rgb(245,237,224)",
          boxShadow: "0px 4px 24px 0px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 600,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: 6,
            padding: "32px 32px 32px 32px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              height: 30,
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              padding: "0px 0px 8px 0px",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 18,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(64,38,26)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>←</span>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 18,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(64,38,26)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>December 2026</span>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 18,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(64,38,26)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>→</span>
            </div>
            <div style={{
              position: "relative",
              height: 28,
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 12,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(128,102,89)",
                  flexShrink: 0,
                }}>Mon</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 12,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(128,102,89)",
                  flexShrink: 0,
                }}>Tue</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 12,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(128,102,89)",
                  flexShrink: 0,
                }}>Wed</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 12,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(128,102,89)",
                  flexShrink: 0,
                }}>Thu</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 12,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(128,102,89)",
                  flexShrink: 0,
                }}>Fri</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 12,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(128,102,89)",
                  flexShrink: 0,
                }}>Sat</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 500,
                  fontSize: 12,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(128,102,89)",
                  flexShrink: 0,
                }}>Sun</span>
              </div>
            </div>
            <div style={{
              position: "relative",
              height: 38,
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(178,166,153)",
                  flexShrink: 0,
                }}>30</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(64,38,26)",
                  flexShrink: 0,
                }}>1</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(64,38,26)",
                  flexShrink: 0,
                }}>2</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(64,38,26)",
                  flexShrink: 0,
                }}>3</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(64,38,26)",
                  flexShrink: 0,
                }}>4</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(64,38,26)",
                  flexShrink: 0,
                }}>5</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(64,38,26)",
                  flexShrink: 0,
                }}>6</span>
              </div>
            </div>
            <div style={{
              position: "relative",
              height: 38,
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(64,38,26)",
                  flexShrink: 0,
                }}>7</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(64,38,26)",
                  flexShrink: 0,
                }}>8</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(64,38,26)",
                  flexShrink: 0,
                }}>9</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(64,38,26)",
                  flexShrink: 0,
                }}>10</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(64,38,26)",
                  flexShrink: 0,
                }}>11</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(64,38,26)",
                  flexShrink: 0,
                }}>12</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(64,38,26)",
                  flexShrink: 0,
                }}>13</span>
              </div>
            </div>
            <div style={{
              position: "relative",
              height: 38,
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(64,38,26)",
                  flexShrink: 0,
                }}>14</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                backgroundColor: "rgb(194,140,64)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(255,255,255)",
                  flexShrink: 0,
                }}>15</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(64,38,26)",
                  flexShrink: 0,
                }}>16</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(64,38,26)",
                  flexShrink: 0,
                }}>17</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(64,38,26)",
                  flexShrink: 0,
                }}>18</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(64,38,26)",
                  flexShrink: 0,
                }}>19</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(64,38,26)",
                  flexShrink: 0,
                }}>20</span>
              </div>
            </div>
            <div style={{
              position: "relative",
              height: 38,
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(64,38,26)",
                  flexShrink: 0,
                }}>21</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(64,38,26)",
                  flexShrink: 0,
                }}>22</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(64,38,26)",
                  flexShrink: 0,
                }}>23</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(64,38,26)",
                  flexShrink: 0,
                }}>24</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(64,38,26)",
                  flexShrink: 0,
                }}>25</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(64,38,26)",
                  flexShrink: 0,
                }}>26</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(64,38,26)",
                  flexShrink: 0,
                }}>27</span>
              </div>
            </div>
            <div style={{
              position: "relative",
              height: 38,
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(64,38,26)",
                  flexShrink: 0,
                }}>28</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(64,38,26)",
                  flexShrink: 0,
                }}>29</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(64,38,26)",
                  flexShrink: 0,
                }}>30</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(64,38,26)",
                  flexShrink: 0,
                }}>31</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(178,166,153)",
                  flexShrink: 0,
                }}>1</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(178,166,153)",
                  flexShrink: 0,
                }}>2</span>
              </div>
              <div style={{
                position: "relative",
                width: 76,
                overflow: "hidden",
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  lineHeight: "100%",
                  color: "rgb(178,166,153)",
                  flexShrink: 0,
                }}>3</span>
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 280,
            overflow: "hidden",
            backgroundColor: "rgb(247,245,240)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: "32px 24px 32px 24px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(64,38,26)",
              flexShrink: 0,
            }}>Available times</span>
            <span style={{
              position: "relative",
              fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(128,102,89)",
              flexShrink: 0,
            }}>Tuesday, December 15</span>
            <div style={{
              position: "relative",
              height: 30,
              overflow: "hidden",
              borderRadius: 10,
              backgroundColor: "rgb(255,255,255)",
              boxShadow: "inset 0 0 0 1px rgb(217,204,191)",
              display: "flex",
              flexDirection: "row",
              padding: "14px 20px 14px 20px",
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
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(64,38,26)",
                flexShrink: 0,
              }}>9:00 AM</span>
            </div>
            <div style={{
              position: "relative",
              height: 30,
              overflow: "hidden",
              borderRadius: 10,
              backgroundColor: "rgb(255,255,255)",
              boxShadow: "inset 0 0 0 1px rgb(217,204,191)",
              display: "flex",
              flexDirection: "row",
              padding: "14px 20px 14px 20px",
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
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(64,38,26)",
                flexShrink: 0,
              }}>10:30 AM</span>
            </div>
            <div style={{
              position: "relative",
              height: 30,
              overflow: "hidden",
              borderRadius: 10,
              backgroundColor: "rgb(255,255,255)",
              boxShadow: "inset 0 0 0 1px rgb(217,204,191)",
              display: "flex",
              flexDirection: "row",
              padding: "14px 20px 14px 20px",
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
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(64,38,26)",
                flexShrink: 0,
              }}>1:30 PM</span>
            </div>
            <div style={{
              position: "relative",
              height: 30,
              overflow: "hidden",
              borderRadius: 10,
              backgroundColor: "rgb(255,255,255)",
              boxShadow: "inset 0 0 0 1px rgb(217,204,191)",
              display: "flex",
              flexDirection: "row",
              padding: "14px 20px 14px 20px",
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
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(64,38,26)",
                flexShrink: 0,
              }}>3:00 PM</span>
            </div>
            <div style={{
              position: "relative",
              height: 30,
              overflow: "hidden",
              borderRadius: 10,
              backgroundColor: "rgb(255,255,255)",
              boxShadow: "inset 0 0 0 1px rgb(217,204,191)",
              display: "flex",
              flexDirection: "row",
              padding: "14px 20px 14px 20px",
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
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(64,38,26)",
                flexShrink: 0,
              }}>4:30 PM</span>
            </div>
          </div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 25,
          textAlign: "center",
          whiteSpace: "pre-wrap",
          lineHeight: "100%",
          color: "var(--primary-burgundy)",
          flexShrink: 0,
        }}><span style={{ fontSize: 25 }}>{"Prefer to chat first? Message us on "}</span><span style={{
  fontWeight: 500,
  color: "rgb(106,30,46)",
  textDecoration: "underline",
  fontSize: 25,
}}>{"WhatsApp"}</span><span style={{ fontSize: 25 }}>{"."}</span></span>
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
export default WrappdCorporateSections;
