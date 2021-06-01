import React from 'react';
import {
  Box,
  Heading,
  VStack,
  Grid,
  GridItem,
  Link,
  Text,
  Image,
} from '@chakra-ui/react';

import { WorkType } from '../types';

const workItems: WorkType[] = [
  {
    imageUrl: '/images/works-sample-thumb.jpg',
    label: '作品名が入る',
    info: 'Design / Coding(Responsive) / WordPress',
  },
  {
    imageUrl: '/images/works-dummy-thumb.jpg',
    label: '作品名が入る',
    info: 'Design / Coding(Responsive) / WordPress',
  },
  {
    imageUrl: '/images/works-dummy-thumb.jpg',
    label: '作品名が入る',
    info: 'Design / Coding(Responsive) / WordPress',
  },
  {
    imageUrl: '/images/works-dummy-thumb.jpg',
    label: '作品名が入る',
    info: 'Design / Coding(Responsive) / WordPress',
  },
  {
    imageUrl: '/images/works-dummy-thumb.jpg',
    label: '作品名が入る',
    info: 'Design / Coding(Responsive) / WordPress',
  },
];

const Works: React.VFC = () => {
  return (
    <Box as="section" py="20" backgroundColor="gray.100" id="works">
      <VStack px="10">
        <Heading as="h2" size="xl" color="blue.500">
          WORKS
        </Heading>
        <Grid
          templateColumns={{
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap="5"
          pt="5"
        >
          {workItems.map((item, index) => {
            return (
              <GridItem>
                <Link _hover={{ textDecoration: 'none' }}>
                  <Image
                    src={item.imageUrl}
                    alt=""
                    borderColor="gray.100"
                    mx="auto"
                  />
                  <Text fontSize="md" textAlign="center" pt="2">
                    {item.label}
                  </Text>
                </Link>
              </GridItem>
            );
          })}
        </Grid>
      </VStack>
    </Box>
  );
};

export default Works;
