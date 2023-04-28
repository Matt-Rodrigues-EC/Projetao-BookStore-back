import express from "express"
import cors from "cors"
import router from "./routes/index.routes.js"
import dotenv from "dotenv";
dotenv.config();

import store from "./routes/storeRoutes.js";
import myStore from "./routes/myStoreRoutes.js";
import add from "./routes/addBookRoutes.js";

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

// User     Routes

// ===============
// Client   Routes

// ===============
// Seller   Routes
app.use(store);
app.use(myStore);
app.use(add);
// ===============

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT)
});