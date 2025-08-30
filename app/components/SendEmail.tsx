import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export async function sendConfirmationEmail(email: string, name: string, confirmation: string) {
    try {
      const adminEmail = process.env.EMAIL_ADMIN;
      const adminPass = process.env.EMAIL_PASS;
  
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: adminEmail,
          pass: adminPass,
        },
      });
  
      // --- Customer Email ---
      const customerEmailText = 
        `Hello ${name},
    
        Thank you for subscribing to isba.ai!

        Your order confirmation number is: ${confirmation}

        You've been added to the waitlist and will be among the first to know when isba is ready for early access. If you have any questions or need support, feel free to reach out.

        This is an automated email, please do not reply directly.

        Best regards,  
        isba Support Team`;
  
      await transporter.sendMail({
        from: `"isba.ai" <${adminEmail}>`,
        to: email,
        subject: `Welcome to isba.ai, ${name}!`,
        text: customerEmailText,
      });
  
      console.log("✅ Customer email sent successfully");
  
      // --- Admin Notification ---
      const adminEmailText = 
        `New isba.ai user has signed up:
  
        Name: ${name}
        Email: ${email}
        Order confirmation number: ${confirmation}
  
        Checkout completed successfully.`;
  
      await transporter.sendMail({
        from: `"isba.ai" <${adminEmail}>`,
        to: adminEmail,
        subject: `New isba.ai User: ${name}`,
        text: adminEmailText,
      });
  
      console.log("✅ Admin notification sent successfully");
    } catch (error) {
      console.error("❌ Error sending email:", error);
    }
}