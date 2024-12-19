'use client'; 
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../components/Header.module.css";
import LinearLayout from "../components/LinearLayout";
import FullScreenSlider from "../components/FullScreenSlider";
import DropdownButton from "../components/DropdownButton";

export default function Index() {
    const menuStructure = {
        name: "Main Menu",
        items: [
          { name: "Dashboard", url: "/dashboard" },
          { name: "Reports", url: "/reports" },
          { name: "Help", url: "/help" },
        ],
      };
      
    return (
        <>
            <Head>
                <title>MUTec</title>
                <meta name="description" content="home page" />
            </Head>

            <div>
            <Header >
          {{
            left: <LinearLayout height="auto" positon="fixed">
                <DropdownButton title="Home"/>
                <DropdownButton title="Setting" />
                <DropdownButton title="Profile" />
            </LinearLayout>,
            right: <LinearLayout height="auto">
                <button className={styles.iconButton}>sign up</button>
              </LinearLayout>
          }}
          </Header>
          
          <FullScreenSlider/>
          <FullScreenSlider/>
          <FullScreenSlider/>
          <FullScreenSlider/>

          <Footer />
          </div>
        </>
    );
}