CREATE DATABASE movieengine_db;

CREATE USE movieengine_db;


CREATE TABLE Users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE Movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  genre VARCHAR(255) NOT NULL,
  rating FLOAT NOT NULL
);


CREATE TABLE UserFavorites (
  userId INT,
  movieId INT,
  FOREIGN KEY (userId) REFERENCES Users(id),
  FOREIGN KEY (movieId) REFERENCES Movies(id),
  PRIMARY KEY (userId, movieId)
);

CREATE TABLE UserRatings (
  userId INT,
  movieId INT,
  rating FLOAT NOT NULL,
  FOREIGN KEY (userId) REFERENCES Users(id),
  FOREIGN KEY (movieId) REFERENCES Movies(id),
  PRIMARY KEY (userId, movieId)
);


