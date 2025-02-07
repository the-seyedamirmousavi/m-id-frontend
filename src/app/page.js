'use client'; 
import { useContext , createContext } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageWithTitles from "../components/ImageWithTitles";
import LastNews from "../components/LastNews";
import FullScreenSlider from "../components/FullScreenSlider";
import TextParagraph from "../components/TextParagraph";
import Link from "next/link";
import styles from './home.module.css';

export default function Index() {


  return (
    <>
      <Head>
        <title>M-ID</title>
        <meta name="description" content="Welcome to M-ID - Technology for well-being" />
      </Head>

      <div style={{ 
        width: '100vw',
        height: '100vh', 
        overflowY: 'auto', 
        alignItems: 'center',
        backgroundColor : '#f0f2f5',
        justifyContent: 'flex-start', 
      }}>
                
        <FullScreenSlider />

        <TextParagraph
          title={"Do You Want to Change Your Life?"}
          paragraph={"By creating M-ID, open the door to a new and secure world of digital services. You'll have easy access to all our services while ensuring the safety of your information."}
          htmlContent={
            <Link 
              className={styles.ctaButton}
              href="http://localhost:9000/oauth2/authorize?response_type=code&client_id=oidc-web-m-id&scope=profile&redirect_uri=http://localhost:3000/auth/callback/code&state=someState">Sign up</Link>  
          }
        />

        <ImageWithTitles
        imageSrc="/images/FitSho.png"
        altText="FitSho Image"
        titles={{
          heading: 'Your Health Journey Starts Here!',
          description: 'Discover the best tools to achieve your health and fitness goals with FitSho.'
        }}
        reverse={true}
        />

        <ImageWithTitles  
        imageSrc="/images/FitSho.png"
        altText="FitSho Image"
        titles={{
          heading: 'Your Health Journey Starts Here!',
          description: 'Discover the best tools to achieve your health and fitness goals with FitSho.'
        }}
        
        />

        <TextParagraph
          title={"Do You Want to Change Your Life?"}
          paragraph={"By creating M-ID, open the door to a new and secure world of digital services. You'll have easy access to all our services while ensuring the safety of your information."}
          htmlContent={
            <Link 
              className={`${styles.ctaButton} txt`}
              href="http://localhost:9000/oauth2/authorize?response_type=code&client_id=oidc-web-mutec&scope=profile&redirect_uri=http://192.168.1.5:3000/auth/callback/code&state=someState">Sign up</Link>  
          }
        />

        <LastNews />
        <Footer />

      </div>
    </>
  );
}
