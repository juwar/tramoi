import React, {useState} from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import Footer from '../../components/footer';

const Home = () => {

  return (
    <>
      <Header />
      <Sidebar />
      <Footer />
    </>
  );
};

export default Home;
