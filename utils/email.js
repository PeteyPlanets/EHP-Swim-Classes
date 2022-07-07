const nodemailer = require("nodemailer");
const pug = require("pug");
const htmlToText = require("html-to-text");

module.exports = class SendGridEmail {
  constructor(email) {
    this.to = email;
    this.firstName = email;
    this.from = `EHP SIGNUP <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    if (process.env.NODE_ENV === "production" || true) {
      console.log("We in production bitches");
      // Sengrid
      return nodemailer.createTransport({
        service: "Sendgrid",
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD,
        },
      });
    }

    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  // Send the actual email
  async send(template, subject, type, data = null) {
    // 1) Render HTML based on a pug template
    console.log("🚨 DIRNAME = ", __dirname);
    const html = pug.renderFile(`${__dirname}/../views/email/${template}.pug`, {
      firstName: this.firstName,
      subject,
      data,
      type,
    });

    // 2) Define the email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      text: htmlToText.htmlToText(html),
      html,
    };

    // 3) Create transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome(type, emailData) {
    console.log("Sending email...");
    try {
      await this.send("welcome", "New Signup!", type, emailData);
    } catch (err) {
      console.error(err);
    }
    console.log("EMAIL SENT");
  }

  async sendContact(data) {
    console.log("Sending email...");
    try {
      await this.send("contact", "Contact form submitted", data);
    } catch (err) {
      console.error(err);
    }
    console.log("EMAIL SENT");
  }
};
