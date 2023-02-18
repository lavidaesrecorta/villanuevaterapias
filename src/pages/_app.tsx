import '@/styles/globals.css'
import Navbar from '@atomic/organisms/navbar/Navbar'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
      <title>Andrea Villanueva | Terapias Alternativas - Alcanza la paz interior</title>
      </Head>
      <Navbar logoSrc='/andrea/logo.png' />
      <Component {...pageProps} />
    </div>
  )
}
