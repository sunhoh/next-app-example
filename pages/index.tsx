import { Inter } from "next/font/google";
import Main from "container/Main/Main";
import Helmet from "components/html-head/Helmet";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Helmet title="next-app" description="next-app-example" image="" url="" />
      <Main />
    </>
  );
}
