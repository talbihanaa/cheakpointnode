var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'process.env.Email',
    pass: 'process.env.Cle'
  }
});

var mailOptions = {
  from: 'hanatalbi87@gmail.com',
  to: 'wissemsaadi118@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});