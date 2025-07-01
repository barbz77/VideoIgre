use master;
go
drop database if exists preporucitelj;
go
create database preporucitelj collate Croatian_CI_AS;
go
use preporucitelj;

create table igrice(
sifra int not null primary key identity(1,1),
naziv varchar(100) not null,
ocjena decimal(3,1) not null,
godina_izdanja datetime not null
);

create table zanrovi(
sifra int not null primary key identity(1,1),
naziv varchar(100) not null
);

create table platforme(
sifra int not null primary key identity(1,1),
naziv varchar(100) not null
);

create table igrice_zanrovi(
igrica int not null references igrice(sifra),
zanr int not null references zanrovi(sifra)
);

create table igrice_platforme(
igrica int not null references igrice(sifra),
platforma int not null references platforme(sifra)
);


insert into igrice (naziv, ocjena, godina_izdanja) values
('The Witcher 3: Wild Hunt', 9.7, '2015-05-19'),
('Red Dead Redemption 2', 9.7, '2018-10-26'),
('Grand Theft Auto V', 9.5, '2013-09-17'),
('Cyberpunk 2077', 8.5, '2020-12-10'),
('Elden Ring', 9.5, '2022-02-25'),
('The Legend of Zelda: Breath of the Wild', 9.7, '2017-03-03'),
('God of War (2018)', 9.4, '2018-04-20'),
('Spider-Man: Miles Morales', 8.7, '2020-11-12'),
('Horizon Zero Dawn', 9.0, '2017-02-28'),
('Minecraft', 9.3, '2011-11-18');

insert into zanrovi (naziv) values
('RPG'),
('Action'),
('Adventure'),
('Open World'),
('FPS'),
('Fantasy'),
('Sci-Fi'),
('Horror'),
('Building'),
('Survival');

insert into platforme (naziv) values
('PC'),
('PlayStation 4'),
('PlayStation 5'),
('Xbox One'),
('Xbox Series X/S'),
('Nintendo Switch');

insert into igrice_zanrovi (igrica, zanr) values
(1,1),(1,2),(1,4),(2,2),(2,3),(2,4),(3,2),(3,4),(4,1),(4,2),(4,4),(4,7),(5,1),
(5,2),(5,5),(5,4),(6,3),(6,4),(6,1),(7,2),(7,3),(7,1),(8,2),(8,3),(8,4),(9,2),
(9,1),(9,4),(9,7),(10,9),(10,10),(10,4); 


insert into igrice_platforme (igrica, platforma) values
(1, 1),(1, 2),(1, 4),(1, 6),(2, 1),(2, 2),(2, 4),(3, 1),(3, 2),(3, 3),(3, 4),
(3, 5),(4, 1),(4, 2),(4, 3),(4, 4),(4, 5),(5, 1),(5, 2),(5, 3),(5, 4),(5, 5),(6, 6),
(7, 2),(7, 1),(8, 2),(8, 3),(8, 1),(9, 2),(9, 1),(10, 1),(10, 2),(10, 3),(10, 4),(10, 5),(10, 6);


-- Broj igara grupirano po žanru
-- Broj igara grupirano po platformi


select a.naziv as naziv_zanra, c.naziv as naziv_igre
from zanrovi as a
inner join igrice_zanrovi as b on a.sifra = b.zanr
inner join igrice as c on b.igrica = c.sifra
order by a.naziv, c.naziv;


select a.naziv as naziv_platforme, c.naziv as naziv_igre
from platforme as a
inner join igrice_platforme as b on a.sifra = b.platforma
inner join igrice as c on b.igrica = c.sifra
order by a.naziv, c.naziv;