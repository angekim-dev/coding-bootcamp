DROP TABLE IF EXISTS actors;

CREATE TABLE actors (
    id SERIAL primary key, --numeration
    Name VARCHAR(100) NOT NULL, --string with max 255 characters
    Age INT, --integer
    Number_of_Oscars INT
);
--Lets add some rows to the table
INSERT INTO actors (Name, Age, Number_of_Oscars)
VALUES('Leonardo DiCaprio', 41, 1);

INSERT INTO actors (Name, Age, Number_of_Oscars)
VALUES ('Jennifer Lawrence', 25, 1);

INSERT INTO actors (Name, Age, Number_of_Oscars)
VALUES ('Samuel L. Jackson', 67, 0);

INSERT INTO actors (Name, Age, Number_of_Oscars)
VALUES ('Meryl Streep', 66, 3);

INSERT INTO actors (Name, Age, Number_of_Oscars)
VALUES ('John Cho', 43, 0);

-- Which actors have more than one oscar?
-- SELECT * FROM actors WHERE number_of_oscars > 1;

-- Which actors are older than 30 years old?
-- SELECT * FROM actors WHERE age > 30;
