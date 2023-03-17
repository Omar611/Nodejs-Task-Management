const notFound = (req, res, next) => {
  res.status(404).send("Page or Route not found");
}

module.exports = notFound;