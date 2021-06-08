import React, { useContext } from 'react';
import { VStack, Flex, Heading, Text, Image, Center } from '@chakra-ui/react';

import { PortfolioContext } from '../../context';

const About: React.VFC = () => {
  const { aboutData } = useContext(PortfolioContext);
  const { imageUrl, resume } = aboutData;

  return (
    <Flex
      as="section"
      alignItems="center"
      justifyContent="center"
      id="about"
      height="80vh"
    >
      <VStack maxWidth={{ base: 'sm', md: '2xl', lg: '4xl' }} px="6">
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
            src={imageUrl}
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
            <Text>{resume}</Text>
          </Center>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default About;
