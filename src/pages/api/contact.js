import nodemailer from "nodemailer";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

require("dotenv").config();

const gmailPassword = process.env.GMAILPASS;

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, lastname, email, phone, message } = req.body;

    /*     return { message: "Name recieved" }; */
    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "teqsify.it@gmail.com",
        pass: "xcaf pmry lmqr cuip",
      },
    });

    // Compose email options
    const mailOptions = {
      from: "gyesboa@gmail.com",
      to: "teqsify.it@gmail.com",
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

      /*  res.status(200).json({ success: true }); */
      return res.status(200).json({
        ok: true,
        message:
          "Thanks for Submitting Your Info, We will reach out to you with further Information.",
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
      console.log(error.message);
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
