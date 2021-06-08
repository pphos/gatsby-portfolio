import React from 'react';
import { Box, Heading, VStack, Grid } from '@chakra-ui/react';

import Card from '../parts/Card';
import { WorkType } from '../../types';

const workItems: WorkType[] = [
  {
    imageUrl: '/images/works-gatsby-portfolio.png',
    label: 'ポートフォリオサイト',
    info:
      'GatsbyとChakra UIの練習も兼ねて作成しました。レスポンシブ対応はまだ甘いです。',
    technology: ['React', 'Gatsby', 'Chakra UI'],
  },
  {
    imageUrl: '/images/works-react-rps.png',
    label: 'あとだしじゃんけん',
    info: '某脳トレゲームをReactとTensorflowjsを使って再現しました。',
    technology: ['React', 'React Spring', 'Tailwindcss', 'Tensorflowjs'],
  },
  {
    imageUrl: '/images/works-keras-mnist.png',
    label: '画像分類 (じゃんけん）',
    info:
      '定番モデルをKerasで作成しました。学習画像の生成から前処理も行いました。',
    technology: ['Python', 'Keras', 'Matplotlib', 'OpenCV', 'Scikit-learn'],
  },
];

const Works: React.VFC = () => {
  return (
    <Box as="section" py="20" backgroundColor="gray.100" id="works">
      <VStack maxWidth={{ base: 'lg', md: '2xl', lg: '6xl' }} mx="auto" p="6">
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
