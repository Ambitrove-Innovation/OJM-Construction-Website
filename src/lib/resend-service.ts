import { Resend } from 'resend';
import { ContactEmail } from '../emails/ContactEmail';

// Initialize with your Master API Key
const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export const sendClientEmail = async (formData: { name: string, email: string, service: string, message: string }) => {

    const clientEmail = import.meta.env.VITE_CLIENT_EMAIL;

    try {
        const data = await resend.emails.send({
        from: `${formData.name} <${formData.email}>`,
        to: [clientEmail],
        subject: `New Contact Form: ${formData.name}`,
        react: ContactEmail({ 
            ...formData,
        }),
        });

        return { success: true, data };
        
    } catch (error) {
        return { success: false, error };
    }
};