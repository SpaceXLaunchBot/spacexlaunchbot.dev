import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

// System sets initial value.
// App color mode is detached from system color mode changes.
const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode('#fff', '#1c1b22')(props),
      },
    }),
  },
});

export default theme;
