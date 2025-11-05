"use client"

import { useState } from "react"
import "./App.css"
import emailjs from "@emailjs/browser"
import {
  Shield,
  Target,
  Mail,
  Building2,
  CheckCircle,
  GraduationCap,
  ShieldCheck,
  Star,
  Handshake,
  Leaf,
} from "lucide-react"

function App() {
  const [language, setLanguage] = useState("en")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState({ type: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)
  const [showTermsModal, setShowTermsModal] = useState(false)
  
  const translations = {
    en: {
      nav: {
        home: "Home",
        services: "Services",
        about: "About Us",
        contact: "Contact Us",
      },
      hero: {
        title: "Cyber Strategic Consulting",
        subtitle: "Securing Your Digital Future",
        description:
          "At CyberSC, we are committed to empowering Canadian businesses with innovative cybersecurity solutions. Our team leverages world-class experience to ensure breach prevention, threat detection, and compliance management, offering tailored and proactive approaches to safeguard your digital assets.",
        getStarted: "Get Started",
        learnMore: "Learn More",
      },
      services: {
        title: "Our Service Offerings",
        subtitle: "Comprehensive Cybersecurity Solutions",
        items: [
          {
            title: "Penetration Testing",
            description:
              "Our penetration testing services simulate real-world cyberattacks to identify vulnerabilities in your systems before malicious actors can exploit them. We conduct thorough assessments of your Networks, Applications, Clouds, and Infrastructures, providing detailed reports with actionable remediation strategies to strengthen your security posture.",
            image: "Penetration_Testing.jpg"
          },
          {
            title: "Threat Modeling",
            description:
              "We help you understand and anticipate potential security threats through comprehensive threat modeling. Our experts analyze your business processes, identify critical assets, and map potential attack vectors. This proactive approach enables you to prioritize security investments and implement effective countermeasures before threats materialize.",
            image: "Threat_Modeling.jpg"
          },
          {
            title: "Phishing Simulation",
            description:
              "Human error remains one of the biggest security risks. Our phishing simulation campaigns test your employees' awareness and response to social engineering attacks. We provide realistic scenarios, track engagement metrics, and deliver targeted training to build a security-conscious culture within your organization.",
            image: "Phishing_Simulation.jpg"
          },
          {
            title: "Architecture Review",
            description:
              "Our security architecture review service examines your IT infrastructure design to ensure it follows industry best practices and security principles. We evaluate your network topology, cloud configurations, access controls, and data flow to identify architectural weaknesses and recommend improvements that enhance both security and operational efficiency.",
            image: "Architecture_Review.jpg"
          },
          {
            title: "Compliance Assurance",
            description:
              "Navigate complex regulatory requirements with confidence. We provide comprehensive compliance assessments and ongoing support for standards including Law 25, SOC 2, ISO 27001, and industry-specific regulations. Our team ensures your security controls meet regulatory requirements while maintaining operational flexibility.",
            image: "Audit_Compliance.jpg"
          },
          {
            title: "Tailored Solutions & Trainings",
            description:
              "Every organization has unique security needs. We develop customized cybersecurity solutions and training programs tailored to your specific industry, risk profile, and business objectives. From executive briefings to hands-on technical workshops, we empower your team with the knowledge and tools needed to maintain robust security practices.",
            image: "Tailored_Solutions.jpg"
          },
        ],
      },
      about: {
        title: "About CyberSC",
        subtitle: "Your Trusted Cybersecurity Partner",
        description:
          "CyberSC is a proud Canadian cybersecurity firm dedicated to protecting businesses from evolving digital threats. With a team of certified security professionals and years of industry experience, we deliver comprehensive security solutions that combine technical excellence with practical business understanding.",
        mission: {
          title: "Our Mission",
          description:
            "To empower Canadian organizations with world-class cybersecurity solutions that protect their digital assets, ensure regulatory compliance, and enable secure business growth.",
        },
        values: [
          {
            title: "Proactive Protection",
            description: "We anticipate threats before they become problems",
          },
          {
            title: "Excellence",
            description: "World-class expertise and industry certifications",
          },
          {
            title: "Partnership",
            description: "We work alongside you as trusted advisors",
          },
          {
            title: "Canadian Focus",
            description: "Deep understanding of Canadian regulatory landscape",
          },
        ],
      },
      contact: {
        title: "Contact Us",
        subtitle: "Get in Touch",
        form: {
          name: "Name",
          email: "Email",
          phone: "Phone Number",
          company: "Company Name",
          services: "Services of Interest",
          message: "Message",
          submit: "Send Email",
        },
      },
      testimonials: {
        title: "What Our Clients Say",
        items: [
          {
            text: "CyberSC helped us identify critical vulnerabilities we never knew existed. Their penetration testing was thorough and their recommendations were practical and actionable.",
            author: "Anonymous",
            company: "Network Solutions Industry",
          },
          {
            text: "The compliance assurance service from CyberSC made our SOC 2 certification process smooth and stress-free. Highly recommended!",
            author: "Anonymous",
            company: "Small & Medium Business Owner",
          },
          {
            text: "Their phishing simulation training transformed our security culture. Employee awareness has increased dramatically since working with CyberSC.",
            author: "Anonymous",
            company: "Consulting Firm CEO",
          },
        ],
      },
      footer: {
        company: "CyberSC",
        legal: "CYBER SC IT SECURITY INC.",
        tagline: "Securing Your Digital Future",
        quickLinks: "Quick Links",
        followUs: "Follow Us",
        rights: "© 2025 CyberSC. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
      },
    },
    fr: {
      nav: {
        home: "Accueil",
        services: "Services",
        about: "À Propos",
        contact: "Contactez-Nous",
      },
      hero: {
        title: "Cyber Stratégie & Consultation",
        subtitle: "Sécuriser Votre Avenir Numérique",
        description:
          "Chez CyberSC, nous nous engageons à donner aux entreprises canadiennes les moyens d'agir grâce à des solutions de cybersécurité innovantes. Notre équipe met à profit une expérience de classe mondiale pour assurer la prévention des violations, la détection des menaces et la gestion de la conformité, en offrant des approches sur mesure et proactives pour protéger vos actifs numériques.",
        getStarted: "Commencer",
        learnMore: "En Savoir Plus",
      },
      services: {
        title: "Nos Offres de Services",
        subtitle: "Solutions Complètes de Cybersécurité",
        items: [
          {
            title: "Tests d'Intrusion",
            description:
              "Nos services de tests d'intrusion simulent des cyberattaques réelles afin d'identifier les vulnérabilités de vos systèmes avant qu'elles ne puissent être exploitées par des acteurs malveillants. Nous réalisons des évaluations approfondies de vos Réseaux, Applications, Environnements infonuagiques et Infrastructures, et fournissons des rapports détaillés accompagnés de stratégies de remédiation concrètes pour renforcer votre posture de cybersécurité.",
            image: "Penetration_Testing.jpg"
          },
          {
            title: "Modélisation des Menaces",
            description:
              "Nous vous aidons à comprendre et à anticiper les menaces de sécurité potentielles grâce à une modélisation complète des menaces. Nos experts analysent vos processus d'affaires, identifient les actifs critiques et cartographient les vecteurs d'attaque possibles. Cette approche proactive vous permet de prioriser vos investissements en cybersécurité et de mettre en œuvre des contre-mesures efficaces avant que les menaces ne se concrétisent.",
            image: "Threat_Modeling.jpg"
          },
          {
            title: "Simulation d'Hameçonnage",
            description:
              "L'erreur humaine demeure l'un des principaux risques en cybersécurité. Nos campagnes de simulation d'hameçonnage évaluent la sensibilisation et la réactivité de vos employés face aux attaques d'ingénierie sociale. Nous proposons des scénarios réalistes, suivons les indicateurs d'engagement et offrons une formation ciblée afin de bâtir une culture organisationnelle axée sur la sécurité.",
            image: "Phishing_Simulation.jpg"
          },
          {
            title: "Révision d'Architecture",
            description:
              "Notre service de révision d'architecture de sécurité analyse la conception de votre infrastructure informatique afin de garantir sa conformité aux meilleures pratiques et aux principes de sécurité de l'industrie. Nous évaluons la topologie de votre réseau, vos configurations infonuagiques, vos contrôles d'accès et vos flux de données pour identifier les faiblesses architecturales et recommander des améliorations renforçant à la fois la sécurité et l'efficacité opérationnelle.",
            image: "Architecture_Review.jpg"
          },
          {
            title: "Assurance de Conformité",
            description:
              "Naviguez avec confiance dans la complexité des exigences réglementaires. Nous offrons des évaluations de conformité complètes et un accompagnement continu pour les cadres tels que la Loi 25, SOC 2, ISO 27001 et d'autres réglementations propres à votre secteur. Notre équipe veille à ce que vos contrôles de sécurité répondent aux exigences réglementaires tout en préservant votre agilité opérationnelle.",
            image: "Audit_Compliance.jpg"
          },
          {
            title: "Solutions et Formations Sur Mesure",
            description:
              "Chaque organisation a des besoins de sécurité uniques. Nous concevons des solutions de cybersécurité sur mesure et des programmes de formation adaptés à votre secteur d'activité, à votre profil de risque et à vos objectifs d'affaires. Des séances d'information pour dirigeants aux ateliers techniques pratiques, nous donnons à votre équipe les connaissances et les outils nécessaires pour maintenir des pratiques de sécurité robustes et durables.",
            image: "Tailored_Solutions.jpg"
          },
        ],
      },
      about: {
        title: "À Propos de CyberSC",
        subtitle: "Votre Partenaire de Confiance en Cybersécurité",
        description:
          "CyberSC est une fière entreprise canadienne de cybersécurité dédiée à la protection des entreprises contre les menaces numériques en évolution. Avec une équipe de professionnels de la sécurité certifiés et des années d'expérience dans l'industrie, nous offrons des solutions de sécurité complètes qui combinent l'excellence technique avec une compréhension pratique des affaires.",
        mission: {
          title: "Notre Mission",
          description:
            "Donner aux organisations canadiennes les moyens d'agir grâce à des solutions de cybersécurité de classe mondiale qui protègent leurs actifs numériques, assurent la conformité réglementaire et permettent une croissance commerciale sécurisée.",
        },
        values: [
          {
            title: "Protection Proactive",
            description: "Nous anticipons les menaces avant qu'elles ne deviennent des problèmes",
          },
          {
            title: "Excellence",
            description: "Expertise de classe mondiale et certifications de l'industrie",
          },
          {
            title: "Partenariat",
            description: "Nous travaillons à vos côtés en tant que conseillers de confiance",
          },
          {
            title: "Focus Canadien",
            description: "Compréhension approfondie du paysage réglementaire canadien",
          },
        ],
      },
      contact: {
        title: "Contactez-Nous",
        subtitle: "Entrer en Contact",
        form: {
          name: "Nom",
          email: "Courriel",
          phone: "Numéro de Téléphone",
          company: "Nom de l'Entreprise",
          services: "Services d'Intérêt",
          message: "Message",
          submit: "Envoyer le Courriel",
        },
      },
      testimonials: {
        title: "Ce Que Disent Nos Clients",
        items: [
          {
            text: "CyberSC nous a aidés à identifier des vulnérabilités critiques dont nous ignorions l'existence. Leurs tests d'intrusion étaient approfondis et leurs recommandations pratiques et réalisables.",
            author: "Anonime",
            company: "Industrie des solutions réseau",
          },
          {
            text: "Le service d'assurance de conformité de CyberSC a rendu notre processus de certification SOC 2 fluide et sans stress. Hautement recommandé!",
            author: "Anonime",
            company: "Propriétaire de PME",
          },
          {
            text: "Leur formation de simulation d'hameçonnage a transformé notre culture de sécurité. La sensibilisation des employés a considérablement augmenté depuis que nous travaillons avec CyberSC.",
            author: "Anonime",
            company: "PDG d'une société de conseil",
          },
        ],
      },
      footer: {
        company: "CyberSC",
        legal: "CYBER SC IT SECURITY INC.",
        tagline: "Sécuriser Votre Avenir Numérique",
        quickLinks: "Liens Rapides",
        followUs: "Suivez-Nous",
        rights: "© 2025 CyberSC. Tous droits réservés.",
        privacy: "Politique de Confidentialité",
        terms: "Conditions d'Utilisation",
      },
    },
  }

  const t = translations[language]

  const serviceIcons = [Shield, Target, Mail, Building2, CheckCircle, GraduationCap]
  const valueIcons = [ShieldCheck, Star, Handshake, Leaf]

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en")
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
      setMobileMenuOpen(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: "", message: "" })
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    const services = []
    t.services.items.forEach((service, index) => {
      if (data[`service-${index}`]) {
        services.push(service.title)
      }
    })

        // Prepare template parameters for EmailJS
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || "Not provided",
      company: data.company || "Not provided",
      services: services.length > 0 ? services.join(", ") : "None selected",
      message: data.message || "No message provided",
    }

    try {
      // EmailJS credentials - these are PUBLIC keys safe to expose in frontend code
      // They're rate-limited by EmailJS and only send to the configured recipient
      const result = await emailjs.send(
        "service_blt460j",      // Service ID
        "template_5lbjewk",     // Template ID
        templateParams,
        "tMbkjcto0LJy4-j-U"     // Public Key
      )

      console.log("Email sent successfully:", result)
      setFormStatus({
        type: "success",
        message: language === "en"
          ? "Thank you for contacting us! We'll get back to you shortly."
          : "Merci de nous avoir contactés! Nous vous répondrons sous peu.",
      })
      e.target.reset() // Clear the form
    } catch (error) {
      console.error("Failed to send email:", error)
      setFormStatus({
        type: "error",
        message: language === "en"
          ? "Sorry, there was an error sending your message. Please try again or email us directly at info@cybersc.ca"
          : "Désolé, une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer ou nous envoyer un courriel directement à info@cybersc.ca",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <img src="CyberSC_Logo_Web.svg" alt="CyberSC Logo" className="logo-img" />
            <span className="company-name">
              <span className="cyber-text">Cyber</span>
              <span className="sc-text">SC</span>
            </span>
          </div>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            ☰
          </button>
          <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
            <li>
              <a href="#home" onClick={() => scrollToSection("home")}>
                {t.nav.home}
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => scrollToSection("services")}>
                {t.nav.services}
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => scrollToSection("about")}>
                {t.nav.about}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => scrollToSection("contact")}>
                {t.nav.contact}
              </a>
            </li>
            <li>
              <button className="language-toggle" onClick={toggleLanguage}>
                {language === "en" ? "FR" : "EN"}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <img src="/CyberSC_Logo_Web.svg" alt="CyberSC Logo" className="hero-logo" />
          <h1>
            {language === "en" ? (
              <>
                <span className="cyber-text">Cyber</span> <span className="sc-text">Strategic Consulting</span>
              </>
            ) : (
              <>
                <span className="cyber-text">Cyber</span> <span className="sc-text">Stratégie & Consultation</span>
              </>
            )}
          </h1>
          <h2>{t.hero.subtitle}</h2>
          <p>{t.hero.description}</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection("contact")}>
              {t.hero.getStarted}
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection("services")}>
              {t.hero.learnMore}
            </button>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section id="services" className="services-section">
        <div className="section-header">
          <h2>{t.services.title}</h2>
          <p>{t.services.subtitle}</p>
        </div>
        <div className="services-grid">
          {t.services.items.map((service, index) => {
            const IconComponent = serviceIcons[index]
            return (
              <div key={index} className="service-card" onClick={() => scrollToSection(`service-${index}`)}>
                <div className="service-icon">
                  <IconComponent size={28} strokeWidth={2} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description.substring(0, 150)}...</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="service-details-section">
        {t.services.items.map((service, index) => (
          <div key={index} id={`service-${index}`} className="service-detail">
            <div className="service-detail-content">
              <div className="service-detail-text">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="service-detail-image">
                <img
                  src={`/${service.image}`}
                  alt={service.title}
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className="section-divider"></div>

      <section id="about" className="about-section">
        <div className="about-content">
          <div className="section-header">
            <h2>{t.about.title}</h2>
            <p>{t.about.subtitle}</p>
          </div>
          <p
            style={{
              textAlign: "center",
              maxWidth: "900px",
              margin: "0 auto 2rem",
              fontSize: "1.1rem",
              color: "var(--gray)",
            }}
          >
            {t.about.description}
          </p>

          <div className="mission-card">
            <h3>{t.about.mission.title}</h3>
            <p>{t.about.mission.description}</p>
          </div>

          <div className="values-grid">
            {t.about.values.map((value, index) => {
              const IconComponent = valueIcons[index]
              return (
                <div key={index} className="value-card">
                  <div className="value-icon">
                    <IconComponent size={40} strokeWidth={2} />
                  </div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section id="contact" className="contact-section">
        <div className="section-header">
          <h2>{t.contact.title}</h2>
          <p>{t.contact.subtitle}</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          {formStatus.message && (
            <div className={`form-status ${formStatus.type}`}>
              {formStatus.message}
            </div>
          )}
          <div className="form-group">
            <label>{t.contact.form.name} *</label>
            <input type="text" name="name" required disabled={isSubmitting} />
          </div>
          <div className="form-group">
            <label>{t.contact.form.email} *</label>
            <input type="email" name="email" required disabled={isSubmitting} />
          </div>
          <div className="form-group">
            <label>{t.contact.form.phone}</label>
            <input type="tel" name="phone" disabled={isSubmitting} />
          </div>
          <div className="form-group">
            <label>{t.contact.form.company}</label>
            <input type="text" name="company" disabled={isSubmitting} />
          </div>
          <div className="form-group">
            <label>{t.contact.form.services}</label>
            <div className="checkbox-group">
              {t.services.items.map((service, index) => (
                <div key={index} className="checkbox-item">
                  <input type="checkbox" id={`service-${index}`} name={`service-${index}`} disabled={isSubmitting} />
                  <label htmlFor={`service-${index}`}>{service.title}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label>{t.contact.form.message}</label>
            <textarea name="message" disabled={isSubmitting}></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting
              ? (language === "en" ? "Sending..." : "Envoi en cours...")
              : t.contact.form.submit}
          </button>
        </form>
      </section>

      <div className="section-divider"></div>

      {/* Testimonials section temporarily hidden - placeholder content not ready for display
      <section className="testimonials-section">
        <div className="section-header">
          <h2>{t.testimonials.title}</h2>
        </div>
        <div className="testimonials-grid">
          {t.testimonials.items.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">{testimonial.author}</p>
              <p className="testimonial-company">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </section>
      */}

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{t.footer.company}</h3>
            <p>{t.footer.legal}</p>
            <p>{t.footer.tagline}</p>
            <p>info@cybersc.ca</p>
            <p>1155 Metcalfe, #1500</p>
            <p>Montreal, QC H3B 2V6</p>
          </div>
          <div className="footer-section">
            <h3>{t.footer.quickLinks}</h3>
            <ul className="footer-links">
              <li>
                <a href="#home" onClick={() => scrollToSection("home")}>
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => scrollToSection("services")}>
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => scrollToSection("about")}>
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => scrollToSection("contact")}>
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>{t.footer.followUs}</h3>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/cyber-strategic-consulting" className="social-icon" target="_blank" rel="noopener noreferrer">
                in
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t.footer.rights}</p>
          <div className="footer-bottom-links">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); setShowPrivacyModal(true); }}>{t.footer.privacy}</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); setShowTermsModal(true); }}>{t.footer.terms}</a>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="modal-overlay" onClick={() => setShowPrivacyModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowPrivacyModal(false)}>×</button>
            <h2>{language === "en" ? "Privacy Policy" : "Politique de Confidentialité"}</h2>
            <div className="modal-body">
              {language === "en" ? (
                <>
                  <p><strong>Last Updated: November 2025</strong></p>

                  <h3>1. Information We Collect</h3>
                  <p>When you contact us through our website, we collect the following information:</p>
                  <ul>
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number (optional)</li>
                    <li>Company name (optional)</li>
                    <li>Message content</li>
                  </ul>

                  <h3>2. How We Use Your Information</h3>
                  <p>We use the information you provide to:</p>
                  <ul>
                    <li>Respond to your inquiries</li>
                    <li>Provide cybersecurity consulting services</li>
                    <li>Send relevant information about our services</li>
                    <li>Comply with legal obligations</li>
                  </ul>

                  <h3>3. Data Protection</h3>
                  <p>CyberSC is committed to protecting your personal information. We implement industry-standard security measures to safeguard your data against unauthorized access, alteration, disclosure, or destruction.</p>

                  <h3>4. Third-Party Services</h3>
                  <p>We use EmailJS to process contact form submissions. Your data is transmitted securely and is subject to their privacy policy.</p>

                  <h3>5. Your Rights</h3>
                  <p>Under Canadian privacy laws (PIPEDA), you have the right to:</p>
                  <ul>
                    <li>Access your personal information</li>
                    <li>Request corrections to your data</li>
                    <li>Withdraw consent for data processing</li>
                    <li>Request deletion of your information</li>
                  </ul>

                  <h3>6. Contact Us</h3>
                  <p>For privacy-related inquiries, please contact us at: info@cybersc.ca</p>
                </>
              ) : (
                <>
                  <p><strong>Dernière mise à jour : Novembre 2025</strong></p>

                  <h3>1. Informations que nous collectons</h3>
                  <p>Lorsque vous nous contactez via notre site Web, nous collectons les informations suivantes :</p>
                  <ul>
                    <li>Nom</li>
                    <li>Adresse courriel</li>
                    <li>Numéro de téléphone (facultatif)</li>
                    <li>Nom de l'entreprise (facultatif)</li>
                    <li>Contenu du message</li>
                  </ul>

                  <h3>2. Comment nous utilisons vos informations</h3>
                  <p>Nous utilisons les informations que vous fournissez pour :</p>
                  <ul>
                    <li>Répondre à vos demandes</li>
                    <li>Fournir des services de consultation en cybersécurité</li>
                    <li>Envoyer des informations pertinentes sur nos services</li>
                    <li>Respecter les obligations légales</li>
                  </ul>

                  <h3>3. Protection des données</h3>
                  <p>CyberSC s'engage à protéger vos informations personnelles. Nous mettons en œuvre des mesures de sécurité conformes aux normes de l'industrie pour protéger vos données contre l'accès, la modification, la divulgation ou la destruction non autorisés.</p>

                  <h3>4. Services tiers</h3>
                  <p>Nous utilisons EmailJS pour traiter les soumissions de formulaires de contact. Vos données sont transmises de manière sécurisée et sont soumises à leur politique de confidentialité.</p>

                  <h3>5. Vos droits</h3>
                  <p>En vertu des lois canadiennes sur la protection de la vie privée (PIPEDA), vous avez le droit de :</p>
                  <ul>
                    <li>Accéder à vos informations personnelles</li>
                    <li>Demander des corrections à vos données</li>
                    <li>Retirer votre consentement au traitement des données</li>
                    <li>Demander la suppression de vos informations</li>
                  </ul>

                  <h3>6. Nous contacter</h3>
                  <p>Pour les demandes liées à la confidentialité, veuillez nous contacter à : info@cybersc.ca</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {showTermsModal && (
        <div className="modal-overlay" onClick={() => setShowTermsModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowTermsModal(false)}>×</button>
            <h2>{language === "en" ? "Terms of Service" : "Conditions d'Utilisation"}</h2>
            <div className="modal-body">
              {language === "en" ? (
                <>
                  <p><strong>Last Updated: January 2025</strong></p>

                  <h3>1. Acceptance of Terms</h3>
                  <p>By accessing and using the CyberSC website, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>

                  <h3>2. Services Description</h3>
                  <p>CyberSC provides cybersecurity consulting services including but not limited to:</p>
                  <ul>
                    <li>Penetration Testing</li>
                    <li>Threat Modeling</li>
                    <li>Phishing Simulation</li>
                    <li>Architecture Review</li>
                    <li>Compliance Assurance</li>
                    <li>Tailored Solutions & Trainings</li>
                  </ul>

                  <h3>3. Use of Website</h3>
                  <p>You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use of the website.</p>

                  <h3>4. Intellectual Property</h3>
                  <p>All content on this website, including text, graphics, logos, and images, is the property of CyberSC and protected by Canadian and international copyright laws.</p>

                  <h3>5. Service Agreements</h3>
                  <p>Specific terms for cybersecurity consulting services will be outlined in separate service agreements. These Terms of Service govern only the use of this website.</p>

                  <h3>6. Limitation of Liability</h3>
                  <p>CyberSC shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of this website.</p>

                  <h3>7. Confidentiality</h3>
                  <p>Information shared through the contact form is treated as confidential. All client engagements are subject to non-disclosure agreements.</p>

                  <h3>8. Changes to Terms</h3>
                  <p>CyberSC reserves the right to modify these terms at any time. Continued use of the website constitutes acceptance of modified terms.</p>

                  <h3>9. Governing Law</h3>
                  <p>These Terms of Service are governed by the laws of the Province of Quebec and the federal laws of Canada applicable therein.</p>

                  <h3>10. Contact Information</h3>
                  <p>For questions about these Terms of Service, please contact us at: info@cybersc.ca</p>
                </>
              ) : (
                <>
                  <p><strong>Dernière mise à jour : Janvier 2025</strong></p>

                  <h3>1. Acceptation des conditions</h3>
                  <p>En accédant et en utilisant le site Web de CyberSC, vous acceptez d'être lié par ces Conditions d'utilisation et toutes les lois et réglementations applicables.</p>

                  <h3>2. Description des services</h3>
                  <p>CyberSC fournit des services de conseil en cybersécurité, notamment :</p>
                  <ul>
                    <li>Tests d'intrusion</li>
                    <li>Modélisation des menaces</li>
                    <li>Simulation d'hameçonnage</li>
                    <li>Révision d'architecture</li>
                    <li>Assurance de conformité</li>
                    <li>Solutions et formations sur mesure</li>
                  </ul>

                  <h3>3. Utilisation du site Web</h3>
                  <p>Vous acceptez d'utiliser ce site Web uniquement à des fins légales et d'une manière qui ne porte pas atteinte aux droits, ne restreint pas ou n'empêche pas l'utilisation du site Web par quiconque.</p>

                  <h3>4. Propriété intellectuelle</h3>
                  <p>Tout le contenu de ce site Web, y compris le texte, les graphiques, les logos et les images, est la propriété de CyberSC et protégé par les lois canadiennes et internationales sur le droit d'auteur.</p>

                  <h3>5. Accords de service</h3>
                  <p>Les conditions spécifiques pour les services de conseil en cybersécurité seront décrites dans des accords de service distincts. Ces Conditions d'utilisation régissent uniquement l'utilisation de ce site Web.</p>

                  <h3>6. Limitation de responsabilité</h3>
                  <p>CyberSC ne sera pas responsable des dommages indirects, accessoires, spéciaux ou consécutifs découlant de ou en relation avec l'utilisation de ce site Web.</p>

                  <h3>7. Confidentialité</h3>
                  <p>Les informations partagées via le formulaire de contact sont traitées comme confidentielles. Tous les engagements clients sont soumis à des accords de non-divulgation.</p>

                  <h3>8. Modifications des conditions</h3>
                  <p>CyberSC se réserve le droit de modifier ces conditions à tout moment. L'utilisation continue du site Web constitue l'acceptation des conditions modifiées.</p>

                  <h3>9. Loi applicable</h3>
                  <p>Ces Conditions d'utilisation sont régies par les lois de la province de Québec et les lois fédérales du Canada qui y sont applicables.</p>

                  <h3>10. Coordonnées</h3>
                  <p>Pour toute question concernant ces Conditions d'utilisation, veuillez nous contacter à : info@cybersc.ca</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App