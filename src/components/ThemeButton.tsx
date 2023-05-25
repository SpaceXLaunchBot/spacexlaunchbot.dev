import React from 'react';

import { useColorMode, Button } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function ThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (

    <Button variant="outline" onClick={toggleColorMode}>
      {colorMode === 'light' ? <MoonIcon boxSize={5} /> : <SunIcon boxSize={5} />}
    </Button>
  );
}
