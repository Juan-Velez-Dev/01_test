const axios = require('axios');
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/google/repositories', async (req, res) => {
  try {
    const { data } = await axios.get('https://api.github.com/orgs/google/repos')
    data.sort((a, b) => b.stargazers_count - a.stargazers_count)
    return res.status(200).json(data.slice(0, 10))
  } catch (error) {
    return res.status(500).send('Error: ' + error.message)
  }
})

app.listen(PORT, async () => {
  try {
    console.log(`Server listening on ${PORT}`);
  } catch (error) {
    throw new Error(`Error: ${error.message}`)
  }
});