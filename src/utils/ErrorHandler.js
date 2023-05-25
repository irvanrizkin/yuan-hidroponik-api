class ErrorHandler {
  handleError (error, req, res, next) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: 'internal server error',
      error: error.message,
    })
  }
}

module.exports = ErrorHandler;
