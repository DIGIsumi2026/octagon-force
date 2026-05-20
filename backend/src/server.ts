import "dotenv/config";
import app from "./app.js";
import { connectDatabase } from "./config/db.js";

const port = Number(process.env.PORT ?? 5000);

connectDatabase()
  .catch((error) => {
    console.error("Database connection failed:", error);
  })
  .finally(() => {
    app.listen(port, () => {
      console.log(`API running on http://localhost:${port}`);
    });
  });
