import Header from "@/components/Header";
import { GlobalStyle } from "../components/GlobalStyle";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
