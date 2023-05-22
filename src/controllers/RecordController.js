const { Record } = require('../models');

class RecordController {
  async index(req, res) {
    const records = await Record.findAll({
      order: [['createdAt', 'DESC']]
    });

    return res.status(200).json({
      success: true,
      message: 'all records grabbed',
      results: records,
    })
  }
}

module.exports = RecordController;
