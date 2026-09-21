import * as React from 'react';
export interface NavBar3Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Home". */
  text1?: string;
  /** Text content; defaults to "Services". */
  text2?: string;
  /** Text content; defaults to "Shop". */
  text3?: string;
  /** Text content; defaults to "Curate". */
  text4?: string;
}
export declare const NavBar3: React.FC<NavBar3Props>;
export default NavBar3;
