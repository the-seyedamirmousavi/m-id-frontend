"use client"

import { useState } from 'react';
import Footer from "../../components/Footer";
import TextParagraph from "../../components/TextParagraph";
import TextTitle from "../../components/TextTitle";

export default function RegisterRepresentaionForm() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <div style={{ height: '100vh' }}>
            <TextTitle title={"Become Our Official Representative"} />

            <TextParagraph
            title={"You can join us as a representative"}
            paragraph={
                `M-ID offers a revolutionary approach to authentication, ensuring the highest level of security and user privacy. 
                As an official representative of M-ID, you will play a pivotal role in promoting our cutting-edge services to businesses and organizations, helping them protect sensitive data and streamline their authentication processes.

                By becoming part of the M-ID team, you’ll be at the forefront of a rapidly growing industry. You will have access to a robust platform that empowers businesses to build trust with their users while maintaining the highest security standards. 
                Whether you’re experienced in the tech industry or passionate about data security, M-ID offers a unique opportunity to contribute to the future of secure digital interactions.

                As a representative, you will have the opportunity to earn commissions based on performance while working with a dynamic, forward-thinking company. 
                Our commitment to innovation and security makes M-ID the perfect platform for those who want to make an impact in the digital world.

                Join us today and help us lead the way in secure authentication services.`
            }
        />

            
            <div className="container card py-4 px-4 my-5 rounded">
                <h1 className="py-2 px-4">Terms and Conditions</h1>
                <p className="px-4 text-black">
                    To become an official representative of M-ID, you must accept the following terms and conditions. 
                    By agreeing to these terms, you confirm that you understand the company's policies regarding security, 
                    responsibilities, and legal obligations. The company reserves the right to update these terms at any time. 
                    Failure to adhere to the terms may result in termination of your representation contract.
                </p>

                <p className="py-4 card px-4 my-3" style={{ whiteSpace: 'pre-line', lineHeight: '2' }}>
                    1. Introduction: These terms define the rights and responsibilities of M-ID representatives. 
                    Representatives must adhere to the company's security and professional principles.<br /><br />
                    2. General Conditions: <br />
                    - The representative must be at least 18 years old.<br />
                    - Relevant work experience in technology and information security is an advantage.<br />
                    - Effective communication and negotiation skills with customers are essential.<br /><br />
                    3. Representative Responsibilities: <br />
                    - Promoting and marketing M-ID services to clients and organizations.<br />
                    - Providing consultation on authentication processes and data security.<br />
                    - Complying with security standards and maintaining user data confidentiality.<br /><br />
                    4. Legal Obligations: <br />
                    - The representative must comply with local and international laws on security and authentication.<br />
                    - Any misuse of user information will result in contract termination and legal action.<br /><br />
                    5. Financial Terms: <br />
                    - Commission and benefits are determined based on sales performance.<br />
                    - All payments will be processed monthly.<br /><br />
                    6. Termination of Cooperation: <br />
                    - If company policies are violated, the representative's contract may be terminated without prior notice.<br />
                    - The representative may request contract termination with a one-month prior notice.<br /><br />
                    7. Policy Changes: <br />
                    M-ID reserves the right to modify these terms at any time, and representatives will be informed accordingly.<br /><br />
                    📌 By accepting these terms, you agree to abide by the above rules as an official representative of M-ID.
                </p>
                <div className="container my-3">
                <input 
                    type="checkbox" 
                    id="terms" 
                    checked={isChecked}
                    onChange={handleCheckboxChange} 
                    style={{ width: '20px', height: '20px' }}
                />
                <label htmlFor="terms" className="ms-2">
                    I agree to the Terms and Conditions
                </label>
            </div>
            <button 
                className="my-btn my-btn-primary mt-4" 
                disabled={!isChecked}
            >
                Submit
            </button>

            </div>

        
            <TextParagraph
                title={"You're One Step Away from Joining Our Team!"}
                paragraph={
                    "By becoming an official representative of M-ID, you are joining a forward-thinking company dedicated to innovation and security. We believe in empowering our partners, and we are excited to have you contribute to the future of secure authentication. Together, we will build a safer digital world. Let's take this next step together!"
                }
            />


            <Footer />
        </div>
    );
}
