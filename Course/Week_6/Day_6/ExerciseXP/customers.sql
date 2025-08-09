ALTER TABLE customers ADD COLUMN id INT;
ALTER TABLE customers ADD COLUMN first_name TEXT;
ALTER TABLE customers ADD COLUMN last_name TEXT;

INSERT INTO customers (id, first_name, last_name)
VALUES (1, 'Greg', 'Jones'),
(2, 'Sandra', 'Jones'),
(3, 'Scott', 'Scott'),
(4, 'Trevor', 'Green'),
(5, 'Melanie', 'Johnson');

select* from customers

SELECT * FROM customers WHERE last_name = 'Smith'
SELECT * FROM customers WHERE last_name = 'Jones'
SELECT * FROM customers WHERE last_name != 'Scott'