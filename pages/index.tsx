import AboutMe from "@components/aboutme";
import Masthead from "@components/masthead";
import Skills from "@components/Skills";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Masthead />
      <AboutMe />
      <Skills />
    </div>
  );
};

export default Home;
