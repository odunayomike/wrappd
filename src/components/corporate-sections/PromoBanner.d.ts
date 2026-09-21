import * as React from 'react';
export interface PromoBannerProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Thoughtful gifting, made easy | Order by December for guaranteed festive delivery — ". */
  text1?: string;
  /** Text content; defaults to "Shop now". */
  text2?: string;
}
export declare const PromoBanner: React.FC<PromoBannerProps>;
export default PromoBanner;
