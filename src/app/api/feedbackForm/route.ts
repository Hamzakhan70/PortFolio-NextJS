import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { message, name, email } = await request.json();

    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.Email_User,
        pass: process.env.Email_Password,
      },
    });
    // console.log(email);
    const mailoptionsToAdmin = {
      from: process.env.Email_User,
      to: process.env.Email_User,
      subject: "You have a new feedback",
      text: `You have a new contact form submission from:
      Name: ${name}
      Email: ${email}
      Message: ${message}`,
    };

    const mailoptionsToUser = {
      from: process.env.Email_User,
      to: email,
      subject: "Thank You for Your Feedback",
      //   text: "Thank you for reaching out to us. We will get back to you shortly.",
      html: `
    Dear ${name},

    <p>
    Your input helps me to ensure that I'm meeting your expectations and continuously improving. If you have any immediate questions or concerns, please don't hesitate to contact me directly.
    </p>
    <p>
    Looking forward to staying connected.
    </p> 
    <p>Best Regards,</p>
    <p>Fahim Ul Hassan Aziz</p>
    <p>+92-349-4820657</p>
`,
    };

    await transport.sendMail(mailoptionsToAdmin);

    await transport.sendMail(mailoptionsToUser);
    return NextResponse.json({ error: "" });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json({ "Server error": error });
  }
}
