import Footer from '../../../components/Footer';
import Head from "next/head";
import TextParagraph from '../../../components/TextParagraph';
import TextTitle from '../../../components/TextTitle';
import ImageWithTitles from '../../../components/ImageWithTitles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function VisionMission() {

  return (
     <>
      <Head>
        <title>M-ID</title>
        <meta name="description" content="Welcome to M-ID - Technology for well-being" />
      </Head>

      <div>

        <TextTitle title={"We believe that small steps can create big changes"} />

        <TextParagraph 
        title={"Every story started from a need, but M-ID it was formed from a dream"} 
        paragraph={"At 17 years old, the idea of creating an ( Iranian Microsoft ) took shape in my mind. Over time, this vision grew and evolved into a goal that I have continuously worked towards. Today, this idea has come to life, and you can now experience some of its first achievements."} 
       />

        <ImageWithTitles
            imageSrc="/images/FitSho.png"
            altText="M-ID Logo"
            titles={{
                heading: 'What is M-ID?',
                description: (
                  <>
                    <p><strong>M-ID</strong> is an advanced, secure platform designed to streamline and enhance your experience with our range of services. By managing your digital identity with M-ID, you ensure that your personal information is protected while enjoying seamless access to all the tools we offer.</p>
                    <p>With <strong>M-ID</strong>, you no longer have to worry about constantly entering your credentials. Our platform makes it simple and secure to log in, granting you access to all of our services in one integrated environment.</p>
                    <p>Our platform relies on trusted protocols such as <strong>OAuth2</strong> and <strong>OpenID Connect</strong>, which guarantee top-notch security and give you the peace of mind that your data is always safe. Whether you’re accessing services from a desktop or mobile, <strong>M-ID</strong> ensures that your journey is smooth and efficient.</p>
                  </>
                )
            }}
        />

        <TextParagraph 
          title={"Our Vision & Mission"} 
          paragraph={
            <>
              We are constantly developing software to improve the health and lifestyle of all M-ID users.
              <br />
              From tracking daily activities to managing stress and promoting well-being, every feature we create is designed to help you live a healthier and more balanced life.
              <br />
              Your journey to better health inspires everything we do.
            </>
          } 
        />

{/* 

        <ImageWithTitles  
        imageSrc="/images/me.jpg"
        altText="FitSho Image"
        titles={{
          heading: 'Software Engineer & Full-Stack Developer ',
          description: 'I am Amir Mousavi, a Full-Stack Developer with a primary focus on Java. I have extensive experience in developing scalable and efficient applications for various environments (front-end, back-end, and mobile). My skills include designing and implementing complex software solutions using Java and related frameworks, building robust back-end systems, and developing front-end applications with Next.js. I am always driven by the pursuit of innovation, optimizing user experience, and delivering effective solutions through clean and efficient code.'
        }}
        reverse={true}

        child={
          <div className='mt-10 flex'>
                <Link href="https://github.com/the-seyedamirmousavi" className="text-dark me-3" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </Link>

                <Link href="https://instagram.com/mutec1381" className="text-dark me-3" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </Link>
                <Link href="https://linkedin.com/in/seyed-amir-mousavi-a45345226" className="text-dark me-3" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </Link>
          </div> 
        }
        />


        <ImageWithTitles  
        imageSrc="/images/behzad.jpg"
        altText="FitSho Image"
        titles={{
          heading: 'Artificial Intelligence Specialist',
          description: 'Mr. Behzad Karim Sahati is an Artificial Intelligence specialist with a focus on meta-learning and machine learning. He has extensive experience in designing advanced models for applications in life sciences and optimizing algorithms. Behzad holds prestigious certifications from Harvard and Stanford universities in artificial intelligence and machine learning, and has completed specialized courses in AI for healthcare, as well as a 120-hour research internship in the pharmaceutical industry in Switzerland.'
        }}
        reverse={false}
        child={
          
            <div className='mt-10 flex'>
               
                <Link href="https://instagram.com/turing1950" className="text-dark me-3" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </Link>
                <Link href="https://linkedin.com/in/turing1950" className="text-dark me-3" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </Link>
       
          </div> 
          
        }
        >
      
        </ImageWithTitles> */}

        <TextParagraph 
        title={"Why Should You Trust Us?"} 
        paragraph={"We respond to your needs with care and commitment, always striving to deliver the best solutions. Our focus is on quality, precision, and transparency, ensuring you're kept informed throughout every stage of the project. By utilizing the latest technologies and development methods, we are able to provide you with efficient and up-to-date products. We value direct and honest communication with our users and are always ready to address your questions and concerns. Your trust is incredibly important to us, and we are dedicated to maintaining it by delivering high-quality services with transparency."} 
        />
        <Footer />
      </div>
    </>
  );
}
