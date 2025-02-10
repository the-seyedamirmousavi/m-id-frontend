'use client'; 
import Footer from "../components/Footer";
import ImageWithTitles from "../components/ImageWithTitles";
import LastNews from "../components/LastNews";
import FullScreenSlider from "../components/FullScreenSlider";
import TextParagraph from "../components/TextParagraph";
import Link from "next/link";
import styles from './home.module.css';

export default function Index() {


  return (
      <div style={{
        backgroundColor: 'var(--background-color)'
      }}>
                
        <FullScreenSlider />

        <TextParagraph
          title={"Do You Want to Change Your Life?"}
          paragraph={"By creating M-ID, open the door to a new and secure world of digital services. You'll have easy access to all our services while ensuring the safety of your information."}
          htmlContent={
            

        

<div className="mt-6 flex justify-center space-x-4">
  {/* دکمه اصلی - Filled */}
  <Link 
        href="http://localhost:9000/oauth2/authorize?response_type=code&client_id=oidc-web-m-id&scope=profile&redirect_uri=http://localhost:3000/auth/callback/code&state=someState"

    className="no-underline inline-block px-8 py-4 text-lg font-semibold text-white bg-[var(--primary-color)] rounded-full shadow-md hover:bg-[var(--primary-color-hover)] transition-all duration-300 focus:ring-4 focus:ring-[var(--primary-color-focus)]">
    Create Your Personal M-ID
  </Link>


</div>

          }
        />

        <ImageWithTitles
        imageSrc="/images/FitSho.png"
        altText="FitSho Image"
        titles={{
          heading: 'One Registration, Infinite Logins',
          description: 'With M-ID, you only register once and gain seamless access to all our services and connected platforms. Say goodbye to multiple sign-ups and forgotten passwords! Experience ultra-fast and highly secure authentication that transforms the way you log in. M-ID is your digital key to a smarter, frictionless world!'
        }}
        reverse={true}
        child={ 
          <div className="mt-6 flex justify-start mt-5">
            {/* دکمه اصلی - Filled */}
            <Link 
              href="http://localhost:9000/oauth2/authorize?response_type=code&client_id=oidc-web-m-id&scope=profile&redirect_uri=http://localhost:3000/auth/callback/code&state=someState"
              className="no-underline inline-block px-8 py-4 text-lg font-semibold text-white bg-[var(--primary-color)] rounded-full shadow-md hover:bg-[var(--primary-color-hover)] transition-all duration-300 focus:ring-4 focus:ring-[var(--primary-color-focus)]">
              Create Your Personal M-ID
            </Link>
          </div>
        }
        />

        <ImageWithTitles  
        imageSrc="/images/FitSho.png"
        altText="FitSho Image"
        titles={{
          heading: 'M-ID Auth – The Future of Seamless Authentication for Businesses',
          description: 'Empower your platform with M-ID Auth, a next-generation identity provider designed for businesses and developers. Enable your users to log in securely across multiple services with a single identity. With industry-leading security, OAuth2, and OpenID Connect support, M-ID Auth ensures seamless integration, reducing friction while enhancing trust. Say hello to a smarter, safer authentication experience!'
        }}
        child={ 
          <div className="mt-6 flex justify-start mt-5 space-x-4">
            {/* دکمه اصلی - Filled */}
            <Link 
                  href="http://localhost:9000/oauth2/authorize?response_type=code&client_id=oidc-web-m-id&scope=profile&redirect_uri=http://localhost:3000/auth/callback/code&state=someState"

              className="no-underline inline-block px-8 py-4 text-lg font-semibold text-white bg-[var(--primary-color)] rounded-full shadow-md hover:bg-[var(--primary-color-hover)] transition-all duration-300 focus:ring-4 focus:ring-[var(--primary-color-focus)]">
              Login and Register Your Client
            </Link>

            {/* دکمه ثانویه - Outlined */}
            <Link 
              href="/authorization-service"
              className="no-underline inline-block px-8 py-4 text-lg font-semibold text-[var(--primary-color)] border-2 border-[var(--primary-color)] rounded-full shadow-sm hover:bg-[var(--primary-color-hover)] hover:text-white transition-all duration-300 focus:ring-4 focus:ring-[var(--primary-color-focus)]">
              Learn More
            </Link>
          </div>
        }
        />

<ImageWithTitles
        imageSrc="/images/FitSho.png"
        altText="FitSho Image"
        titles={{
          heading: 'M-ID Health – The Path to a Healthy and Professional Life',
          description: 'Modern life, high speed, endless challenges… but where does your health fit in? M-ID Health is your companion for a life where you can stay healthy and succeed at the highest level A new lifestyle is on the way… Are you ready?'
        }}
        reverse={true}
        />


        <TextParagraph
          title={"Be the most professional version of yourself with M-ID"}
          paragraph={"With M-ID, unlock a world of endless possibilities that make your life smarter, simpler, and more professional. Everything here is designed to help you become your best self"}
        />

        <LastNews />
        <Footer />

      </div>
  );
}
