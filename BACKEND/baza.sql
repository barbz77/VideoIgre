


ALTER DATABASE db_abb4fb_wp8 SET SINGLE_USER WITH
ROLLBACK IMMEDIATE;
GO
ALTER DATABASE db_abb4fb_wp8 COLLATE Latin1_General_100_CI_AI_SC_UTF8;
GO
ALTER DATABASE db_abb4fb_wp8 SET MULTI_USER;
GO


--use master;
--go
--drop database if exists preporucitelj;
--go
--create database preporucitelj collate Croatian_CI_AS;
--go
--use preporucitelj;

create table igrice(
sifra int not null primary key identity(1,1),
naziv varchar(100) not null,
ocjena decimal(3,1) not null,
godinaIzdanja datetime not null
);

create table zanrovi(
sifra int not null primary key identity(1,1),
naziv varchar(100) not null
);

create table platforme(
sifra int not null primary key identity(1,1),
naziv varchar(100) not null
);

create table igriceZanrovi(
igrica int not null references igrice(sifra),
zanr int not null references zanrovi(sifra)
);

create table igricePlatforme(
igrica int not null references igrice(sifra),
platforma int not null references platforme(sifra)
);


insert into igrice (naziv, ocjena, godinaIzdanja) values
('The Witcher 3: Wild Hunt', 9.7, '2015-05-19'),

('Red Dead Redemption 2', 9.7, '2018-10-26'),

('Grand Theft Auto V', 9.5, '2013-09-17'),

('Cyberpunk 2077', 8.5, '2020-12-10'),

('Elden Ring', 9.5, '2022-02-25'),

('The Legend of Zelda: Breath of the Wild', 9.7, '2017-03-03'),

('God of War (2018)', 9.4, '2018-04-20'),

('Spider-Man: Miles Morales', 8.7, '2020-11-12'),

('Horizon Zero Dawn', 9.0, '2017-02-28'),

('Minecraft', 9.3, '2011-11-18'),

('The Legend of Zelda: Ocarina of Time', 9.9, '1998-11-23'),

('Grand Theft Auto IV', 9.8, '2008-04-29'),

('Super Mario Galaxy', 9.7, '2007-11-12'),

('Super Mario Galaxy 2', 9.7, '2010-05-23'),

('Disco Elysium: The Final Cut', 9.7, '2021-03-30'),

('Half-Life 2', 9.6, '2004-11-16'),

('Baldurs Gate 3', 9.6, '2023-08-03'),

('The Legend of Zelda: Tears of the Kingdom', 9.6, '2023-05-12'),

('Resident Evil 4 (2005)', 9.6, '2005-01-11'),

('The Elder Scrolls V: Skyrim', 9.6, '2011-11-11'),

('Half-Life', 9.6, '1998-11-19'),

('Metroid Prime Remastered', 9.4, '2023-02-08'),

('BioShock', 9.6, '2007-08-21'),

('Portal 2', 9.5, '2011-04-19'),

('Mass Effect 2', 9.6, '2010-01-26'),

('Uncharted 2: Among Thieves', 9.6, '2009-10-13'),

('Red Dead Redemption', 9.5, '2010-05-18'),

('God of War Ragnarök', 9.4, '2022-11-09'),

('The Last of Us Remastered', 9.5, '2014-07-29'),

('Persona 5 Royal', 9.5, '2020-03-31'),

('Outer Wilds', 9.3, '2019-05-28'),

('Hades', 9.3, '2020-09-17'),

('Celeste', 9.2, '2018-01-25'),

('Ori and the Blind Forest', 8.8, '2015-03-11'),

('Bloodborne', 9.2, '2015-03-24'),

('Dark Souls', 8.9, '2011-09-22'),

('Sekiro: Shadows Die Twice', 9.1, '2019-03-22'),

('Control', 8.4, '2019-08-27'),

('Dishonored 2', 8.8, '2016-11-11'),

('DOOM (2016)', 8.5, '2016-05-13'),

('Marvels Spider-Man', 8.7, '2018-09-07'),

('Ghost of Tsushima', 8.3, '2020-07-17'),

('Horizon Forbidden West', 8.8, '2022-02-18'),

('Death Stranding', 8.2, '2019-11-08'),

('Returnal', 8.6, '2021-04-30'),

('Demons Souls (PS5)', 9.2, '2020-11-12'),

('Ratchet & Clank: Rift Apart', 8.8, '2021-06-11'),

('It Takes Two', 8.8, '2021-03-26'),

('Psychonauts 2', 9.1, '2021-08-25'),

('Inside', 9.2, '2016-06-29');

insert into zanrovi (naziv) values
('Action'),
('RPG'),
('Open World'),
('Action-Adventure'),
('FPS'),
('Hack and Slash'),
('Sandbox'),
('Survival'),
('Crafting'),
('Platformer'),
('Detective'),
('Tactical RPG'),
('Survival Horror'),
('Third-Person Shooter'),
('Metroidvania'),
('Puzzle'),
('JRPG'),
('Social Simulation'),
('Exploration'),
('Roguelike'),
('Stealth'),
('Co-op'),
('Strategy'),
('Real-time Strategy'),
('Turn-based Strategy'),
('Sports'),
('Racing'),
('Fighting'),
('Simulation'),
('Visual Novel'),
('Card Game'),
('Board Game'),
('Music'),
('Rhythm'),
('Educational'),
('Party Game'),
('MMORPG'),
('MOBA'),
('Battle Royale'),
('Tower Defense'),
('Point and Click'),
('Interactive Fiction'),
('Arcade'),
('Pinball'),
('Trivia'),
('Vehicular Combat'),
('Grand Strategy'),
('City-Building'),
('Tycoon');

insert into platforme (naziv) values
('PC'),
('PlayStation 4'),
('Xbox One'),
('PlayStation 5'),
('Xbox Series X/S'),
('Nintendo Switch'),
('PlayStation 3'),
('Xbox 360'),
('Wii'),
('macOS'),
('Linux'),
('iOS'),
('Android'),
('Stadia'),
('Nintendo 64'),
('GameCube');

insert into igriceZanrovi (igrica, zanr) values
(1, 1), (1, 2), (1, 3), (2, 4), (2, 3), (3, 4), (3, 3),
(4, 1), (4, 2), (4, 3), (4, 5), (5, 1), (5, 2), (5, 3), (6, 4), (6, 3),
(7, 4), (7, 6), (8, 4), (9, 1), (9, 2), (9, 3), (10, 7), (10, 8), (10, 9),
(11, 4), (12, 4), (12, 3), (13, 10), (14, 10), (15, 2), (15, 4), (15, 11),
(16, 5), (16, 4), (17, 2), (17, 12), (18, 4), (18, 3), (19, 13), (19, 14),
(20, 1), (20, 2), (20, 3), (21, 5), (22, 4), (22, 5), (22, 15), (23, 5), (23, 4), (23, 13),
(24, 16), (24, 10), (25, 1), (25, 2), (25, 14), (26, 4), (26, 14), (27, 4), (27, 3),
(28, 4), (28, 6), (29, 4), (29, 13), (30, 17), (30, 18), (31, 4), (31, 19), (31, 16),
(32, 20), (32, 1), (32, 6), (33, 10), (34, 15), (34, 10), (35, 1), (35, 2),
(36, 1), (36, 2), (37, 4), (37, 21), (38, 4), (38, 14), (39, 4), (39, 21),
(40, 5), (41, 4), (42, 4), (42, 21), (42, 3), (43, 1), (43, 2), (43, 3),
(44, 4), (45, 14), (45, 20), (46, 1), (46, 2), (47, 10), (47, 14),
(48, 4), (48, 10), (48, 22), (49, 10), (49, 4), (50, 16), (50, 10); 


insert into igricePlatforme (igrica, platforma) values
(1, 1), (1, 2), (1, 3), (1, 6), (2, 2), (2, 3), (2, 1), (3, 7), (3, 8), (3, 2), (3, 3), (3, 1), (3, 4), (3, 5),
(4, 1), (4, 2), (4, 3), (4, 4), (4, 5), (5, 1), (5, 2), (5, 3), (5, 4), (5, 5), (6, 6), (7, 2), (7, 1),
(8, 2), (8, 4), (8, 1), (9, 2), (9, 1), (10, 1), (10, 12), (10, 13), (10, 7), (10, 8), (10, 6), (10, 2), (10, 3), (10, 4), (10, 5),
(11, 15), (12, 7), (12, 8), (12, 1), (13, 9), (14, 9), (15, 1), (15, 2), (15, 4), (15, 3), (15, 5), (15, 6),
(16, 1), (16, 8), (17, 1), (17, 4), (17, 5), (18, 6), (19, 16), (19, 1), (19, 9),
(20, 1), (20, 7), (20, 8), (20, 2), (20, 3), (20, 6), (20, 4), (20, 5), (21, 1), (22, 6), (23, 1), (23, 8), (23, 7),
(24, 1), (24, 7), (24, 8), (25, 1), (25, 8), (25, 7), (26, 7), (27, 7), (27, 8), (28, 2), (28, 4),
(29, 2), (30, 2), (30, 4), (30, 6), (30, 1), (30, 3), (30, 5), (31, 1), (31, 3), (31, 2), (31, 6), (31, 4), (31, 5),
(32, 1), (32, 6), (32, 2), (32, 3), (32, 4), (32, 5), (33, 1), (33, 6), (33, 2), (33, 3),
(34, 3), (34, 1), (34, 6), (35, 2), (36, 7), (36, 8), (36, 1), (37, 1), (37, 2), (37, 3),
(38, 1), (38, 2), (38, 3), (38, 4), (38, 5), (38, 6), (39, 1), (39, 2), (39, 3), (40, 1), (40, 2), (40, 3), (40, 6),
(41, 2), (41, 1), (42, 2), (42, 4), (42, 1), (43, 2), (43, 4), (43, 1), (44, 2), (44, 1),
(45, 4), (45, 1), (46, 4), (47, 4), (47, 1), (48, 1), (48, 2), (48, 3), (48, 4), (48, 5), (48, 6),
(49, 1), (49, 3), (49, 2), (49, 5), (50, 1), (50, 3), (50, 2), (50, 6), (50, 12);


