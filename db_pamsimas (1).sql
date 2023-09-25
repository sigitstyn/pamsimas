-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 25, 2023 at 06:18 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_pamsimas`
--

-- --------------------------------------------------------

--
-- Table structure for table `banners`
--

CREATE TABLE `banners` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE `invoice` (
  `id_invoice` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `bulan` int(2) NOT NULL,
  `tahun` int(4) NOT NULL,
  `jumlah_meteran` int(11) NOT NULL,
  `nama_pencatat` varchar(20) NOT NULL,
  `abonamen` int(11) NOT NULL,
  `kekurangan` int(11) NOT NULL,
  `total_biaya` int(11) NOT NULL,
  `jumlah_bayar` int(11) NOT NULL,
  `status_pembayaran` varchar(20) NOT NULL,
  `nama_penarik` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `invoice`
--

INSERT INTO `invoice` (`id_invoice`, `id`, `bulan`, `tahun`, `jumlah_meteran`, `nama_pencatat`, `abonamen`, `kekurangan`, `total_biaya`, `jumlah_bayar`, `status_pembayaran`, `nama_penarik`) VALUES
(1, 3, 2, 2023, 16, 'Alvino', 5000, 0, 30000, 0, 'BELUM LUNAS', 'Sigit'),
(2, 14, 2, 0, 0, '', 0, 0, 0, 0, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `pelanggan`
--

CREATE TABLE `pelanggan` (
  `id` int(100) NOT NULL,
  `no_pelanggan` int(20) NOT NULL,
  `nama_pelanggan` varchar(50) NOT NULL,
  `alamat_pelanggan` varchar(50) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL,
  `kategori` varchar(10) NOT NULL,
  `qrCode` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pelanggan`
--

INSERT INTO `pelanggan` (`id`, `no_pelanggan`, `nama_pelanggan`, `alamat_pelanggan`, `username`, `password`, `kategori`, `qrCode`) VALUES
(0, 1003, 'Sigit', 'Kp. Ngrembel Rt.03/Rw.07 Gunungpati', 'sigitstyn', '$2y$10$DYp8npEZ0X7sFEr2VYENAelpuoaMPgua3qt5olflJmw9TOMVuIP3O', 'U', ''),
(3, 100002, 'Ahmad Mahfud', 'Kp. Ngrembel RT. 01 RW. 07', 'ahmadmahfud', '$2y$10$Sa9INJRw73hOT5365y1HWenCw7KbwrZaCpAUujNlWZ4I2v5CjE6ji', 'U', '1'),
(14, 100003, 'Al', 'Kp. Ngrembel RT. 03', 'alvino', '$2y$10$f6f3wOyabewH8tDZ3mBMv.xnovqtiUmVLsug0flG.nuvs0skHB9py', 'A', '');

-- --------------------------------------------------------

--
-- Table structure for table `pengaduan`
--

CREATE TABLE `pengaduan` (
  `id` int(100) NOT NULL,
  `nama_pelapor` varchar(30) NOT NULL,
  `kontak_pelapor` varchar(30) NOT NULL,
  `alamat` varchar(100) NOT NULL,
  `keterangan` varchar(100) NOT NULL,
  `createdAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pengaduan`
--

INSERT INTO `pengaduan` (`id`, `nama_pelapor`, `kontak_pelapor`, `alamat`, `keterangan`, `createdAt`) VALUES
(1, 'Sigit', '087705902302', 'Kp. Ngrembel RT. 02', 'Air Mampet', '2023-02-16 20:35:05'),
(20, 'Sigit', '87705902302', 'Kp. Ngrembel RT 02', 'Coba', '2023-02-26 18:22:42'),
(21, 'Alvino', '85339393838', 'Kp. Ngrembel Rt.03', 'Cobain', '2023-02-26 18:26:08');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(100) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `username`, `password`, `role`) VALUES
(3, 'Sigit Setyo Nugroho', '', 'admin', '$2y$10$bjGI4URCAllCtFE6tMlJ4eMQyXQpvMccTKV.letVsc4JeveUQ/25q', 'admin'),
(4, 'Alvino', 'Ersyahdana', 'alvino', '$2y$10$LtWqbDYTjiBLYHn0O2J7XeE5wO5YxkpkdQNzjxnVf2MA9BBNhYh8a', 'penarik'),
(6, 'Ojan', 'sssss', 'ojans', '$2y$10$D7Kt/xw4577N7ec3F5Y4nu4nn0YWf1RZYj.nDPevIht1zvVxdLygK', 'pencatat');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`id_invoice`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `pelanggan`
--
ALTER TABLE `pelanggan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pengaduan`
--
ALTER TABLE `pengaduan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banners`
--
ALTER TABLE `banners`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `id_invoice` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `pengaduan`
--
ALTER TABLE `pengaduan`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `invoice`
--
ALTER TABLE `invoice`
  ADD CONSTRAINT `invoice_ibfk_1` FOREIGN KEY (`id`) REFERENCES `pelanggan` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
