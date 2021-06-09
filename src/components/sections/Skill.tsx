import React, { useContext } from 'react';
import { VStack, Flex, SimpleGrid, Heading } from '@chakra-ui/react';

import FadeInUpBox from '../animations/FadeInUpBox';
import BadgePanel from '../parts/BadgePanel';
import { PortfolioContext } from '../../context';

const Skill: React.VFC = () => {
  const { skillData } = useContext(PortfolioContext);
  const { skills } = skillData;

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
      <FadeInUpBox>
        <VStack width={{ base: '75%', md: '80%', lg: '75%' }} mx="auto">
          <Heading as="h2" size="xl" color="blue.500">
            SKILL
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing="10"
            px={{ base: 'xl', md: 10 }}
            pt="5"
          >
            {skills.map((skill, index) => {
              return (
                <BadgePanel
                  title={skill.title}
                  labels={skill.technology}
                  key={index}
                />
              );
            })}
          </SimpleGrid>
        </VStack>
      </FadeInUpBox>
    </Flex>
  );
};

export default Skill;
