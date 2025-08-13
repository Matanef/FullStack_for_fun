SELECT * FROM  customer

SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM customer

SELECT DISTINCT create_date FROM customer

SELECT * FROM customer ORDER BY first_name DESC

SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC

SELECT address, phone FROM address WHERE district = 'Texas'

SELECT * FROM film WHERE film_id = 15 OR film_id =150

SELECT film_id, title, description, length, rental_rate FROM film WHERE title = 'lord of the rings'

SELECT film_id, title, description, length, rental_rate FROM film WHERE title LIKE 'Lo%'

SELECT * FROM film ORDER BY rental_rate fetch next 10 rows only

SELECT * FROM film ORDER BY rental_rate offset 10 rows fetch next 10 rows only

SELECT customer.customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date 
FROM payment
INNER JOIN customer ON payment.customer_id=customer.customer_id
ORDER BY customer.customer_id

SELECT * FROM inventory
SELECT * FROM rental

SELECT f.film_id, f.title 
FROM film AS f
LEFT JOIN inventory AS i
	ON f.film_id=i.film_id
WHERE i.film_id IS NULL


SELECT c.city_id, c.city, cou.country_id, cou.country
FROM city AS c
INNER JOIN country AS cou
	ON c.country_id=cou.country_id


SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date, p.staff_id
FROM customer AS c
INNER JOIN payment AS p
	ON c.customer_id=p.customer_id
ORDER BY p.staff_id

SELECT * FROM payment


SELECT f.rating, COUNT(*) AS film_count
FROM film AS f
GROUP BY rating

SELECT f.title, f.rating
FROM film AS f
WHERE f.rating = 'G' OR f.rating = 'PG-13'

SELECT f.title, f.length, f.rental_rate
FROM film AS f


SELECT f.title, f.rating, f.rental_rate
FROM film AS f
WHERE (f.rating = 'G' OR f.rating = 'PG-13') AND (f.length < 120 AND f.rental_rate <3)
ORDER BY f.title

