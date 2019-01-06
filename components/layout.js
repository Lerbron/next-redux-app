import React from 'react';
import Head from 'next/head'


export default ({children, title}) => (
  <div>
    <Head>
      <title>{ title || 'My page title'}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
  </div>
)