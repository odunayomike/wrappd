import { NavBar3 } from './NavBar3.jsx';
import { PromoBanner } from './PromoBanner.jsx';
import { WrappDLogo } from './WrappDLogo.jsx';

// figma node: 88:1347 corporate-gifting-page
export function CorporateGiftingPage(_p = {}) {
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
                }}>Corporate Gifting</span>
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
            }}>{"People stay where\nthey feel seen."}</span>
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
            }}>The best companies don't celebrate their people once a year at the end-of-year party. They do it all year and wrapp'd is how. We become your gifting partner across the entire employee journey, so every moment that matters gets marked.</span>
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
              }}>Let's talk about your team →</span>
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
          <div className="fig-asset-0b4ff76dfcc7fd85" style={{ position: "relative", flexGrow: 1, alignSelf: "stretch" }} />
        </div>
      </div>
      <div data-section="content" style={{
        position: "relative",
        backgroundColor: "var(--tan-ivory)",
        display: "flex",
        flexDirection: "column",
        gap: 64,
        padding: "100px 80px 50px 80px",
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
            textAlign: "center",
            lineHeight: "100%",
            color: "var(--burgundy-deep-wine)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>From "welcome aboard" to "we'll miss you"</span>
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
          }}>One partner for every chapter of the journey.</span>
        </div>
        <div style={{
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
            borderRadius: 24,
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "inset 0 0 0 1.500px var(--tan-cream)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            padding: "32px 32px 32px 32px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
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
              }}>DAY ONE</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 24,
              lineHeight: 1.2999999523162842,
              color: "var(--burgundy-deep-wine)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>A welcome box on their desk that says: you chose right.</span>
          </div>
          <div style={{
            position: "relative",
            borderRadius: 24,
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "inset 0 0 0 1.500px var(--tan-cream)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            padding: "32px 32px 32px 32px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
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
              }}>ALONG THE WAY</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 24,
              lineHeight: 1.2999999523162842,
              color: "var(--burgundy-deep-wine)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Birthdays, promotions, and wins, none of them slip past unnoticed.</span>
          </div>
          <div style={{
            position: "relative",
            borderRadius: 24,
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "inset 0 0 0 1.500px var(--tan-cream)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            padding: "32px 32px 32px 32px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
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
              }}>THE MILESTONES</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 24,
              lineHeight: 1.2999999523162842,
              color: "var(--burgundy-deep-wine)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Work anniversaries and festive seasons, celebrated properly.</span>
          </div>
          <div style={{
            position: "relative",
            borderRadius: 24,
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "inset 0 0 0 1.500px var(--tan-cream)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            padding: "32px 32px 32px 32px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
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
              }}>THE FAREWELL</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 24,
              lineHeight: 1.2999999523162842,
              color: "var(--burgundy-deep-wine)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Because how someone leaves shapes how they remember you.</span>
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
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--primary-burgundy)",
            flexShrink: 0,
          }}>Every box carries your branding, so it's your company they thank, not us.</span>
        </div>
      </div>
      <div data-section="content" style={{
        position: "relative",
        background: "linear-gradient(0deg, rgb(232,212,180) 0.00%, rgb(245,237,224) 100.00%)",
        display: "flex",
        flexDirection: "row",
        gap: 80,
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
          gap: 32,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          width: "calc(50% - 40px)",
          flexShrink: 0,
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
            <div style={{
              position: "relative",
              borderRadius: 100,
              backgroundColor: "rgba(106,30,46,0.102)",
              boxShadow: "inset 0 0 0 1px var(--primary-burgundy)",
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
              }}>OUR PHILOSOPHY</span>
            </div>
            <span data-heading="section" style={{
              position: "relative",
              fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 56,
              lineHeight: 1.0700000524520874,
              color: "var(--burgundy-deep-wine)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Why we start with a conversation</span>
            <span style={{
              position: "relative",
              fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              lineHeight: 1.600000023841858,
              color: "var(--burgundy-deep-wine)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>A team of 8 and a team of 80 don't need the same plan and we'd never pretend they do. So every partnership begins with one meeting: your team size, your key dates, your budget, your culture. Then we design your gifting year around it, priced for exactly what you need.</span>
          </div>
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
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "var(--tan-gold)",
                flexShrink: 0,
              }} />
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 800,
                fontSize: 19,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--primary-burgundy)",
                flexShrink: 0,
              }}>No packages forced on you.</span>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "var(--tan-gold)",
                flexShrink: 0,
              }} />
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 800,
                fontSize: 19,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "var(--primary-burgundy)",
                flexShrink: 0,
              }}>No paying for what you won't use.</span>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          borderRadius: 32,
          backgroundColor: "rgba(184,147,94,0.24)",
          boxShadow: "inset 0 0 0 1px var(--tan-gold)",
          display: "flex",
          flexDirection: "column",
          gap: 24,
          padding: "40px 40px 40px 40px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          width: "calc(50% - 40px)",
          flexShrink: 0,
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
              width: 28,
              height: 28,
              borderRadius: 100,
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
                width: 14,
                height: 14,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={9.332} height={6.416} viewBox="0 0 9.332 6.416" fill="none" style={{
                  position: "absolute",
                  left: 2.334,
                  top: 3.5,
                  width: 9.332,
                  height: 6.416,
                  color: "var(--burgundy-deep-wine)",
                }}>
                  <path d={"M 10.393 1.061 C 10.979 0.475 10.979 -0.475 10.393 -1.061 C 9.807 -1.646 8.858 -1.646 8.272 -1.061 L 9.332 0 L 10.393 1.061 Z M 2.916 6.416 L 1.856 7.477 L 2.916 8.538 L 3.977 7.477 L 2.916 6.416 Z M 1.061 2.439 C 0.475 1.853 -0.475 1.853 -1.061 2.439 C -1.646 3.025 -1.646 3.975 -1.061 4.56 L 0 3.5 L 1.061 2.439 Z M 9.332 0 L 8.272 -1.061 L 1.856 5.356 L 2.916 6.416 L 3.977 7.477 L 10.393 1.061 L 9.332 0 Z M 2.916 6.416 L 3.977 5.356 L 1.061 2.439 L 0 3.5 L -1.061 4.56 L 1.856 7.477 L 2.916 6.416 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 19,
              lineHeight: "100%",
              color: "var(--burgundy-deep-wine)",
              flexGrow: 1,
            }}>A plan built around your team, not a template</span>
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
              width: 28,
              height: 28,
              borderRadius: 100,
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
                width: 14,
                height: 14,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={9.332} height={6.416} viewBox="0 0 9.332 6.416" fill="none" style={{
                  position: "absolute",
                  left: 2.334,
                  top: 3.5,
                  width: 9.332,
                  height: 6.416,
                  color: "var(--burgundy-deep-wine)",
                }}>
                  <path d={"M 10.393 1.061 C 10.979 0.475 10.979 -0.475 10.393 -1.061 C 9.807 -1.646 8.858 -1.646 8.272 -1.061 L 9.332 0 L 10.393 1.061 Z M 2.916 6.416 L 1.856 7.477 L 2.916 8.538 L 3.977 7.477 L 2.916 6.416 Z M 1.061 2.439 C 0.475 1.853 -0.475 1.853 -1.061 2.439 C -1.646 3.025 -1.646 3.975 -1.061 4.56 L 0 3.5 L 1.061 2.439 Z M 9.332 0 L 8.272 -1.061 L 1.856 5.356 L 2.916 6.416 L 3.977 7.477 L 10.393 1.061 L 9.332 0 Z M 2.916 6.416 L 3.977 5.356 L 1.061 2.439 L 0 3.5 L -1.061 4.56 L 1.856 7.477 L 2.916 6.416 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 19,
              lineHeight: "100%",
              color: "var(--burgundy-deep-wine)",
              flexGrow: 1,
            }}>Pricing that fits your headcount and calendar</span>
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
              width: 28,
              height: 28,
              borderRadius: 100,
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
                width: 14,
                height: 14,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={9.332} height={6.416} viewBox="0 0 9.332 6.416" fill="none" style={{
                  position: "absolute",
                  left: 2.334,
                  top: 3.5,
                  width: 9.332,
                  height: 6.416,
                  color: "var(--burgundy-deep-wine)",
                }}>
                  <path d={"M 10.393 1.061 C 10.979 0.475 10.979 -0.475 10.393 -1.061 C 9.807 -1.646 8.858 -1.646 8.272 -1.061 L 9.332 0 L 10.393 1.061 Z M 2.916 6.416 L 1.856 7.477 L 2.916 8.538 L 3.977 7.477 L 2.916 6.416 Z M 1.061 2.439 C 0.475 1.853 -0.475 1.853 -1.061 2.439 C -1.646 3.025 -1.646 3.975 -1.061 4.56 L 0 3.5 L 1.061 2.439 Z M 9.332 0 L 8.272 -1.061 L 1.856 5.356 L 2.916 6.416 L 3.977 7.477 L 10.393 1.061 L 9.332 0 Z M 2.916 6.416 L 3.977 5.356 L 1.061 2.439 L 0 3.5 L -1.061 4.56 L 1.856 7.477 L 2.916 6.416 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 19,
              lineHeight: "100%",
              color: "var(--burgundy-deep-wine)",
              flexGrow: 1,
            }}>Then we run it all year. you barely lift a finger</span>
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
              width: 28,
              height: 28,
              borderRadius: 100,
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
                width: 14,
                height: 14,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={9.332} height={6.416} viewBox="0 0 9.332 6.416" fill="none" style={{
                  position: "absolute",
                  left: 2.334,
                  top: 3.5,
                  width: 9.332,
                  height: 6.416,
                  color: "var(--burgundy-deep-wine)",
                }}>
                  <path d={"M 10.393 1.061 C 10.979 0.475 10.979 -0.475 10.393 -1.061 C 9.807 -1.646 8.858 -1.646 8.272 -1.061 L 9.332 0 L 10.393 1.061 Z M 2.916 6.416 L 1.856 7.477 L 2.916 8.538 L 3.977 7.477 L 2.916 6.416 Z M 1.061 2.439 C 0.475 1.853 -0.475 1.853 -1.061 2.439 C -1.646 3.025 -1.646 3.975 -1.061 4.56 L 0 3.5 L 1.061 2.439 Z M 9.332 0 L 8.272 -1.061 L 1.856 5.356 L 2.916 6.416 L 3.977 7.477 L 10.393 1.061 L 9.332 0 Z M 2.916 6.416 L 3.977 5.356 L 1.061 2.439 L 0 3.5 L -1.061 4.56 L 1.856 7.477 L 2.916 6.416 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 19,
              lineHeight: "100%",
              color: "var(--burgundy-deep-wine)",
              flexGrow: 1,
            }}>One partner, every occasion, zero scrambling</span>
          </div>
        </div>
      </div>
      <div data-section="content" style={{
        position: "relative",
        backgroundColor: "var(--burgundy-deep-wine)",
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
            }}>WHEN A BOX ISN'T ENOUGH</span>
          </div>
          <span data-heading="section" style={{
            position: "relative",
            fontFamily: "Baskervville, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 48,
            textAlign: "center",
            lineHeight: "100%",
            color: "var(--tan-ivory)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>We turn moments into memories</span>
          <span data-text-block style={{
            position: "relative",
            width: 720,
            opacity: 0.8,
            fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            textAlign: "center",
            lineHeight: 1.5,
            color: "var(--tan-cream)",
            flexShrink: 0,
          }}>Some celebrations need a room, not a ribbon. As part of your partnership or as a one-off, we plan and host full team experiences: venue, vendors, games, hosting, and a wrapp'd Experience Box in every guest's hands. You show up with your team. We do the rest.</span>
        </div>
        <div style={{
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
            overflow: "hidden",
            borderRadius: 24,
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div className="fig-asset-b9bec7405821b400" style={{
              position: "relative",
              height: 220,
              flexShrink: 0,
              alignSelf: "stretch",
            }} />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              padding: "24px 24px 24px 24px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Baskerville, ui-serif, Georgia, \"Times New Roman\", serif",
                fontWeight: 600,
                fontSize: 33,
                lineHeight: "100%",
                color: "var(--burgundy-deep-wine)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Sip and paint</span>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 17,
                lineHeight: 1.5,
                color: "var(--primary-burgundy)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Wine, canvases, and hidden talents</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 24,
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div className="fig-asset-01fe14a14b9dcedf" style={{
              position: "relative",
              height: 220,
              flexShrink: 0,
              alignSelf: "stretch",
            }} />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              padding: "24px 24px 24px 24px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Baskerville, ui-serif, Georgia, \"Times New Roman\", serif",
                fontWeight: 600,
                fontSize: 33,
                lineHeight: "100%",
                color: "var(--burgundy-deep-wine)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Beach day retreat</span>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 17,
                lineHeight: 1.5,
                color: "var(--primary-burgundy)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>The reset your team keeps asking for</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 24,
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div className="fig-asset-3cb3380d4e0c94bb" style={{
              position: "relative",
              height: 220,
              flexShrink: 0,
              alignSelf: "stretch",
            }} />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              padding: "24px 24px 24px 24px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Baskerville, ui-serif, Georgia, \"Times New Roman\", serif",
                fontWeight: 600,
                fontSize: 33,
                lineHeight: "100%",
                color: "var(--burgundy-deep-wine)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Wellness morning</span>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 17,
                lineHeight: 1.5,
                color: "var(--primary-burgundy)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Slow, calm, and deeply needed</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 24,
            backgroundColor: "rgb(255,255,255)",
            boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div className="fig-asset-139bb91dbfd10aac" style={{
              position: "relative",
              height: 220,
              flexShrink: 0,
              alignSelf: "stretch",
            }} />
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              padding: "24px 24px 24px 24px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                width: 243,
                fontFamily: "Baskerville, ui-serif, Georgia, \"Times New Roman\", serif",
                fontWeight: 600,
                fontSize: 33,
                lineHeight: "100%",
                color: "var(--burgundy-deep-wine)",
                flexShrink: 0,
              }}>Trivia and game night</span>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 17,
                lineHeight: 1.5,
                color: "var(--primary-burgundy)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Friendly rivalry, unforgettable night</span>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 100,
            boxShadow: "inset 0 0 0 1.500px rgb(212,180,131)",
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
              color: "rgb(245,237,224)",
              flexShrink: 0,
            }}>Explore experiences →</span>
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
      <div data-section="cta" style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "var(--tan-ivory)",
        display: "flex",
        flexDirection: "column",
        gap: 40,
        padding: "100px 80px 100px 80px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div data-decorative style={{
          position: "absolute",
          left: 320,
          top: 255,
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
          }}>Your team is already working hard. Let's make sure they feel it back.</span>
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
          }}>One conversation to map your gifting year. No commitment, no pressure.</span>
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
          }}>Book the conversation →</span>
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
                lineHeight: "100%",
                color: "var(--tan-ivory)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Shop</span>
              <span style={{
                position: "relative",
                opacity: 0.7,
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 13,
                lineHeight: "100%",
                color: "var(--tan-ivory)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Best Sellers</span>
              <span style={{
                position: "relative",
                opacity: 0.7,
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 13,
                lineHeight: "100%",
                color: "var(--tan-ivory)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Create Custom</span>
              <span style={{
                position: "relative",
                opacity: 0.7,
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 13,
                lineHeight: "100%",
                color: "var(--tan-ivory)",
                flexShrink: 0,
                alignSelf: "stretch",
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
                lineHeight: "100%",
                color: "var(--tan-ivory)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Company</span>
              <span style={{
                position: "relative",
                opacity: 0.7,
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 13,
                lineHeight: "100%",
                color: "var(--tan-ivory)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>About Us</span>
              <span style={{
                position: "relative",
                opacity: 0.7,
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 13,
                lineHeight: "100%",
                color: "var(--tan-ivory)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Sustainability</span>
              <span style={{
                position: "relative",
                opacity: 0.7,
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 13,
                lineHeight: "100%",
                color: "var(--tan-ivory)",
                flexShrink: 0,
                alignSelf: "stretch",
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
                lineHeight: "100%",
                color: "var(--tan-ivory)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Support</span>
              <span style={{
                position: "relative",
                opacity: 0.7,
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 13,
                lineHeight: "100%",
                color: "var(--tan-ivory)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Track Shipment</span>
              <span style={{
                position: "relative",
                opacity: 0.7,
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 13,
                lineHeight: "100%",
                color: "var(--tan-ivory)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>FAQ &amp; Returns</span>
              <span style={{
                position: "relative",
                opacity: 0.7,
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 13,
                lineHeight: "100%",
                color: "var(--tan-ivory)",
                flexShrink: 0,
                alignSelf: "stretch",
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
export default CorporateGiftingPage;
