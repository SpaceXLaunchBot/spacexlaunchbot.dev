import React from 'react';
import {
  Routes, Route, Link,
} from 'react-router-dom';

import {
  Flex, HStack, Heading, VStack, Button,
} from '@chakra-ui/react';

import ThemeButton from './components/ThemeButton';
import Home from './routes/Home';
import StatsPage from './routes/StatsPage';

export default function App() {
  return (
    <Flex width="70%" height="100vh" margin="auto" direction="column">
      <HStack flexGrow={1} maxHeight="4rem" paddingTop="1rem" width="100%" justifyContent="space-around">
        <HStack spacing={10}>
          <Link to="/" style={{ marginTop: 'auto' }}>
            <Heading alignSelf="start">SpaceX Launch Bot</Heading>
          </Link>
          <Link to="/stats" style={{ marginTop: 'auto' }}>
            <Button variant="link" fontSize="1.5rem">Stats</Button>
          </Link>
          <Button
            marginTop="auto !important"
            variant="link"
            fontSize="1.5rem"
            onClick={() => { window.open('https://top.gg/bot/411618411169447950', '_blank')?.focus(); }}
          >
            Top.gg
          </Button>
          <Button
            marginTop="auto !important"
            variant="link"
            fontSize="1.5rem"
            onClick={() => { window.open('https://github.com/SpaceXLaunchBot', '_blank')?.focus(); }}
          >
            GitHub
          </Button>
        </HStack>
        <ThemeButton />
      </HStack>
      <VStack flexGrow={9} justifyContent="space-around">
        <Routes>
          <Route index element={<Home />} />
          <Route path="stats" element={<StatsPage />} />
        </Routes>
      </VStack>
    </Flex>
  );
}
