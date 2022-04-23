import React, { useState } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Carousel from './carousel';
import Features from './features';
import Price from './price';
import Header from '../../components/header';
import Modal from '../../components/modal';
import Footer from '../../components/footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  console.log('🚀 ~ file: index.js ~ line 12 ~ Home ~ showModal', showModal);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const handleClick = () => navigate('/dashboard');

  return (
    <>
      <Header handleShow={() => handleShow()} />
      <Carousel />
      <Features />
      <Price />
      <Footer />
      <Modal
        show={showModal}
        handleClose={() => handleClose()}
        handleShow={() => handleShow()}
        handleClick={() => handleClick()}
      />
    </>
  );
};

export default Home;
