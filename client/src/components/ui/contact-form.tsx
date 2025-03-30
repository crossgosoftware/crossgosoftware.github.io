import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail, ContactFormData } from "@/services/email-service";
import emailjs from '@emailjs/browser';
import { useTranslation } from "react-i18next";

// Define form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

const ContactForm = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    try {
      contactFormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    try {
      // Initialize EmailJS
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '');
      
      const success = await sendContactEmail(formData);
      
      if (success) {
        toast({
          title: t("contact.toast.success.title", "Message sent!"),
          description: t("contact.toast.success.description", "Thank you for your message. We'll get back to you soon."),
        });
        
        // Show success message
        setShowSuccessMessage(true);
        
        // Reset form after successful submission
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
        
        // Hide success message after 8 seconds
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 8000);
      } else {
        toast({
          title: t("contact.toast.error.title", "Error"),
          description: t("contact.toast.error.description", "Failed to send your message. Please try again later."),
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: t("contact.toast.error.title", "Error"),
        description: t("contact.toast.error.unexpectedError", "An unexpected error occurred. Please try again later."),
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md">
      <h3 className="text-2xl font-bold font-inter text-neutral-900 mb-6">
        {t("contact.getInTouch", "Get in Touch")}
      </h3>
      
      {/* Success message display */}
      {showSuccessMessage && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
          <div className="flex-shrink-0 text-green-500 mr-3 mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-green-800">
              {t("contact.successMessage.title", "Message Sent Successfully!")}
            </p>
            <p className="text-sm text-green-700 mt-1">
              {t("contact.successMessage.description", "Thank you for contacting CrossGo. We've received your message and will get back to you as soon as possible.")}
            </p>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
              {t("contact.form.name", "Name")}
            </label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-neutral-300'} rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors`} 
              placeholder={t("contact.form.yourName", "Your name")} 
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">
              {t("contact.form.company", "Company")}
            </label>
            <input 
              type="text" 
              id="company" 
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" 
              placeholder={t("contact.form.yourCompany", "Your company (optional)")} 
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
              {t("contact.form.email", "Email")}
            </label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-neutral-300'} rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors`} 
              placeholder={t("contact.form.yourEmail", "Your email")} 
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
              {t("contact.form.phone", "Phone")}
            </label>
            <input 
              type="tel" 
              id="phone" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" 
              placeholder={t("contact.form.yourPhone", "Your phone (optional)")} 
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
            {t("contact.form.subject", "Subject")}
          </label>
          <select 
            id="subject" 
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${errors.subject ? 'border-red-500' : 'border-neutral-300'} rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors bg-white`}
          >
            <option value="">{t("contact.form.selectSubject", "Select a subject")}</option>
            <option value="General Inquiry">{t("contact.form.subjects.generalInquiry", "General Inquiry")}</option>
            <option value="Custom Software Development">{t("contact.form.subjects.customSoftware", "Custom Software Development")}</option>
            <option value="Cross-Platform Development">{t("contact.form.subjects.crossPlatform", "Cross-Platform Development")}</option>
            <option value="AI Integration">{t("contact.form.subjects.aiIntegration", "AI Integration")}</option>
            <option value="Object Tracking">{t("contact.form.subjects.objectTracking", "Object Tracking")}</option>
            <option value="Other">{t("contact.form.subjects.other", "Other")}</option>
          </select>
          {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
            {t("contact.form.message", "Message")}
          </label>
          <textarea 
            id="message" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5} 
            className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-neutral-300'} rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors`} 
            placeholder={t("contact.form.yourMessage", "Your message")}
          ></textarea>
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>
        
        <Button 
          type="submit" 
          className="w-full sm:w-auto px-8 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting 
            ? t("contact.form.sending", "Sending...") 
            : t("contact.form.sendMessage", "Send Message")}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;