import React from 'react';
import { Box, Flex, Badge, Heading, Image, Text } from '@chakra-ui/react';

import { WorksItemType } from '../../types';

const Card: React.VFC<WorksItemType> = ({
  imageUrl,
  label,
  info,
  technology,
}) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      backgroundColor="white"
    >
      <Flex alignItems="center" p="3" minHeight={{ md: '20rem' }}>
        <Image src={imageUrl} />
      </Flex>
      <Box p="3">
        <Heading
          mt="1"
          fontSize="lg"
          as="h4"
          lineHeight="tight"
          textAlign="center"
        >
          {label}
        </Heading>
        <Text pt="3">{info}</Text>
        <Box pt="2">
          {technology.map((tech, index) => {
            return (
              <Badge
                key={index}
                borderWidth="thin"
                borderColor="blue.400"
                borderRadius="full"
                color="blue.400"
                fontSize="md"
                textTransform="none"
                m={1}
              >
                {tech}
              </Badge>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
