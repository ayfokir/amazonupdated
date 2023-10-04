-- Product tables  
CREATE TABLE IF NOT EXISTS `product_table` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_title` TEXT,
  `product_price` int(11) NOT NULL,
  `product_rating` int(11) NOT NULL,  
  PRIMARY KEY (product_id)  
) ENGINE=InnoDB;
CREATE TABLE IF NOT EXISTS `product_imagetable` (
  `productimage_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_image` varchar(255) NOT NULL, 
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (productimage_id),
  FOREIGN KEY (product_id) REFERENCES product_table(product_id)
) ENGINE=InnoDB;


--Order Information Tables
CREATE TABLE IF NOT EXISTS `orderInformation_table` (
  `orderInformation_id` int(11) NOT NULL AUTO_INCREMENT,
  `LogedInUser_id` VARCHAR(255) NOT NULL,
  `paymentIntent_id` VARCHAR(255) NOT Null,
  `amount` int(11) NOT NULL, 
  `created` int(11) NOT NULL,  
  PRIMARY KEY (orderInformation_id)
  -- FOREIGN KEY (product_id) REFERENCES product_table(product_id)
) ENGINE=InnoDB;
CREATE TABLE IF NOT EXISTS `order_table` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_title` TEXT NOT NULL,
  `order_image`TEXT NOT Null,
  `order_price` int(11) NOT NULL,   
  `order_rating` int(11) NOT NULL,
  `orderInformation_id` int(11) NOT NULL,  
  PRIMARY KEY (order_id),
  FOREIGN KEY (orderInformation_id) REFERENCES orderInformation_table(orderInformation_id)
) ENGINE=InnoDB;







