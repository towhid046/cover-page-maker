import nodemailer from 'nodemailer';

export const sendEmailHandler = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name && !email && !message) {
        return res.send(400).send({
            message: "There is a problem with request!"
        })
    }

    try {
        const transporter = new nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: 'towhidmorol46@gmail.com',
            subject: `Feedback by ${name}`,
            html: `
                <section style="color: #555; background-color: #f0f4f8; padding:40px 20px;">
                    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                        <h2 style="text-align: center; color: #132639; font-style:italic;">New Feedback by ${name}</h2>

                        <div style="margin: 20px 0;">
                            <p style="font-size: 16px; color: #555;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #1d4ed8;">${email}</a></p>
                            <p style="font-size: 16px; color: #555;"><strong>Message:</strong></p>
                            <p style="font-size: 16px; color: #555; background-color: #f0f4f8; padding: 10px; border-radius: 5px;">${message}</p>
                        </div>

                        <div style="text-align: center; margin-top: 20px;">
                             <a href="mailto:${email}" style="display: inline-block; padding: 10px 20px; background-color: #1d4ed8; color: #fff; text-decoration: none; border-radius: 5px;">Reply to ${name}</a>
                        </div>
                    </div>
                </section>
                `,
        };

        await transporter.sendMail(mailOptions)
        res.status(200).send({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.log(error)
        res.status(500).send({ success: false, message: "Email failed to send!", error });
    }
}