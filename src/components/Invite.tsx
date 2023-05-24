import React from 'react';

import { Button, Text } from '@chakra-ui/react';

import DiscordIcon from './DiscordIcon';

const inviteUrl = 'https://discord.com/oauth2/authorize?client_id=411618411169447950&scope=bot&permissions=2147614720';

export default function Invite() {
  const inviteClicked = () => {
    window.open(inviteUrl, '_blank');
  };

  return (
    <Button onClick={inviteClicked} onKeyDown={inviteClicked} role="button" borderRadius="0.5em">
      <DiscordIcon />
      <Text marginLeft="0.5em" fontWeight="bold">Add SpaceXLaunchBot</Text>
    </Button>
  );
}
