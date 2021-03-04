import * as functions from "firebase-functions";

export const getBingoValue = functions.https.onRequest(
  async (request, response) => {
    const values = JSON.parse(request.body).values;
    if (
      JSON.stringify(values) ===
      JSON.stringify(["41", "42", "41", "4b", "55", "53"])
    ) {
      response.status(200).send({ message: "readmeCTF{85FKE4YQR6XGLDF9}" });
    } else {
      response.status(200).send({ message: "Ingen bingo på deg :(" });
    }
  }
);
