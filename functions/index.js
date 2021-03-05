const functions = require("firebase-functions");

exports.getBingoValue = functions.https.onRequest(async (request, response) => {
  let data;
  try {
    data = JSON.parse(request.body).values;
  } catch (e) {
    data = request.body.values;
  }
  if (
    JSON.stringify(data) ===
    JSON.stringify(["41", "42", "41", "4b", "55", "53"])
  ) {
    response.send(JSON.stringify({ message: "readmeCTF{85FKE4YQR6XGLDF9}" }));
  } else {
    response.send(JSON.stringify({ message: "Ingen bingo på deg :(" }));
  }
});
