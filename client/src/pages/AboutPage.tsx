import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";

const AboutPage = () => {
  return (
    <div className="pt-16">
      {/* About Header */}
      <section className="py-16 bg-primary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold font-inter mb-4">About CrossGo</h1>
            <p className="text-lg">
              Learn about our company, mission, values, and the talented team behind our innovative technology solutions
            </p>
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-inter text-neutral-900 mb-6">Our Story</h2>
                <p className="text-lg text-neutral-600 mb-6">
                  CrossGo was founded with a simple but powerful mission: to transform innovative ideas into practical technology solutions that drive real business value.
                </p>
                <p className="text-lg text-neutral-600 mb-6">
                  What began as a small team of passionate developers has grown into a full-service software development company with expertise spanning custom software, cross-platform applications, and cutting-edge AI integration.
                </p>
                <p className="text-lg text-neutral-600">
                  Today, we're proud to partner with businesses of all sizes across various industries, helping them leverage technology to optimize workflows, enhance user experiences, and achieve their strategic goals.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Team collaborating" 
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

      {/* Our Mission & Vision */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-16 h-16 rounded-full bg-primary-light/10 flex items-center justify-center mb-6">
                  <i className="fas fa-bullseye text-2xl text-primary"></i>
                </div>
                <h3 className="text-2xl font-bold font-inter text-neutral-900 mb-4">Our Mission</h3>
                <p className="text-lg text-neutral-600">
                  To create technology solutions that empower businesses to innovate, adapt, and thrive in an ever-changing digital landscape. We aim to be trusted partners who deliver value through expertise, reliability, and a deep understanding of our clients' needs.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-16 h-16 rounded-full bg-primary-light/10 flex items-center justify-center mb-6">
                  <i className="fas fa-eye text-2xl text-primary"></i>
                </div>
                <h3 className="text-2xl font-bold font-inter text-neutral-900 mb-4">Our Vision</h3>
                <p className="text-lg text-neutral-600">
                  To be at the forefront of technology innovation, recognized globally for our commitment to excellence, creative problem-solving, and the tangible business results we achieve for our clients. We envision a world where technology works seamlessly for people.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeader 
            title="Our Core Values" 
            subtitle="The principles that guide everything we do at CrossGo"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 hover:border-primary/30 transition-colors">
              <div className="w-14 h-14 rounded-full bg-primary-light/10 flex items-center justify-center mb-6">
                <i className="fas fa-lightbulb text-2xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold font-inter text-neutral-900 mb-3">Innovation</h3>
              <p className="text-neutral-600">
                We constantly explore new technologies and approaches to deliver cutting-edge solutions that give our clients a competitive advantage in their markets.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 hover:border-primary/30 transition-colors">
              <div className="w-14 h-14 rounded-full bg-primary-light/10 flex items-center justify-center mb-6">
                <i className="fas fa-handshake text-2xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold font-inter text-neutral-900 mb-3">Partnership</h3>
              <p className="text-neutral-600">
                We believe in building long-term relationships with our clients based on mutual trust, open communication, and shared success. Your goals become our goals.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 hover:border-primary/30 transition-colors">
              <div className="w-14 h-14 rounded-full bg-primary-light/10 flex items-center justify-center mb-6">
                <i className="fas fa-award text-2xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold font-inter text-neutral-900 mb-3">Excellence</h3>
              <p className="text-neutral-600">
                We are committed to delivering exceptional quality in everything we do, from the code we write to the customer service we provide. We never compromise on excellence.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 hover:border-primary/30 transition-colors">
              <div className="w-14 h-14 rounded-full bg-primary-light/10 flex items-center justify-center mb-6">
                <i className="fas fa-users text-2xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold font-inter text-neutral-900 mb-3">Collaboration</h3>
              <p className="text-neutral-600">
                We believe that the best results come from diverse teams working together with a shared purpose. We foster a collaborative environment both internally and with our clients.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 hover:border-primary/30 transition-colors">
              <div className="w-14 h-14 rounded-full bg-primary-light/10 flex items-center justify-center mb-6">
                <i className="fas fa-shield-alt text-2xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold font-inter text-neutral-900 mb-3">Integrity</h3>
              <p className="text-neutral-600">
                We operate with complete transparency and accountability. We do what we say we'll do, and we're honest about challenges and setbacks when they occur.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 hover:border-primary/30 transition-colors">
              <div className="w-14 h-14 rounded-full bg-primary-light/10 flex items-center justify-center mb-6">
                <i className="fas fa-user-tie text-2xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold font-inter text-neutral-900 mb-3">Client Focus</h3>
              <p className="text-neutral-600">
                We are dedicated to understanding our clients' unique challenges and delivering solutions that address their specific needs, not one-size-fits-all approaches.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeader 
            title="Our Team" 
            subtitle="Meet the talented professionals who make CrossGo's success possible"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md text-center">
              <div className="h-64 bg-neutral-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-inter text-neutral-900 mb-1">Alex Thompson</h3>
                <p className="text-primary mb-3">Chief Executive Officer</p>
                <p className="text-neutral-600 mb-4">
                  With 15+ years in software development and business leadership, Alex brings vision and strategic direction to CrossGo.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md text-center">
              <div className="h-64 bg-neutral-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-inter text-neutral-900 mb-1">Maya Rodriguez</h3>
                <p className="text-primary mb-3">Chief Technology Officer</p>
                <p className="text-neutral-600 mb-4">
                  Maya oversees our technical strategy and ensures we stay at the cutting edge of software development and AI technologies.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md text-center">
              <div className="h-64 bg-neutral-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-inter text-neutral-900 mb-1">David Chen</h3>
                <p className="text-primary mb-3">AI Research Director</p>
                <p className="text-neutral-600 mb-4">
                  With a Ph.D. in Computer Science, David leads our AI research and development initiatives with expertise in machine learning.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md text-center">
              <div className="h-64 bg-neutral-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-inter text-neutral-900 mb-1">Sarah Patel</h3>
                <p className="text-primary mb-3">UX Design Lead</p>
                <p className="text-neutral-600 mb-4">
                  Sarah ensures all our software solutions are intuitive, accessible, and deliver exceptional user experiences across platforms.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AboutPage;
