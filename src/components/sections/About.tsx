import React from 'react';
import { VStack, Flex, Heading, Text, Image, Center } from '@chakra-ui/react';

const About: React.VFC = () => {
  return (
    <Flex
      as="section"
      alignItems="center"
      justifyContent="center"
      id="About"
      height="80vh"
    >
      <VStack maxWidth={{ base: 'sm', md: '2xl', lg: '4xl' }}>
        <Heading as="h2" size="xl" color="blue.500">
          ABOUT
        </Heading>
        <Flex
          flexWrap="wrap"
          justifyContent="center"
          maxWidth="5xl"
          display={{ base: 'block', md: 'flex' }}
        >
          <Image
            borderRadius="full"
            src="/images/profile.jpg"
            alt=""
            width={{ base: '30%', md: '15%' }}
            mx={{ base: 'auto', md: '0' }}
            mr={{ base: 'auto', md: '5' }}
          />
          <Center
            flexGrow={1}
            flexShrink={1}
            flexBasis={0}
            pt={{ base: '5', md: '0' }}
          >
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              quia illum dolores rem, explicabo obcaecati ratione quo?
              Reprehenderit, magni libero voluptates a labore corrupti esse,
              sequi repellendus tempore vel ipsa?
            </Text>
          </Center>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default About;
