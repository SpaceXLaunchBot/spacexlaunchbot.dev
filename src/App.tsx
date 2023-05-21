import React from 'react';

import {
  Box, HStack, Heading, Text, VStack,
} from '@chakra-ui/react';

import Invite from './components/Invite';
import Stats from './components/Charts';

export default function App() {
  return (
    <Box width="40%" margin="auto">
      <HStack justifyContent="space-between">
        <Heading>SpaceX Launch Bot</Heading>
      </HStack>
      <HStack>
        <VStack>
          <Text>News, information, and notifications about SpaceX launches</Text>
          <Invite />
        </VStack>
        <Stats />
      </HStack>
    </Box>
  );
}
