-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: database_acaps
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article` (
  `idArticle` int NOT NULL AUTO_INCREMENT,
  `codeArticle` varchar(45) DEFAULT NULL,
  `nom` varchar(45) DEFAULT NULL,
  `quantite` int DEFAULT NULL,
  `typeValidation` int DEFAULT NULL,
  `seuilleMin` int DEFAULT NULL,
  `seuilleAlerte` int DEFAULT NULL,
  `fournisseur` varchar(45) DEFAULT NULL,
  `entre` int DEFAULT NULL,
  `endommage` int DEFAULT NULL,
  `sortie` int DEFAULT NULL,
  `fourniture` varchar(45) DEFAULT NULL,
  `actions` varchar(45) DEFAULT NULL,
  `prix` int DEFAULT NULL,
  `facture` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idArticle`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (19,'A500','USB',7,NULL,10,15,'oujari',180,1,0,'Informatique',NULL,5,NULL),(20,'A501','cable',2,NULL,10,15,'moataz',10,0,0,'Bureautique',NULL,5,NULL);
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articleendomage`
--

DROP TABLE IF EXISTS `articleendomage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articleendomage` (
  `idarticleEndomage` int NOT NULL AUTO_INCREMENT,
  `quantite` int DEFAULT NULL,
  `codeArticle` varchar(45) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `fichier` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idarticleEndomage`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articleendomage`
--

LOCK TABLES `articleendomage` WRITE;
/*!40000 ALTER TABLE `articleendomage` DISABLE KEYS */;
INSERT INTO `articleendomage` VALUES (24,10,'A500','24_photo.png','24_doc.pdf');
/*!40000 ALTER TABLE `articleendomage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `collaborateur`
--

DROP TABLE IF EXISTS `collaborateur`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `collaborateur` (
  `idCollaborateu` int NOT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `direction` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idCollaborateu`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collaborateur`
--

LOCK TABLES `collaborateur` WRITE;
/*!40000 ALTER TABLE `collaborateur` DISABLE KEYS */;
INSERT INTO `collaborateur` VALUES (1,'RABHI EL Mehdi','123456','DS');
/*!40000 ALTER TABLE `collaborateur` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `demande`
--

DROP TABLE IF EXISTS `demande`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `demande` (
  `idDemande` int NOT NULL AUTO_INCREMENT,
  `dateDemande` date DEFAULT NULL,
  `etat` varchar(45) DEFAULT NULL,
  `designation` varchar(45) DEFAULT NULL,
  `actions` varchar(45) DEFAULT NULL,
  `collaborateur` varchar(45) DEFAULT NULL,
  `observation` varchar(1000) DEFAULT NULL,
  `datevalidationrefus` date DEFAULT NULL,
  PRIMARY KEY (`idDemande`)
) ENGINE=InnoDB AUTO_INCREMENT=168 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `demande`
--

LOCK TABLES `demande` WRITE;
/*!40000 ALTER TABLE `demande` DISABLE KEYS */;
INSERT INTO `demande` VALUES (166,'2021-10-03','validé',NULL,'','ACAPS','','2021-10-03'),(167,'2021-10-03','validé',NULL,'','ACAPS','','2021-10-03');
/*!40000 ALTER TABLE `demande` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `demande_artickes`
--

DROP TABLE IF EXISTS `demande_artickes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `demande_artickes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idDemande` int DEFAULT NULL,
  `idarticle` varchar(45) DEFAULT NULL,
  `qte` int DEFAULT NULL,
  `beneficier` varchar(45) DEFAULT NULL,
  `validation` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=145 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `demande_artickes`
--

LOCK TABLES `demande_artickes` WRITE;
/*!40000 ALTER TABLE `demande_artickes` DISABLE KEYS */;
INSERT INTO `demande_artickes` VALUES (142,166,'A500',9,'RABHI EL Mehdi','valide'),(143,166,'A501',8,'RABHI EL Mehdi','valide'),(144,167,'A500',4,'RABHI EL Mehdi','valide');
/*!40000 ALTER TABLE `demande_artickes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fourniture`
--

DROP TABLE IF EXISTS `fourniture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fourniture` (
  `idfourniture` int NOT NULL AUTO_INCREMENT,
  `nomFourniture` varchar(45) DEFAULT NULL,
  `action` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idfourniture`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fourniture`
--

LOCK TABLES `fourniture` WRITE;
/*!40000 ALTER TABLE `fourniture` DISABLE KEYS */;
INSERT INTO `fourniture` VALUES (23,'Informatique',NULL),(25,'Bureautique',NULL),(38,'',NULL);
/*!40000 ALTER TABLE `fourniture` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historiquearticle`
--

DROP TABLE IF EXISTS `historiquearticle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historiquearticle` (
  `idhistoriquearticle` int NOT NULL AUTO_INCREMENT,
  `prix` int DEFAULT NULL,
  `quantite` int DEFAULT NULL,
  `fournisseur` varchar(45) DEFAULT NULL,
  `idarticle` int DEFAULT NULL,
  `dateajout` date DEFAULT NULL,
  `dateexp` date DEFAULT NULL,
  `dispo` int DEFAULT NULL,
  PRIMARY KEY (`idhistoriquearticle`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historiquearticle`
--

LOCK TABLES `historiquearticle` WRITE;
/*!40000 ALTER TABLE `historiquearticle` DISABLE KEYS */;
INSERT INTO `historiquearticle` VALUES (22,5,10,'moataz',19,'2021-10-03','2021-12-10',7),(23,5,10,'oujari',19,'2021-10-02','2021-10-02',0),(24,5,10,'moataz',20,'2021-10-03','2021-12-02',2);
/*!40000 ALTER TABLE `historiquearticle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventaire`
--

DROP TABLE IF EXISTS `inventaire`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventaire` (
  `idinventaire` int NOT NULL,
  `budget` int DEFAULT NULL,
  PRIMARY KEY (`idinventaire`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventaire`
--

LOCK TABLES `inventaire` WRITE;
/*!40000 ALTER TABLE `inventaire` DISABLE KEYS */;
/*!40000 ALTER TABLE `inventaire` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `responsablefourniture`
--

DROP TABLE IF EXISTS `responsablefourniture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `responsablefourniture` (
  `idResponsableFourniture` int NOT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `direction` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idResponsableFourniture`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `responsablefourniture`
--

LOCK TABLES `responsablefourniture` WRITE;
/*!40000 ALTER TABLE `responsablefourniture` DISABLE KEYS */;
INSERT INTO `responsablefourniture` VALUES (1,'ACAPS','acaps','DS'),(2,'EL Mehdi','mehdi223','DS');
/*!40000 ALTER TABLE `responsablefourniture` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `responsablestocck`
--

DROP TABLE IF EXISTS `responsablestocck`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `responsablestocck` (
  `idResponsableStocck` int NOT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `direction` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idResponsableStocck`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `responsablestocck`
--

LOCK TABLES `responsablestocck` WRITE;
/*!40000 ALTER TABLE `responsablestocck` DISABLE KEYS */;
INSERT INTO `responsablestocck` VALUES (1,'stock','stock','DS');
/*!40000 ALTER TABLE `responsablestocck` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `idusers` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `role` varchar(45) DEFAULT NULL,
  `idUser` int DEFAULT NULL,
  PRIMARY KEY (`idusers`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','admin','RF',1),(2,'rabhi','mehdi','C',1),(3,'stock','stock','RS',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-03 23:59:03
