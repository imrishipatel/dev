

CREATE TABLE test_db.cats (
	cat_id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(100), 
    AGE INT, 
    PRIMARY KEY(cat_id)
);

INSERT INTO test_db.cats (name, AGE)
VALUES ('Charlie', 17); 

INSERT INTO test_db.cats (name, AGE)
VALUES ('Connie', 10); 

SELECT * FROM test_db.cats; 