import type { AppProps } from 'next/app';
import { Montserrat, Dancing_Script } from 'next/font/google';
import Navbar from '../components/Navbar/Navbar';
import ChatWidget from '@/components/ChatWidget';
import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/next';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${montserrat.style.fontFamily};
          --font-script: ${dancingScript.style.fontFamily};
        }
      `}</style>
      <Navbar />
      <Component {...pageProps} />
      <ChatWidget />
      <Analytics />
    </>
  );
}
