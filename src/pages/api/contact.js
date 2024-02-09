import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, lastName, email, phone, message } = req.body;

    console.log(name, email);

    /*     return { message: "Name recieved" }; */
    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // e.g., 'gmail'
      auth: {
        user: "teqsify.it@gmail.com",
        pass: "Linux$$1241",
      },
    });

    // Compose email options
    const mailOptions = {
      from: "gyesboa@gmail.com",
      to: "teqsify.it@gmail.com",
      subject: "New Contact Form Submission",
      text: `
        Name: ${name} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      console.log(mailOptions);
      /*  res.status(200).json({ success: true }); */
      return NextResponse.json({
        message: "Email sent successfully",
        status: 200,
      });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
      console.log(error.message);
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
