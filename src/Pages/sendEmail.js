const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  const { name, email, phone, subject, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'YourEmailServiceProvider',
    auth: {
      user: 'your_email@example.com',
      pass: 'your_email_password',
    },
  });

  const mailOptions = {
    from: 'your_email@example.com',
    to: 'info@huzefaengineering.com',
    subject: `New Contact Form Submission: ${subject}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Subject: ${subject}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Email not sent' }),
    };
  }
};
