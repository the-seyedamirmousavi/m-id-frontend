'use client'; 
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ImageWithTitles from "../../components/ImageWithTitles";
import TextParagraph from "../../components/TextParagraph";
import TextTitle from "../../components/TextTitle";

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
        justifyContent: 'flex-start', 
      }}>
        
        <TextTitle title={"Ready to elevate your app’s security to the next level ?"} />

        <TextParagraph 
          title={"Advanced Authentication Service for Unmatched Security of Your Application"} 
          paragraph={"Security is the cornerstone of any successful app. With cyber threats on the rise, ensuring that your users' data is safe and your systems are protected has never been more critical. That's where M-ID comes in. Our cutting-edge Authorization Service provides robust security features that streamline authentication processes, prevent unauthorized access, and guarantee that only the right people have access to your most sensitive data. Whether you're building a startup or scaling an enterprise, M-ID empowers you to safeguard your app with ease, allowing you to focus on what matters most—innovation and growth."} 
        />

        <ImageWithTitles
          imageSrc="/images/FitSho.png"
          altText="FitSho Image"
          titles={{
            heading: 'Quick Login with MID OpenID',
            description: 'With MID’s quick login service, you can easily and instantly access your account without the need to remember passwords or deal with complex information. Simply log in using your MID account via OpenID, and we’ll only collect basic information such as your first and last name. This service is perfect for those who want quick access and don’t need to deal with complex security processes.'
          }}
          reverse={true}
        />


        <ImageWithTitles
          imageSrc="/images/FitSho.png"
          altText="FitSho Image"
          titles={{
            heading: 'Full Token and Security Management with MID',
            description: 'With MID’s full token and security management service, you can be assured that your tokens are safely managed and secured. We take care of all aspects of token management, including access tokens, refresh tokens, and renewals. You don’t need to worry about security or token expiration; we’ve got everything covered, so you can focus on what matters most to your business.'
          }}
          reverse={false}
        />


        <TextParagraph
          title={"Professional and Accessible Support"}
          paragraph={"At M-ID, we are committed to providing you with top-notch support. Our dedicated team is ready to assist you at every stage, from setup to troubleshooting. Whether you explore our comprehensive documentation, FAQs, or reach out to our team directly, you’ll receive quick and reliable solutions. Our goal is to ensure your security and satisfaction!"}
        />


        <Footer />

      </div>
    </>
  );
}
