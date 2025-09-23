import emailjs from '@emailjs/browser';

// EmailJS configuration
export const EMAILJS_CONFIG = {
  publicKey: 'EoRPU03cvQWq-KQ_i',
  serviceId: 'service_goqqmcc',
  templateId: 'template_zg0yep2',
};

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.publicKey);

// Send email function
export const sendEmail = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Kishan R Kotian',
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};