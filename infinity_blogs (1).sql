-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 02, 2023 at 02:30 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

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
  `vBlogDescription` varchar(100) NOT NULL,
  `vBlogImage` varchar(100) NOT NULL,
  `tCreatedDate` datetime NOT NULL,
  `tUpdatedDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_additional_blogs_desc`
--

INSERT INTO `tbl_additional_blogs_desc` (`abId`, `bId`, `vBlogDescription`, `vBlogImage`, `tCreatedDate`, `tUpdatedDate`) VALUES
(1, 52, 'hello world', 'img-1682421329918.jpg', '2023-05-06 00:00:00', '2022-06-09 00:00:00'),
(2, 52, 'hello duniya', 'img-1682584898091.jpg', '2023-05-06 00:00:00', '0000-00-00 00:00:00'),
(4, 53, 'hello', 'img-1682584869161.jpg', '2023-05-06 00:00:00', '2022-06-09 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_blogs`
--

CREATE TABLE `tbl_blogs` (
  `bId` int(11) NOT NULL,
  `cId` int(11) NOT NULL,
  `iParentCatID` int(11) NOT NULL,
  `vBlogTitle` varchar(100) NOT NULL,
  `vBlogDescription` varchar(1000) NOT NULL,
  `vBlogFeatureImage` varchar(50) NOT NULL,
  `vBlogThumbnailImage` varchar(50) NOT NULL,
  `tCreatedDate` datetime NOT NULL,
  `tUpdatedDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_blogs`
--

INSERT INTO `tbl_blogs` (`bId`, `cId`, `iParentCatID`, `vBlogTitle`, `vBlogDescription`, `vBlogFeatureImage`, `vBlogThumbnailImage`, `tCreatedDate`, `tUpdatedDate`) VALUES
(52, 1, 1, 'restful API', 'restful api with help of node js', 'b_img-1682226396198.png', 't_img-1682228532657.png', '2023-02-18 00:00:00', '2023-03-26 00:00:00'),
(53, 1, 1, 'restful API', 'restful api with help of node js', 'b_img-1682226397043.png', 't_img-1682228538300.png', '2023-02-18 00:00:00', '2023-03-26 00:00:00'),
(54, 1, 1, 'restful API', 'restful api with help of node js', 'b_img-1682226398403.png', '', '2023-02-18 00:00:00', '2023-03-26 00:00:00'),
(55, 1, 1, 'restful API', 'restful api with help of node js', 'b_img-1682227477568.png', '', '2023-02-18 00:00:00', '2023-03-26 00:00:00'),
(56, 1, 1, 'restful API', 'restful api with help of node js', 'b_img-1682227935470.png', '', '2023-02-18 00:00:00', '2023-03-26 00:00:00'),
(57, 1, 1, 'restful API', 'restful api with help of node js', 'b_img-1682229043142.png', 't_img-1682229056898.png', '2023-02-18 00:00:00', '2023-03-26 00:00:00'),
(58, 2, 3, 'css', 'hello world part 2', 'b_img-1682235523685.png', 't_img-1682230549246.png', '2023-02-18 00:00:00', '2023-03-26 00:00:00');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_categories`
--

INSERT INTO `tbl_categories` (`cId`, `vCategoryName`, `vCategorySlug`, `vCategoryImage`, `iParentCatID`, `tCreatedDate`, `tUpdatedDate`) VALUES
(5, 'react', 'hello world', 'img-1682132762236.png', 0, '2023-05-31 00:00:00', '2023-06-28 00:00:00'),
(6, 'html', 'hello ', 'img-1682136400967.png', 0, '2023-06-08 00:00:00', '2023-09-17 00:00:00'),
(7, 'Redux', 'Redux', 'img-1682136400967.png', 5, '2023-06-08 00:00:00', '2023-09-17 00:00:00'),
(8, 'Redux JS', 'Redux', 'img-1682136400967.png', 5, '2023-06-08 00:00:00', '2023-09-17 00:00:00'),
(9, 'react', 'hello world', 'img-1682139791245.png', 0, '2023-05-31 00:00:00', '2023-06-28 00:00:00'),
(10, 'JavaScript', 'bom', 'img-1682143600724.png', 6, '2023-06-08 00:00:00', '2023-09-17 00:00:00'),
(11, 'html', 'hello world', 'img-1682140653164.png', 6, '2023-06-08 00:00:00', '2023-09-17 00:00:00'),
(12, 'css', 'hello world', 'img-1682140800916.png', 0, '2023-05-31 00:00:00', '2023-06-28 00:00:00');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_system`
--

INSERT INTO `tbl_system` (`sId`, `vProjectName`, `vProjectLogo`, `vProjectLoginPageBgImage`, `vEmail`, `vMobileNumber`, `vAddress`, `tCreatedDate`) VALUES
(1, 'sptify clone', 'logo-1682342464634.png', 'bg-1682341684676.png', 'deg@gmail.com', '8905691100', 'hello', '0000-00-00 00:00:00'),
(3, 'hello world', 'logo-1682342534985.png', 'bg-1682342551045.png', 'abc@gmail.com', '135467984364', 'hi', '2023-04-03 00:00:00'),
(4, 'hello world', 'logo-1682679641873.png', 'bg-1682679660205.png', 'abc@gmail.com', '135467984364', 'hi', '2023-04-03 00:00:00');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`uId`, `vUserName`, `vFirstName`, `vLastName`, `vEmailId`, `vPassword`, `vMobileNumber`, `tCreatedDate`, `tUpdatedDate`) VALUES
(1, 'admin124', 'tanmay', 'makwana', 'tanamy@gmail.com', 'admin456', '8156230479', '2023-02-26 00:00:00', '2023-03-24 00:00:00'),
(4, 'Admin', 'satyam', 'makwana', 'satyam@gmail.com', 'test567', '8156230479', '2023-02-26 00:00:00', '2023-03-24 00:00:00'),
(5, 'admin', 'dev', 'makwana', 'dev@gmail.com', 'admin123', '8156230479', '2023-02-26 00:00:00', '2023-03-24 00:00:00'),
(6, 'Admin', 'naman', 'makwana', 'naman@gmail.com', 'abc1234', '8156230479', '2023-02-26 00:00:00', '2023-03-24 00:00:00'),
(31, 'admin', 'hello', 'world', 'abc@123', 'admin123', '123456778', '2023-12-02 00:00:00', '2022-05-06 00:00:00'),
(32, 'admin', 'hello', 'world', 'abc@123', 'admin123', '123456778', '2023-12-02 00:00:00', '2022-05-06 00:00:00'),
(33, 'admin', 'Tanmay', 'makwana', 'tsnmsy@gmail.com', 'SDggeawe', '143563758', '2023-12-02 00:00:00', '2022-05-06 00:00:00');

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
  MODIFY `abId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_blogs`
--
ALTER TABLE `tbl_blogs`
  MODIFY `bId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `tbl_categories`
--
ALTER TABLE `tbl_categories`
  MODIFY `cId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `tbl_system`
--
ALTER TABLE `tbl_system`
  MODIFY `sId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `uId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
