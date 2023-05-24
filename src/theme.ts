import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

// System sets initial value.
// App color mode is detached from system color mode changes.
const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default theme;
