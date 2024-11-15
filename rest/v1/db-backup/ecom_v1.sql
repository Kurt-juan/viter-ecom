-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 15, 2024 at 08:40 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.4.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecom_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `ecom_category`
--

CREATE TABLE `ecom_category` (
  `category_aid` int(11) NOT NULL,
  `category_title` varchar(20) NOT NULL,
  `category_is_active` tinyint(1) NOT NULL,
  `category_datetime` varchar(20) NOT NULL,
  `category_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ecom_category`
--

INSERT INTO `ecom_category` (`category_aid`, `category_title`, `category_is_active`, `category_datetime`, `category_created`) VALUES
(4, 'Popular', 1, '2024-11-15 12:00:47', '2024-11-15 12:00:47'),
(5, 'New Arrival', 1, '2024-11-15 12:01:14', '2024-11-15 12:01:14'),
(6, 'Trend', 1, '2024-11-15 12:01:18', '2024-11-15 12:01:18');

-- --------------------------------------------------------

--
-- Table structure for table `ecom_items`
--

CREATE TABLE `ecom_items` (
  `items_aid` int(11) NOT NULL,
  `items_photo` varchar(100) NOT NULL,
  `items_title` varchar(20) NOT NULL,
  `items_price` varchar(10) NOT NULL,
  `items_category` varchar(20) NOT NULL,
  `items_is_active` tinyint(1) NOT NULL,
  `items_datetime` varchar(20) NOT NULL,
  `items_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ecom_items`
--

INSERT INTO `ecom_items` (`items_aid`, `items_photo`, `items_title`, `items_price`, `items_category`, `items_is_active`, `items_datetime`, `items_created`) VALUES
(6, 'item8.jpg', 'Black Plain Hoodie', '150$', 'Popular', 1, '2024-11-15 08:36:05', '2024-11-14 14:10:48'),
(10, 'item4.jpg', 'Oakley', '110$', 'Popular', 1, '2024-11-15 08:36:18', '2024-11-15 08:18:03'),
(11, 'item9.jpg', 'Grey Sweatpants', '175$', 'Popular', 1, '2024-11-15 08:37:27', '2024-11-15 08:37:27'),
(12, 'item7.jpg', 'Oakley Bag', '200$', 'Popular', 1, '2024-11-15 08:38:02', '2024-11-15 08:38:02'),
(13, 'item3.jpg', 'AirPods Max', '350$', 'Popular', 1, '2024-11-15 08:39:01', '2024-11-15 08:39:01'),
(14, 'Nike Vintage.jpg', 'Nike Vintage', '450$', 'Popular', 1, '2024-11-15 08:55:52', '2024-11-15 08:55:52'),
(15, 'Baggy Crop Hoodie.jpg', 'Gray Crop Hoodie', '145$', 'New Arrival', 1, '2024-11-15 09:08:13', '2024-11-15 08:56:47'),
(16, 'fleece.jpg', 'Fleece', '275$', 'New Arrival', 1, '2024-11-15 09:00:28', '2024-11-15 09:00:28'),
(17, 'Dr. Martens.jpg', 'Dr.Martins', '450$', 'New Arrival', 1, '2024-11-15 09:09:24', '2024-11-15 09:01:00'),
(18, 'Diesel Diesel Belt.jpg', 'Diesel Diesel Belt', '700$', 'New Arrival', 1, '2024-11-15 09:01:32', '2024-11-15 09:01:32'),
(19, 'T-shirt Skate.jpg', 'T-shirt Skate', '90$', 'Trend', 1, '2024-11-15 09:05:35', '2024-11-15 09:02:35'),
(20, 'Traditional All Stars.jpg', 'Traditional All Star', '105$', 'Trend', 1, '2024-11-15 09:06:20', '2024-11-15 09:06:20'),
(21, 'TNF Beanie.jpg', 'TNF Beanie', '75$', 'Trend', 1, '2024-11-15 09:06:46', '2024-11-15 09:06:46'),
(22, 'Flannel Black.jpg', 'Flannel Black', '75$', 'Trend', 1, '2024-11-15 09:07:37', '2024-11-15 09:07:37'),
(23, 'Arizona Gray Cap.jpg', 'Arizona Gray Cap', '35$', 'Trend', 1, '2024-11-15 09:10:09', '2024-11-15 09:10:09'),
(24, 'item5.jpg', 'Black Oakley Specs', '115$', 'New Arrival', 1, '2024-11-15 09:10:47', '2024-11-15 09:10:47');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ecom_category`
--
ALTER TABLE `ecom_category`
  ADD PRIMARY KEY (`category_aid`);

--
-- Indexes for table `ecom_items`
--
ALTER TABLE `ecom_items`
  ADD PRIMARY KEY (`items_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ecom_category`
--
ALTER TABLE `ecom_category`
  MODIFY `category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `ecom_items`
--
ALTER TABLE `ecom_items`
  MODIFY `items_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
