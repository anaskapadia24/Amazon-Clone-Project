const functions = require("firebase-functions");
const express = require("express"); // npm i express
const cors = require("cors"); // npm i cors //cross origin resource sharing
const stripe = require("stripe")("sk_test_51KHr7lSItq399U0KexnIcG3ZXqdL2HRO1tgKg52maZoe9Nm1l8hW0VNgxSAYFOEpcqZ0UL9dc37hhMMoMCgxk8fX00xAdCOFU4"); // npm i stripe

// API

// - App config //Setting up Express Server
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API Routes
app.get('/', (request, response)=>response.status(200).send('hello world'));

app.post("/payments/create", async (request, response) => {
   const total = request.query.total;
   console.log("Total Payment Recieved>>", total);

   const paymentIntent = await stripe.paymentIntent.create({
       amount : total, // In Paise Value not in Rupees
       currency: "INR",
   });
   
   response.status(201).send({
       clientSecret: paymentIntent.client_secret,
   });

});


// - Listen Command
exports.api = functions.https.onRequest(app);

// -> In Terminal under functions> firebase emulators:start
// Endpoint
// http://localhost:5001/project-50331/us-central1/api