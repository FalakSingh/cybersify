const successRes = (res, status_code, message, data) =>
  res.status(status_code).json({ success: true, status_code, message, data });

const errorRes = (res, status_code, message, data) =>
  res.status(status_code).json({ success: false, status_code, message, data });

module.exports = {
  errorRes,
  successRes,
};
