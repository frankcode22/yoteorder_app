-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 11, 2022 at 01:30 AM
-- Server version: 5.7.39
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `patamtaa_patamtaanipm`
--

-- --------------------------------------------------------

--
-- Table structure for table `Bookings`
--

CREATE TABLE `Bookings` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `start` datetime DEFAULT NULL,
  `end` datetime DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `CustomerId` int(11) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Businesses`
--

CREATE TABLE `Businesses` (
  `id` int(11) NOT NULL,
  `business_name` varchar(255) NOT NULL,
  `business_type` varchar(255) NOT NULL,
  `industry` varchar(255) NOT NULL,
  `contacts` varchar(255) NOT NULL,
  `location` varchar(255) DEFAULT NULL,
  `address_line_1` varchar(255) DEFAULT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `longitude` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `profile_photo` varchar(255) DEFAULT NULL,
  `business_description` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `cloudinary_id` varchar(255) DEFAULT NULL,
  `cloudinary_url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Businesses`
--

INSERT INTO `Businesses` (`id`, `business_name`, `business_type`, `industry`, `contacts`, `location`, `address_line_1`, `latitude`, `longitude`, `city`, `state`, `country`, `profile_photo`, `business_description`, `status`, `cloudinary_id`, `cloudinary_url`, `createdAt`, `updatedAt`, `UserId`) VALUES
(24, 'Jemki Constructions', 'Contruction', 'Contruction', '0714639773', 'Utawala Astrol RG Cebtre', '', '', '', 'Nairobi', '', '', 'img-1665156014807.jpg', 'Jemki Constructions based on utawala Astrol', NULL, '24/iovh0lundbinjcufgpas', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1665156015/24/iovh0lundbinjcufgpas.webp', '2022-09-12 00:40:51', '2022-10-07 15:20:15', 234),
(54, 'PataMtaani Mama Mboga', '', '', '0721546432', '', '', '-1.286554', '36.9463022', '', '', '', 'img-1663087142618.jfif', 'Wamtaa Shop', NULL, '54/abqv6ihack9vwtvrpn0s', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663087142/54/abqv6ihack9vwtvrpn0s.jpg', '2022-09-13 16:35:37', '2022-09-30 21:49:37', 564),
(64, 'Jemki Contructions', 'Contruction', 'Contruction', '0714639773', '', '', '-1.289801', '36.948437', 'Nairobi', '', '', 'img-1663101656128.jpg', 'Jemki Contructions', NULL, '64/bwqeeeer5t2xwnuaz8ka', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663101657/64/bwqeeeer5t2xwnuaz8ka.jpg', '2022-09-13 16:52:27', '2022-09-13 20:40:58', 574),
(74, 'Kennedy Spaires Centre', 'Automotive', 'Automotive', '0714639773', '', '', '-1.2865641', '36.9463346', 'Nairobi', '', '', 'img-1663462528833.jpg', 'Kennedy Spaires Centre', NULL, '74/btggut5h0vp0wfitdnld', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663462529/74/btggut5h0vp0wfitdnld.jpg', '2022-09-18 00:54:54', '2022-09-18 00:55:29', 704),
(84, 'Elizah Shop ', '', '', '0714639773', '', '', '-1.3158796', '36.9243618', 'Nairobi', '', '', 'img-1663570284753.jpeg', 'Located near Embakasi police station', NULL, '84/era8dl4s42q37ncxjppl', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663570284/84/era8dl4s42q37ncxjppl.jpg', '2022-09-19 06:50:42', '2022-09-19 06:51:25', 734),
(94, 'Upendo wrap', '', '', '0771 663552', 'Tajmall Round About, Embakasi, Nairobi, Kenya', '', '-1.3238308', '36.8998473', 'Tajmall Round About', 'Tajmall Round About', '', 'img-1663984733703.jpg', 'Deals with comfortable baby carrier ', NULL, '94/eycypbkdsmogpj3gyocf', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663984736/94/eycypbkdsmogpj3gyocf.jpg', '2022-09-19 09:52:58', '2022-09-24 01:58:56', 754),
(104, 'Upendo wrap', 'Clothing', 'Clothing', '0771 663552', 'Tasia Embakasi, Nairobi, Kenya', '', '-1.3065809', '36.8936292', 'Nairobi', 'Nairobi', '', NULL, 'Deals with comfortable baby carrier ', NULL, NULL, NULL, '2022-09-19 09:53:08', '2022-09-24 02:03:53', 754),
(114, 'Upendo wrap', '', '', '0771 663552', 'Pipeline, Outer Ring Road, Nairobi, Kenya', '', '-1.3202463', '36.8980094', 'Outer Ring Rd', 'Outer Ring Rd', '', 'img-1663979889987.jpg', 'Deals with comfortable baby carrier ', NULL, '114/by05g66tsocc5yxayl3x', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663979891/114/by05g66tsocc5yxayl3x.jpg', '2022-09-19 09:53:19', '2022-09-24 02:08:29', 754),
(124, 'Kainuke shop and Veve Baze', '', '', '0707469808', '', '', '-1.2894037', '36.9481375', 'Nairobi', '', '', 'img-1663615469844.jpg', 'Deals will all sorts of household products and miraa', NULL, '124/jqu5xs8ascktjbxpqr6t', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663615475/124/jqu5xs8ascktjbxpqr6t.jpg', '2022-09-19 19:22:29', '2022-09-19 19:24:36', 794),
(134, 'Munya Gas Shop', 'Domestic-Products', 'Domestic-Products', '0714639773', 'Shooters Inn, Nairobi City, Kenya', '', '-1.2875', '36.9519444', 'PX72+2Q4', ' Nairobi City', '', 'img-1663952691562.jpg', 'Munya Shop', NULL, '134/eyqgua5rttayjllzkzge', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663952694/134/eyqgua5rttayjllzkzge.jpg', '2022-09-21 00:59:11', '2022-09-23 17:04:55', 834),
(144, 'Wendy Fish Point', '', '', '0718235265', 'Kayole, Nairobi, Kenya', '', '-1.2773942', '36.9157976', 'Kayole', 'Kayole', '', 'img-1663889257411.jpg', 'Wendy Fish Point', NULL, '144/lzxcke3wwhhafrqcbbpf', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663889266/144/lzxcke3wwhhafrqcbbpf.jpg', '2022-09-21 01:33:04', '2022-09-22 23:27:46', 844),
(174, 'Back Yard(Kwa chege)', 'Domestic-Products', 'Domestic-Products', '0720093222', '', '', '-1.2864565', '36.9463051', 'A', 'Utawala Astrol', '', 'img-1663834004922.jpg', 'Back Yard(Kwa chege)-Pata pote', NULL, '174/kfe1mtuhewmuog2dqaga', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663834024/174/kfe1mtuhewmuog2dqaga.jpg', '2022-09-22 08:02:21', '2022-09-22 08:07:04', 904),
(184, 'Hiltex Investment ', '', '', '0725743573', '', '', '-1.2859956', '36.9456969', 'Nairobi', '', '', NULL, 'Gas refill ', NULL, NULL, NULL, '2022-09-22 08:58:43', '2022-09-22 08:58:43', 914),
(194, 'Mama Johnston Shop', '', '', '0798075283', 'Malili,Konza, Konza, Kenyaa', '', '-1.7338058', '37.1955412', ' Malili', ' Konza', '', 'img-1663925721529.jpg', 'Mama Johnston Shop', NULL, '194/xqlnzj4rwxtrrqkhcgc9', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663925740/194/xqlnzj4rwxtrrqkhcgc9.jpg', '2022-09-23 09:33:59', '2022-09-23 09:35:40', 924),
(204, 'Krackers food court', '', '', '0717804795', '', '', '-1.289501', '36.9480136', 'Nairobi', '', '', 'img-1663929804010.jpg', 'Located at RG Centre apartments.We have all kinds of foods.', NULL, '204/ilpl15ypvx0ju2phdoqm', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663929816/204/ilpl15ypvx0ju2phdoqm.jpg', '2022-09-23 10:18:38', '2022-09-23 10:43:37', 934),
(214, 'Mobile gas supply ', '', '', '0115884170', '', '', '-1.2865108', '36.9463537', '', '', '', 'img-1664106889848.jpg', 'We supply and refill gas in different brands, from K-gas, Total gas, Progas, Hashi gas, EDA gas, Oilibya Mpishi gas etc ', NULL, '214/uhwyksqt1j9cuvaizdtt', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664106890/214/uhwyksqt1j9cuvaizdtt.jpg', '2022-09-23 16:43:50', '2022-09-27 00:39:33', 944),
(224, 'Serenity investment', 'Domestic-Products', 'Domestic-Products', '0724512561 ', '', '', '-1.32916', '37.05366', 'Nairobi', '', '', 'img-1663954297941.jpg', 'Beauty and cosmetics', NULL, '224/xsjnrssh4yoodfsnlnbj', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663954302/224/xsjnrssh4yoodfsnlnbj.jpg', '2022-09-23 17:24:04', '2022-09-23 17:31:42', 954),
(234, 'Johnstone Eats', '', '', '7', '', '', '-1.2894153', '36.9481397', '', '', '', 'img-1664099525353.jpeg', 'Anything to deal with take away ', NULL, '234/i4szv9znspvueacaci03', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664099525/234/i4szv9znspvueacaci03.jpg', '2022-09-25 09:51:06', '2022-09-25 11:03:46', 994),
(244, 'Castella Wines and Spirits', '', '', '7', '', '', '-1.2895472', '36.9480989', '', '', '', 'img-1664376026062.jpg', 'Located on RG Centre Astrol.', NULL, '244/x0pq8yfl6g4nqfr7dlmr', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664376029/244/x0pq8yfl6g4nqfr7dlmr.jpg', '2022-09-28 14:34:43', '2022-09-28 15:40:23', 1044),
(254, 'Waterpro', '', '', '6', 'Roysambu, Nairobi, Kenya', '', '-1.2184586', '36.88690640000001', 'Roysambu', ' Nairobi', '', NULL, '', NULL, NULL, NULL, '2022-09-29 13:28:36', '2022-09-29 13:28:36', 1074),
(264, 'AquaWety ', '', '', '7', '', '', '-1.2893043', '36.9477156', 'Nairobi', '', '', NULL, 'We are pure purified drinking water', NULL, NULL, NULL, '2022-09-29 15:17:43', '2022-09-29 15:17:43', 1094),
(274, 'Mutton butchery ', 'Domestic-Products', 'Domestic-Products', '0', 'Mutton butchery Tinganga mai-ini', '', NULL, NULL, 'Kiambu', '', '', 'img-1664470948368.jpg', 'Mbuzi\n choma fry \n choma sufuria \nMatumbo ugali\nKichwa\n', NULL, '274/l3rrtlslrq0nwm8xfyo4', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664470948/274/l3rrtlslrq0nwm8xfyo4.jpg', '2022-09-29 16:52:35', '2022-09-29 17:02:29', 1104),
(284, 'Mutton butchery ', '', '', '0', '', '', '-1.1302682', '36.8093812', '', '', '', NULL, 'Mbuzi\n choma fry \n choma sufuria \nMatumbo ugali\nKichwa\n', NULL, NULL, NULL, '2022-09-29 17:15:42', '2022-09-29 17:15:42', 1104),
(294, 'Kitenge_glam', 'Beauty', 'Beauty', '9', '', '', '-1.1585337', '36.9473931', 'Nairobi', '', '', 'img-1664564819398.jpg', 'Pure cotton fabric vitengee', NULL, '294/u9kcxhluiz8piwjzdkao', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664564820/294/u9kcxhluiz8piwjzdkao.jpg', '2022-09-30 19:05:38', '2022-09-30 19:07:01', 1124),
(314, 'MartinDory Accessories', 'Domestic-Products', 'Domestic-Products', '0708347940', 'Moi Avenue, Nairobi, Kenya', '', '-1.2834674', '36.823562', 'Moi Ave', ' Nairobi', '', NULL, 'All computer accessories', NULL, NULL, NULL, '2022-10-05 09:45:42', '2022-10-05 09:45:42', 1174),
(315, 'Mulandi and Sons ', '', '', '0714639773', '', '', '-1.2859421', '36.9448706', 'Nairobi', '', '', 'img-1665096945086.jpg', 'Law firm', NULL, '315/hqauvdtdukevsykr4rrm', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1665096945/315/hqauvdtdukevsykr4rrm.jpg', '2022-10-06 22:49:22', '2022-10-06 22:55:46', 1206),
(316, 'Taylors computers and accessories ', 'Maintenance', 'Maintenance', '0700105906', 'Accra Road, Nairobi, Kenya', '', '-1.2830224', '36.8268878', 'Accra Rd', ' Nairobi', '', 'img-1665176188769.jpg', 'Deal\'s with laptops, computers and accessories. Both New and refurbished ', NULL, '316/bomqaw0rdebtzpfirkyb', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1665176189/316/bomqaw0rdebtzpfirkyb.jpg', '2022-10-07 20:44:03', '2022-10-07 20:56:29', 1208),
(317, 'Irene Naibei', '', '', '0703164127', 'Joska shopping centre, Kangundo Road, Kenya', '', '-1.2845779', '37.0960909', 'Joska', ' Kangundo Rd', '', NULL, 'Chicken Kienyeji and Mayai', NULL, NULL, NULL, '2022-10-08 12:25:08', '2022-10-08 12:25:08', 1209),
(318, 'DENNIS MUCHEMI ', 'pt', 'pt', '0728404601', 'juakali stage, Embakasi, Nairobi, Kenya', '', '-1.3046679', '36.9153714', 'juakali stage', ' Nairobi', '', 'img-1665241895912.jpg', 'TRANSPORT ', NULL, '318/vrf0k1jif7touvlfwipv', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1665241896/318/vrf0k1jif7touvlfwipv.jpg', '2022-10-08 14:25:37', '2022-10-08 15:11:36', 1210),
(319, 'Dunkam Garage', 'Automotive', 'Automotive', '0714639773', '', '', '-1.2866163', '36.9463232', 'Nairobi', '', '', 'img-1665378045615.jpg', 'Dunkam Garage', NULL, '319/tac5kn7ibbrah90oxrte', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1665378046/319/tac5kn7ibbrah90oxrte.jpg', '2022-10-10 05:00:15', '2022-10-10 05:00:46', 214),
(320, 'GG collections ', 'Clothing', 'Clothing', '0790145272', 'Ronald Ngala Street, Nairobi, Kenya', '', '-1.285254', '36.8287229', 'Ronald Ngala St', ' Nairobi', '', 'img-1665393364543.jpg', 'Shoes and clothing wear', NULL, '320/dozvcrazmokgbn2drtp1', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1665393365/320/dozvcrazmokgbn2drtp1.jpg', '2022-10-10 08:57:16', '2022-10-10 09:16:05', 1215),
(321, 'GG collections ', 'Clothing', 'Clothing', '0790145272', 'Ronald Ngala Street, Nairobi, Kenya', '', '-1.285254', '36.8287229', 'Ronald Ngala St', ' Nairobi', '', NULL, 'Shoes and clothing wear', NULL, NULL, NULL, '2022-10-10 08:57:48', '2022-10-10 08:57:48', 1215),
(322, 'GG collections ', '', '', '0790145272', '', '', '-1.202185', '36.9254585', '', '', '', NULL, 'Shoes and clothing wear', NULL, NULL, NULL, '2022-10-10 09:01:38', '2022-10-10 09:01:38', 1215),
(323, 'GG collections ', '', '', '0790145272', '', '', '-1.2015698', '36.9246281', '', '', '', NULL, 'Shoes and clothing wear', NULL, NULL, NULL, '2022-10-10 09:16:23', '2022-10-10 09:16:23', 1215),
(324, 'GG collections ', '', '', '0790145272', 'Ronald Ngala Street, Nairobi, Kenya', '', '-1.285254', '36.8287229', 'Ronald Ngala St', 'Ronald Ngala St', '', NULL, 'Shoes and clothing wear', NULL, NULL, NULL, '2022-10-10 09:16:39', '2022-10-10 09:17:40', 1215);

-- --------------------------------------------------------

--
-- Table structure for table `CustomerDeposits`
--

CREATE TABLE `CustomerDeposits` (
  `id` int(11) NOT NULL,
  `payment_method` varchar(255) DEFAULT NULL,
  `payment_method_id` int(11) DEFAULT NULL,
  `mpesa_code` varchar(255) DEFAULT NULL,
  `amount_deposited` double DEFAULT NULL,
  `fee_charges` double DEFAULT NULL,
  `made_at` datetime(6) DEFAULT NULL,
  `released_at` datetime(6) DEFAULT NULL,
  `refunded_at` datetime(6) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Customers`
--

CREATE TABLE `Customers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone_no` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `BusinessId` int(11) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Customers`
--

INSERT INTO `Customers` (`id`, `name`, `email`, `phone_no`, `createdAt`, `updatedAt`, `BusinessId`, `UserId`) VALUES
(1, 'Francis Mbatha', 'mbatha@2024', '0714639773', '2022-10-08 15:13:28', '2022-10-08 15:13:28', 318, 1211),
(2, 'Maina', 'Mainaedwin925@gmail.com', '0793711325', '2022-10-09 15:22:01', '2022-10-09 15:22:01', 318, 1214);

-- --------------------------------------------------------

--
-- Table structure for table `Images`
--

CREATE TABLE `Images` (
  `id` int(11) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `cover_photo` int(11) DEFAULT NULL,
  `serial` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `PropertyId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `MessageTypes`
--

CREATE TABLE `MessageTypes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Notifications`
--

CREATE TABLE `Notifications` (
  `id` int(11) NOT NULL,
  `message` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `Read` int(11) DEFAULT NULL,
  `archive` int(11) DEFAULT NULL,
  `from_` varchar(255) DEFAULT NULL,
  `receiver_email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `BusinessId` int(11) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `OrderBids`
--

CREATE TABLE `OrderBids` (
  `id` int(11) NOT NULL,
  `Amount` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `OrderId` int(11) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL,
  `CustomerId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `OrderPayments`
--

CREATE TABLE `OrderPayments` (
  `id` int(11) NOT NULL,
  `amount` int(11) DEFAULT NULL,
  `payment_method` varchar(255) DEFAULT NULL,
  `mpesa_code` varchar(255) DEFAULT NULL,
  `made_at` datetime(6) DEFAULT NULL,
  `released_at` datetime(6) DEFAULT NULL,
  `refunded_at` datetime(6) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `OrderId` int(11) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Orders`
--

CREATE TABLE `Orders` (
  `id` int(11) NOT NULL,
  `item_name` varchar(255) DEFAULT NULL,
  `orderId` int(11) DEFAULT NULL,
  `order_description` varchar(255) DEFAULT NULL,
  `quantity_ordered` int(11) DEFAULT NULL,
  `customer_phone_no` varchar(255) DEFAULT NULL,
  `cust_place_of_residence` varchar(255) DEFAULT NULL,
  `request_type` varchar(255) DEFAULT NULL,
  `payment_method_id` int(11) DEFAULT NULL,
  `request_made_at` datetime(6) DEFAULT NULL,
  `request_accepted_at` datetime(6) DEFAULT NULL,
  `request_declined_at` datetime(6) DEFAULT NULL,
  `request_cancelled_at` datetime(6) DEFAULT NULL,
  `order_status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `BusinessId` int(11) DEFAULT NULL,
  `CustomerId` int(11) DEFAULT NULL,
  `ProductId` int(11) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Orders`
--

INSERT INTO `Orders` (`id`, `item_name`, `orderId`, `order_description`, `quantity_ordered`, `customer_phone_no`, `cust_place_of_residence`, `request_type`, `payment_method_id`, `request_made_at`, `request_accepted_at`, `request_declined_at`, `request_cancelled_at`, `order_status`, `createdAt`, `updatedAt`, `BusinessId`, `CustomerId`, `ProductId`, `UserId`) VALUES
(1, 'TRANSPORT ', 8641, 'I have an event', 1, '+254714639773', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'completed', '2022-10-08 15:13:28', '2022-10-08 15:32:53', 318, 1, 785, 1211),
(2, 'TRANSPORT ', 6616, 'I want to go to lamu', 1, '+254793711325', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'pending', '2022-10-09 15:22:02', '2022-10-09 15:22:02', 318, 2, 785, 1214);

-- --------------------------------------------------------

--
-- Table structure for table `Payments`
--

CREATE TABLE `Payments` (
  `id` int(11) NOT NULL,
  `payment_date` datetime DEFAULT NULL,
  `added_by` varchar(255) DEFAULT NULL,
  `payment_method_id` int(11) DEFAULT NULL,
  `payment_amount` double DEFAULT NULL,
  `fee` double DEFAULT NULL,
  `notes` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `attachment` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `BookingId` int(11) DEFAULT NULL,
  `PropertyId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Payouts`
--

CREATE TABLE `Payouts` (
  `id` int(11) NOT NULL,
  `user_type` varchar(255) DEFAULT NULL,
  `account` varchar(255) DEFAULT NULL,
  `amount` double DEFAULT NULL,
  `penalty_amount` double DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `currency_code` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `BookingId` int(11) DEFAULT NULL,
  `PropertyId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `productmodels`
--

CREATE TABLE `productmodels` (
  `id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `price` int(11) DEFAULT NULL,
  `description` text,
  `published` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ProductRequests`
--

CREATE TABLE `ProductRequests` (
  `id` int(11) NOT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `request_no` varchar(255) DEFAULT NULL,
  `customer_phone_no` varchar(255) DEFAULT NULL,
  `seller_email` varchar(255) DEFAULT NULL,
  `seller_phone_no` varchar(255) DEFAULT NULL,
  `customer_address` varchar(255) DEFAULT NULL,
  `customer_lat` varchar(255) DEFAULT NULL,
  `customer_longitude` varchar(255) DEFAULT NULL,
  `cust_place_of_residence` varchar(255) DEFAULT NULL,
  `request_type` varchar(255) DEFAULT NULL,
  `currency_code` varchar(255) DEFAULT NULL,
  `payment_method_id` int(11) DEFAULT NULL,
  `request_made_at` datetime(6) DEFAULT NULL,
  `request_accepted_at` datetime(6) DEFAULT NULL,
  `request_declined_at` datetime(6) DEFAULT NULL,
  `request_cancelled_at` datetime(6) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  ` ProductId` int(11) DEFAULT NULL,
  `ProductId` int(11) DEFAULT NULL,
  `SellerId` int(11) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL,
  `BuyerId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Products`
--

CREATE TABLE `Products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `product_description` varchar(255) DEFAULT NULL,
  `unit_of_measure` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `geo_location` varchar(255) DEFAULT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `longitude` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `product_image` varchar(255) DEFAULT NULL,
  `cloudinary_id` varchar(255) DEFAULT NULL,
  `cloudinary_url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `BusinessId` int(11) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Products`
--

INSERT INTO `Products` (`id`, `name`, `category`, `product_description`, `unit_of_measure`, `price`, `quantity`, `geo_location`, `latitude`, `longitude`, `status`, `product_image`, `cloudinary_id`, `cloudinary_url`, `createdAt`, `updatedAt`, `BusinessId`, `UserId`) VALUES
(4, 'Pro Gas', 'undefined', 'Utawala Naivas', 'Kgs', 160, 0, NULL, '-1.2864582', '36.9463302', 'available', 'img-1664499384631.jpg', '4/et9yarwjax95y6nzukbt', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664499385/4/et9yarwjax95y6nzukbt.jpg', '2022-09-11 20:55:48', '2022-09-30 00:56:25', NULL, 4),
(14, 'Fruits', 'Household-Product', 'Utawala Naivas', 'Item', 160, 0, NULL, '-1.2865657', '36.9463273', 'available', 'img-1664580089138.jpg', '14/aqd8lu1kuwqcevsjvguh', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664580090/14/aqd8lu1kuwqcevsjvguh.jpg', '2022-09-11 21:01:35', '2022-09-30 23:21:30', NULL, 434),
(24, 'Unga', 'Household-Product', 'Unga ya sisiagi for sale', 'Kgs', 80, 30, NULL, '-1.2910592', '36.8574464', 'available', 'img-1664569437816.jpg', '4/fdcxbrf8zsyt86x5fojz', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664569444/4/fdcxbrf8zsyt86x5fojz.jpg', '2022-09-11 23:57:41', '2022-09-30 20:24:04', NULL, 4),
(34, 'Simba Cement', 'Contruction', 'Simba cembent at my hardware.Transport free.', 'Item', 700, 0, NULL, '-1.286494', '36.9464427', 'available', 'img-1664499427966.jfif', '24/xejipnd0dxasof8qfuts', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664499428/24/xejipnd0dxasof8qfuts.jpg', '2022-09-12 00:42:42', '2022-09-30 00:57:08', 24, 234),
(44, 'Blue Triangle Cement', 'Contruction', 'Blue Triangle Cement.', 'Item', 720, 456, NULL, NULL, NULL, 'available', 'img-1662943425893.jfif', '24/paapa2vj7zanl6y7a3nt', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1662943425/24/paapa2vj7zanl6y7a3nt.jpg', '2022-09-12 00:43:46', '2022-09-12 00:43:46', 24, 234),
(54, 'Nguvu Cement', 'Contruction', 'Nguvu Cement cheap', 'Item', 700, 300, NULL, '-1.289801', '36.948437', 'available', 'img-1663088044787.jfif', '64/gr9ycmz1wogb3ue1a4fr', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663088044/64/gr9ycmz1wogb3ue1a4fr.jpg', '2022-09-13 16:54:05', '2022-09-13 16:54:05', 64, 574),
(64, 'Potatoes', 'Agricultural', 'sadsfgd', 'Kgs', 120, 0, NULL, '-1.2865688', '36.9463215', 'available', 'img-1664579934054.jfif', '14/sizuazrqo7kc9kczstmc', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664579934/14/sizuazrqo7kc9kczstmc.jpg', '2022-09-15 00:17:51', '2022-09-30 23:18:55', NULL, 434),
(74, 'mabati', 'Contruction', 'Mabati for sale', 'Item', 750, 3, NULL, '-1.2894762', '36.9481415', 'available', 'img-1663276524051.jpg', '64/zsfq0y16hmlhfodjadib', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663276526/64/zsfq0y16hmlhfodjadib.jpg', '2022-09-15 21:15:26', '2022-09-15 21:15:26', 64, 574),
(84, 'Pro Gas ', 'Household-Product', 'Get cheap pro gas.', 'Kgs', 1300, 120, NULL, '-1.2866093', '36.9463524', 'available', 'img-1663286748979.jpg', '4/rzrmjw9dtsntawjtzj1i', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663286749/4/rzrmjw9dtsntawjtzj1i.jpg', '2022-09-16 00:05:49', '2022-09-16 00:05:49', NULL, 4),
(94, 'Gear box', 'Automotive', 'Toyota filder gear box', 'Item', 32000, 3, NULL, '-1.2865445', '36.9462937', 'available', 'img-1663462665500.jpg', '74/qh6ombxen2dalqiyxznd', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663462665/74/qh6ombxen2dalqiyxznd.jpg', '2022-09-18 00:57:46', '2022-09-18 00:57:46', 74, 704),
(104, 'Watermelon', 'Agricultural', 'Full watermelon @120 ksh', 'Item', 120, 20, NULL, '-1.3158722', '36.9243793', 'available', 'img-1663570385717.jpeg', '84/dxin2pjikqybevgn3fr4', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663570385/84/dxin2pjikqybevgn3fr4.jpg', '2022-09-19 06:53:06', '2022-09-19 06:53:06', 84, 734),
(114, 'Jaba and Miraa Kajaba', 'General-use', 'Fresh jaba and jaba all the time.', 'Item', 50, 0, NULL, '-1.2865459', '36.9463155', 'available', 'img-1664578172302.jpg', '124/haviuuhcusidcvyvdi1k', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664578173/124/haviuuhcusidcvyvdi1k.jpg', '2022-09-19 19:26:55', '2022-09-30 22:49:34', 124, 794),
(194, 'aSDfhg', 'Household-Product', 'saadfsgd', 'Item', 342, 2, NULL, '-1.2845056', '36.9426432', 'available', 'img-1663785651512.jpg', '14/vcwakmkix8xy5f2nxepg', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663785653/14/vcwakmkix8xy5f2nxepg.jpg', '2022-09-21 18:40:54', '2022-09-21 18:40:54', NULL, 434),
(204, 'Test', 'Computing', 'zASDFVXH', 'Kgs', 23000, 0, NULL, '-1.2866444', '36.9463166', 'available', 'img-1665190937855.png', 'null/i1vioawfecnc4sdxfcki', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1665190938/null/i1vioawfecnc4sdxfcki.png', '2022-09-21 18:45:07', '2022-10-08 01:02:19', NULL, 874),
(214, 'Product X', 'Household-Product', 'swfdgbfh', 'Item', 160, 13, NULL, '-1.2853694', '36.9433486', 'available', 'img-1663786740538.jpg', '164/sx7b70vp0pys7g9bzvvo', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663786740/164/sx7b70vp0pys7g9bzvvo.jpg', '2022-09-21 18:59:00', '2022-09-21 18:59:00', NULL, 874),
(224, 'Senator Keg', 'Drinking-Liquor', 'Best prices around astrol-ordinary', 'Item', 60, 30, NULL, '-1.2847895', '36.9463048', 'available', 'img-1663834189403.jpg', '174/zp4h747ebudlnjbjs5pe', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663834200/174/zp4h747ebudlnjbjs5pe.jpg', '2022-09-22 08:04:29', '2022-09-22 08:10:00', 174, 904),
(234, 'Chrome', 'Drinking-Liquor', 'Chrome available ', 'Order', 250, 30, NULL, '-1.2847895', '36.9463048', 'available', 'img-1663834465731.jpg', '174/lt1gatkhsytghcafci1z', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663834481/174/lt1gatkhsytghcafci1z.jpg', '2022-09-22 08:14:42', '2022-09-22 08:14:42', 174, 904),
(244, 'Pro gas', 'Household-Product', 'Cheap pro gas.Shop located near lustman or Baraka apartments ', 'Kgs', 1400, 10, NULL, '-1.2860301', '36.9461282', 'available', 'img-1663837409895.jpg', '184/frxcqd6avom8m2pzijxi', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663837412/184/frxcqd6avom8m2pzijxi.jpg', '2022-09-22 09:03:33', '2022-09-22 09:03:33', 184, 914),
(254, 'Test 1', '', 'test 2', '', 1230, 0, NULL, 'null', 'null', 'available', 'img-1663942990999.jpg', '4/gkynfkp1u14ks1y0juct', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663942991/4/gkynfkp1u14ks1y0juct.jpg', '2022-09-23 14:23:12', '2022-09-23 14:23:12', NULL, 4),
(264, 'Test', 'Agricultural', 'sdf', 'Kgs', 123, 0, NULL, 'null', 'null', 'available', 'img-1663944681994.jpg', '4/vecwmwoydli0iahqw5d1', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663944685/4/vecwmwoydli0iahqw5d1.jpg', '2022-09-23 14:51:25', '2022-09-23 14:51:25', NULL, 4),
(274, 'Test', 'General-use', 'sADSFVG', 'Kgs', 324, 0, NULL, 'null', 'null', 'available', 'img-1663945667013.jpg', '4/u6m60tfzfpbvfan3mxrw', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663945667/4/u6m60tfzfpbvfan3mxrw.jpg', '2022-09-23 15:07:47', '2022-09-23 15:07:47', NULL, 4),
(284, 'xZcxv b', 'Drinking-Liquor', 'xscsvdbf', '', 160, 0, NULL, 'null', 'null', 'available', 'img-1663946293550.jfif', '4/ccpbkmqpwy6zwgzfwq12', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663946293/4/ccpbkmqpwy6zwgzfwq12.jpg', '2022-09-23 15:18:13', '2022-09-23 15:18:13', NULL, 4),
(294, 'Test', 'Household-Product', 'Wass', 'Item', 200, 0, NULL, '-1.2860995', '36.9499088', 'available', 'img-1663947220219.jpg', '144/d7i0ydpflo8rzqhqzuz2', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663947286/144/d7i0ydpflo8rzqhqzuz2.jpg', '2022-09-23 15:34:47', '2022-09-23 15:34:47', 144, 844),
(304, 'Weave', 'Beauty', 'Test weave', 'Order', 3000, 0, NULL, '-1.32916', '37.05366', 'available', 'img-1663954508250.jpg', '224/tawjwgwiue9olhoideq9', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663954664/224/tawjwgwiue9olhoideq9.jpg', '2022-09-23 17:37:44', '2022-09-23 17:37:44', 224, 954),
(314, 'Weave', 'Beauty', 'Test weave', 'Order', 3000, 0, NULL, '-1.32916', '37.05366', 'available', 'img-1663954671677.jpg', '224/yw35rcldxnqgatkjpaup', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663954673/224/yw35rcldxnqgatkjpaup.jpg', '2022-09-23 17:37:53', '2022-09-23 17:37:53', 224, 954),
(324, 'Weave', 'Beauty', 'Test weave', 'Order', 3000, 0, NULL, '-1.32916', '37.05366', 'available', 'img-1663954681289.jpg', '224/skrceljdfppvpzu23gnb', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663954682/224/skrceljdfppvpzu23gnb.jpg', '2022-09-23 17:38:02', '2022-09-23 17:38:02', 224, 954),
(334, 'Weave', 'Beauty', 'Test weave', 'Order', 3000, 0, NULL, '-1.32916', '37.05366', 'available', 'img-1663954697691.jpg', '224/mkgesc8vdw6vkjjmwvjc', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663954698/224/mkgesc8vdw6vkjjmwvjc.jpg', '2022-09-23 17:38:19', '2022-09-23 17:38:19', 224, 954),
(344, 'Weave', 'Beauty', 'Test weave', 'Order', 3000, 0, NULL, '-1.32916', '37.05366', 'available', 'img-1663954712773.jpg', '224/k8mqytszg5xwa7rvdk86', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663954713/224/k8mqytszg5xwa7rvdk86.jpg', '2022-09-23 17:38:34', '2022-09-23 17:38:34', 224, 954),
(354, 'Weave', 'Beauty', 'Test weave', 'Order', 3000, 0, NULL, '-1.32916', '37.05366', 'available', 'img-1663954718872.jpg', '224/iqfjjjtv5qtxareeqeno', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663954719/224/iqfjjjtv5qtxareeqeno.jpg', '2022-09-23 17:38:40', '2022-09-23 17:38:40', 224, 954),
(364, 'Maziwa', 'General-use', 'Maziwa for sale', 'Item', 200, 0, NULL, '-1.2894111', '36.9481331', 'available', 'img-1663959484703.jpg', '194/oykzxeldcrghgf0osfla', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663959487/194/oykzxeldcrghgf0osfla.jpg', '2022-09-23 18:58:08', '2022-09-23 18:58:08', 194, 924),
(374, 'Wawaaa', 'General-use', 'My Products', 'Item', 1300, 0, NULL, '-1.2910592', '36.8574464', 'available', 'img-1664558927108.jpeg', '4/gniiwnzrxdk1mcgphhks', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664558927/4/gniiwnzrxdk1mcgphhks.jpg', '2022-09-23 21:50:03', '2022-09-30 17:28:47', NULL, 4),
(384, 'SADSFVB', 'Drinking-Liquor', 'QASWADFSGN', 'Item', 34, 0, NULL, 'null', 'null', 'available', 'img-1663970478817.jpg', '4/bkc6wn4td5teoyrldnqj', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663970479/4/bkc6wn4td5teoyrldnqj.jpg', '2022-09-23 22:01:20', '2022-09-23 22:01:20', NULL, 4),
(394, 'Test', 'General-use', 'dasfdbgfnh', 'Piece', 567, 0, NULL, 'null', 'null', 'available', 'img-1663970672990.jpg', '4/jynfe0kcka61ejythyvf', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663970676/4/jynfe0kcka61ejythyvf.jpg', '2022-09-23 22:04:36', '2022-09-23 22:04:36', NULL, 4),
(404, 'USB cable ', 'Computing', 'test', 'Item', 180, 0, NULL, 'null', 'null', 'available', 'img-1663971303143.jfif', '4/vf7o2iwvtp7h33yhcaxm', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663971303/4/vf7o2iwvtp7h33yhcaxm.jpg', '2022-09-23 22:15:03', '2022-09-23 22:15:03', NULL, 4),
(414, 'dasf', 'General-use', 'sdafsgdb', 'Kgs', 456, 0, NULL, 'null', 'null', 'available', 'img-1663972223057.jpg', '4/vcpt98makwmzgcrq3hbr', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663972223/4/vcpt98makwmzgcrq3hbr.jpg', '2022-09-23 22:30:24', '2022-09-23 22:30:24', NULL, 4),
(424, 'tetts', 'General-use', 'sadfsgdbn', 'Item', 2315, 0, NULL, 'null', 'null', 'available', 'img-1663975943537.jfif', '4/ghkucryoisrla8cn99r5', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663975943/4/ghkucryoisrla8cn99r5.jpg', '2022-09-23 23:32:23', '2022-09-23 23:32:23', NULL, 44),
(434, 'Test', 'Household-Product', 'cvbv ', 'Item', 24535, 0, NULL, 'null', 'null', 'available', 'img-1663977069266.jpg', '74/dxeght3b749phgfktlp5', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663977069/74/dxeght3b749phgfktlp5.jpg', '2022-09-23 23:51:10', '2022-09-23 23:51:10', 74, 44),
(444, 'New Product', 'General-use', 'sdasf', 'Kgs', 160, 0, NULL, 'null', 'null', 'available', 'img-1663978091438.JPG', '154/gbym7flzax9xrdgyszyo', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663978092/154/gbym7flzax9xrdgyszyo.jpg', '2022-09-24 00:08:12', '2022-09-24 00:08:12', NULL, 44),
(454, 'Home Made Cake', 'Home-Based', 'Home Made Cake', 'Item', 300, 0, NULL, 'null', 'null', 'available', 'img-1663978502491.JPG', '154/ytmg8xmjgqdawir6zhd3', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663978503/154/ytmg8xmjgqdawir6zhd3.jpg', '2022-09-24 00:15:03', '2022-09-24 00:15:03', NULL, 44),
(464, 'Test upload', 'Household-Product', 'Test', 'Item', 2000, 0, NULL, 'null', 'null', 'available', 'img-1663981967965.jpg', '194/ntyarnigccmt0lmbizvl', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663982029/194/ntyarnigccmt0lmbizvl.jpg', '2022-09-24 01:13:49', '2022-09-24 01:13:49', 194, 44),
(474, 'Apples ', 'Agricultural', 'Sweet apples ', 'Item', 80, 0, NULL, 'null', 'null', 'available', 'img-1663982708928.jpg', '84/s1cq6qofzinkdloqiq1s', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663982709/84/s1cq6qofzinkdloqiq1s.jpg', '2022-09-24 01:25:10', '2022-09-24 01:25:10', 84, 44),
(484, 'Upendo wrap', 'Clothing', 'Upendo wrap', 'Item', 300, 0, NULL, 'null', 'null', 'available', 'img-1663985433427.jpg', '114/c4ksbqgmd37e2urjssm7', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663985434/114/c4ksbqgmd37e2urjssm7.jpg', '2022-09-24 02:10:35', '2022-09-24 02:10:35', 114, 44),
(494, 'baby wrap', 'Clothing', 'baby wrap', 'Item', 100, 0, NULL, '-1.286477', '36.9462878', 'available', 'img-1664503944345.jpg', '94/w8j5sqojvjeu8bllkuma', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664503949/94/w8j5sqojvjeu8bllkuma.jpg', '2022-09-24 02:13:47', '2022-09-30 02:12:29', 94, 44),
(504, 'Chipo', 'Ready-Meal', 'Its at RG Centre. Kindly make your order using patamtaani. Prices are flexible', 'Package', 100, 0, NULL, '-1.2868905678247144', '36.94631442913988', 'available', 'img-1663987444107.jfif', '204/otxvdruxpfcnugdelxkh', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663987444/204/otxvdruxpfcnugdelxkh.jpg', '2022-09-24 02:44:05', '2022-09-24 02:44:05', 204, 44),
(514, 'Chips', 'Ready-Meal', 'Order chips and any other meal through patamtaani.', 'Package', 100, 0, NULL, '-1.2868905678247144', '36.94631442913988', 'available', 'img-1663987617191.jfif', '204/tea6cxz9agcwafbqxlrv', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1663987617/204/tea6cxz9agcwafbqxlrv.jpg', '2022-09-24 02:46:58', '2022-09-24 02:46:58', 204, 44),
(524, 'Test Product', 'General-use', 'sADSCVD B', 'Item', 1200, 0, NULL, '-1.2865928', '36.9463612', 'available', 'img-1664078434142.jpg', '4/ypeuuafygkcjsqwd9a9b', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664078437/4/ypeuuafygkcjsqwd9a9b.jpg', '2022-09-25 04:00:37', '2022-09-25 04:00:37', NULL, 4),
(564, 'Beef Stew', 'Ready-Meal', 'Beef Stew', 'Item', 150, 10, NULL, '-1.2893943', '36.9481334', 'available', 'img-1664099638726.jpeg', '234/yq1aaowpfdhi7uurthzg', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664099639/234/yq1aaowpfdhi7uurthzg.jpg', '2022-09-25 09:53:59', '2022-09-25 09:53:59', 234, 994),
(574, 'aScdvfdbgt', 'Household-Product', 'werghj', 'Kgs', 230, 10, NULL, '-0.0663477', '34.7825913', 'available', 'img-1664309903828.png', '4/ukfe9cdbfrilnowg7ts2', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664309904/4/ukfe9cdbfrilnowg7ts2.png', '2022-09-27 20:18:25', '2022-09-27 20:18:25', NULL, 4),
(584, 'dvfbgnhm,', 'Household-Product', 'SDAFSGDNHFMJ', 'Item', 120, 10, NULL, '-0.0663477', '34.7825913', 'available', 'img-1664310172105.png', '4/h4wry9t0s8wejv5qsmrx', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664310173/4/h4wry9t0s8wejv5qsmrx.png', '2022-09-27 20:22:53', '2022-09-27 20:22:53', NULL, 4),
(594, 'fgdnvm', 'Household-Product', 'teghfgjmh', 'Kgs', 4536, 10, NULL, '-0.0663477', '34.7825913', 'available', 'img-1664310364683.png', '4/rxvxzxdmpvk2xxvhac82', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664310365/4/rxvxzxdmpvk2xxvhac82.png', '2022-09-27 20:26:06', '2022-09-27 20:26:06', NULL, 4),
(604, 'Camino Mzinga', 'Drinking-Liquor', 'Camino Mzinga', 'Litre', 1650, 10, NULL, '-1.2894284', '36.9481476', 'available', 'img-1664376355927.jpg', '244/vw5uczcwigbaz6j0i4wn', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664376512/244/vw5uczcwigbaz6j0i4wn.jpg', '2022-09-28 14:48:33', '2022-09-28 14:48:33', 244, 1044),
(614, 'Chrome Vodka Mzinga', 'Drinking-Liquor', 'Chrome Vodka Mzinga @650', '', 650, 10, NULL, '-1.2895563', '36.9481873', 'available', 'img-1664376783075.jpg', '244/y75whryuiz7qlbo9dkwx', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664376846/244/y75whryuiz7qlbo9dkwx.jpg', '2022-09-28 14:54:06', '2022-09-28 14:54:06', 244, 1044),
(624, 'Gilbeys', 'Drinking-Liquor', 'Gilbeys', 'Item', 1450, 10, NULL, 'null', 'null', 'available', 'img-1664378943956.jpg', '244/bdl0sbxytmkxhbpxrcfi', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664378959/244/bdl0sbxytmkxhbpxrcfi.jpg', '2022-09-28 15:29:20', '2022-09-28 15:29:20', 244, 44),
(634, 'Grants Grant\'s Whiskey Mzinga', 'Drinking-Liquor', 'Get Grants Whiskey at the cheapest price if you are around utawala astrol.', 'Litre', 1450, 10, NULL, 'null', 'null', 'available', 'img-1664395476905.jpg', '244/wa6vnps9irsqirfjuw2c', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664395477/244/wa6vnps9irsqirfjuw2c.webp', '2022-09-28 20:04:38', '2022-09-28 20:04:38', 244, 44),
(644, 'Grants Whiskey Grant\'s Mzinga', 'Drinking-Liquor', 'Get Grants Whiskey if you are around utawala Astrol', 'Litre', 1450, 10, NULL, '-1.2893947', '36.9481397', 'available', 'img-1664395930953.jpg', '244/fsj3tcx53v1x79makhte', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664395931/244/fsj3tcx53v1x79makhte.webp', '2022-09-28 20:12:11', '2022-09-28 20:12:11', 244, 1044),
(654, 'Gilbey\'s Gilbeys Mzinga', 'Drinking-Liquor', 'Gilbey\'s Gilbeys Mzinga @ Castella', 'Litre', 1450, 10, NULL, '-1.2893941', '36.9481401', 'available', 'img-1664396323865.jpg', '244/qdkk1ztd3f16cbbzhzqy', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664396333/244/qdkk1ztd3f16cbbzhzqy.jpg', '2022-09-28 20:18:53', '2022-09-28 20:18:53', 244, 1044),
(664, 'K-gas, Total gas, progas ,EDA, etc', 'undefined', 'All gas cylinder ', 'Kgs', 1250, 0, NULL, '-1.2864527', '36.9463443', 'available', 'img-1664499582910.jpg', '214/ofqhf1nwexy8vu3yca0u', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664499584/214/ofqhf1nwexy8vu3yca0u.jpg', '2022-09-29 14:46:10', '2022-09-30 00:59:45', 214, 944),
(674, 'sdasfvdbgfn', 'General-use', 'xscfvbdg ', 'Kgs', 23, 10, NULL, '-1.2864679', '36.946391', 'available', 'img-1664468518215.jpg', '4/v9dsvcr8wgssmlx73s9t', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664468519/4/v9dsvcr8wgssmlx73s9t.jpg', '2022-09-29 16:21:59', '2022-09-29 16:21:59', NULL, 4),
(684, 'sADSFVDBG', 'General-use', 'CDSDVB N', 'Kgs', 120, 10, NULL, '-1.2864725', '36.9462948', 'available', 'img-1664470596882.jpg', '4/myfjwdjmpip5vfvbvzhx', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664470596/4/myfjwdjmpip5vfvbvzhx.jpg', '2022-09-29 16:56:37', '2022-09-29 16:56:37', NULL, 4),
(694, 'dwefargsfhgh', 'General-use', 'efadgfngmh', 'Kgs', 160, 10, NULL, '-1.2865', '36.9462512', 'available', 'img-1664472480765.jpg', '4/s4fy2ub1zxwmk1brofhn', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664472483/4/s4fy2ub1zxwmk1brofhn.jpg', '2022-09-29 17:28:03', '2022-09-29 17:28:03', NULL, 4),
(704, 'Test', 'Household-Product', 'Test', '', 1350, 10, NULL, '-1.2866236', '36.9460289', 'available', 'img-1664472836027.jpg', '234/ot5z2e61elil0bk0ny1f', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664472838/234/ot5z2e61elil0bk0ny1f.jpg', '2022-09-29 17:33:59', '2022-09-29 17:33:59', 234, 994),
(714, 'Purified drinking water clean water', 'undefined', 'Purified drinking water clean water', 'Litre', 250, 0, NULL, '-1.2864821', '36.9463277', 'available', 'img-1664502617875.jpeg', '264/wy4kibl6vmzwewu1ky2t', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664502618/264/wy4kibl6vmzwewu1ky2t.jpg', '2022-09-30 01:43:18', '2022-09-30 01:50:19', 264, 44),
(724, 'Purified drinking water clean water', 'Household-Product', 'Purified drinking water clean water.We are located at RG Centre', 'Litre', 250, 0, NULL, '-1.2864757', '36.9463341', 'available', 'img-1664502485001.jpeg', '264/baie2iwwpfg43hgbycle', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664502485/264/baie2iwwpfg43hgbycle.jpg', '2022-09-30 01:46:18', '2022-09-30 01:48:06', 264, 44),
(734, 'Waterpro 10 L', 'General-use', 'Water Pro', 'Litre', 200, 0, NULL, '-1.2910592', '36.8574464', 'available', 'img-1664558965033.jpeg', '254/dsmwuferivulagyrwlzd', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664558965/254/dsmwuferivulagyrwlzd.jpg', '2022-09-30 13:10:15', '2022-09-30 17:29:26', 254, 1074),
(744, 'Clean Water', 'Household-Product', 'Clean Water', 'Litre', 250, 10, NULL, '-1.2910592', '36.8574464', 'available', 'img-1664559069667.jpeg', '4/veewrigi5o5uqrzyedxo', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664559070/4/veewrigi5o5uqrzyedxo.jpg', '2022-09-30 17:31:10', '2022-09-30 17:31:10', NULL, 4),
(754, 'KITENGE ', 'Clothing', 'Pure cotton KITENGE 5.5m i.e 6yards we deliver country wide', 'mitre', 1600, 10, NULL, '-1.1585386', '36.9473937', 'available', 'img-1664565130762.jpg', '294/axp5qcaiyykdl8s5segh', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664565131/294/axp5qcaiyykdl8s5segh.jpg', '2022-09-30 19:12:11', '2022-09-30 19:12:11', 294, 1124),
(764, 'Oranges Mango', 'General-use', 'Oranges', 'Kgs', 160, 10, NULL, '-1.2865791', '36.9463137', 'available', 'img-1664575780669.jpg', '54/fqgjslgqalfst7wzjm1c', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664575781/54/fqgjslgqalfst7wzjm1c.jpg', '2022-09-30 21:51:14', '2022-09-30 22:09:42', 54, 564),
(774, 'HP Laptop', 'Computing', 'Co I 5 Hp', 'Item', 40000, 10, NULL, '-1.3158575', '36.9244168', 'available', 'img-1664963261741.jpg', '314/ynsfamjccxhzfpyydgiq', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1664963262/314/ynsfamjccxhzfpyydgiq.jpg', '2022-10-05 09:47:43', '2022-10-05 09:47:43', 314, 1174),
(775, 'Managu', 'Household-Product', 'Managu test', 'Item', 50, 10, NULL, '-1.2859421', '36.9448706', 'available', 'img-1665096734124.jpg', '315/uhtzsmiuhywoq0nass92', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1665096734/315/uhtzsmiuhywoq0nass92.jpg', '2022-10-06 22:52:15', '2022-10-06 22:52:15', 315, 1206),
(776, 'Web app', 'Computing', 'Website', 'Order', 50000, 10, NULL, '-1.2859421', '36.9448706', 'available', 'img-1665096839055.jpg', '315/jmkuwbwu1fdc3knhozou', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1665096839/315/jmkuwbwu1fdc3knhozou.jpg', '2022-10-06 22:54:00', '2022-10-06 22:54:00', 315, 1206),
(777, 'Hp Laptop ', 'Computing', '@70000\r\nHp ProBook 430 G8 \r\nIntel Core i5 \r\n2.8GHz processor \r\n11th Generation \r\n8GB RAM DDR4 \r\n512GB SSD \r\n13.3\" Display', 'Piece', 70000, 10, 'wide', 'null', 'null', 'available', 'img-1665175748397.jpg', '316/bu1qds3nygyaxh8mf9xn', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1665175748/316/bu1qds3nygyaxh8mf9xn.jpg', '2022-10-07 20:49:09', '2022-10-08 13:48:34', 316, 1208),
(778, 'Hp pavilion ', 'Computing', '@ksh.35000\r\nHp pavilion x360 11\r\nIntel Pentium silver\r\n4GB RAM \r\n512GB SSD \r\nTouchscreen \r\n11.3\" 1080p Display \r\nx360', 'Piece', 35000, 10, NULL, 'null', 'null', 'available', 'img-1665175871205.jpg', '316/vlv5kgf502zpvopjflw3', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1665175871/316/vlv5kgf502zpvopjflw3.jpg', '2022-10-07 20:51:12', '2022-10-07 20:51:12', 316, 1208),
(779, 'Hp probook ', 'Computing', 'HP ProBook 430 G3 Intel Core i5 6th Gen 8GB RAM 256GB SSD 13\" Display at Ksh. 27,000/-', 'Piece', 27000, 10, 'wide', 'null', 'null', 'available', 'img-1665176003692.jpg', '316/rm5j01tmtwudn10zcpdn', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1665176004/316/rm5j01tmtwudn10zcpdn.jpg', '2022-10-07 20:53:24', '2022-10-07 23:47:01', 316, 1208),
(780, 'Hp wireless keyboard ', 'Computing', 'Mouse and keyboard kit', 'Piece', 3500, 10, 'wide', 'null', 'null', 'available', 'img-1665209984772.jpg', '316/zdjtiyykgeq9xrevmykx', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1665209985/316/zdjtiyykgeq9xrevmykx.jpg', '2022-10-08 06:19:45', '2022-10-08 13:47:23', 316, 1208),
(781, 'Wired New keyboard ', 'Computing', 'Brand new wired keyboard ', 'Piece', 4500, 10, 'wide', 'null', 'null', 'available', 'img-1665210091652.jpg', '316/zwxamj8f1zdxom8azllc', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1665210092/316/zwxamj8f1zdxom8azllc.jpg', '2022-10-08 06:21:32', '2022-10-08 13:49:02', 316, 1208),
(782, 'Wireless mouse ', 'Computing', 'Brand new ', 'Piece', 600, 10, 'wide', 'null', 'null', 'available', 'img-1665210331445.jpg', '316/cpxnpmcrfcw2fiev727y', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1665210332/316/cpxnpmcrfcw2fiev727y.jpg', '2022-10-08 06:25:32', '2022-10-08 13:45:16', 316, 1208),
(783, 'Wireless optical mouse ', 'Computing', 'Wireless optical mouse ', 'Piece', 600, 10, 'wide', 'null', 'null', 'available', 'img-1665210557768.jpg', '316/ybo5edgpuwtondav0p5j', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1665210558/316/ybo5edgpuwtondav0p5j.jpg', '2022-10-08 06:29:18', '2022-10-08 13:44:38', 316, 1208),
(784, 'eggs', 'Agricultural', 'Kienyeji eggs.550 per tray.', 'Order', 550, 10, NULL, '-1.3113114', '36.9220263', 'available', 'img-1665232098892.jpg', '317/dezwwou7bdpzvj3fiwa4', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1665232099/317/dezwwou7bdpzvj3fiwa4.jpg', '2022-10-08 12:28:20', '2022-10-08 12:28:20', 317, 1209),
(785, 'TRANSPORT ', 'Others', 'TRANSPORT SERVICES ', 'Agreement', 500, 10, NULL, '-1.313915', '36.9253833', 'available', 'img-1665241783981.jpg', '318/kvlt3oo2azqhewlxaskm', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1665241784/318/kvlt3oo2azqhewlxaskm.jpg', '2022-10-08 15:09:44', '2022-10-08 15:09:44', 318, 1210),
(787, 'Shoe', 'Clothing', 'Brown boot  high cut pure  leather ', 'Item', 3500, 10, NULL, '-1.2015698', '36.9246281', 'available', 'img-1665393804978.jpg', '320/swzb4mhgaldwjfkcadaq', 'https://res.cloudinary.com/dmhqx9du1/image/upload/v1665393805/320/swzb4mhgaldwjfkcadaq.jpg', '2022-10-10 09:23:25', '2022-10-10 09:23:25', 320, 1215);

-- --------------------------------------------------------

--
-- Table structure for table `Properties`
--

CREATE TABLE `Properties` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `prop_code` varchar(255) NOT NULL,
  `private_name` varchar(255) DEFAULT NULL,
  `url_name` varchar(255) DEFAULT NULL,
  `bedrooms` varchar(255) DEFAULT NULL,
  `beds` varchar(255) DEFAULT NULL,
  `bed_type` varchar(255) DEFAULT NULL,
  `bathrooms` varchar(255) DEFAULT NULL,
  `amenities` varchar(255) DEFAULT NULL,
  `property_type` varchar(255) DEFAULT NULL,
  `space_type` varchar(255) DEFAULT NULL,
  `accommodates` varchar(255) DEFAULT NULL,
  `booking_type` varchar(255) DEFAULT NULL,
  `minimum_stay` varchar(255) DEFAULT NULL,
  `policy_id` varchar(255) DEFAULT NULL,
  `featured` varchar(255) DEFAULT NULL,
  `cancellation` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `minimum_stay_seasonal` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `host_id` int(11) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `PropertyAddresses`
--

CREATE TABLE `PropertyAddresses` (
  `id` int(11) NOT NULL,
  `address_line_1` varchar(255) DEFAULT NULL,
  `address_line_2` varchar(255) DEFAULT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `longitude` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `postal_code` varchar(255) DEFAULT NULL,
  `prop_code` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `PropertyId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `PropertyDescriptions`
--

CREATE TABLE `PropertyDescriptions` (
  `id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `summary` varchar(255) DEFAULT NULL,
  `place_is_great_for` varchar(255) DEFAULT NULL,
  `about_place` varchar(255) DEFAULT NULL,
  `guest_can_access` varchar(255) DEFAULT NULL,
  `interaction_guests` varchar(255) NOT NULL,
  `other` varchar(255) DEFAULT NULL,
  `about_neighborhood` varchar(255) DEFAULT NULL,
  `get_around` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `PropertyPhotos`
--

CREATE TABLE `PropertyPhotos` (
  `id` int(11) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `cover_photo` int(11) NOT NULL,
  `serial` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `PropertyPrices`
--

CREATE TABLE `PropertyPrices` (
  `id` int(11) NOT NULL,
  `cleaning_fee` int(11) DEFAULT NULL,
  `guest_after` int(11) DEFAULT NULL,
  `guest_fee` int(11) DEFAULT NULL,
  `security_fee` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `weekend_price` int(11) DEFAULT NULL,
  `weekly_discount` int(11) DEFAULT NULL,
  `monthly_discount` int(11) DEFAULT NULL,
  `currency_code` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `PropertyId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Property_Fees`
--

CREATE TABLE `Property_Fees` (
  `id` int(11) NOT NULL,
  `cleaning_fee` int(11) NOT NULL,
  `guest_after` int(11) NOT NULL,
  `guest_fee` int(11) NOT NULL,
  `security_fee` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `weekend_price` int(11) NOT NULL,
  `weekly_discount` int(11) NOT NULL,
  `monthly_discount` int(11) NOT NULL,
  `currency_code` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `rating` int(11) DEFAULT NULL,
  `description` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Reviews`
--

CREATE TABLE `Reviews` (
  `id` int(11) NOT NULL,
  `receiver_id` varchar(255) DEFAULT NULL,
  `reviewer` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `secret_feedback` varchar(255) DEFAULT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `improve_message` varchar(255) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `accuracy` int(11) DEFAULT NULL,
  `accuracy_message` varchar(255) DEFAULT NULL,
  `location` int(11) DEFAULT NULL,
  `location_message` varchar(255) DEFAULT NULL,
  `communication` int(11) DEFAULT NULL,
  `communication_message` varchar(255) DEFAULT NULL,
  `checkin` int(11) DEFAULT NULL,
  `checkin_message` varchar(255) DEFAULT NULL,
  `cleanliness` int(11) DEFAULT NULL,
  `cleanliness_message` varchar(255) DEFAULT NULL,
  `amenities` int(11) DEFAULT NULL,
  `amenities_message` varchar(255) DEFAULT NULL,
  `value` int(11) DEFAULT NULL,
  `value_message` varchar(255) DEFAULT NULL,
  `house_rules` int(11) DEFAULT NULL,
  `recommend` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `BookingId` int(11) DEFAULT NULL,
  `property_id` int(11) DEFAULT NULL,
  `PropertyId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `RunningOrders`
--

CREATE TABLE `RunningOrders` (
  `id` int(11) NOT NULL,
  `accepted_at` datetime(6) DEFAULT NULL,
  `expired_at` datetime(6) DEFAULT NULL,
  `declined_at` datetime(6) DEFAULT NULL,
  `cancelled_at` datetime(6) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `OrderId` int(11) DEFAULT NULL,
  `SellerId` int(11) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Services`
--

CREATE TABLE `Services` (
  `id` int(11) NOT NULL,
  `service_name` varchar(255) NOT NULL,
  `service_type` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `service_cost` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `BusinessId` int(11) DEFAULT NULL,
  `ServiceTypeSubcategoryId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ServiceTypes`
--

CREATE TABLE `ServiceTypes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `added_by` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ServiceTypeSubcategories`
--

CREATE TABLE `ServiceTypeSubcategories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `added_by` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `ServiceTypeId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Staffs`
--

CREATE TABLE `Staffs` (
  `id` int(11) NOT NULL,
  `staff_name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone_no` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `BusinessId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `SubscriptionRequests`
--

CREATE TABLE `SubscriptionRequests` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `phone_no` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `produce` varchar(255) DEFAULT NULL,
  `request_made_at` datetime(6) DEFAULT NULL,
  `request_accepted_at` datetime(6) DEFAULT NULL,
  `request_declined_at` datetime(6) DEFAULT NULL,
  `request_cancelled_at` datetime(6) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `phone_no` varchar(255) NOT NULL,
  `country` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `longitude` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `profile_image` varchar(255) DEFAULT NULL,
  `role` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `username`, `first_name`, `last_name`, `email`, `phone_no`, `country`, `state`, `city`, `latitude`, `longitude`, `password`, `profile_image`, `role`, `status`, `createdAt`, `updatedAt`) VALUES
(4, 'mamaboga01@gmail.com', 'Mama Boga', '', 'mamaboga01@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$2tEB5pMf6H7fZKagrUV/numN2pXMqZr94feo5JzxYz1ke5NLpDmOq', NULL, 'Vendor', 'Active', '2022-08-28 19:22:42', '2022-08-28 19:22:42'),
(14, 'akothe@gmail.com', 'Elidah Akoth', 'Elidah Akoth', 'akothe@gmail.com', '07980802130', NULL, '', NULL, NULL, NULL, '$2b$10$C8K./5o79HctQLJE1gi.C.TxQsHICAPEWUEKySWRQVsvWvrfNi8HS', NULL, 'Customer', 'Active', '2022-08-28 19:44:17', '2022-08-28 19:44:17'),
(24, 'jane@gmail.com', 'Jane Wafula', '', 'jane@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$xfaWVvQMWToaSDvY6JrxpOXXh2WNCfmgBU3APSiehKhiDkkrUGBw.', NULL, 'Vendor', 'Active', '2022-08-28 20:04:34', '2022-08-28 20:04:34'),
(34, 'mutheu20@gmail.com', 'Mutheu Mbalu', 'Mutheu Mbalu', 'mutheu20@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$GpZ8mvXORkY9lOKSpmjU4.jLdqfS96REgZyyuJm1zvaCZdppBfq2G', NULL, 'Customer', 'Active', '2022-08-28 20:22:48', '2022-08-28 20:22:48'),
(44, 'francismwendw20@gmail.com', 'Francis Mwendwa', '', 'francismwendw20@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$LSy5oESy/.CDJfrW3NpfM./J1gn6P4UzRhtl3yvugDVzzMwu/3fXa', NULL, 'Admin', 'Active', '2022-08-28 20:25:20', '2022-08-28 20:25:20'),
(54, 'cyrus', 'Cyrus ', 'Cyrus ', 'cyrus', '078077090', NULL, '', NULL, NULL, NULL, '$2b$10$C1s4FuEgIHGpknlTglk7Iux8A7aMit0NP6yU5Z9eGhQF17ipC0gD2', NULL, 'Customer', 'Active', '2022-08-28 20:48:52', '2022-08-28 20:48:52'),
(64, 'alexa@gmail.com', 'Alexander Njogu', '', 'alexa@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$3EEDmpQpMpl5gfuBAFmkCOAHRnMOxvv9XE6Hvq3rov7MxPTA9yin2', NULL, 'Vendor', 'Active', '2022-08-28 23:53:39', '2022-08-28 23:53:39'),
(74, 'kamguyz2022@gmail.com', 'Francis Mbatha', 'Francis Mbatha', 'kamguyz2022@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$aTOK91EV7uP3uOyxLxJYVuC5NddACAQLtfYcHGKQZLFIQO29qpJbu', NULL, 'Customer', 'Active', '2022-08-29 00:02:04', '2022-08-29 00:02:04'),
(84, 'joyakothee@gmail.com', 'Joy Akoth', 'Joy Akoth', 'joyakothee@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$7dbAL0NfEGu9L8bZB8dOv.8JwnCPVal4SYe12jeH69vWHByiZWDge', NULL, 'Customer', 'Active', '2022-08-29 10:28:19', '2022-08-29 10:28:19'),
(94, 'wasike@gmail.com', 'Wasike', 'Wasike', 'wasike@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$lPbzOx8uVtNKP1QcBU7dVup2d65xl03OeNIgFg89N5uWY/vo0MdtG', NULL, 'Customer', 'Active', '2022-08-29 16:35:12', '2022-08-29 16:35:12'),
(104, 'Kama@gmail.com', 'Kama', 'Kama', 'Kama@gmail.com', '0786148700', NULL, '', NULL, NULL, NULL, '$2b$10$dzEbPCrHtmx9P8WnIdxZOuoSeQb47hVlC/5rVzJ19pbqibuV7HQHe', NULL, 'Customer', 'Active', '2022-08-29 16:53:52', '2022-08-29 16:53:52'),
(114, 'mbatha', 'Francis Mbatha', 'Francis Mbatha', 'mbatha', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$3bbtJUxLMPiY78Wh.u2pxuXxNfVdCfmj8aaAMFIQxZUwA8RlkjhGC', NULL, 'Customer', 'Active', '2022-08-29 16:57:46', '2022-08-29 16:57:46'),
(124, 'Mwas@gmail.com', 'Kama', 'Kama', 'Mwas@gmail.com', '0786148700', NULL, '', NULL, NULL, NULL, '$2b$10$V9u87tIKjsAsLJEH/ZyCYe9bFxm1FfzMVPVnPoliVhzCiMATNbuoi', NULL, 'Customer', 'Active', '2022-08-29 17:01:30', '2022-08-29 17:01:30'),
(134, '', '', '', '', '0701257751', NULL, '', NULL, NULL, NULL, '$2b$10$BvQYZeLLMnhhT8.ZxEMtou7lTyXRnuZPqRbW.P82xIs/eeLZEbxdG', NULL, 'Customer', 'Active', '2022-08-30 09:19:43', '2022-08-30 09:19:43'),
(144, 'Franko23@gmail.com', 'Francis Mbatha', 'Francis Mbatha', 'Franko23@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$qv2ZNcikQS/EurVA7LJfdOTAaoVgPKDjURUS97Wvi1Z.LURMXFvNy', NULL, 'Customer', 'Active', '2022-08-31 15:27:32', '2022-08-31 15:27:32'),
(154, 'kineg@gmail.com', 'Kineto Kioko', 'Kineto Kioko', 'kineg@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$BsdXHr.QhT.0WTUQEHlmOuBJ4AQzinW6ECQeUkDtUCC/J3EyZHWSe', NULL, 'Customer', 'Active', '2022-09-01 18:12:20', '2022-09-01 18:12:20'),
(164, 'test345@gmail.com', 'Test Customer', 'Test Customer', 'test345@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$yipVAs0MvCEnADOhVLjwr.xFGmULW00q.fU3o81NQyqWuM/pCDE8O', NULL, 'Customer', 'Active', '2022-09-01 18:23:21', '2022-09-01 18:23:21'),
(174, 'jo0089@g.com', 'Francis Mbatha', 'Francis Mbatha', 'jo0089@g.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$wxtNnPiFE2y/De.wlSrT8uabYPn6.QXoxiewa3iz9iyqD6nc1TD9y', NULL, 'Customer', 'Active', '2022-09-01 21:20:05', '2022-09-01 21:20:05'),
(184, 'swangui10@gmail.com', 'Susan Wangui', '', 'swangui10@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$BGjv/i8pazoH/P719qU/buJ2ihhtDxPzmoN7PDxJmycogFZwZmVIW', NULL, 'Vendor', 'Active', '2022-09-01 22:58:18', '2022-09-01 22:58:18'),
(194, 'evans@gmail.com', 'Evans Mwania', 'Evans Mwania', 'evans@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$J/4GutZS7RNseaI.Ih1EWONR82Hq09A7kQvvA7K8kTnvfIEs8oPzy', NULL, 'Customer', 'Active', '2022-09-01 23:04:23', '2022-09-01 23:04:23'),
(204, 'johnson@gmail.com', 'Johnson Sakaja', 'Johnson Sakaja', 'johnson@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$zoxMTUTvB6xpIGZM3hZlX.tE/RsapOA413jbrZFbDjndxdq7jQCsS', NULL, 'Customer', 'Active', '2022-09-02 10:02:00', '2022-09-02 10:02:00'),
(214, 'dankan@gmail.com', 'Dunkan Muli', '', 'dankan@gmail.com', '0780077090', NULL, '', NULL, NULL, NULL, '$2b$10$SjwjqVqdNwAXjUb/7yNx0eF3YOQyORmSv/9Tv4FNRD/BePigP2BGO', NULL, 'Vendor', 'Active', '2022-09-02 15:23:49', '2022-09-02 15:23:49'),
(224, 'edward@gmail.com', 'Edward Musyoka', 'Edward Musyoka', 'edward@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$bElJWTZEwohAYYmCWQnt4ep3Rdo4E3xi09Jzeaq7EJ.Q6J2rpGV16', NULL, 'Customer', 'Active', '2022-09-02 15:55:34', '2022-09-02 15:55:34'),
(234, 'jeremy20@gmail.com', 'Jeremiah ', '', 'jeremy20@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$qXPRcqqhy2Ph5ronJhSeneJhYef5.6DO9rMtCMBemDbjXqRZdSb1W', NULL, 'Vendor', 'Active', '2022-09-02 16:08:43', '2022-09-02 16:08:43'),
(244, 'victor@gmail.com', 'Victor Getonto', 'Victor Getonto', 'victor@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$5p3QrG5LBVxhcutfKTXq2emM1h5u.RKshrdYIsGfRe9oUJZo3HbFi', NULL, 'Customer', 'Active', '2022-09-02 16:21:38', '2022-09-02 16:21:38'),
(254, 'jafet.mwasi@gmail.com ', 'Mwasi', 'Mwasi', 'jafet.mwasi@gmail.com ', '+254724871579', NULL, '', NULL, NULL, NULL, '$2b$10$RFopuup8ht8MLSBZvVLi8.9USAJ3N.mHiPqDR1XuFQoULhDx9ekGy', NULL, 'Customer', 'Active', '2022-09-02 21:13:46', '2022-09-02 21:13:46'),
(264, 'phillis@g.com', 'Phillips Mutheu', 'Phillips Mutheu', 'phillis@g.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$XsAJ2D/cWoDP3DmtfFUpM.FdXLxZbWaiPo1grqpHyuMv1TCoamYSa', NULL, 'Customer', 'Active', '2022-09-02 21:26:10', '2022-09-02 21:26:10'),
(274, 'Joseph238@gmail.com', 'Joseph Munene', 'Joseph Munene', 'Joseph238@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$GpF3tHw5DKmlqxerPup13ejceiyNgsngd7m7TA.yH8dkKhIUfRa0S', NULL, 'Customer', 'Active', '2022-09-04 17:48:05', '2022-09-04 17:48:05'),
(284, 'hellen@gmail.com', 'Hellen Opiyo', 'Hellen Opiyo', 'hellen@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$YBKmuWlIM30n0Wb9uKHi6OoGM8mWoC2ntz.IYEzg8/GHZLGGgUC2a', NULL, 'Customer', 'Active', '2022-09-04 17:57:55', '2022-09-04 17:57:55'),
(294, 'fm345@gmail.com', 'Francis Mbatha', 'Francis Mbatha', 'fm345@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$lJJnvA2/mAriHjO7H8k1fep2ziH7vdh0so0b6Qyi0dluztXtdNeFG', NULL, 'Customer', 'Active', '2022-09-04 18:38:58', '2022-09-04 18:38:58'),
(304, 'mwangui@g.com', 'Mary Wangui', 'Mary Wangui', 'mwangui@g.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$YsDvCrpitfHb3iONFtwU4u59Abr5UhlLQs3DXnVbUBbIUUE7n/sYO', NULL, 'Customer', 'Active', '2022-09-04 19:01:36', '2022-09-04 19:01:36'),
(314, 'wdasrfgdhr', 'Francis Mbatha', 'Francis Mbatha', 'wdasrfgdhr', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$3YV.sbxuuphzTpmN4XkiyeokfBquyMikzuVVNV4baJJEACJWL8/Ey', NULL, 'Customer', 'Active', '2022-09-04 19:08:23', '2022-09-04 19:08:23'),
(324, 'safvdgbfhgjm', 'Francis Mbatha', 'Francis Mbatha', 'safvdgbfhgjm', '234567dfsgd', NULL, '', NULL, NULL, NULL, '$2b$10$PBlAMV7TPMpXWWpjoY.4A.krQqpK5fjXL4k1VzhQhiZndOPFkNwl6', NULL, 'Customer', 'Active', '2022-09-04 19:09:26', '2022-09-04 19:09:26'),
(334, 'felix@gmail.com', 'Felix Magoha', 'Felix Magoha', 'felix@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$yGxnVRcP8xs7TaOGG4MoiuuVYnEkrKRYXC6IAc0Bgt5RDNSt6ST8K', NULL, 'Customer', 'Active', '2022-09-04 19:24:23', '2022-09-04 19:24:23'),
(344, 'fmbatha2560@gmail.com', 'Francis Mbatha', 'Francis Mbatha', 'fmbatha2560@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$mLcPqjng422qgdoFEuLV3.5Ih45uIg9ON3olyIDN61/w.arnsgLH.', NULL, 'Customer', 'Active', '2022-09-04 19:35:00', '2022-09-04 19:35:00'),
(354, 'fmbath1234@gmail.com', 'Francis Mbatha', 'Francis Mbatha', 'fmbath1234@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$s5AeufVLqzVzXSytA/8couyt3wWwwd2Z.UdXUGGjUQSqd32MtTrY.', NULL, 'Customer', 'Active', '2022-09-04 19:55:07', '2022-09-04 19:55:07'),
(364, 'felli20@gmail.com', 'Felistus Njogu', 'Felistus Njogu', 'felli20@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$4wYZ1cS3cG3ZHSAfcI7lpuupVWKgz.tdoUy64xMrhA7lUUl.uL.Zu', NULL, 'Customer', 'Active', '2022-09-04 20:05:09', '2022-09-04 20:05:09'),
(374, 'dmutueri20@gmail.com', 'Denis Mutueri', '', 'dmutueri20@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$PwuXbwAtJR6iPTS3JFkItuYfvQigdZq4CZpiGDcEAE2/4rF4mqpYq', NULL, 'Vendor', 'Active', '2022-09-04 20:08:55', '2022-09-04 20:08:55'),
(384, 'ann201@gmail.com', 'Ann Mwaka', 'Ann Mwaka', 'ann201@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$qyD6lFhix0sgqJBqV/Z/4eugPqXLyDxyV468F6d4P4Mj/akCAob6y', NULL, 'Customer', 'Active', '2022-09-04 20:13:49', '2022-09-04 20:13:49'),
(394, 'mbathaqt@gmail.com', 'Francis Mbatha', 'Francis Mbatha', 'mbathaqt@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$M78YzzHh1mr7kqP6K02PT.Ew.CuArdVfk0o9O9H4NKIzCRA37u25S', NULL, 'Customer', 'Active', '2022-09-04 20:19:25', '2022-09-04 20:19:25'),
(404, 'customer1', 'Test Customer', 'Test Customer', 'customer1', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$o42I6uyUwonvi39IDKhXMuDhDTFLYZUiTzONmcNwm3NPVoEHGqUxu', NULL, 'Customer', 'Active', '2022-09-04 20:58:45', '2022-09-04 20:58:45'),
(414, 'jj20@gmail.com', 'Johnson Johnston ', 'Johnson Johnston ', 'jj20@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$AW0UB2jqVAqAcswn3swi9u9p/yWlya1xP2/9PQ/Gu9GU1EWDIuXaC', NULL, 'Customer', 'Active', '2022-09-05 14:52:37', '2022-09-05 14:52:37'),
(424, 'susank@gmail.com', 'Susan Kihika', 'Susan Kihika', 'susank@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$atcnKHwQqN3WOz6OJiyvzeCOXHAGS9Oqaye3n722eheKV1fzFMzjO', NULL, 'Customer', 'Active', '2022-09-05 15:16:45', '2022-09-05 15:16:45'),
(434, 'fatuma@gmail.com', 'Fatuma Mohamed', '', 'fatuma@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$RDDtR6PIKJgVMNNLhJr/l.ICxV97sAh7mmP.H1cItAAZJ6jFvGEle', NULL, 'Vendor', 'Active', '2022-09-07 15:00:07', '2022-09-07 15:00:07'),
(435, 'pmwilu20@gmail.com', 'Philomenah Mwilu', 'Philomenah Mwilu', 'pmwilu20@gmail.com', '0798802123', NULL, '', NULL, NULL, NULL, '$2b$10$MgHsJquf72F8l15UCgEF8u1XRNYaqAgo9iUe/4TXJAUu.GpAJDt4i', NULL, 'Customer', 'Active', '2022-09-07 21:27:10', '2022-09-07 21:27:10'),
(444, 'rono20@gmail.com', 'Ambrose Rono', 'Ambrose Rono', 'rono20@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$KFxFv6BH5h.PaE5jcVYz.eIGH/4hazo6U0LH0MBf8IcQ2gJSmjK/m', NULL, 'Customer', 'Active', '2022-09-08 18:37:02', '2022-09-08 18:37:02'),
(454, 'fmbatha22@gmail.com', 'Francis Mbatha', 'Francis Mbatha', 'fmbatha22@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$qekEHw76iXJrQlue5cnefeTAjSCE5zngl9ECXlzjnkWF0urlzYdUK', NULL, 'Customer', 'Active', '2022-09-09 00:16:15', '2022-09-09 00:16:15'),
(464, 'winnie@gmail.com', 'Winnie Wanyonyi', '', 'winnie@gmail.com', '0718374254', NULL, '', NULL, NULL, NULL, '$2b$10$zlmS/nb03h/YywFMU0X4Ku7V0uOUI1Xr2udp82A0X.ni8otvKdpWa', NULL, 'Vendor', 'Active', '2022-09-09 00:27:23', '2022-09-09 00:27:23'),
(474, 'ann@gmail.com', 'Ann kamau', 'Ann kamau', 'ann@gmail.com', '0714639773', NULL, '', NULL, NULL, NULL, '$2b$10$jPqUorn35tBECk2RsI.P3exqUk.DaQhYbeTlJBQK4kTngrcJqTjCm', NULL, 'Customer', 'Active', '2022-09-09 00:47:15', '2022-09-09 00:47:15'),
(484, 'mutueri@gmail.com', 'Denis Mutueri', '', 'mutueri@gmail.com', '0707469808', NULL, '', NULL, NULL, NULL, '$2b$10$FaD03JHxTIJJfCDRAWwPyuZMt8cFOqLwYRfHlwoMPTXPHUvgdHPIa', NULL, 'Vendor', 'Active', '2022-09-09 15:43:42', '2022-09-09 15:43:42'),
(494, 'kmaaan@gmail.com', 'Test Unga', 'Test Unga', 'kmaaan@gmail.com', '+254714639773', NULL, '', NULL, NULL, NULL, '$2b$10$yXWRvBDnvmq1KJDfcrg.YuvMYIR.7Icvt4w8iB43vA.EQe/0qG8a6', NULL, 'Customer', 'Active', '2022-09-11 23:58:57', '2022-09-11 23:58:57'),
(504, 'dew45fgh@g.com', 'Francis Mbatha', 'Francis Mbatha', 'dew45fgh@g.com', '+254780077090', NULL, '', NULL, NULL, NULL, '$2b$10$oAEwdYHA6JUAkJVfo/WpV.VUtqNehNSdVyF1HopOgTHBbHFvw3.Q2', NULL, 'Customer', 'Active', '2022-09-12 00:12:59', '2022-09-12 00:12:59'),
(514, 'everson@gmail.com', 'Everson Muriuki', 'Everson Muriuki', 'everson@gmail.com', '+254780077090', NULL, '', NULL, NULL, NULL, '$2b$10$f.JuXPvTGL6YI9jzW4nbIeSFkc3o0Suwn7Kl5qgSqwCl6KdmyDmdK', NULL, 'Customer', 'Active', '2022-09-12 01:01:03', '2022-09-12 01:01:03'),
(524, 'Okemwa1984@gmail.com', 'Steve', 'Steve', 'Okemwa1984@gmail.com', '+254725577164', NULL, '', NULL, NULL, NULL, '$2b$10$.NQEeoDHXPg4t8dzq/eRY.YLJoJ6/ClASx22pLW7po3nFqtva1wE.', NULL, 'Customer', 'Active', '2022-09-12 06:38:13', '2022-09-12 06:38:13'),
(534, 'vendor@gmail.com', 'Test Vendor', '', 'vendor@gmail.com', '+254780077090', NULL, '', NULL, NULL, NULL, '$2b$10$fAR.8dXhcaUkdKd7Ua8zreMMxzCPayXgiZdQ54sbvAHvNqGmsNG0m', NULL, 'Vendor', 'Active', '2022-09-12 18:07:38', '2022-09-12 18:07:38'),
(544, 'amos@gmail.com', 'Amos Musembi', 'Amos Musembi', 'amos@gmail.com', '+254714639773', NULL, '', NULL, NULL, NULL, '$2b$10$SnwWSYtRSuFEK21a.Tpgg.22sjEBwwPCnKc0Tkl4Ni8ev4QUm3DDq', NULL, 'Customer', 'Active', '2022-09-12 20:31:42', '2022-09-12 20:31:42'),
(554, 'mamaboga05@gmail.com', 'Mama Mboga 05', '', 'mamaboga05@gmail.com', '+254714639773', NULL, '', NULL, NULL, NULL, '$2b$10$w7xuY3Zm6bPQaoA.VF/aquPuw1s.9ErBmBaE1a.cdYKk5mFrH7zHC', NULL, 'Vendor', 'Active', '2022-09-13 15:19:32', '2022-09-13 15:19:32'),
(564, 'mamaboga04@gmail.com', 'Mama Mboga 04', '', 'mamaboga04@gmail.com', '+254714639773', NULL, '', NULL, NULL, NULL, '$2b$10$vN7df4.bxZQaUGU5uTSjxO.F.u5mCxRXp51x/G8IG2Ax7FrKvULKa', NULL, 'Vendor', 'Active', '2022-09-13 16:33:04', '2022-09-13 16:33:04'),
(574, 'jemki@gmail.com', 'Jeremy Tuwei', '', 'jemki@gmail.com', '+254714639773', NULL, '', NULL, NULL, NULL, '$2b$10$uL.KLWvmWaGp9di6hbGbK.D9Rgus8NYJZeIB3rhgO1IXBi07odKri', NULL, 'Vendor', 'Active', '2022-09-13 16:49:09', '2022-09-13 16:49:09'),
(584, 'emuthoni@gmail.com', 'Everline Muthoni', 'Everline Muthoni', 'emuthoni@gmail.com', '+254707551308', NULL, '', NULL, NULL, NULL, '$2b$10$cyaNStbrsWWMRLtC7slwT.Sabr065JcwVUSBs4/JhzSnDG0/JLqFq', NULL, 'Customer', 'Active', '2022-09-13 16:56:21', '2022-09-13 16:56:21'),
(594, 'dennis@gmail.com', 'Dennis Osariko', 'Dennis Osariko', 'dennis@gmail.com', '+254714639773', NULL, '', NULL, NULL, NULL, '$2b$10$UwP7WNrBZ7V8ouquhl/P1.qfmQ3QNb5j4HA9RWKRgEjgwLIcDh2kW', NULL, 'Customer', 'Active', '2022-09-13 17:53:31', '2022-09-13 17:53:31'),
(604, 'fmbaddd60@gmail.com', 'Francis Mbatha', 'Francis Mbatha', 'fmbaddd60@gmail.com', '+254714639773', NULL, '', NULL, NULL, NULL, '$2b$10$AbMyAvV77tiloiHufqQOF.o3JcQ//WjfmMVg1tzRQKZbAd0/HxfrS', NULL, 'Customer', 'Active', '2022-09-13 20:04:24', '2022-09-13 20:04:24'),
(614, 'elizah20@gmail.com', 'Elizabeth Njoki', '', 'elizah20@gmail.com', '+254714639773', NULL, '', NULL, NULL, NULL, '$2b$10$xKJRKXWYY.D.y/6eOqyBW.R0oBapyI9L7/Ro4dcpgNGM0IPd9Hryu', NULL, 'Vendor', 'Active', '2022-09-14 18:00:16', '2022-09-14 18:00:16'),
(624, 'mbatha@gmail.com', 'Newton koki', '', 'mbatha@gmail.com', '+254719349722', NULL, '', NULL, NULL, NULL, '$2b$10$Cy.eULJbn.1iWIqgBrmlMeIi.kQWXwWXvYQmCsML00ZF3Jb7m53gG', NULL, 'Vendor', 'Active', '2022-09-14 18:24:34', '2022-09-14 18:24:34'),
(634, 'mwendwambatha@gmail.com', 'Test', 'Test', 'mwendwambatha@gmail.com', '+254714639773', NULL, 'Nairobi', NULL, NULL, NULL, '$2b$10$.xgLcHygCcEYZKn6ySnUI.7.sxaxG0WF1vVBqJPemlsn/kE8X3m1O', NULL, 'Buss_Owner', 'Active', '2022-09-16 01:38:05', '2022-09-16 01:38:05'),
(644, 'wamusyi@gmail.com', 'Tetts', 'Tetts', 'wamusyi@gmail.com', '+254714639773', NULL, 'Nairobi', NULL, NULL, NULL, '$2b$10$cf8ifORcunz3cTmeS3TTyO8Fz6jhVsWohY2QkeGgAKlU8aOFJwOv6', NULL, 'Vendor', 'Active', '2022-09-16 01:39:50', '2022-09-16 01:39:50'),
(654, 'samson@gmail.com', 'Samson Kimweli', 'Samson Kimweli', 'samson@gmail.com', '+254714639773', NULL, 'Nairobi', NULL, NULL, NULL, '$2b$10$uiYXPGGurAwCCpVW23L83uPGPg.fT38kPkmes.sCoNt5sBAAlRxdm', NULL, 'Vendor', 'Active', '2022-09-16 01:56:31', '2022-09-16 01:56:31'),
(664, 'jaylanaisystems@gmail.com', 'Japhet Mwakideu ', 'Japhet Mwakideu ', 'jaylanaisystems@gmail.com', '+254724871579', NULL, 'Nairobi', NULL, NULL, NULL, '$2b$10$WrZ1mFARAGPK26615/a7Iu.5T7sDA4cv3EyR3y3eB.qIzse0SI6Je', NULL, 'Vendor', 'Active', '2022-09-16 02:11:21', '2022-09-16 02:11:21'),
(674, 'k', 'I', 'I', 'k', '+254', NULL, 'Nairobi', NULL, NULL, NULL, '$2b$10$Hfr9klqxMFLvUQmoSHBIf.VOow5XeozPcmPI2GiqSnN0jqP.rpJl.', NULL, 'Vendor', 'Active', '2022-09-16 08:33:47', '2022-09-16 08:33:47'),
(684, 'kibetgibson7@gmail.com', 'gibs', 'gibs', 'kibetgibson7@gmail.com', '+254713168133', NULL, 'Nairobi', NULL, NULL, NULL, '$2b$10$xDg46tRYdsjOEemjodDgbe3F2gMG9D8AYrzpuoh8aw5GNoSED2Boe', NULL, 'Vendor', 'Active', '2022-09-16 16:59:39', '2022-09-16 16:59:39'),
(694, 'emuthoni20@gmail.com', 'Easter Muthoni', '', 'emuthoni20@gmail.com', '+254', NULL, '', NULL, NULL, NULL, '$2b$10$KSfNSEoPKKokqQhE.A3ulOuTd1uojQOyxi.OZuEM.pecBBbjULnOC', NULL, 'Vendor', 'Active', '2022-09-17 23:57:17', '2022-09-17 23:57:17'),
(704, 'kennedy20@gmail.com', 'Kennedy ', '', 'kennedy20@gmail.com', '+254714639773', NULL, '', NULL, NULL, NULL, '$2b$10$HGQBkdZQVWDYHUfhNE2joeQHUIuxsVqE0CjAmFZ2gc.FzsyxQ/v.y', NULL, 'Vendor', 'Active', '2022-09-18 00:53:59', '2022-09-18 00:53:59'),
(714, 'jkaricho@gmail.com', 'Joy Karicho', 'Joy Karicho', 'jkaricho@gmail.com', '+254714639773', NULL, '', NULL, NULL, NULL, '$2b$10$BeyPap8shWrmg2r0BhylEOd8sV3CGTkN7V94OlJcvP627iZ5j6336', NULL, 'Customer', 'Active', '2022-09-18 01:35:28', '2022-09-18 01:35:28'),
(724, 'julius@g.com', 'Julius Ndeti', 'Julius Ndeti', 'julius@g.com', '+254780077090', NULL, '', NULL, NULL, NULL, '$2b$10$SMDZ0hRL8TFYNG9ctgNeieSopATRLsK8sCRXEJPj7V9Uunsh8n2Aa', NULL, 'Customer', 'Active', '2022-09-19 02:26:51', '2022-09-19 02:26:51'),
(734, 'eliza20@gmail.com', 'Elizabeth Kamau', '', 'eliza20@gmail.com', '+254780077090', NULL, '', NULL, NULL, NULL, '$2b$10$BeY0gjYfOcoSFLO29e82duFFYynUUU8NnQS8HTZodtzXt04/z7unu', NULL, 'Vendor', 'Active', '2022-09-19 06:12:47', '2022-09-19 06:12:47'),
(744, 'fmbatha2023@gmail.com', 'Francis Mbatha', 'Francis Mbatha', 'fmbatha2023@gmail.com', '+254714639773', NULL, '', NULL, NULL, NULL, '$2b$10$Lbsd.sE9Tqq1h0k6VyoZMe3rQ9H/Lp69DB9xNSDV3u/IsLEIT4GBe', NULL, 'Customer', 'Active', '2022-09-19 07:01:58', '2022-09-19 07:01:58'),
(754, 'gladyswaithaka@gmail.com', 'Gladys karanja', '', 'gladyswaithaka@gmail.com', '+254771 663552', NULL, '', NULL, NULL, NULL, '$2b$10$SGnmAb2n7LGMYrbUx82UTO.tvcsJ/ysvZasQggRw5InWXGgUsbldy', NULL, 'Vendor', 'Active', '2022-09-19 09:42:47', '2022-09-19 09:42:47'),
(764, 'otienoasessa@gmail.com ', 'Zephy ', 'Zephy ', 'otienoasessa@gmail.com ', '+254712437118', NULL, '', NULL, NULL, NULL, '$2b$10$2xwhoo1/J40NB29Fh0MwHuQYyw29ND0iKYIf/lpT/i1Q/Qx/4pobK', NULL, 'Customer', 'Active', '2022-09-19 10:30:32', '2022-09-19 10:30:32'),
(774, 'jamngeny@gmail.com', 'Robert', 'Robert', 'jamngeny@gmail.com', '+254722913640', NULL, '', NULL, NULL, NULL, '$2b$10$g5JLb0U4siaqGLzUWrZfJusF4sr4gkXxruw3.upDBzgAP1tgqXLQ.', NULL, 'Customer', 'Active', '2022-09-19 10:32:52', '2022-09-19 10:32:52'),
(784, 'jamngenyro@gmail.com', 'Robert Omondi Jamngeny', '', 'jamngenyro@gmail.com', '+254722913640', NULL, '', NULL, NULL, NULL, '$2b$10$E/fvnafpUEXyeyB3zXs92.iprOACmNN1HsOrVmPcAqPF3jnqMb9Ce', NULL, 'Vendor', 'Active', '2022-09-19 10:37:03', '2022-09-19 10:37:03'),
(794, 'vaite@mtaani.com', 'Dennis Mutueri', '', 'vaite@mtaani.com', '+254707469808', NULL, '', NULL, NULL, NULL, '$2b$10$jjTamJiN.Afw2VH0aXYmpOAzhN4afZLW3ywMYmGXXJln1ihf/QNua', NULL, 'Vendor', 'Active', '2022-09-19 19:18:59', '2022-09-19 19:18:59'),
(804, 'mbatha2022', 'Francis Mbatha', 'Francis Mbatha', 'mbatha2022', '+254780077090', NULL, '', NULL, NULL, NULL, '$2b$10$34EcFCX/2fA09sAuwQxds.N1dyBdEYFT6uv8PZdvuTFFUrqOi5LFO', NULL, 'Customer', 'Active', '2022-09-19 19:38:55', '2022-09-19 19:38:55'),
(814, 'Dennis ', 'Mutwiri Dennis ', 'Mutwiri Dennis ', 'Dennis ', '+254703917486', NULL, '', NULL, NULL, NULL, '$2b$10$y2cAdFL1rSoKQ4F.uHKQ9.xdBWWw0g5irWqJ6OQfuoXQxPNv9B7He', NULL, 'Customer', 'Active', '2022-09-19 19:45:31', '2022-09-19 19:45:31'),
(824, 'evanskip1298@gmail.com', 'Evans kiplimo', 'Evans kiplimo', 'evanskip1298@gmail.com', '+254792721395', NULL, '', NULL, NULL, NULL, '$2b$10$5AXMpRCtmJQN7GGvntRiRextSgef5Z4.D0zVm5GkGODSE3f5V.0ka', NULL, 'Customer', 'Active', '2022-09-20 06:06:28', '2022-09-20 06:06:28'),
(834, 'petermunya@gmail.com', 'PETER MUNYA', '', 'petermunya@gmail.com', '+254714639773', NULL, '', NULL, NULL, NULL, '$2b$10$Y8jZZ6t9KCFqkXtLc/RJ/ObJogAolOD0w5DCYzgHxjsVyN4T1QNZK', NULL, 'Vendor', 'Active', '2022-09-21 00:47:00', '2022-09-21 00:47:00'),
(844, 'wendy@gmail.com', 'Wendy Carol', '', 'wendy@gmail.com', '+254718354234', NULL, '', NULL, NULL, NULL, '$2b$10$VaHN.YrmINvHgiVUAR5afOckcnp.vtt.7yW8I5JWcTng/Oxp2YkNi', NULL, 'Vendor', 'Active', '2022-09-21 01:29:51', '2022-09-21 01:29:51'),
(854, 'test01@gmail.com', 'Test Account', '', 'test01@gmail.com', '+254714639773', NULL, '', NULL, NULL, NULL, '$2b$10$yH54mD72ZklhCHMmFPlNieKWCeKa9rO3eOA1EugmCirKAODduUQwW', NULL, 'Vendor', 'Active', '2022-09-21 05:39:19', '2022-09-21 05:39:19'),
(864, 'mbatha10', 'Francis Mbatha', 'Francis Mbatha', 'mbatha10', '+254714639773', NULL, '', NULL, NULL, NULL, '$2b$10$GGIU1xNEYbhF5X4/i2mFU.iBB6ktsIIOkgnrbVK9vqeGu93xV7S2m', NULL, 'Customer', 'Active', '2022-09-21 17:11:57', '2022-09-21 17:11:57'),
(874, 'test02@gmail.com', 'Test Test', '', 'test02@gmail.com', '+254714639773', NULL, '', NULL, NULL, NULL, '$2b$10$44WK8jqrZNz6tnEYQWNCEON1cYmlbTjmQy5lKUJpUmapqQTdvk4rK', NULL, 'Vendor', 'Active', '2022-09-21 18:42:51', '2022-09-21 18:42:51'),
(884, 'test03@gmail.com', 'Test 03', '', 'test03@gmail.com', '+254714639773', NULL, '', NULL, NULL, NULL, '$2b$10$P1O2mJiMWB1xmvi4eIg13ednXTPO853NA86X93ui.i7w6sz2BuIjW', NULL, 'Vendor', 'Active', '2022-09-21 19:28:41', '2022-09-21 19:28:41'),
(894, 'mbatha2019', 'Mbatha', 'Mbatha', 'mbatha2019', '+254780077090', NULL, '', NULL, NULL, NULL, '$2b$10$jCWjx..ssA48FGwZbyqqSuVmnayeuwSb35ni7sgRhBMoGyCoVEd6K', NULL, 'Customer', 'Active', '2022-09-22 07:43:19', '2022-09-22 07:43:19'),
(904, 'joy@gmail.com', 'Back Yard', '', 'joy@gmail.com', '+254720093222', NULL, '', NULL, NULL, NULL, '$2b$10$1xmkALAYXm5N7YNG5dV15egCN1asMYSgM485JAl13stiTay5t8jGK', NULL, 'Vendor', 'Active', '2022-09-22 07:58:51', '2022-09-22 07:58:51'),
(914, 'evanscheruiyotyegon@gmail.com', 'Evans', '', 'evanscheruiyotyegon@gmail.com', '+254725743573', NULL, '', NULL, NULL, NULL, '$2b$10$O2R7FFbI2RFOAI/k887ZZ.Ty8o2bJqqbckLeZWcbkzoZg6BWJcKey', NULL, 'Vendor', 'Active', '2022-09-22 08:55:02', '2022-09-22 08:55:02'),
(924, 'akothde@gmail.com', 'Elidah Akoth', '', 'akothde@gmail.com', '+254714639773', NULL, '', NULL, NULL, NULL, '$2b$10$5ENVpDmv6qMaZ5i4muK.UeI.dtcAI9mYZussi8NqPOMg6OmnaEtQm', NULL, 'Vendor', 'Active', '2022-09-23 09:29:54', '2022-09-23 09:29:54'),
(934, 'amuiruri52@gmail.com', 'Alexander Njogu', '', 'amuiruri52@gmail.com', '+254717804795', NULL, '', NULL, NULL, NULL, '$2b$10$NkbowHBSXxzwofxQ.kL4DuEhI8Zr.Rwe0mZ9EaxDUddwzygyH4Gym', NULL, 'Vendor', 'Active', '2022-09-23 10:09:41', '2022-09-23 10:09:41'),
(944, 'Mobilegas31@gmail.com', 'Mobile gas', '', 'Mobilegas31@gmail.com', '+254115884170', NULL, '', NULL, NULL, NULL, '$2b$10$QozTPmgXaEt./OyOMY6dpOKjX/WXDZCgm4XKo4ltjIRJi5aZ7jrVu', NULL, 'Vendor', 'Active', '2022-09-23 16:39:50', '2022-09-23 16:39:50'),
(954, 'shadmusembi475@gmail.com', 'Shad Java', '', 'shadmusembi475@gmail.com', '+254724512561', NULL, '', NULL, NULL, NULL, '$2b$10$MedkgJtjLVQ5CqNTAgQJMuVhCgoHKWhF7i4VwmN/mI.v3x2.Q66Tm', NULL, 'Vendor', 'Active', '2022-09-23 17:15:32', '2022-09-23 17:15:32'),
(964, 'DWFEBG@G.COM', 'qDWAEFGSH', '', 'DWFEBG@G.COM', '+25478878677299', NULL, '', NULL, NULL, NULL, '$2b$10$7nmdgaGP8h.YB/s9pVrj.OP5XTOeawO8AaX89Hc2z1z8bj2UmBaha', NULL, 'Vendor', 'Active', '2022-09-25 01:23:28', '2022-09-25 01:23:28'),
(974, 'TestTest12', 'Test Test', 'Test Test', 'TestTest12', '+254714639773', NULL, '', NULL, NULL, NULL, '$2b$10$0PODEGspafZZ1ForituK.O8H1vfzRU1HKUW46tLNIjz.mTYnwr.GS', NULL, 'Customer', 'Active', '2022-09-25 01:59:24', '2022-09-25 01:59:24'),
(984, 'kama20@gmail.com', 'Kamau', '', 'kama20@gmail.com', '+254780077090', NULL, '', NULL, NULL, NULL, '$2b$10$O04aDzud/Y18rX6sDoRDCOjxw4r3Af.fCAg3jvY/YjFPKthEk67ey', NULL, 'Vendor', 'Active', '2022-09-25 06:35:43', '2022-09-25 06:35:43'),
(994, 'johnstonemwend20@gmail.com', 'Johnstone Mbatha', '', 'johnstonemwend20@gmail.com', '+254714639773', NULL, '', NULL, NULL, NULL, '$2b$10$Se8MbIfsxfSxJ5hCrpMcrOn9O1d9qLEvM/EQq5kGAae0s66ZGu7iG', NULL, 'Vendor', 'Active', '2022-09-25 09:45:04', '2022-09-25 09:45:04'),
(1004, 'twishdenooh@gmail.com', 'Peterson', 'Peterson', 'twishdenooh@gmail.com', '+254703917486', NULL, '', NULL, NULL, NULL, '$2b$10$nliEKLiWM1k0J.CUYb5fSeZz.ZMVk1k.5iW355PffxoVKAuK/.ni.', NULL, 'Customer', 'Active', '2022-09-25 10:05:43', '2022-09-25 10:05:43'),
(1014, 'Op2752@gmail.com', 'Oscar paul', 'Oscar paul', 'Op2752@gmail.com', '+254701056596', NULL, '', NULL, NULL, NULL, '$2b$10$siqLbTdVeJE/4iBq6DRRz.tRedhT0XYw1.pCgXmBkODCp.xrkUaSG', NULL, 'Customer', 'Active', '2022-09-25 10:37:15', '2022-09-25 10:37:15'),
(1024, 'emungai@gmail.com', 'George Mungai', 'George Mungai', 'emungai@gmail.com', '+254710222865', NULL, '', NULL, NULL, NULL, '$2b$10$2GBN2ip7I5.Dkz3dfWirfePbLSJ6IvdCldnT4a3q06Hklwxgoz3Ki', NULL, 'Customer', 'Active', '2022-09-27 05:08:23', '2022-09-27 05:08:23'),
(1034, 'mosesthuku035@gmail.com', 'Moses Thuku', '', 'mosesthuku035@gmail.com', '+254711929868', NULL, '', NULL, NULL, NULL, '$2b$10$6Id0OyWUH6Kdqi3BtBadqeiewPR7H8.SQmAHb1rNTvWuV7Ft.Ru9O', NULL, 'Vendor', 'Active', '2022-09-27 17:13:36', '2022-09-27 17:13:36'),
(1044, 'annshiku@gmail.com', 'Castella Wines and Spirits', '', 'annshiku@gmail.com', '+254788677004', NULL, '', NULL, NULL, NULL, '$2b$10$cOAbNkdxuDbjJa/pEkiy7.QVX6Z0U2clTW7.s6.3xMnlx5S1/N5Iy', NULL, 'Vendor', 'Active', '2022-09-28 14:31:31', '2022-09-28 14:31:31'),
(1054, 'stevesabkilo@gmail.com', 'Dyegi baby shop', '', 'stevesabkilo@gmail.com', '+254112657078', NULL, '', NULL, NULL, NULL, '$2b$10$AYKqkBz3WweFlqszPdorIO6MeXdNA2MgpzQSiwDdqU0wZ/X7Ks59O', NULL, 'Vendor', 'Active', '2022-09-28 14:42:30', '2022-09-28 14:42:30'),
(1064, 'mamaboga08@gmail.com', 'Mama Mboga 20', '', 'mamaboga08@gmail.com', '+254714639773', NULL, '', NULL, NULL, NULL, '$2b$10$J9hoa8Qx8l7MsiINcA0QuuXJxYD7JrMdRcN8AuUM2/ZzzB0ACCuKG', NULL, 'Vendor', 'Active', '2022-09-28 19:33:27', '2022-09-28 19:33:27'),
(1074, 'brnmarks8@gmail.com', 'Brian', '', 'brnmarks8@gmail.com', '+254731824251', NULL, '', NULL, NULL, NULL, '$2b$10$MnujlqhBLd.FCA6xu9NJauGMzfE7XN9ZZQd27QaexIq.pYcB6Im/C', NULL, 'Vendor', 'Active', '2022-09-29 13:23:07', '2022-09-29 13:23:07'),
(1084, 'justusmuayoki33@gmail.com', 'AquaWety Drinking Water', '', 'justusmuayoki33@gmail.com', '+254740853511', NULL, '', NULL, NULL, NULL, '$2b$10$fCCurKduz7he51PzatcRJeoHOH72b5DQExO2QXsDEW5TJ7LHK8GbO', NULL, 'Vendor', 'Active', '2022-09-29 15:06:08', '2022-09-29 15:06:08'),
(1094, 'justusmusyoki33@gmail.com', 'AquaWety Drinking Water ?', '', 'justusmusyoki33@gmail.com', '+254740853511', NULL, '', NULL, NULL, NULL, '$2b$10$r84Bg0csq1Ja4qhJb4cEm.LGj6lKMBrcV/izlOulOT0RWTg9BOchS', NULL, 'Vendor', 'Active', '2022-09-29 15:08:05', '2022-09-29 15:08:05'),
(1104, 'njorogej995@gmail.com', 'John Warari', '', 'njorogej995@gmail.com', '+254715109149', NULL, '', NULL, NULL, NULL, '$2b$10$VPqmPoE2STGI03vpWdPFfuJqqUNid6QnDws6KaSV46nHgAbv/zzyq', NULL, 'Vendor', 'Active', '2022-09-29 16:33:46', '2022-09-29 16:33:46'),
(1114, 'fmbatha2021', 'Francis Mwendwa', 'Francis Mwendwa', 'fmbatha2021', '+254714639773', NULL, '', NULL, NULL, NULL, '$2b$10$7MRatYSdB.czEcUG3/F15.0SjamupHkNX0tpe/E149GtopiDanuGa', NULL, 'Customer', 'Active', '2022-09-30 01:03:30', '2022-09-30 01:03:30'),
(1124, 'mmuchiri760@gmail.com', 'mmuchiri760@gmail.com', '', 'mmuchiri760@gmail.com', '+254790731180', NULL, '', NULL, NULL, NULL, '$2b$10$CLd6e587LgKZtcn1mypEPuoT..gVCO1ATWmMt8oUNXfr0H5t7XPjy', NULL, 'Vendor', 'Active', '2022-09-30 18:47:31', '2022-09-30 18:47:31'),
(1134, 'fmbatha002@gmail.com', 'Francis Mbatha', 'Francis Mbatha', 'fmbatha002@gmail.com', '+254714639773', NULL, '', NULL, NULL, NULL, '$2b$10$zs6zB/HbctcblqWM7Kczb.amtEXWoyy56SM0WaV3R7aEKzsVwWBMC', NULL, 'Customer', 'Active', '2022-09-30 19:24:33', '2022-09-30 19:24:33'),
(1144, 'mamamboga02@gmail.com', 'Mama Mboga 02', '', 'mamamboga02@gmail.com', '+254714639773', NULL, '', NULL, NULL, NULL, '$2b$10$PYGUcNuSNdH9wR8aKGUksexO/J.bkaZKGvJLM..gDVZZXkYWJiER2', NULL, 'Vendor', 'Active', '2022-10-03 20:32:05', '2022-10-03 20:32:05'),
(1154, 'kamguyz2089', 'Francis', 'Francis', 'kamguyz2089', '+254714639773', NULL, '', NULL, NULL, NULL, '$2b$10$s054/Dtr41a8kXg0.ljun.97zdjRFMs0hD5bNhXHsyu.QiKl6JNYm', NULL, 'Customer', 'Active', '2022-10-05 09:21:30', '2022-10-05 09:21:30'),
(1164, 'mureithi12', 'Mureithi', 'Mureithi', 'mureithi12', '+254708347940', NULL, '', NULL, NULL, NULL, '$2b$10$QbjTXiZCKi.w1SeOY3tRCuXdE7933ehAXML.ugFPCSsxyxcnPD3JS', NULL, 'Customer', 'Active', '2022-10-05 09:41:06', '2022-10-05 09:41:06'),
(1174, 'martinmurithi1995@gmail.com', 'Martin Murithi', '', 'martinmurithi1995@gmail.com', '+254708347940', NULL, '', NULL, NULL, NULL, '$2b$10$9nOkw70AH1RcfKEYaUX.FeRTO3571QVBosUyD4na7qv8inLOBRNcO', NULL, 'Vendor', 'Active', '2022-10-05 09:43:08', '2022-10-05 09:43:08'),
(1184, 'ngomo2020', 'Ngomo', 'Ngomo', 'ngomo2020', '+254705874043', NULL, '', NULL, NULL, NULL, '$2b$10$Gqfzlfcq10uB.7G63PtG7eCGe/ejTegvPHWDaaRqCvQE9N9BTj80G', NULL, 'Customer', 'Active', '2022-10-05 09:55:13', '2022-10-05 09:55:13'),
(1194, 'pierremwas2@gmail.com', 'Peter githae', '', 'pierremwas2@gmail.com', '+254790146700', NULL, '', NULL, NULL, NULL, '$2b$10$hG/wRGhuk/aijW3z4JBg/uyEmd1E7sbCEuc8wQns/dKb09k7cC/ei', NULL, 'Vendor', 'Active', '2022-10-05 10:13:18', '2022-10-05 10:13:18'),
(1204, 'Rosemwangi032@gmail.com', 'Rose mwangi', '', 'Rosemwangi032@gmail.com', '+254792935451', NULL, '', NULL, NULL, NULL, '$2b$10$oaQd2nQR1tH0ppWMhjPIcefoBZQ7BOas6YOY18RGtyHn8ocziFgdq', NULL, 'Vendor', 'Active', '2022-10-05 15:41:04', '2022-10-05 15:41:04'),
(1205, 'makoszen@gmail.com', 'Makos Zen', '', 'makoszen@gmail.com', '+254714639773', NULL, '', NULL, NULL, NULL, '$2b$10$1yRSfELzWRJQEtJOoxK.9untDpeEsbGtChA64fsqWyQIacdZedoTy', NULL, 'Vendor', 'Active', '2022-10-06 22:40:31', '2022-10-06 22:40:31'),
(1206, 'andrewmld@yahoo.com', 'Andrew Mulandi', '', 'andrewmld@yahoo.com', '+254714639773', NULL, '', NULL, NULL, NULL, '$2b$10$nGKdTj9oxnELbpkYkA7rcuT7xltrTUphKghRpdjA/UI1Z4gxLOucy', NULL, 'Vendor', 'Active', '2022-10-06 22:46:13', '2022-10-06 22:46:13'),
(1207, 'frankcode20@gmail.com', 'Francis Mbatha', '', 'frankcode20@gmail.com', '+254714639773', NULL, '', NULL, NULL, NULL, '$2b$10$FGOiyZZ9U./ECMy9WiDWCOTjfhaXGXARnDMyp9vIn1rpU0ATkoebm', NULL, 'Admin', 'Active', '2022-10-06 22:59:08', '2022-10-06 22:59:08'),
(1208, 'nicodemus4444@gmail.com', 'Nicodemus Mochama ', '', 'nicodemus4444@gmail.com', '+254700105906', NULL, '', NULL, NULL, NULL, '$2b$10$VmlkKUhPxB6/OT31AMVwieeXzdHZQbLGn5xMTd79YyuVx8g99l5Uu', NULL, 'Vendor', 'Active', '2022-10-07 20:35:17', '2022-10-07 20:35:17'),
(1209, 'inaibei8@gmail.com', 'Irene Naibei', '', 'inaibei8@gmail.com', '+254703164127', NULL, '', NULL, NULL, NULL, '$2b$10$P9NlZa1JOFWTbmhAmlSBaO3vWWVIiyYbj2H5mf45.rxiSwPoF4YKO', NULL, 'Vendor', 'Active', '2022-10-08 12:22:23', '2022-10-08 12:22:23'),
(1210, 'denniswanjuki2015@gmail.com', 'Dennis muchemi', '', 'denniswanjuki2015@gmail.com', '+254728404601', NULL, '', NULL, NULL, NULL, '$2b$10$exBrpRtZndgFyOkasB7BPeoiIOtBV54aacXN48P/0c8p6T2y2fJnu', NULL, 'Vendor', 'Active', '2022-10-08 14:10:40', '2022-10-08 14:10:40'),
(1211, 'mbatha@2024', 'Francis Mbatha', 'Francis Mbatha', 'mbatha@2024', '+254714639773', NULL, '', NULL, NULL, NULL, '$2b$10$s2s1/SvA4H1fp075dFEnaOEo2Gg.wp/OidQSyhL.80bbvkstvpCvK', NULL, 'Customer', 'Active', '2022-10-08 15:13:27', '2022-10-08 15:13:27'),
(1212, 'kariukisa93@gmail.com', 'Karis ', '', 'kariukisa93@gmail.com', '+254717598870', NULL, '', NULL, NULL, NULL, '$2b$10$zf4FghtjztQdXmqyhkMToOvYK0XeZOdo9xenlC6CMDAHKY1ZTbMOq', NULL, 'Vendor', 'Active', '2022-10-08 15:23:50', '2022-10-08 15:23:50'),
(1213, 'Peternyachae70@gmail.com', 'Peter Nyachae', '', 'Peternyachae70@gmail.com', '+254115691174', NULL, '', NULL, NULL, NULL, '$2b$10$DAdrpfPvUw9462gEer6h3.Tij58kJGY5takYI3Nx/yJpTjjW3ApwG', NULL, 'Vendor', 'Active', '2022-10-08 16:43:58', '2022-10-08 16:43:58'),
(1214, 'Mainaedwin925@gmail.com', 'Maina', 'Maina', 'Mainaedwin925@gmail.com', '+254793711325', NULL, '', NULL, NULL, NULL, '$2b$10$xR3xG18Tygqk0gfVyOSLBeq3OaIv96EmJTj90RqN09yZRS6ARzvBG', NULL, 'Customer', 'Active', '2022-10-09 15:22:00', '2022-10-09 15:22:00'),
(1215, 'annmurungi35@gmail.com', 'Ann mugure', '', 'annmurungi35@gmail.com', '+254790145272', NULL, '', NULL, NULL, NULL, '$2b$10$JY1UhTkRD2IqF1p5.vqCJOm3KjgotTOAxRAfPnXp.sB.A1KSKTNxa', NULL, 'Vendor', 'Active', '2022-10-10 08:45:01', '2022-10-10 08:45:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Bookings`
--
ALTER TABLE `Bookings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `CustomerId` (`CustomerId`),
  ADD KEY `UserId` (`UserId`);

--
-- Indexes for table `Businesses`
--
ALTER TABLE `Businesses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`UserId`);

--
-- Indexes for table `CustomerDeposits`
--
ALTER TABLE `CustomerDeposits`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Customers`
--
ALTER TABLE `Customers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `BusinessId` (`BusinessId`),
  ADD KEY `UserId` (`UserId`);

--
-- Indexes for table `Images`
--
ALTER TABLE `Images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `PropertyId` (`PropertyId`);

--
-- Indexes for table `MessageTypes`
--
ALTER TABLE `MessageTypes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Notifications`
--
ALTER TABLE `Notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `BusinessId` (`BusinessId`),
  ADD KEY `UserId` (`UserId`);

--
-- Indexes for table `OrderBids`
--
ALTER TABLE `OrderBids`
  ADD PRIMARY KEY (`id`),
  ADD KEY `OrderId` (`OrderId`),
  ADD KEY `UserId` (`UserId`),
  ADD KEY `CustomerId` (`CustomerId`);

--
-- Indexes for table `OrderPayments`
--
ALTER TABLE `OrderPayments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `OrderId` (`OrderId`),
  ADD KEY `UserId` (`UserId`);

--
-- Indexes for table `Orders`
--
ALTER TABLE `Orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `BusinessId` (`BusinessId`),
  ADD KEY `CustomerId` (`CustomerId`),
  ADD KEY `ProductId` (`ProductId`),
  ADD KEY `UserId` (`UserId`);

--
-- Indexes for table `Payments`
--
ALTER TABLE `Payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `BookingId` (`BookingId`),
  ADD KEY `PropertyId` (`PropertyId`);

--
-- Indexes for table `Payouts`
--
ALTER TABLE `Payouts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `BookingId` (`BookingId`),
  ADD KEY `PropertyId` (`PropertyId`);

--
-- Indexes for table `productmodels`
--
ALTER TABLE `productmodels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ProductRequests`
--
ALTER TABLE `ProductRequests`
  ADD PRIMARY KEY (`id`),
  ADD KEY ` ProductId` (` ProductId`),
  ADD KEY `ProductId` (`ProductId`),
  ADD KEY `SellerId` (`SellerId`),
  ADD KEY `UserId` (`UserId`),
  ADD KEY `BuyerId` (`BuyerId`);

--
-- Indexes for table `Products`
--
ALTER TABLE `Products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `BusinessId` (`BusinessId`),
  ADD KEY `UserId` (`UserId`);

--
-- Indexes for table `Properties`
--
ALTER TABLE `Properties`
  ADD PRIMARY KEY (`id`),
  ADD KEY `host_id` (`host_id`),
  ADD KEY `UserId` (`UserId`);

--
-- Indexes for table `PropertyAddresses`
--
ALTER TABLE `PropertyAddresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `PropertyId` (`PropertyId`);

--
-- Indexes for table `PropertyDescriptions`
--
ALTER TABLE `PropertyDescriptions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `PropertyPhotos`
--
ALTER TABLE `PropertyPhotos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `PropertyPrices`
--
ALTER TABLE `PropertyPrices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `PropertyId` (`PropertyId`);

--
-- Indexes for table `Property_Fees`
--
ALTER TABLE `Property_Fees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Reviews`
--
ALTER TABLE `Reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `BookingId` (`BookingId`),
  ADD KEY `property_id` (`property_id`),
  ADD KEY `PropertyId` (`PropertyId`);

--
-- Indexes for table `RunningOrders`
--
ALTER TABLE `RunningOrders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `OrderId` (`OrderId`),
  ADD KEY `SellerId` (`SellerId`),
  ADD KEY `UserId` (`UserId`);

--
-- Indexes for table `Services`
--
ALTER TABLE `Services`
  ADD PRIMARY KEY (`id`),
  ADD KEY `BusinessId` (`BusinessId`),
  ADD KEY `ServiceTypeSubcategoryId` (`ServiceTypeSubcategoryId`);

--
-- Indexes for table `ServiceTypes`
--
ALTER TABLE `ServiceTypes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ServiceTypeSubcategories`
--
ALTER TABLE `ServiceTypeSubcategories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ServiceTypeId` (`ServiceTypeId`);

--
-- Indexes for table `Staffs`
--
ALTER TABLE `Staffs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `BusinessId` (`BusinessId`);

--
-- Indexes for table `SubscriptionRequests`
--
ALTER TABLE `SubscriptionRequests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`UserId`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Bookings`
--
ALTER TABLE `Bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Businesses`
--
ALTER TABLE `Businesses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=325;

--
-- AUTO_INCREMENT for table `CustomerDeposits`
--
ALTER TABLE `CustomerDeposits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Customers`
--
ALTER TABLE `Customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Images`
--
ALTER TABLE `Images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `MessageTypes`
--
ALTER TABLE `MessageTypes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Notifications`
--
ALTER TABLE `Notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `OrderBids`
--
ALTER TABLE `OrderBids`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `OrderPayments`
--
ALTER TABLE `OrderPayments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Orders`
--
ALTER TABLE `Orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Payments`
--
ALTER TABLE `Payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Payouts`
--
ALTER TABLE `Payouts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `productmodels`
--
ALTER TABLE `productmodels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ProductRequests`
--
ALTER TABLE `ProductRequests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Products`
--
ALTER TABLE `Products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=788;

--
-- AUTO_INCREMENT for table `Properties`
--
ALTER TABLE `Properties`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `PropertyAddresses`
--
ALTER TABLE `PropertyAddresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `PropertyDescriptions`
--
ALTER TABLE `PropertyDescriptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `PropertyPhotos`
--
ALTER TABLE `PropertyPhotos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `PropertyPrices`
--
ALTER TABLE `PropertyPrices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Property_Fees`
--
ALTER TABLE `Property_Fees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Reviews`
--
ALTER TABLE `Reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `RunningOrders`
--
ALTER TABLE `RunningOrders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Services`
--
ALTER TABLE `Services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ServiceTypes`
--
ALTER TABLE `ServiceTypes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ServiceTypeSubcategories`
--
ALTER TABLE `ServiceTypeSubcategories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Staffs`
--
ALTER TABLE `Staffs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `SubscriptionRequests`
--
ALTER TABLE `SubscriptionRequests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1216;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Bookings`
--
ALTER TABLE `Bookings`
  ADD CONSTRAINT `Bookings_ibfk_1` FOREIGN KEY (`CustomerId`) REFERENCES `Customers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Bookings_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `Businesses`
--
ALTER TABLE `Businesses`
  ADD CONSTRAINT `Businesses_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `Customers`
--
ALTER TABLE `Customers`
  ADD CONSTRAINT `Customers_ibfk_1` FOREIGN KEY (`BusinessId`) REFERENCES `Businesses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Customers_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `Images`
--
ALTER TABLE `Images`
  ADD CONSTRAINT `Images_ibfk_1` FOREIGN KEY (`PropertyId`) REFERENCES `Properties` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `Notifications`
--
ALTER TABLE `Notifications`
  ADD CONSTRAINT `Notifications_ibfk_1` FOREIGN KEY (`BusinessId`) REFERENCES `Businesses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Notifications_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `OrderBids`
--
ALTER TABLE `OrderBids`
  ADD CONSTRAINT `OrderBids_ibfk_1` FOREIGN KEY (`OrderId`) REFERENCES `Orders` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `OrderBids_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `OrderBids_ibfk_3` FOREIGN KEY (`CustomerId`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `OrderPayments`
--
ALTER TABLE `OrderPayments`
  ADD CONSTRAINT `OrderPayments_ibfk_1` FOREIGN KEY (`OrderId`) REFERENCES `Orders` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `OrderPayments_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `Orders`
--
ALTER TABLE `Orders`
  ADD CONSTRAINT `Orders_ibfk_1` FOREIGN KEY (`BusinessId`) REFERENCES `Businesses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Orders_ibfk_2` FOREIGN KEY (`CustomerId`) REFERENCES `Customers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Orders_ibfk_3` FOREIGN KEY (`ProductId`) REFERENCES `Products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Orders_ibfk_4` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `Payments`
--
ALTER TABLE `Payments`
  ADD CONSTRAINT `Payments_ibfk_1` FOREIGN KEY (`BookingId`) REFERENCES `Bookings` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Payments_ibfk_2` FOREIGN KEY (`PropertyId`) REFERENCES `Properties` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `Payouts`
--
ALTER TABLE `Payouts`
  ADD CONSTRAINT `Payouts_ibfk_1` FOREIGN KEY (`BookingId`) REFERENCES `Bookings` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Payouts_ibfk_2` FOREIGN KEY (`PropertyId`) REFERENCES `Properties` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `ProductRequests`
--
ALTER TABLE `ProductRequests`
  ADD CONSTRAINT `ProductRequests_ibfk_1` FOREIGN KEY (` ProductId`) REFERENCES `Products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ProductRequests_ibfk_2` FOREIGN KEY (`ProductId`) REFERENCES `Products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ProductRequests_ibfk_3` FOREIGN KEY (`SellerId`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ProductRequests_ibfk_4` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ProductRequests_ibfk_5` FOREIGN KEY (`BuyerId`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `Products`
--
ALTER TABLE `Products`
  ADD CONSTRAINT `Products_ibfk_1` FOREIGN KEY (`BusinessId`) REFERENCES `Businesses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Products_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `Properties`
--
ALTER TABLE `Properties`
  ADD CONSTRAINT `Properties_ibfk_1` FOREIGN KEY (`host_id`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Properties_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `PropertyAddresses`
--
ALTER TABLE `PropertyAddresses`
  ADD CONSTRAINT `PropertyAddresses_ibfk_1` FOREIGN KEY (`PropertyId`) REFERENCES `Properties` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `PropertyPrices`
--
ALTER TABLE `PropertyPrices`
  ADD CONSTRAINT `PropertyPrices_ibfk_1` FOREIGN KEY (`PropertyId`) REFERENCES `Properties` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `Reviews`
--
ALTER TABLE `Reviews`
  ADD CONSTRAINT `Reviews_ibfk_1` FOREIGN KEY (`BookingId`) REFERENCES `Bookings` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Reviews_ibfk_2` FOREIGN KEY (`property_id`) REFERENCES `Properties` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Reviews_ibfk_3` FOREIGN KEY (`PropertyId`) REFERENCES `Properties` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `RunningOrders`
--
ALTER TABLE `RunningOrders`
  ADD CONSTRAINT `RunningOrders_ibfk_1` FOREIGN KEY (`OrderId`) REFERENCES `Orders` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `RunningOrders_ibfk_2` FOREIGN KEY (`SellerId`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `RunningOrders_ibfk_3` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `Services`
--
ALTER TABLE `Services`
  ADD CONSTRAINT `Services_ibfk_1` FOREIGN KEY (`BusinessId`) REFERENCES `Businesses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Services_ibfk_2` FOREIGN KEY (`ServiceTypeSubcategoryId`) REFERENCES `ServiceTypeSubcategories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `ServiceTypeSubcategories`
--
ALTER TABLE `ServiceTypeSubcategories`
  ADD CONSTRAINT `ServiceTypeSubcategories_ibfk_1` FOREIGN KEY (`ServiceTypeId`) REFERENCES `ServiceTypes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `Staffs`
--
ALTER TABLE `Staffs`
  ADD CONSTRAINT `Staffs_ibfk_1` FOREIGN KEY (`BusinessId`) REFERENCES `Businesses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `SubscriptionRequests`
--
ALTER TABLE `SubscriptionRequests`
  ADD CONSTRAINT `SubscriptionRequests_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
