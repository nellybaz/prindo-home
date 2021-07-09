const functions = require("firebase-functions");
const axios = require("axios");
const admin = require("firebase-admin");
admin.initializeApp();

exports.addUser = functions.https.onRequest(async (req, res) => {
  const { email, password } = req.body;

  const data = {
    email,
    password,
    paid: false,
  };
  const writeResult = await admin.firestore().collection("users").add(data);
  res.json({ result: `User added: ${writeResult.id}.` });
});

exports.webHook = functions.https.onRequest(async (req, res) => {
  const { email } = req.body;
  const existingRecord = (
    await admin
      .firestore()
      .collection("users")
      .where("email", "==", email)
      .get()
  ).docs[0];
  const existingUser = existingRecord.data();
  if (existingUser.paid == true) {
    res.json({ message: "user already paid" });
  }
  const response = await existingRecord.ref.set(
    { paid: true },
    { merge: true }
  );
  const message = await createPrindoUser(
    existingUser.email,
    existingUser.password
  );
  res.json({
    data: response,
    message: `${message} ${JSON.stringify(req.body)}`,
  });
});

const createPrindoUser = async (email, password) => {
  const URL = "https://app.prindopay.com/api/v1/users";
  const data = {
    email,
    password,
    isAdministrator: false,
  };
  const auth_email = "nelson.bassey111@gmail.com";
  const auth_password = "password123P";
  const token = `${auth_email}:${auth_password}`;
  const options = {
    headers: {
      Authorization: `Basic ${Buffer.from(token, "base64")}`,
    },
  };
  try {
    const res = await axios.post(URL, data, options);
    console.log({response: res.data});
    return `Created successfully ${JSON.stringify(res.data)}`;
  } catch (error) {
    return `Error when creating ${error.message}`;
  }
};
