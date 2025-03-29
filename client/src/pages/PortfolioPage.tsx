import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";
import ProjectCard from "@/components/ui/project-card";

const PortfolioPage = () => {
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
    },
    {
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
      title: "Inventory Management System",
      description: "A comprehensive solution for tracking inventory, orders, and supply chain operations.",
      tags: [
        { label: "Custom Software", color: "bg-blue-100 text-blue-800" },
        { label: "Enterprise", color: "bg-gray-100 text-gray-800" }
      ],
      link: "/portfolio/inventory-management"
    },
    {
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
      title: "Customer Relationship Management",
      description: "A robust CRM platform with AI-powered analytics and customer insights.",
      tags: [
        { label: "Cross-Platform", color: "bg-purple-100 text-purple-800" },
        { label: "AI Integration", color: "bg-red-100 text-red-800" }
      ],
      link: "/portfolio/crm-platform"
    },
    {
      image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
      title: "Smart Home Automation",
      description: "A mobile application that controls smart home devices with voice commands and schedule automation.",
      tags: [
        { label: "Mobile App", color: "bg-green-100 text-green-800" },
        { label: "IoT", color: "bg-indigo-100 text-indigo-800" }
      ],
      link: "/portfolio/smart-home"
    }
  ];

  return (
    <div className="pt-16">
      {/* Portfolio Header */}
      <section className="py-16 hero-section text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold font-inter mb-4">Our Portfolio</h1>
            <p className="text-lg">
              Explore our successful projects and see how we've helped businesses transform their ideas into powerful technology solutions
            </p>
          </div>
        </Container>
      </section>

      {/* Project Grid */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeader 
            title="Client Success Stories" 
            subtitle="Browse through our diverse portfolio of projects delivered across various industries and technologies"
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
        </Container>
      </section>

      {/* Case Study Preview */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeader 
            title="Featured Case Study" 
            subtitle="A closer look at one of our most successful recent projects"
          />

          <div className="max-w-5xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2">
              <img 
                src="https://images.unsplash.com/photo-1581244277943-fe4a9c399954?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="AI-Powered Data Analytics Dashboard" 
                className="h-full w-full object-cover"
              />
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full px-2 py-1">Custom Software</span>
                  <span className="text-xs font-medium bg-red-100 text-red-800 rounded-full px-2 py-1">AI Integration</span>
                  <span className="text-xs font-medium bg-blue-100 text-blue-800 rounded-full px-2 py-1">Data Analytics</span>
                </div>
                <h3 className="text-2xl font-bold font-inter text-neutral-900 mb-4">AI-Powered Data Analytics Platform</h3>
                <p className="text-neutral-600 mb-4">
                  We developed a comprehensive data analytics platform for a Fortune 500 retail company, integrating advanced AI algorithms to process and analyze customer behavior, inventory management, and sales forecasting.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-900 mb-2">Results:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                      <span>37% increase in forecast accuracy</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                      <span>22% reduction in inventory costs</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                      <span>18% improvement in customer satisfaction</span>
                    </li>
                  </ul>
                </div>
                <a href="#" className="text-primary hover:text-primary-dark font-medium inline-flex items-center">
                  Read Full Case Study
                  <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeader 
            title="Client Testimonials" 
            subtitle="What our clients say about working with CrossGo"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 relative">
              <div className="text-4xl text-primary opacity-20 absolute top-4 right-4">
                <i className="fas fa-quote-right"></i>
              </div>
              <p className="text-neutral-700 mb-6 relative z-10">
                "The team at CrossGo delivered a cross-platform solution that exceeded our expectations. Their expertise in AI integration helped us implement features we didn't think were possible within our timeline and budget."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-neutral-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Sarah Johnson</h4>
                  <p className="text-sm text-neutral-600">CTO, TechRetail Inc.</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 relative">
              <div className="text-4xl text-primary opacity-20 absolute top-4 right-4">
                <i className="fas fa-quote-right"></i>
              </div>
              <p className="text-neutral-700 mb-6 relative z-10">
                "Working with CrossGo on our security surveillance system was a game-changer. Their object tracking technology is remarkably accurate and has significantly improved our operational efficiency."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-neutral-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Michael Chen</h4>
                  <p className="text-sm text-neutral-600">Security Director, SecureNet</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 relative">
              <div className="text-4xl text-primary opacity-20 absolute top-4 right-4">
                <i className="fas fa-quote-right"></i>
              </div>
              <p className="text-neutral-700 mb-6 relative z-10">
                "The medical diagnostic tool developed by CrossGo has transformed how our physicians analyze patient data. The AI integration is seamless and has improved our diagnostic accuracy by over 25%."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-neutral-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Dr. Emily Rodriguez</h4>
                  <p className="text-sm text-neutral-600">Medical Director, HealthTech Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default PortfolioPage;
