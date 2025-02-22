import express from "express";
import { isAuth } from "../middlewares/isAuth.js";
import { addtoCart, fetchCart, removeFromCart, updateCart } from "../controllers/cart.js";

const router = express.Router();

router.post("/cart/add", isAuth, addtoCart);
router.get("/cart/remove/:id",isAuth, removeFromCart);
router.post("/cart/update", isAuth, updateCart);
router.get("/cart/all", isAuth, fetchCart);

export default router;