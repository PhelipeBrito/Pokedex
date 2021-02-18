import {createGlobalStyle} from 'styled-components';
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rosario&display=swap" rel="stylesheet" />
      </Head>

      <GlobalStyle />
      <Component {...pageProps} />
    </>
    )
}

export default MyApp
