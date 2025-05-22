import Head from 'next/head'; 
import { faInstagram, faLinkedin, faYoutube, faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
  return (
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
              <li><a href="https://auth.m-id.ir/oauth2/authorize?response_type=code&client_id=oidc-web-m-id&scope=profile&redirect_uri=https://m-id.ir/auth/callback/code&state=someState" className="text-dark text-decoration-none">Join Us</a></li>
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
            <div className="d-flex  justify-center md:justify-start">
              
              {/* آیکون‌های شبکه‌های اجتماعی */}
              
                <a href="https://instagram.com/m_id_ir" className="text-dark me-3" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://linkedin.com/company/m-id-ir" className="text-dark me-3" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://youtube.com/@M-ID-f4j" className="text-dark me-3" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="https://t.me/m_id_ir" className="text-dark me-3" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTelegram} size="2x" />
                </a>
                <a href="https://github.com/the-seyedamirmousavi" className="text-dark me-3" target="_blank" rel="noopener noreferrer">
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
  );
};

export default Footer;
