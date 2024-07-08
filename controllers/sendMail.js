const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "maharshi280596@gmail.com", // your Gmail address
        pass: "lugn wakj lvxn jguh", // your Gmail app password
      },
    });

    let info = await transporter.sendMail({
      from: '"Rishi Gupta 👻" <maharshi280596@gmail.com>', // sender address
      to: "rishigupta280594@gmail.com", // list of receivers
      subject: "Hello T", // Subject line
      text: "Hello YT ", // plain text body
      html: "<b>Hello YT</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    res.json(info);
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
};

module.exports = sendMail;
