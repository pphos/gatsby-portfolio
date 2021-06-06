import React from 'react';
import { VStack, Flex, SimpleGrid, Heading } from '@chakra-ui/react';

import BadgePanel from '../parts/BadgePanel';

const bussinessSkill = [
  'AWS',
  'Javascript',
  'Python',
  'Lambda',
  'CloudFormation',
];
const hobbySkill = [
  'React',
  'Gatsby',
  'Tailwindcss',
  'Chakra UI',
  'TypeScript',
  'Rust',
];
const certificationSkill = [
  'AWS SOA',
  'AWS DVA',
  'AWS SAA',
  '応用情報技術者',
  '基本情報技術者',
];

const Skill: React.VFC = () => {
  return (
    <Flex
      as="section"
      alignItems="center"
      justifyContent="center"
      backgroundColor="gray.100"
      py={{ base: 20, lg: 0 }}
      height={{ base: 'full', lg: '80vh' }}
      id="skill"
    >
      <VStack width={{ base: '75%', md: '80%', lg: '75%' }}>
        <Heading as="h2" size="xl" color="blue.500">
          SKILL
        </Heading>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing="10"
          px={{ base: 'xl', md: 10 }}
          pt="5"
        >
          <BadgePanel title="Bussiness" labels={bussinessSkill} />
          <BadgePanel title="Hobby" labels={hobbySkill} />
          <BadgePanel title="Certification" labels={certificationSkill} />
        </SimpleGrid>
      </VStack>
    </Flex>
  );
};

export default Skill;
