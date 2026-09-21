// figma node: 348:203 PromoBanner
export function PromoBanner(_p = {}) {
  const props = _p;
  return (
    <div data-promo className={props.className} style={{
      width: "100%",
      backgroundColor: "var(--primary-burgundy)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
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
          fontSize: 13,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          letterSpacing: "0.300px",
          color: "var(--tan-ivory)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Thoughtful gifting, made easy | Order by December for guaranteed festive delivery — "}</span>
        <span style={{
          position: "relative",
          fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 13,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          letterSpacing: "0.300px",
          color: "var(--tan-ivory)",
          textDecoration: "underline",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "Shop now"}</span>
      </div>
    </div>
  );
}
export default PromoBanner;
