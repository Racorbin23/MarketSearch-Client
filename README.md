# Market Search Application

https://user-images.githubusercontent.com/56977500/164351576-363d916e-b108-4768-9f19-0f7efae552ff.mp4


## Getting Started

## Description

The is the Client which is the front-end portion of the Market Searcher application. It's used to connect to the backend and make the data that was scrapped using the Bot portion, searchable. The data is scrapped using the Bot repo for this project which interacts with the video game. It navigates through the menus using OpenCV to detect certain objects and scans every auction posted and uploads it to the backend. 

## Features
-  Automated scraping of data from the game using OpenCV and PyTesseract
-  Stored scraped data from Python script in MongoDB NoSQL Database
-  Created web application to access data using React with TypeScript and Node.js
-  Created development tools to help with testing and debugging
-  Deployed Front-end with Github Pages
-  Deployed Back-end with Heroku
-  Deployed Database with MongoDB Atlas


## Installation

## Scraper / MarketSearch-Bot
This script navigates the games menus and go through every card and scans every auction of the card and process's the data and sends it to the backend.
Scraping the data is possible by first cropping the data from the initial image and we process the image we get from the game using OpenCV. With OpenCV we can apply different masks to the image and adjust it to make the data we want appear easier to interpret. We do this to increase the accuracy so PyTesseract can run a basic model to interpret the text from the image we give it. Once the data is collected, it is sent to the backend to be accessed by our frontend.


## Front-end + Back-end / MarketSearch-Client + MarketSearch-Server
Deployed with Heroku and Github page which you can test live at https://racorbin23.github.io/MarketSearch-Client/

## Usage
You will also need to setup a local backend connection by cloning MarketSearch-Server with local version of the database running. After cloning the Client and setting up the backend and database locally you can make your own database of cards by running the MarketSearch-Bot which will gather the data and upload it to the local database.

## License

MIT License

Copyright (c) 2022 Randel Corbin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


