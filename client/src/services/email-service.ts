import emailjs from '@emailjs/browser';

export interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

/**
 * Sends a contact form email using EmailJS
 * 
 * @param formData - The contact form data
 * @returns Promise<boolean> - True if the email was sent successfully, false otherwise
 */
export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    console.log('Sending email with EmailJS...');
    
    // Validate that environment variables are set
    const serviceId = "service_7nleqzo"//import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = "template_bv6hymw"//import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = "393YY6Rb77Qd9uYaw"//import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    
    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS environment variables are not set correctly', { 
        serviceId: !!serviceId, 
        templateId: !!templateId, 
        publicKey: !!publicKey 
      });
      return false;
    }
    
    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_email: 'crossgosoftwaresolution@gmail.com',
      from_company: formData.company || 'N/A',
      from_phone: formData.phone || 'N/A',
      subject: formData.subject,
      message: formData.message,
    };
    
    // Send the email
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    console.log('Email sent successfully:', response);
    return response.status === 200;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};