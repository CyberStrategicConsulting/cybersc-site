"use client"

import { useState } from "react"
import "./App.css"
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
              "Our penetration testing services simulate real-world cyberattacks to identify vulnerabilities in your systems before malicious actors can exploit them. We conduct thorough assessments of your networks, applications, clouds, and infrastructures, providing detailed reports with actionable remediation strategies to strengthen your security posture.",
            image: "Penetration_Testing.png"
          },
          {
            title: "Threat Modeling",
            description:
              "We help you understand and anticipate potential security threats through comprehensive threat modeling. Our experts analyze your business processes, identify critical assets, and map potential attack vectors. This proactive approach enables you to prioritize security investments and implement effective countermeasures before threats materialize.",
            image: "Threat_Modeling.png"
          },
          {
            title: "Phishing Simulation",
            description:
              "Human error remains one of the biggest security risks. Our phishing simulation campaigns test your employees' awareness and response to social engineering attacks. We provide realistic scenarios, track engagement metrics, and deliver targeted training to build a security-conscious culture within your organization.",
            image: "Phishing_Simulation.png"
          },
          {
            title: "Architecture Review",
            description:
              "Our security architecture review service examines your IT infrastructure design to ensure it follows industry best practices and security principles. We evaluate your network topology, cloud configurations, access controls, and data flow to identify architectural weaknesses and recommend improvements that enhance both security and operational efficiency.",
            image: "Architecture_Review.png"
          },
          {
            title: "Compliance Assurance",
            description:
              "Navigate complex regulatory requirements with confidence. We provide comprehensive compliance assessments and ongoing support for standards including PIPEDA, SOC 2, ISO 27001, and industry-specific regulations. Our team ensures your security controls meet regulatory requirements while maintaining operational flexibility.",
            image: "Compliance_Assurance.png"
          },
          {
            title: "Tailored Solutions & Trainings",
            description:
              "Every organization has unique security needs. We develop customized cybersecurity solutions and training programs tailored to your specific industry, risk profile, and business objectives. From executive briefings to hands-on technical workshops, we empower your team with the knowledge and tools needed to maintain robust security practices.",
            image: "Tailored_Solutions.png"
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
              "Nos services de tests d'intrusion simulent des cyberattaques réelles afin d'identifier les vulnérabilités de vos systèmes avant qu'elles ne puissent être exploitées par des acteurs malveillants. Nous réalisons des évaluations approfondies de vos réseaux, applications, environnements infonuagiques et infrastructures, et fournissons des rapports détaillés accompagnés de stratégies de remédiation concrètes pour renforcer votre posture de cybersécurité.",
            image: "Penetration_Testing.png"
          },
          {
            title: "Modélisation des Menaces",
            description:
              "Nous vous aidons à comprendre et à anticiper les menaces de sécurité potentielles grâce à une modélisation complète des menaces. Nos experts analysent vos processus d'affaires, identifient les actifs critiques et cartographient les vecteurs d'attaque possibles. Cette approche proactive vous permet de prioriser vos investissements en cybersécurité et de mettre en œuvre des contre-mesures efficaces avant que les menaces ne se concrétisent.",
            image: "Threat_Modeling.png"
          },
          {
            title: "Simulation d'Hameçonnage",
            description:
              "L'erreur humaine demeure l'un des principaux risques en cybersécurité. Nos campagnes de simulation d'hameçonnage évaluent la sensibilisation et la réactivité de vos employés face aux attaques d'ingénierie sociale. Nous proposons des scénarios réalistes, suivons les indicateurs d'engagement et offrons une formation ciblée afin de bâtir une culture organisationnelle axée sur la sécurité.",
            image: "Phishing_Simulation.png"
          },
          {
            title: "Révision d'Architecture",
            description:
              "Notre service de révision d'architecture de sécurité analyse la conception de votre infrastructure informatique afin de garantir sa conformité aux meilleures pratiques et aux principes de sécurité de l'industrie. Nous évaluons la topologie de votre réseau, vos configurations infonuagiques, vos contrôles d'accès et vos flux de données pour identifier les faiblesses architecturales et recommander des améliorations renforçant à la fois la sécurité et l'efficacité opérationnelle.",
            image: "Architecture_Review.png"
          },
          {
            title: "Assurance de Conformité",
            description:
              "Naviguez avec confiance dans la complexité des exigences réglementaires. Nous offrons des évaluations de conformité complètes et un accompagnement continu pour les cadres tels que PIPEDA, SOC 2, ISO 27001 et d'autres réglementations propres à votre secteur. Notre équipe veille à ce que vos contrôles de sécurité répondent aux exigences réglementaires tout en préservant votre agilité opérationnelle.",
            image: "Compliance_Assurance.png"
          },
          {
            title: "Solutions et Formations Sur Mesure",
            description:
              "Chaque organisation a des besoins de sécurité uniques. Nous concevons des solutions de cybersécurité sur mesure et des programmes de formation adaptés à votre secteur d'activité, à votre profil de risque et à vos objectifs d'affaires. Des séances d'information pour dirigeants aux ateliers techniques pratiques, nous donnons à votre équipe les connaissances et les outils nécessaires pour maintenir des pratiques de sécurité robustes et durables.",
            image: "Tailored_Solutions_Trainings.png"
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
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    const services = []
    t.services.items.forEach((service, index) => {
      if (data[`service-${index}`]) {
        services.push(service.title)
      }
    })

    const mailtoLink = `mailto:info@cybersc.ca?subject=Contact from ${data.name}&body=Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0APhone: ${data.phone}%0D%0ACompany: ${data.company}%0D%0AServices: ${services.join(", ")}%0D%0AMessage: ${data.message}`
    window.location.href = mailtoLink
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
            <span className="cyber-text">Cyber</span> <span className="sc-text">Strategic Consulting</span>
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
          <div className="form-group">
            <label>{t.contact.form.name} *</label>
            <input type="text" name="name" required />
          </div>
          <div className="form-group">
            <label>{t.contact.form.email} *</label>
            <input type="email" name="email" required />
          </div>
          <div className="form-group">
            <label>{t.contact.form.phone}</label>
            <input type="tel" name="phone" />
          </div>
          <div className="form-group">
            <label>{t.contact.form.company}</label>
            <input type="text" name="company" />
          </div>
          <div className="form-group">
            <label>{t.contact.form.services}</label>
            <div className="checkbox-group">
              {t.services.items.map((service, index) => (
                <div key={index} className="checkbox-item">
                  <input type="checkbox" id={`service-${index}`} name={`service-${index}`} />
                  <label htmlFor={`service-${index}`}>{service.title}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label>{t.contact.form.message}</label>
            <textarea name="message"></textarea>
          </div>
          <button type="submit" className="submit-btn">
            {t.contact.form.submit}
          </button>
        </form>
      </section>

      <div className="section-divider"></div>

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
            <a href="#privacy">{t.footer.privacy}</a>
            <a href="#terms">{t.footer.terms}</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App