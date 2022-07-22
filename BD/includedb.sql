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
  `colors` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

INSERT INTO `includedb`.`colors` VALUES (1,'rojo'),(2,'azul'),(3,'amarillo');

-- Creaamos la tabla sizes

CREATE TABLE `includedb`.`size` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `size` VARCHAR(5) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

INSERT INTO `includedb`.`size` VALUES (1,'XXS'),(2,'XS'),(3,'S');

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
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_product_colors_id`
    FOREIGN KEY (`colorsId`)
    REFERENCES `includedb`.`colors` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_product_size_id`
    FOREIGN KEY (`sizeId`)
    REFERENCES `includedb`.`size` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

INSERT INTO `includedb`.`products` VALUES (1,"bombacha", "para todos los totos", "de algodon", "autoajustable" ,2 ,1, 1, 1000 , 2, "bombacha.png" );

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





