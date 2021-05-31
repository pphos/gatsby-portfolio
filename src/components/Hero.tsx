import React from 'react';
import { Flex, Heading, VStack, Text } from '@chakra-ui/react';

const Hero: React.VFC = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      height={{ base: '85vh', md: '95vh' }}
      bgImage="linear-gradient(to left, rgba(54, 209, 220, 0.7) , rgba(91, 134, 229, 0.8)), url('/images/hero_image.jpg')"
    >
      <VStack spacing="1">
        <Heading size="3xl" letterSpacing="0.1em" color="white">
          PPHOS
        </Heading>
        <Text
          fontSize={{ base: 'lg', md: 'xl' }}
          fontWeight="bold"
          letterSpacing="0.1em"
          color="white"
        >
          PORTFOLIO
        </Text>
        <Text fontSize={{ base: 'md', md: 'lg' }} color="white" pt="3">
          私のポートフォリオサイトです。
        </Text>
      </VStack>
    </Flex>
  );
};

export default Hero;
