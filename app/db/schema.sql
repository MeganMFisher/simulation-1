CREATE TABLE shelves (
    id SERIAL PRIMARY KEY,
    shelf VARCHAR(50)
)

INSERT INTO shelves(shelf)VALUES('A'), ('B'), ('C'), ('D')


CREATE TABLE bins (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150),
    price VARCHAR(150),
    shelf Varchar(50)
)


INSERT INTO bins(name, price, shelf)VALUES('Airbok Sneakers', '25.45', 'A'), ('Reebox Sneakers', '45.35', 'B'), ('Nike Sneakers', '85.89', 'C'), ('Ralph Lauren Sneakers', '55.67', 'D')
