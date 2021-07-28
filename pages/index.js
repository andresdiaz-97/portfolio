import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div className='hero'>
        <div className='container2 typewriter'>
          <div className='unset'>
            <h1>Andres Diaz.</h1>
          </div>
          <p>I build responsive &amp; interactive websites.</p>
        </div>
      </div>
    </div>
  );
}
