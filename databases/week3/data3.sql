SET NAMES utf8mb4;

CREATE DATABASE Week3;

USE Week3;


CREATE TABLE Meal (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	meal_title VARCHAR(255),
	description TEXT,
	location VARCHAR(255),
	date DATETIME,
	max_reservations INT,
	price DECIMAL,
	created_date DATE
	);

CREATE TABLE Reservation (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	number_of_guests INT NOT NULL,
	meal_id INT NOT NULL,
	created_date DATE,
	contact_phonenumber VARCHAR(255),
	contact_name VARCHAR(255),
	contact_email VARCHAR(255),
    FOREIGN KEY (meal_id) REFERENCES Meal(id)
	);

CREATE TABLE Review (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	review_title VARCHAR(255),
	description TEXT,
	meal_id INT NOT NULL,
	stars INT,
	created_date DATE,
    FOREIGN KEY (meal_id) REFERENCES Meal(id)
	);

--------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------


------------------------------------------- Get all

SELECT *
FROM Meal;
------------------------------------------- Add a new

INSERT INTO Meal (id, meal_title, description, location, date, max_reservations, price, created_date)
VALUES (1, "Prepare an authentic Argentine asado with stunning views of Avenido Cervino", NULL, "Argentina", NULL, 4, 42, NULL);

INSERT INTO Meal (meal_title, description, location, date, max_reservations, price, created_date)
VALUES ("Sushi and Japanese recipes taught by a professional chef", NULL, "Japan", NULL, 10, 138, NULL);

------------------------------------------- Get with any id, fx 1

SELECT *
FROM Meal
WHERE id = 1;

------------------------------------------- Update with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE Meal
SET description = "Nicolas is a passionate, self taught home chef who started cooking when he was very young. He lives in a small, simple and cozy apartment with good views of the boulevard Cerviño from his balcony. Just the perfect place to host friends and family! The location is great, as Palermo Town is near the most important avenue in Buenos Aires, Libertador. Nicolas describes himself as a food lover and would like to share with travelers his immense love for Argentinean food and culture. He also has some great recommendations for local restaurants and must visit places in his city!"
WHERE id = 1;

------------------------------------------- Delete with any id, fx 1

DELETE
FROM Meal
WHERE id = 2;

---------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------



--------------------------------------------  Get all

SELECT *
FROM Reservation;
-------------------------------------------Add a new

INSERT INTO Reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (1, 3, 1, NULL, 55555555, "John", "email@gmail.com");

INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (6, 3, NULL, 77777777, "Kolya", NULL);

------------------------------------------- Get with any id, fx 1

SELECT *
FROM Reservation
WHERE id = 1;

------------------------------------------- Update with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE Reservation
SET contact_email = "kolya@gmail.com"
WHERE contact_name LIKE "K%";

------------------------------------------- Delete with any id, fx 1

DELETE
FROM Reservation
WHERE id = 2;

---------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------


-------------------------------------------- Get all

SELECT *
FROM Review;
------------------------------------------- Add a new

INSERT INTO Review (id, review_title, description, meal_id, stars, created_date)
VALUES (1, "Argentinas meal", "I loved the asado on the patio, and the view from Nicolas' apartment is amazing. It's one of my favorite memories from my time in Buenos Aires! Nicolas is an easy-going, friendly cook, and his apartment is the perfect date night location. Nicolas was warm and welcoming from beginning to end, and that feeling of simple goodness carries into the food. It would be easy to spend a long time chatting on the patio, except that he has so many recommendations of what to do next in the area (ask about PIBÄ).", 1, 5, NULL);

INSERT INTO Review (review_title, description, meal_id, stars, created_date)
VALUES ("Japanese meal", NULL, 3, 7, NULL);

------------------------------------------- Get with any id, fx 1

SELECT *
FROM Review
WHERE id = 1;

------------------------------------------- Update with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE Review
SET description = "I booked a cooking class with Furu through Traveling Spoon. He offers a variety of dishes to learn. I was most curious about Tamago-yaki, the Japanese omelette. Furu was a great teacher; rolling and flipping the Tamago-yaki is much more difficult than it appears! We also prepared Japanese hot pot and soba for the rest of the meal. Great experience and delicious food!"
WHERE review_title LIKE "%Japan%";

------------------------------------------- Delete with any id, fx 1

DELETE
FROM Review
WHERE id = 2;


---------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------


---------------------------------------------- Get meals that has a price smaller than a specific price fx 90

SELECT * 
FROM Meal
WHERE price < 50;

------------------------------ Get meals that still has available reservations

ALTER TABLE Meal ADD status ENUM("available", "unavailable") NOT NULL DEFAULT "available";

SELECT * 
FROM Meal
WHERE status = "available";

------------------------------------- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde

SELECT * 
FROM Meal
WHERE meal_title LIKE "%sushi%";

------------------------------------------- Get meals that has been created between two dates

UPDATE Meal
SET created_date = '2022-02-21'
WHERE id = 1;


SELECT * 
FROM Meal
WHERE created_date
BETWEEN '2022-01-01' 
AND '2022-03-31';

----------------------------------- Get only specific number of meals fx return only 5 meals
SELECT * 
FROM Meal
LIMIT 1;

------------------------------- Get the meals that have good reviews
SELECT meal_title, review_title, stars 
FROM Meal
JOIN Review ON Meal.id = Review.meal_id
WHERE stars > 5;

------------------------------------------ Get reservations for a specific meal sorted by created_date
UPDATE Reservation
SET created_date = '2021-07-21'
WHERE id = 2;

UPDATE Reservation
SET created_date = '2022-07-21'
WHERE id = 1;

SELECT meal_title, number_of_guests, Reservation.created_date, contact_name
FROM Meal
JOIN Reservation ON Meal.id = Reservation.meal_id
ORDER BY Reservation.created_date;

----------------------------------- Sort all meals by average number of stars in the reviews
SELECT meal_title, review_title, stars 
FROM Meal
JOIN Review ON Meal.id = Review.meal_id
ORDER BY stars;