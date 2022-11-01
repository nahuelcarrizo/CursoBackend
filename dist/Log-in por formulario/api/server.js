import { app } from "./app.js";

const PORT = process.env.PORT || 4040;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
