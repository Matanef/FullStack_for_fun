CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

SELECT * FROM FirstTab

CREATE TABLE SecondTab (
    id integer 
)

INSERT INTO SecondTab VALUES
(5),
(NULL)


SELECT * FROM SecondTab

SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )

// since the subquery results in null.
// the main query becomes:
//SELECT COUNT(*)
//FROM FirstTab AS ft
//WHERE ft.id NOT IN (NULL)

//the WHERE result then returns no rows at all since we are comparing to null
// the COUNT function will then have no rows to count which will result in the answer 0.


SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )

// the result will be 2 
// because we are filtering the id= 5 using the subquery
// and NULL is automatically filtered out


SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )

// will result in 0 since at the subquery we do not specify a specific id
// but references the entire column
// and when comparing the query to the subquery it results in 0


SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )

// here the subquery is requesting everything that is not NULL
// meaning we are resulting with 5 which will then compare it with the ft.id
// and will filter out id = 5 leaving us with 2 rows