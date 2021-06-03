import React from 'react';
import { Box, Heading, VStack, Grid } from '@chakra-ui/react';

import Card from '../parts/Card';
import { WorkType } from '../../types';

const workItems: WorkType[] = [
  {
    imageUrl: '/images/works-dummy-thumb.jpg',
    label: 'ポートフォリオサイト',
    info: 'Design / Coding(Responsive) / WordPress',
    technology: ['React', 'Gatsby', 'Chakra UI'],
  },
  {
    imageUrl: '/images/works-dummy-thumb.jpg',
    label: 'あとだしじゃんけん',
    info: 'Design / Coding(Responsive) / WordPress',
    technology: ['React', 'React Spring', 'Tailwindcss', 'Tensorflowjs'],
  },
  {
    imageUrl: '/images/works-dummy-thumb.jpg',
    label: '画像分類 (じゃんけん）',
    info: 'Design / Coding(Responsive) / WordPress',
    technology: ['Python', 'Keras', 'Matplotlib', 'OpenCV', 'Scikit-learn'],
  },
];

const Works: React.VFC = () => {
  return (
    <Box as="section" py="20" backgroundColor="gray.100" id="works">
      <VStack maxWidth={{ base: 'sm', md: '2xl', lg: '4xl' }} mx="auto">
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
            return <Card item={item} key={index} />;
          })}
        </Grid>
      </VStack>
    </Box>
  );
};

export default Works;
