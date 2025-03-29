import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";

const ServicesPage = () => {
  return (
    <div className="pt-16">
      {/* Services Header */}
      <section className="py-16 hero-section text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold font-inter mb-4">Our Services</h1>
            <p className="text-lg">
              We provide cutting-edge technology solutions tailored to your business needs. From custom software development to AI integration, our team delivers excellence at every step.
            </p>
          </div>
        </Container>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeader 
            title="How We Help You Innovate" 
            subtitle="Our comprehensive services are designed to help your business leverage the latest technologies and achieve your goals"
          />

          {/* Custom Software Development */}
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

          {/* Cross-Platform Development */}
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

          {/* AI Integration */}
          <div id="ai-integration" className="mb-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-bold font-inter text-neutral-900 mb-4">AI Integration</h2>
                <p className="text-neutral-600 mb-6">
                  We enhance your applications with cutting-edge AI capabilities for image and audio processing using modern Deep Learning technologies.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                    <span>Face, object, and text recognition from images/videos</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                    <span>Speech recognition and text-to-speech conversion</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                    <span>Implementation of Large Language Models (LLM)</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                    <span>ONNX for high-performance image processing</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="AI technology concept" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Object Tracking */}
          <div id="object-tracking">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1617804021859-0ba3f6482a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Object tracking technology" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-inter text-neutral-900 mb-4">Object Tracking</h2>
                <p className="text-neutral-600 mb-6">
                  We implement real-time tracking and recognition algorithms for security surveillance, behavior recognition, and industrial automation.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                    <span>Real-time object detection and tracking</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                    <span>Reduced lag with optimized algorithms</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                    <span>Applications in security and industrial systems</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                    <span>Custom solutions for specific tracking needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeader
            title="Our Development Process"
            subtitle="We follow a structured methodology to ensure quality, transparency, and successful delivery of your project"
          />

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-light/20"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-12">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mr-6">1</div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                    <h3 className="text-xl font-bold font-inter text-neutral-900 mb-2">Discovery & Requirements Analysis</h3>
                    <p className="text-neutral-600">We begin by understanding your business objectives, target audience, and project requirements to establish clear goals and expectations.</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-12">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mr-6">2</div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                    <h3 className="text-xl font-bold font-inter text-neutral-900 mb-2">Planning & Architecture Design</h3>
                    <p className="text-neutral-600">Our team creates a detailed project plan and designs the system architecture, ensuring scalability, security, and optimal performance.</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-12">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mr-6">3</div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                    <h3 className="text-xl font-bold font-inter text-neutral-900 mb-2">Development & Implementation</h3>
                    <p className="text-neutral-600">Our developers build your solution using agile methodologies, with regular review cycles to ensure we're meeting your requirements.</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-12">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mr-6">4</div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                    <h3 className="text-xl font-bold font-inter text-neutral-900 mb-2">Testing & Quality Assurance</h3>
                    <p className="text-neutral-600">We conduct thorough testing, including functionality, performance, security, and usability testing to ensure a high-quality product.</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mr-6">5</div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                    <h3 className="text-xl font-bold font-inter text-neutral-900 mb-2">Deployment & Ongoing Support</h3>
                    <p className="text-neutral-600">After successful deployment, we provide ongoing maintenance, support, and updates to ensure your solution remains effective and secure.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ServicesPage;
