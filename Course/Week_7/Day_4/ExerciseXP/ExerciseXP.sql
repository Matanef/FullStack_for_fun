SELECT * FROM language

SELECT f.title, f.description, l.name 
FROM film f
LEFT JOIN language l
	ON f.language_id = l.language_id

SELECT f.title, f.description, l.name 
FROM film f
RIGHT JOIN language l
	ON f.language_id = l.language_id

CREATE TABLE new_film (
	id SERIAL NOT NULL PRIMARY KEY,
	name VARCHAR(100)
);

INSERT INTO new_film (name)
VALUES
('The Silent Ocean'),
('Shadow of the Mountain'),
('Whispers in the Wind'),
('The Last Horizon');

SELECT * FROM new_film

DROP TABLE new_film


CREATE TABLE customer_review (
	review_id SERIAL PRIMARY KEY,
	film_id INT NOT NULL,
	language_id INT NOT NULL,
	title VARCHAR(100) NOT NULL,
	score INT CHECK (score BETWEEN 1 AND 10),
	review_text TEXT,
	last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

	CONSTRAINT fk_film
		FOREIGN KEY (film_id)
		REFERENCES new_film (id)
		ON DELETE CASCADE,

	CONSTRAINT fk_language
		FOREIGN KEY (language_id)
		REFERENCES language (language_id)
	
)


INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES 
(1,1, 'Amazing Film!', 9, 'Loved the pacing and the visuals.'),
(2,2, 'Not bad', 6, 'Good acting but weak story.');

SELECT * FROM customer_review
SELECT * FROM new_film
ORDER BY id

DELETE FROM new_film
WHERE id = 1

// Exercise 2

UPDATE language
SET name = 'Hebrew'
WHERE language_id = 3

SELECT COUNT(*) FROM language
SELECT * FROM language

DROP TABLE customer_review

SELECT COUNT(*) FROM rental
WHERE return_date is NULL

SELECT * FROM rental WHERE return_date is NULL

SELECT f.title, f.rental_rate 
FROM film f
JOIN inventory i ON f.film_id=i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC 
FETCH NEXT 30 ROWS ONLY


SELECT title FROM film f
JOIN film_actor fa ON f.film_id=fa.film_id
JOIN actor a ON fa.actor_id=a.actor_id
WHERE f.description LIKE '%Sumo%' 
	AND a.first_name LIKE 'Penelope' 
	AND a.last_name LIKE 'Monroe'


SELECT title FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE c.name LIKE 'Docu%'
AND f.length < 60
AND f.rating = 'R'

SELECT rating FROM film
SELECT name FROM category

SELECT f.title FROM film f
JOIN inventory i ON f.film_id=i.film_id
JOIN rental r ON i.inventory_id=r.inventory_id
JOIN payment p ON r.rental_id=p.rental_id
JOIN customer c ON r.customer_id=c.customer_id
WHERE c.first_name = 'Matthew'
AND c.last_name = 'Mahan'
AND p.amount > 4
AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01'

SELECT f.title FROM film f
JOIN inventory i ON f.film_id=i.film_id
JOIN rental r ON i.inventory_id=r.inventory_id
JOIN customer c ON r.customer_id=c.customer_id
WHERE  c.first_name = 'Matthew'
AND c.last_name = 'Mahan'
AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC
LIMIT 1;

