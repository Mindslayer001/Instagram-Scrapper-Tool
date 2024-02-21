const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

app.post('/scrape', async (req, res) => {
  try {
    const { reelCode } = req.body;
    console.log("url:",reelCode);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    let link = `https://www.instagram.com/reel/${reelCode}/?utm_source=ig_web_copy_link`;
    // Navigate to the React website
    await page.goto(link);
  
    // Wait for at least one of the video elements to be present
    const videoSelector = 'video.x1lliihq, video.x5yr21d, video.xh8yej3';
    await page.waitForSelector(videoSelector);
  
    // Extract data from the first video element found
    const videoData = await page.evaluate((selector) => {
      const videoElement = document.querySelector(selector);
      if (videoElement) {
        // Replace this with the actual method to extract data from the video element
        return {
          src: videoElement.src
        };
      } else {
        return null;
      }
    }, videoSelector);
  
    console.log(videoData);
    await browser.close();

    if (videoData) {
      res.json({ videoData });
    } else {
      res.status(404).json({ error: 'Video src not found' });
    }

  } catch (error) {
    console.error('Error scraping data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
