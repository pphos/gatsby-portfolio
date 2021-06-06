import React from 'react';
import { VStack, Flex, Heading, Text, Image, Center } from '@chakra-ui/react';

const About: React.VFC = () => {
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
            src="/images/profile.png"
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
              大学で情報工学を学び、学士及び修士研究では機械学習を用いた画像認識に取り組む。その後、新卒で都内の通信会社にエンジニアとして入社し、AWS上でCloudFormationを活用したシステム構築業務に従事。
            </Text>
          </Center>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default About;
