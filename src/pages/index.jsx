import React from 'react';
import { withSeo } from '@utils';
import { Page } from '@layouts';
import { Button } from '@components';
import Header from '@components/Header';
import Navbar from '@components/Navbar';
import About from '@components/About';
import SearchWidget from '@components/SearchWidget';
import '@styles/pages/Index.scss';

const IndexPage = () => {
  return (
    <Page id='home' className='index'>
      <Navbar/>
      <Header />
      <About />
      <SearchWidget/>
      <Button id='contact' className='index__button' to='/selectionTest'>
        Select A Story
      </Button> 
      
    </Page>
  );
};

export default withSeo(IndexPage, {
  title: 'Home',
});