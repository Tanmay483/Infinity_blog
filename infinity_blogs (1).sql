-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 24, 2023 at 02:32 PM
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
  `vBlogImage` varchar(250) NOT NULL,
  `tCreatedDate` datetime NOT NULL,
  `tUpdatedDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_additional_blogs_desc`
--

INSERT INTO `tbl_additional_blogs_desc` (`abId`, `bId`, `vBlogDescription`, `vBlogImage`, `tCreatedDate`, `tUpdatedDate`) VALUES
(1, 6, 'hello world', 'appImagesdescription_imgdescription_img-1684901014578.jpg', '2019-06-27 00:00:00', '2020-05-02 00:00:00'),
(2, 5, 'hy there', 'description_img-1684413222799.jpg', '2023-05-06 00:00:00', '2021-06-21 00:00:00'),
(3, 5, 'hy there', 'description_img-1684413223662.jpg', '2023-05-06 00:00:00', '2021-06-21 00:00:00'),
(4, 6, 'hello world', 'description_img-1684414110803.jpg', '2019-06-27 00:00:00', '2020-05-02 00:00:00'),
(6, 6, 'hello world', 'appImagesdescription_imgdescription_img-1684902277517.jpg', '2019-06-27 00:00:00', '2020-05-02 00:00:00'),
(7, 5, 'hy there', 'app\\Images\\description_img\\description_img-1684901129634.jpg', '2023-05-06 00:00:00', '2021-06-21 00:00:00'),
(8, 5, 'hy there', 'app\\Images\\description_img\\description_img-1684901945456.jpg', '2023-05-06 00:00:00', '2021-06-21 00:00:00'),
(9, 5, 'hy there', 'app\\Images\\description_img\\description_img-1684902289772.jpg', '2023-05-06 00:00:00', '2021-06-21 00:00:00'),
(10, 5, 'hy there', 'app\\Images\\description_img\\description_img-1684902341857.jpg', '2023-05-06 00:00:00', '2021-06-21 00:00:00'),
(11, 5, 'hy there', 'app\\Images\\description_img\\description_img-1684902352418.jpg', '2023-05-06 00:00:00', '2021-06-21 00:00:00'),
(12, 6, 'hello world', 'app\\Images\\description_img\\description_img-1684902879406.jpg', '2019-06-27 00:00:00', '2020-05-02 00:00:00'),
(13, 5, 'hy there', 'app\\Images\\description_img\\description_img-1684902405774.jpg', '2023-05-06 00:00:00', '2021-06-21 00:00:00'),
(14, 5, 'hy there', 'app\\Images\\description_img\\description_img-1684902428170.jpg', '2023-05-06 00:00:00', '2021-06-21 00:00:00'),
(15, 5, 'hy there', 'app\\Images\\description_img\\description_img-1684902468658.jpg', '2023-05-06 00:00:00', '2021-06-21 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_blogs`
--

CREATE TABLE `tbl_blogs` (
  `bId` int(11) NOT NULL,
  `cId` int(11) NOT NULL,
  `iParentCatID` int(50) NOT NULL,
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
(1, 5, 3, 'java script', 'variables in java', 'b_img-1684511025299.png', 'b_img-1684511025300.png', '2021-05-06 00:00:00', '2023-06-30 00:00:00'),
(2, 3, 1, 'hello world', 'hi', 'b_img-1684416835317.png', 'b_img-1684416835321.png', '2021-05-06 00:00:00', '2023-05-18 00:00:00'),
(4, 5, 3, 'java script', 'variables in java', 'app\\Images\\blog_Image\\b_img-1684930868595.png', 'app\\Images\\blog_Image\\b_img-1684930868597.png', '2021-05-06 00:00:00', '2023-06-30 00:00:00'),
(5, 5, 3, 'java script', 'variables in java', '[object Object]', '[object Object]', '2021-05-06 00:00:00', '2023-06-30 00:00:00'),
(6, 5, 3, 'java script', 'variables in java', 'b_img-1684509963545.png', 'b_img-1684509963546.png', '2021-05-06 00:00:00', '2023-06-30 00:00:00'),
(7, 2, 1, 'hello world', 'hi', 'b_img-1684508906526.png', 'b_img-1684508906527.png', '2021-05-06 00:00:00', '2023-05-18 00:00:00'),
(8, 2, 1, 'hello world', 'hi', 'b_img-1684509444061.png', 'b_img-1684509444061.png', '2021-05-06 00:00:00', '2023-05-18 00:00:00'),
(9, 2, 1, 'hello world', 'hi', 'b_img-1684509447837.png', 'b_img-1684509447838.png', '2021-05-06 00:00:00', '2023-05-18 00:00:00'),
(10, 2, 1, 'hello world', 'hi', 'b_img-1684509461819.png', 'b_img-1684509461819.png', '2021-05-06 00:00:00', '2023-05-18 00:00:00'),
(34, 4, 1, 'hello world', 'hi', 'app\\Images\\blog_Image\\b_img-1684930676539.png', 'app\\Images\\blog_Image\\b_img-1684930676540.png', '2021-05-06 00:00:00', '2023-05-18 00:00:00');

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
(1, 'javascript', 'pyramid of doom', 'cat_img-1684415017050.png', 2, '2019-11-06 00:00:00', '2020-05-09 00:00:00'),
(2, 'java', 'parent class in java', 'cat_img-1684414507843.png', 0, '2021-05-03 00:00:00', '2023-05-18 00:00:00'),
(3, 'java', 'parent class in java', 'cat_img-1684414508571.png', 0, '2021-05-03 00:00:00', '2023-05-18 00:00:00'),
(4, 'java', 'parent class in java', 'cat_img-1684414509256.png', 2, '2021-05-03 00:00:00', '2023-05-18 00:00:00'),
(5, 'javascript', 'pyramid of doom', 'app\\Images\\cat_img\\cat_img-1684930471211.png', 5, '2019-11-06 00:00:00', '2020-05-09 00:00:00'),
(7, 'java', 'parent class in java', 'app\\Images\\cat_img\\cat_img-1684900791051.png', 0, '2021-05-03 00:00:00', '2023-05-18 00:00:00'),
(8, 'java', 'parent class in java', 'app\\Images\\cat_img\\cat_img-1684930497616.png', 0, '2021-05-03 00:00:00', '2023-05-18 00:00:00');

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
(1, 'hello', 'app\\Images\\system_img\\logo-1684931102987.png', 'app\\Images\\system_img\\logo-1684931102988.png', 'test@gmail.com', '3214596785', 'somewhere in india', '2023-05-15 00:00:00'),
(2, 'timepass', 'logo-1684134560579.png', 'logo-1684134560579.png', 'abc@gmail.com', '1123845631', 'somewhere on earth', '2023-05-15 00:00:00'),
(3, 'timepass', 'logo-1684134561314.png', 'logo-1684134561314.png', 'abc@gmail.com', '1123845631', 'somewhere on earth', '2023-05-15 00:00:00'),
(4, 'timepass', 'logo-1684134562061.png', 'logo-1684134562061.png', 'abc@gmail.com', '1123845631', 'somewhere on earth', '2023-05-15 00:00:00'),
(6, 'helloWorld', 'logo-1684510760370.png', 'logo-1684510760371.png', 'test@gmail.com', '3214596785', 'somewhere in india', '2023-05-15 00:00:00'),
(7, 'timepass', 'logo-1684411458456.png', 'logo-1684411458457.png', 'abc@gmail.com', '1123845631', 'somewhere on earth', '2023-05-15 00:00:00'),
(8, 'timepass', 'logo-1684412614904.png', 'logo-1684412614907.png', 'abc@gmail.com', '1123845631', 'somewhere on earth', '2023-05-15 00:00:00'),
(9, 'timepass', 'logo-1684510325046.png', 'logo-1684510325049.png', 'abc@gmail.com', '1123845631', 'somewhere on earth', '2023-05-15 00:00:00'),
(10, 'timepass', 'logo-1684510347551.png', 'logo-1684510347551.png', 'abc@gmail.com', '1123845631', 'somewhere on earth', '2023-05-15 00:00:00'),
(24, 'timepass', 'app\\Images\\system_img\\logo-1684931072440.png', 'app\\Images\\system_img\\logo-1684931072442.png', 'abc@gmail.com', '1123845631', 'somewhere on earth', '2023-05-15 00:00:00');

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
(1, 'admin', 'Tanmay', 'Makwana', 'abc@gmail.com', 'admin123', '1230456987', '2023-05-15 00:00:00', '2024-05-15 00:00:00'),
(3, 'admin', 'Naman', 'Makwana', 'abc@gmail.com', 'admin123', '1230456987', '2023-05-15 00:00:00', '2024-05-15 00:00:00'),
(4, 'admin', 'Satyam', 'Makwana', 'abc@gmail.com', 'admin123', '1230456987', '2023-05-15 00:00:00', '2024-05-15 00:00:00'),
(5, 'pqr', 'abc', 'def', 'ghi', 'jkl', '684632321', '2023-05-03 00:00:00', '2025-06-06 00:00:00');

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
  MODIFY `abId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `tbl_blogs`
--
ALTER TABLE `tbl_blogs`
  MODIFY `bId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `tbl_categories`
--
ALTER TABLE `tbl_categories`
  MODIFY `cId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_system`
--
ALTER TABLE `tbl_system`
  MODIFY `sId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `uId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
