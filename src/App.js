import React, { useState, useEffect } from 'react';
import './styles.css'; // Import your CSS file

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Optional: Close the mobile menu when a navigation link is clicked
  // This is useful for single-page applications or if you want the menu to close
  // after the user navigates.
  useEffect(() => {
    const navLinksElement = document.querySelector('.header .nav-links');
    if (navLinksElement) {
      const links = navLinksElement.querySelectorAll('a');
      const closeMenuOnLinkClick = () => {
        if (window.innerWidth < 768) { // Only close if on a mobile viewport
          setIsMenuOpen(false);
        }
      };
      links.forEach(link => {
        link.addEventListener('click', closeMenuOnLinkClick);
      });
      return () => {
        links.forEach(link => {
          link.removeEventListener('click', closeMenuOnLinkClick);
        });
      };
    }
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <nav>
          <div className="logo">NyRo</div>
          <div className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#campaigns">Campaigns</a>
            <a href="#clients">Clients</a>
            <a href="#innovations">Innovations</a>
            <a href="#blog">Insights</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="menu-button" onClick={toggleMenu}>
            {/* Hamburger Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="background-image" style={{ backgroundImage: "url('https://placehold.co/1920x1080/6A0DAD/ffffff?text=NyRo+Marketing+Agency')" }}></div>
        <div className="content">
          <h2>
            Unlocking African Market Potential
          </h2>
          <p>
            Innovative Marketing Solutions for a Dynamic Continent
          </p>
          <button>
            Explore Our Services
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2>About NyRo</h2>
          <div className="grid">
            <div className="card">
              <h3>Our Vision</h3>
              <p>
                To be the leading creative communications, PR, and experiential marketing firm specializing in digital PR for corporate, development, and multinational companies in Africa.
              </p>
            </div>
            <div className="card">
              <h3>Our Mission</h3>
              <p>
                To revolutionize marketing, communicationsn & PR by leveraging innovative strategies that resonate with the future generation of audiences in Africa.
              </p>
            </div>
            <div className="card">
              <h3>Our Goals</h3>
              <ul>
                <li><strong >Market Penetration:</strong> Secure contracts with at least 6 major corporate clients within the first year.</li>
                <li><strong>Brand Recognition:</strong> Become a top-of-mind agency for innovative marketing and Communications  strategies in Africa within five years.</li>
                <li><strong>Revenue Targets:</strong> Achieve a revenue growth rate of 30% annually for the first three years.</li>
              </ul>
            </div>
          </div>
          <p className="description">
            NyRo is at the forefront of African marketing, combining global best practices with deep local insights. We are passionate about creating connections that drive success.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="grid">
            {/* Service Card 1 */}
            <div className="service-card">
              <div className="icon">💡</div>
              <h3>Digital Strategy & Planning</h3>
              <p>Crafting robust digital roadmaps tailored to your market and audience.</p>
            </div>
            {/* Service Card 2 */}
            <div className="service-card">
              <div className="icon">🎨</div>
              <h3>Creative & Content Production</h3>
              <p>Engaging content, from captivating visuals to compelling storytelling.</p>
            </div>
            {/* Service Card 3 */}
            <div className="service-card">
              <div className="icon">📢</div>
              <h3>Digital PR & Influencer Marketing</h3>
              <p>Building authentic connections with key voices and media.</p>
            </div>
            {/* Service Card 4 */}
            <div className="service-card">
              <div className="icon">📊</div>
              <h3>Data Analytics & Insights</h3>
              <p>Leveraging data to optimize campaigns and understand consumer behavior.</p>
            </div>
            {/* Service Card 5 */}
            <div className="service-card">
              <div className="icon">🌐</div>
              <h3>Experiential Marketing</h3>
              <p>Creating immersive brand experiences that leave a lasting impression.</p>
            </div>
            {/* Service Card 6 */}
            <div className="service-card">
              <div className="icon">📈</div>
              <h3>Performance Marketing</h3>
              <p>Driving measurable results through optimized paid campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaigns Section - Placeholder */}
      <section id="campaigns" className="campaigns-section">
        <div className="container">
          <h2>Featured Campaigns</h2>
          <p className="description">
            Highlighting our most impactful work and success stories.
          </p>
          <div className="grid">
            {/* Campaign Item 1 */}
            <div className="campaign-item">
              <img src="https://placehold.co/600x400/9333ea/ffffff?text=Campaign+Image+1" alt="Campaign 1"/>
              <h3>Brand Launch: Local Artisans Collective</h3>
              <p>Successfully launched a new e-commerce platform for local artisans, driving 200% growth in initial sales.</p>
              <a href="#">Read Case Study &rarr;</a>
            </div>
            {/* Campaign Item 2 */}
            <div className="campaign-item">
              <img src="https://placehold.co/600x400/9333ea/ffffff?text=Campaign+Image+2" alt="Campaign 2"/>
              <h3>Digital Transformation: Fintech Innovator</h3>
              <p>Re-engineered digital presence for a fintech startup, increasing user engagement by 40%.</p>
              <a href="#">Read Case Study &rarr;</a>
            </div>
          </div>
          <button className="view-all-button">
            View All Case Studies
          </button>
        </div>
      </section>

      {/* Clients Section - Placeholder */}
      <section id="clients" className="clients-section">
        <div className="container">
          <h2>Our Valued Clients</h2>
          <p className="description">
            Partnering with leading brands across various industries to achieve their marketing objectives.
          </p>
          <div className="grid">
            {/* Example Client Logos */}
            <img src="https://placehold.co/150x80/6b21a8/ffffff?text=Client+A" alt="Client A"/>
            <img src="https://placehold.co/150x80/6b21a8/ffffff?text=Client+B" alt="Client B"/>
            <img src="https://placehold.co/150x80/6b21a8/ffffff?text=Client+C" alt="Client C"/>
            <img src="https://placehold.co/150x80/6b21a8/ffffff?text=Client+D" alt="Client D"/>
            <img src="https://placehold.co/150x80/6b21a8/ffffff?text=Client+E" alt="Client E"/>
          </div>
          <p className="call-to-action">
            Join our growing list of satisfied partners.
          </p>
        </div>
      </section>

      {/* Innovations Section - Placeholder */}
      <section id="innovations" className="innovations-section">
        <div className="container">
          <h2>Innovations at NyRo</h2>
          <p className="description">
            Leading the way with cutting-edge marketing technologies and strategies.
          </p>
          <div className="grid">
            {/* Innovation Item 1 */}
            <div className="innovation-item">
              <h3>AI-Powered Audience Insights</h3>
              <p>Our proprietary AI tools analyze consumer behavior to uncover deep market insights.</p>
              <a href="#">Learn More &rarr;</a>
            </div>
            {/* Innovation Item 2 */}
            <div className="innovation-item">
              <h3>Immersive AR/VR Experiences</h3>
              <p>Pioneering augmented and virtual reality for next-level brand engagement.</p>
              <a href="#">Discover Solutions &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog, Whitepapers, Events Section - Placeholder */}
      <section id="blog" className="insights-events-section">
        <div className="container">
          <h2>Insights & Events</h2>
          <div className="grid">
            {/* Blog Posts */}
            <div className="category-card">
              <h3>Latest Blog Posts</h3>
              <ul>
                <li><a href="#">The Rise of Influencer Marketing in East Africa</a></li>
                <li><a href="#">Data-Driven Strategies for Brand Growth</a></li>
                <li><a href="#">Why Experiential Marketing Matters for Gen Z</a></li>
              </ul>
              <button>Read All Blogs</button>
            </div>
            {/* Whitepapers */}
            <div className="category-card">
              <h3>Whitepapers & Reports</h3>
              <ul>
                <li><a href="#">Report: African Consumer Trends 2024</a></li>
                <li><a href="#">Guide: Navigating Digital PR in Emerging Markets</a></li>
              </ul>
              <button>Download Resources</button>
            </div>
            {/* Upcoming Events */}
            <div className="category-card">
              <h3>Upcoming Events</h3>
              <ul>
                <li><a href="#">Webinar: Future of African Marketing - July 15, 2025</a></li>
                <li><a href="#">NyRo Summit: Innovations in Brand Storytelling - Oct 2025</a></li>
              </ul>
              <button>View All Events</button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action / Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Ready to Transform Your Brand?</h2>
          <p>
            Let's connect and discuss how NyRo can help you achieve your marketing goals in Africa.
          </p>
          <button>
            Get in Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div>
            <h3>NyRo</h3>
            <p>Innovative marketing solutions for the African continent.</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#campaigns">Case Studies</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3>Resources</h3>
            <ul>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#blog">Whitepapers</a></li>
              <li><a href="#blog">Events</a></li>
            </ul>
          </div>
          <div>
            <h3>Connect</h3>
            <p>Email: info.Victor@nyro.com</p>
            <p>Phone: +254 718 003 538</p>
            <div className="social-links">
              {/* Social Media Icons - placeholders for actual SVG/FontAwesome icons */}
              <a href="https://www.facebook.com/oloov">Facebook</a>
              <a href="https://x.com/OloskyTheBrand">Twitter</a>
              <a href="https://www.linkedin.com/in/oloopaulvictor">Linkedin</a>
            </div>
          </div>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} NyRo Marketing Agency. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;