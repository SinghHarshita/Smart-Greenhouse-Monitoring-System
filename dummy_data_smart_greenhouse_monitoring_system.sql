-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 17, 2019 at 05:37 AM
-- Server version: 10.1.35-MariaDB
-- PHP Version: 7.2.9

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

--
-- Dumping data for table `crops`
--

INSERT INTO `crops` (`cid`, `cname`, `ctype`, `other_type`, `humidity_high`, `humidity_low`, `temp_high`, `temp_low`, `light_intensity_high`, `light_intensity_low`, `soil_ph_high`, `soil_ph_low`, `air_quality_high`, `air_quality_low`) VALUES
(1, 'Aliquam', 2, 'Lorem ipsum dolor', 9, 1, 10, 5, 7, 3, 9, 3, 10, 2),
(2, 'fringilla', 3, 'Lorem ipsum dolor sit', 8, 4, 9, 1, 10, 4, 10, 5, 10, 2),
(3, 'nec,', 0, 'Lorem', 6, 1, 9, 3, 7, 3, 7, 2, 8, 3),
(4, 'eu,', 1, 'Lorem ipsum dolor sit', 8, 3, 9, 1, 7, 2, 8, 5, 8, 5),
(5, 'magna.', 2, 'Lorem', 7, 2, 9, 1, 8, 4, 7, 5, 8, 2),
(6, 'ornare.', 1, 'Lorem ipsum dolor sit', 6, 2, 7, 5, 9, 3, 8, 5, 9, 5),
(7, 'dui', 2, 'Lorem ipsum dolor', 8, 5, 9, 1, 9, 3, 9, 3, 7, 2),
(8, 'amet', 0, 'Lorem ipsum dolor', 8, 1, 7, 1, 9, 2, 9, 5, 6, 2),
(9, 'egestas.', 2, 'Lorem ipsum dolor sit', 7, 5, 6, 1, 7, 4, 10, 1, 10, 3),
(10, 'purus.', 2, 'Lorem', 6, 4, 8, 3, 6, 3, 6, 2, 6, 5),
(11, 'tincidunt', 2, 'Lorem ipsum', 10, 1, 7, 4, 8, 3, 10, 5, 8, 1),
(12, 'mattis.', 0, 'Lorem ipsum', 9, 1, 8, 5, 10, 1, 10, 1, 7, 2),
(13, 'Maecenas', 0, 'Lorem ipsum', 7, 4, 9, 2, 6, 5, 10, 4, 9, 4),
(14, 'lectus', 2, 'Lorem ipsum dolor sit', 9, 2, 10, 1, 8, 4, 10, 3, 10, 3),
(15, 'ut,', 0, 'Lorem ipsum dolor', 6, 2, 9, 1, 6, 5, 8, 3, 6, 4),
(16, 'nunc', 1, 'Lorem ipsum dolor', 10, 2, 10, 1, 10, 3, 8, 1, 10, 1),
(17, 'ligula.', 0, 'Lorem ipsum dolor', 9, 1, 9, 5, 6, 3, 7, 1, 6, 3),
(18, 'erat', 3, 'Lorem ipsum dolor sit', 8, 4, 9, 2, 8, 5, 6, 1, 8, 2),
(19, 'vitae', 1, 'Lorem ipsum dolor', 9, 1, 10, 4, 10, 2, 6, 2, 6, 4),
(20, 'ipsum', 3, 'Lorem', 6, 4, 8, 2, 10, 3, 6, 1, 9, 2),
(21, 'nec,', 3, 'Lorem ipsum dolor sit', 9, 5, 6, 4, 9, 2, 8, 2, 6, 1),
(22, 'enim.', 0, 'Lorem ipsum', 8, 4, 10, 3, 10, 4, 10, 3, 10, 3),
(23, 'turpis.', 0, 'Lorem', 10, 5, 6, 5, 10, 4, 8, 4, 10, 4),
(24, 'Phasellus', 3, 'Lorem ipsum', 10, 2, 9, 3, 8, 3, 7, 3, 8, 2),
(25, 'sem', 0, 'Lorem', 7, 2, 7, 4, 8, 4, 9, 4, 6, 1),
(26, 'Donec', 2, 'Lorem ipsum dolor', 8, 4, 10, 4, 7, 1, 7, 4, 8, 2),
(27, 'congue.', 1, 'Lorem ipsum dolor sit', 10, 3, 7, 2, 7, 3, 6, 3, 6, 2),
(28, 'Sed', 3, 'Lorem ipsum dolor', 9, 3, 8, 1, 7, 3, 6, 3, 7, 5),
(29, 'ridiculus', 2, 'Lorem ipsum dolor sit', 8, 3, 7, 2, 8, 1, 6, 2, 10, 3),
(30, 'Etiam', 0, 'Lorem', 6, 4, 9, 3, 10, 4, 10, 5, 9, 5),
(31, 'id', 2, 'Lorem', 10, 4, 8, 4, 7, 3, 9, 1, 10, 1),
(32, 'vitae', 0, 'Lorem ipsum dolor', 9, 4, 6, 4, 10, 2, 9, 5, 8, 5),
(33, 'libero.', 3, 'Lorem ipsum dolor sit', 8, 4, 10, 3, 10, 5, 10, 3, 10, 2),
(34, 'Proin', 0, 'Lorem', 10, 2, 8, 4, 7, 2, 6, 1, 6, 3),
(35, 'lectus', 1, 'Lorem', 7, 3, 8, 5, 10, 5, 7, 5, 6, 1),
(36, 'Etiam', 1, 'Lorem ipsum dolor sit', 7, 2, 9, 3, 7, 3, 8, 4, 6, 5),
(37, 'inceptos', 1, 'Lorem ipsum dolor', 6, 2, 7, 2, 7, 4, 9, 2, 8, 3),
(38, 'pede.', 2, 'Lorem ipsum dolor sit', 6, 3, 8, 5, 9, 3, 7, 1, 10, 4),
(39, 'Nullam', 1, 'Lorem ipsum dolor sit', 7, 3, 10, 2, 10, 4, 7, 2, 10, 5),
(40, 'ac', 0, 'Lorem ipsum dolor sit', 9, 1, 8, 4, 7, 5, 8, 4, 10, 5),
(41, 'elit.', 0, 'Lorem ipsum', 8, 5, 6, 1, 6, 5, 7, 4, 8, 4),
(42, 'molestie', 0, 'Lorem ipsum dolor', 8, 1, 10, 2, 8, 1, 8, 1, 10, 4),
(43, 'ultricies', 3, 'Lorem', 9, 3, 7, 2, 8, 1, 10, 5, 6, 1),
(44, 'fermentum', 3, 'Lorem ipsum', 9, 1, 6, 5, 6, 2, 10, 5, 8, 3),
(45, 'mollis', 0, 'Lorem ipsum dolor', 8, 2, 7, 5, 6, 5, 6, 4, 7, 4),
(46, 'amet', 3, 'Lorem ipsum', 10, 3, 6, 2, 6, 1, 9, 4, 10, 3),
(47, 'Sed', 2, 'Lorem ipsum dolor sit', 6, 4, 10, 3, 8, 2, 8, 1, 6, 4),
(48, 'et', 1, 'Lorem ipsum dolor', 8, 2, 8, 3, 8, 5, 6, 1, 10, 1),
(49, 'dignissim', 3, 'Lorem ipsum dolor sit', 7, 1, 9, 3, 6, 4, 7, 5, 7, 5),
(50, 'vel', 1, 'Lorem ipsum', 6, 5, 9, 2, 10, 5, 6, 4, 8, 4),
(51, 'sed,', 1, 'Lorem ipsum dolor sit', 8, 3, 6, 4, 6, 3, 7, 1, 10, 3),
(52, 'feugiat', 1, 'Lorem', 6, 1, 7, 2, 7, 3, 10, 1, 6, 1),
(53, 'elit,', 0, 'Lorem ipsum dolor sit', 9, 4, 7, 3, 10, 2, 6, 1, 9, 1),
(54, 'tempus,', 2, 'Lorem ipsum', 8, 2, 9, 4, 9, 3, 6, 2, 10, 2),
(55, 'sollicitudin', 2, 'Lorem ipsum dolor sit', 9, 4, 9, 1, 6, 2, 7, 5, 10, 2),
(56, 'hendrerit', 1, 'Lorem ipsum dolor', 8, 4, 9, 3, 10, 1, 7, 3, 10, 2),
(57, 'vitae', 1, 'Lorem ipsum dolor', 9, 5, 9, 2, 8, 5, 10, 5, 10, 1),
(58, 'lacus', 3, 'Lorem ipsum dolor', 9, 4, 7, 5, 7, 5, 9, 1, 8, 4),
(59, 'vestibulum', 0, 'Lorem', 8, 2, 10, 2, 6, 3, 8, 2, 10, 1),
(60, 'Donec', 3, 'Lorem ipsum', 8, 2, 8, 1, 8, 4, 7, 2, 8, 1),
(61, 'et', 2, 'Lorem ipsum', 9, 5, 7, 5, 10, 4, 6, 4, 7, 2),
(62, 'purus.', 3, 'Lorem', 7, 1, 6, 3, 9, 3, 8, 3, 8, 3),
(63, 'eu', 0, 'Lorem ipsum dolor sit', 7, 2, 7, 1, 6, 4, 10, 5, 6, 1),
(64, 'rutrum', 0, 'Lorem ipsum', 7, 4, 9, 2, 7, 1, 8, 4, 9, 4),
(65, 'erat', 2, 'Lorem ipsum', 9, 5, 10, 1, 9, 4, 7, 5, 6, 5),
(66, 'eget,', 1, 'Lorem ipsum', 10, 3, 7, 4, 10, 2, 9, 1, 10, 1),
(67, 'ipsum', 0, 'Lorem', 9, 2, 7, 2, 9, 5, 10, 1, 10, 2),
(68, 'quis', 1, 'Lorem ipsum dolor', 8, 4, 7, 3, 9, 4, 9, 2, 8, 4),
(69, 'magna.', 2, 'Lorem ipsum', 9, 2, 8, 3, 10, 3, 8, 5, 6, 1),
(70, 'imperdiet', 1, 'Lorem ipsum dolor', 10, 5, 6, 2, 8, 2, 8, 5, 8, 3),
(71, 'Nunc', 0, 'Lorem ipsum dolor sit', 9, 2, 7, 3, 9, 2, 9, 4, 7, 3),
(72, 'Integer', 1, 'Lorem ipsum dolor sit', 6, 5, 6, 1, 10, 1, 8, 4, 6, 3),
(73, 'Cras', 2, 'Lorem ipsum', 8, 1, 8, 2, 9, 5, 9, 1, 7, 2),
(74, 'mi', 2, 'Lorem', 7, 1, 10, 4, 8, 1, 10, 4, 8, 3),
(75, 'turpis.', 0, 'Lorem ipsum', 10, 1, 10, 2, 9, 3, 10, 5, 10, 3),
(76, 'penatibus', 2, 'Lorem ipsum dolor sit', 6, 2, 9, 1, 9, 1, 7, 2, 6, 3),
(77, 'eleifend', 3, 'Lorem', 6, 5, 6, 3, 9, 4, 6, 5, 10, 5),
(78, 'eget', 2, 'Lorem ipsum', 7, 1, 8, 1, 10, 1, 7, 4, 8, 5),
(79, 'sit', 3, 'Lorem', 7, 4, 7, 3, 9, 2, 10, 1, 10, 2),
(80, 'Morbi', 3, 'Lorem ipsum dolor sit', 10, 4, 9, 1, 9, 5, 8, 1, 9, 2),
(81, 'eget', 2, 'Lorem ipsum dolor sit', 8, 5, 8, 4, 7, 3, 7, 1, 7, 5),
(82, 'ut,', 2, 'Lorem ipsum dolor sit', 8, 3, 8, 4, 7, 1, 10, 1, 10, 3),
(83, 'ante,', 3, 'Lorem ipsum', 10, 1, 9, 5, 8, 3, 8, 5, 10, 1),
(84, 'ac', 3, 'Lorem ipsum dolor sit', 8, 4, 6, 2, 6, 5, 9, 2, 6, 3),
(85, 'feugiat', 1, 'Lorem ipsum dolor', 10, 3, 7, 5, 9, 4, 7, 2, 9, 3),
(86, 'lobortis,', 0, 'Lorem ipsum', 7, 4, 10, 5, 10, 2, 8, 3, 8, 3),
(87, 'ipsum', 2, 'Lorem', 6, 1, 7, 4, 8, 3, 10, 3, 8, 4),
(88, 'iaculis,', 0, 'Lorem', 7, 5, 7, 5, 8, 1, 9, 2, 6, 3),
(89, 'malesuada', 2, 'Lorem ipsum dolor sit', 8, 2, 6, 2, 7, 2, 8, 1, 10, 5),
(90, 'risus.', 1, 'Lorem', 8, 1, 6, 4, 9, 4, 10, 1, 7, 2),
(91, 'eu', 0, 'Lorem ipsum dolor', 8, 5, 7, 1, 8, 5, 10, 2, 8, 2),
(92, 'ac', 0, 'Lorem', 8, 1, 7, 4, 9, 1, 10, 3, 7, 2),
(93, 'montes,', 3, 'Lorem ipsum', 9, 3, 6, 5, 10, 5, 9, 4, 7, 3),
(94, 'Duis', 2, 'Lorem ipsum dolor sit', 9, 2, 8, 1, 6, 5, 9, 4, 6, 2),
(95, 'dis', 3, 'Lorem ipsum dolor', 6, 2, 6, 2, 6, 5, 8, 2, 6, 5),
(96, 'tellus', 2, 'Lorem', 7, 2, 10, 2, 9, 1, 7, 3, 9, 1),
(97, 'sagittis', 2, 'Lorem ipsum', 6, 4, 7, 2, 7, 2, 10, 5, 7, 3),
(98, 'pede.', 2, 'Lorem ipsum dolor sit', 8, 4, 7, 3, 6, 5, 7, 1, 7, 4),
(99, 'per', 3, 'Lorem ipsum dolor', 6, 1, 7, 5, 7, 3, 9, 5, 8, 1),
(100, 'et', 2, 'Lorem ipsum dolor sit', 6, 2, 8, 1, 8, 5, 8, 3, 10, 2);

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

CREATE TABLE `logs` (
  `pid` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `details` text NOT NULL COMMENT 'JSON of details'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `logs`
--

INSERT INTO `logs` (`pid`, `timestamp`, `details`) VALUES
(0, '0000-00-00 00:00:00', 'details'),
(1, '0000-00-00 00:00:00', 'Lorem ipsum'),
(1, '2019-09-21 12:11:14', 'Lorem ipsum'),
(2, '0000-00-00 00:00:00', 'Lorem ipsum dolor sit'),
(2, '2019-09-02 10:49:26', 'Lorem ipsum dolor sit'),
(3, '0000-00-00 00:00:00', 'Lorem ipsum'),
(3, '2019-10-12 15:03:46', 'Lorem ipsum'),
(4, '0000-00-00 00:00:00', 'Lorem'),
(4, '2019-09-20 13:50:39', 'Lorem'),
(5, '0000-00-00 00:00:00', 'Lorem'),
(5, '2019-09-20 09:57:40', 'Lorem'),
(6, '0000-00-00 00:00:00', 'Lorem ipsum dolor sit'),
(6, '2019-09-13 10:17:19', 'Lorem ipsum dolor sit'),
(7, '0000-00-00 00:00:00', 'Lorem ipsum dolor sit'),
(7, '2019-10-06 15:05:32', 'Lorem ipsum dolor sit'),
(8, '0000-00-00 00:00:00', 'Lorem ipsum dolor sit'),
(8, '2019-06-18 16:19:59', 'Lorem ipsum dolor sit'),
(9, '0000-00-00 00:00:00', 'Lorem ipsum dolor'),
(9, '2019-09-07 15:48:35', 'Lorem ipsum dolor'),
(10, '0000-00-00 00:00:00', 'Lorem ipsum dolor'),
(10, '2019-11-25 12:00:42', 'Lorem ipsum dolor'),
(11, '0000-00-00 00:00:00', 'Lorem ipsum dolor sit'),
(11, '2019-08-14 07:21:15', 'Lorem ipsum dolor sit'),
(12, '0000-00-00 00:00:00', 'Lorem'),
(12, '2019-08-19 08:49:30', 'Lorem'),
(13, '0000-00-00 00:00:00', 'Lorem ipsum dolor'),
(14, '0000-00-00 00:00:00', 'Lorem ipsum dolor sit'),
(14, '2019-12-01 09:14:32', 'Lorem ipsum dolor sit'),
(15, '0000-00-00 00:00:00', 'Lorem ipsum dolor'),
(15, '2019-11-22 05:46:47', 'Lorem ipsum dolor'),
(16, '0000-00-00 00:00:00', 'Lorem ipsum dolor'),
(16, '2019-07-06 07:47:12', 'Lorem ipsum dolor'),
(17, '0000-00-00 00:00:00', 'Lorem'),
(17, '2019-10-23 16:26:34', 'Lorem'),
(18, '0000-00-00 00:00:00', 'Lorem ipsum dolor sit'),
(19, '0000-00-00 00:00:00', 'Lorem ipsum dolor'),
(19, '2019-11-11 12:16:34', 'Lorem ipsum dolor'),
(20, '0000-00-00 00:00:00', 'Lorem'),
(20, '2019-12-21 12:48:46', 'Lorem'),
(21, '0000-00-00 00:00:00', 'Lorem ipsum'),
(21, '2019-11-06 11:26:16', 'Lorem ipsum'),
(22, '0000-00-00 00:00:00', 'Lorem ipsum dolor sit'),
(22, '2019-10-15 14:47:25', 'Lorem ipsum dolor sit'),
(23, '0000-00-00 00:00:00', 'Lorem'),
(23, '2019-07-17 06:20:43', 'Lorem'),
(24, '0000-00-00 00:00:00', 'Lorem ipsum'),
(25, '0000-00-00 00:00:00', 'Lorem ipsum dolor'),
(25, '2019-08-16 12:09:16', 'Lorem ipsum dolor'),
(26, '0000-00-00 00:00:00', 'Lorem'),
(26, '2019-06-11 12:50:59', 'Lorem'),
(27, '0000-00-00 00:00:00', 'Lorem'),
(27, '2019-10-09 14:58:46', 'Lorem'),
(28, '0000-00-00 00:00:00', 'Lorem ipsum dolor sit'),
(28, '2019-08-15 05:03:16', 'Lorem ipsum dolor sit'),
(29, '0000-00-00 00:00:00', 'Lorem'),
(29, '2019-08-01 13:17:54', 'Lorem'),
(30, '0000-00-00 00:00:00', 'Lorem'),
(30, '2019-12-13 14:13:34', 'Lorem'),
(31, '0000-00-00 00:00:00', 'Lorem ipsum dolor sit'),
(31, '2019-08-20 11:28:37', 'Lorem ipsum dolor sit'),
(32, '0000-00-00 00:00:00', 'Lorem ipsum dolor'),
(33, '0000-00-00 00:00:00', 'Lorem ipsum dolor sit'),
(33, '2019-07-11 13:27:19', 'Lorem ipsum dolor sit'),
(34, '0000-00-00 00:00:00', 'Lorem ipsum dolor'),
(34, '2019-12-15 04:55:48', 'Lorem ipsum dolor'),
(35, '0000-00-00 00:00:00', 'Lorem'),
(35, '2019-09-02 15:44:27', 'Lorem'),
(36, '0000-00-00 00:00:00', 'Lorem'),
(36, '2019-08-13 13:09:37', 'Lorem'),
(37, '0000-00-00 00:00:00', 'Lorem ipsum dolor'),
(37, '2019-12-16 15:16:14', 'Lorem ipsum dolor'),
(38, '0000-00-00 00:00:00', 'Lorem'),
(38, '2019-06-10 15:00:32', 'Lorem'),
(39, '0000-00-00 00:00:00', 'Lorem'),
(39, '2019-12-04 12:17:59', 'Lorem'),
(40, '0000-00-00 00:00:00', 'Lorem ipsum dolor'),
(40, '2019-10-07 15:49:24', 'Lorem ipsum dolor'),
(41, '0000-00-00 00:00:00', 'Lorem'),
(41, '2019-11-12 15:27:51', 'Lorem'),
(42, '0000-00-00 00:00:00', 'Lorem ipsum dolor'),
(42, '2019-09-15 13:12:19', 'Lorem ipsum dolor'),
(43, '0000-00-00 00:00:00', 'Lorem'),
(43, '2019-09-25 08:15:13', 'Lorem'),
(44, '0000-00-00 00:00:00', 'Lorem ipsum'),
(44, '2019-07-04 10:40:56', 'Lorem ipsum'),
(45, '0000-00-00 00:00:00', 'Lorem ipsum'),
(45, '2019-11-23 10:01:45', 'Lorem ipsum'),
(46, '0000-00-00 00:00:00', 'Lorem'),
(47, '0000-00-00 00:00:00', 'Lorem'),
(48, '0000-00-00 00:00:00', 'Lorem ipsum'),
(48, '2019-12-10 10:05:12', 'Lorem ipsum'),
(49, '0000-00-00 00:00:00', 'Lorem ipsum dolor'),
(49, '2019-08-11 10:17:48', 'Lorem ipsum dolor'),
(50, '0000-00-00 00:00:00', 'Lorem ipsum dolor'),
(50, '2019-10-25 15:43:44', 'Lorem ipsum dolor'),
(51, '0000-00-00 00:00:00', 'Lorem ipsum dolor sit'),
(51, '2019-11-25 12:10:12', 'Lorem ipsum dolor sit'),
(52, '0000-00-00 00:00:00', 'Lorem'),
(52, '2019-08-10 10:06:40', 'Lorem'),
(53, '0000-00-00 00:00:00', 'Lorem ipsum'),
(53, '2019-10-01 15:43:44', 'Lorem ipsum'),
(54, '0000-00-00 00:00:00', 'Lorem ipsum dolor'),
(54, '2019-10-25 08:22:30', 'Lorem ipsum dolor'),
(55, '0000-00-00 00:00:00', 'Lorem ipsum dolor'),
(55, '2019-08-12 08:29:23', 'Lorem ipsum dolor'),
(56, '0000-00-00 00:00:00', 'Lorem ipsum dolor sit'),
(56, '2019-12-13 09:29:39', 'Lorem ipsum dolor sit'),
(57, '0000-00-00 00:00:00', 'Lorem ipsum dolor sit'),
(57, '2019-07-01 14:59:54', 'Lorem ipsum dolor sit'),
(58, '0000-00-00 00:00:00', 'Lorem'),
(58, '2019-07-23 09:43:31', 'Lorem'),
(59, '0000-00-00 00:00:00', 'Lorem ipsum dolor sit'),
(59, '2019-08-24 12:03:10', 'Lorem ipsum dolor sit'),
(60, '0000-00-00 00:00:00', 'Lorem ipsum dolor sit'),
(60, '2019-06-13 09:23:55', 'Lorem ipsum dolor sit'),
(61, '0000-00-00 00:00:00', 'Lorem ipsum'),
(61, '2019-09-19 05:56:37', 'Lorem ipsum'),
(62, '0000-00-00 00:00:00', 'Lorem ipsum'),
(62, '2019-12-06 13:51:40', 'Lorem ipsum'),
(63, '0000-00-00 00:00:00', 'Lorem ipsum dolor'),
(63, '2019-11-16 08:53:23', 'Lorem ipsum dolor'),
(64, '0000-00-00 00:00:00', 'Lorem ipsum dolor sit'),
(65, '0000-00-00 00:00:00', 'Lorem'),
(65, '2019-11-08 05:59:10', 'Lorem'),
(66, '0000-00-00 00:00:00', 'Lorem ipsum dolor'),
(66, '2019-07-25 13:41:58', 'Lorem ipsum dolor'),
(67, '0000-00-00 00:00:00', 'Lorem ipsum'),
(67, '2019-11-04 10:17:56', 'Lorem ipsum'),
(68, '0000-00-00 00:00:00', 'Lorem ipsum dolor sit'),
(68, '2019-06-10 15:14:26', 'Lorem ipsum dolor sit'),
(69, '0000-00-00 00:00:00', 'Lorem'),
(69, '2019-11-11 12:12:54', 'Lorem'),
(70, '0000-00-00 00:00:00', 'Lorem ipsum'),
(70, '2019-11-22 08:59:33', 'Lorem ipsum'),
(71, '0000-00-00 00:00:00', 'Lorem ipsum'),
(71, '2019-11-24 08:51:54', 'Lorem ipsum'),
(72, '0000-00-00 00:00:00', 'Lorem ipsum dolor sit'),
(72, '2019-07-24 13:44:17', 'Lorem ipsum dolor sit'),
(73, '0000-00-00 00:00:00', 'Lorem ipsum'),
(73, '2019-07-21 16:27:32', 'Lorem ipsum'),
(74, '0000-00-00 00:00:00', 'Lorem'),
(74, '2019-09-18 14:54:33', 'Lorem'),
(75, '0000-00-00 00:00:00', 'Lorem ipsum'),
(75, '2019-09-03 11:05:46', 'Lorem ipsum'),
(76, '0000-00-00 00:00:00', 'Lorem ipsum dolor sit'),
(76, '2019-06-02 13:25:15', 'Lorem ipsum dolor sit'),
(77, '0000-00-00 00:00:00', 'Lorem ipsum'),
(77, '2019-11-13 04:47:59', 'Lorem ipsum'),
(78, '0000-00-00 00:00:00', 'Lorem ipsum'),
(78, '2019-06-20 12:21:21', 'Lorem ipsum'),
(79, '0000-00-00 00:00:00', 'Lorem'),
(79, '2019-10-22 08:17:51', 'Lorem'),
(80, '0000-00-00 00:00:00', 'Lorem ipsum dolor'),
(80, '2019-11-10 09:26:35', 'Lorem ipsum dolor'),
(81, '0000-00-00 00:00:00', 'Lorem ipsum dolor'),
(81, '2019-12-13 08:44:24', 'Lorem ipsum dolor'),
(82, '0000-00-00 00:00:00', 'Lorem ipsum'),
(82, '2019-10-12 06:00:39', 'Lorem ipsum'),
(83, '0000-00-00 00:00:00', 'Lorem ipsum dolor sit'),
(83, '2019-09-14 07:00:33', 'Lorem ipsum dolor sit'),
(84, '0000-00-00 00:00:00', 'Lorem ipsum'),
(84, '2019-09-25 12:59:21', 'Lorem ipsum'),
(85, '0000-00-00 00:00:00', 'Lorem'),
(85, '2019-06-11 06:45:45', 'Lorem'),
(86, '0000-00-00 00:00:00', 'Lorem ipsum dolor sit'),
(86, '2019-06-01 09:23:33', 'Lorem ipsum dolor sit'),
(87, '0000-00-00 00:00:00', 'Lorem ipsum'),
(87, '2019-10-16 07:10:27', 'Lorem ipsum'),
(88, '0000-00-00 00:00:00', 'Lorem ipsum dolor'),
(89, '0000-00-00 00:00:00', 'Lorem ipsum dolor'),
(89, '2019-09-15 10:11:52', 'Lorem ipsum dolor'),
(90, '0000-00-00 00:00:00', 'Lorem ipsum dolor sit'),
(90, '2019-11-21 13:47:52', 'Lorem ipsum dolor sit'),
(91, '0000-00-00 00:00:00', 'Lorem ipsum dolor sit'),
(91, '2019-11-19 16:22:38', 'Lorem ipsum dolor sit'),
(92, '0000-00-00 00:00:00', 'Lorem ipsum dolor'),
(92, '2019-11-13 09:27:52', 'Lorem ipsum dolor'),
(93, '0000-00-00 00:00:00', 'Lorem ipsum dolor sit'),
(93, '2019-12-12 07:23:28', 'Lorem ipsum dolor sit'),
(94, '0000-00-00 00:00:00', 'Lorem ipsum dolor sit'),
(94, '2019-09-12 10:06:37', 'Lorem ipsum dolor sit'),
(95, '0000-00-00 00:00:00', 'Lorem ipsum dolor sit'),
(95, '2019-09-02 11:28:59', 'Lorem ipsum dolor sit'),
(96, '0000-00-00 00:00:00', 'Lorem ipsum dolor'),
(96, '2019-07-24 05:57:39', 'Lorem ipsum dolor'),
(97, '0000-00-00 00:00:00', 'Lorem ipsum dolor'),
(97, '2019-08-06 06:11:48', 'Lorem ipsum dolor'),
(98, '0000-00-00 00:00:00', 'Lorem ipsum'),
(98, '2019-10-15 12:17:38', 'Lorem ipsum'),
(99, '0000-00-00 00:00:00', 'Lorem ipsum dolor'),
(99, '2019-08-16 06:43:33', 'Lorem ipsum dolor'),
(100, '0000-00-00 00:00:00', 'Lorem ipsum dolor sit'),
(100, '2019-11-18 15:17:20', 'Lorem ipsum dolor sit');

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
(1, 'rpi_number', 'sensors'),
(2, 'VXB06FRL0SD', 'Lorem ipsum dolor sit'),
(3, 'FRQ98PKV8FK', 'Lorem ipsum'),
(4, 'CEM81UPH9WV', 'Lorem'),
(5, 'ALQ60QHW7ON', 'Lorem'),
(6, 'VDH70JBX0BX', 'Lorem ipsum dolor sit'),
(7, 'JRY74IQL2HP', 'Lorem ipsum dolor sit'),
(8, 'HEB56IXS1PZ', 'Lorem ipsum dolor sit'),
(9, 'KYB90JXJ0XY', 'Lorem ipsum dolor'),
(10, 'NLX10ZCY5XQ', 'Lorem ipsum dolor'),
(11, 'UYA98EAS7PF', 'Lorem ipsum dolor sit'),
(12, 'CLN80IRB9LO', 'Lorem'),
(13, 'UVF68FWI1HQ', 'Lorem ipsum dolor'),
(14, 'XNZ56CDF9AU', 'Lorem ipsum dolor sit'),
(15, 'OGA10MBS0PL', 'Lorem ipsum dolor'),
(16, 'WUK18PIQ9NK', 'Lorem ipsum dolor'),
(17, 'HTK67VFO0TM', 'Lorem'),
(18, 'ELJ55WPT1KB', 'Lorem ipsum dolor sit'),
(19, 'HVZ63VBV1UH', 'Lorem ipsum dolor'),
(20, 'GQR94WHD8CG', 'Lorem'),
(21, 'STF41XAD1UZ', 'Lorem ipsum'),
(22, 'GPD17ZBT6JD', 'Lorem ipsum dolor sit'),
(23, 'XNR68RPO6VJ', 'Lorem'),
(24, 'BKP45QGE6VE', 'Lorem ipsum'),
(25, 'TIF46RPV9WO', 'Lorem ipsum dolor'),
(26, 'CMB00WAW3WZ', 'Lorem'),
(27, 'AXQ27CZC7AT', 'Lorem'),
(28, 'DDD21SPC8OQ', 'Lorem ipsum dolor sit'),
(29, 'CQX73BLW9ZW', 'Lorem'),
(30, 'JKO46GZS8RG', 'Lorem'),
(31, 'BIK51XSJ7NH', 'Lorem ipsum dolor sit'),
(32, 'GIR83HXO3UV', 'Lorem ipsum dolor'),
(33, 'FKD90QGS6KN', 'Lorem ipsum dolor sit'),
(34, 'IFR94MZZ3ER', 'Lorem ipsum dolor'),
(35, 'LHE41DKK3QR', 'Lorem'),
(36, 'PUJ15EPZ0MA', 'Lorem'),
(37, 'NUF94GMR8IX', 'Lorem ipsum dolor'),
(38, 'OCF96SSH4MG', 'Lorem'),
(39, 'ACF34XSE7YT', 'Lorem'),
(40, 'PAO64PQL6CO', 'Lorem ipsum dolor'),
(41, 'XMS83UEA0OD', 'Lorem'),
(42, 'BNY39UJJ5UU', 'Lorem ipsum dolor'),
(43, 'LIQ42PJX4XS', 'Lorem'),
(44, 'XCZ34YOO5KD', 'Lorem ipsum'),
(45, 'PEJ99LEP3LN', 'Lorem ipsum'),
(46, 'WPW49DHF5IK', 'Lorem'),
(47, 'KLQ92LDD4JZ', 'Lorem'),
(48, 'CGI02XRQ5KO', 'Lorem ipsum'),
(49, 'PVE47MPI3PH', 'Lorem ipsum dolor'),
(50, 'FQL50QAV8UG', 'Lorem ipsum dolor'),
(51, 'EUK29CII2RU', 'Lorem ipsum dolor sit'),
(52, 'DXF74CWE1BD', 'Lorem'),
(53, 'MES66KSQ5NN', 'Lorem ipsum'),
(54, 'LVD43NPJ6VH', 'Lorem ipsum dolor'),
(55, 'IPS19BXB7CE', 'Lorem ipsum dolor'),
(56, 'TJI88OMH0DZ', 'Lorem ipsum dolor sit'),
(57, 'FZJ86LLR6EL', 'Lorem ipsum dolor sit'),
(58, 'UZI45WFN3TS', 'Lorem'),
(59, 'SOV09MZJ7IG', 'Lorem ipsum dolor sit'),
(60, 'JOH60RGY8AS', 'Lorem ipsum dolor sit'),
(61, 'LHY17BRP9IA', 'Lorem ipsum'),
(62, 'NZN76GGG7QO', 'Lorem ipsum'),
(63, 'IOR86AAI8IQ', 'Lorem ipsum dolor'),
(64, 'RKC77QOJ3XO', 'Lorem ipsum dolor sit'),
(65, 'TAD49CIO0SC', 'Lorem'),
(66, 'ZCI57ZQT4RT', 'Lorem ipsum dolor'),
(67, 'JEZ43MYN7FY', 'Lorem ipsum'),
(68, 'INN95ZTB9YE', 'Lorem ipsum dolor sit'),
(69, 'CFM88HEQ9YT', 'Lorem'),
(70, 'QNS59KNI1GB', 'Lorem ipsum'),
(71, 'OVY19IXX8BD', 'Lorem ipsum'),
(72, 'XJU40XTN2YP', 'Lorem ipsum dolor sit'),
(73, 'RFO65AOE3LU', 'Lorem ipsum'),
(74, 'ZPN53NKV2HN', 'Lorem'),
(75, 'SGF09FAL9TA', 'Lorem ipsum'),
(76, 'JOG16AWQ3EP', 'Lorem ipsum dolor sit'),
(77, 'HYH96RUN1VK', 'Lorem ipsum'),
(78, 'BJS38WFB0GW', 'Lorem ipsum'),
(79, 'GGB92UWY0JY', 'Lorem'),
(80, 'HNJ67OLH4OU', 'Lorem ipsum dolor'),
(81, 'JUK91NKJ1ZK', 'Lorem ipsum dolor'),
(82, 'NTX69RKL4UD', 'Lorem ipsum'),
(83, 'JOL39GDQ9WU', 'Lorem ipsum dolor sit'),
(84, 'WCF77PVG4WE', 'Lorem ipsum'),
(85, 'SMW46GVY4UW', 'Lorem'),
(86, 'CCL34KYW4JB', 'Lorem ipsum dolor sit'),
(87, 'MUZ04GVR0KY', 'Lorem ipsum'),
(88, 'BCO31AUQ9XF', 'Lorem ipsum dolor'),
(89, 'JHE49KJI6NA', 'Lorem ipsum dolor'),
(90, 'THE16BYV7YF', 'Lorem ipsum dolor sit'),
(91, 'TAJ22KTF1DD', 'Lorem ipsum dolor sit'),
(92, 'SBQ05LEM4NG', 'Lorem ipsum dolor'),
(93, 'SVS81DOE5BH', 'Lorem ipsum dolor sit'),
(94, 'QFH46RED2KC', 'Lorem ipsum dolor sit'),
(95, 'UTW13PRR3DI', 'Lorem ipsum dolor sit'),
(96, 'XYJ35CIY3HE', 'Lorem ipsum dolor'),
(97, 'LTR06DBL2ZB', 'Lorem ipsum dolor'),
(98, 'BRF24WRA0HN', 'Lorem ipsum'),
(99, 'AZZ44UXX1GH', 'Lorem ipsum dolor'),
(100, 'PLI99NID5ST', 'Lorem ipsum dolor sit');

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

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`uid`, `email`, `password`, `registered_at`, `name`, `password_used`) VALUES
(1, 'Cum.sociis.natoque@utmi.edu', 'Curabitur', '2019-09-21 12:11:14', 'Kalia Pena', 1),
(2, 'Sed.nulla.ante@afelis.co.uk', 'Donec', '2019-09-02 10:49:26', 'Jenette Fuentes', 1),
(3, 'Sed@eratEtiam.edu', 'interdum', '2019-10-12 15:03:46', 'Steel Reed', 0),
(4, 'nunc.ullamcorper@quispede.net', 'ante', '2019-09-20 13:50:39', 'Bell Camacho', 1),
(5, 'odio.Aliquam.vulputate@dui.com', 'nisi', '2019-09-20 09:57:40', 'Guy Hall', 1),
(6, 'aliquet.odio@Etiamligula.co.uk', 'elementum', '2019-09-13 10:17:19', 'Tasha Sweeney', 0),
(7, 'mauris.rhoncus.id@Donecfelis.co.uk', 'interdum', '2019-10-06 15:05:32', 'Jeremy Baker', 1),
(8, 'mus.Proin@Namnulla.co.uk', 'consectetuer', '2019-06-18 16:19:59', 'Tasha Bright', 0),
(9, 'lectus@Donecelementumlorem.com', 'ullamcorper.', '2019-09-07 15:48:35', 'Yetta Ingram', 0),
(10, 'velit.Aliquam@egetmassa.edu', 'vel', '2019-11-25 12:00:42', 'Emmanuel Estes', 0),
(11, 'velit.Pellentesque@vehicula.co.uk', 'ligula.', '2019-08-14 07:21:15', 'Lydia Branch', 0),
(12, 'dolor.quam@dignissimMaecenasornare.com', 'auctor,', '2019-08-19 08:49:30', 'Louis Hooper', 1),
(13, 'dui.in@Integer.com', 'ultricies', '0000-00-00 00:00:00', 'Barclay Rojas', 0),
(14, 'adipiscing.elit@Curabiturvellectus.co.uk', 'Mauris', '2019-12-01 09:14:32', 'Quincy Griffith', 1),
(15, 'elementum.purus@ultrices.com', 'mauris', '2019-11-22 05:46:47', 'Leroy Knight', 0),
(16, 'Sed.eu@enim.net', 'Phasellus', '2019-07-06 07:47:12', 'Herman Mcdonald', 1),
(17, 'ridiculus@magnaPhasellus.edu', 'nisi.', '2019-10-23 16:26:34', 'Kirestin Guerra', 0),
(18, 'Sed.eu.nibh@volutpatnunc.co.uk', 'massa', '0000-00-00 00:00:00', 'Cullen Wynn', 0),
(19, 'sit.amet.ultricies@blandit.ca', 'velit', '2019-11-11 12:16:34', 'Derek Allison', 1),
(20, 'cursus@ultricesa.co.uk', 'euismod', '2019-12-21 12:48:46', 'Lois David', 0),
(21, 'per@et.org', 'pellentesque', '2019-11-06 11:26:16', 'Colby Oconnor', 1),
(22, 'eu.elit@ornare.edu', 'nulla', '2019-10-15 14:47:25', 'Jaime Madden', 0),
(23, 'nisi@magna.edu', 'sociis', '2019-07-17 06:20:43', 'Catherine Morrison', 0),
(24, 'eleifend.egestas.Sed@dolornonummyac.co.uk', 'egestas.', '0000-00-00 00:00:00', 'Vanna Daniel', 1),
(25, 'leo@Duis.ca', 'dictum', '2019-08-16 12:09:16', 'Jillian Green', 0),
(26, 'malesuada.ut@elementum.org', 'felis', '2019-06-11 12:50:59', 'Laurel Gould', 0),
(27, 'erat@neque.co.uk', 'risus.', '2019-10-09 14:58:46', 'Tobias Russo', 0),
(28, 'lorem@Crasvulputatevelit.org', 'odio', '2019-08-15 05:03:16', 'Russell Nielsen', 0),
(29, 'commodo@eget.co.uk', 'tellus', '2019-08-01 13:17:54', 'Sean Lee', 0),
(30, 'nostra@tristiqueneque.net', 'erat,', '2019-12-13 14:13:34', 'Jade Moran', 0),
(31, 'lorem.luctus@tinciduntadipiscing.com', 'Proin', '2019-08-20 11:28:37', 'Alma Mercado', 0),
(32, 'cursus.luctus@torquentperconubia.edu', 'erat', '0000-00-00 00:00:00', 'Rebecca Michael', 1),
(33, 'massa.rutrum.magna@arcuvelquam.edu', 'vestibulum', '2019-07-11 13:27:19', 'Jarrod Vinson', 0),
(34, 'ipsum.sodales@Quisqueornaretortor.co.uk', 'libero', '2019-12-15 04:55:48', 'Mark Hart', 0),
(35, 'pellentesque.tellus.sem@ligulaNullam.edu', 'congue.', '2019-09-02 15:44:27', 'Sheila Mckay', 1),
(36, 'nibh@uteratSed.co.uk', 'rutrum', '2019-08-13 13:09:37', 'Fulton Holder', 1),
(37, 'at.iaculis@Etiamimperdiet.com', 'et', '2019-12-16 15:16:14', 'Maite Contreras', 1),
(38, 'sollicitudin.commodo@arcuSed.edu', 'In', '2019-06-10 15:00:32', 'Jeanette Noel', 1),
(39, 'hendrerit.neque.In@tinciduntorciquis.com', 'urna.', '2019-12-04 12:17:59', 'Sheila Clark', 0),
(40, 'Fusce@Integervitae.ca', 'nec', '2019-10-07 15:49:24', 'Quamar Stein', 0),
(41, 'augue@feugiatplacerat.ca', 'aliquet', '2019-11-12 15:27:51', 'Jolene Franklin', 1),
(42, 'sed@ategestas.net', 'ornare', '2019-09-15 13:12:19', 'Colin Wise', 1),
(43, 'Proin.vel.arcu@magnaDuisdignissim.net', 'dolor.', '2019-09-25 08:15:13', 'Philip Hunt', 0),
(44, 'mauris.id.sapien@ornarefacilisiseget.net', 'In', '2019-07-04 10:40:56', 'Dante Sweeney', 1),
(45, 'ultrices.sit@tincidunt.net', 'odio.', '2019-11-23 10:01:45', 'Joan Pace', 0),
(46, 'justo@magna.ca', 'sociis', '0000-00-00 00:00:00', 'Vincent Hogan', 0),
(47, 'lorem.vitae.odio@elitpretium.org', 'lobortis', '0000-00-00 00:00:00', 'Chanda Gross', 0),
(48, 'massa.non.ante@arcuAliquam.edu', 'Pellentesque', '2019-12-10 10:05:12', 'Adrienne Cummings', 1),
(49, 'urna.convallis@Nulla.co.uk', 'Praesent', '2019-08-11 10:17:48', 'Leslie Reilly', 1),
(50, 'lorem.vitae.odio@enimCurabiturmassa.com', 'Cras', '2019-10-25 15:43:44', 'Dana Mcdonald', 0),
(51, 'odio.tristique@vehiculaPellentesque.edu', 'a', '2019-11-25 12:10:12', 'Lester Bowman', 0),
(52, 'amet.ante.Vivamus@Quisqueporttitor.net', 'lorem', '2019-08-10 10:06:40', 'Gemma Moore', 1),
(53, 'augue.ut.lacus@ipsumdolor.ca', 'vestibulum.', '2019-10-01 15:43:44', 'Benedict Morton', 0),
(54, 'nascetur.ridiculus@Donecegestas.org', 'aliquet', '2019-10-25 08:22:30', 'Violet Frederick', 1),
(55, 'Donec@egetvenenatis.co.uk', 'sed', '2019-08-12 08:29:23', 'Flavia Larsen', 1),
(56, 'vel.mauris@auctorvitaealiquet.co.uk', 'Donec', '2019-12-13 09:29:39', 'Callum Castillo', 1),
(57, 'sit@euplacerateget.com', 'Nunc', '2019-07-01 14:59:54', 'Selma Glover', 0),
(58, 'pede.Cum@magnaSuspendissetristique.edu', 'ullamcorper', '2019-07-23 09:43:31', 'Fay Haynes', 1),
(59, 'imperdiet.ornare.In@aliquameu.ca', 'In', '2019-08-24 12:03:10', 'Medge Beck', 1),
(60, 'a@liberoProinmi.net', 'elit', '2019-06-13 09:23:55', 'Jeremy Cobb', 0),
(61, 'ligula.Donec.luctus@purusinmolestie.co.uk', 'neque', '2019-09-19 05:56:37', 'Calvin Long', 0),
(62, 'dapibus@Inmi.org', 'ut,', '2019-12-06 13:51:40', 'Blaine Garrison', 0),
(63, 'Vestibulum.ante.ipsum@Suspendisse.ca', 'tincidunt', '2019-11-16 08:53:23', 'Lillith Mccarthy', 1),
(64, 'ac@anteNunc.co.uk', 'iaculis', '0000-00-00 00:00:00', 'Eaton Curry', 1),
(65, 'diam.lorem.auctor@Etiamvestibulummassa.co.uk', 'massa', '2019-11-08 05:59:10', 'Philip Burgess', 0),
(66, 'ac.tellus@nonsapienmolestie.ca', 'id', '2019-07-25 13:41:58', 'Harrison Simon', 1),
(67, 'elementum.lorem.ut@etmalesuada.org', 'venenatis', '2019-11-04 10:17:56', 'Camden James', 1),
(68, 'enim.condimentum@tempusnonlacinia.com', 'metus', '2019-06-10 15:14:26', 'Whoopi Byrd', 1),
(69, 'pulvinar.arcu.et@et.co.uk', 'metus.', '2019-11-11 12:12:54', 'Herman Garcia', 1),
(70, 'neque.sed.sem@vitae.ca', 'neque', '2019-11-22 08:59:33', 'Bethany Olsen', 0),
(71, 'vulputate@euismodenim.org', 'ac', '2019-11-24 08:51:54', 'Lynn Small', 1),
(72, 'a.aliquet@mollis.org', 'Cras', '2019-07-24 13:44:17', 'Octavius Joseph', 1),
(73, 'iaculis@nuncsed.ca', 'sit', '2019-07-21 16:27:32', 'Chaim Bernard', 0),
(74, 'morbi.tristique@magnaPraesent.net', 'Cras', '2019-09-18 14:54:33', 'Demetria Whitaker', 1),
(75, 'eget.odio.Aliquam@duinec.net', 'dictum', '2019-09-03 11:05:46', 'Ivy Bowers', 1),
(76, 'lacinia.vitae@velit.org', 'Sed', '2019-06-02 13:25:15', 'Kitra Martinez', 1),
(77, 'laoreet@erat.co.uk', 'elementum', '2019-11-13 04:47:59', 'Gisela Johnston', 1),
(78, 'penatibus@Mauris.ca', 'erat', '2019-06-20 12:21:21', 'Indigo Torres', 0),
(79, 'lacinia@sedfacilisis.com', 'arcu', '2019-10-22 08:17:51', 'Herman Taylor', 1),
(80, 'justo@adlitora.ca', 'ornare.', '2019-11-10 09:26:35', 'Martha Roman', 0),
(81, 'Sed@lacusNullatincidunt.net', 'euismod', '2019-12-13 08:44:24', 'Felicia Wall', 0),
(82, 'luctus@magna.net', 'amet', '2019-10-12 06:00:39', 'Macon Sandoval', 1),
(83, 'pede.blandit.congue@Crassedleo.edu', 'gravida', '2019-09-14 07:00:33', 'Veda Jordan', 0),
(84, 'Aliquam.adipiscing.lobortis@famesac.edu', 'In', '2019-09-25 12:59:21', 'Aidan Mercer', 1),
(85, 'ut.aliquam@faucibus.net', 'interdum', '2019-06-11 06:45:45', 'Ingrid Collier', 0),
(86, 'Quisque.porttitor.eros@tinciduntvehicularisus.co.uk', 'consectetuer', '2019-06-01 09:23:33', 'Ivan Fitzpatrick', 0),
(87, 'vehicula.risus.Nulla@primis.edu', 'enim.', '2019-10-16 07:10:27', 'Jocelyn Walter', 1),
(88, 'eu@idmagna.net', 'sodales.', '0000-00-00 00:00:00', 'Kylan Holden', 1),
(89, 'pretium.aliquet.metus@InfaucibusMorbi.edu', 'feugiat', '2019-09-15 10:11:52', 'Nelle Townsend', 1),
(90, 'elit@sapiencursus.net', 'dis', '2019-11-21 13:47:52', 'Ariel Goff', 1),
(91, 'venenatis.vel.faucibus@lorem.net', 'mi.', '2019-11-19 16:22:38', 'Maxwell Weiss', 1),
(92, 'aliquam.eros@temporlorem.ca', 'ac', '2019-11-13 09:27:52', 'Jocelyn Good', 0),
(93, 'a.arcu@habitantmorbitristique.com', 'vel,', '2019-12-12 07:23:28', 'Kermit Hester', 0),
(94, 'et.magnis@egetmagna.net', 'rhoncus', '2019-09-12 10:06:37', 'Kylie Wilkerson', 1),
(95, 'Nulla.dignissim.Maecenas@tellusjusto.edu', 'neque', '2019-09-02 11:28:59', 'Geoffrey Guthrie', 1),
(96, 'lorem.eu@Phaselluselitpede.com', 'ridiculus', '2019-07-24 05:57:39', 'Neil Valentine', 1),
(97, 'libero.Integer@Vivamussit.com', 'malesuada', '2019-08-06 06:11:48', 'Libby Hogan', 0),
(98, 'luctus.vulputate.nisi@elitpellentesquea.net', 'nec', '2019-10-15 12:17:38', 'Claudia Calderon', 1),
(99, 'lacus.Aliquam.rutrum@sagittisplaceratCras.com', 'lorem', '2019-08-16 06:43:33', 'Thane Craft', 0),
(100, 'Phasellus@nibh.net', 'non,', '2019-11-18 15:17:20', 'Callum Butler', 1),
(101, 'email', 'password', '0000-00-00 00:00:00', 'name', 0);

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
-- Dumping data for table `user_crop_product_mapping`
--

INSERT INTO `user_crop_product_mapping` (`uid`, `cid`, `pid`) VALUES
(0, 0, 0),
(1, 29, 24),
(2, 32, 16),
(3, 15, 20),
(4, 8, 45),
(4, 40, 9),
(5, 9, 37),
(5, 21, 17),
(5, 41, 15),
(5, 46, 28),
(6, 36, 39),
(6, 40, 50),
(7, 16, 27),
(7, 45, 40),
(8, 2, 20),
(8, 49, 50),
(9, 33, 22),
(9, 35, 24),
(10, 2, 38),
(10, 11, 15),
(10, 22, 33),
(10, 33, 24),
(10, 49, 23),
(11, 48, 48),
(12, 12, 29),
(13, 11, 43),
(13, 38, 48),
(14, 6, 37),
(15, 18, 48),
(15, 38, 22),
(16, 14, 20),
(16, 23, 33),
(16, 28, 50),
(17, 21, 17),
(18, 17, 17),
(20, 16, 4),
(20, 20, 15),
(20, 21, 22),
(21, 10, 21),
(21, 23, 22),
(22, 7, 32),
(22, 10, 14),
(23, 23, 37),
(23, 38, 38),
(24, 24, 22),
(25, 13, 30),
(25, 37, 28),
(26, 11, 12),
(26, 28, 32),
(27, 25, 8),
(27, 38, 37),
(27, 50, 35),
(28, 31, 50),
(28, 37, 42),
(29, 7, 36),
(30, 11, 46),
(30, 44, 36),
(31, 19, 39),
(32, 1, 6),
(32, 2, 20),
(32, 9, 19),
(33, 4, 22),
(33, 21, 26),
(33, 33, 9),
(34, 6, 7),
(35, 38, 17),
(35, 46, 27),
(36, 15, 4),
(36, 16, 15),
(36, 19, 28),
(36, 38, 33),
(37, 20, 43),
(37, 23, 10),
(37, 42, 3),
(38, 5, 2),
(38, 10, 11),
(38, 29, 39),
(38, 42, 23),
(40, 3, 50),
(40, 18, 46),
(40, 22, 29),
(41, 3, 21),
(41, 33, 26),
(42, 11, 41),
(42, 32, 16),
(42, 50, 34),
(44, 44, 49),
(45, 2, 7),
(45, 28, 1),
(46, 16, 33),
(46, 38, 36),
(46, 47, 28),
(47, 22, 30),
(47, 30, 36),
(48, 29, 3),
(48, 46, 30),
(48, 48, 24),
(48, 49, 26),
(50, 7, 46),
(50, 15, 27),
(50, 37, 29);

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
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

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
