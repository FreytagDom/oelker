import { GlobalStyle } from "../components/GlobalStyle";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head> 
      <link rel="icon" href="/KlopfzeichenFavicon.jpg" />
    </Head>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
