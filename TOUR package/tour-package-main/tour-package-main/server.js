const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Allow all origins
app.use(cors({
  origin: '*',  
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',  
  port: 465,               
  secure: true,            
  auth: {
    user: 'manasranjansahoo971@gmail.com',  
    pass: 'ewwkbqyctaprloom',  
  },
});

// Email-sending endpoint
app.post('/send-email', (req, res) => {
  const { name, email, phone, placeOfOrigin, query } = req.body;

  const mailOptions = {
    from: 'manasranjansahoo971@gmail.com',
    to: email,
    subject: 'Confirmation Mail',
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Place of Origin: ${placeOfOrigin}</p>
      <p>Query: ${query}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email', error });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
