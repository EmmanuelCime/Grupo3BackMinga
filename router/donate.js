import { Router } from "express";
import Stripe from "stripe";
import "dotenv/config.js";
import stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-11-15",
  });

const router = Router();

router.post("/donate", async (req, res) => {
    try {
      const { amount } = req.body;
  
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "usd",
        payment_method_types: ["card"],
      });
  
      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

export default router;