// You can delete the Resend imports completely
// import { Resend } from 'resend';
// import { ContactEmail } from '../emails/ContactEmail';

// Define your types for the incoming form data
interface ContactFormValues {
    name: string;
    email: string;
    service: string;
    message: string;
}

export const sendClientEmail = async (formData: ContactFormValues) => {
    try {
        // Construct the JSON payload required by Web3Forms
        const payload = {
            // 1. Your Client's Access Key (from your .env file)
            access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
            
            // 2. Optional but highly recommended Web3Forms settings
            subject: `New Lead: ${formData.service} from ${formData.name}`, 
            from_name: "Website Contact Form", // Who the email appears to be from
            replyto: formData.email, // Ensures hitting "reply" goes to the customer, not Web3Forms
            
            // 3. Spread all your custom form fields into the payload
            ...formData 
        };

        // Send the JSON POST request
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        // Web3Forms returns a 'success' boolean in its response JSON
        if (data.success) {
            return { success: true, data };
        } else {
            // Catches API-level errors (like an invalid access key)
            console.error("Web3Forms Error:", data.message);
            return { success: false, error: data.message };
        }

    } catch (error) {
        // Catches network-level errors
        console.error("Network Error:", error);
        return { success: false, error };
    }
};