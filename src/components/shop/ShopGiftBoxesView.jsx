import { useNavigate } from 'react-router-dom';
import { NavBar3 } from './NavBar3.jsx';
import { PromoBanner } from './PromoBanner.jsx';
import { WrappDLogo } from './WrappDLogo.jsx';

// figma node: 88:1866 shop-gift-boxes-view
export function ShopGiftBoxesView(_p = {}) {
  const props = _p;
  const navigate = useNavigate();
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
      <div style={{
        position: "relative",
        backgroundColor: "var(--tan-ivory)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div data-section="hero" style={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(180deg, rgb(245,237,224) 0.00%, rgb(248,248,246) 100.00%)",
          display: "flex",
          flexDirection: "column",
          gap: 36,
          padding: "80px 80px 80px 80px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div data-text-block style={{
            position: "relative",
            width: 800,
            display: "flex",
            flexDirection: "column",
            gap: 20,
            alignItems: "center",
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
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 14,
                height: 14,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 12,
                  height: 12,
                  color: "rgb(184,87,106)",
                }}>
                  <path d={"M 11.299 0.001 C 11.299 -0.275 11.075 -0.499 10.799 -0.499 C 10.523 -0.499 10.299 -0.275 10.299 0.001 L 10.799 0.001 L 11.299 0.001 Z M 10.299 2.401 C 10.299 2.677 10.523 2.901 10.799 2.901 C 11.075 2.901 11.299 2.677 11.299 2.401 L 10.799 2.401 L 10.299 2.401 Z M 11.999 1.701 C 12.275 1.701 12.499 1.477 12.499 1.201 C 12.499 0.925 12.275 0.701 11.999 0.701 L 11.999 1.201 L 11.999 1.701 Z M 9.599 0.701 C 9.323 0.701 9.099 0.925 9.099 1.201 C 9.099 1.477 9.323 1.701 9.599 1.701 L 9.599 1.201 L 9.599 0.701 Z M 10.799 0.001 L 10.299 0.001 L 10.299 1.201 L 10.799 1.201 L 11.299 1.201 L 11.299 0.001 L 10.799 0.001 Z M 10.799 1.201 L 10.299 1.201 L 10.299 2.401 L 10.799 2.401 L 11.299 2.401 L 11.299 1.201 L 10.799 1.201 Z M 11.999 1.201 L 11.999 0.701 L 10.799 0.701 L 10.799 1.201 L 10.799 1.701 L 11.999 1.701 L 11.999 1.201 Z M 10.799 1.201 L 10.799 0.701 L 9.599 0.701 L 9.599 1.201 L 9.599 1.701 L 10.799 1.701 L 10.799 1.201 Z M 5.41 0.49 L 6.393 0.676 L 6.393 0.673 L 5.41 0.49 Z M 5.617 0.138 L 6.256 0.908 L 6.256 0.908 L 5.617 0.138 Z M 6.383 0.138 L 5.744 0.908 L 5.744 0.908 L 6.383 0.138 Z M 6.59 0.49 L 5.607 0.673 L 5.607 0.676 L 6.59 0.49 Z M 7.22 3.824 L 8.203 3.638 L 8.203 3.638 L 7.22 3.824 Z M 8.176 4.78 L 8.362 3.797 L 8.362 3.797 L 8.176 4.78 Z M 11.51 5.41 L 11.324 6.393 L 11.327 6.393 L 11.51 5.41 Z M 11.862 6.383 L 12.631 7.022 L 12.631 7.022 L 11.862 6.383 Z M 11.51 6.59 L 11.327 5.607 L 11.324 5.607 L 11.51 6.59 Z M 8.176 7.22 L 8.362 8.203 L 8.362 8.203 L 8.176 7.22 Z M 7.22 8.176 L 8.203 8.362 L 8.203 8.362 L 7.22 8.176 Z M 6.59 11.51 L 5.607 11.324 L 5.607 11.327 L 6.59 11.51 Z M 5.41 11.51 L 6.393 11.327 L 6.393 11.324 L 5.41 11.51 Z M 4.78 8.176 L 3.797 8.362 L 3.797 8.362 L 4.78 8.176 Z M 3.824 7.22 L 3.638 8.203 L 3.638 8.203 L 3.824 7.22 Z M 0.49 6.59 L 0.676 5.607 L 0.673 5.607 L 0.49 6.59 Z M 0.138 6.383 L -0.631 7.022 L -0.631 7.022 L 0.138 6.383 Z M 0.138 5.617 L 0.908 6.256 L 0.908 6.256 L 0.138 5.617 Z M 0.49 5.41 L 0.673 6.393 L 0.676 6.393 L 0.49 5.41 Z M 3.824 4.78 L 3.638 3.797 L 3.638 3.797 L 3.824 4.78 Z M 4.78 3.824 L 3.797 3.638 L 3.797 3.638 L 4.78 3.824 Z M 5.41 0.49 L 6.393 0.673 C 6.376 0.765 6.327 0.848 6.256 0.908 L 5.617 0.138 L 4.978 -0.631 C 4.691 -0.392 4.496 -0.061 4.427 0.306 L 5.41 0.49 Z M 5.617 0.138 L 6.256 0.908 C 6.184 0.967 6.093 1 6 1 L 6 0 L 6 -1 C 5.627 -1 5.265 -0.869 4.978 -0.631 L 5.617 0.138 Z M 6 0 L 6 1 C 5.907 1 5.816 0.967 5.744 0.908 L 6.383 0.138 L 7.022 -0.631 C 6.735 -0.869 6.373 -1 6 -1 L 6 0 Z M 6.383 0.138 L 5.744 0.908 C 5.673 0.848 5.624 0.765 5.607 0.673 L 6.59 0.49 L 7.573 0.306 C 7.504 -0.061 7.309 -0.392 7.022 -0.631 L 6.383 0.138 Z M 6.59 0.49 L 5.607 0.676 L 6.238 4.01 L 7.22 3.824 L 8.203 3.638 L 7.572 0.304 L 6.59 0.49 Z M 7.22 3.824 L 6.237 4.009 C 6.32 4.444 6.531 4.844 6.844 5.156 L 7.551 4.449 L 8.258 3.742 C 8.229 3.714 8.21 3.678 8.203 3.638 L 7.22 3.824 Z M 7.551 4.449 L 6.844 5.156 C 7.156 5.469 7.556 5.68 7.991 5.763 L 8.176 4.78 L 8.362 3.797 C 8.322 3.79 8.286 3.771 8.258 3.742 L 7.551 4.449 Z M 8.176 4.78 L 7.99 5.762 L 11.324 6.393 L 11.51 5.41 L 11.696 4.428 L 8.362 3.797 L 8.176 4.78 Z M 11.51 5.41 L 11.327 6.393 C 11.235 6.376 11.152 6.327 11.092 6.256 L 11.862 5.617 L 12.631 4.978 C 12.392 4.691 12.061 4.496 11.694 4.427 L 11.51 5.41 Z M 11.862 5.617 L 11.092 6.256 C 11.033 6.184 11 6.093 11 6 L 12 6 L 13 6 C 13 5.627 12.869 5.265 12.631 4.978 L 11.862 5.617 Z M 12 6 L 11 6 C 11 5.907 11.033 5.816 11.092 5.744 L 11.862 6.383 L 12.631 7.022 C 12.869 6.735 13 6.373 13 6 L 12 6 Z M 11.862 6.383 L 11.092 5.744 C 11.152 5.673 11.235 5.624 11.327 5.607 L 11.51 6.59 L 11.694 7.573 C 12.061 7.504 12.392 7.309 12.631 7.022 L 11.862 6.383 Z M 11.51 6.59 L 11.324 5.607 L 7.99 6.238 L 8.176 7.22 L 8.362 8.203 L 11.696 7.572 L 11.51 6.59 Z M 8.176 7.22 L 7.991 6.237 C 7.556 6.32 7.156 6.531 6.844 6.844 L 7.551 7.551 L 8.258 8.258 C 8.286 8.229 8.322 8.21 8.362 8.203 L 8.176 7.22 Z M 7.551 7.551 L 6.844 6.844 C 6.531 7.156 6.32 7.556 6.237 7.991 L 7.22 8.176 L 8.203 8.362 C 8.21 8.322 8.229 8.286 8.258 8.258 L 7.551 7.551 Z M 7.22 8.176 L 6.238 7.99 L 5.607 11.324 L 6.59 11.51 L 7.572 11.696 L 8.203 8.362 L 7.22 8.176 Z M 6.59 11.51 L 5.607 11.327 C 5.624 11.235 5.673 11.152 5.744 11.092 L 6.383 11.862 L 7.022 12.631 C 7.309 12.392 7.504 12.061 7.573 11.694 L 6.59 11.51 Z M 6.383 11.862 L 5.744 11.092 C 5.816 11.033 5.907 11 6 11 L 6 12 L 6 13 C 6.373 13 6.735 12.869 7.022 12.631 L 6.383 11.862 Z M 6 12 L 6 11 C 6.093 11 6.184 11.033 6.256 11.092 L 5.617 11.862 L 4.978 12.631 C 5.265 12.869 5.627 13 6 13 L 6 12 Z M 5.617 11.862 L 6.256 11.092 C 6.327 11.152 6.376 11.235 6.393 11.327 L 5.41 11.51 L 4.427 11.694 C 4.496 12.061 4.691 12.392 4.978 12.631 L 5.617 11.862 Z M 5.41 11.51 L 6.393 11.324 L 5.762 7.99 L 4.78 8.176 L 3.797 8.362 L 4.428 11.696 L 5.41 11.51 Z M 4.78 8.176 L 5.763 7.991 C 5.68 7.556 5.469 7.156 5.156 6.844 L 4.449 7.551 L 3.742 8.258 C 3.771 8.286 3.79 8.322 3.797 8.362 L 4.78 8.176 Z M 4.449 7.551 L 5.156 6.844 C 4.844 6.531 4.444 6.32 4.009 6.237 L 3.824 7.22 L 3.638 8.203 C 3.678 8.21 3.714 8.229 3.742 8.258 L 4.449 7.551 Z M 3.824 7.22 L 4.01 6.238 L 0.676 5.607 L 0.49 6.59 L 0.304 7.572 L 3.638 8.203 L 3.824 7.22 Z M 0.49 6.59 L 0.673 5.607 C 0.765 5.624 0.848 5.673 0.908 5.744 L 0.138 6.383 L -0.631 7.022 C -0.392 7.309 -0.061 7.504 0.306 7.573 L 0.49 6.59 Z M 0.138 6.383 L 0.908 5.744 C 0.967 5.816 1 5.907 1 6 L 0 6 L -1 6 C -1 6.373 -0.869 6.735 -0.631 7.022 L 0.138 6.383 Z M 0 6 L 1 6 C 1 6.093 0.967 6.184 0.908 6.256 L 0.138 5.617 L -0.631 4.978 C -0.869 5.265 -1 5.627 -1 6 L 0 6 Z M 0.138 5.617 L 0.908 6.256 C 0.848 6.327 0.765 6.376 0.673 6.393 L 0.49 5.41 L 0.306 4.427 C -0.061 4.496 -0.392 4.691 -0.631 4.978 L 0.138 5.617 Z M 0.49 5.41 L 0.676 6.393 L 4.01 5.762 L 3.824 4.78 L 3.638 3.797 L 0.304 4.428 L 0.49 5.41 Z M 3.824 4.78 L 4.009 5.763 C 4.444 5.68 4.844 5.469 5.156 5.156 L 4.449 4.449 L 3.742 3.742 C 3.714 3.771 3.678 3.79 3.638 3.797 L 3.824 4.78 Z M 4.449 4.449 L 5.156 5.156 C 5.469 4.844 5.68 4.444 5.763 4.009 L 4.78 3.824 L 3.797 3.638 C 3.79 3.678 3.771 3.714 3.742 3.742 L 4.449 4.449 Z M 4.78 3.824 L 5.762 4.01 L 6.393 0.676 L 5.41 0.49 L 4.428 0.304 L 3.797 3.638 L 4.78 3.824 Z M 2.401 10.799 L 1.401 10.799 C 1.401 10.909 1.311 10.998 1.201 10.998 L 1.201 11.998 L 1.201 12.998 C 2.416 12.998 3.401 12.013 3.401 10.799 L 2.401 10.799 Z M 1.201 11.998 L 1.201 10.998 C 1.091 10.998 1.001 10.909 1.001 10.799 L 0.001 10.799 L -0.999 10.799 C -0.999 12.013 -0.014 12.998 1.201 12.998 L 1.201 11.998 Z M 0.001 10.799 L 1.001 10.799 C 1.001 10.688 1.091 10.599 1.201 10.599 L 1.201 9.599 L 1.201 8.599 C -0.014 8.599 -0.999 9.584 -0.999 10.799 L 0.001 10.799 Z M 1.201 9.599 L 1.201 10.599 C 1.311 10.599 1.401 10.688 1.401 10.799 L 2.401 10.799 L 3.401 10.799 C 3.401 9.584 2.416 8.599 1.201 8.599 L 1.201 9.599 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 12,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "1.500px",
                color: "rgb(184,87,106)",
                flexShrink: 0,
              }}>THE SHOP</span>
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
            }}>Every box tells a story. Find theirs.</span>
            <span data-text-block style={{
              position: "relative",
              width: 640,
              fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 18,
              textAlign: "center",
              lineHeight: 1.5,
              color: "rgb(106,30,46)",
              flexShrink: 0,
            }}>Ready-made gift boxes, individual gifts, and little extras — shop them on their own, or build them into something bigger.</span>
          </div>
          <div style={{
            position: "relative",
            borderRadius: 100,
            backgroundColor: "rgb(245,237,224)",
            boxShadow: "inset 0 0 0 1px rgb(232,212,180)",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "6px 6px 6px 6px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              borderRadius: 100,
              backgroundColor: "rgb(106,30,46)",
              display: "flex",
              flexDirection: "row",
              padding: "10px 24px 10px 24px",
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
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
                flexShrink: 0,
              }}>Gift boxes</span>
            </div>
            <div style={{
              position: "relative",
              borderRadius: 100,
              backgroundColor: "rgba(0,0,0,0)",
              display: "flex",
              flexDirection: "row",
              padding: "10px 24px 10px 24px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(74,15,28)",
                flexShrink: 0,
              }}>Shop items</span>
            </div>
          </div>
        </div>
        <div data-filter-bar style={{
          position: "relative",
          borderTop: "1px solid rgb(229,231,235)",
          borderRight: "1px solid rgb(229,231,235)",
          borderBottom: "1px solid rgb(229,231,235)",
          borderLeft: "1px solid rgb(229,231,235)",
          display: "flex",
          flexDirection: "row",
          padding: "32px 80px 32px 80px",
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
            gap: 12,
            alignItems: "center",
            flexWrap: "wrap",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              borderRadius: 100,
              backgroundColor: "rgb(74,15,28)",
              boxShadow: "inset 0 0 0 1px rgb(232,212,180)",
              display: "flex",
              flexDirection: "row",
              padding: "10px 20px 10px 20px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              cursor: "pointer",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 13,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(255,255,255)",
                flexShrink: 0,
              }}>All boxes</span>
            </div>
            <div style={{
              position: "relative",
              borderRadius: 100,
              backgroundColor: "rgb(245,237,224)",
              boxShadow: "inset 0 0 0 1px rgb(232,212,180)",
              display: "flex",
              flexDirection: "row",
              padding: "10px 20px 10px 20px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              cursor: "pointer",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 13,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(74,15,28)",
                flexShrink: 0,
              }}>Birthdays</span>
            </div>
            <div style={{
              position: "relative",
              borderRadius: 100,
              backgroundColor: "rgb(245,237,224)",
              boxShadow: "inset 0 0 0 1px rgb(232,212,180)",
              display: "flex",
              flexDirection: "row",
              padding: "10px 20px 10px 20px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              cursor: "pointer",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 13,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(74,15,28)",
                flexShrink: 0,
              }}>Love and anniversaries</span>
            </div>
            <div style={{
              position: "relative",
              borderRadius: 100,
              backgroundColor: "rgb(245,237,224)",
              boxShadow: "inset 0 0 0 1px rgb(232,212,180)",
              display: "flex",
              flexDirection: "row",
              padding: "10px 20px 10px 20px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              cursor: "pointer",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 13,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(74,15,28)",
                flexShrink: 0,
              }}>New babies</span>
            </div>
            <div style={{
              position: "relative",
              borderRadius: 100,
              backgroundColor: "rgb(245,237,224)",
              boxShadow: "inset 0 0 0 1px rgb(232,212,180)",
              display: "flex",
              flexDirection: "row",
              padding: "10px 20px 10px 20px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              cursor: "pointer",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 13,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(74,15,28)",
                flexShrink: 0,
              }}>Congratulations</span>
            </div>
            <div style={{
              position: "relative",
              borderRadius: 100,
              backgroundColor: "rgb(245,237,224)",
              boxShadow: "inset 0 0 0 1px rgb(232,212,180)",
              display: "flex",
              flexDirection: "row",
              padding: "10px 20px 10px 20px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              cursor: "pointer",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 13,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(74,15,28)",
                flexShrink: 0,
              }}>Self-care</span>
            </div>
            <div style={{
              position: "relative",
              borderRadius: 100,
              backgroundColor: "rgb(245,237,224)",
              boxShadow: "inset 0 0 0 1px rgb(232,212,180)",
              display: "flex",
              flexDirection: "row",
              padding: "10px 20px 10px 20px",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              cursor: "pointer",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 13,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(74,15,28)",
                flexShrink: 0,
              }}>Thank you</span>
            </div>
          </div>
        </div>
        <div data-section="content" style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 56,
          padding: "64px 80px 80px 80px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div data-grid="products" style={{
            position: "relative",
            display: "grid",
            alignItems: "start",
            justifyItems: "center",
            gridTemplateRows: "auto auto",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "40px 40px",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 400,
              overflow: "hidden",
              borderRadius: 24,
              backgroundColor: "rgb(255,255,255)",
              boxShadow: "inset 0 0 0 1px rgb(232,212,180), 0px 8px 24px 0px rgba(106,30,46,0.0392)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              gridRow: "1",
              gridColumn: "1",
            }}>
              <div className="fig-asset-5681e2740ae94cfd" style={{
                position: "relative",
                height: 280,
                flexShrink: 0,
                alignSelf: "stretch",
              }} />
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                padding: "0px 24px 28px 24px",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexGrow: 1,
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
                    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 600,
                    fontSize: 24,
                    lineHeight: "100%",
                    color: "rgb(74,15,28)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>The Birthday Box</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: 1.5,
                    color: "rgb(106,30,46)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>Their day, done properly — treats, a little luxury, and a card in your words.</span>
                </div>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  padding: "16px 0px 16px 0px",
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
                    fontWeight: 700,
                    fontSize: 16,
                    whiteSpace: "nowrap",
                    lineHeight: "100%",
                    color: "rgb(74,15,28)",
                    flexShrink: 0,
                  }}>From ₦45,000</span>
                  <div onClick={(e) => { e.stopPropagation(); navigate('/product/birthday-box'); }} style={{
                    position: "relative",
                    borderRadius: 100,
                    backgroundColor: "rgb(74,15,28)",
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    padding: "10px 20px 10px 20px",
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
                      fontSize: 13,
                      whiteSpace: "nowrap",
                      lineHeight: "100%",
                      color: "rgb(255,255,255)",
                      flexShrink: 0,
                    }}>Select box</span>
                    <div style={{
                      position: "relative",
                      width: 14,
                      height: 14,
                      overflow: "hidden",
                      flexShrink: 0,
                    }}>
                      <svg width={8.168} height={8.168} viewBox="0 0 8.168 8.168" fill="none" style={{
                        position: "absolute",
                        left: 2.916,
                        top: 2.916,
                        width: 8.168,
                        height: 8.168,
                        color: "rgb(255,255,255)",
                      }}>
                        <path d={"M 0 3.084 C -0.552 3.084 -1 3.532 -1 4.084 C -1 4.636 -0.552 5.084 0 5.084 L 0 4.084 L 0 3.084 Z M 8.168 4.084 L 8.875 4.791 L 9.582 4.084 L 8.875 3.377 L 8.168 4.084 Z M 4.791 -0.707 C 4.4 -1.098 3.767 -1.098 3.377 -0.707 C 2.986 -0.317 2.986 0.317 3.377 0.707 L 4.084 0 L 4.791 -0.707 Z M 3.377 7.46 C 2.986 7.851 2.986 8.484 3.377 8.875 C 3.767 9.265 4.4 9.265 4.791 8.875 L 4.084 8.168 L 3.377 7.46 Z M 0 4.084 L 0 5.084 L 8.168 5.084 L 8.168 4.084 L 8.168 3.084 L 0 3.084 L 0 4.084 Z M 8.168 4.084 L 8.875 3.377 L 4.791 -0.707 L 4.084 0 L 3.377 0.707 L 7.46 4.791 L 8.168 4.084 Z M 8.168 4.084 L 7.46 3.377 L 3.377 7.46 L 4.084 8.168 L 4.791 8.875 L 8.875 4.791 L 8.168 4.084 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              position: "relative",
              width: 400,
              overflow: "hidden",
              borderRadius: 24,
              backgroundColor: "rgb(255,255,255)",
              boxShadow: "inset 0 0 0 1px rgb(232,212,180), 0px 8px 24px 0px rgba(106,30,46,0.0392)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              gridRow: "1",
              gridColumn: "2",
            }}>
              <div className="fig-asset-5d09f4fb58b554d0" style={{
                position: "relative",
                height: 280,
                flexShrink: 0,
                alignSelf: "stretch",
              }} />
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                padding: "0px 24px 28px 24px",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexGrow: 1,
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
                    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 600,
                    fontSize: 24,
                    lineHeight: "100%",
                    color: "rgb(74,15,28)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>The Love Box</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: 1.5,
                    color: "rgb(106,30,46)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>For anniversaries, weddings, or simply saying it out loud.</span>
                </div>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  padding: "16px 0px 16px 0px",
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
                    fontWeight: 700,
                    fontSize: 16,
                    whiteSpace: "nowrap",
                    lineHeight: "100%",
                    color: "rgb(74,15,28)",
                    flexShrink: 0,
                  }}>From ₦55,000</span>
                  <div onClick={(e) => { e.stopPropagation(); navigate('/product/love-box'); }} style={{
                    position: "relative",
                    borderRadius: 100,
                    backgroundColor: "rgb(74,15,28)",
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    padding: "10px 20px 10px 20px",
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
                      fontSize: 13,
                      whiteSpace: "nowrap",
                      lineHeight: "100%",
                      color: "rgb(255,255,255)",
                      flexShrink: 0,
                    }}>Select box</span>
                    <div style={{
                      position: "relative",
                      width: 14,
                      height: 14,
                      overflow: "hidden",
                      flexShrink: 0,
                    }}>
                      <svg width={8.168} height={8.168} viewBox="0 0 8.168 8.168" fill="none" style={{
                        position: "absolute",
                        left: 2.916,
                        top: 2.916,
                        width: 8.168,
                        height: 8.168,
                        color: "rgb(255,255,255)",
                      }}>
                        <path d={"M 0 3.084 C -0.552 3.084 -1 3.532 -1 4.084 C -1 4.636 -0.552 5.084 0 5.084 L 0 4.084 L 0 3.084 Z M 8.168 4.084 L 8.875 4.791 L 9.582 4.084 L 8.875 3.377 L 8.168 4.084 Z M 4.791 -0.707 C 4.4 -1.098 3.767 -1.098 3.377 -0.707 C 2.986 -0.317 2.986 0.317 3.377 0.707 L 4.084 0 L 4.791 -0.707 Z M 3.377 7.46 C 2.986 7.851 2.986 8.484 3.377 8.875 C 3.767 9.265 4.4 9.265 4.791 8.875 L 4.084 8.168 L 3.377 7.46 Z M 0 4.084 L 0 5.084 L 8.168 5.084 L 8.168 4.084 L 8.168 3.084 L 0 3.084 L 0 4.084 Z M 8.168 4.084 L 8.875 3.377 L 4.791 -0.707 L 4.084 0 L 3.377 0.707 L 7.46 4.791 L 8.168 4.084 Z M 8.168 4.084 L 7.46 3.377 L 3.377 7.46 L 4.084 8.168 L 4.791 8.875 L 8.875 4.791 L 8.168 4.084 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              position: "relative",
              width: 400,
              overflow: "hidden",
              borderRadius: 24,
              backgroundColor: "rgb(255,255,255)",
              boxShadow: "inset 0 0 0 1px rgb(232,212,180), 0px 8px 24px 0px rgba(106,30,46,0.0392)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              gridRow: "1",
              gridColumn: "3",
            }}>
              <div className="fig-asset-aa9d492560b95bba" style={{
                position: "relative",
                height: 280,
                flexShrink: 0,
                alignSelf: "stretch",
              }} />
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                padding: "0px 24px 28px 24px",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexGrow: 1,
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
                    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 600,
                    fontSize: 24,
                    lineHeight: "100%",
                    color: "rgb(74,15,28)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>Welcome, Little One</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: 1.5,
                    color: "rgb(106,30,46)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>For the new baby and the amazing person who just had them.</span>
                </div>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  padding: "16px 0px 16px 0px",
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
                    fontWeight: 700,
                    fontSize: 16,
                    whiteSpace: "nowrap",
                    lineHeight: "100%",
                    color: "rgb(74,15,28)",
                    flexShrink: 0,
                  }}>From ₦50,000</span>
                  <div onClick={(e) => { e.stopPropagation(); navigate('/product/welcome-little-one'); }} style={{
                    position: "relative",
                    borderRadius: 100,
                    backgroundColor: "rgb(74,15,28)",
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    padding: "10px 20px 10px 20px",
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
                      fontSize: 13,
                      whiteSpace: "nowrap",
                      lineHeight: "100%",
                      color: "rgb(255,255,255)",
                      flexShrink: 0,
                    }}>Select box</span>
                    <div style={{
                      position: "relative",
                      width: 14,
                      height: 14,
                      overflow: "hidden",
                      flexShrink: 0,
                    }}>
                      <svg width={8.168} height={8.168} viewBox="0 0 8.168 8.168" fill="none" style={{
                        position: "absolute",
                        left: 2.916,
                        top: 2.916,
                        width: 8.168,
                        height: 8.168,
                        color: "rgb(255,255,255)",
                      }}>
                        <path d={"M 0 3.084 C -0.552 3.084 -1 3.532 -1 4.084 C -1 4.636 -0.552 5.084 0 5.084 L 0 4.084 L 0 3.084 Z M 8.168 4.084 L 8.875 4.791 L 9.582 4.084 L 8.875 3.377 L 8.168 4.084 Z M 4.791 -0.707 C 4.4 -1.098 3.767 -1.098 3.377 -0.707 C 2.986 -0.317 2.986 0.317 3.377 0.707 L 4.084 0 L 4.791 -0.707 Z M 3.377 7.46 C 2.986 7.851 2.986 8.484 3.377 8.875 C 3.767 9.265 4.4 9.265 4.791 8.875 L 4.084 8.168 L 3.377 7.46 Z M 0 4.084 L 0 5.084 L 8.168 5.084 L 8.168 4.084 L 8.168 3.084 L 0 3.084 L 0 4.084 Z M 8.168 4.084 L 8.875 3.377 L 4.791 -0.707 L 4.084 0 L 3.377 0.707 L 7.46 4.791 L 8.168 4.084 Z M 8.168 4.084 L 7.46 3.377 L 3.377 7.46 L 4.084 8.168 L 4.791 8.875 L 8.875 4.791 L 8.168 4.084 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              position: "relative",
              width: 400,
              overflow: "hidden",
              borderRadius: 24,
              backgroundColor: "rgb(255,255,255)",
              boxShadow: "inset 0 0 0 1px rgb(232,212,180), 0px 8px 24px 0px rgba(106,30,46,0.0392)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              gridRow: "2",
              gridColumn: "1",
            }}>
              <div className="fig-asset-beed4354d2ac7d00" style={{
                position: "relative",
                height: 280,
                flexShrink: 0,
                alignSelf: "stretch",
              }} />
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                padding: "0px 24px 28px 24px",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexGrow: 1,
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
                    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 600,
                    fontSize: 24,
                    lineHeight: "100%",
                    color: "rgb(74,15,28)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>The Boss Move</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: 1.5,
                    color: "rgb(106,30,46)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>New job, promotion, big win — celebrate the moves they're making.</span>
                </div>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  padding: "16px 0px 16px 0px",
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
                    fontWeight: 700,
                    fontSize: 16,
                    whiteSpace: "nowrap",
                    lineHeight: "100%",
                    color: "rgb(74,15,28)",
                    flexShrink: 0,
                  }}>From ₦48,000</span>
                  <div onClick={(e) => { e.stopPropagation(); navigate('/product/boss-move'); }} style={{
                    position: "relative",
                    borderRadius: 100,
                    backgroundColor: "rgb(74,15,28)",
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    padding: "10px 20px 10px 20px",
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
                      fontSize: 13,
                      whiteSpace: "nowrap",
                      lineHeight: "100%",
                      color: "rgb(255,255,255)",
                      flexShrink: 0,
                    }}>Select box</span>
                    <div style={{
                      position: "relative",
                      width: 14,
                      height: 14,
                      overflow: "hidden",
                      flexShrink: 0,
                    }}>
                      <svg width={8.168} height={8.168} viewBox="0 0 8.168 8.168" fill="none" style={{
                        position: "absolute",
                        left: 2.916,
                        top: 2.916,
                        width: 8.168,
                        height: 8.168,
                        color: "rgb(255,255,255)",
                      }}>
                        <path d={"M 0 3.084 C -0.552 3.084 -1 3.532 -1 4.084 C -1 4.636 -0.552 5.084 0 5.084 L 0 4.084 L 0 3.084 Z M 8.168 4.084 L 8.875 4.791 L 9.582 4.084 L 8.875 3.377 L 8.168 4.084 Z M 4.791 -0.707 C 4.4 -1.098 3.767 -1.098 3.377 -0.707 C 2.986 -0.317 2.986 0.317 3.377 0.707 L 4.084 0 L 4.791 -0.707 Z M 3.377 7.46 C 2.986 7.851 2.986 8.484 3.377 8.875 C 3.767 9.265 4.4 9.265 4.791 8.875 L 4.084 8.168 L 3.377 7.46 Z M 0 4.084 L 0 5.084 L 8.168 5.084 L 8.168 4.084 L 8.168 3.084 L 0 3.084 L 0 4.084 Z M 8.168 4.084 L 8.875 3.377 L 4.791 -0.707 L 4.084 0 L 3.377 0.707 L 7.46 4.791 L 8.168 4.084 Z M 8.168 4.084 L 7.46 3.377 L 3.377 7.46 L 4.084 8.168 L 4.791 8.875 L 8.875 4.791 L 8.168 4.084 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              position: "relative",
              width: 400,
              overflow: "hidden",
              borderRadius: 24,
              backgroundColor: "rgb(255,255,255)",
              boxShadow: "inset 0 0 0 1px rgb(232,212,180), 0px 8px 24px 0px rgba(106,30,46,0.0392)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              gridRow: "2",
              gridColumn: "2",
            }}>
              <div className="fig-asset-1c885b0bd381cc25" style={{
                position: "relative",
                height: 280,
                flexShrink: 0,
                alignSelf: "stretch",
              }} />
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                padding: "0px 24px 28px 24px",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexGrow: 1,
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
                    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 600,
                    fontSize: 24,
                    lineHeight: "100%",
                    color: "rgb(74,15,28)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>The Soft Life Box</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: 1.5,
                    color: "rgb(106,30,46)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>Rest, restore, repeat — for anyone who's earned some ease. Including you.</span>
                </div>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  padding: "16px 0px 16px 0px",
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
                    fontWeight: 700,
                    fontSize: 16,
                    whiteSpace: "nowrap",
                    lineHeight: "100%",
                    color: "rgb(74,15,28)",
                    flexShrink: 0,
                  }}>From ₦42,000</span>
                  <div onClick={(e) => { e.stopPropagation(); navigate('/product/soft-life-box'); }} style={{
                    position: "relative",
                    borderRadius: 100,
                    backgroundColor: "rgb(74,15,28)",
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    padding: "10px 20px 10px 20px",
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
                      fontSize: 13,
                      whiteSpace: "nowrap",
                      lineHeight: "100%",
                      color: "rgb(255,255,255)",
                      flexShrink: 0,
                    }}>Select box</span>
                    <div style={{
                      position: "relative",
                      width: 14,
                      height: 14,
                      overflow: "hidden",
                      flexShrink: 0,
                    }}>
                      <svg width={8.168} height={8.168} viewBox="0 0 8.168 8.168" fill="none" style={{
                        position: "absolute",
                        left: 2.916,
                        top: 2.916,
                        width: 8.168,
                        height: 8.168,
                        color: "rgb(255,255,255)",
                      }}>
                        <path d={"M 0 3.084 C -0.552 3.084 -1 3.532 -1 4.084 C -1 4.636 -0.552 5.084 0 5.084 L 0 4.084 L 0 3.084 Z M 8.168 4.084 L 8.875 4.791 L 9.582 4.084 L 8.875 3.377 L 8.168 4.084 Z M 4.791 -0.707 C 4.4 -1.098 3.767 -1.098 3.377 -0.707 C 2.986 -0.317 2.986 0.317 3.377 0.707 L 4.084 0 L 4.791 -0.707 Z M 3.377 7.46 C 2.986 7.851 2.986 8.484 3.377 8.875 C 3.767 9.265 4.4 9.265 4.791 8.875 L 4.084 8.168 L 3.377 7.46 Z M 0 4.084 L 0 5.084 L 8.168 5.084 L 8.168 4.084 L 8.168 3.084 L 0 3.084 L 0 4.084 Z M 8.168 4.084 L 8.875 3.377 L 4.791 -0.707 L 4.084 0 L 3.377 0.707 L 7.46 4.791 L 8.168 4.084 Z M 8.168 4.084 L 7.46 3.377 L 3.377 7.46 L 4.084 8.168 L 4.791 8.875 L 8.875 4.791 L 8.168 4.084 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              position: "relative",
              width: 400,
              overflow: "hidden",
              borderRadius: 24,
              backgroundColor: "rgb(255,255,255)",
              boxShadow: "inset 0 0 0 1px rgb(232,212,180), 0px 8px 24px 0px rgba(106,30,46,0.0392)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              gridRow: "2",
              gridColumn: "3",
            }}>
              <div className="fig-asset-e2ee7586214153de" style={{
                position: "relative",
                height: 280,
                flexShrink: 0,
                alignSelf: "stretch",
              }} />
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                padding: "0px 24px 28px 24px",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexGrow: 1,
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
                    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 600,
                    fontSize: 24,
                    lineHeight: "100%",
                    color: "rgb(74,15,28)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>The Thank You Box</span>
                  <span style={{
                    position: "relative",
                    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: 1.5,
                    color: "rgb(106,30,46)",
                    flexShrink: 0,
                    alignSelf: "stretch",
                  }}>Because some kindness deserves more than a text message.</span>
                </div>
                <div style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  padding: "16px 0px 16px 0px",
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
                    fontWeight: 700,
                    fontSize: 16,
                    whiteSpace: "nowrap",
                    lineHeight: "100%",
                    color: "rgb(74,15,28)",
                    flexShrink: 0,
                  }}>From ₦40,000</span>
                  <div onClick={(e) => { e.stopPropagation(); navigate('/product/thank-you-box'); }} style={{
                    position: "relative",
                    borderRadius: 100,
                    backgroundColor: "rgb(74,15,28)",
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    padding: "10px 20px 10px 20px",
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
                      fontSize: 13,
                      whiteSpace: "nowrap",
                      lineHeight: "100%",
                      color: "rgb(255,255,255)",
                      flexShrink: 0,
                    }}>Select box</span>
                    <div style={{
                      position: "relative",
                      width: 14,
                      height: 14,
                      overflow: "hidden",
                      flexShrink: 0,
                    }}>
                      <svg width={8.168} height={8.168} viewBox="0 0 8.168 8.168" fill="none" style={{
                        position: "absolute",
                        left: 2.916,
                        top: 2.916,
                        width: 8.168,
                        height: 8.168,
                        color: "rgb(255,255,255)",
                      }}>
                        <path d={"M 0 3.084 C -0.552 3.084 -1 3.532 -1 4.084 C -1 4.636 -0.552 5.084 0 5.084 L 0 4.084 L 0 3.084 Z M 8.168 4.084 L 8.875 4.791 L 9.582 4.084 L 8.875 3.377 L 8.168 4.084 Z M 4.791 -0.707 C 4.4 -1.098 3.767 -1.098 3.377 -0.707 C 2.986 -0.317 2.986 0.317 3.377 0.707 L 4.084 0 L 4.791 -0.707 Z M 3.377 7.46 C 2.986 7.851 2.986 8.484 3.377 8.875 C 3.767 9.265 4.4 9.265 4.791 8.875 L 4.084 8.168 L 3.377 7.46 Z M 0 4.084 L 0 5.084 L 8.168 5.084 L 8.168 4.084 L 8.168 3.084 L 0 3.084 L 0 4.084 Z M 8.168 4.084 L 8.875 3.377 L 4.791 -0.707 L 4.084 0 L 3.377 0.707 L 7.46 4.791 L 8.168 4.084 Z M 8.168 4.084 L 7.46 3.377 L 3.377 7.46 L 4.084 8.168 L 4.791 8.875 L 8.875 4.791 L 8.168 4.084 Z"} fill="currentColor" fillRule="nonzero" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span style={{
            position: "relative",
            display: "block",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 18,
            textAlign: "center",
            lineHeight: "100%",
            color: "rgb(106,30,46)",
            flexShrink: 0,
            alignSelf: "stretch",
            marginTop: 40,
          }}>Every box arrives beautifully wrapped, with your personal card included — always.</span>
        </div>
        <div data-section="content" style={{
          position: "relative",
          background: "linear-gradient(180deg, rgb(255,255,255) 0.00%, rgb(245,237,224) 100.00%)",
          display: "flex",
          flexDirection: "column",
          gap: 48,
          padding: "80px 80px 100px 80px",
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
            <span data-heading="section" style={{
              position: "relative",
              fontFamily: "Baskerville, ui-serif, Georgia, \"Times New Roman\", serif",
              fontWeight: 600,
              fontSize: 40,
              lineHeight: "100%",
              color: "rgb(74,15,28)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>The little extras</span>
            <span style={{
              position: "relative",
              fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              lineHeight: "100%",
              color: "rgb(106,30,46)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Add them to any box, or send one on its own. Small things, big feelings.</span>
          </div>
          <div data-grid="extras" style={{
            position: "relative",
            height: 231,
            display: "grid",
            gridTemplateRows: "auto",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
            gap: "20px 20px",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 196.667,
              height: 231,
              overflow: "hidden",
              borderRadius: 16,
              backgroundColor: "rgb(255,255,255)",
              boxShadow: "inset 0 0 0 1px rgb(232,212,180)",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              gridRow: "1",
              gridColumn: "1",
            }}>
              <div className="fig-asset-73fee857e09c02e8" style={{
                position: "relative",
                height: 160,
                flexShrink: 0,
                alignSelf: "stretch",
              }} />
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                padding: "0px 16px 18px 16px",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: "100%",
                  color: "rgb(74,15,28)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>Fresh flowers</span>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 13,
                  lineHeight: "100%",
                  color: "rgb(107,114,128)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>From ₦15,000</span>
              </div>
            </div>
            <div style={{
              position: "relative",
              width: 196.667,
              height: 231,
              overflow: "hidden",
              borderRadius: 16,
              backgroundColor: "rgb(255,255,255)",
              boxShadow: "inset 0 0 0 1px rgb(232,212,180)",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              gridRow: "1",
              gridColumn: "2",
            }}>
              <div className="fig-asset-e44af60f7d324af3" style={{
                position: "relative",
                height: 160,
                flexShrink: 0,
                alignSelf: "stretch",
              }} />
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                padding: "0px 16px 18px 16px",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: "100%",
                  color: "rgb(74,15,28)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>Scented candles</span>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 13,
                  lineHeight: "100%",
                  color: "rgb(107,114,128)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>From ₦12,000</span>
              </div>
            </div>
            <div style={{
              position: "relative",
              width: 196.667,
              height: 231,
              overflow: "hidden",
              borderRadius: 16,
              backgroundColor: "rgb(255,255,255)",
              boxShadow: "inset 0 0 0 1px rgb(232,212,180)",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              gridRow: "1",
              gridColumn: "3",
            }}>
              <div className="fig-asset-6e8a8b7c3801ea5f" style={{
                position: "relative",
                height: 160,
                flexShrink: 0,
                alignSelf: "stretch",
              }} />
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                padding: "0px 16px 18px 16px",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: "100%",
                  color: "rgb(74,15,28)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>Chocolates and treats</span>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 13,
                  lineHeight: "100%",
                  color: "rgb(107,114,128)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>From ₦10,000</span>
              </div>
            </div>
            <div style={{
              position: "relative",
              width: 196.667,
              height: 231,
              overflow: "hidden",
              borderRadius: 16,
              backgroundColor: "rgb(255,255,255)",
              boxShadow: "inset 0 0 0 1px rgb(232,212,180)",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              gridRow: "1",
              gridColumn: "4",
            }}>
              <div className="fig-asset-b5e25511b9829d80" style={{
                position: "relative",
                height: 160,
                flexShrink: 0,
                alignSelf: "stretch",
              }} />
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                padding: "0px 16px 18px 16px",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: "100%",
                  color: "rgb(74,15,28)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>Something bubbly</span>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 13,
                  lineHeight: "100%",
                  color: "rgb(107,114,128)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>From ₦18,000</span>
              </div>
            </div>
            <div style={{
              position: "relative",
              width: 196.667,
              height: 231,
              overflow: "hidden",
              borderRadius: 16,
              backgroundColor: "rgb(255,255,255)",
              boxShadow: "inset 0 0 0 1px rgb(232,212,180)",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              gridRow: "1",
              gridColumn: "5",
            }}>
              <div className="fig-asset-ecb91aeba791b47b" style={{
                position: "relative",
                height: 160,
                flexShrink: 0,
                alignSelf: "stretch",
              }} />
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                padding: "0px 16px 18px 16px",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: "100%",
                  color: "rgb(74,15,28)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>Balloons</span>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 13,
                  lineHeight: "100%",
                  color: "rgb(107,114,128)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>From ₦8,000</span>
              </div>
            </div>
            <div style={{
              position: "relative",
              width: 196.667,
              height: 231,
              overflow: "hidden",
              borderRadius: 16,
              backgroundColor: "rgb(255,255,255)",
              boxShadow: "inset 0 0 0 1px rgb(232,212,180)",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              gridRow: "1",
              gridColumn: "6",
            }}>
              <div className="fig-asset-b7b2ebe075268d51" style={{
                position: "relative",
                height: 160,
                flexShrink: 0,
                alignSelf: "stretch",
              }} />
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                padding: "0px 16px 18px 16px",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: "100%",
                  color: "rgb(74,15,28)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>Handwritten cards</span>
                <span style={{
                  position: "relative",
                  fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 13,
                  lineHeight: "100%",
                  color: "rgb(107,114,128)",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>From ₦5,000</span>
              </div>
            </div>
          </div>
        </div>
        <div data-trust-bar style={{
          position: "relative",
          backgroundColor: "rgb(245,237,224)",
          borderTop: "1px solid rgb(229,231,235)",
          borderRight: "1px solid rgb(229,231,235)",
          borderBottom: "1px solid rgb(229,231,235)",
          borderLeft: "1px solid rgb(229,231,235)",
          display: "flex",
          flexDirection: "row",
          padding: "64px 80px 64px 80px",
          justifyContent: "space-between",
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
            gap: 20,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 48,
              height: 48,
              borderRadius: 100,
              backgroundColor: "rgb(106,30,46)",
              display: "flex",
              flexDirection: "row",
              padding: "12px 12px 12px 12px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
                color: "rgb(212,180,131)",
              }}>
                <path d={"M 9 20 C 9 20.552 9.448 21 10 21 C 10.552 21 11 20.552 11 20 L 10 20 L 9 20 Z M 4.948 5.263 L 4.948 4.263 L 4.93 6.263 L 4.948 5.263 Z M 5 6.264 C 5.552 6.264 6 5.816 6 5.264 C 6 4.711 5.552 4.264 5 4.264 L 5 5.264 L 5 6.264 Z M 15.052 5.263 L 15.07 6.263 L 15.052 4.263 L 15.052 5.263 Z M 15 4.264 C 14.448 4.264 14 4.711 14 5.264 C 14 5.816 14.448 6.264 15 6.264 L 15 5.264 L 15 4.264 Z M 18.889 10.474 C 19.441 10.474 19.889 10.026 19.889 9.474 C 19.889 8.921 19.441 8.474 18.889 8.474 L 18.889 9.474 L 18.889 10.474 Z M 1.111 8.474 C 0.559 8.474 0.111 8.921 0.111 9.474 C 0.111 10.026 0.559 10.474 1.111 10.474 L 1.111 9.474 L 1.111 8.474 Z M 10 5.263 L 9 5.263 L 9 9.474 L 10 9.474 L 11 9.474 L 11 5.263 L 10 5.263 Z M 10 9.474 L 9 9.474 L 9 20 L 10 20 L 11 20 L 11 9.474 L 10 9.474 Z M 4.948 5.263 L 4.93 6.263 C 4.953 6.263 4.977 6.264 5 6.264 L 5 5.264 L 5 4.264 C 4.989 4.264 4.977 4.264 4.966 4.263 L 4.948 5.263 Z M 15.052 5.263 L 15.034 4.263 C 15.023 4.264 15.011 4.264 15 4.264 L 15 5.264 L 15 6.264 C 15.023 6.264 15.047 6.263 15.07 6.263 L 15.052 5.263 Z M 15.052 5.263 L 15.052 4.263 L 10 4.263 L 10 5.263 L 10 6.263 L 15.052 6.263 L 15.052 5.263 Z M 10 5.263 L 10 4.263 L 4.948 4.263 L 4.948 5.263 L 4.948 6.263 L 10 6.263 L 10 5.263 Z M 18.889 9.474 L 18.889 8.474 L 10 8.474 L 10 9.474 L 10 10.474 L 18.889 10.474 L 18.889 9.474 Z M 10 9.474 L 10 8.474 L 1.111 8.474 L 1.111 9.474 L 1.111 10.474 L 10 10.474 L 10 9.474 Z M 10 5.263 L 8.063 5.759 L 11.937 5.759 L 10 5.263 Z M 8.014 1.414 L 6.564 2.792 L 6.564 2.792 L 8.014 1.414 Z M 5 0 L 5 2 L 5.017 2 L 5.033 2 L 5 0 Z M 3.036 0.771 L 1.66 -0.681 L 1.66 -0.681 L 3.036 0.771 Z M 3.036 4.493 L 4.411 3.041 L 4.411 3.041 L 3.036 4.493 Z M 4.948 5.263 L 4.948 7.263 L 4.983 3.263 L 4.948 5.263 Z M 11.986 1.414 L 13.436 2.792 L 13.436 2.792 L 11.986 1.414 Z M 15 0 L 14.967 2 L 14.983 2 L 15 2 L 15 0 Z M 16.964 0.771 L 15.589 2.223 L 15.589 2.223 L 16.964 0.771 Z M 16.964 4.493 L 15.589 3.041 L 15.589 3.041 L 16.964 4.493 Z M 15.052 5.263 L 15.017 3.263 L 15.052 7.263 L 15.052 5.263 Z M 18.889 9.474 L 18.889 7.474 L 16.889 7.474 L 16.889 9.474 L 18.889 9.474 Z M 18.238 19.383 L 19.614 20.835 L 19.614 20.835 L 18.238 19.383 Z M 1.762 19.383 L 3.137 17.931 L 3.137 17.931 L 1.762 19.383 Z M 1.111 9.474 L 3.111 9.474 L 3.111 7.474 L 1.111 7.474 L 1.111 9.474 Z M 10 5.263 L 11.937 4.767 C 11.472 2.949 10.643 1.278 9.464 0.037 L 8.014 1.414 L 6.564 2.792 C 7.169 3.429 7.724 4.439 8.063 5.759 L 10 5.263 Z M 8.014 1.414 L 9.464 0.037 C 8.274 -1.216 6.713 -2.028 4.967 -1.999 L 5 0 L 5.033 2 C 5.431 1.994 5.971 2.167 6.564 2.792 L 8.014 1.414 Z M 5 0 L 5 -2 C 3.767 -2 2.564 -1.536 1.66 -0.681 L 3.036 0.771 L 4.411 2.223 C 4.55 2.092 4.76 2 5 2 L 5 0 Z M 3.036 0.771 L 1.66 -0.681 C 0.753 0.179 0.222 1.368 0.222 2.632 L 2.222 2.632 L 4.222 2.632 C 4.222 2.5 4.276 2.351 4.411 2.223 L 3.036 0.771 Z M 2.222 2.632 L 0.222 2.632 C 0.222 3.896 0.753 5.086 1.66 5.945 L 3.036 4.493 L 4.411 3.041 C 4.276 2.913 4.222 2.764 4.222 2.632 L 2.222 2.632 Z M 3.036 4.493 L 1.66 5.945 C 2.542 6.78 3.71 7.242 4.913 7.263 L 4.948 5.263 L 4.983 3.263 C 4.75 3.259 4.547 3.169 4.411 3.041 L 3.036 4.493 Z M 10 5.263 L 11.937 5.759 C 12.276 4.439 12.831 3.429 13.436 2.792 L 11.986 1.414 L 10.536 0.037 C 9.357 1.278 8.528 2.949 8.063 4.767 L 10 5.263 Z M 11.986 1.414 L 13.436 2.792 C 14.029 2.167 14.569 1.994 14.967 2 L 15 0 L 15.033 -1.999 C 13.287 -2.028 11.726 -1.216 10.536 0.037 L 11.986 1.414 Z M 15 0 L 15 2 C 15.24 2 15.45 2.092 15.589 2.223 L 16.964 0.771 L 18.34 -0.681 C 17.436 -1.536 16.233 -2 15 -2 L 15 0 Z M 16.964 0.771 L 15.589 2.223 C 15.724 2.351 15.778 2.5 15.778 2.632 L 17.778 2.632 L 19.778 2.632 C 19.778 1.368 19.247 0.179 18.34 -0.681 L 16.964 0.771 Z M 17.778 2.632 L 15.778 2.632 C 15.778 2.764 15.724 2.913 15.589 3.041 L 16.964 4.493 L 18.34 5.945 C 19.247 5.086 19.778 3.896 19.778 2.632 L 17.778 2.632 Z M 16.964 4.493 L 15.589 3.041 C 15.453 3.169 15.25 3.259 15.017 3.263 L 15.052 5.263 L 15.087 7.263 C 16.29 7.242 17.458 6.78 18.34 5.945 L 16.964 4.493 Z M 18.889 9.474 L 16.889 9.474 L 16.889 17.895 L 18.889 17.895 L 20.889 17.895 L 20.889 9.474 L 18.889 9.474 Z M 18.889 17.895 L 16.889 17.895 C 16.889 17.893 16.889 17.894 16.887 17.899 C 16.885 17.904 16.879 17.916 16.863 17.931 L 18.238 19.383 L 19.614 20.835 C 20.416 20.075 20.889 19.019 20.889 17.895 L 18.889 17.895 Z M 18.238 19.383 L 16.863 17.931 C 16.828 17.964 16.759 18 16.667 18 L 16.667 20 L 16.667 22 C 17.753 22 18.814 21.592 19.614 20.835 L 18.238 19.383 Z M 16.667 20 L 16.667 18 L 10 18 L 10 20 L 10 22 L 16.667 22 L 16.667 20 Z M 10 20 L 10 18 L 3.333 18 L 3.333 20 L 3.333 22 L 10 22 L 10 20 Z M 3.333 20 L 3.333 18 C 3.241 18 3.172 17.964 3.137 17.931 L 1.762 19.383 L 0.386 20.835 C 1.186 21.592 2.247 22 3.333 22 L 3.333 20 Z M 1.762 19.383 L 3.137 17.931 C 3.121 17.916 3.115 17.904 3.113 17.899 C 3.111 17.894 3.111 17.893 3.111 17.895 L 1.111 17.895 L -0.889 17.895 C -0.889 19.019 -0.416 20.075 0.386 20.835 L 1.762 19.383 Z M 1.111 17.895 L 3.111 17.895 L 3.111 9.474 L 1.111 9.474 L -0.889 9.474 L -0.889 17.895 L 1.111 17.895 Z M 18.889 9.474 L 18.889 11.474 C 20.504 11.474 22 10.207 22 8.421 L 20 8.421 L 18 8.421 C 18 7.797 18.501 7.474 18.889 7.474 L 18.889 9.474 Z M 20 8.421 L 22 8.421 L 22 6.316 L 20 6.316 L 18 6.316 L 18 8.421 L 20 8.421 Z M 20 6.316 L 22 6.316 C 22 4.529 20.504 3.263 18.889 3.263 L 18.889 5.263 L 18.889 7.263 C 18.501 7.263 18 6.94 18 6.316 L 20 6.316 Z M 18.889 5.263 L 18.889 3.263 L 15.052 3.263 L 15.052 5.263 L 15.052 7.263 L 18.889 7.263 L 18.889 5.263 Z M 4.948 5.263 L 4.948 3.263 L 1.111 3.263 L 1.111 5.263 L 1.111 7.263 L 4.948 7.263 L 4.948 5.263 Z M 1.111 5.263 L 1.111 3.263 C -0.504 3.263 -2 4.529 -2 6.316 L 0 6.316 L 2 6.316 C 2 6.94 1.499 7.263 1.111 7.263 L 1.111 5.263 Z M 0 6.316 L -2 6.316 L -2 8.421 L 0 8.421 L 2 8.421 L 2 6.316 L 0 6.316 Z M 0 8.421 L -2 8.421 C -2 10.207 -0.504 11.474 1.111 11.474 L 1.111 9.474 L 1.111 7.474 C 1.499 7.474 2 7.797 2 8.421 L 0 8.421 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 18,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(74,15,28)",
                flexShrink: 0,
              }}>Beautiful wrapping</span>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(107,114,128)",
                flexShrink: 0,
              }}>Always included</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 48,
              height: 48,
              borderRadius: 100,
              backgroundColor: "rgb(106,30,46)",
              display: "flex",
              flexDirection: "row",
              padding: "12px 12px 12px 12px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
                color: "rgb(212,180,131)",
              }}>
                <path d={"M 0.793 4.11 C 0.302 3.857 -0.301 4.049 -0.555 4.539 C -0.809 5.03 -0.617 5.633 -0.126 5.887 L 0.333 4.999 L 0.793 4.11 Z M 20.126 5.887 C 20.616 5.633 20.808 5.03 20.555 4.539 C 20.301 4.049 19.698 3.857 19.207 4.11 L 19.666 4.999 L 20.126 5.887 Z M 10 19.998 L 11 19.998 L 11 19.998 L 10 19.998 Z M 9 20 C 9 20.552 9.448 21 10 21 C 10.552 21 11 20.552 11 20 L 10 20 L 9 20 Z M 0.333 4.999 L -0.126 5.887 L 9.54 10.887 L 10 9.999 L 10.459 9.111 L 0.793 4.11 L 0.333 4.999 Z M 10 9.999 L 10.459 10.887 L 20.126 5.887 L 19.666 4.999 L 19.207 4.11 L 9.54 9.111 L 10 9.999 Z M 10 9.999 L 9 9.999 L 9 19.998 L 10 19.998 L 11 19.998 L 11 9.999 L 10 9.999 Z M 10 19.998 L 9 19.998 L 9 20 L 10 20 L 11 20 L 11 19.998 L 10 19.998 Z M 20 5.999 L 22 5.999 L 22 5.996 L 20 5.999 Z M 19.702 5 L 18.019 6.08 L 18.019 6.08 L 19.702 5 Z M 18.889 4.268 L 19.811 2.494 L 19.804 2.49 L 18.889 4.268 Z M 11.111 0.268 L 10.189 2.043 L 10.196 2.047 L 11.111 0.268 Z M 8.889 0.268 L 9.804 2.047 L 9.811 2.043 L 8.889 0.268 Z M 1.111 4.268 L 0.196 2.49 L 0.189 2.494 L 1.111 4.268 Z M 0.298 5 L -1.385 3.919 L -1.385 3.919 L 0.298 5 Z M 0 5.999 L -2 5.996 L -2 5.999 L 0 5.999 Z M 0 13.999 L -2 13.999 L -2 14.002 L 0 13.999 Z M 0.298 14.998 L -1.385 16.079 L -1.385 16.079 L 0.298 14.998 Z M 1.111 15.729 L 0.189 17.504 L 0.196 17.508 L 1.111 15.729 Z M 8.889 19.73 L 9.811 17.955 L 9.804 17.951 L 8.889 19.73 Z M 11.111 19.73 L 10.196 17.951 L 10.189 17.955 L 11.111 19.73 Z M 18.889 15.729 L 19.804 17.508 L 19.811 17.504 L 18.889 15.729 Z M 19.702 14.998 L 18.019 13.918 L 18.019 13.918 L 19.702 14.998 Z M 20 13.999 L 22 14.002 L 22 13.999 L 20 13.999 Z M 20 5.999 L 22 5.996 C 21.999 5.252 21.78 4.534 21.385 3.919 L 19.702 5 L 18.019 6.08 C 18.017 6.077 18.012 6.068 18.007 6.054 C 18.003 6.039 18 6.021 18 6.001 L 20 5.999 Z M 19.702 5 L 21.385 3.919 C 20.991 3.305 20.441 2.821 19.811 2.494 L 18.889 4.268 L 17.967 6.043 C 18.012 6.066 18.023 6.086 18.019 6.08 L 19.702 5 Z M 18.889 4.268 L 19.804 2.49 L 12.026 -1.511 L 11.111 0.268 L 10.196 2.047 L 17.974 6.047 L 18.889 4.268 Z M 11.111 0.268 L 12.033 -1.507 C 11.403 -1.834 10.703 -2 10 -2 L 10 0 L 10 2 C 10.077 2 10.143 2.019 10.189 2.043 L 11.111 0.268 Z M 10 0 L 10 -2 C 9.297 -2 8.597 -1.834 7.967 -1.507 L 8.889 0.268 L 9.811 2.043 C 9.857 2.019 9.923 2 10 2 L 10 0 Z M 8.889 0.268 L 7.974 -1.511 L 0.196 2.49 L 1.111 4.268 L 2.026 6.047 L 9.804 2.047 L 8.889 0.268 Z M 1.111 4.268 L 0.189 2.494 C -0.441 2.821 -0.991 3.305 -1.385 3.919 L 0.298 5 L 1.981 6.08 C 1.977 6.086 1.988 6.066 2.033 6.043 L 1.111 4.268 Z M 0.298 5 L -1.385 3.919 C -1.78 4.534 -1.999 5.252 -2 5.996 L 0 5.999 L 2 6.001 C 2 6.021 1.997 6.039 1.993 6.054 C 1.988 6.068 1.983 6.077 1.981 6.08 L 0.298 5 Z M 0 5.999 L -2 5.999 L -2 13.999 L 0 13.999 L 2 13.999 L 2 5.999 L 0 5.999 Z M 0 13.999 L -2 14.002 C -1.999 14.746 -1.78 15.463 -1.385 16.079 L 0.298 14.998 L 1.981 13.918 C 1.983 13.921 1.988 13.93 1.993 13.944 C 1.997 13.959 2 13.977 2 13.997 L 0 13.999 Z M 0.298 14.998 L -1.385 16.079 C -0.991 16.692 -0.441 17.177 0.189 17.504 L 1.111 15.729 L 2.033 13.955 C 1.988 13.931 1.977 13.911 1.981 13.918 L 0.298 14.998 Z M 1.111 15.729 L 0.196 17.508 L 7.974 21.508 L 8.889 19.73 L 9.804 17.951 L 2.026 13.951 L 1.111 15.729 Z M 8.889 19.73 L 7.967 21.505 C 8.597 21.832 9.297 21.998 10 21.998 L 10 19.998 L 10 17.998 C 9.923 17.998 9.857 17.979 9.811 17.955 L 8.889 19.73 Z M 10 19.998 L 10 21.998 C 10.703 21.998 11.403 21.832 12.033 21.505 L 11.111 19.73 L 10.189 17.955 C 10.143 17.979 10.077 17.998 10 17.998 L 10 19.998 Z M 11.111 19.73 L 12.026 21.508 L 19.804 17.508 L 18.889 15.729 L 17.974 13.951 L 10.196 17.951 L 11.111 19.73 Z M 18.889 15.729 L 19.811 17.504 C 20.441 17.177 20.991 16.692 21.385 16.079 L 19.702 14.998 L 18.019 13.918 C 18.023 13.911 18.012 13.931 17.967 13.955 L 18.889 15.729 Z M 19.702 14.998 L 21.385 16.079 C 21.78 15.463 21.999 14.746 22 14.002 L 20 13.999 L 18 13.997 C 18 13.977 18.003 13.959 18.007 13.944 C 18.012 13.93 18.017 13.921 18.019 13.918 L 19.702 14.998 Z M 20 13.999 L 22 13.999 L 22 5.999 L 20 5.999 L 18 5.999 L 18 13.999 L 20 13.999 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 18,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(74,15,28)",
                flexShrink: 0,
              }}>Delivered in Lagos</span>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(107,114,128)",
                flexShrink: 0,
              }}>Handled with care</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 48,
              height: 48,
              borderRadius: 100,
              backgroundColor: "rgb(106,30,46)",
              display: "flex",
              flexDirection: "row",
              padding: "12px 12px 12px 12px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
                color: "rgb(212,180,131)",
              }}>
                <path d={"M 21 9.05 C 21 8.498 20.552 8.05 20 8.05 C 19.448 8.05 19 8.498 19 9.05 L 20 9.05 L 21 9.05 Z M 20 10.05 L 21 10.055 L 21 10.05 L 20 10.05 Z M 13.559 19.345 L 13.915 20.28 L 13.915 20.28 L 13.559 19.345 Z M 7.652 19.72 L 7.417 20.692 L 7.417 20.692 L 7.652 19.72 Z M 2.567 16.69 L 3.31 16.021 L 3.31 16.021 L 2.567 16.69 Z M 0.087 11.315 L -0.904 11.446 L -0.904 11.446 L 0.087 11.315 Z M 1.08 5.479 L 0.188 5.027 L 0.188 5.027 L 1.08 5.479 Z M 5.199 1.228 L 4.719 0.351 L 4.719 0.351 L 5.199 1.228 Z M 10.9 1.045 C 11.449 1.1 11.94 0.7 11.995 0.15 C 12.05 -0.399 11.649 -0.89 11.1 -0.945 L 11 0.05 L 10.9 1.045 Z M 6.8 11.45 C 6.469 11.008 5.842 10.918 5.4 11.25 C 4.958 11.581 4.869 12.208 5.2 12.65 L 6 12.05 L 6.8 11.45 Z M 14.8 12.65 C 15.131 12.208 15.042 11.581 14.6 11.25 C 14.158 10.918 13.531 11.008 13.2 11.45 L 14 12.05 L 14.8 12.65 Z M 7 6.05 C 6.448 6.05 6 6.498 6 7.05 C 6 7.602 6.448 8.05 7 8.05 L 7 7.05 L 7 6.05 Z M 7.01 8.05 C 7.562 8.05 8.01 7.602 8.01 7.05 C 8.01 6.498 7.562 6.05 7.01 6.05 L 7.01 7.05 L 7.01 8.05 Z M 13 6.05 C 12.448 6.05 12 6.498 12 7.05 C 12 7.602 12.448 8.05 13 8.05 L 13 7.05 L 13 6.05 Z M 13.01 8.05 C 13.562 8.05 14.01 7.602 14.01 7.05 C 14.01 6.498 13.562 6.05 13.01 6.05 L 13.01 7.05 L 13.01 8.05 Z M 14 2.05 C 13.448 2.05 13 2.498 13 3.05 C 13 3.602 13.448 4.05 14 4.05 L 14 3.05 L 14 2.05 Z M 20 4.05 C 20.552 4.05 21 3.602 21 3.05 C 21 2.498 20.552 2.05 20 2.05 L 20 3.05 L 20 4.05 Z M 18 0.05 C 18 -0.502 17.552 -0.95 17 -0.95 C 16.448 -0.95 16 -0.502 16 0.05 L 17 0.05 L 18 0.05 Z M 16 6.05 C 16 6.602 16.448 7.05 17 7.05 C 17.552 7.05 18 6.602 18 6.05 L 17 6.05 L 16 6.05 Z M 20 9.05 L 19 9.05 L 19 10.05 L 20 10.05 L 21 10.05 L 21 9.05 L 20 9.05 Z M 20 10.05 L 19 10.045 C 18.991 11.862 18.432 13.633 17.398 15.126 L 18.22 15.695 L 19.042 16.265 C 20.306 14.44 20.989 12.275 21 10.055 L 20 10.05 Z M 18.22 15.695 L 17.398 15.126 C 16.363 16.619 14.901 17.764 13.203 18.411 L 13.559 19.345 L 13.915 20.28 C 15.99 19.489 17.777 18.09 19.042 16.265 L 18.22 15.695 Z M 13.559 19.345 L 13.203 18.411 C 11.506 19.057 9.652 19.175 7.887 18.748 L 7.652 19.72 L 7.417 20.692 C 9.575 21.214 11.84 21.07 13.915 20.28 L 13.559 19.345 Z M 7.652 19.72 L 7.887 18.748 C 6.121 18.322 4.526 17.371 3.31 16.021 L 2.567 16.69 L 1.824 17.359 C 3.309 19.009 5.259 20.171 7.417 20.692 L 7.652 19.72 Z M 2.567 16.69 L 3.31 16.021 C 2.095 14.67 1.317 12.984 1.078 11.183 L 0.087 11.315 L -0.904 11.446 C -0.613 13.647 0.339 15.708 1.824 17.359 L 2.567 16.69 Z M 0.087 11.315 L 1.078 11.183 C 0.839 9.383 1.151 7.552 1.972 5.932 L 1.08 5.479 L 0.188 5.027 C -0.816 7.008 -1.196 9.246 -0.904 11.446 L 0.087 11.315 Z M 1.08 5.479 L 1.972 5.932 C 2.793 4.311 4.086 2.977 5.679 2.105 L 5.199 1.228 L 4.719 0.351 C 2.771 1.417 1.192 3.047 0.188 5.027 L 1.08 5.479 Z M 5.199 1.228 L 5.679 2.105 C 7.272 1.233 9.092 0.863 10.9 1.045 L 11 0.05 L 11.1 -0.945 C 8.891 -1.167 6.666 -0.715 4.719 0.351 L 5.199 1.228 Z M 6 12.05 C 5.2 12.65 5.2 12.65 5.2 12.65 C 5.201 12.651 5.201 12.651 5.201 12.651 C 5.201 12.652 5.202 12.652 5.202 12.653 C 5.203 12.654 5.204 12.655 5.205 12.656 C 5.207 12.659 5.209 12.662 5.212 12.666 C 5.218 12.673 5.225 12.682 5.233 12.693 C 5.251 12.715 5.274 12.744 5.303 12.779 C 5.362 12.848 5.445 12.943 5.551 13.054 C 5.764 13.275 6.073 13.567 6.474 13.859 C 7.272 14.439 8.474 15.05 10 15.05 L 10 14.05 L 10 13.05 C 9.026 13.05 8.228 12.661 7.651 12.241 C 7.364 12.033 7.143 11.824 6.995 11.67 C 6.922 11.594 6.868 11.532 6.835 11.493 C 6.819 11.473 6.807 11.459 6.802 11.452 C 6.799 11.448 6.797 11.446 6.797 11.445 C 6.797 11.445 6.797 11.445 6.797 11.446 C 6.798 11.447 6.798 11.447 6.798 11.448 C 6.799 11.448 6.799 11.448 6.799 11.449 C 6.799 11.449 6.799 11.449 6.8 11.449 C 6.8 11.449 6.8 11.45 6 12.05 Z M 10 14.05 L 10 15.05 C 11.526 15.05 12.728 14.439 13.526 13.859 C 13.927 13.567 14.236 13.276 14.449 13.054 C 14.555 12.943 14.638 12.848 14.697 12.779 C 14.726 12.744 14.749 12.715 14.767 12.693 C 14.775 12.682 14.782 12.673 14.788 12.666 C 14.791 12.662 14.793 12.659 14.795 12.656 C 14.796 12.655 14.797 12.654 14.798 12.653 C 14.798 12.652 14.799 12.652 14.799 12.651 C 14.799 12.651 14.799 12.651 14.8 12.65 C 14.8 12.65 14.8 12.65 14 12.05 C 13.2 11.45 13.2 11.449 13.2 11.449 C 13.201 11.449 13.201 11.449 13.201 11.449 C 13.201 11.448 13.201 11.448 13.202 11.448 C 13.202 11.447 13.202 11.447 13.203 11.446 C 13.203 11.445 13.203 11.445 13.203 11.445 C 13.203 11.446 13.201 11.448 13.198 11.452 C 13.193 11.459 13.181 11.473 13.165 11.493 C 13.132 11.532 13.078 11.594 13.005 11.67 C 12.857 11.824 12.636 12.033 12.349 12.241 C 11.772 12.661 10.974 13.05 10 13.05 L 10 14.05 Z M 7 7.05 L 7 8.05 L 7.01 8.05 L 7.01 7.05 L 7.01 6.05 L 7 6.05 L 7 7.05 Z M 13 7.05 L 13 8.05 L 13.01 8.05 L 13.01 7.05 L 13.01 6.05 L 13 6.05 L 13 7.05 Z M 14 3.05 L 14 4.05 L 17 4.05 L 17 3.05 L 17 2.05 L 14 2.05 L 14 3.05 Z M 17 3.05 L 17 4.05 L 20 4.05 L 20 3.05 L 20 2.05 L 17 2.05 L 17 3.05 Z M 17 0.05 L 16 0.05 L 16 3.05 L 17 3.05 L 18 3.05 L 18 0.05 L 17 0.05 Z M 17 3.05 L 16 3.05 L 16 6.05 L 17 6.05 L 18 6.05 L 18 3.05 L 17 3.05 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 18,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(74,15,28)",
                flexShrink: 0,
              }}>Your personal message</span>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(107,114,128)",
                flexShrink: 0,
              }}>Elegant ink handwritten</span>
            </div>
          </div>
        </div>
        <div data-section="cta" style={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(180deg, rgb(245,237,224) 3.38%, rgb(212,180,131) 100.00%)",
          display: "flex",
          flexDirection: "column",
          gap: 32,
          padding: "80px 80px 80px 80px",
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
              boxShadow: "inset 0 0 0 1.500px rgb(184,87,106)",
              display: "flex",
              flexDirection: "row",
              gap: 8,
              padding: "6px 14px 6px 14px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 14,
                height: 14,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 12,
                  height: 12,
                  color: "rgb(184,87,106)",
                }}>
                  <path d={"M 11.549 0.001 C 11.549 -0.413 11.213 -0.749 10.799 -0.749 C 10.385 -0.749 10.049 -0.413 10.049 0.001 L 10.799 0.001 L 11.549 0.001 Z M 10.049 2.401 C 10.049 2.815 10.385 3.151 10.799 3.151 C 11.213 3.151 11.549 2.815 11.549 2.401 L 10.799 2.401 L 10.049 2.401 Z M 11.999 1.951 C 12.413 1.951 12.749 1.615 12.749 1.201 C 12.749 0.787 12.413 0.451 11.999 0.451 L 11.999 1.201 L 11.999 1.951 Z M 9.599 0.451 C 9.185 0.451 8.849 0.787 8.849 1.201 C 8.849 1.615 9.185 1.951 9.599 1.951 L 9.599 1.201 L 9.599 0.451 Z M 10.799 0.001 L 10.049 0.001 L 10.049 1.201 L 10.799 1.201 L 11.549 1.201 L 11.549 0.001 L 10.799 0.001 Z M 10.799 1.201 L 10.049 1.201 L 10.049 2.401 L 10.799 2.401 L 11.549 2.401 L 11.549 1.201 L 10.799 1.201 Z M 11.999 1.201 L 11.999 0.451 L 10.799 0.451 L 10.799 1.201 L 10.799 1.951 L 11.999 1.951 L 11.999 1.201 Z M 10.799 1.201 L 10.799 0.451 L 9.599 0.451 L 9.599 1.201 L 9.599 1.951 L 10.799 1.951 L 10.799 1.201 Z M 5.41 0.49 L 6.884 0.768 L 6.885 0.765 L 5.41 0.49 Z M 5.617 0.138 L 6.575 1.292 L 6.575 1.292 L 5.617 0.138 Z M 6.383 0.138 L 5.425 1.292 L 5.425 1.292 L 6.383 0.138 Z M 6.59 0.49 L 5.115 0.765 L 5.116 0.768 L 6.59 0.49 Z M 7.22 3.824 L 8.694 3.545 L 8.694 3.545 L 7.22 3.824 Z M 8.176 4.78 L 8.455 3.306 L 8.455 3.306 L 8.176 4.78 Z M 11.51 5.41 L 11.232 6.884 L 11.235 6.885 L 11.51 5.41 Z M 11.862 6.383 L 13.016 7.342 L 13.016 7.342 L 11.862 6.383 Z M 11.51 6.59 L 11.235 5.115 L 11.232 5.116 L 11.51 6.59 Z M 8.176 7.22 L 8.455 8.694 L 8.455 8.694 L 8.176 7.22 Z M 7.22 8.176 L 8.694 8.455 L 8.694 8.455 L 7.22 8.176 Z M 6.59 11.51 L 5.116 11.232 L 5.115 11.235 L 6.59 11.51 Z M 5.41 11.51 L 6.885 11.235 L 6.884 11.232 L 5.41 11.51 Z M 4.78 8.176 L 3.306 8.455 L 3.306 8.455 L 4.78 8.176 Z M 3.824 7.22 L 3.545 8.694 L 3.545 8.694 L 3.824 7.22 Z M 0.49 6.59 L 0.768 5.116 L 0.765 5.115 L 0.49 6.59 Z M 0.138 6.383 L -1.016 7.342 L -1.016 7.342 L 0.138 6.383 Z M 0.138 5.617 L 1.292 6.575 L 1.292 6.575 L 0.138 5.617 Z M 0.49 5.41 L 0.765 6.885 L 0.768 6.884 L 0.49 5.41 Z M 3.824 4.78 L 3.545 3.306 L 3.545 3.306 L 3.824 4.78 Z M 4.78 3.824 L 3.306 3.545 L 3.306 3.545 L 4.78 3.824 Z M 5.41 0.49 L 6.885 0.765 C 6.846 0.972 6.737 1.158 6.575 1.292 L 5.617 0.138 L 4.658 -1.016 C 4.281 -0.702 4.026 -0.267 3.936 0.214 L 5.41 0.49 Z M 5.617 0.138 L 6.575 1.292 C 6.414 1.427 6.21 1.5 6 1.5 L 6 0 L 6 -1.5 C 5.51 -1.5 5.035 -1.329 4.658 -1.016 L 5.617 0.138 Z M 6 0 L 6 1.5 C 5.79 1.5 5.586 1.427 5.425 1.292 L 6.383 0.138 L 7.342 -1.016 C 6.965 -1.329 6.49 -1.5 6 -1.5 L 6 0 Z M 6.383 0.138 L 5.425 1.292 C 5.263 1.158 5.154 0.972 5.115 0.765 L 6.59 0.49 L 8.064 0.214 C 7.974 -0.267 7.719 -0.702 7.342 -1.016 L 6.383 0.138 Z M 6.59 0.49 L 5.116 0.768 L 5.746 4.102 L 7.22 3.824 L 8.694 3.545 L 8.064 0.211 L 6.59 0.49 Z M 7.22 3.824 L 5.746 4.102 C 5.847 4.636 6.106 5.126 6.49 5.51 L 7.551 4.449 L 8.611 3.389 C 8.654 3.431 8.683 3.486 8.694 3.545 L 7.22 3.824 Z M 7.551 4.449 L 6.49 5.51 C 6.874 5.894 7.364 6.153 7.898 6.254 L 8.176 4.78 L 8.455 3.306 C 8.514 3.317 8.569 3.346 8.611 3.389 L 7.551 4.449 Z M 8.176 4.78 L 7.898 6.254 L 11.232 6.884 L 11.51 5.41 L 11.789 3.936 L 8.455 3.306 L 8.176 4.78 Z M 11.51 5.41 L 11.235 6.885 C 11.028 6.846 10.842 6.737 10.708 6.575 L 11.862 5.617 L 13.016 4.658 C 12.702 4.281 12.267 4.026 11.786 3.936 L 11.51 5.41 Z M 11.862 5.617 L 10.708 6.575 C 10.573 6.414 10.5 6.21 10.5 6 L 12 6 L 13.5 6 C 13.5 5.51 13.329 5.035 13.016 4.658 L 11.862 5.617 Z M 12 6 L 10.5 6 C 10.5 5.79 10.573 5.586 10.708 5.425 L 11.862 6.383 L 13.016 7.342 C 13.329 6.965 13.5 6.49 13.5 6 L 12 6 Z M 11.862 6.383 L 10.708 5.425 C 10.842 5.263 11.028 5.154 11.235 5.115 L 11.51 6.59 L 11.786 8.064 C 12.267 7.974 12.702 7.719 13.016 7.342 L 11.862 6.383 Z M 11.51 6.59 L 11.232 5.116 L 7.898 5.746 L 8.176 7.22 L 8.455 8.694 L 11.789 8.064 L 11.51 6.59 Z M 8.176 7.22 L 7.898 5.746 C 7.364 5.847 6.874 6.106 6.49 6.49 L 7.551 7.551 L 8.611 8.611 C 8.569 8.654 8.514 8.683 8.455 8.694 L 8.176 7.22 Z M 7.551 7.551 L 6.49 6.49 C 6.106 6.874 5.847 7.364 5.746 7.898 L 7.22 8.176 L 8.694 8.455 C 8.683 8.514 8.654 8.569 8.611 8.611 L 7.551 7.551 Z M 7.22 8.176 L 5.746 7.898 L 5.116 11.232 L 6.59 11.51 L 8.064 11.789 L 8.694 8.455 L 7.22 8.176 Z M 6.59 11.51 L 5.115 11.235 C 5.154 11.028 5.263 10.842 5.425 10.708 L 6.383 11.862 L 7.342 13.016 C 7.719 12.702 7.974 12.267 8.064 11.786 L 6.59 11.51 Z M 6.383 11.862 L 5.425 10.708 C 5.586 10.573 5.79 10.5 6 10.5 L 6 12 L 6 13.5 C 6.49 13.5 6.965 13.329 7.342 13.016 L 6.383 11.862 Z M 6 12 L 6 10.5 C 6.21 10.5 6.414 10.573 6.575 10.708 L 5.617 11.862 L 4.658 13.016 C 5.035 13.329 5.51 13.5 6 13.5 L 6 12 Z M 5.617 11.862 L 6.575 10.708 C 6.737 10.842 6.846 11.028 6.885 11.235 L 5.41 11.51 L 3.936 11.786 C 4.026 12.267 4.281 12.702 4.658 13.016 L 5.617 11.862 Z M 5.41 11.51 L 6.884 11.232 L 6.254 7.898 L 4.78 8.176 L 3.306 8.455 L 3.936 11.789 L 5.41 11.51 Z M 4.78 8.176 L 6.254 7.898 C 6.153 7.364 5.894 6.874 5.51 6.49 L 4.449 7.551 L 3.389 8.611 C 3.346 8.569 3.317 8.514 3.306 8.455 L 4.78 8.176 Z M 4.449 7.551 L 5.51 6.49 C 5.126 6.106 4.636 5.847 4.102 5.746 L 3.824 7.22 L 3.545 8.694 C 3.486 8.683 3.431 8.654 3.389 8.611 L 4.449 7.551 Z M 3.824 7.22 L 4.102 5.746 L 0.768 5.116 L 0.49 6.59 L 0.211 8.064 L 3.545 8.694 L 3.824 7.22 Z M 0.49 6.59 L 0.765 5.115 C 0.972 5.154 1.158 5.263 1.292 5.425 L 0.138 6.383 L -1.016 7.342 C -0.702 7.719 -0.267 7.974 0.214 8.064 L 0.49 6.59 Z M 0.138 6.383 L 1.292 5.425 C 1.427 5.586 1.5 5.79 1.5 6 L 0 6 L -1.5 6 C -1.5 6.49 -1.329 6.965 -1.016 7.342 L 0.138 6.383 Z M 0 6 L 1.5 6 C 1.5 6.21 1.427 6.414 1.292 6.575 L 0.138 5.617 L -1.016 4.658 C -1.329 5.035 -1.5 5.51 -1.5 6 L 0 6 Z M 0.138 5.617 L 1.292 6.575 C 1.158 6.737 0.972 6.846 0.765 6.885 L 0.49 5.41 L 0.214 3.936 C -0.267 4.026 -0.702 4.281 -1.016 4.658 L 0.138 5.617 Z M 0.49 5.41 L 0.768 6.884 L 4.102 6.254 L 3.824 4.78 L 3.545 3.306 L 0.211 3.936 L 0.49 5.41 Z M 3.824 4.78 L 4.102 6.254 C 4.636 6.153 5.126 5.894 5.51 5.51 L 4.449 4.449 L 3.389 3.389 C 3.431 3.346 3.486 3.317 3.545 3.306 L 3.824 4.78 Z M 4.449 4.449 L 5.51 5.51 C 5.894 5.126 6.153 4.636 6.254 4.102 L 4.78 3.824 L 3.306 3.545 C 3.317 3.486 3.346 3.431 3.389 3.389 L 4.449 4.449 Z M 4.78 3.824 L 6.254 4.102 L 6.884 0.768 L 5.41 0.49 L 3.936 0.211 L 3.306 3.545 L 4.78 3.824 Z M 2.401 10.799 L 0.901 10.799 C 0.901 10.633 1.035 10.498 1.201 10.498 L 1.201 11.998 L 1.201 13.498 C 2.692 13.498 3.901 12.29 3.901 10.799 L 2.401 10.799 Z M 1.201 11.998 L 1.201 10.498 C 1.367 10.498 1.501 10.633 1.501 10.799 L 0.001 10.799 L -1.499 10.799 C -1.499 12.29 -0.29 13.498 1.201 13.498 L 1.201 11.998 Z M 0.001 10.799 L 1.501 10.799 C 1.501 10.964 1.367 11.099 1.201 11.099 L 1.201 9.599 L 1.201 8.099 C -0.29 8.099 -1.499 9.308 -1.499 10.799 L 0.001 10.799 Z M 1.201 9.599 L 1.201 11.099 C 1.035 11.099 0.901 10.964 0.901 10.799 L 2.401 10.799 L 3.901 10.799 C 3.901 9.308 2.692 8.099 1.201 8.099 L 1.201 9.599 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <span style={{
                position: "relative",
                fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 12,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "1.500px",
                color: "rgb(184,87,106)",
                flexShrink: 0,
              }}>NOTHING FEELS QUITE RIGHT?</span>
            </div>
            <span data-heading="section" data-text-block style={{
              position: "relative",
              width: 884,
              fontFamily: "Baskerville, ui-serif, Georgia, \"Times New Roman\", serif",
              fontWeight: 600,
              fontSize: 56,
              textAlign: "center",
              lineHeight: "100%",
              color: "var(--burgundy-berry)",
              flexShrink: 0,
            }}>Then they deserve a box that doesn't exist yet.</span>
            <span data-text-block style={{
              position: "relative",
              width: 640,
              fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 18,
              textAlign: "center",
              lineHeight: 1.5,
              color: "var(--burgundy-deep-wine)",
              flexShrink: 0,
            }}>Tell us about them and we'll design a one-of-a-kind box around who they are — every item chosen just for them, delivered on your behalf.</span>
          </div>
          <div style={{
            position: "relative",
            borderRadius: 100,
            backgroundColor: "rgb(212,180,131)",
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
              color: "rgb(74,15,28)",
              flexShrink: 0,
            }}>Curate their box</span>
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
                color: "rgb(74,15,28)",
              }}>
                <path d={"M 0 3.667 C -0.552 3.667 -1 4.115 -1 4.667 C -1 5.219 -0.552 5.667 0 5.667 L 0 4.667 L 0 3.667 Z M 9.334 4.667 L 10.042 5.374 L 10.749 4.667 L 10.042 3.96 L 9.334 4.667 Z M 5.374 -0.707 C 4.984 -1.098 4.351 -1.098 3.96 -0.707 C 3.57 -0.317 3.57 0.317 3.96 0.707 L 4.667 0 L 5.374 -0.707 Z M 3.96 8.627 C 3.57 9.018 3.57 9.651 3.96 10.042 C 4.351 10.432 4.984 10.432 5.374 10.042 L 4.667 9.334 L 3.96 8.627 Z M 0 4.667 L 0 5.667 L 9.334 5.667 L 9.334 4.667 L 9.334 3.667 L 0 3.667 L 0 4.667 Z M 9.334 4.667 L 10.042 3.96 L 5.374 -0.707 L 4.667 0 L 3.96 0.707 L 8.627 5.374 L 9.334 4.667 Z M 9.334 4.667 L 8.627 3.96 L 3.96 8.627 L 4.667 9.334 L 5.374 10.042 L 10.042 5.374 L 9.334 4.667 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <div data-decorative style={{
            position: "absolute",
            left: 166,
            top: 242,
            width: 1108,
            height: 554,
            opacity: 0.15,
            borderRadius: "50%",
            backgroundColor: "var(--tan-gold)",
          }} />
        </div>
      </div>
      <div data-section="footer" style={{
        position: "relative",
        backgroundColor: "rgb(74,15,28)",
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
        <div style={{
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
                width: 109.567,
                height: 33.663,
                flexShrink: 0,
              }}>
              <WrappDLogo
                style={{ transform: "scale(0.529, 0.529)", transformOrigin: "0 0" }}
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
              color: "rgb(245,237,224)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Wrapp'd is Nigeria's premium bespoke gift-boxing platform. Hand-packed with boutique local treats and hand-tied ribbons.</span>
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
                backgroundColor: "rgb(212,180,131)",
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
                  color: "rgb(74,15,28)",
                }}>
                  <path d={"M 12.4 2.6 C 11.848 2.6 11.4 3.048 11.4 3.6 C 11.4 4.152 11.848 4.6 12.4 4.6 L 12.4 3.6 L 12.4 2.6 Z M 12.408 4.6 C 12.96 4.6 13.408 4.152 13.408 3.6 C 13.408 3.048 12.96 2.6 12.408 2.6 L 12.408 3.6 L 12.408 4.6 Z M 11.2 7.496 L 12.189 7.35 L 12.189 7.35 L 11.2 7.496 Z M 9.473 10.824 L 9.923 11.717 L 9.923 11.717 L 9.473 10.824 Z M 7.526 11.125 L 7.367 12.112 L 7.367 12.112 L 7.526 11.125 Z M 5.772 10.228 L 5.065 10.935 L 5.065 10.935 L 5.772 10.228 Z M 4.875 8.474 L 5.862 8.315 L 5.862 8.315 L 4.875 8.474 Z M 5.176 6.527 L 4.283 6.077 L 4.283 6.077 L 5.176 6.527 Z M 6.561 5.125 L 6.1 4.238 L 6.1 4.238 L 6.561 5.125 Z M 8.504 4.8 L 8.65 3.811 L 8.65 3.811 L 8.504 4.8 Z M 10.297 5.703 L 11.004 4.996 L 11.004 4.996 L 10.297 5.703 Z M 12.4 3.6 L 12.4 4.6 L 12.408 4.6 L 12.408 3.6 L 12.408 2.6 L 12.4 2.6 L 12.4 3.6 Z M 11.2 7.496 L 10.211 7.643 C 10.278 8.101 10.2 8.568 9.987 8.979 L 10.875 9.439 L 11.762 9.9 C 12.169 9.116 12.319 8.223 12.189 7.35 L 11.2 7.496 Z M 10.875 9.439 L 9.987 8.979 C 9.774 9.39 9.437 9.723 9.023 9.931 L 9.473 10.824 L 9.923 11.717 C 10.712 11.32 11.356 10.684 11.762 9.9 L 10.875 9.439 Z M 9.473 10.824 L 9.023 9.931 C 8.61 10.139 8.142 10.211 7.685 10.138 L 7.526 11.125 L 7.367 12.112 C 8.239 12.253 9.134 12.114 9.923 11.717 L 9.473 10.824 Z M 7.526 11.125 L 7.685 10.138 C 7.228 10.064 6.806 9.848 6.479 9.521 L 5.772 10.228 L 5.065 10.935 C 5.689 11.56 6.495 11.972 7.367 12.112 L 7.526 11.125 Z M 5.772 10.228 L 6.479 9.521 C 6.152 9.194 5.936 8.772 5.862 8.315 L 4.875 8.474 L 3.888 8.633 C 4.028 9.505 4.44 10.311 5.065 10.935 L 5.772 10.228 Z M 4.875 8.474 L 5.862 8.315 C 5.789 7.858 5.861 7.39 6.069 6.977 L 5.176 6.527 L 4.283 6.077 C 3.886 6.866 3.747 7.761 3.888 8.633 L 4.875 8.474 Z M 5.176 6.527 L 6.069 6.977 C 6.277 6.563 6.61 6.226 7.021 6.013 L 6.561 5.125 L 6.1 4.238 C 5.316 4.644 4.68 5.288 4.283 6.077 L 5.176 6.527 Z M 6.561 5.125 L 7.021 6.013 C 7.432 5.8 7.899 5.722 8.357 5.789 L 8.504 4.8 L 8.65 3.811 C 7.777 3.681 6.884 3.831 6.1 4.238 L 6.561 5.125 Z M 8.504 4.8 L 8.357 5.789 C 8.824 5.859 9.256 6.076 9.59 6.41 L 10.297 5.703 L 11.004 4.996 C 10.367 4.359 9.542 3.943 8.65 3.811 L 8.504 4.8 Z M 10.297 5.703 L 9.59 6.41 C 9.924 6.744 10.141 7.176 10.211 7.643 L 11.2 7.496 L 12.189 7.35 C 12.057 6.458 11.641 5.633 11.004 4.996 L 10.297 5.703 Z M 4 0 L 4 2 L 12 2 L 12 0 L 12 -2 L 4 -2 L 4 0 Z M 12 0 L 12 2 C 13.105 2 14 2.895 14 4 L 16 4 L 18 4 C 18 0.686 15.314 -2 12 -2 L 12 0 Z M 16 4 L 14 4 L 14 12 L 16 12 L 18 12 L 18 4 L 16 4 Z M 16 12 L 14 12 C 14 13.105 13.105 14 12 14 L 12 16 L 12 18 C 15.314 18 18 15.314 18 12 L 16 12 Z M 12 16 L 12 14 L 4 14 L 4 16 L 4 18 L 12 18 L 12 16 Z M 4 16 L 4 14 C 2.895 14 2 13.105 2 12 L 0 12 L -2 12 C -2 15.314 0.686 18 4 18 L 4 16 Z M 0 12 L 2 12 L 2 4 L 0 4 L -2 4 L -2 12 L 0 12 Z M 0 4 L 2 4 C 2 2.895 2.895 2 4 2 L 4 0 L 4 -2 C 0.686 -2 -2 0.686 -2 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <div style={{
                position: "relative",
                width: 36,
                height: 36,
                borderRadius: 18,
                backgroundColor: "rgb(212,180,131)",
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
                  color: "rgb(74,15,28)",
                }}>
                  <path d={"M 16 0 L 18 0 L 18 -2 L 16 -2 L 16 0 Z M 6.494 1.172 L 7.458 2.924 L 7.458 2.924 L 6.494 1.172 Z M 4.364 6.4 L 4.364 8.4 L 6.364 8.4 L 6.364 6.4 L 4.364 6.4 Z M 0 6.4 L 0 4.4 L -2 4.4 L -2 6.4 L 0 6.4 Z M 0 9.6 L -2 9.6 L -2 11.6 L 0 11.6 L 0 9.6 Z M 4.364 9.6 L 6.364 9.6 L 6.364 7.6 L 4.364 7.6 L 4.364 9.6 Z M 4.364 16 L 2.364 16 L 2.364 18 L 4.364 18 L 4.364 16 Z M 10.182 16 L 10.182 18 L 12.182 18 L 12.182 16 L 10.182 16 Z M 10.182 9.6 L 10.182 7.6 L 8.182 7.6 L 8.182 9.6 L 10.182 9.6 Z M 14.545 9.6 L 14.545 11.6 L 15.833 11.6 L 16.366 10.428 L 14.545 9.6 Z M 16 6.4 L 17.821 7.228 L 19.106 4.4 L 16 4.4 L 16 6.4 Z M 10.182 6.4 L 8.182 6.4 L 8.182 8.4 L 10.182 8.4 L 10.182 6.4 Z M 10.608 3.434 L 11.572 5.187 L 11.572 5.187 L 10.608 3.434 Z M 16 3.2 L 16 5.2 L 18 5.2 L 18 3.2 L 16 3.2 Z M 16 0 L 16 -2 L 11.636 -2 L 11.636 0 L 11.636 2 L 16 2 L 16 0 Z M 11.636 0 L 11.636 -2 C 9.45 -2 7.252 -1.528 5.53 -0.581 L 6.494 1.172 L 7.458 2.924 C 8.464 2.371 9.965 2 11.636 2 L 11.636 0 Z M 6.494 1.172 L 5.53 -0.581 C 3.858 0.339 2.364 1.898 2.364 4 L 4.364 4 L 6.364 4 C 6.364 3.981 6.402 3.504 7.458 2.924 L 6.494 1.172 Z M 4.364 4 L 2.364 4 L 2.364 6.4 L 4.364 6.4 L 6.364 6.4 L 6.364 4 L 4.364 4 Z M 4.364 6.4 L 4.364 4.4 L 0 4.4 L 0 6.4 L 0 8.4 L 4.364 8.4 L 4.364 6.4 Z M 0 6.4 L -2 6.4 L -2 9.6 L 0 9.6 L 2 9.6 L 2 6.4 L 0 6.4 Z M 0 9.6 L 0 11.6 L 4.364 11.6 L 4.364 9.6 L 4.364 7.6 L 0 7.6 L 0 9.6 Z M 4.364 9.6 L 2.364 9.6 L 2.364 16 L 4.364 16 L 6.364 16 L 6.364 9.6 L 4.364 9.6 Z M 4.364 16 L 4.364 18 L 10.182 18 L 10.182 16 L 10.182 14 L 4.364 14 L 4.364 16 Z M 10.182 16 L 12.182 16 L 12.182 9.6 L 10.182 9.6 L 8.182 9.6 L 8.182 16 L 10.182 16 Z M 10.182 9.6 L 10.182 11.6 L 14.545 11.6 L 14.545 9.6 L 14.545 7.6 L 10.182 7.6 L 10.182 9.6 Z M 14.545 9.6 L 16.366 10.428 L 17.821 7.228 L 16 6.4 L 14.179 5.572 L 12.725 8.772 L 14.545 9.6 Z M 16 6.4 L 16 4.4 L 10.182 4.4 L 10.182 6.4 L 10.182 8.4 L 16 8.4 L 16 6.4 Z M 10.182 6.4 L 12.182 6.4 L 12.182 4 L 10.182 4 L 8.182 4 L 8.182 6.4 L 10.182 6.4 Z M 10.182 4 L 12.182 4 C 12.182 4.829 11.607 5.167 11.572 5.187 L 10.608 3.434 L 9.644 1.682 C 9.063 2.002 8.182 2.746 8.182 4 L 10.182 4 Z M 10.608 3.434 L 11.572 5.187 C 11.543 5.203 11.524 5.21 11.518 5.212 C 11.512 5.214 11.514 5.213 11.524 5.211 C 11.534 5.209 11.55 5.206 11.57 5.204 C 11.59 5.201 11.612 5.2 11.636 5.2 L 11.636 3.2 L 11.636 1.2 C 10.993 1.2 10.275 1.335 9.644 1.682 L 10.608 3.434 Z M 11.636 3.2 L 11.636 5.2 L 16 5.2 L 16 3.2 L 16 1.2 L 11.636 1.2 L 11.636 3.2 Z M 16 3.2 L 18 3.2 L 18 0 L 16 0 L 14 0 L 14 3.2 L 16 3.2 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <div style={{
                position: "relative",
                width: 36,
                height: 36,
                borderRadius: 18,
                backgroundColor: "rgb(212,180,131)",
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
                  color: "rgb(74,15,28)",
                }}>
                  <path d={"M 12.2 4.8 C 12.2 4.248 11.752 3.8 11.2 3.8 C 10.648 3.8 10.2 4.248 10.2 4.8 L 11.2 4.8 L 12.2 4.8 Z M 11.903 10.497 L 11.196 11.204 L 11.196 11.204 L 11.903 10.497 Z M 15.297 10.497 L 16.004 11.204 L 16.004 11.204 L 15.297 10.497 Z M 14.273 3.035 L 13.489 3.656 L 13.489 3.656 L 14.273 3.035 Z M 9.838 0.214 L 10.068 -0.759 L 10.068 -0.759 L 9.838 0.214 Z M 4.609 0.754 L 4.186 -0.152 L 4.186 -0.152 L 4.609 0.754 Z M 0.845 4.422 L -0.05 3.975 L -0.05 3.975 L 0.845 4.422 Z M 0.169 9.635 L -0.81 9.839 L 0.169 9.635 Z M 2.874 14.142 L 2.233 14.91 L 2.233 14.91 L 2.874 14.142 Z M 7.792 15.997 L 7.818 14.998 L 7.818 14.998 L 7.792 15.997 Z M 13.4 15.2 C 13.842 14.869 13.931 14.242 13.6 13.8 C 13.269 13.358 12.642 13.269 12.2 13.6 L 12.8 14.4 L 13.4 15.2 Z M 11.2 4.8 L 10.2 4.8 L 10.2 8.8 L 11.2 8.8 L 12.2 8.8 L 12.2 4.8 L 11.2 4.8 Z M 11.2 8.8 L 10.2 8.8 C 10.2 9.702 10.558 10.567 11.196 11.204 L 11.903 10.497 L 12.61 9.79 C 12.348 9.527 12.2 9.171 12.2 8.8 L 11.2 8.8 Z M 11.903 10.497 L 11.196 11.204 C 11.833 11.842 12.698 12.2 13.6 12.2 L 13.6 11.2 L 13.6 10.2 C 13.229 10.2 12.873 10.053 12.61 9.79 L 11.903 10.497 Z M 13.6 11.2 L 13.6 12.2 C 14.502 12.2 15.367 11.842 16.004 11.204 L 15.297 10.497 L 14.59 9.79 C 14.327 10.053 13.971 10.2 13.6 10.2 L 13.6 11.2 Z M 15.297 10.497 L 16.004 11.204 C 16.642 10.567 17 9.702 17 8.8 L 16 8.8 L 15 8.8 C 15 9.171 14.852 9.527 14.59 9.79 L 15.297 10.497 Z M 16 8.8 L 17 8.8 L 17 8 L 16 8 L 15 8 L 15 8.8 L 16 8.8 Z M 16 8 L 17 8 C 17 5.973 16.315 4.005 15.057 2.415 L 14.273 3.035 L 13.489 3.656 C 14.468 4.892 15 6.423 15 8 L 16 8 Z M 14.273 3.035 L 15.057 2.415 C 13.799 0.825 12.041 -0.293 10.068 -0.759 L 9.838 0.214 L 9.608 1.187 C 11.143 1.55 12.51 2.419 13.489 3.656 L 14.273 3.035 Z M 9.838 0.214 L 10.068 -0.759 C 8.095 -1.225 6.022 -1.011 4.186 -0.152 L 4.609 0.754 L 5.033 1.66 C 6.461 0.991 8.074 0.825 9.608 1.187 L 9.838 0.214 Z M 4.609 0.754 L 4.186 -0.152 C 2.349 0.708 0.857 2.162 -0.05 3.975 L 0.845 4.422 L 1.739 4.87 C 2.444 3.459 3.605 2.328 5.033 1.66 L 4.609 0.754 Z M 0.845 4.422 L -0.05 3.975 C -0.957 5.788 -1.224 7.855 -0.81 9.839 L 0.169 9.635 L 1.148 9.431 C 0.825 7.887 1.034 6.28 1.739 4.87 L 0.845 4.422 Z M 0.169 9.635 L -0.81 9.839 C -0.396 11.824 0.677 13.611 2.233 14.91 L 2.874 14.142 L 3.515 13.374 C 2.304 12.364 1.47 10.974 1.148 9.431 L 0.169 9.635 Z M 2.874 14.142 L 2.233 14.91 C 3.79 16.209 5.739 16.944 7.766 16.997 L 7.792 15.997 L 7.818 14.998 C 6.242 14.957 4.725 14.385 3.515 13.374 L 2.874 14.142 Z M 7.792 15.997 L 7.766 16.997 C 9.793 17.05 11.778 16.416 13.4 15.2 L 12.8 14.4 L 12.2 13.6 C 10.938 14.546 9.394 15.039 7.818 14.998 L 7.792 15.997 Z M 11.2 8 L 9.2 8 C 9.2 8.663 8.663 9.2 8 9.2 L 8 11.2 L 8 13.2 C 10.872 13.2 13.2 10.872 13.2 8 L 11.2 8 Z M 8 11.2 L 8 9.2 C 7.337 9.2 6.8 8.663 6.8 8 L 4.8 8 L 2.8 8 C 2.8 10.872 5.128 13.2 8 13.2 L 8 11.2 Z M 4.8 8 L 6.8 8 C 6.8 7.337 7.337 6.8 8 6.8 L 8 4.8 L 8 2.8 C 5.128 2.8 2.8 5.128 2.8 8 L 4.8 8 Z M 8 4.8 L 8 6.8 C 8.663 6.8 9.2 7.337 9.2 8 L 11.2 8 L 13.2 8 C 13.2 5.128 10.872 2.8 8 2.8 L 8 4.8 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <div style={{
                position: "relative",
                width: 36,
                height: 36,
                borderRadius: 18,
                backgroundColor: "rgb(212,180,131)",
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
                  color: "rgb(74,15,28)",
                }}>
                  <path d={"M 14.594 6.533 L 13.144 7.91 L 13.144 7.91 L 14.594 6.533 Z M 16 16 L 16 18 L 18 18 L 18 16 L 16 16 Z M 12.8 16 L 10.8 16 L 10.8 18 L 12.8 18 L 12.8 16 Z M 12.331 8.914 L 13.781 7.537 L 13.781 7.537 L 12.331 8.914 Z M 10.069 8.914 L 8.619 7.537 L 8.619 7.537 L 10.069 8.914 Z M 9.6 16 L 9.6 18 L 11.6 18 L 11.6 16 L 9.6 16 Z M 6.4 16 L 4.4 16 L 4.4 18 L 6.4 18 L 6.4 16 Z M 0 5.895 L 0 3.895 L -2 3.895 L -2 5.895 L 0 5.895 Z M 3.2 5.895 L 5.2 5.895 L 5.2 3.895 L 3.2 3.895 L 3.2 5.895 Z M 3.2 16 L 3.2 18 L 5.2 18 L 5.2 16 L 3.2 16 Z M 0 16 L -2 16 L -2 18 L 0 18 L 0 16 Z M 11.2 5.053 L 11.2 7.053 C 11.909 7.053 12.61 7.348 13.144 7.91 L 14.594 6.533 L 16.044 5.155 C 14.778 3.822 13.038 3.053 11.2 3.053 L 11.2 5.053 Z M 14.594 6.533 L 13.144 7.91 C 13.681 8.476 14 9.263 14 10.105 L 16 10.105 L 18 10.105 C 18 8.267 17.307 6.485 16.044 5.155 L 14.594 6.533 Z M 16 10.105 L 14 10.105 L 14 16 L 16 16 L 18 16 L 18 10.105 L 16 10.105 Z M 16 16 L 16 14 L 12.8 14 L 12.8 16 L 12.8 18 L 16 18 L 16 16 Z M 12.8 16 L 14.8 16 L 14.8 10.105 L 12.8 10.105 L 10.8 10.105 L 10.8 16 L 12.8 16 Z M 12.8 10.105 L 14.8 10.105 C 14.8 9.16 14.444 8.235 13.781 7.537 L 12.331 8.914 L 10.881 10.292 C 10.819 10.226 10.8 10.157 10.8 10.105 L 12.8 10.105 Z M 12.331 8.914 L 13.781 7.537 C 13.115 6.835 12.189 6.421 11.2 6.421 L 11.2 8.421 L 11.2 10.421 C 11.06 10.421 10.948 10.361 10.881 10.292 L 12.331 8.914 Z M 11.2 8.421 L 11.2 6.421 C 10.211 6.421 9.285 6.835 8.619 7.537 L 10.069 8.914 L 11.519 10.292 C 11.452 10.361 11.34 10.421 11.2 10.421 L 11.2 8.421 Z M 10.069 8.914 L 8.619 7.537 C 7.956 8.235 7.6 9.16 7.6 10.105 L 9.6 10.105 L 11.6 10.105 C 11.6 10.157 11.581 10.226 11.519 10.292 L 10.069 8.914 Z M 9.6 10.105 L 7.6 10.105 L 7.6 16 L 9.6 16 L 11.6 16 L 11.6 10.105 L 9.6 10.105 Z M 9.6 16 L 9.6 14 L 6.4 14 L 6.4 16 L 6.4 18 L 9.6 18 L 9.6 16 Z M 6.4 16 L 8.4 16 L 8.4 10.105 L 6.4 10.105 L 4.4 10.105 L 4.4 16 L 6.4 16 Z M 6.4 10.105 L 8.4 10.105 C 8.4 9.263 8.719 8.476 9.256 7.91 L 7.806 6.533 L 6.356 5.155 C 5.093 6.485 4.4 8.267 4.4 10.105 L 6.4 10.105 Z M 7.806 6.533 L 9.256 7.91 C 9.79 7.348 10.491 7.053 11.2 7.053 L 11.2 5.053 L 11.2 3.053 C 9.362 3.053 7.622 3.822 6.356 5.155 L 7.806 6.533 Z M 0 5.895 L 0 7.895 L 3.2 7.895 L 3.2 5.895 L 3.2 3.895 L 0 3.895 L 0 5.895 Z M 3.2 5.895 L 1.2 5.895 L 1.2 16 L 3.2 16 L 5.2 16 L 5.2 5.895 L 3.2 5.895 Z M 3.2 16 L 3.2 14 L 0 14 L 0 16 L 0 18 L 3.2 18 L 3.2 16 Z M 0 16 L 2 16 L 2 5.895 L 0 5.895 L -2 5.895 L -2 16 L 0 16 Z M 3.2 1.684 L 1.2 1.684 C 1.2 1.63 1.222 1.56 1.281 1.498 C 1.342 1.433 1.455 1.368 1.6 1.368 L 1.6 3.368 L 1.6 5.368 C 3.684 5.368 5.2 3.621 5.2 1.684 L 3.2 1.684 Z M 1.6 3.368 L 1.6 1.368 C 1.745 1.368 1.858 1.433 1.919 1.498 C 1.978 1.56 2 1.63 2 1.684 L 0 1.684 L -2 1.684 C -2 3.621 -0.484 5.368 1.6 5.368 L 1.6 3.368 Z M 0 1.684 L 2 1.684 C 2 1.738 1.978 1.808 1.919 1.871 C 1.858 1.935 1.745 2 1.6 2 L 1.6 0 L 1.6 -2 C -0.484 -2 -2 -0.253 -2 1.684 L 0 1.684 Z M 1.6 0 L 1.6 2 C 1.455 2 1.342 1.935 1.281 1.871 C 1.222 1.808 1.2 1.738 1.2 1.684 L 3.2 1.684 L 5.2 1.684 C 5.2 -0.253 3.684 -2 1.6 -2 L 1.6 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
          <div data-footer-cols style={{
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
                color: "rgb(245,237,224)",
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
                color: "rgb(245,237,224)",
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
                color: "rgb(245,237,224)",
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
                color: "rgb(245,237,224)",
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
                color: "rgb(245,237,224)",
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
                color: "rgb(245,237,224)",
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
                color: "rgb(245,237,224)",
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
                color: "rgb(245,237,224)",
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
                color: "rgb(245,237,224)",
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
                color: "rgb(245,237,224)",
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
                color: "rgb(245,237,224)",
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
                color: "rgb(245,237,224)",
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
          color: "rgb(245,237,224)",
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
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(245,237,224)",
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
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(245,237,224)",
              flexShrink: 0,
            }}>Privacy Policy</span>
            <span style={{
              position: "relative",
              opacity: 0.5,
              fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(245,237,224)",
              flexShrink: 0,
            }}>Terms of Service</span>
            <span style={{
              position: "relative",
              opacity: 0.5,
              fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: 13,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(245,237,224)",
              flexShrink: 0,
            }}>Carbon Neutral Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShopGiftBoxesView;
