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