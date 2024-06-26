import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../public/fonts/SF-Pro.woff' })

export default function App({ Component, pageProps }: AppProps) {
  return <main className={myFont.className}>
     <Component {...pageProps} />;
  </main>;
}
