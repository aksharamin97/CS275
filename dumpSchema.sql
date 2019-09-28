CREATE DATABASE  IF NOT EXISTS `cs275` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `cs275`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: lab5
-- ------------------------------------------------------
-- Server version	5.7.17-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `course` (
  `COURSE_ID` varchar(10) NOT NULL,
  `COURSE_DESC` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`COURSE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES ('cs161','Intoduction to Computing'),('cs171','Computer Programming I'),('cs172','Computer Programming II'),('cs260','Data Structures and Algorithms'),('cs265','Adv Programming Tools and Techniques'),('cs350','Software Design'),('cs461','Database Systems');
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grades`
--

DROP TABLE IF EXISTS `grades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `grades` (
  `COURSE_ID` varchar(10) DEFAULT NULL,
  `STUDENT_ID` int(11) DEFAULT NULL,
  `TERM` varchar(10) DEFAULT NULL,
  `GRADE` char(1) DEFAULT NULL,
  UNIQUE KEY `COURSE_ID` (`COURSE_ID`,`STUDENT_ID`,`TERM`),
  UNIQUE KEY `COURSE_ID_2` (`COURSE_ID`,`STUDENT_ID`,`TERM`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grades`
--

LOCK TABLES `grades` WRITE;
/*!40000 ALTER TABLE `grades` DISABLE KEYS */;
INSERT INTO `grades` VALUES ('cs161',1,'Fall16','A'),('cs161',2,'Fall16','A'),('cs161',3,'Fall16','A'),('cs161',4,'Fall16','B'),('cs161',5,'Fall16','B'),('cs161',6,'Fall16','A'),('cs161',7,'Fall16','A'),('cs161',8,'Fall16','A'),('cs161',9,'Fall16','A'),('cs161',10,'Fall16','A'),('cs171',1,'Fall16','B'),('cs171',2,'Fall16','B'),('cs171',3,'Fall16','A'),('cs171',4,'Fall16','C'),('cs171',5,'Fall16','B'),('cs171',6,'Fall16','C'),('cs171',7,'Fall16','A'),('cs171',8,'Fall16','D'),('cs171',9,'Fall16','F'),('cs171',10,'Fall16','B'),('cs172',1,'Winter16','A'),('cs172',2,'Winter16','B'),('cs172',3,'Winter16','A'),('cs172',4,'Winter16','B'),('cs172',5,'Winter16','C'),('cs172',6,'Winter16','C'),('cs172',7,'Winter16','A'),('cs172',8,'Winter16','C'),('cs171',9,'Winter16','C'),('cs172',10,'Winter16','D'),('cs260',1,'Winter16','A'),('cs260',2,'Winter16','C'),('cs260',3,'Winter16','B'),('cs260',4,'Winter16','B'),('cs260',5,'Winter16','A'),('cs260',6,'Winter16','B'),('cs260',7,'Winter16','B'),('cs260',8,'Winter16','F'),('cs172',9,'Winter16','B'),('cs260',10,'Winter16','F'),('cs265',1,'Spring17','A'),('cs265',2,'Spring17','F'),('cs265',3,'Spring17','B'),('cs265',4,'Spring17','B'),('cs265',5,'Spring17','A'),('cs265',6,'Spring17','C'),('cs265',7,'Spring17','B'),('cs260',8,'Spring17','B'),('cs260',9,'Spring17','B'),('cs260',10,'Spring17','F'),('cs350',1,'Summer17','A'),('cs265',2,'Summer17','B'),('cs350',3,'Summer17','B'),('cs350',4,'Summer17','B'),('cs350',5,'Summer17','B'),('cs350',6,'Summer17','C'),('cs350',7,'Summer17','C'),('cs265',8,'Summer17','B'),('cs265',9,'Summer17','A'),('cs461',1,'Summer17','B'),('cs461',3,'Summer17','B'),('cs461',4,'Summer17','C');
/*!40000 ALTER TABLE `grades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student` (
  `STUDENT_ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME_LAST` varchar(45) DEFAULT NULL,
  `NAME_FIRST` varchar(45) DEFAULT NULL,
  `BIRTH_DATE` date DEFAULT NULL,
  `MAJOR` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`STUDENT_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (1,'Abercrombie','Kim','1995-03-11','CS'),(2,'Barzdukas','Gytis','2005-09-01','CE'),(3,'Justice','Peggy','2001-09-01','IT'),(4,'Fakhouri','Fadi','2002-08-06','IT'),(5,'Harui','Roger','1998-07-01','IS'),(6,'Li','Yan','2002-09-01','CS'),(7,'Norman','Laura','2003-09-01','CE'),(8,'Olivotto','Nino','2005-09-01','CS'),(9,'Tang','Wayne','2005-09-01','IS'),(10,'Alonso','Meredith','2002-09-01','CS'),(14,'Doe','John','1990-12-31','CE');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-03-05 12:08:32
