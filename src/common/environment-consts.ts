import { resolve } from "path";
import { config } from "dotenv";

config({ path: resolve(__dirname, "../../.env") });

export const PORT = process.env.PORT || 3000;
export const STRIPE_SDK_KEY = process.env.STRIPE_SDK_KEY;
export const SUCCESS_URL = process.env.SUCCESS_URL;
export const CANCEL_URL = process.env.CANCEL_URL;
export const STRIPE_SUCESS_URL = process.env.STRIPE_SUCESS_URL;
export const STRIPE_CANCEL_URL = process.env.STRIPE_CANCEL_URL;
export const WOOCOMMERCE_COSTUMER_KEY = process.env.WOOCOMMERCE_COSTUMER_KEY;
export const WOOCOMMERCE_COSTUMER_SECRET =
  process.env.WOOCOMMERCE_COSTUMER_SECRET;

// export const WEBHOOK_URL = `${SERVER_URL}/webhook/${TOKEN}`;

export const TELEGRAM_API = `https://api.telegram.org/bot${process.env.TOKEN}`;
export const GROUP_CHAT_ID = process.env.GROUP_CHAT_ID;
export const PRIVATE_CHAT_TELEGRAM_ID = process.env.PRIVATE_CHAT_TELEGRAM_ID;
