import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Box, BoxProps } from '@chakra-ui/react';

const MotionBox = motion<BoxProps>(Box);

const FadeInUpBox: React.FC = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const transition = {
    duration: 0.3,
    delay: 0.25,
    ease: 'easeIn',
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <MotionBox
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { y: 24, opacity: 0, transition },
        visible: { y: 0, x: 0, opacity: 1, transition },
      }}
    >
      {children}
    </MotionBox>
  );
};

export default FadeInUpBox;
