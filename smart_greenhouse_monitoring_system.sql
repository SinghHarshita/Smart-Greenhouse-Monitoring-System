-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 28, 2020 at 11:52 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

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
  `other_type` text DEFAULT NULL,
  `humidity_high` double NOT NULL,
  `humidity_low` double NOT NULL,
  `temp_high` double NOT NULL,
  `temp_low` double NOT NULL,
  `light_intensity_high` int(11) NOT NULL,
  `light_intensity_low` double NOT NULL,
  `soil_ph_high` double NOT NULL,
  `soil_ph_low` double NOT NULL,
  `air_quality_high` double NOT NULL,
  `air_quality_low` double NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `crops`
--

INSERT INTO `crops` (`cid`, `cname`, `ctype`, `other_type`, `humidity_high`, `humidity_low`, `temp_high`, `temp_low`, `light_intensity_high`, `light_intensity_low`, `soil_ph_high`, `soil_ph_low`, `air_quality_high`, `air_quality_low`, `updated_at`) VALUES
(1, 'Crop1', 1, 'dfaadasfdaf', 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, '2020-01-28 19:36:40'),
(2, 'Crop2', 2, 'dasfdsaf', 23, 32, 23, 23, 23, 23, 23, 23, 23, 23, '2020-01-28 16:13:44');

-- --------------------------------------------------------

--
-- Table structure for table `crops_log`
--

CREATE TABLE `crops_log` (
  `cid` int(11) NOT NULL,
  `cname` varchar(50) NOT NULL,
  `ctype` int(11) NOT NULL COMMENT '0 : Vegetable 1: Fruit 2 : Flower 3 : Other',
  `other_type` text DEFAULT NULL,
  `humidity_high` double NOT NULL,
  `humidity_low` double NOT NULL,
  `temp_high` double NOT NULL,
  `temp_low` double NOT NULL,
  `light_intensity_high` int(11) NOT NULL,
  `light_intensity_low` double NOT NULL,
  `soil_ph_high` double NOT NULL,
  `soil_ph_low` double NOT NULL,
  `air_quality_high` double NOT NULL,
  `air_quality_low` double NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `crops_log`
--

INSERT INTO `crops_log` (`cid`, `cname`, `ctype`, `other_type`, `humidity_high`, `humidity_low`, `temp_high`, `temp_low`, `light_intensity_high`, `light_intensity_low`, `soil_ph_high`, `soil_ph_low`, `air_quality_high`, `air_quality_low`, `updated_at`) VALUES
(1, 'Crop1', 1, 'dfaadasfdaf', 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, '2020-01-28 19:15:24'),
(1, 'Crop1', 1, 'dfaadasfdaf', 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, '2020-01-28 19:27:31'),
(1, 'Crop1', 1, 'dfaadasfdaf', 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, '2020-01-28 19:36:40');

-- --------------------------------------------------------

--
-- Table structure for table `irrigation`
--

CREATE TABLE `irrigation` (
  `id` int(11) NOT NULL,
  `ucp_id` int(11) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
  `details` text NOT NULL COMMENT '[{"starttime": "val", "endtime": "val", "litres": "val"}]',
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `irrigation`
--

INSERT INTO `irrigation` (`id`, `ucp_id`, `date`, `details`, `updated_at`) VALUES
(1, 1, '2020-01-29', 'New Irrigation details', '2020-01-28 21:25:00'),
(3, 3, '2020-01-29', 'New Irrigation details', '2020-01-28 22:48:53');

-- --------------------------------------------------------

--
-- Table structure for table `irrigation_log`
--

CREATE TABLE `irrigation_log` (
  `log_id` int(11) NOT NULL,
  `ucp_id` int(11) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
  `details` text NOT NULL COMMENT '[{"starttime": "val", "endtime": "val", "litres": "val"}]',
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `irrigation_log`
--

INSERT INTO `irrigation_log` (`log_id`, `ucp_id`, `date`, `details`, `updated_at`) VALUES
(1, 1, '2020-01-29', 'iodfuhalncqpsed', '2020-01-28 21:07:54'),
(2, 1, '2020-01-29', 'New Irrigation details', '2020-01-28 21:25:00');

-- --------------------------------------------------------

--
-- Table structure for table `log_every_hour`
--

CREATE TABLE `log_every_hour` (
  `id` int(11) NOT NULL,
  `ucp_id` int(11) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
  `details` text NOT NULL COMMENT '[{"hour":{"soil_ph": "val", "temp": "val", "light_intensity": "val", "air_quality": "val"}]'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `log_every_hour`
--

INSERT INTO `log_every_hour` (`id`, `ucp_id`, `date`, `details`) VALUES
(1, 1, '2020-01-29', '1'),
(3, 1, '2020-01-29', '{\"03\": \"asdfasdfadsffsd\"}');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `pid` int(11) NOT NULL,
  `rpi_number` varchar(100) NOT NULL,
  `sensors` text NOT NULL COMMENT 'JSON of sensor details'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='sensor details and the RPi details';

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`pid`, `rpi_number`, `sensors`) VALUES
(1, 'asdfasddsfadsff', 'asdfdsafsdffsaf'),
(2, 'dsaxzcvfsrs', 'nvigfyieqldkjqowhn'),
(8, 'adfssfwaczzSD', 'sensors');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `uid` int(11) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` text DEFAULT NULL,
  `name` text NOT NULL,
  `type` tinyint(1) NOT NULL COMMENT '{"0": "System User", "1": "GreenHouse User"}'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`uid`, `email`, `password`, `name`, `type`) VALUES
(1, 'abc@gmail.com', 'password', 'Abc Xyz', 1),
(2, 'vignesh@gmail.com', 'password', 'Vignesh', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_crop_product_mapping`
--

CREATE TABLE `user_crop_product_mapping` (
  `id` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `default_irrigation` text DEFAULT NULL COMMENT '[{"starttime":"val", "endtime": "val", "litres": "val"}]'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_crop_product_mapping`
--

INSERT INTO `user_crop_product_mapping` (`id`, `uid`, `cid`, `pid`, `default_irrigation`) VALUES
(1, 1, 1, 1, 'asdfasfasdfadsfdsf'),
(3, 1, 2, 8, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `crops`
--
ALTER TABLE `crops`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `crops_log`
--
ALTER TABLE `crops_log`
  ADD UNIQUE KEY `cid` (`cid`,`updated_at`);

--
-- Indexes for table `irrigation`
--
ALTER TABLE `irrigation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ucp_id` (`ucp_id`);

--
-- Indexes for table `irrigation_log`
--
ALTER TABLE `irrigation_log`
  ADD PRIMARY KEY (`log_id`),
  ADD KEY `ucp_id` (`ucp_id`);

--
-- Indexes for table `log_every_hour`
--
ALTER TABLE `log_every_hour`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ucp_id` (`ucp_id`);

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
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `email_2` (`email`);

--
-- Indexes for table `user_crop_product_mapping`
--
ALTER TABLE `user_crop_product_mapping`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uid` (`uid`,`cid`,`pid`) USING BTREE,
  ADD KEY `pid_fk` (`pid`),
  ADD KEY `cid` (`cid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `crops`
--
ALTER TABLE `crops`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `irrigation`
--
ALTER TABLE `irrigation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `irrigation_log`
--
ALTER TABLE `irrigation_log`
  MODIFY `log_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `log_every_hour`
--
ALTER TABLE `log_every_hour`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user_crop_product_mapping`
--
ALTER TABLE `user_crop_product_mapping`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `irrigation`
--
ALTER TABLE `irrigation`
  ADD CONSTRAINT `irrigation_ibfk_1` FOREIGN KEY (`ucp_id`) REFERENCES `user_crop_product_mapping` (`id`);

--
-- Constraints for table `irrigation_log`
--
ALTER TABLE `irrigation_log`
  ADD CONSTRAINT `irrigation_log_ibfk_1` FOREIGN KEY (`ucp_id`) REFERENCES `user_crop_product_mapping` (`id`);

--
-- Constraints for table `log_every_hour`
--
ALTER TABLE `log_every_hour`
  ADD CONSTRAINT `log_every_hour_ibfk_1` FOREIGN KEY (`ucp_id`) REFERENCES `user_crop_product_mapping` (`id`);

--
-- Constraints for table `user_crop_product_mapping`
--
ALTER TABLE `user_crop_product_mapping`
  ADD CONSTRAINT `pid_fk` FOREIGN KEY (`pid`) REFERENCES `products` (`pid`),
  ADD CONSTRAINT `uid_fk` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`),
  ADD CONSTRAINT `user_crop_product_mapping_ibfk_1` FOREIGN KEY (`cid`) REFERENCES `crops` (`cid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
