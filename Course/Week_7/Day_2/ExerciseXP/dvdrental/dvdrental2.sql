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

SELECT * FROM customer
WHERE customer_id = 500

UPDATE customer
SET first_name = 'Matan', last_name = 'Efrati'
WHERE customer_id = 500;

SELECT c.customer_id, c.first_name, c.last_name, a.address, a.address2, a.district, ci.city
FROM customer AS c
INNER JOIN address AS a
	ON c.address_id=a.address_id
INNER JOIN city AS ci
	ON a.city_id = ci.city_id
WHERE c.customer_id = 500


UPDATE address a
SET 
	address = 'Nitzana 19',
	address2 = 'Floor.1 Apt.1',
	district = 'Dan'
FROM customer c
WHERE a.address_id = c.address_id
	AND c.customer_id = 500

UPDATE city ci
SET
	city = 'Givatayim'
FROM address a
JOIN customer c
ON a.address_id = c.address_id
WHERE ci.city_id = a.city_id
	AND c.customer_id = 500