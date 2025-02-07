// TrainingResources.js
import React from "react";

const TrainingResources = () => {
  const resources = [
    {
      title: "Getting Started with m-id Authorization Server",
      description: "Learn how to navigate and use the m-id authorization server efficiently. This guide covers the essential steps for setting up, configuring, and integrating the authorization server with your applications. You'll learn how to manage users, generate access tokens, and secure your API with OAuth2 and OpenID Connect.",
      link: "/doc/m-id-authorization-server",
    },
  ];

  return (
    <div className="training-resources" style={{ padding: "20px", margin: "auto" }}>      
     {/* <section>
        <h3>Video Tutorials</h3>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Training Video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/3JZ_D3ELwOQ"
            title="Training Video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section> */}

      <section>
        <h3>Guides & Documents</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {resources.map((resource, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              <a href={resource.link} style={{ fontSize: "16px", fontWeight: "bold", textDecoration: "none", color: "#007bff" }}>
                {resource.title}
              </a>
              <p style={{ margin: "5px 0 0 10px" }}>{resource.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="pt-5">
        <h3>Additional Support</h3>
        <p>If you need further assistance, visit our Help & Support page.</p>
      </section>
    </div>
  );
};

export default TrainingResources;
