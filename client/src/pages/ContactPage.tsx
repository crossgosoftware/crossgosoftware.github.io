import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";
import ContactForm from "@/components/ui/contact-form";

const ContactPage = () => {

  return (
    <div className="pt-16">
      {/* Contact Header */}
      <section className="py-16 hero-section text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold font-inter mb-4">Contact Us</h1>
            <p className="text-lg">
              Reach out to discuss your project, request a consultation, or learn more about our services
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl md:text-3xl font-bold font-inter text-neutral-900 mb-6">Get in Touch</h2>
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
                      <p className="text-neutral-600">CT3 Ori Garden Building, lienchieu, da nang, Vietnam</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-light/10 flex items-center justify-center mr-4 mt-1">
                      <i className="fas fa-envelope text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">Email</h3>
                      <p className="text-neutral-600">crossgosoftwaresolution@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-light/10 flex items-center justify-center mr-4 mt-1">
                      <i className="fas fa-phone-alt text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">Phone</h3>
                      <p className="text-neutral-600">(+84)0899248136</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-light/10 flex items-center justify-center mr-4 mt-1">
                      <i className="fas fa-clock text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">Business Hours</h3>
                      <p className="text-neutral-600">Monday to Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-neutral-600">Saturday and Sunday: Closed</p>
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
                  <h3 className="text-2xl font-bold font-inter text-neutral-900 mb-6">Send Us a Message</h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Map or Location */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeader 
            title="Our Location" 
            subtitle="Find us at our headquarters or contact us for a virtual meeting"
          />

          <div className="max-w-6xl mx-auto h-96 bg-neutral-200 rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-neutral-600">Map placeholder - Your Google Maps embed would go here</p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeader 
            title="Frequently Asked Questions" 
            subtitle="Common questions about our services and processes"
          />

          <div className="max-w-3xl mx-auto grid gap-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <h3 className="text-xl font-semibold font-inter text-neutral-900 mb-3">What industries do you work with?</h3>
              <p className="text-neutral-600">
                We work with clients across various industries including healthcare, retail, finance, manufacturing, and education. Our solutions are adaptable to meet the unique requirements of different sectors.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <h3 className="text-xl font-semibold font-inter text-neutral-900 mb-3">How long does a typical project take?</h3>
              <p className="text-neutral-600">
                Project timelines vary depending on complexity and scope. A small-scale application might take 2-3 months, while enterprise-level solutions can take 6+ months. We'll provide a detailed timeline after our initial consultation.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <h3 className="text-xl font-semibold font-inter text-neutral-900 mb-3">Do you offer ongoing maintenance and support?</h3>
              <p className="text-neutral-600">
                Yes, we provide comprehensive maintenance and support services to ensure your software continues to operate smoothly. We offer various support packages to meet different needs and budgets.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <h3 className="text-xl font-semibold font-inter text-neutral-900 mb-3">Can you work with our existing systems?</h3>
              <p className="text-neutral-600">
                Absolutely. We have extensive experience integrating with existing systems and APIs. Our solutions can enhance your current infrastructure or work alongside it without disrupting your operations.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <h3 className="text-xl font-semibold font-inter text-neutral-900 mb-3">What is your project development process?</h3>
              <p className="text-neutral-600">
                We follow an agile development methodology with iterative cycles. Our process includes discovery, planning, design, development, testing, deployment, and ongoing support. We maintain transparent communication throughout each phase.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ContactPage;
