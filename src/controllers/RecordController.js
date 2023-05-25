const { Record } = require('../models');

class RecordController {
  async index(req, res, next) {
    try {
      const records = await Record.findAll({
        order: [['createdAt', 'DESC']]
      });
  
      return res.status(200).json({
        success: true,
        message: 'all records grabbed',
        results: records,
      })
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const { ppm, temperature, source } = req.body;

      const record = await Record.create({
        ppm,
        temperature,
        source,
      })

      return res.status(200).json({
        success: true,
        message: 'new record created',
        results: record,
      })
    } catch (error) {
      next(error);
    }
  }
}

module.exports = RecordController;
