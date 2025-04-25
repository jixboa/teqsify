import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, lastname, email, phone, message } = req.body;

    // Input validation
    if (!email ) {
      return res.status(400).json({ success: false, message: "Invalid input" });
    }

    // Check environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      console.error("Missing environment variables for Gmail credentials");
      return res.status(500).json({
        success: false,
        message: "Server configuration error. Please try again later.",
      });
    }

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Verify transporter
    transporter.verify((error, success) => {
      if (error) {
        console.error("Transporter verification failed:", error);
      } else {
        console.log("Transporter is ready to send emails");
      }
    });

    // Compose email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      replyTo: email,
      to: process.env.GMAIL_USER,
      subject: "New Applicant Form Submission",
      text: `
        Name: ${name} ${lastname}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      return res.status(200).json({
        success: true,
        message:
          "Thanks for Submitting Your Info, We will reach out to you with further Information.",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to send email. Please try again later.",
      });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
