CREATE TABLE students (
id SERIAL primary key,
last_name varchar(50),
first_name varchar(50),
birth_date DATE
)

DROP TABLE students

select * from students

INSERT INTO students (last_name, first_name, birth_date)
VALUES ('Benichou', 'Marc', '1998-11-02'),
('Cohen', 'Yoan', '2010-12-03'),
('Benichou', 'Lea', '1987-07-27'),
('Dux', 'Amelia', '1996-04-07'),
('Grez', 'David', '2003-06-14'),
('Simpson', 'Omer', '1980-10-03');

INSERT INTO students (last_name, first_name, birth_date)
VALUES ('Efrati', 'Matan', '1984-08-24')


select * from students
SELECT first_name, last_name FROM students
SELECT first_name, last_name FROM students WHERE id =2
SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc'
SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc'
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%'
SELECT first_name, last_name FROM students WHERE first_name LIKE 'a%'
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a'
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a_'

SELECT first_name, last_name FROM students WHERE id IN (1,3)

select * from students where birth_date > '2000-01-01'