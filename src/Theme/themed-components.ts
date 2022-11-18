import * as sytledComponents from 'styled-components';

import { Theme } from './theme';

const {
  default: styled,
  css,
  ThemeProvider,
} = sytledComponents as sytledComponents.ThemedStyledComponentsModule<Theme>;

export { css, ThemeProvider};

export default styled;
