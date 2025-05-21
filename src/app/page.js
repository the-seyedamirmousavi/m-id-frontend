'use client'
import Footer from "../components/Footer";
import ImageWithTitles from "../components/ImageWithTitles";
import LastNews from "../components/LastNews";
import DTO from "../components/DTO"
import FullScreenSlider from "../components/FullScreenSlider";
import TextParagraph from "../components/TextParagraph";
import { useAuth } from "./context/AuthContext";

export default function Index() {

  const {isAuthenticated} = useAuth();

  return (
      <div>
                
        <FullScreenSlider />

        <TextParagraph
          title={"Do You Want to Change Your Life?"}
          paragraph={"By creating M-ID, open the door to a new and secure world of digital services. You'll have easy access to all our services while ensuring the safety of your information."}
          htmlContent={
           !isAuthenticated && (<div className="mt-6 flex justify-center space-x-4">
            <DTO href={"https://auth.m-id.ir/oauth2/authorize?response_type=code&client_id=oidc-web-m-id&scope=profile&redirect_uri=https://m-id.ir/auth/callback/code&state=someState"} text={"Create Your Personal M-ID"}/>
          </div>)}
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
            <DTO href={"https://auth.m-id.ir/oauth2/authorize?response_type=code&client_id=oidc-web-m-id&scope=profile&redirect_uri=https://m-id.ir/auth/callback/code&state=someState"} text={"Create Your Personal M-ID"}/>
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
            <DTO text="Login and Register" href="https://auth.m-id.ir/oauth2/authorize?response_type=code&client_id=oidc-web-m-id&scope=profile&redirect_uri=https://m-id.ir/auth/callback/code&state=someState" />   

            {/* دکمه ثانویه - Outlined */}

            <DTO text="Learn More" href="/authorization-service" fill={false} />   

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
