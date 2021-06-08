import React, { useContext } from 'react';
import { Flex, Heading, VStack, Text } from '@chakra-ui/react';

import { PortfolioContext } from '../../context';

const Hero: React.VFC = () => {
  const { heroData } = useContext(PortfolioContext);
  const { title, subtitle, lead } = heroData;

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      height={{ base: '85vh', md: '95vh' }}
      bgImage="linear-gradient(to left, rgba(54, 209, 220, 0.7) , rgba(91, 134, 229, 0.8)), url('/images/hero_image.jpg')"
    >
      <VStack spacing="1">
        <Heading size="4xl" letterSpacing="0.1em" color="white">
          {title}
        </Heading>
        <Text
          fontSize={{ base: 'xl', md: '2xl' }}
          fontWeight="bold"
          letterSpacing="0.1em"
          color="white"
        >
          {subtitle}
        </Text>
        <Text
          fontSize={{ base: '2xl', md: '3xl' }}
          fontWeight="semibold"
          color="white"
          pt="3"
        >
          {lead}
        </Text>
      </VStack>
    </Flex>
  );
};

export default Hero;
