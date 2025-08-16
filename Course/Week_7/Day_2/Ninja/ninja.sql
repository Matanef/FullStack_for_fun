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

DELETE FROM purchases 
WHERE customer_id = 5

SELECT * FROM purchases
SELECT * FROM customers


SELECT * FROM purchases 