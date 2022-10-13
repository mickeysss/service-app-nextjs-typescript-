import { AppProps } from "next/app";
import Head from 'next/head';
import { Button, Title } from "components";
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
      <>
          <Head>
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
                  <link rel="preconnect" href="https://fonts.gstatic.com"   />
                      <link
                          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap"
                          rel="stylesheet"/>
          </Head>
          <Title tag="h1">
              Курсы по Photoshop
          </Title>
          <Title tag="h2">
              Курсы по Photoshop
          </Title>
          <Title tag="h3">
              Курсы по Photoshop
          </Title>
          <Button appearance="primary">
              Submit
          </Button>
          <Button appearance="ghost" arrow="right">
              Open
          </Button>
        <Component {...pageProps} />
  </>
)
}

export default MyApp
