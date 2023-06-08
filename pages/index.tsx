import AboutMe from "@components/aboutme";
import Masthead from "@components/masthead";
import Projects from "@components/projects";
import Skills from "@components/skills";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="This is my portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Masthead />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
