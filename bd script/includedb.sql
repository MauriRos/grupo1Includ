-- Creamos la BD de Includ

CREATE SCHEMA `includedb` DEFAULT CHARACTER SET utf8 ;

-- Creamos la tabla catergoryProduct

CREATE TABLE `includedb`.`categoryProduct` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

INSERT INTO `includedb`.`categoryProduct` VALUES (1,'top'),(2,'pantalon'),(3,'accesorio');

-- Creaamos la tabla colors

CREATE TABLE `includedb`.`colors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `color` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

INSERT INTO `includedb`.`colors` VALUES (1,'rojo'),(2,'azul'),(3,'amarillo'),(4,'naranja'),(5,'verde'),(6,'violeta'),(7,'blanco'),(8,'negro');

-- Creaamos la tabla sizes

CREATE TABLE `includedb`.`sizes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `size` VARCHAR(5) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

INSERT INTO `includedb`.`sizes` VALUES (1,'XXS'),(2,'XS'),(3,'S'),(4,'M'),(5,'L'),(6,'XL'),(7,'2XL'),(8,'3XL'),(9,'4XL'),(10,'5XL'),(11,'6XL');

-- Creamos la tabla products

CREATE TABLE `includedb`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(300) NOT NULL,
  `characteristics` VARCHAR(300) NOT NULL,
  `sizing` VARCHAR(300) NOT NULL,
  `categoryProductId` INT NOT NULL,
  `colorsId` INT NOT NULL,
  `sizeId` INT NOT NULL,
  `price` INT NOT NULL,
  `stock` VARCHAR(45) NOT NULL,
  `image` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_product_categoryProduct_id`
    FOREIGN KEY (`categoryProductId`)
    REFERENCES `includedb`.`categoryProduct` (`id`)
    ,
  CONSTRAINT `fk_product_colors_id`
    FOREIGN KEY (`colorsId`)
    REFERENCES `includedb`.`colors` (`id`)
    ,
  CONSTRAINT `fk_product_size_id`
    FOREIGN KEY (`sizeId`)
    REFERENCES `includedb`.`sizes` (`id`)
    )
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

INSERT INTO `includedb`.`products` VALUES (1,"bombacha", "para todos los totos", "de algodon", "autoajustable" ,2 ,1, 1, 1000 , 2, "1654375717277_img_.jpg" );

-- Creamos la tabla permissions

CREATE TABLE `includedb`.`permissions` (
  `id` INT NOT NULL,
  `permission` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

-- Creamos la tabla users

CREATE TABLE `includedb`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `avatar` VARCHAR(45) NOT NULL,
  `permissionId` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_users_permissions_id`
    FOREIGN KEY (`permissionId`)
    REFERENCES `includedb`.`permissions` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);





