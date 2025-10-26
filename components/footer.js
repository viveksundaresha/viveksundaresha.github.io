class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
        
        footer {
background: rgba(26, 32, 44, 0.9);
          color: #e2e8f0;
          padding: 2rem;
          text-align: center;
          border-top: 1px solid rgba(59, 130, 246, 0.2);
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .social-links {
          display: flex;
          gap: 1.5rem;
          margin: 1rem 0;
        }
        .social-links a {
          color: #e2e8f0;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          padding: 0.5rem;
          border-radius: 0.5rem;
        }
        .social-links a:hover {
          color: #3b82f6;
          transform: translateY(-2px);
          background: rgba(59, 130, 246, 0.1);
        }
.social-links i {
          width: 20px;
          height: 20px;
        }
.copyright {
          margin-top: 1rem;
          font-size: 0.9rem;
          color: #94a3b8;
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="social-links">
            <a href="https://www.linkedin.com/in/viveksundaresha/" target="_blank" rel="noopener noreferrer" class="social-link">
              <i data-feather="linkedin"></i>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/VIVEK332IYER" target="_blank" rel="noopener noreferrer" class="social-link">
              <i data-feather="github"></i>
              <span>GitHub</span>
            </a>
<a href="mailto:viveksundaresha@gmail.com" aria-label="Mail" rel="noopener noreferrer">
<i data-feather="mail"></i>
              <span class="sr-only">Email</span>
            </a>
          </div>
<p class="copyright">&copy; ${new Date().getFullYear()} Vivek Sundaresha. All rights reserved.</p>
          <script src="https://unpkg.com/feather-icons"></script>
          <script>feather.replace();</script>
</div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);