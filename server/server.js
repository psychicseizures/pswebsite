require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer configuration using environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  secure: false, // use SSL
  auth: {
    user: process.env.EMAIL_RECIPIENT,
    pass: process.env.EMAIL_APP_KEY,
  },
});

// POST route for sending emails
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Your email where you want to receive messages
    subject: `Message from ${name}`,
    text: `
      You have received a new message from your website contact form.

      Name: ${name}
      Email: ${email}
      Message: ${message}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: 'Error sending email' });
    }
    console.log('Email sent: ' + info.response);
    return res.status(200).json({ message: 'Email sent successfully!' });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
