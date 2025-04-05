import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";
import ServiceCard from "@/components/ui/service-card";
import FeatureCard from "@/components/ui/feature-card";
import ProjectCard from "@/components/ui/project-card";
import ContactForm from "@/components/ui/contact-form";
import { scrollToSection } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: "fas fa-globe",
      title: t('home.services.custom_software.title'),
      description: t('home.services.custom_software.description'),
      link: "#custom-development"
    },
    {
      icon: "fas fa-mobile-alt",
      title: t('home.services.cross_platform.title'),
      description: t('home.services.cross_platform.description'),
      link: "#cross-platform"
    },
    {
      icon: "fas fa-brain",
      title: t('home.services.ai_integration.title'),
      description: t('home.services.ai_integration.description'),
      link: "#ai-integration"
    },
    {
      icon: "fas fa-glasses",
      title: t('home.services.object_tracking.title'),
      description: t('home.services.object_tracking.description'),
      link: "#object-tracking"
    }
  ];

  const features = [
    {
      icon: "fas fa-user-tie",
      title: t('home.features.expertise.title'),
      description: t('home.features.expertise.description')
    },
    {
      icon: "fas fa-rocket",
      title: t('home.features.quality.title'),
      description: t('home.features.quality.description')
    },
    {
      icon: "fas fa-puzzle-piece",
      title: t('home.features.support.title'),
      description: t('home.features.support.description')
    }
  ];

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
      title: t('portfolio.projects.fashion.title'),
      description: t('portfolio.projects.fashion.description'),
      tags: [
        { label: t('portfolio.tags.cross_platform'), color: "bg-blue-100 text-blue-800" },
        { label: t('portfolio.tags.ecommerce'), color: "bg-purple-100 text-purple-800" }
      ],
      link: "/portfolio/fashion-retail"
    },
    {
      image: "https://images.unsplash.com/photo-1581092335397-9fa73b6c2904?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
      title: t('portfolio.projects.surveillance.title'),
      description: t('portfolio.projects.surveillance.description'),
      tags: [
        { label: t('portfolio.tags.object_tracking'), color: "bg-green-100 text-green-800" },
        { label: t('portfolio.tags.security'), color: "bg-yellow-100 text-yellow-800" }
      ],
      link: "/portfolio/surveillance-system"
    },
    {
      image: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
      title: t('portfolio.projects.medical.title'),
      description: t('portfolio.projects.medical.description'),
      tags: [
        { label: t('portfolio.tags.ai'), color: "bg-red-100 text-red-800" },
        { label: t('portfolio.tags.healthcare'), color: "bg-indigo-100 text-indigo-800" }
      ],
      link: "/portfolio/medical-diagnostic"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section id="home" className="hero-section text-white">
        <Container className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t('home.hero.title')}
            </h1>
            <p className="text-lg mb-10 max-w-2xl">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-white text-primary hover:bg-neutral-100"
                onClick={() => scrollToSection('contact')}
              >
                {t('home.hero.cta')}
              </Button>
              <Button 
                className="bg-transparent border border-white text-white hover:bg-white/10"
                onClick={() => scrollToSection('services')}
              >
                {t('common.menu.services')}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-16 bg-white">
        <Container>
          <SectionHeader 
            title={t('home.services.title')}
            subtitle={t('home.services.description')}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Detailed Services Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div id="custom-development" className="mb-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-bold font-inter text-neutral-900 mb-4">{t('home.services.custom_software.title')}</h2>
                <p className="text-neutral-600 mb-6">
                  {t('services.custom_software.description').split('.')[0]}.
                </p>
                <ul className="space-y-3">
                  {(t('services.custom_software.benefits', { returnObjects: true }) as string[]).map((benefit: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Team collaborating on software development" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div id="cross-platform" className="mb-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Cross-platform applications on different devices" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-inter text-neutral-900 mb-4">{t('home.services.cross_platform.title')}</h2>
                <p className="text-neutral-600 mb-6">
                  {t('services.cross_platform.description').split('.')[0]}.
                </p>
                <ul className="space-y-3">
                  {(t('services.cross_platform.benefits', { returnObjects: true }) as string[]).map((benefit: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div id="ai-integration" className="mb-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-bold font-inter text-neutral-900 mb-4">{t('home.services.ai_integration.title')}</h2>
                <p className="text-neutral-600 mb-6">
                  {t('services.ai_integration.description').split('.')[0]}.
                </p>
                <ul className="space-y-3">
                  {(t('services.ai_integration.benefits', { returnObjects: true }) as string[]).map((benefit: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="AI technology visualization" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div id="object-tracking" className="mb-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1563396983906-b3795482a59a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Object tracking and recognition" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-inter text-neutral-900 mb-4">{t('home.services.object_tracking.title')}</h2>
                <p className="text-neutral-600 mb-6">
                  {t('services.object_tracking.description').split('.')[0]}.
                </p>
                <ul className="space-y-3">
                  {(t('services.object_tracking.benefits', { returnObjects: true }) as string[]).map((benefit: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeader 
            title={t('home.features.title')}
            subtitle={t('home.features.description')}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-neutral-50">
        <Container>
          <SectionHeader 
            title={t('portfolio.title')}
            subtitle={t('portfolio.description')}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button className="inline-flex items-center justify-center bg-white border border-primary text-primary hover:bg-primary hover:text-white">
                {t('portfolio.view_all')}
                <i className="fas fa-arrow-right ml-2"></i>
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-inter text-neutral-900 mb-6">{t('about.title')}</h2>
                <p className="text-lg text-neutral-600 mb-6">
                  {t('about.main_paragraph')}
                </p>
                <p className="text-lg text-neutral-600 mb-6">
                  {t('about.mission')}
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-light/10 flex items-center justify-center mr-4">
                      <i className="fas fa-lightbulb text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900">{t('about.values.innovation.title')}</h3>
                      <p className="text-neutral-600">{t('about.values.innovation.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-light/10 flex items-center justify-center mr-4">
                      <i className="fas fa-users text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900">{t('about.values.collaboration.title')}</h3>
                      <p className="text-neutral-600">{t('about.values.collaboration.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-light/10 flex items-center justify-center mr-4">
                      <i className="fas fa-award text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900">{t('about.values.excellence.title')}</h3>
                      <p className="text-neutral-600">{t('about.values.excellence.description')}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Team collaboration" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-5 -left-5 bg-primary text-white p-4 rounded-lg shadow-lg">
                  <div className="text-4xl font-bold mb-1">{t('about.experience.years')}</div>
                  <div className="text-sm">{t('about.experience.text')}</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-neutral-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-inter text-neutral-900 mb-6">{t('contact.title')}</h2>
                <p className="text-lg text-neutral-600 mb-8">
                  {t('contact.description')}
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-light/10 flex items-center justify-center mr-4 mt-1">
                      <i className="fas fa-map-marker-alt text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">{t('contact.address.title')}</h3>
                      <p className="text-neutral-600">{t('contact.address.value')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-light/10 flex items-center justify-center mr-4 mt-1">
                      <i className="fas fa-envelope text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">{t('contact.email.title')}</h3>
                      <p className="text-neutral-600">{t('contact.email.value')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-light/10 flex items-center justify-center mr-4 mt-1">
                      <i className="fas fa-phone-alt text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">{t('contact.phone.title')}</h3>
                      <p className="text-neutral-600">{t('contact.phone.value')}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
