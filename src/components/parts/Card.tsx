import React from 'react';
import { Box, Badge, Heading, Image, Text } from '@chakra-ui/react';

import { WorkType } from '../../types';

type Props = {
  item: WorkType;
};

const Card: React.VFC<Props> = ({ item }) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      backgroundColor="white"
    >
      <Image src={item.imageUrl} alt="" />
      <Box p="3">
        <Heading
          mt="1"
          fontSize="lg"
          as="h4"
          lineHeight="tight"
          textAlign="center"
        >
          {item.label}
        </Heading>
        <Text pt="3">{item.info}</Text>
        <Box pt="2">
          {item.technology.map((technology, index) => {
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
                {technology}
              </Badge>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
