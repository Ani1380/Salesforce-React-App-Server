// import express from "express";
// import axios from "axios";
// import bodyParser from "body-parser";
// import cors from "cors";


// const app = express();
// app.use(cors({
//   origin: "*",
//   methods: ["GET","POST"],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   credentials: true
// }));

// app.use(bodyParser.json());

// app.get("/sf-auth", async (req, res) => {
//   try {
//     const response = await axios.post(
//       "https://login.salesforce.com/services/oauth2/token",
//       new URLSearchParams({
//         grant_type: "password",
//         client_id: process.env.SF_CLIENT_ID,
//         client_secret: process.env.SF_CLIENT_SECRET,
//         username: process.env.SF_USERNAME,
//         password: process.env.SF_PASSWORD
//       }),
//       {
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       }
//     );

//     res.json(response.data); // send token back to frontend
//   } catch (err) {
//     res.status(500).json(err.response?.data || { error: err.message });
//   }
// });

// app.listen(5000, () => console.log("Server running on http://localhost:5000"));

import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import salesforceRoutes from "./routes/routes.js";


dotenv.config();
const app = express();
const port = 4321;
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json());

app.use((req, res, next) => {
  console.log("Incoming:", req.method, req.url);
  next();
});


app.use('', salesforceRoutes);

app.listen({port}, () => console.log(`Server running at http://localhost:${port}`));
