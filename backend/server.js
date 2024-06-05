const express = require("express");
const fs = require("fs").promises;
const cors = require("cors");

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

app.get("/api/data", async (req, res) => {
  try {
    const data = await fs.readFile("data.json", "utf8");
    res.json(JSON.parse(data));
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

app.get("/api/data/:id", async (req, res) => {
  try {
    const id = req.params.id;

    let data = await fs.readFile("data.json", "utf8");
    data = JSON.parse(data);

    if (data[id]) {
      res.json(data[id]);
    } else {
      res.status(404).json({ error: "Data not found" });
    }
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

app.post("/api/data", async (req, res) => {
  try {
    const newData = req.body;

    let data = await fs.readFile("data.json", "utf8");
    data = JSON.parse(data);

    const newId = Date.now().toString();

    data[newId] = newData;

    await fs.writeFile("data.json", JSON.stringify(data));

    res.status(201).json({ id: newId });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

app.delete("/api/data/:id", async (req, res) => {
  try {
    const id = req.params.id;

    let data = await fs.readFile("data.json", "utf8");
    data = JSON.parse(data);

    if (data[id]) {
      delete data[id];
      await fs.writeFile("data.json", JSON.stringify(data));

      res.json({ success: true });
    } else {
      res.status(404).json({ error: "Data not found" });
    }
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

app.put("/api/data/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;

    let data = await fs.readFile("data.json", "utf8");
    data = JSON.parse(data);
    data[id] = newData;

    await fs.writeFile("data.json", JSON.stringify(data));

    res.json({ success: true });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
