import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Main from "@/container/Main/Main";
import Helmet from "@/components/html-head/Helmet";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Helmet title="upvote" description="upvote hompage" image="" url="" />
      <Main />
    </>
  );
}
