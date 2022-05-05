import '../../styles/globals.css'
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app'
import Header from "../_pages/components/Header/Header";
import Head from "next/head";
import {Button, Snackbar, SnackbarContent} from "@mui/material";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import lightTheme from "../../styles/theme/light";
import createEmotionCache from '../../utility/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache}: AppProps) {
  return <CacheProvider value={emotionCache}>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Header position='sticky' color='transparent' elevation={0}/>
      <Component {...pageProps} />
      <footer className={styles.footer}>
        <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
        </a>
      </footer>
      <Snackbar open={true} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <SnackbarContent
            style={{backgroundColor: 'rgba(50, 50, 50, .45)'}}
            message='By continuing to use this site, you understand that we are not an investment advisor and our content is intended to be used for information and education purposes only.'
            action={<>
            <Button color='secondary' size="small">
              LEAVE
            </Button>
              <Button color="inherit" size="small">
              AGREE
            </Button>
            </>}/>
      </Snackbar>
    </ThemeProvider>
  </CacheProvider>;
}

export default MyApp
