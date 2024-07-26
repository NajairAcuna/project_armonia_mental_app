import models from "./routes/models.js"
import express from "express";
import cors from "cors";
import modelsRoute from './routes/models.js'

const app = express()
const port = 5050



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(cors());
app.use(express.json());

app.use('/api', modelsRouter); 
app.use("/models", models);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

