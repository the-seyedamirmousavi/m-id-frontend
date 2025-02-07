"use client"
import React, { useState } from "react";

const HelpAndSupport = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const faqs = [
      { question: "How can I reset my password?", answer: "Go to the login page, click on 'Forgot Password', and follow the instructions to reset it." },
      { question: "How do I track my referral earnings?", answer: "You can check your referral earnings in the 'Transaction History' section of your dashboard." },
      { question: "What should I do if my referral link isn’t working?", answer: "Ensure you're copying the correct link from the referral section. If the issue persists, contact support." },
      { question: "How can I withdraw my earnings?", answer: "Go to the 'Withdraw' section, select your preferred method, and follow the instructions to complete the withdrawal." },
    ];

    const toggleFAQ = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    return (
        <div className="help-and-support" style={{ padding: '20px', margin: 'auto' }}>
            <section>
                <h3>Frequently Asked Questions</h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {faqs.map((faq, index) => (
                        <li key={index} style={{ marginBottom: "10px", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
                            <button
                                onClick={() => toggleFAQ(index)}
                                style={{
                                    background: "none",
                                    border: "none",
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                    textAlign: "left",
                                    width: "100%",
                                    padding: "10px 0",
                                }}
                            >
                                {faq.question}
                            </button>
                            {openQuestion === index && <p style={{ margin: "5px 0 0 10px", color: "#555" }}>{faq.answer}</p>}
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h3>Contact Support</h3>
                <p>If you need further assistance, please contact our support team:</p>
                <ul>
                    <li>Email: <a href="mailto:seyedamirmousavi.developer@gmail.com">seyedamirmousavi.developer@gmail.com</a></li>
                </ul>
            </section>
        </div>
    );
};

export default HelpAndSupport;
