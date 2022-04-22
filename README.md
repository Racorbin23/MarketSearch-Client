# Market Search Application
The is the Client which is the front-end portion of the Market Searcher application. It's used to connect to the backend and make the data that was scrapped using the Bot portion, searchable. The data is scrapped using the Bot repo for this project which interacts with the video game. It navigates through the menus using OpenCV to detect certain objects and scans every auction posted and uploads it to the backend. 




https://user-images.githubusercontent.com/56977500/164351576-363d916e-b108-4768-9f19-0f7efae552ff.mp4



## Scraper / MarketSearch-Bot
This script navigates the games menus and go through every card and scans every auction of the card and process's the data and sends it to the backend.
Scraping the data is possible by first cropping the data from the initial image and we process the image we get from the game using OpenCV. With OpenCV we can apply different masks to the image and adjust it to make the data we want appear easier to interpret. We do this to increase the accuracy so PyTesseract can run a basic model to interpret the text from the image we give it. Once the data is collected, it is sent to the backend to be accessed by our frontend.


## Front-end + Back-end / MarketSearch-Client + MarketSearch-Server
Deployed with Heroku and Github page which you can test live at https://racorbin23.github.io/MarketSearch-Client/

![example](https://user-images.githubusercontent.com/56977500/164600739-ab0da7de-ef2c-4777-a13b-1eecca7bff72.PNG)

## Getting Started

### Depenedencies
In order to run this project you must have node installed. 


## Usage
You will also need to setup a local backend connection by cloning MarketSearch-Server with local version of the database running. After cloning the Client and setting up the backend and database locally you can make your own database of cards by running the MarketSearch-Bot which will gather the data and upload it to the local database.


