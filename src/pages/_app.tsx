import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import 'styles/style.scss';
import 'core-js/es/object/assign';

if (typeof window === 'object') {
  require('intersection-observer');
}

class MyApp extends App {
  public props: any;

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>️Colorization</title>
          <meta name="description" content="" />
          <link rel="icon" href={'static/images/favicon.ico'} type="image/x-icon"/>
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
