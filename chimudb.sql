-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 13-12-2023 a las 05:39:15
-- Versión del servidor: 5.7.36-log
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `chimudb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra`
--

DROP TABLE IF EXISTS `compra`;
CREATE TABLE IF NOT EXISTS `compra` (
  `id_compra` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad_compra` int(11) NOT NULL,
  `monto_compra` decimal(8,2) NOT NULL,
  `fecha_compra` datetime NOT NULL,
  PRIMARY KEY (`id_compra`),
  KEY `usuario_x_compra_idx` (`id_usuario`),
  KEY `producto_x_compra_idx` (`id_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

DROP TABLE IF EXISTS `pedido`;
CREATE TABLE IF NOT EXISTS `pedido` (
  `id_pedido` int(11) NOT NULL AUTO_INCREMENT,
  `id_compra` int(11) NOT NULL,
  `id_repartidor` int(11) NOT NULL,
  `producto_listo` tinyint(4) NOT NULL,
  `fecha_pedido` datetime NOT NULL,
  `fecha_recibido` datetime DEFAULT NULL,
  PRIMARY KEY (`id_pedido`),
  KEY `compra_x_pedido_idx` (`id_compra`),
  KEY `repartidor_x_pedido_idx` (`id_repartidor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

DROP TABLE IF EXISTS `producto`;
CREATE TABLE IF NOT EXISTS `producto` (
  `id_producto` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(45) NOT NULL,
  `descripcion_producto` varchar(255) NOT NULL,
  `precio_producto` decimal(8,2) NOT NULL,
  `cantidad` int(11) NOT NULL,
  PRIMARY KEY (`id_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `promos`
--

DROP TABLE IF EXISTS `promos`;
CREATE TABLE IF NOT EXISTS `promos` (
  `id_promos` int(11) NOT NULL AUTO_INCREMENT,
  `id_producto` int(11) NOT NULL,
  `monto_promo` decimal(8,2) NOT NULL,
  `fecha_inicio` datetime NOT NULL,
  `fecha_fin` datetime DEFAULT NULL,
  PRIMARY KEY (`id_promos`),
  KEY `producto_x_promos_idx` (`id_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `repartidor`
--

DROP TABLE IF EXISTS `repartidor`;
CREATE TABLE IF NOT EXISTS `repartidor` (
  `id_repartidor` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_repartidor` varchar(255) NOT NULL,
  `correo_repartidor` varchar(255) NOT NULL,
  `telefono_repartidor` varchar(10) NOT NULL,
  `direccion_repartidor` text NOT NULL,
  `estado_repartidor` varchar(45) NOT NULL,
  PRIMARY KEY (`id_repartidor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_usuario` varchar(255) NOT NULL,
  `correo_usuario` varchar(255) NOT NULL,
  `telefono_usuario` varchar(10) NOT NULL,
  `direccion_usuario` text NOT NULL,
  `password` varchar(60) NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `nombre_usuario_UNIQUE` (`nombre_usuario`),
  UNIQUE KEY `correo_usuario_UNIQUE` (`correo_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nombre_usuario`, `correo_usuario`, `telefono_usuario`, `direccion_usuario`, `password`) VALUES
(1, 'mauloco', 'maumikery@hotmail.com', '9625295926', 'calle rosas', '$2a$10$OVQC7NHz420FqcedPOiMye8c3xX4pzQUF8DsF53FAb3MULjSPEi9.'),
(5, 'molote', 'maumikery@gmail.com', '123456789', 'calle rose', '$2a$10$hU31SlDKyUWloBfMKYyNxeIqMObh5Y5sZ5pKyqUQiDcr0dBm.ePMq'),
(6, 'mikery54', 'mikery54@hotmail.com', '9625295955', 'las villas de comitan', '$2a$10$.f3eBfeNSRlcmcxff4OkEewBinuoX0ynMbyXKU/b7YE.7nHmRsNR2'),
(7, 'gomezMau', 'mau123@hotmail.com', '9625295912', 'las rosas', '$2a$10$KQyu5uPhHMIRrB8MX5TgUeSbhnEFLgZBvZJAIZuEzXYb3730SVWIm'),
(8, 'mauriciomikery', 'maugomez19@hotmail.com', '9625495912', 'calle las rosas, colonia torres', '$2a$10$uh2q5Jmw.RhuaNHiS8my8.OHI9wtV.PBXk0af58yUw4tFA9py2A0a'),
(9, 'mikery20', 'mikery20@hotmail.com', '9625468978', 'calle las rosas, colonia torres', '$2a$10$GtzERVE3fA3T8.WlzwFJxOaxOhUbevsUOxehR6iuli4DFkphZ8soe');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `compra`
--
ALTER TABLE `compra`
  ADD CONSTRAINT `producto_x_compra` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id_producto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `usuario_x_compra` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `compra_x_pedido` FOREIGN KEY (`id_compra`) REFERENCES `compra` (`id_compra`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `repartidor_x_pedido` FOREIGN KEY (`id_repartidor`) REFERENCES `repartidor` (`id_repartidor`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `promos`
--
ALTER TABLE `promos`
  ADD CONSTRAINT `producto_x_promos` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id_producto`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
