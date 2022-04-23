import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Carousel from './carousel';
import Features from './features';
import Price from './price';
import Header from '../../components/header';
import Player from './player';
import Footer from '../../components/footer';

const Home = () => {
  return (
    <>
      <Header />
      <Player />
      <Footer />
    </>
  );
};

export default Home;
