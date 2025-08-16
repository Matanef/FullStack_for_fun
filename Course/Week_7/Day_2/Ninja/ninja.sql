SELECT c.first_name, c.last_name
FROM customers AS c
ORDER BY c.first_name ASC
OFFSET (SELECT COUNT(*)-2 FROM customers)
FETCH NEXT 2 ROWS ONLY

SELECT first_name, last_name
FROM (
	SELECT c.first_name, c.last_name
	FROM customers AS c
	ORDER BY c.first_name DESC
	FETCH NEXT 2 ROWS ONLY
) AS sub
ORDER BY first_name ASC

DELETE FROM purchases p
USING customers c
WHERE p.customer_id = c.id
	AND c.first_name = 'Scott'

DELETE FROM customers 
WHERE first_name = 'Scott'


SELECT * FROM purchases
SELECT * FROM customers WHERE first_name = 'Scott'


SELECT p.id, p.quantity_purchased, c.first_name, c.last_name 
FROM purchases AS p
LEFT JOIN customers AS c
	ON p.customer_id=c.id

SELECT p.quantity_purchased FROM purchases AS p
INNER JOIN customers AS c
	ON p.customer_id=c.id
WHERE c.first_name = 'Scott'