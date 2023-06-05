-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  Dim 28 mai 2023 à 02:56
-- Version du serveur :  5.7.19
-- Version de PHP :  5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `rh`
--

-- --------------------------------------------------------

--
-- Structure de la table `autredemande`
--

DROP TABLE IF EXISTS `autredemande`;
CREATE TABLE IF NOT EXISTS `autredemande` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(70) NOT NULL,
  `mois_annee` varchar(7) NOT NULL,
  `langue` varchar(20) NOT NULL,
  `matricule` varchar(10) NOT NULL,
  `name` varchar(40) NOT NULL,
  `id_en` int(11) NOT NULL,
  `grade` varchar(20) NOT NULL,
  `pieces_jointes` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `autredemande`
--

INSERT INTO `autredemande` (`id`, `type`, `mois_annee`, `langue`, `matricule`, `name`, `id_en`, `grade`, `pieces_jointes`) VALUES
(6, 'Liste des services', '02/2023', 'Français', '678', 'abess ben abess', 21, 'A', 'rien rien rien'),
(5, 'test', '12/2022', 'français', '1111', 'abes', 13, 'C', 'test test');

-- --------------------------------------------------------

--
-- Structure de la table `calculnbrhr`
--

DROP TABLE IF EXISTS `calculnbrhr`;
CREATE TABLE IF NOT EXISTS `calculnbrhr` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name_enseignant` varchar(30) NOT NULL,
  `id_ensiegnant` int(11) NOT NULL,
  `role` varchar(30) NOT NULL,
  `nbr_heureCour` int(11) NOT NULL,
  `nbr_heureTd` int(11) NOT NULL,
  `nbr_heureTp` int(11) NOT NULL,
  `prixtt` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `calculnbrhr`
--

INSERT INTO `calculnbrhr` (`id`, `name_enseignant`, `id_ensiegnant`, `role`, `nbr_heureCour`, `nbr_heureTd`, `nbr_heureTp`, `prixtt`) VALUES
(2, 'abess ben abess', 21, 'valcataire', 10, 15, 20, 1175);

-- --------------------------------------------------------

--
-- Structure de la table `congie`
--

DROP TABLE IF EXISTS `congie`;
CREATE TABLE IF NOT EXISTS `congie` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(100) NOT NULL,
  `matricule` varchar(30) NOT NULL,
  `name` varchar(25) NOT NULL,
  `cin` int(8) NOT NULL,
  `grade` varchar(100) NOT NULL,
  `poste` varchar(30) NOT NULL,
  `nbrjour` int(11) NOT NULL,
  `date_deb` varchar(10) NOT NULL,
  `date_fin` varchar(10) NOT NULL,
  `adresse` varchar(50) NOT NULL,
  `zipcode` varchar(5) NOT NULL,
  `num_tel` int(8) NOT NULL,
  `papier` varchar(255) NOT NULL,
  `id_en` varchar(10) NOT NULL,
  `etat` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `congie`
--

INSERT INTO `congie` (`id`, `type`, `matricule`, `name`, `cin`, `grade`, `poste`, `nbrjour`, `date_deb`, `date_fin`, `adresse`, `zipcode`, `num_tel`, `papier`, `id_en`, `etat`) VALUES
(15, 'congie maladie', '678', 'abess ben abess', 12345678, 'A', 'informatique', 12, '2023-06-01', '2023-06-02', 'gafsa', '2100', 23456789, 'rien rien rien', '21', 'accepter');

-- --------------------------------------------------------

--
-- Structure de la table `demanagment`
--

DROP TABLE IF EXISTS `demanagment`;
CREATE TABLE IF NOT EXISTS `demanagment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `matricule1` varchar(10) NOT NULL,
  `name_enseignant1` varchar(30) NOT NULL,
  `num_tel1` varchar(8) NOT NULL,
  `orig_societe1` varchar(40) NOT NULL,
  `fac1` varchar(30) NOT NULL,
  `Grade1` varchar(10) NOT NULL,
  `date_grade1` varchar(10) NOT NULL,
  `specialite1` varchar(30) NOT NULL,
  `date_inscrit_fac1` varchar(10) NOT NULL,
  `etablis_demande1` varchar(40) NOT NULL,
  `matricule2` varchar(10) NOT NULL,
  `name_enseignant2` varchar(30) NOT NULL,
  `num_tel2` varchar(8) NOT NULL,
  `orig_societe2` varchar(40) NOT NULL,
  `fac2` varchar(30) NOT NULL,
  `Grade2` varchar(10) NOT NULL,
  `date_grade2` varchar(10) NOT NULL,
  `specialite2` varchar(30) NOT NULL,
  `date_inscrit_fac2` varchar(10) NOT NULL,
  `etablis_demande2` varchar(40) NOT NULL,
  `id_en` int(11) NOT NULL,
  `etat` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `demanagment`
--

INSERT INTO `demanagment` (`id`, `matricule1`, `name_enseignant1`, `num_tel1`, `orig_societe1`, `fac1`, `Grade1`, `date_grade1`, `specialite1`, `date_inscrit_fac1`, `etablis_demande1`, `matricule2`, `name_enseignant2`, `num_tel2`, `orig_societe2`, `fac2`, `Grade2`, `date_grade2`, `specialite2`, `date_inscrit_fac2`, `etablis_demande2`, `id_en`, `etat`) VALUES
(2, '1111', 'abes', '23456789', 'fseg', 'fseg', 'C', '2022-12-10', 'informatique', '2021-12-10', 'iset', '1656', 'rami', '46576890', 'iset', 'fseg', 'C', '2022-02-10', 'informatique', '2019-12-10', 'fseg', 13, 'en cours...'),
(3, '678', 'abess ben abess', '24567888', 'fba', 'iset gafsa', 'A', '2021-01-01', 'info', '2022-01-01', 'fba', '1234', 'nacer ben nacer', '23122312', 'iset kelibia', 'iset kelibia', 'A', '2022-01-01', 'info', '2022-02-01', 'fba gafsa', 21, 'en cours...');

-- --------------------------------------------------------

--
-- Structure de la table `formation`
--

DROP TABLE IF EXISTS `formation`;
CREATE TABLE IF NOT EXISTS `formation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(40) NOT NULL,
  `type` varchar(20) NOT NULL,
  `date_deb` varchar(10) NOT NULL,
  `date_fin` varchar(10) NOT NULL,
  `email` varchar(30) NOT NULL,
  `name_en` varchar(25) NOT NULL,
  `id_en` int(11) NOT NULL,
  `file` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `formation`
--

INSERT INTO `formation` (`id`, `title`, `type`, `date_deb`, `date_fin`, `email`, `name_en`, `id_en`, `file`) VALUES
(1, 'formation php', 'dev web', '12/12/23', '02/01/24', 'test@test.com', 'test', 13, 'upload/formation/645990933d532-1683591315.jpg'),
(2, 'formation angular and php', 'web dev', '2023-05-10', '2023-05-20', 'abes@gmail.com', 'abess ben abess', 21, 'upload/formation/64599cee8fedf-1683594478.jpg'),
(3, 'react', 'informatique', '2023-05-29', '2023-05-31', 'moudi@gmail.com', 'moudi fethi', 24, 'upload/formation/646d3927b863d-1684879655.png');

-- --------------------------------------------------------

--
-- Structure de la table `inscrit_formation`
--

DROP TABLE IF EXISTS `inscrit_formation`;
CREATE TABLE IF NOT EXISTS `inscrit_formation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(80) NOT NULL,
  `type` varchar(50) NOT NULL,
  `id_formation` int(11) NOT NULL,
  `id_en` int(11) NOT NULL,
  `nom_en` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `inscrit_formation`
--

INSERT INTO `inscrit_formation` (`id`, `title`, `type`, `id_formation`, `id_en`, `nom_en`) VALUES
(7, 'formation angular and php', 'web dev', 2, 21, 'abess ben abess');

-- --------------------------------------------------------

--
-- Structure de la table `repris_travail`
--

DROP TABLE IF EXISTS `repris_travail`;
CREATE TABLE IF NOT EXISTS `repris_travail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `grade` varchar(20) NOT NULL,
  `date_repris` varchar(10) NOT NULL,
  `type` varchar(50) NOT NULL,
  `date_deb` varchar(10) NOT NULL,
  `date_fin` varchar(10) NOT NULL,
  `cause` varchar(100) NOT NULL,
  `id_en` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `repris_travail`
--

INSERT INTO `repris_travail` (`id`, `name`, `grade`, `date_repris`, `type`, `date_deb`, `date_fin`, `cause`, `id_en`) VALUES
(2, 'abess ben abess', 'A', '2023-05-27', 'Vacances de repos annuelles', '2023-05-22', '2023-05-26', 'Vacances annuelles', 21);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `pwd` varchar(30) NOT NULL,
  `role` varchar(20) NOT NULL,
  `cin` varchar(8) NOT NULL,
  `date_naissance` varchar(10) NOT NULL,
  `matricule` varchar(20) NOT NULL,
  `situation` varchar(20) NOT NULL,
  `adresse_postale` varchar(50) NOT NULL,
  `grade` varchar(20) NOT NULL,
  `categorie` varchar(20) NOT NULL,
  `certif` varchar(40) NOT NULL,
  `niveau_educ` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `pwd`, `role`, `cin`, `date_naissance`, `matricule`, `situation`, `adresse_postale`, `grade`, `categorie`, `certif`, `niveau_educ`) VALUES
(1, 'admin admin', 'admin@gmail.com', 'admin', 'directeur', '6879555', '1980-06-04', '12345', 'Marie', 'gafsa 2100', 'aaa', 'aaa', 'aaa', 'aaa'),
(21, 'abess ben abess', 'abes@gmail.com', 'abes', 'valcataire', '9988776', '1980-06-04', '678', 'Marie', 'gafsa', 'A', 'informatique', 'Ingieneur', 'Bac +5'),
(24, 'moudi fethi', 'moudi@gmail.com', 'moudi', 'rh', '9771234', '1980-06-04', '2121', 'Marie', 'Gafsa 2151', 'Technologue', 'informatique', 'Technologue', 'bac +5');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
