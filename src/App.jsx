import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Home from './screen/home';
import Music from './screen/music';
import Dashboard from './screen/dashboard';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import theme from './config/theme';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <React.Fragment>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/music" element={<Music />} />
            <Route exact path="/dashboard" element={<Dashboard/>} />
          </Routes>
        </React.Fragment>
      </Router>
    </ChakraProvider>
  );
}

export default App;
