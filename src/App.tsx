import React from 'react';

import {
  Box, HStack, Heading, Text, VStack,
} from '@chakra-ui/react';

import Invite from './components/Invite';
import Stats from './components/Charts';
import MiscButtons from './components/MiscButtons';

export default function App() {
  return (
    <Box width="70%" margin="auto">
      <HStack width="100%" justifyContent="space-around">
        <VStack>
          <Heading alignSelf="start">SpaceX Launch Bot</Heading>
          <Text align="left">News, information, and notifications about SpaceX launches</Text>
        </VStack>
        <MiscButtons />
      </HStack>
      <VStack marginTop="3rem" spacing={8}>
        <Invite />
        <Stats />
      </VStack>
    </Box>
  );
}
