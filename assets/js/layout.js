const sharedHeader = `
  <header class="site-header">
    <div class="container nav-wrap">
      <a class="brand" href="index.html" aria-label="DigiSoftX Labs home">
        <img class="brand-mark" src="assets/images/digisoftx-labs-logo.svg" alt="" />
        <span>DigiSoftX <small>Labs</small></span>
      </a>
      <nav class="site-nav" aria-label="Main navigation">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="services.html">Services</a>
        <a href="contact.html">Contact</a>
      </nav>
      <div class="nav-actions">
        <a class="text-link phone-link" href="tel:+918076500700"><span aria-hidden="true">✆</span> +91 80765 00700</a>
        <a class="btn btn-primary nav-cta" href="contact.html"><span aria-hidden="true">✦</span> Free Consultation <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </header>
`;

const sharedFooter = `
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <a class="brand" href="index.html" aria-label="DigiSoftX Labs home">
          <img class="brand-mark" src="assets/images/digisoftx-labs-logo.svg" alt="" />
          <span>DigiSoftX <small>Labs</small></span>
        </a>
        <p>Digital solutions for businesses ready to build, evolve and grow. We turn ideas into scalable technology that drives meaningful business growth.</p>
      </div>
      <div class="footer-column">
        <strong>Company</strong>
        <a href="about.html">About DigiSoftX Labs</a>
        <a href="services.html">Our services</a>
        <a href="contact.html">Contact us</a>
      </div>
      <div class="footer-column">
        <strong>Contact</strong>
        <a href="mailto:contact.digisoftx@gmail.com">contact.digisoftx@gmail.com</a>
        <a href="tel:+918076500700">+91 80765 00700</a>
        <a href="contact.html">Start a project <span aria-hidden="true">↗</span></a>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© <span id="year"></span> DigiSoftX Labs. All rights reserved.</span>
      <span>Digital products · Technology · Growth</span>
      <span>Privacy · Terms</span>
    </div>
  </footer>
`;

const sharedWhatsapp = `
  <a class="floating-whatsapp" href="https://wa.me/918076500700" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
    <svg class="chat-icon" aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M20 3H4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h3.5l3.9 2.7a1 1 0 0 0 1.2 0l3.9-2.7H20a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Zm1 13a1 1 0 0 1-1 1h-3.8a1 1 0 0 0-.57.18L12 19.66l-3.63-2.48A1 1 0 0 0 7.8 17H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10Z"/>
      <path d="M7 8h10v2H7zm0 4h7v2H7z"/>
    </svg>
    <span>Chat</span>
  </a>
`;

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('site-header')?.replaceWith(
    document.createRange().createContextualFragment(sharedHeader)
  );
  document.getElementById('site-footer')?.replaceWith(
    document.createRange().createContextualFragment(sharedFooter)
  );
  document.body.insertAdjacentHTML('beforeend', sharedWhatsapp);
});
