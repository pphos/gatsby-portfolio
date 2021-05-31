import React from 'react';
import {
  Box,
  Heading,
  VStack,
  Grid,
  GridItem,
  Link,
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
      <VStack>
        <Heading as="h2" size="xl" color="blue.500" li>
          WORKS
        </Heading>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap="10"
        >
          {workItems.map((item, index) => {
            return (
              <GridItem>
                <Link>
                  <Image
                    src={item.imageUrl}
                    alt=""
                    borderColor="gray.100"
                    mx="auto"
                  />
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
