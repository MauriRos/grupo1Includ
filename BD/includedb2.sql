-- Creamos la BD de Include

CREATE SCHEMA `includedb` DEFAULT CHARACTER SET utf8 ;

-- Creamos la tabla catergoryProduct

CREATE TABLE `includedb`.`categoryProduct` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

-- Cargamos datos para tabla categoryProduct.

INSERT INTO `includedb`.`categoryProduct` VALUES (1,'TOP'),(2,'PANTALON'),(3,'ACCESORIO');

-- Creaamos la tabla colors

CREATE TABLE `includedb`.`colors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `color` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

-- Cargamos datos para tabla colors

INSERT INTO `includedb`.`colors` VALUES (1,'Rojo'),(2,'Azul'),(3,'Amarillo'),(4,'Naranja'),(5,'Verde'),(6,'Violeta'),(7,'Blanco'),(8,'Negro');

-- Creaamos la tabla sizes

CREATE TABLE `includedb`.`sizes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `size` VARCHAR(5) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

-- Cargamos datos para tabla size.

INSERT INTO `includedb`.`sizes` VALUES (1,'XXS'),(2,'XS'),(3,'S'),(4,'M'),(5,'L'),(6,'XL'),(7,'2XL'),(8,'3XL'),(9,'4XL'),(10,'5XL'),(11,'6XL');

-- Creamos la tabla products

CREATE TABLE `includedb`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(1500) NOT NULL,
  `characteristics` VARCHAR(1500) NOT NULL,
  `sizing` VARCHAR(1500) NOT NULL,
  `categoryProductId` INT NOT NULL,
  `colorsId` INT NOT NULL,
  `sizeId` INT NOT NULL,
  `price` INT NOT NULL,
  `stock` INT NOT NULL,
  `image` VARCHAR(45) NOT NULL,
  `image2` VARCHAR(45) NOT NULL,
  `image3` VARCHAR(45) NOT NULL,
  `image4` VARCHAR(45) NOT NULL,
  `image5` VARCHAR(45) NOT NULL,
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

-- Cargamos datos para tabla product.

INSERT INTO `includedb`.`products` VALUES (1,"Remera Strass M/C", "Mundo Strass: glamour de colección.. Presentamos un básico de lujo en nuestra colección Mundo Strass: la camiseta vintage orgánica. Un elemento básico del armario, la camiseta perfecta de inspiración vintage. Un toque boxy con ribete grueso de canalé 2x1 en el mástil. Desarrollamos y tejemos a medida esta tela premium aquí mismo en Argentina. Es 100% algodón orgánico certificado con una sensación súper suave y ultra cómoda. Teñido en un arcoíris de tonos con tintes no tóxicos y de bajo impacto. Diseñado, impreso, cortado y cosido en Argentina. Confeccionado con tejido orgánico certificado por una industria textil feminista, territorial y popular. Teñido con tintes no tóxicos de bajo impacto y libre de explotación laboral.", "100% algodón orgánico certificado - Tejido personalizado - Camiseta de peso ligero. - Super suave - Pre-encogido - Golpe de cuello serigrafiado - Ropa teñida – Inspirado en los 70.", "Basado en la lista de tamaños típicos de ICLUDE, es probable que tenga el mismo tamaño que la modelo y tamaños más grandes. La tela cede para amoldarse a la diversidad corporal. De igual manera se ruega prestar atención a la hora de seleccionar el talle. Link para acceder a la Tabla de talles para el producto.", 1, 7, 2, 5000, 2, 1, 2, 3, 4, 5 );
INSERT INTO `includedb`.`products` VALUES (2, "Top Amarillo M/C", "BÁSICOS DE TODO EL DÍA. Un tanque para conquistar el mundo: Tops sin mangas en nuestra colección Básicos de todo el día. Genial para todo: vestirse, hacer deporte y descansar. Confeccionado con una tela elástica de Lycra con ferrería, lo puedes usar como top, malla y corpiño deportivo. Esta tela fue tejida a medida para nosotros aquí en Argentina.  Teñido en un arcoíris de nuestros tonos usando tintes no tóxicos de bajo impacto y libre de explotación laboral" , "Tela elástica de Lycra. - Tejido personalizado. - No se encoge. - Forraje super suave. - Estirable. - Etiqueta serigrafiada. - Ropa teñida. - Hecho en Argentina.", "Este top está diseñado para usarse ajustado y tiene el tamaño correspondiente para ser muy cómodo. Ideal para usar como top, malla y corpiño deportivo por sus propiedades único de firmeza. Para obtener el mismo calce que nuestros modelos prestar mucha atención al seleccionar el talle. Link para acceder a la Tabla de talles para el producto.", 1, 3, 5, 4800, 3, 1, 2, 3, 4, 5);
INSERT INTO `includedb`.`products` VALUES (3, "Remerón Blanco M/C", "BÁSICOS DE TODO EL DIA. El Remerón llegó para quedarse: una versión actualizada de los remerones clásicos para esta nueva colección Básicos para todo el día. Diseñado para ser usado holgado. Genial para todo: vestirse, ponerse capas y descansar. Perfecto para llevarlo solo o en capas en los meses más fríos. Estos remerones funcionan sin esfuerzo para cualquier atuendo informal o elegante. Confeccionado en 100 % algodón. Esta tela fue tejida a medida para nosotros aquí en Argentina.  Teñido en un arcoíris de nuestros tonos usando tintes no tóxicos y de bajo impacto.", "100 % algodón. - Pre-encogido - Super suave - Ajuste holgado y largo. - Etiqueta serigrafiada - -Ropa teñida - Hecho en Argentina.", "Talla sin género, holgado y largo. Consulte nuestra tabla de tallas vinculada a continuación para obtener información sobre las tallas y no dude en comunicarse con cualquier pregunta sobre las tallas. Link para acceder a la Tabla de talles para el producto", 1, 7, 4, 6500, 1, 1, 2, 3, 4, 5);
INSERT INTO `includedb`.`products` VALUES (4, " Top Negro S/M", "Presentamos un básico de lujo en nuestra colección Básicos de Todo el día: el cuello alto sin mangas esencial. Un básico de armario. Perfecto para llevarlo solo o en capas en los meses más fríos. Esta camiseta funciona sin esfuerzo para cualquier atuendo informal o elegante. Nuestro cuello de tortuga tiene la altura perfecta: no es demasiado alto para tener que girarlo y no es tan bajo como para incomodar. Desarrollamos y tejemos a medida esta tela premium aquí mismo en Argentina. Es 95% algodón orgánico certificado mezclado con 5% spandex para una sensación ajustada y ultra cómoda. Teñido en un arcoíris de tonos con tintes no tóxicos y de bajo impacto. Diseñado, impreso, cortado y cosido en Argentina. Confeccionado con tejido orgánico certificado por una industria textil feminista, territorial y popular. Teñido con tintes no tóxicos de bajo impacto y libre de explotación laboral.", "95% algodón orgánico certificado /5 % elastano - Tejido personalizado - Costilla Elástica 2x1 - Pre-encogido - Super suave. - Ropa teñida. - Golpe de cuello serigrafiado. - Recortado ", " Basado en la lista de tamaños típicos de ICLUDE, es probable que tenga el mismo tamaño que la modelo y tamaños más grandes.Esta pieza está diseñada para usarse apretada. Si prefiere un calce más holgado, le recomendamos que se ajuste al tamaño. Consulte la tabla de tallas vinculada a continuación antes de realizar el pedido.Link para acceder a la Tabla de talles para el producto.  ", 1, 8, 2, 5500, 5, 1, 2, 3, 4, 5);
-- Creamos la tabla users

CREATE TABLE `includedb`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `avatar` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
  )
  
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

-- Cargamos datos para tabla user.

INSERT INTO `includedb`.`users` VALUES (1, "Mauricio", "Leguiza", "@MLeguiza11", "mauricio.leguiza@gmail.com", "$2a$10$TEEcpWJRQ1qtSYwDZbd6l.yDfEOgSu5bYnI87vBuEcqg1wgWHiKK6", "1654379420540_avatar_.jpg");
INSERT INTO `includedb`.`users` VALUES (2, "Juan", "Ferrari", "@JFerrari12", "juan.ferrari@gmail.com", "$2a$10$TEEcpWJRQ1qtSYwDZbd6l.yDfEOgSu5bYnI87vBuEcqg1wgWHiKK6", "1654379454267_avatar_.jpg");
INSERT INTO `includedb`.`users` VALUES (3, "Viviana", "Grecco", "@VGrecco13", "viviana.grecco@gmail.com", "$2a$10$TEEcpWJRQ1qtSYwDZbd6l.yDfEOgSu5bYnI87vBuEcqg1wgWHiKK6", "1654379489975_avatar_.jpg");
INSERT INTO `includedb`.`users` VALUES (4, "Luisina", "Bassi", "@LBassi14", "luisina.bassi@gmail.com", "$2a$10$TEEcpWJRQ1qtSYwDZbd6l.yDfEOgSu5bYnI87vBuEcqg1wgWHiKK6", "1654379521969_avatar_.jpg");
INSERT INTO `includedb`.`users` VALUES (5, "Virginia", "Amherdt", "@VAmherdt15", "virginia.amherdt@gmail.com", "$2a$10$TEEcpWJRQ1qtSYwDZbd6l.yDfEOgSu5bYnI87vBuEcqg1wgWHiKK6", "1654379570648_avatar_.jpg");
INSERT INTO `includedb`.`users` VALUES (6, "Maximiliano", "Colombo", "@MColombo16", "maximiliano.colombo@gmail.com", "$2a$10$TEEcpWJRQ1qtSYwDZbd6l.yDfEOgSu5bYnI87vBuEcqg1wgWHiKK6", "default-avatar.jpg");

