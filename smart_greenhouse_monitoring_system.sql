-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 06, 2019 at 03:30 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `smart_greenhouse_monitoring_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `crops`
--

CREATE TABLE `crops` (
  `cid` int(11) NOT NULL,
  `cname` varchar(50) NOT NULL,
  `ctype` int(11) NOT NULL COMMENT '0 : Vegetable 1: Fruit 2 : Flower 3 : Other',
  `other_type` text,
  `humidity_high` double NOT NULL,
  `humidity_low` double NOT NULL,
  `temp_high` double NOT NULL,
  `temp_low` double NOT NULL,
  `light_intensity_high` int(11) NOT NULL,
  `light_intensity_low` double NOT NULL,
  `soil_ph_high` double NOT NULL,
  `soil_ph_low` double NOT NULL,
  `air_quality_high` double NOT NULL,
  `air_quality_low` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

CREATE TABLE `logs` (
  `pid` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `details` text NOT NULL COMMENT 'JSON of details'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `pid` int(11) NOT NULL,
  `rpi_number` varchar(100) NOT NULL,
  `sensors` text NOT NULL COMMENT 'JSON of sensor details'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='sensor details and the RPi details';

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `uid` int(11) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` text,
  `registered_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `name` text NOT NULL,
  `password_used` tinyint(4) NOT NULL COMMENT '1 : yes 0 : OAuth used'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user_crop_product_mapping`
--

CREATE TABLE `user_crop_product_mapping` (
  `uid` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `pid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `crops`
--
ALTER TABLE `crops`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`pid`,`timestamp`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `user_crop_product_mapping`
--
ALTER TABLE `user_crop_product_mapping`
  ADD PRIMARY KEY (`uid`,`cid`,`pid`),
  ADD KEY `cid_fk` (`cid`),
  ADD KEY `pid_fk` (`pid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `crops`
--
ALTER TABLE `crops`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `logs`
--
ALTER TABLE `logs`
  ADD CONSTRAINT `pid_fk_logs` FOREIGN KEY (`pid`) REFERENCES `products` (`pid`);

--
-- Constraints for table `user_crop_product_mapping`
--
ALTER TABLE `user_crop_product_mapping`
  ADD CONSTRAINT `cid_fk` FOREIGN KEY (`cid`) REFERENCES `crops` (`cid`),
  ADD CONSTRAINT `pid_fk` FOREIGN KEY (`pid`) REFERENCES `products` (`pid`),
  ADD CONSTRAINT `uid_fk` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
