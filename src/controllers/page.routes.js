const renderHome = async (req, res) => {
  try {
    res.render("/src/views/index.html");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  renderHome,
};
