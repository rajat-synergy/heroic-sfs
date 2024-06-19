import Image from "next/image";
import styles from "./page.module.css";
import Services from "./services/page";
import About from "./about/page";
import Achievements from "./achievements/page";
import Blog from "./blog/page";




const  Home = () => {
  return (
    <>
    <main>
      <Services />
      <About />
      <Achievements />
      <Blog />
    </main>
    </>
  );
}
export default Home;