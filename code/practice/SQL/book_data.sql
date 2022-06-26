
CREATE TABLE book_shop.books 
	(
		book_id INT NOT NULL AUTO_INCREMENT,
		title VARCHAR(100),
		author_fname VARCHAR(100),
		author_lname VARCHAR(100),
		released_year INT,
		stock_quantity INT,
		pages INT,
		PRIMARY KEY(book_id)
	);

INSERT INTO book_shop.books (title, author_fname, author_lname, released_year, stock_quantity, pages)
VALUES
('The Namesake', 'Jhumpa', 'Lahiri', 2003, 32, 291),
('Norse Mythology', 'Neil', 'Gaiman',2016, 43, 304),
('American Gods', 'Neil', 'Gaiman', 2001, 12, 465),
('Interpreter of Maladies', 'Jhumpa', 'Lahiri', 1996, 97, 198),
('A Hologram for the King: A Novel', 'Dave', 'Eggers', 2012, 154, 352),
('The Circle', 'Dave', 'Eggers', 2013, 26, 504),
('The Amazing Adventures of Kavalier & Clay', 'Michael', 'Chabon', 2000, 68, 634),
('Just Kids', 'Patti', 'Smith', 2010, 55, 304),
('A Heartbreaking Work of Staggering Genius', 'Dave', 'Eggers', 2001, 104, 437),
('Coraline', 'Neil', 'Gaiman', 2003, 100, 208),
('What We Talk About When We Talk About Love: Stories', 'Raymond', 'Carver', 1981, 23, 176),
("Where I'm Calling From: Selected Stories", 'Raymond', 'Carver', 1989, 12, 526),
('White Noise', 'Don', 'DeLillo', 1985, 49, 320),
('Cannery Row', 'John', 'Steinbeck', 1945, 95, 181),
('Oblivion: Stories', 'David', 'Foster Wallace', 2004, 172, 329),
('Consider the Lobster', 'David', 'Foster Wallace', 2005, 92, 343);


SELECT * FROM book_shop.books; 

SELECT author_fname, author_lname FROM book_shop.books;

SELECT CONCAT (author_fname, ' ', author_lname) FROM book_shop.books;

SELECT author_fname AS first, author_lname AS last, 
CONCAT(author_fname, ' ', author_lname) AS full
FROM book_shop.books; 

SELECT CONCAT(title, '-', author_fname, '-', author_lname) FROM book_shop.books;

SELECT CONCAT_WS('-', title, author_fname, author_lname) FROM book_shop.books; 


SELECT SUBSTRING('Hello World',1,7); 

SELECT SUBSTRING('Hello World', 7); 

SELECT SUBSTRING('Hello World', -6); 

SELECT SUBSTRING(title, 1, 10) AS short_title FROM book_shop.books; 

SELECT CONCAT(SUBSTRING(title, 1, 10), '...') AS 'short title' FROM book_shop.books; 

SELECT REPLACE('Hello World', 'Hell', '%$#@');

SELECT REPLACE(title, 'e', '3') FROM book_shop.books; 

SELECT REVERSE("Hello world"); 


SELECT CONCAT('woof', REVERSE('woof')) as PALINDROME; 

SELECT CONCAT(author_fname, REVERSE(author_fname)) FROM book_shop.books; 

SELECT author_lname, CHAR_LENGTH(author_lname) AS 'length' from book_shop.books; 

SELECT CONCAT(author_lname, ' is ', CHAR_LENGTH(author_lname), ' character\'s long. ') AS length_info from book_shop.books; 

SELECT (SELECT CONCAT('MY FAVOURITE BOOK IS ', LOWER(title)) WHERE title = 'The Namesake') AS favourite_book FROM book_shop.books; 

-- challenge

SELECT UPPER(REVERSE('Why does my cat look at me with such hatred?')); 

-- I-like-cats

SELECT (REPLACE(title, ' ', '->')) as 'title' FROM book_shop.books; 

SELECT author_lname as 'forwards', (REVERSE(author_lname)) as 'backwards' FROM book_shop.books;

SELECT UPPER(CONCAT_WS(' ', author_fname, author_lname)) as 'full name in caps' FROM book_shop.books; 

SELECT (CONCAT('The ', title, ' was release in ', released_year)) as 'blurb' FROM book_shop.books; 

SELECT title, (CHAR_LENGTH(title)) AS 'character count' FROM book_shop.books; 

SELECT CONCAT(SUBSTRING(title, 1, 10), '...') AS 'short title', 
(CONCAT(author_lname, ',', author_fname)) as 'author', 
(CONCAT(stock_quantity, ' in stock')) as 'quantity'
FROM book_shop.books; 


INSERT INTO book_shop.books
    (title, author_fname, author_lname, released_year, stock_quantity, pages)
    VALUES ('10% Happier', 'Dan', 'Harris', 2014, 29, 256), 
           ('fake_book', 'Freida', 'Harris', 2001, 287, 428),
           ('Lincoln In The Bardo', 'George', 'Saunders', 2017, 1000, 367);
           
SELECT DISTINC author_fname FROM book_shop.books; 
SELECT DISTINCT released_year FROM book_shop.books; 


SELECT DISTINCT author_lname FROM book_shop.books; 

SELECT DISTINCT CONCAT(author_fname, ' ', author_lname) AS 'distinct author names' FROM book_shop.books; 

SELECT author_lname FROM book_shop.books ORDER BY author_lname; 

SELECT released_year FROM book_shop.books ORDER BY released_year; 

SELECT released_year FROM book_shop.books ORDER BY released_year DESC; 

SELECT title, author_fname, author_lname from book_shop.books ORDER BY 1; 

SELECT title, released_year FROM book_shop.books
ORDER BY released_year DESC LIMIT 5; 
