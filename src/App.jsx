import React from 'react';
import './App.css';

import {Marca, Cta, Navbar} from './components/Index';
import { Footer, Blog, Possibility, Features, Whatgpt3, Header } from './containers/Index'

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Marca />
    <Whatgpt3 />
    <Features />
    <Possibility />
    <Cta />
    <Blog />
    <Footer />
  </div>
);

export default App;