import React from 'react';
import { Box, Flex, Heading, Badge } from '@chakra-ui/react';

type Props = {
  title: String;
  labels: String[];
};

const BadgePanel: React.VFC<Props> = ({ title, labels }) => {
  return (
    <Box bg="white" borderRadius="md" pb="5">
      <Heading as="h3" size="md" textAlign="center" py="5">
        {title}
      </Heading>
      <Flex flexWrap="wrap" justifyContent="start" mx={3}>
        {labels.map((label, index) => {
          return (
            <Badge
              key={index}
              borderWidth="thin"
              borderColor="blue.400"
              borderRadius="full"
              color="blue.400"
              fontSize="md"
              textTransform="none"
              m={2}
            >
              {label}
            </Badge>
          );
        })}
      </Flex>
    </Box>
  );
};

export default BadgePanel;
