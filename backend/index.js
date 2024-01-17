const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const stripe = require("stripe")(
  "sk_test_51OZWnDJsGQtU97WFxMev5gwcHdn08iDvqc9nh0AFVa0cknumQRSZm62RaaGMejzXVcUgGX1se2qRZKJHNdewShS500q14qpKNs"
);

const PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:3000'}))

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
