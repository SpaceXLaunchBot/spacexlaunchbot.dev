import React from 'react';

import { HStack, Text, VStack } from '@chakra-ui/react';
import { InfoIcon, BellIcon } from '@chakra-ui/icons';

import Invite from '../components/Invite';

export default function Home() {
  return (
    <VStack width="100%" height="75%" paddingBottom="10%" justifyContent="space-around">
      <VStack>
        <Text fontWeight="bold">News, information, and notifications about SpaceX launches</Text>
        <Invite />
      </VStack>
      <HStack width="100%" justifyContent="space-evenly">
        <VStack alignItems="flex-start" width="20em">
          <HStack>
            <InfoIcon />
            <Text fontWeight="bold">See Launch Information</Text>
          </HStack>
          <Text overflowWrap="break-word">See information about any previous or planned launch</Text>
        </VStack>
        <VStack alignItems="flex-start" width="20em">
          <HStack>
            <BellIcon />
            <Text fontWeight="bold">Launch Notifications</Text>
          </HStack>
          <Text overflowWrap="break-word">
            Subscribe a channel to the notification service and get instant
            notifications for launches
          </Text>
        </VStack>
        <VStack alignItems="flex-start" width="20em">
          <HStack>
            <BellIcon />
            <Text fontWeight="bold">Launch Changes</Text>
          </HStack>
          <Text>Get notified when an upcoming launch changes</Text>
        </VStack>
      </HStack>
    </VStack>
  );
}
