import '@/styles/globals.css';
import '@/styles/reset.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['200', '400', '600', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  <style jsx global>{`
    body {
      font-family: ${inter.style.fontFamily};
    }
  `}</style>;
  return <Component {...pageProps} />;
}
