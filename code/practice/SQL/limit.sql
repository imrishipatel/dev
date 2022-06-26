SELECT title, released_year FROM book_shop.books; 

SELECT title, released_year FROM book_shop.books ORDER BY released_year DESC LIMIT 5; 

SELECT title, author_fname from book_shop.books WHERE author_fname LIKE '%da%'; 

SELECT title FROM book_shop.books WHERE title LIKE '%the%'; 

SELECT title, stock_quantity FROM book_shop.books WHERE stock_quantity LIKE '____'; 

SELECT title, stock_quantity FROM book_shop.books WHERE title LIKE '%\%%'; 

SELECT * FROM book_shop.books;

-- Challenge

SELECT title FROM book_shop.books WHERE title LIKE '%stories%'; 

SELECT title, pages FROM book_shop.books ORDER BY pages DESC LIMIT 1; 

SELECT title, author_lname FROM book_shop.books WHERE author_lname LIKE '% %'; 

SELECT title, released_year, stock_quantity FROM book_shop.books ORDER BY stock_quantity LIMIT 3; 

SELECT title, author_lname FROM book_shop.books ORDER BY author_lname, title ; 

SELECT 
CONCAT( 'MY FAVOURITE AUTHOR IS ', UPPER(author_fname), ' ', UPPER(author_lname), '!') as yell 
FROM book_shop.books ORDER BY author_lname; 


 
