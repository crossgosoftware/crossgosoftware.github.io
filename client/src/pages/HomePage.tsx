import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";
import ServiceCard from "@/components/ui/service-card";
import FeatureCard from "@/components/ui/feature-card";
import ProjectCard from "@/components/ui/project-card";
import { scrollToSection } from "@/lib/utils";

const HomePage = () => {
  const services = [
    {
      icon: "fas fa-laptop-code",
      title: "Custom Software Development",
      description: "Design and develop user-friendly software with intuitive interfaces tailored to your business needs.",
      link: "/services#custom-development"
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Cross-Platform Development",
      description: "Build applications that run seamlessly on Windows, macOS, Linux, iOS, and Android platforms.",
      link: "/services#cross-platform"
    },
    {
      icon: "fas fa-brain",
      title: "AI Integration",
      description: "Leverage AI for image & audio processing with face recognition, speech analysis, and LLM technologies.",
      link: "/services#ai-integration"
    },
    {
      icon: "fas fa-eye",
      title: "Object Tracking",
      description: "Implement real-time tracking and recognition of objects for security, behavior recognition and automation.",
      link: "/services#object-tracking"
    }
  ];

  const features = [
    {
      icon: "fas fa-user-tie",
      title: "Experienced Experts",
      description: "Our team consists of specialized engineers in software development, AI, and UX/UI design with years of industry experience."
    },
    {
      icon: "fas fa-rocket",
      title: "Cutting-Edge Technology",
      description: "We stay updated with the latest technologies to deliver optimal solutions that keep your business ahead of the competition."
    },
    {
      icon: "fas fa-puzzle-piece",
      title: "Tailored Solutions",
      description: "We develop flexible solutions designed to meet your specific business needs, not one-size-fits-all approaches."
    },
    {
      icon: "fas fa-headset",
      title: "Long-Term Support",
      description: "We provide ongoing maintenance and support throughout the entire lifecycle of your product to ensure optimal performance."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Enterprise Security",
      description: "We implement robust security measures to protect your data and applications from potential threats and vulnerabilities."
    },
    {
      icon: "fas fa-handshake",
      title: "Collaborative Approach",
      description: "We work closely with your team to understand your goals and ensure that our solutions align with your business objectives."
    }
  ];

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
      title: "Fashion Retail Platform",
      description: "A multi-platform shopping experience with AI-powered recommendations and visual search.",
      tags: [
        { label: "Cross-Platform App", color: "bg-blue-100 text-blue-800" },
        { label: "E-commerce", color: "bg-purple-100 text-purple-800" }
      ],
      link: "/portfolio/fashion-retail"
    },
    {
      image: "https://images.unsplash.com/photo-1581092335397-9fa73b6c2904?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
      title: "Smart Surveillance System",
      description: "An intelligent security solution with real-time object tracking and behavior analysis.",
      tags: [
        { label: "Object Tracking", color: "bg-green-100 text-green-800" },
        { label: "Security", color: "bg-yellow-100 text-yellow-800" }
      ],
      link: "/portfolio/surveillance-system"
    },
    {
      image: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
      title: "Medical Diagnostic Assistant",
      description: "An AI-powered tool that helps healthcare professionals analyze medical images and diagnose conditions.",
      tags: [
        { label: "AI Integration", color: "bg-red-100 text-red-800" },
        { label: "Healthcare", color: "bg-indigo-100 text-indigo-800" }
      ],
      link: "/portfolio/medical-diagnostic"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section id="home" className="hero-gradient text-white">
        <Container className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-inter leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-100">CrossGo</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-8">Transforming Ideas into Technology Solutions</p>
            <p className="text-lg mb-10 max-w-2xl mx-auto">
              Your partner for innovative software & AI solutions. We help businesses optimize workflows, enhance user experience, and leverage the power of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="bg-white text-primary hover:bg-neutral-100"
                onClick={() => scrollToSection('services')}
              >
                Explore Our Services
              </Button>
              <Button 
                className="bg-accent hover:bg-accent-dark text-white"
                onClick={() => scrollToSection('contact')}
              >
                Discuss Your Project
              </Button>
            </div>
          </div>
        </Container>
        <div className="bg-white w-full h-16 rounded-tl-[5rem]"></div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-16 bg-white">
        <Container>
          <SectionHeader 
            title="Our Expertise" 
            subtitle="We deliver cutting-edge technology solutions tailored to meet your business needs"
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
                <h2 className="text-2xl md:text-3xl font-bold font-inter text-neutral-900 mb-4">Custom Software Development</h2>
                <p className="text-neutral-600 mb-6">
                  We design and develop user-friendly software with intuitive interfaces that meet the specific needs of your business.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                    <span>Intuitive user interfaces to enhance user experience</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                    <span>Optimized performance and enterprise-grade security</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                    <span>Professional development process from consulting to maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                    <span>Scalable architecture to grow with your business</span>
                  </li>
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
                <h2 className="text-2xl md:text-3xl font-bold font-inter text-neutral-900 mb-4">Cross-Platform Development</h2>
                <p className="text-neutral-600 mb-6">
                  We develop applications that run seamlessly across Windows, macOS, Linux, iOS, and Android platforms with consistent UI/UX.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                    <span>Simultaneous deployment across multiple platforms</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                    <span>High performance and consistent user experience</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                    <span>Cost-effective development and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                    <span>Native-like features across all devices</span>
                  </li>
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
            title="Why Choose Us" 
            subtitle="Partner with CrossGo for technology solutions that elevate your business"
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
            title="Our Work" 
            subtitle="Explore some of our recent projects and success stories"
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
                View All Projects
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
                <h2 className="text-3xl md:text-4xl font-bold font-inter text-neutral-900 mb-6">About Us</h2>
                <p className="text-lg text-neutral-600 mb-6">
                  We are a software company specializing in providing modern technology solutions that help businesses optimize workflows, enhance user experience, and leverage the power of artificial intelligence.
                </p>
                <p className="text-lg text-neutral-600 mb-6">
                  At CrossGo, we believe that technology should work for people, not the other way around. Our mission is to create intuitive, powerful software that solves real problems and creates meaningful impact.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-light/10 flex items-center justify-center mr-4">
                      <i className="fas fa-lightbulb text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900">Innovation</h3>
                      <p className="text-neutral-600">We constantly explore new technologies and approaches</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-light/10 flex items-center justify-center mr-4">
                      <i className="fas fa-users text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900">Collaboration</h3>
                      <p className="text-neutral-600">We work closely with clients to understand their needs</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-light/10 flex items-center justify-center mr-4">
                      <i className="fas fa-award text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900">Excellence</h3>
                      <p className="text-neutral-600">We strive for quality in everything we deliver</p>
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
                  <div className="text-4xl font-bold mb-1">10+</div>
                  <div className="text-sm">Years of Excellence</div>
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
                <h2 className="text-3xl md:text-4xl font-bold font-inter text-neutral-900 mb-6">Contact Us</h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Ready to transform your ideas into technology solutions? Reach out to discuss your project or learn more about our services.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-light/10 flex items-center justify-center mr-4 mt-1">
                      <i className="fas fa-map-marker-alt text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">Address</h3>
                      <p className="text-neutral-600">Your Location</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-light/10 flex items-center justify-center mr-4 mt-1">
                      <i className="fas fa-envelope text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">Email</h3>
                      <p className="text-neutral-600">info@crossgo.tech</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-light/10 flex items-center justify-center mr-4 mt-1">
                      <i className="fas fa-phone-alt text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">Phone</h3>
                      <p className="text-neutral-600">Your Phone Number</p>
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
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold font-inter text-neutral-900 mb-6">Get in Touch</h3>
                  
                  <form>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" 
                          placeholder="Your name" 
                          required 
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">Company</label>
                        <input 
                          type="text" 
                          id="company" 
                          name="company" 
                          className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" 
                          placeholder="Your company (optional)" 
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" 
                          placeholder="Your email" 
                          required 
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">Phone</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" 
                          placeholder="Your phone (optional)" 
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1">Service Interest</label>
                      <select 
                        id="service" 
                        name="service" 
                        defaultValue=""
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                      >
                        <option value="" disabled>What service are you interested in?</option>
                        <option value="custom-development">Custom Software Development</option>
                        <option value="cross-platform">Cross-Platform Development</option>
                        <option value="ai-integration">AI Integration</option>
                        <option value="object-tracking">Object Tracking</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows={4} 
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" 
                        placeholder="Tell us about your project or question" 
                        required
                      ></textarea>
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
