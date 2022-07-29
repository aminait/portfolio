import { storeMail } from '../../db';
import sendgrid from '@sendgrid/mail';

console.log(
  'process.env.NEXT_APP_SENDGRID_KEY',
  process.env.NEXT_APP_SENDGRID_KEY
);
sendgrid.setApiKey(process.env.NEXT_APP_SENDGRID_KEY);
// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req, res) {
  try {
    const { name, email, message, date } = req.body;
    // TODO - change this to be prettiers

    const autoReplyOptions = {
      from: process.env.NEXT_APP_EMAIL,
      to: email,
      subject: 'Your email has been received!',
      html: '<div>Thank you for contacting us</div>',
    };
    const contactOptions = {
      from: process.env.NEXT_APP_EMAIL,
      to: email,
      subject: 'You got an email',
      html: `<div${message} from ${email}</div>`,
    };
    sendgrid
      .send(autoReplyOptions)
      .then(() => {
        console.log('Email sent');
        storeMail({ name, email, message, date });
        sendgrid.send(contactOptions).then(() => {
          console.log('contact sent');
          // return res.json({ success: true });
        });
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.log('error', error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.json({ success: true });
}
