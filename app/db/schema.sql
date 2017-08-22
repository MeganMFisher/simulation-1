CREATE TABLE bins (
    shelf VARCHAR(50),
    bin INTEGER,
    id VARCHAR(50),
    item VARCHAR(150),
    price VARCHAR(150),
    image Varchar
)


INSERT INTO bins(shelf, bin, id, item, price, image)VALUES('A', 1, 'A1', 'Airbok Sneakers', '$25.45', 'http://static.highsnobiety.com/wp-content/uploads/2017/03/10120857/best-adidas-sneakers-2017-feature-july-320x192.jpg'), 
('A', 2, 'A2', 'Reebox Sneakers', '$45.35', 'http://www.reebok.com/dwstatic/sits_pod27/dw/image/v2/AAJP_PRD/on/demandware.static/-/Sites-reebok-products/en_US/dwe3accf63/zoom/39749_01.jpg?sw=2000&sfrm=jpg'), 
('A', 3, 'A3', 'Nike Sneakers', '85.89', 'https://s-media-cache-ak0.pinimg.com/736x/ef/8a/4e/ef8a4e5929003c4102d571cfd2b998b9--black-nikes-nike-shoes-roshe-black.jpg'), 
('A', 4, 'A4', 'Ralph Lauren Sneakers', '55.67', 'http://www.ralphlauren.com/graphics/product_images/pPOLO2-25331159_lifestyle_t240.jpg')


INSERT INTO bins(shelf, bin, id)
VALUES ('A', 5, 'A5'),
('B', 1, 'B1'),
('B', 2, 'B2'),
('B', 3, 'B3'),
('B', 4, 'B4'),
('B', 5, 'B5'),
('C', 1, 'C1'),
('C', 2, 'C2'),
('C', 3, 'C3'),
('C', 4, 'C4'),
('C', 5, 'C5'),
('D', 1, 'D1'),
('D', 2, 'D2'),
('D', 3, 'D3'),
('D', 4, 'D4'),
('D', 5, 'D5')