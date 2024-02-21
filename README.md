# Instagram Reel Downloader

## Overview

This application allows users to download Instagram reels by providing the reel link. It is built using:

* Frontend: React
* Backend: Node.js

Puppeteer.js is used for web scraping Instagram to fetch reel data.

## Features

* Enter the Instagram reel link.
* Scrape reel data using Puppeteer.js on the server.
* Download the Instagram reel.

## Prerequisites

* Node.js installed on your machine.

## Installation

1. Clone the repository:

 ```bash
git clone https://github.com/your-username/instagram-reel-downloader.git
cd instagram-reel-downloader
```


2. Install dependencies for both the server and client:
```bash
#Install server dependencies
cd server
npm install

#Install client dependencies
cd ../client
npm install
```

3. Set up environment variables:
```bash
#Create a `.env` file in the server directory and add the following:

PORT=3001

#Replace `3001` with the desired port number.
```
## Usage

1. Start the server:
```bash
#Inside the server directory
npm start
```

2. Start the client:
```bash
#Inside the client directory
npm start
```

3. Open your browser and go to [http://localhost:3000](http://localhost:3000) (or the port you specified) to use the Instagram Reel Downloader.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

##Notice

This is just for education purpose. I hope no one will misuse it
