const AfricasTalking = require('africastalking')({
    apiKey: process.env.AT_API_KEY,
    username: process.env.AT_USERNAME,
  });
  const sendSMS = async (to, message) => {
    const sms = AfricasTalking.SMS;
    try {
      const response = await sms.send({
        to,
        message,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  module.exports = sendSMS;  