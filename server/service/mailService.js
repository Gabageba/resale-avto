const nodemailer = require('nodemailer')

class MailService {

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    })
  }

  async sendActivationMail(to, link) {

    await this.transporter.sendMail({
      from: `'Resale-Avto' <${process.env.SMTP_USER}>`,
      to,
      subject: 'Активация аккаунта на ' + process.env.API_URL,
      text: '',
      html:
        `
 <div
      style="
        max-width: 660px;
        background: url('https://lh3.googleusercontent.com/p3IM51HmanLGqPoLmEGelL41yOpT6fRhM199jp6UKXT8wtyEZP1rneA9chzmpRcticke2W6-wo-WcSWsuACgk2xne8LjsRd575SdGj7F2ih17amBwXKgDVzPYB4KBXCd9Q2mRR2ZViKsnh2cvsLUUPRePwrGZD8DrMvJH98Njmj2pUaRO9q1aDbDfINWORLFsHEGCALny1oe6_-mXtvyTQfAVTSHJVzO3A5B90mnRzn_pi8BZ-fmrF1l3aOO36W__khCpxm8p3KKnzV91rIurRH9bDcQAAJ2yqWRKALHoCIg3vtbXfwkLx4qRv-lSsBtlDugRVKWzA9oaaLcvcLVaenoV69Pqy2hW7cl5rxLQ1lGZShWPPvUxh1C1nesa418TFjug5FvzaN9UOTQ8A4__PPlUH8KfaMq31aVguWM3NUE12bRkUefThmbLtQ94mexZDsRZnZgR6Ovuopw_47AsUkHDHm4ratWrSJAkqtEHNJYEWinPcHxVvmzW6Sty6woIPAB7XdOiB2oBvun7HJzx5_GNGnmk4rDsmL5TJZRKx-y2nF66zNNae31K2fwCM2CrkJOOu82xkOIHM01qwDLkPzl9kO1Tn73kCQJf0QRg-5EHi3yC-knbrK6Sp2wUO1XMjlQFPWcGadZ00CT6UIZ2t6zUbESG0e-sDHmroY1GqUErcaBvcACBWaHqtuYj4Jzmv0LKYd4meBu7DV6u3qYaLC3lytEnI1dvT0jMCA1YVINVHXCvnYvOVrMsZCr40wc-YXtrH35WKDcpIp8OIJpb267FIJjlUZS-lKJvl67orSWck0rnQe2cHdU4dOOtTCR7EFx=w660-h335-no?authuser=0');
        margin: 0 auto;
        height: 335px;
        border: 2px solid #c3073f;
        box-sizing: border-box;
        position: relative;
      "
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;600&display=swap"
        rel="stylesheet"
      />
      <h2 style=" color: #c3073f;
          font-weight: 600;
          margin: 0;
          font-size: 20px;
          padding-top: 50px;          
          font-family: Montserrat;
          text-align: center;">Спасибо, что выбрали нас</h2>
      <div style="color: #fff;
          font-weight: 200;
          font-size: 13px;
          padding-left: 30px;
          font-family: Montserrat;
          width: 275px;
          padding-top: 50px;">
        Чтобы завершить регистрацию перейдите по
        ссылке: 
        <a style=" color: #c3073f;" href=${link}>${link}</a>
      </div>
      <div style=" color: #fff;
          font-weight: 200;          
          font-family: Montserrat;
          font-size: 11px;
          padding-top: 85px;
          padding-left: 510px;
          ">C уважением, Resale-Avto</div>
    </div>
        `
    })
  }
}

module.exports = new MailService()