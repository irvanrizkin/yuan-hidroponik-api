class ActionController {
  constructor(mqttService) {
    this.mqttService = mqttService;
  }

  changeSsrState(req, res) {
    const { status } = req.params;
    this.mqttService.sendMessage(status);

    return res.status(200).json({
      success: true,
      message: `ssr state changed to ${status} by mqtt`,
    })
  }
}

module.exports = ActionController;