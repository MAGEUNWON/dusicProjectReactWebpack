import baseStyled, { ThemedStyledInterface } from 'styled-components';

const color: {[key: string]: string} = {
  main: '#9A8AFF',
  red: '#FF005C',
  blue: '#0008CB',
  black: '#090015',
  white_gray: '#FBFAFC',
  gray: '#959595',
  d_gray: '#505050',
  l_gray: '#D1D1D1',
  m_gray: '#848484',
  mint: '#5FC6AD',
};

const fontSize: {[key: string]: string} = {
  font_15: '1.5rem',
  font_18: '1.8rem',
  font_20: '2rem',
  font_28: '2.8rem',
  font_36: '3.6rem',
  font_50: '5rem'
};

const border = {
  borderSet: `
    border : none;
    border-radius : 1rem;
  `,
};

const fontWeight: {[key: string]: string} = {
  DemiLight: '300',
  Regular: '400',
  Medium: '500',
  Bold: '700',
};

const flex = {
  flexCenter: `
    display : flex;
    justify-content : center;
    align-items: center;
  `,
  flexCenterColumn: `
    display : flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  `,
  flexSpacebetween: `
    display: flex;
    justify-content: space-between;
  `,
  flexColumn: `
    display:flex;
    flex-direction:column;
  `,
};

const theme = {
  color,
  fontSize,
  fontWeight,
  border,
  flex
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;