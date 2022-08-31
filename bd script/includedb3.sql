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

INSERT INTO `includedb`.`products` VALUES (1,"Remera Strass M/C", "Mundo Strass: glamour de colección.. Presentamos un básico de lujo en nuestra colección Mundo Strass: la camiseta vintage orgánica. Un elemento básico del armario, la camiseta perfecta de inspiración vintage. Un toque boxy con ribete grueso de canalé 2x1 en el mástil. Desarrollamos y tejemos a medida esta tela premium aquí mismo en Argentina. Es 100% algodón orgánico certificado con una sensación súper suave y ultra cómoda. Teñido en un arcoíris de tonos con tintes no tóxicos y de bajo impacto. Diseñado, impreso, cortado y cosido en Argentina. Confeccionado con tejido orgánico certificado por una industria textil feminista, territorial y popular. Teñido con tintes no tóxicos de bajo impacto y libre de explotación laboral.", "100% algodón orgánico certificado - Tejido personalizado - Camiseta de peso ligero. - Super suave - Pre-encogido - Golpe de cuello serigrafiado - Ropa teñida – Inspirado en los 70.", "Basado en la lista de tamaños típicos de ICLUDE, es probable que tenga el mismo tamaño que la modelo y tamaños más grandes. La tela cede para amoldarse a la diversidad corporal. De igual manera se ruega prestar atención a la hora de seleccionar el talle. Link para acceder a la Tabla de talles para el producto.", 1, 7, 2, 5000, 2, "1remerastrass.jpg" , "2remerastrass.jpg", "3remerastrass.jpg", "4remerastrass.jpg", "5remerastrass.jpg");
INSERT INTO `includedb`.`products` VALUES (2, "Top Amarillo M/C", "BÁSICOS DE TODO EL DÍA. Un tanque para conquistar el mundo: Tops sin mangas en nuestra colección Básicos de todo el día. Genial para todo: vestirse, hacer deporte y descansar. Confeccionado con una tela elástica de Lycra con ferrería, lo puedes usar como top, malla y corpiño deportivo. Esta tela fue tejida a medida para nosotros aquí en Argentina.  Teñido en un arcoíris de nuestros tonos usando tintes no tóxicos de bajo impacto y libre de explotación laboral" , "Tela elástica de Lycra. - Tejido personalizado. - No se encoge. - Forraje super suave. - Estirable. - Etiqueta serigrafiada. - Ropa teñida. - Hecho en Argentina.", "Este top está diseñado para usarse ajustado y tiene el tamaño correspondiente para ser muy cómodo. Ideal para usar como top, malla y corpiño deportivo por sus propiedades único de firmeza. Para obtener el mismo calce que nuestros modelos prestar mucha atención al seleccionar el talle. Link para acceder a la Tabla de talles para el producto.", 1, 3, 5, 4800, 3, "1topamarillo.jpg", "2topamarillo.jpg", "3topamarillo.jpg", "4topamarillo.jpg", "5topamarillo.jpg");
INSERT INTO `includedb`.`products` VALUES (3, "Remerón Blanco M/C", "BÁSICOS DE TODO EL DIA. El Remerón llegó para quedarse: una versión actualizada de los remerones clásicos para esta nueva colección Básicos para todo el día. Diseñado para ser usado holgado. Genial para todo: vestirse, ponerse capas y descansar. Perfecto para llevarlo solo o en capas en los meses más fríos. Estos remerones funcionan sin esfuerzo para cualquier atuendo informal o elegante. Confeccionado en 100 % algodón. Esta tela fue tejida a medida para nosotros aquí en Argentina.  Teñido en un arcoíris de nuestros tonos usando tintes no tóxicos y de bajo impacto.", "100 % algodón. - Pre-encogido - Super suave - Ajuste holgado y largo. - Etiqueta serigrafiada - -Ropa teñida - Hecho en Argentina.", "Talla sin género, holgado y largo. Consulte nuestra tabla de tallas vinculada a continuación para obtener información sobre las tallas y no dude en comunicarse con cualquier pregunta sobre las tallas. Link para acceder a la Tabla de talles para el producto", 1, 7, 5, 6500, 1, "1remeronblanco.jpg", "2remeronblanco.jpg", "3remeronblanco.jpg", "4remeronblanco.jpg", "5remeronblanco.jpg");
INSERT INTO `includedb`.`products` VALUES (4, "Top Negro S/M", "Presentamos un básico de lujo en nuestra colección Básicos de Todo el día: el cuello alto sin mangas esencial. Un básico de armario. Perfecto para llevarlo solo o en capas en los meses más fríos. Esta camiseta funciona sin esfuerzo para cualquier atuendo informal o elegante. Nuestro cuello de tortuga tiene la altura perfecta: no es demasiado alto para tener que girarlo y no es tan bajo como para incomodar. Desarrollamos y tejemos a medida esta tela premium aquí mismo en Argentina. Es 95% algodón orgánico certificado mezclado con 5% spandex para una sensación ajustada y ultra cómoda. Teñido en un arcoíris de tonos con tintes no tóxicos y de bajo impacto. Diseñado, impreso, cortado y cosido en Argentina. Confeccionado con tejido orgánico certificado por una industria textil feminista, territorial y popular. Teñido con tintes no tóxicos de bajo impacto y libre de explotación laboral.", "95% algodón orgánico certificado /5 % elastano - Tejido personalizado - Costilla Elástica 2x1 - Pre-encogido - Super suave. - Ropa teñida. - Golpe de cuello serigrafiado. - Recortado ", " Basado en la lista de tamaños típicos de ICLUDE, es probable que tenga el mismo tamaño que la modelo y tamaños más grandes.Esta pieza está diseñada para usarse apretada. Si prefiere un calce más holgado, le recomendamos que se ajuste al tamaño. Consulte la tabla de tallas vinculada a continuación antes de realizar el pedido.Link para acceder a la Tabla de talles para el producto.", 1, 8, 3, 5500, 5, "1topnegro.jpg", "2topnegro.jpg", "3topnegro.jpg", "4topnegro.jpg", "5topnegro.jpg");
INSERT INTO `includedb`.`products` VALUES (5, "Pantalón Jirafa",  "¡Ha vuelto, cariño!¡Impresionante estampa Jirafa de edición limitada! Nuestro pantalón más vendido: nuestros shorts son un elemento básico del armario. Pantalones cortos inspirados en las necesidades diarias multiuso. Elástico añadido en la cintura para una mayor flexibilidad de tamaño. Costuras resistentes. Confeccionado con nuestra resistente sarga de 100 % algodón. ¡Nuestra sarga no tiene elasticidad incorporada en la tela, pero todas nuestras piezas se adaptan maravillosamente con el uso y se ajustan a su cuerpo! ¡Impreso en nuestra edición limitada Jirafa print! Diseñado, impreso, cortad y cosido en Argentina. Confeccionado con tejido orgánico certificado por una industria textil local. Teñido con tintes no tóxicos de bajo impacto y libre de explotación laboral.", " Talla sin género.  - Sarga duradera 100% algodón. - Pre-encogido. - Cintura elástica.  - Grandes bolsillos. - Costuras resistentes. - Tirador blanco en contraste. - Bordado blanco en contraste. - Edición limitada", " Talle sin género basado en la lista de tamaños típicos de ICLUDE, es probable que tenga el mismo tamaño que la modelo y tamaños más grandes. Nuestros shorts de algodón tienen un tamaño similar a todos nuestros pantalones inferiores; es probable que tengas el mismo tamaño en estos que cualquiera de nuestros otros pantalones que te encantan. Link para acceder a la Tabla de talles para el producto", 2, 2, 8, 3500, 4, "1pantalonjirafa.jpg", "2pantalonjirafa.jpg",  "3pantalonjirafa.jpg",  "4pantalonjirafa.jpg",  "5pantalonjirafa.jpg");
INSERT INTO `includedb`.`products` VALUES (6, "Biker Negra", " Nuestras calzas más vendidas, ahora recortados en estas cómodas bikers. El mismo calce clásico que has llegado a conocer y amar pero... más corto. Estas calzas cortos son las más cómodas. Elásticos para convertirse en una segunda piel de tu cuerpo ¡Te olvidarás que la llevas puesta! Costuras resistentes. Confeccionado con nuestra mezcla 80% poliéster y 20% elastano. ¡Todas nuestras piezas se adaptan maravillosamente y se ajustan a su cuerpo! Esta tela fue tejida a medida para nosotros aquí en Argentina.  Teñido en un arcoíris de nuestros tonos usando tintes no tóxicos de bajo impacto y libre de explotación laboral. ", " Tela elástica de 80% poliéster / 20% elastano. - Tejido personalizado. - No se encoge. - Super suave. - Estirable. - Etiqueta serigrafiada. - Ropa teñida. - Hecho en Argentina.", " Cada tamaño puede adaptarse a una variedad de tipos de cuerpo, así que consulte nuestra tabla de tallas a continuación antes de realizar el pedido o envíenos un correo electrónico con cualquier pregunta sobre el tamaño que pueda tener. Link para acceder a la Tabla de talles para el producto ", 2, 8, 5, 2000, 5, "1calzanegra.jpg", "2calzanegra.jpg", "3calzanegra.jpg", "4calzanegra.jpg", "5calzanegra.jpg");
INSERT INTO `includedb`.`products` VALUES (7, "Biker Naranja " , " Nuestras calzas más vendidas, ahora recortados en estas cómodas bikers. El mismo calce clásico que has llegado a conocer y amar pero... más corto. Estas calzas cortos son las más cómodas. Elásticos para convertirse en una segunda piel de tu cuerpo ¡Te olvidarás que la llevas puesta! Costuras resistentes. Confeccionado con nuestra mezcla 80% poliéster y 20% elastano. ¡Todas nuestras piezas se adaptan maravillosamente y se ajustan a su cuerpo! Esta tela fue tejida a medida para nosotros aquí en Argentina.  Teñido en un arcoíris de nuestros tonos usando tintes no tóxicos de bajo impacto y libre de explotación laboral.", " Tela elástica de 80% poliéster / 20% elastano. - Tejido personalizado. - No se encoge. - Super suave. - Estirable. - Etiqueta serigrafiada. - Ropa teñida.", " Cada tamaño puede adaptarse a una variedad de tipos de cuerpo, así que consulte nuestra tabla de tallas a continuación antes de realizar el pedido o envíenos un correo electrónico con cualquier pregunta sobre el tamaño que pueda tener. Link para acceder a la Tabla de talles para el producto", 2, 4, 5, 3000, 2, "1calzanaranja.jpg", "2calzanaranja.jpg","3calzanaranja.jpg", "4calzanaranja.jpg", "5calzanaranja.jpg");
INSERT INTO `includedb`.`products` VALUES (8, "Short Batik" , "¡Nueva talla después de la XL! Súper cómodo y liviano, hecho especialmente para nosotros aquí en Argentina. Lo llamamos peso de INCLUDE: ligero, transpirable, acogedor y lujoso. Genial por sí solo para usar en temporadas de calor.  Teñido a mano aquí en Argentina, por lo que cada pieza, aunque similar, ¡son totalmente únicas! ¡No hay dos iguales! ¡Puedes conseguir uno que sea casi idéntico al de la foto, o uno que tenga más o menos de cada color de tinte, etc.! Diseñado, cortado, cosido, teñido y bordado en Argentina. Teñido con tintes no tóxicos de bajo impacto y libre de explotación laboral. ", " Talla unisex - 100 % algodón. - Pre-encogido - Súper suave - Grandes bolsillos. - Tirador negro en contraste - Bordado blanco en contraste.", " Talla unisex. Nuestros shorts batik de algodón tienen un tamaño similar a todos nuestros pantalones inferiores; es probable que tengas el mismo tamaño en estos que cualquiera de nuestros otros pantalones que te encantan. Link para acceder a la Tabla de talles para el producto.", 2, 7, 1, 2200, 10, "1pantalonbatik.jpg", "2pantalonbatik.jpg","3pantalonbatik.jpg", "4pantalonbatik.jpg", "5pantalonbatik.jpg");
INSERT INTO `includedb`.`products` VALUES (9, "Medias" , "¡Tu nuevo básico de armario! Un calcetín fino de uso diario para todas las estaciones. Perfil elegante y prenda teñida en un enorme arcoíris de matices. ¡Tenga en cuenta que los calcetines son un artículo de venta final y no son elegibles para devolución o cambio! Todos los tintes de corbata son únicos y no serán exactamente como se muestran en la imagen.  ", " Sin género - Múltiples Tamaños - 96 % algodón/6 % acrílico/4 % elastano  - Lavable en la lavadora - Ropa teñida ", "¡Nuestros calcetines brindan mucha elasticidad y cada tamaño puede ajustarse a un rango y ambos tamaños funcionarán para la mayoría de las personas! ", 3, 1, 5, 2200, 100, "1medias.jpg ", "2medias.jpg","3medias.jpg", "4medias.jpg", "5medias.jpg");
INSERT INTO `includedb`.`products` VALUES (10, "Bandanas" , " ¡Nuestros pañuelos están destinados a parecer verdaderamente vintage! Habrá pequeñas inconsistencias en el tinte y la serigrafía. Es posible que la impresión no esté exactamente centrada. ¡Todo esto es intencional! ¡Vamos por esa vibra! ;) . Hecho y diseñado en Argentina con telas locales. Teñido e impreso con tintas/colorantes de bajo impacto y no tóxicos. ", "100% algodón - Super suave - Serigrafía de descarga de dos colores - Patrón exclusivo de margarita perezosa - Múltiples opciones de colores.", "Aproximadamente 22 mm x 22 mm", 3, 3, 1, 3500, 10, "1bandanas.jpg", "2bandanas.jpg","3bandanas.jpg", "4bandanas.jpg", "5bandanas.jpg");
INSERT INTO `includedb`.`products` VALUES (11, "Pin" , " Metal plateado - Un posyes en la parte trasera. - Respaldo de pasador de goma Fabricado en EEUU. ", " Se vende por unidad", "1,5 mm - 2 mm de espesor", 3, 1, 1, 500, 100, "1pines.jpg", "2pines.jpg","3pines.jpg", "4pines.jpg", "5pines.jpg");
INSERT INTO `includedb`.`products` VALUES (12, "Pin Frutas" , " Metal dorado - Dos postes en la parte trasera - Respaldo de pasador de goma Fabricado en EEUU. ", " Se vende por unidad", "1,5 mm - 2 mm de espesor", 3, 1, 1, 500, 100, "1pinesfrutas.jpg", "2pinesfrutas.jpg","3pinesfrutas.jpg", "4pinesfrutas.jpg", "5pinesfrutas.jpg");

-- Creamos la tabla permissions
CREATE TABLE `includedb`.`permissions` (
  `id` INT NOT NULL,
  `permission` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

INSERT INTO `includedb`.`permissions` VALUES (1,'admin'),(2,'user');

-- Creamos la tabla users

CREATE TABLE `includedb`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `avatar` VARCHAR(45) NOT NULL,
  `permissionId` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_users_permissions_id`
    FOREIGN KEY (`permissionId`)
    REFERENCES `includedb`.`permissions` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)  
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

-- Cargamos datos para tabla user.

INSERT INTO `includedb`.`users` VALUES (1, "Mauricio", "Leguiza", "@MLeguiza11", "mauricio.leguiza@gmail.com", "$2a$10$TEEcpWJRQ1qtSYwDZbd6l.yDfEOgSu5bYnI87vBuEcqg1wgWHiKK6", "1654379420540_avatar_.jpg",2);
INSERT INTO `includedb`.`users` VALUES (2, "Juan", "Ferrari", "@JFerrari12", "juan.ferrari@gmail.com", "$2a$10$TEEcpWJRQ1qtSYwDZbd6l.yDfEOgSu5bYnI87vBuEcqg1wgWHiKK6", "1654379454267_avatar_.jpg",2);
INSERT INTO `includedb`.`users` VALUES (3, "Viviana", "Grecco", "@VGrecco13", "viviana.grecco@gmail.com", "$2a$10$TEEcpWJRQ1qtSYwDZbd6l.yDfEOgSu5bYnI87vBuEcqg1wgWHiKK6", "1654379489975_avatar_.jpg",2);
INSERT INTO `includedb`.`users` VALUES (4, "Luisina", "Bassi", "@LBassi14", "luisina.bassi@gmail.com", "$2a$10$TEEcpWJRQ1qtSYwDZbd6l.yDfEOgSu5bYnI87vBuEcqg1wgWHiKK6", "1654379521969_avatar_.jpg",2);
INSERT INTO `includedb`.`users` VALUES (5, "Virginia", "Amherdt", "@VAmherdt15", "virginia.amherdt@gmail.com", "$2a$10$TEEcpWJRQ1qtSYwDZbd6l.yDfEOgSu5bYnI87vBuEcqg1wgWHiKK6", "1654379570648_avatar_.jpg",2);
INSERT INTO `includedb`.`users` VALUES (6, "Maximiliano", "Colombo", "@MColombo16", "maximiliano.colombo@gmail.com", "$2a$10$TEEcpWJRQ1qtSYwDZbd6l.yDfEOgSu5bYnI87vBuEcqg1wgWHiKK6", "default-avatar.jpg",2);
INSERT INTO `includedb`.`users` VALUES (7, "Administrador", "Administrador", "@Administrador", "administrador@gmail.com", "$2a$10$TEEcpWJRQ1qtSYwDZbd6l.yDfEOgSu5bYnI87vBuEcqg1wgWHiKK6", "1654379420540_avatar_.jpg",1);