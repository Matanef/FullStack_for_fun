SELECT * FROM actor


CREATE or REPLACE FUNCTION age_actor(fn varchar(50), lan varchar(100)) 
RETURNS date AS $birthdate$
BEGIN
   RETURN(SELECT age FROM actor WHERE actor.first_name = fn AND actor.last_name=lan);
END;
$birthdate$ LANGUAGE plpgsql;

SELECT * FROM actor

SELECT * FROM age_actor('Ellen', 'Presley')
