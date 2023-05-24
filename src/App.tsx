import React from 'react';
import {
  Routes, Route, Link,
} from 'react-router-dom';

import {
  Flex, HStack, Heading, VStack, Button,
} from '@chakra-ui/react';

import Home from './routes/Home';
import MiscButtons from './components/MiscButtons';
import StatsPage from './routes/StatsPage';

export default function App() {
  return (
    <Flex width="70%" height="100vh" margin="auto" direction="column">
      <HStack flexGrow={1} maxHeight="4rem" paddingTop="1rem" width="100%" justifyContent="space-around">
        <Link to="/">
          <Heading alignSelf="start">SpaceX Launch Bot</Heading>
        </Link>
        <Link to="/stats">
          <Button variant="link">Stats</Button>
        </Link>
        <MiscButtons />
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
