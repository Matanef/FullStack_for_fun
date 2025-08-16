CREATE TABLE purchases (
    id SERIAL PRIMARY KEY,
    customer_id INT NOT NULL REFERENCES customers(id),
    item_id INT NOT NULL REFERENCES items(id),
    quantity_purchased INT NOT NULL CHECK (quantity_purchased > 0)
);

ALTER TABLE customers
ADD PRIMARY KEY (id)

ALTER TABLE items
ADD PRIMARY KEY (id)

SELECT * FROM purchases
SELECT * FROM customers
SELECT * FROM items

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (3, 3, 1),
	(5, 2, 10),
	(1, 1,2 )

DROP TABLE purchases

SELECT * FROM purchases

SELECT p.*, c.first_name, c.last_name FROM purchases AS p
INNER JOIN customers AS c
	ON p.customer_id=c.id

SELECT p.*, c.first_name, c.last_name
FROM purchases AS p
INNER JOIN customers AS c
	ON p.customer_id = c.id
WHERE c.id = 5


SELECT p.*, i.product_name
FROM purchases AS p
INNER JOIN items AS i
	ON p.item_id= i.id
WHERE i.product_name = 'Large Desk' OR i.product_name = 'Small Desk'


SELECT * FROM items

SELECT c.first_name, c.last_name, i.product_name
FROM purchases AS p
INNER JOIN customers AS c
	ON p.customer_id=c.id
INNER JOIN items AS i
	ON p.item_id=i.id

INSERT INTO purchases (customer_id, quantity_purchased)
VALUES (2,4)
