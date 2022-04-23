import React, {useState} from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Carousel from './carousel';
import Features from './features';
import Price from './price';
import Header from './../../components/header';
import Modal from './../../components/modal';
import Footer from './../../components/footer';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  console.log("🚀 ~ file: index.js ~ line 12 ~ Home ~ showModal", showModal)

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Header handleShow={() => handleShow()} />
      <Carousel />
      <Features />
      <Price />
      <Footer />
      <Modal show={showModal} handleClose={() => handleClose()} handleShow={()=> handleShow()} />
    </>
  );
};

export default Home;
