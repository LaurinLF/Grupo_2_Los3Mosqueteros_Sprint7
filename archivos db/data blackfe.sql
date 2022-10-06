
insert into Colors 
	(name,
    createdAt,
    updatedAt)
values
	("black",
    "2022-09-22 23:23:27",
    "2022-09-22 23:23:27");
    
insert into Colors 
	(name,
    createdAt,
    updatedAt)
values
	("brown",
    "2022-09-22 23:23:27",
    "2022-09-22 23:23:27");
    
insert into Colors 
	(name,
    createdAt,
    updatedAt)
values
	("white",
    "2022-09-22 23:23:27",
    "2022-09-22 23:23:27");
    
insert into Users 
	(firstname,
    lastname,
    email,
    password,
    telephone,
    avatar,
    admin,
    createdAt,
    updatedAt)
values 
	("Ezequiel",
    "Santillan",
    "santillanezequielm@gmail.com",
    "$2a$10$cv7Ysb7jyf0Mk1WYSE6MleiBaKPTTaZWYhUqLBPQvUpWX8I1QW/86",
    "12312423421",
    "default-user.svg",
    0,
    "2022-09-22 23:23:27",
    "2022-09-22 23:23:27");

insert into Users 
	(firstname,
    lastname,
    email,
    password,
    telephone,
    avatar,
    admin,
    createdAt,
    updatedAt)
values 
	("FRan",
    "Lopez",
    "fran@gmail.com",
    "$2a$10$/Fcu3Mfh5.qcfVojUWx6QOAHc4ZEdTGuypYHsZuf2H2NeATCfi40G",
    "12312423422",
    "default-user.svg",
    1,
    "2022-09-22 23:23:27",
    "2022-09-22 23:23:27");    
    
insert into Users 
	(firstname,
    lastname,
    email,
    password,
    telephone,
    avatar,
    admin,
    createdAt,
    updatedAt)
values 
	("FRan",
    "Lopez",
    "fran@gmail.org",
    "$2a$10$Pax/n1ppPRs9Ig0AGSIOt.q7zAgEiK0AE8DvGCffP3BqAzbTa0b3m",
    "12312423423",
    "default-user.svg",
    0,
    "2022-09-22 23:23:27",
    "2022-09-22 23:23:27");    
    
insert into Users 
	(firstname,
    lastname,
    email,
    password,
    telephone,
    avatar,
    admin,
    createdAt,
    updatedAt)
values 
	("Laurin",
    "Linares",
    "laura@hotmail.com",
    "$2a$10$vqOr.ru78rdajUJkTx5w3Ok9duuXOVkL5mNXD/nRTYGlcl/P9QpZm",
    "12312423425",
    "default-user.svg",
    0,
    "2022-09-22 23:23:27",
    "2022-09-22 23:23:27");  
    
insert into Products
	(name,
	price,
    description,
    measures,
    discount,
    stock,
    id_category,
    id_color,
    createdAt,
    updatedAt)
values
	("Escritorio X",
    "40000",
    "Escritorio hecho con madera refinada y soporte de hierro en forma de X. Con un atractivo diseño, este modelo combina lo fino y delicado con el estilo industrial e informal, ideal para cualquier espacio de la casa.",
    "74cm de altura - 60 cm de ancho - 120cm de largo",
    10,
    null,
    1,
    2,
    "2022-09-22 23:23:27",
    "2022-09-22 23:23:27");
    
insert into Products
	(name,
	price,
    description,
    measures,
    discount,
    stock,
    id_category,
    id_color,
    createdAt,
    updatedAt)
values
	("Mesa Cruz Guayubirá",
    "130000",
    "Mesa de comedor de hierro y madera estilo industrial",
    "75cm de altura - 70cm de ancho - 1.20mts de largo",
    15,
    null,
    2,
    2,
    "2022-09-22 23:23:27",
    "2022-09-22 23:23:27");    
    
insert into Products
	(name,
	price,
    description,
    measures,
    discount,
    stock,
    id_category,
    id_color,
    createdAt,
    updatedAt)
values
	("Espejo Blackfe",
    "21900",
    "Espejo con marco y recuadros de hierro estilo industrial",
    "44cm de largo - 10cm de profundidad",
    10,
    null,
    3,
    1,
    "2022-09-22 23:23:27",
    "2022-09-22 23:23:27");
    
insert into Products
	(name,
	price,
    description,
    measures,
    discount,
    stock,
    id_category,
    id_color,
    createdAt,
    updatedAt)
values
	("Mesa Ratona Industrial Unicornio 3000",
    "45000",
    "Hermosa mesa ratona realizada a mano en el camino hacia el dorado",
    "100 - 100 - 75",
    5,
    null,
    4,
    2,
    "2022-09-22 23:23:27",
    "2022-09-22 23:23:27");
    
insert into Products
	(name,
	price,
    description,
    measures,
    discount,
    stock,
    id_category,
    id_color,
    createdAt,
    updatedAt)
values
	("Espejo Largo",
    "50000",
    "Espejo para suelo",
    "1m - 75cm - 1m",
    0,
    null,
    3,
    1,
    "2022-09-22 23:23:27",
    "2022-09-22 23:23:27");
    
insert into Products
	(name,
	price,
    description,
    measures,
    discount,
    stock,
    id_category,
    id_color,
    createdAt,
    updatedAt)
values
	("Mesa Redonda",
    "40000",
    "Mesa para 4",
    "1m - 75cm - 1m",
    0,
    null,
    2,
    2,
    "2022-09-22 23:23:27",
    "2022-09-22 23:23:27");
    
insert into Images
	(id_product,
    path,
    createdAt,
    updatedAt)
values
	(1,
    "escritorio.jpg",
    "2022-09-22 23:23:27",
    "2022-09-22 23:23:27");
    
insert into Images
	(id_product,
    path,
    createdAt,
    updatedAt)
values
	(1,
    "escritorio.jpg",
    "2022-09-22 23:23:27",
    "2022-09-22 23:23:27");
 
insert into Images
	(id_product,
    path,
    createdAt,
    updatedAt)
values
	(2,
    "mesa-x.jpg",
    "2022-09-22 23:23:27",
    "2022-09-22 23:23:27");

insert into Images
	(id_product,
    path,
    createdAt,
    updatedAt)
values
	(3,
    "espejo.jpg",
    "2022-09-22 23:23:27",
    "2022-09-22 23:23:27");
    
insert into Images
	(id_product,
    path,
    createdAt,
    updatedAt)
values
	(4,
    "imgProduct_1659658170813.jpg",
    "2022-09-22 23:23:27",
    "2022-09-22 23:23:27");
    
insert into Images
	(id_product,
    path,
    createdAt,
    updatedAt)
values
	(5,
    "imgProduct_1659902735779.jpg",
    "2022-09-22 23:23:27",
    "2022-09-22 23:23:27");
    
insert into Images
	(id_product,
    path,
    createdAt,
    updatedAt)
values
	(6,
    "imgProduct_1660581216369.jpg",
    "2022-09-22 23:23:27",
    "2022-09-22 23:23:27");
    
    