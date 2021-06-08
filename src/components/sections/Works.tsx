import React, { useContext } from 'react';
import { Box, Heading, VStack, Grid } from '@chakra-ui/react';

import Card from '../parts/Card';
import { PortfolioContext } from '../../context';

const Works: React.VFC = () => {
  const { worksData } = useContext(PortfolioContext);
  const { works } = worksData;

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
          {works.map((work, index) => {
            const { imageUrl, label, info, technology } = work;
            return (
              <Card
                imageUrl={imageUrl}
                label={label}
                info={info}
                technology={technology}
                key={index}
              />
            );
          })}
        </Grid>
      </VStack>
    </Box>
  );
};

export default Works;
