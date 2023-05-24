const { default: axios } = require("axios");

class ActionController {
  constructor(mqttService) {
    this.mqttService = mqttService;
  }

  async changeSsrState(req, res) {
    const { status } = req.params;
    if (process.env.mode === 'mqtt') {
      this.mqttService.sendMessage(status);
  
      return res.status(200).json({
        success: true,
        message: `ssr state changed to ${status} by mqtt`,
      })
    }

    await axios.post(process.env.THINGER_SSR_URL, status === 'on' ? 'true' : 'false', {
      headers: {
        Authorization: `Bearer ${process.env.THINGER_BEARER}`,
        "Content-Type": 'application/json',
      }
    })

    return res.status(200).json({
      success: true,
      message: `ssr state changed to ${status} by thinger`,
    })
  }
}

module.exports = ActionController;