import '../styles/globals.css'
import type { AppContext, AppInitialProps, AppProps } from 'next/app';
import App from 'next/app';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { GetStaticProps } from 'next';
import type { Product } from '@ent-product/types';
import productApi from '@ent-product/api';

const MyApp: React.FC<AppProps> = ({ Component, pageProps })=> {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;