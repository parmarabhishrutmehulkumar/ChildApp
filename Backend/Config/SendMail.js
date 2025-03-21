const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, message) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "connectify83@gmail.com",
      pass: "scpf qqis epde bidf",
    },
  });

  await transporter.sendMail({
    from: "connectify83@gmail.com",
    to: email,
    subject,
    text: message,
  });
};

module.exports = sendEmail;
