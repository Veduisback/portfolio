import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

https://veduisback.github.io/portfolio/
  const data = await response.json();

  res.json({
    reply: data.choices?.[0]?.message?.content || "Error",
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
