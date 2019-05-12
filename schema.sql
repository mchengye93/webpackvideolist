DROP DATABASE IF EXISTS videolist;
CREATE DATABASE videolist;

USE videolist;

CREATE TABLE movies (
    id INT AUTO_INCREMENT UNIQUE,
    title VARCHAR(255) NOT NULL,
    watched BOOLEAN DEFAULT FALSE

);

INSERT INTO movies (title) VALUES ("Mean Girls");
INSERT INTO movies (title) VALUES ("The Grey");
INSERT INTO movies (title) VALUES ("Hackers");
INSERT INTO movies (title) VALUES ("Austin Powers");
INSERT INTO movies (title) VALUES ("Sunshine");
INSERT INTO movies (title) VALUES ("Sex In The City");
INSERT INTO movies (title) VALUES ("Flowers for Algernon");