import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

import "@fortawesome/fontawesome-free";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar2 />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
