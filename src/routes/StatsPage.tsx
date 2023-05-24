import React from 'react';

import { Flex } from '@chakra-ui/react';

import Charts from '../components/Charts';

export default function StatsPage() {
  return (
    <Flex height="75%" paddingBottom="10%" justifyContent="space-around" direction="column">
      <Charts />
    </Flex>
  );
}
