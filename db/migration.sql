DROP TABLE IF EXISTS wishes;

CREATE TABLE wishes (
    id serial PRIMARY KEY,
    name varchar(50),
    price numeric(9, 2)
);

INSERT INTO wishes (name, price) VALUES
('Remade Mortal Kombat 1', 70.00),
('Couch', 2500.72),
('Mac computer', 1700.36);