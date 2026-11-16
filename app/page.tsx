'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  HeartPulse,
  Home,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Star,
  Users,
  X,
  Car,
  BriefcaseBusiness,
} from 'lucide-react'

const phone = '+91 98245 04920'
const phoneHref = 'tel:+919824504920'
const whatsappHref = 'https://wa.me/919824504920'
const justdialHref = 'https://www.justdial.com/Ahmedabad/Devikrupa-Insurance-Sanand-HO/079PXX79-XX79-161117180153-P9N2_BZDET/photos'

const services = [
  { icon: Car, title: 'Car insurance', text: 'Reliable cover for your car, with help when you need it most.' },
  { icon: HeartPulse, title: 'Health insurance', text: 'Plans that help protect your family from unexpected medical costs.' },
  { icon: ShieldCheck, title: 'Life insurance', text: 'Build a more secure future for the people who matter to you.' },
  { icon: BriefcaseBusiness, title: 'Business insurance', text: 'Practical protection for shops, vehicles, homes, and more.' },
]

const reviews = [
  { quote: 'Very helpful and honest guidance. They made renewing my car policy simple.', name: 'Rakesh Patel', place: 'Sanand' },
  { quote: 'A trusted local team. They explained the health policy clearly and patiently.', name: 'Meena Shah', place: 'Ahmedabad' },
  { quote: 'Quick response whenever I have a question. I recommend Devikrupa to everyone.', name: 'Jignesh Parmar', place: 'Sanand' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function closeMenu() { setMenuOpen(false) }

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Devikrupa Insurance home">
          <img className="brand-symbol" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5711.PNG-H1dn8S11SbztXUeHa3N1PivPpH2O4I.png" alt="" />
          <span className="brand-copy"><strong>Devikrupa</strong><small>INSURANCE</small></span>
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About us</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#reviews" onClick={closeMenu}>Reviews</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href={justdialHref} target="_blank" rel="noreferrer"><Phone size={16} /> Call now</a>
        </nav>
      </header>

      <section id="home" className="hero section-pad">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Your trusted insurance partner in Sanand</p>
          <h1>Protection for the life you&apos;re building.</h1>
          <p className="hero-lede">For over 15 years, we&apos;ve helped families and businesses find the right insurance with honest advice and personal service.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={justdialHref} target="_blank" rel="noreferrer"><Phone size={18} /> Call us today</a>
            <a className="button button-light" href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp us <ArrowRight size={17} /></a>
          </div>
          <div className="hero-note"><span className="stars"><Star size={15} fill="currentColor" /> <Star size={15} fill="currentColor" /> <Star size={15} fill="currentColor" /> <Star size={15} fill="currentColor" /> <Star size={15} fill="currentColor" /></span> Rated 4.0 by our customers</div>
        </div>
        <div className="hero-visual" aria-label="Peace of mind illustration">
          <div className="sun-shape" />
          <div className="hero-card card-one"><ShieldCheck size={21} /><span>Covered with care</span></div>
          <div className="hero-card card-two"><Users size={20} /><span>Local, personal service</span></div>
          <div className="illustration-house"><Home size={116} strokeWidth={1.1} /></div>
          <div className="illustration-family"><div className="person person-one" /><div className="person person-two" /><div className="person person-three" /></div>
          <div className="ground-line" />
        </div>
      </section>

      <section className="trust-strip"><div><strong>15+</strong><span>Years of experience</span></div><div><strong>4.0<span className="small-star">★</span></strong><span>Customer rating</span></div><div><strong>1000s</strong><span>Customers supported</span></div><div><strong>Local</strong><span>Sanand office</span></div></section>

      <section id="about" className="section-pad about-section">
        <div className="section-label">ABOUT DEVIKRUPA</div>
        <div className="about-grid"><div><h2>Insurance should feel <em>simple.</em></h2></div><div className="about-copy"><p>Since 2011, Devikrupa Insurance has been helping people in Sanand and Ahmedabad protect what matters most. We believe insurance is not just paperwork — it&apos;s the confidence of knowing someone is there to guide you.</p><p>Our team takes the time to understand your needs, explain your options clearly, and help you choose cover that feels right.</p><a className="text-link" href="#contact">Talk to our team <ArrowRight size={17} /></a></div></div>
      </section>

      <section id="services" className="section-pad services-section"><div className="section-heading"><div><div className="section-label">WHAT WE OFFER</div><h2>Cover for every <em>chapter.</em></h2></div><p>From your first car to your growing family and business, we&apos;re here to help you stay prepared.</p></div><div className="service-grid">{services.map(({ icon: Icon, title, text }) => <article className="service-card" key={title}><div className="service-icon"><Icon size={24} /></div><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Ask about ${title}`}>Learn more <ArrowRight size={16} /></a></article>)}</div></section>

      <section className="why-section"><div className="section-pad why-grid"><div><div className="section-label light-label">WHY DEVIKRUPA</div><h2>A local team that <em>knows you.</em></h2><p>Insurance can be confusing. We make it personal, transparent, and easy to understand.</p></div><div className="check-list"><div><span><Check size={17} /></span><p><strong>Honest, clear guidance</strong><br />No confusing jargon or pressure.</p></div><div><span><Check size={17} /></span><p><strong>Personal service</strong><br />Speak to a real person who listens.</p></div><div><span><Check size={17} /></span><p><strong>Support when it matters</strong><br />We&apos;re here for questions and claims.</p></div></div></div></section>

      <section id="reviews" className="section-pad reviews-section"><div className="reviews-heading"><div><div className="section-label">CUSTOMER STORIES</div><h2>Good people. <em>Good cover.</em></h2></div><div className="rating-box"><strong>4.0</strong><span className="stars"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} /></span><small>Customer rating</small></div></div><div className="review-grid">{reviews.map((review) => <article className="review-card" key={review.name}><div className="stars"><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /></div><p>“{review.quote}”</p><footer><span className="avatar">{review.name.charAt(0)}</span><span><strong>{review.name}</strong><small>{review.place}</small></span></footer></article>)}</div></section>

      <section id="contact" className="contact-section section-pad"><div className="contact-grid"><div><div className="section-label light-label">LET&apos;S TALK</div><h2>Ready to feel <em>protected?</em></h2><p>Have a question or need help choosing a policy? We&apos;re just a call away.</p><div className="contact-details"><a href={phoneHref}><span><Phone size={19} /></span><div><small>Call or WhatsApp</small><strong>{phone}</strong></div></a><a href="mailto:harshrajsinh923@gmail.com"><span><Mail size={19} /></span><div><small>Email us</small><strong>harshrajsinh923@gmail.com</strong></div></a><a href="https://maps.app.goo.gl/SPJazHH4f6V2pLr86?g_st=iw" target="_blank" rel="noreferrer"><span><MapPin size={19} /></span><div><small>Visit our office</small><strong>16/A, Vaghela Shopping Center, Sanand</strong></div></a></div></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}><h3>Send us a message</h3><p>We&apos;ll get back to you as soon as possible.</p>{submitted ? <div className="success-message"><Check size={22} /><strong>Thank you for reaching out.</strong><span>We&apos;ll be in touch shortly.</span></div> : <><label>Name<input required name="name" placeholder="Your name" /></label><label>Phone number<input required name="phone" type="tel" placeholder="Your phone number" /></label><label>How can we help?<textarea required name="message" placeholder="Tell us a little about what you need..." rows={3} /></label><button className="button button-coral" type="submit">Send message <ArrowRight size={17} /></button></>}</form></div><div className="map-card"><div className="map-pattern"><div className="map-pin"><MapPin size={26} /></div><span className="map-road road-a" /><span className="map-road road-b" /><span className="map-road road-c" /></div><div className="map-info"><div><strong>Find us in Sanand</strong><span>16/A, Vaghela Shopping Center, Sanand HO</span></div><a className="button button-light" href="https://maps.app.goo.gl/SPJazHH4f6V2pLr86?g_st=iw" target="_blank" rel="noreferrer">Get directions <ArrowRight size={16} /></a></div></div></section>

      <footer className="footer"><div className="footer-brand"><a className="brand" href="#home"><img className="brand-symbol footer-symbol" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5711.PNG-H1dn8S11SbztXUeHa3N1PivPpH2O4I.png" alt="" /><span className="brand-copy"><strong>Devikrupa</strong><small>INSURANCE</small></span></a><p>Protecting what matters, since 2011.</p></div><div className="footer-hours"><span><Clock3 size={16} /> Office hours</span><strong>Mon – Sat, 10:00 AM – 7:00 PM</strong></div><div className="footer-bottom"><span>© 2026 Devikrupa Insurance. All rights reserved.</span><span>Made for Sanand, with care.</span></div></footer>
      <div className="mobile-actions"><a href={justdialHref} target="_blank" rel="noreferrer"><Phone size={18} /> Call now</a><a href={whatsappHref} target="_blank" rel="noreferrer"><span className="wa-dot">W</span> WhatsApp</a></div>
    </main>
  )
}
