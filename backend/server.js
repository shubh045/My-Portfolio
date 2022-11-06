const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const sendEmail = require("./utils/sendEmail");

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Route
app.get("/", (req, res) => {
  res.send("Home page");
});

app.post("/api/sendemail", async (req, res) => {
  const { email, name, message } = req.body;

  try {
    const sent_from = email;
    const send_to = process.env.EMAIL_USER;
    const reply_to = email;
    const subject = `Email from ${name} ${email}`;
    const msg = `
            <h1>Hello Shubham</h1>
            <p>${message}</p>
        `;

    await sendEmail(subject, msg, sent_from, send_to, reply_to);
    res.status(200).json({ success: true, message: "Email Sent" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
