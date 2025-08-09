ALTER TABLE items ADD column id int;
ALTER TABLE items ADD column product_name TEXT;
ALTER TABLE items ADD column price int;

insert into items (id, product_name, price)
VALUES (1, 'Small Desk', 100),
(2, 'Large Desk', 300),
(3, 'Fan', 80);

select * from items

SELECT * FROM items WHERE price >80
SELECT * FROM items WHERE price <= 300


