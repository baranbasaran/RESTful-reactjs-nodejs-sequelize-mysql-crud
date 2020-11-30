const { User, sequelize } = require("../model/User");

const createUser = async (req, res) => {
  const {
    userName,
    mail,
    firstName,
    lastName,
    birthDate,
    description,
    imgUrl,
  } = req.body;
  try {
    const user = User.build({
      userName,
      mail,
      firstName,
      lastName,
      birthDate,
      description,
      imgUrl,
    });
    await user.save();
    return res.status(201).json(user.toJSON());
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!Number.isInteger(parseInt(id)))
      return res.status(404).json({ message: "Parametre tipi yanlis." });

    const user = await User.findOne({ where: { userId: id } });
    if (user == null)
      return res
        .status(200)
        .json({ message: "Istenilen ID'ye ait user bulunamamistir." });

    return res.status(200).json(user.toJSON());
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  const {
    userName,
    mail,
    firstName,
    lastName,
    birthDate,
    description,
    imgUrl,
  } = req.body;
  const { id: userId } = req.params;

  try {
    const user = await User.findOne({ where: { userId } });
    if (user == null)
      return res
        .status(200)
        .json({ message: "Istenilen ID'ye ait user bulunamamistir." });

    const sonuc = await User.update(
      { userName, mail, firstName, lastName, birthDate, description, imgUrl },
      { where: { userId } }
    );
    console.log(sonuc[0]);
    if (sonuc[0] == 1)
      return res.status(201).json({ message: "basariyla guncellendi" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    if (!users.length)
      return res.status(200).json({ message: "User bulunmamaktadir." });

    console.log(JSON.stringify(users, null, 2));
    return res.status(200).json(JSON.stringify(users, null, 2));
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.body;

    if (!Number.isInteger(parseInt(id)))
      return res.status(404).json({ message: "Parametre tipi yanlis." });

    const user = await User.findOne({ where: { userId: id } });
    if (user == null)
      return res
        .status(200)
        .json({ message: "Istenilen ID'ye ait user bulunamamistir." });

    const deletedResponse = await User.destroy({ where: { userId: id } });
    if (deletedResponse)
      return res.status(200).json({ message: "User basariyla silindi" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUserById,
};
