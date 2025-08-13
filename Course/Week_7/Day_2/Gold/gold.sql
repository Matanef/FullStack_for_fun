SELECT * FROM students

UPDATE students
SET birth_date = '02/11/1998'
WHERE last_name = 'Benichou'

UPDATE students 
SET last_name = 'Guez'
WHERE last_name = 'Grez'

DELETE FROM students
WHERE last_name = 'Benichou' AND first_name = 'Lea'

SELECT first_name FROM students

SELECT COUNT(*) AS students_count
FROM students

SELECT COUNT(*) AS students_count
FROM students
WHERE birth_date> '01/01/2000'

SELECT s.first_name, COUNT(*) AS students_count
FROM students AS s
GROUP BY s.first_name

ALTER TABLE students
ADD math_grade int

SELECT * FROM students

UPDATE students
	SET math_grade = '80'
WHERE id = '1'

UPDATE students
	SET math_grade = '90'
WHERE id = 2 OR id = 4

UPDATE students
	SET math_grade = '40'
WHERE id = 6

SELECT COUNT(*) AS Above_83
FROM students
WHERE math_grade > 83

INSERT INTO students (first_name, last_name, birth_date, math_grade)
VALUES ('Omer', 'Simpson', '03/10/1980', 70)

SELECT 
	COUNT(math_grade) AS Number_grades,
	first_name, last_name 
FROM students
GROUP BY first_name,last_name

SELECT SUM(math_grade) AS sum_of_total_grades FROM students