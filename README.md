# Image and Video Uploader

## Technologies Used

- MongoDB - For Database
- Express Js - Framework for backend
- ReactJS - For Frontend
- NodeJs - Runtime Environment

## Introduction

In this application, user can upload image or video by selecting any image or video from the system and the uploaded image or video file will get displayed below. If it is a video file, then the video will autoplay once it comes into view by scrolling down. The uploaded images and videos are stored in MongoDB. 

## Functionalities 

1. Upload Functionality -
    * Users can select and upload image and video files from their local system. 
    * This involves handling file uploads securely and efficiently.

2. File Storage -
    * Store uploaded image and video files securely in a MongoDB database.

3. Display Uploaded Files - 
    * Display the uploaded image and video files on the website's interface.

4. Video Autoplay -
    * Autoplaying videos once they come into view by scrolling down the page. 
    * This enhances user experience by providing seamless playback.

5. Responsive Design: 
    * Ensured that the website's interface is responsive and works well on different devices and screen sizes.


# File Upload Schema

The data in which the image and video files are getting stored are:

1. fileName: Stores the name of the uploaded file.
2. contentType: Stores the MIME type of the file (e.g., image/png, video/mp4).
3. size: Stores the size of the file in bytes.
4. type: Indicates the type of the file (e.g., "image" or "video").
5. createdAt: Automatically captures the date and time when the file upload entry is created.


# Multer

Multer is in used in this project for uploading files. Multer is a middleware for handling multipart/form-data, which is primarily used for uploading files in Node.js and Express applications. It extends the capabilities of Express.js to handle file uploads by parsing the multipart/form-data and storing the files in the desired location on the server.


## Architecture Design

MVC architecture is used for this Image and Video Uploading application

## Setup

1. IDE - VS Code
2. NodeJS Version above 16.13.2


## Install dependencies for server 

### `npm start`

## Mongodb Atlas URL for connecting database is added in .env file

## Run the Express server
1. Install nodemon module
2. Add start command in package.json file as "nodemon app.js" to run app.js file
3. In terminal use "npm start" command to start server

### Server runs on http://localhost:8000 

