import React from "react";
import "./clients.css";

const clients = () => {
  return (
    <section className="clients" id="blog">
      <h1>Our Clients</h1>
      <p>We have been working with some Fortune 500+ clients</p>
      <div className="client-logos">
      <img src={`${process.env.PUBLIC_URL}/images/logo24.png`} alt="client"  />
      <img src={`${process.env.PUBLIC_URL}/images/logo25.png`} alt="client"  />
      <img src={`${process.env.PUBLIC_URL}/images/logo26.png`} alt="client"  />
      <img src={`${process.env.PUBLIC_URL}/images/logo27.png`} alt="client"  />
      <img src={`${process.env.PUBLIC_URL}/images/logo28.png`} alt="client"  />
      <img src={`${process.env.PUBLIC_URL}/images/logo29.png`} alt="client"  />
      <img src={`${process.env.PUBLIC_URL}/images/logo26.png`} alt="client"  />
    
    
        
      </div>
    </section>
  );
};

export default clients;
