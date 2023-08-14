-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 10, 2023 at 05:57 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `infinity_blogs`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_additional_blogs_desc`
--

CREATE TABLE `tbl_additional_blogs_desc` (
  `abId` int(11) NOT NULL,
  `bId` int(11) NOT NULL,
  `vBlogDescription` mediumtext NOT NULL,
  `vBlogImage` mediumtext NOT NULL,
  `tCreatedDate` datetime NOT NULL,
  `tUpdatedDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_additional_blogs_desc`
--

INSERT INTO `tbl_additional_blogs_desc` (`abId`, `bId`, `vBlogDescription`, `vBlogImage`, `tCreatedDate`, `tUpdatedDate`) VALUES
(1, 1, '<h2>Try React</h2><p>React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.</p>', 'http://localhost:8080/app/Images/description_img/description_img-1688881454352.jpg', '2023-07-09 11:14:14', '2023-05-05 00:00:00'),
(2, 1, '<h2>Create a New React App</h2><p>To create a new React app, you can follow these steps:</p><p><br></p><h3>Step 1: Install Node.js</h3><p>Make sure you have Node.js installed on your computer. You can download the latest version from the official website: https://nodejs.org</p>', 'http://localhost:8080/app/Images/description_img/description_img-1688881454352.jpg', '2023-07-09 11:14:14', '2023-05-05 00:00:00'),
(3, 1, '<h3>Step 2: Install Create React App</h3><p>Open your terminal or command prompt and run the following command to install Create React App globally:</p><p><br></p><p><strong>npm install -g create-react-app</strong></p>', 'http://localhost:8080/app/Images/description_img/description_img-1688881454354.jpg', '2023-07-09 11:14:14', '2023-05-05 00:00:00'),
(4, 1, '<h3>Step 3: Create a New React App</h3><p>Once Create React App is installed, navigate to the directory where you want to create your new React app. Then run the following command:</p><p><br></p><p><strong>npx create-react-app my-app</strong></p><p><br></p><p>Replace \"my-app\" with the desired name of your app. This command will create a new directory called \"my-app\" (or your chosen name) and set up a basic React app structure inside it.</p><p><br></p>', 'http://localhost:8080/app/Images/description_img/description_img-1688881454402.jpg', '2023-07-09 11:14:14', '2023-05-05 00:00:00'),
(5, 1, '<h3>Step 4: Navigate to the App Directory</h3><p>After the app is created, navigate to the app directory by running the following command:</p><p><br></p><p><strong>cd my-app</strong></p>', 'http://localhost:8080/app/Images/description_img/description_img-1688881454443.jpg', '2023-07-09 11:14:14', '2023-05-05 00:00:00'),
(6, 1, '<h3>Step 5: Start the Development Server</h3><p>To start the development server and see your React app in action, run the following command:</p><p><br></p><p><strong>npm start</strong></p><p><br></p><p>This will start the development server and open your app in a browser. Any changes you make to the code will automatically refresh the page.</p>', 'http://localhost:8080/app/Images/description_img/description_img-1688881454456.jpg', '2023-07-09 11:14:14', '2023-05-05 00:00:00'),
(7, 1, '<p>That\'s it! You have successfully created a new React app. You can now begin building your React components and writing your app logic.</p>', 'http://localhost:8080/app/Images/description_img/description_img-1688881454503.jpg', '2023-07-09 11:14:14', '2023-05-05 00:00:00'),
(9, 2, '<p>Node.js was created by Ryan Dahl in 2009 with the aim of enabling JavaScript to be used for server-side development. Traditionally, JavaScript was primarily used for client-side scripting in web browsers. However, Node.js introduced the concept of running JavaScript on the server, which opened up new possibilities for building scalable and high-performance applications.</p>', 'http://localhost:8080/app/Images/description_img/description_img-1688896682621.jpg', '2023-07-09 03:28:02', '2023-05-05 00:00:00'),
(10, 2, '<h2>What is Node JS?</h2><p>A common task for a web server can be to open a file on the server and return the content to the client.</p><p>Here is how PHP or ASP handles a file request:</p><ol><li>Sends the task to the computer\'s file system.</li><li>Waits while the file system opens and reads the file.</li><li>Returns the content to the client.</li><li>Ready to handle the next request.</li></ol><p>Here is how Node.js handles a file request:</p><ol><li>Sends the task to the computer\'s file system.</li><li>Ready to handle the next request.</li><li>When the file system has opened and read the file, the server returns the content to the client.</li></ol><p><br></p><p><br></p>', 'http://localhost:8080/app/Images/description_img/description_img-1688896682623.jpg', '2023-07-09 03:28:02', '2023-05-05 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_blogs`
--

CREATE TABLE `tbl_blogs` (
  `bId` int(11) NOT NULL,
  `cId` int(11) NOT NULL,
  `iParentCatID` int(50) NOT NULL,
  `vBlogTitle` varchar(100) NOT NULL,
  `vBlogTitleSlug` varchar(100) NOT NULL,
  `vBlogDescription` mediumtext NOT NULL,
  `vBlogFeatureImage` varchar(200) NOT NULL,
  `vBlogThumbnailImage` varchar(200) NOT NULL,
  `tCreatedDate` datetime NOT NULL,
  `tUpdatedDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_blogs`
--

INSERT INTO `tbl_blogs` (`bId`, `cId`, `iParentCatID`, `vBlogTitle`, `vBlogTitleSlug`, `vBlogDescription`, `vBlogFeatureImage`, `vBlogThumbnailImage`, `tCreatedDate`, `tUpdatedDate`) VALUES
(1, 5, 1, 'Getting Started', 'react-js-getting-started', 'React is a powerful JavaScript library that provides developers with the tools to build interactive and dynamic user interfaces. With React, you can create reusable UI components and efficiently manage their state and rendering. It follows a component-based architecture, allowing you to break down your application into smaller, manageable pieces.', 'http://localhost:8080/app/Images/blog_Image/b_img-1688881454258.png', 'http://localhost:8080/app/Images/blog_Image/b_img-1688881454267.png', '2023-07-09 11:14:14', '2023-05-05 00:00:00'),
(2, 7, 2, 'Node.js Introduction', 'node-js-introduction', 'Node.js is an open-source, server-side JavaScript runtime environment that allows you to run JavaScript code outside of a web browser.', 'http://localhost:8080/app/Images/blog_Image/b_img-1688896682479.png', 'http://localhost:8080/app/Images/blog_Image/b_img-1688896682481.png', '2023-07-09 00:00:00', '2023-07-09 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_categories`
--

CREATE TABLE `tbl_categories` (
  `cId` int(11) NOT NULL,
  `vCategoryName` varchar(50) NOT NULL,
  `vCategorySlug` varchar(50) NOT NULL,
  `vCategoryImage` varchar(100) NOT NULL,
  `iParentCatID` int(11) NOT NULL DEFAULT 0,
  `tCreatedDate` datetime NOT NULL,
  `tUpdatedDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_categories`
--

INSERT INTO `tbl_categories` (`cId`, `vCategoryName`, `vCategorySlug`, `vCategoryImage`, `iParentCatID`, `tCreatedDate`, `tUpdatedDate`) VALUES
(1, 'React JS', 'react-js', 'http://localhost:8080/app/Images/cat_img/cat_img-1688879558963.png', 0, '2021-05-03 00:00:00', '2023-05-18 00:00:00'),
(2, 'Node JS', 'node-js', 'http://localhost:8080/app/Images/cat_img/cat_img-1688879594960.png', 0, '2021-05-03 00:00:00', '2023-05-18 00:00:00'),
(3, 'Laravel', 'laravel', 'http://localhost:8080/app/Images/cat_img/cat_img-1688879608079.png', 0, '2021-05-03 00:00:00', '2023-05-18 00:00:00'),
(4, 'WordPress', 'wordpress', 'http://localhost:8080/app/Images/cat_img/cat_img-1688879620274.png', 0, '2021-05-03 00:00:00', '2023-05-18 00:00:00'),
(5, 'Installation', 'installation', 'http://localhost:8080/app/Images/cat_img/cat_img-1688879699070.png', 1, '2021-05-03 00:00:00', '2023-05-18 00:00:00'),
(6, 'Main Concepts', 'main-concepts', 'http://localhost:8080/app/Images/cat_img/cat_img-1688879745528.png', 1, '2021-05-03 00:00:00', '2023-05-18 00:00:00'),
(7, 'Introduction', 'node-js-introduction', 'http://localhost:8080/app/Images/cat_img/cat_img-1688887475931.png', 2, '2021-05-03 00:00:00', '2023-05-18 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_system`
--

CREATE TABLE `tbl_system` (
  `sId` int(11) NOT NULL,
  `vProjectName` varchar(50) NOT NULL,
  `vProjectLogo` varchar(50) NOT NULL,
  `vProjectLoginPageBgImage` varchar(100) NOT NULL,
  `vEmail` varchar(100) NOT NULL,
  `vMobileNumber` varchar(50) NOT NULL,
  `vAddress` varchar(100) NOT NULL,
  `tCreatedDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `uId` int(11) NOT NULL,
  `vUserName` varchar(50) NOT NULL,
  `vFirstName` varchar(50) NOT NULL,
  `vLastName` varchar(50) NOT NULL,
  `vEmailId` varchar(50) NOT NULL,
  `vPassword` varchar(50) NOT NULL,
  `vMobileNumber` varchar(50) NOT NULL,
  `tCreatedDate` datetime NOT NULL,
  `tUpdatedDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_additional_blogs_desc`
--
ALTER TABLE `tbl_additional_blogs_desc`
  ADD PRIMARY KEY (`abId`);

--
-- Indexes for table `tbl_blogs`
--
ALTER TABLE `tbl_blogs`
  ADD PRIMARY KEY (`bId`);

--
-- Indexes for table `tbl_categories`
--
ALTER TABLE `tbl_categories`
  ADD PRIMARY KEY (`cId`);

--
-- Indexes for table `tbl_system`
--
ALTER TABLE `tbl_system`
  ADD PRIMARY KEY (`sId`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`uId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_additional_blogs_desc`
--
ALTER TABLE `tbl_additional_blogs_desc`
  MODIFY `abId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_blogs`
--
ALTER TABLE `tbl_blogs`
  MODIFY `bId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_categories`
--
ALTER TABLE `tbl_categories`
  MODIFY `cId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbl_system`
--
ALTER TABLE `tbl_system`
  MODIFY `sId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `uId` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
