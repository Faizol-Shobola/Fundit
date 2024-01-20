
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")

require('dotenv').config()

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json());
// app.use(cors({origin: 'https://fundit.vercel.app'}))
app.use(cors({
  origin: ['https://fundit.vercel.app', 'https://fundit-3xo.pages.dev']
}));


app.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount, currency } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: parseInt(amount) * 100,
      currency,

      metadata: { integration_check: "accept_a_payment" },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
