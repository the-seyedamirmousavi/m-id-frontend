import Head from 'next/head'; 
import { faFacebook, faInstagram, faTwitter, faLinkedin, faYoutube, faTelegram, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
  return (
    <>
    <Head>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        rel="stylesheet"
      />
    </Head>
    <footer className="bg-white text-dark py-4">
      <div className="container py-2">
        <div className="row text-center text-md-start">
          {/* ستون ۱ */}
          <div className="col-md-4 col-12 mb-3">
            <h5 className="fw-bold text-dark py-1">About M-ID</h5>
            <p className="text-muted">
              M-ID provides secure and seamless digital identity solutions for a smarter future.
            </p>
          </div>

          {/* ستون ۲ */}
          <div className="col-md-4 col-12 mb-3">
            <h5 className="fw-bold text-dark py-1">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="http://localhost:9000/oauth2/authorize?response_type=code&client_id=oidc-web-m-id&scope=profile&redirect_uri=http://localhost:3000/auth/callback/code&state=someState" className="text-dark text-decoration-none">Join Us</a></li>
              <li><a href="/" className="text-dark text-decoration-none">Welcome Home</a></li>
              <li><a href="/about-us/our-story" className="text-dark text-decoration-none">The Story of M-ID</a></li>
            </ul>
          </div>

          {/* ستون ۳ */}
          <div className="col-md-4 col-12 mb-3">
            <h5 className="fw-bold text-dark py-1">Follow Us</h5>
            <p className="text-muted">
              Stay connected with us on social media!
            </p>
            <div className="d-flex justify-content-start">
              
              {/* آیکون‌های شبکه‌های اجتماعی */}
              
                <a href="https://instagram.com" className="text-dark me-3" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://twitter.com" className="text-dark me-3" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://linkedin.com" className="text-dark me-3" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://youtube.com" className="text-dark me-3" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="https://t.me" className="text-dark me-3" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTelegram} size="2x" />
                </a>
                <a href="https://github.com" className="text-dark me-3" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </div>
          </div>
        </div>

        {/* کپی‌رایت */}
        <div className="text-center border-top mt-3 pt-3">
          <p className="mb-0 text-muted">© 2025 M-ID. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>

  );
};

export default Footer;
