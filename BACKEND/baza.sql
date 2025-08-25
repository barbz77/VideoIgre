


ALTER DATABASE db_abb4fb_wp8 SET SINGLE_USER WITH
ROLLBACK IMMEDIATE;
GO
ALTER DATABASE db_abb4fb_wp8 COLLATE Latin1_General_100_CI_AI_SC_UTF8;
GO
ALTER DATABASE db_abb4fb_wp8 SET MULTI_USER;
GO

create table igrice(
sifra int not null primary key identity(1,1),
naziv varchar(100) not null,
ocjena tinyint not null,
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
('The Witcher 3: Wild Hunt', 92, '2015-05-19'),

('Red Dead Redemption 2', 97, '2018-11-26'),

('Grand Theft Auto V', 97, '2014-11-18'),

('Cyberpunk 2077', 86, '2020-12-10'),

('Elden Ring', 96, '2022-02-25'),

('The Legend of Zelda: Breath of the Wild', 97, '2017-03-03'),

('God of War', 94, '2018-04-20'),

('Marvels Spider-Man: Miles Morales', 85, '2020-11-12'),

('Horizon Zero Dawn', 90, '2017-02-28'),

('Minecraft', 93, '2011-11-18'),

('The Legend of Zelda: Ocarina of Time', 99, '1998-11-23'),

('Grand Theft Auto IV', 98, '2008-04-29'),

('Super Mario Galaxy', 97, '2007-11-12'),

('Super Mario Galaxy 2', 97, '2010-05-23'),

('Disco Elysium: The Final Cut', 89, '2021-03-30'),

('Half-Life 2', 96, '2004-11-16'),

('Baldurs Gate 3', 96, '2023-08-03'),

('The Legend of Zelda: Tears of the Kingdom', 96, '2023-05-12'),

('Resident Evil 4 (2005)', 96, '2005-01-11'),

('The Elder Scrolls V: Skyrim', 96, '2011-11-11'),

('Half-Life', 96, '1998-11-19'),

('Metroid Prime Remastered', 94, '2023-02-08'),

('BioShock', 96, '2007-08-21'),

('Portal 2', 95, '2011-04-19'),

('Mass Effect 2', 96, '2010-01-26'),

('Uncharted 2: Among Thieves', 96, '2009-10-13'),

('Red Dead Redemption', 95, '2010-05-18'),

('God of War: Ragnarök', 94, '2022-11-09'),

('The Last of Us Remastered', 95, '2014-07-29'),

('Persona 5 Royal', 95, '2020-03-31'),

('Outer Wilds', 85, '2019-05-28'),

('Hades', 93, '2020-09-17'),

('Celeste', 92, '2018-01-25'),

('Ori and the Blind Forest', 88, '2015-03-11'),

('Bloodborne', 92, '2015-03-24'),

('Dark Souls', 89, '2011-09-22'),

('Sekiro: Shadows Die Twice', 90, '2019-03-22'),

('Control', 82, '2019-08-27'),

('Dishonored 2', 88, '2016-11-11'),

('DOOM Eternal', 88, '2020-03-20'),

('Marvels Spider-Man', 87, '2018-09-07'),

('Ghost of Tsushima', 83, '2020-07-17'),

('Horizon Forbidden West', 88, '2022-02-18'),

('Death Stranding', 82, '2019-11-08'),

('Returnal', 86, '2021-04-30'),

('Demons Souls', 92, '2020-11-12'),

('Ratchet & Clank: Rift Apart', 88, '2021-06-11'),

('It Takes Two', 88, '2021-03-26'),

('Psychonauts 2', 87, '2021-08-25'),

('Inside', 93, '2016-06-29'),

('Hollow Knight', 90, '2017-02-24'),

('Silent Hill 3', 85, '2003-08-05'),

('Nier: Automata', 88, '2017-03-07'),

('Undertale', 92, '2015-09-15'),

('What Remains of Edith Finch', 88, '2017-04-25'),

('Fire Emblem: Three Houses', 89, '2019-07-26'),

('Final Fantasy VII Remake', 87, '2020-04-10'),

('Persona 5', 93, '2017-04-04'),

('Stardew Valley', 89, '2016-02-26'),

('The Last Guardian', 82, '2016-12-06'),

('BioShock Infinite', 94, '2013-03-25'),

('Divinity: Original Sin II', 93, '2017-09-14'),

('Star Wars: Knights of the Old Republic', 94, '2003-07-15'),

('Okami', 93, '2006-09-19'),

('Silent Hill', 86, '1999-02-24'),

('Firewatch', 81, '2016-02-09'),

('Tomb Raider', 86, '2013-03-05'),

('The Outer Worlds', 85, '2019-10-25'),

('Subnautica', 87, '2018-01-23'),

('The Last of Us Part II', 93, '2020-06-19'),

('Batman: Arkham City', 94, '2011-10-18'),

('Super Mario Odyssey', 97, '2017-10-27'),

('Final Fantasy VII', 92, '1997-09-07'),

('Portal', 90, '2007-10-10'),

('Dead Cells', 89, '2018-08-07'),

('Shadow of the Colossus', 91, '2018-02-06'),

('Uncharted 4: A Thiefs End', 93, '2016-05-10'),

('Persona 4 Golden', 93, '2012-06-14'),

('Bayonetta', 90, '2009-10-29'),

('Silent Hill 2', 86, '2024-10-08'),

('Metal Gear Solid V: The Phantom Pain', 93, '2015-09-01'),

('Dark Souls III', 89, '2016-03-24'),

('Dishonored', 88, '2012-10-09'),

('Dragon Quest XI S: Echoes of an Elusive Age - Definitive Edition', 91, '2019-09-27'),

('Batman: Arkham Asylum', 92, '2009-08-25'),

('The Talos Principle', 85, '2014-12-11'),

('The Elder Scrolls III: Morrowind', 87, '2002-05-01'),

('Chrono Trigger', 92, '1995-03-11'),

('Grim Fandango', 94, '1998-10-14'),

('Diablo II', 88, '2000-06-28'),

('System Shock 2', 92, '1999-08-11'),

('Planescape: Torment', 91, '1999-12-14'),

('Castlevania: Symphony of the Night', 89, '2007-03-21'),

('Final Fantasy Tactics', 88, '2007-10-09'),

('Street Fighter 6', 92, '2023-06-02'),

('Astro Bot', 94, '2024-09-06'),

('Untitled Goose Game', 81, '2019-09-20'),

('Terraria', 81, '2013-03-27'),

('Baldurs Gate', 91, '1998-12-21'),

('Diablo', 94, '1996-12-31'),

('Grand Theft Auto: San Andreas', 95, '2004-10-26'),

('Grand Theft Auto: Vice City', 95, '2002-10-29'),

('Grand Theft Auto III', 97, '2001-10-22'),

('Fable', 85, '2004-09-14'),

('Psychonauts', 88, '2005-04-20'),

('The Witcher 2: Assassins of Kings', 88, '2012-04-17'),

('God of War III', 92, '2010-03-16'),

('God of War II', 93, '2007-03-13'),

('Disco Elysium', 91, '2019-10-15'),

('Baldurs Gate II: Shadows of Amn', 95, '2000-09-24'),

('Resident Evil 4', 93, '2023-03-24'),

('Resident Evil 2', 91, '2019-01-25'),

('Resident Evil Village', 84, '2021-05-07'),

('Resident Evil 7: biohazard', 86, '2017-01-24'),

('Resident Evil (Remake)', 91, '2002-04-30'),

('The Elder Scrolls IV: Oblivion', 94, '2006-03-20'),

('Mass Effect 3', 93, '2012-03-06'),

('Mass Effect', 91, '2007-11-20'),

('Uncharted 3: Drake’s Deception', 92, '2011-11-01'),

('Ori and the Will of the Wisps', 90, '2020-03-11'),

('Dark Souls II', 91, '2014-03-11'),

('DOOM 3', 87, '2004-08-03'),

('Spider-Man', 87, '2000-08-30'),

('Spider-Man 2', 83, '2004-06-28'),

('Death Stranding 2: On The Beach', 89, '2025-06-26'),

('Ratchet & Clank: Up Your Arsenal', 91, '2004-11-03'),

('Ratchet & Clank: Going Commando', 90, '2003-11-11'),

('Final Fantasy XVI', 87, '2023-06-22'),

('Final Fantasy XIV: Endwalker', 92, '2021-12-07'),

('Final Fantasy XV', 81, '2016-11-29'),

('Final Fantasy IX', 94, '2000-11-13'),

('Divinity: Original Sin', 87, '2014-06-30'),

('Star Wars Jedi: Survivor', 85, '2023-04-28'),

('Subnautica: Below Zero', 82, '2021-05-14'),

('Batman: Arkham Knight', 87, '2015-06-23'),

('Dead Cells: The Queen & The Sea', 92, '2022-01-06'),

('Bayonetta 2', 91, '2014-10-24'),

('Bayonetta 3', 86, '2022-10-28'),

('Metal Gear Solid 4: Guns of the Patriots', 94, '2008-06-12'),

('Metal Gear Solid 2: Sons of Liberty', 96, '2001-11-12'),

('Metal Gear Solid', 94, '1998-10-21'),

('Metal Gear Solid 3: Snake Eater', 91, '2004-11-17'),

('The Talos Principle 2: Road to Elysium', 90, '2024-06-14'),

('Chrono Cross', 94, '2000-08-15'),

('Diablo III', 88, '2012-05-15'),

('Diablo IV', 86, '2023-06-06'),

('Fable II', 89, '2008-10-21'),

('Assassins Creed', 81, '2007-11-13'),

('Assassins Creed Valhalla', 80, '2020-11-10'),

('Assassins Creed Odyssey', 83, '2018-10-02'),

('Assassins Creed IV: Black Flag', 88, '2013-10-29'),

('Assassins Creed II', 90, '2009-11-17'),

('Metro Exodus', 82, '2019-02-15'),

('Metro: 2033 Redux', 90, '2014-08-25'),

('Metro: Last Light', 82, '2013-05-13'),

('Blue Prince', 92, '2025-04-10'),

('Bramble: The Mountain King', 80, '2023-04-27'),

('DREDGE', 80, '2023-03-30'),

('The Last Campfire', 83, '2020-06-27'),

('Little Nightmares II', 82, '2021-02-11'),

('Lost Ark', 81, '2022-02-11'),

('Mortal Kombat 11', 82, '2019-04-23'),

('Mortal Kombat X', 83, '2015-04-14'),

('Mortal Kombat', 86, '2011-04-19'),

('Mortal Kombat 1', 83, '2023-09-19'),

('Outlast', 80, '2013-09-04'),

('Path of Exile', 86, '2013-10-23'),

('Slay the Spire', 89, '2019-01-23'),

('Stray', 83, '2022-07-19')


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
('Tycoon'),
('Dungeon Crawler'),
('Shoot Em Up'),
('Roguelite'),
('Beat Em up'),
('Puzzle-Platformer'),
('Walking Simulator'),
('First-Person Shooter'),
('Stealth Action'),
('Tactical RPG'),
('Point and Click');

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
('GameCube'),
('Game Boy Advance'),
('Nintendo DS'),
('PlayStation'),
('Sega Saturn'),
('Dreamcast'),
('Xbox'),
('Wii U'),
('PlayStation 2'),
('PSP'),
('PS Vita'),
('PlayStation Portable'),
('Nintendo 3DS'),
('Steam Deck');

insert into igriceZanrovi (igrica, zanr) values
(1, 1), (1, 2), (1, 3), (2, 4), (2, 3), (2, 14), 
(3, 1), (3, 3), (4, 1), (4, 2), (4, 3), (4, 5), (5, 1),
(5, 2), (6, 4), (6, 3), (7, 4), (8, 4), (9, 1), (9, 2), (9, 3),
(10, 7), (10, 8), (10, 9), (11, 4), (12, 4), (12, 14), (13, 10),
(14, 10), (15, 2), (15, 11), (16, 5), (17, 2), (17, 12), (18, 4),
(18, 3), (19, 13), (19, 14), (20, 2), (20, 3), (20, 1), (21, 5), 
(22, 15), (23, 5), (23, 4), (24, 16), (25, 2), (25, 1), (26, 4),
(27, 4), (27, 3), (27, 14), (28, 4), (28, 6), (29, 4), (29, 13),
(30, 17), (31, 19), (31, 16), (32, 20), (32, 6), (33, 10), (33, 56),
(34, 10), (34, 15), (35, 1), (35, 2), (36, 2), (36, 1), (37, 1), 
(37, 6), (38, 4), (38, 14), (39, 21), (39, 4), (40, 5), (40, 1), 
(41, 4), (42, 4), (42, 3), (43, 4), (43, 2), (43, 3), (44, 4),
(45, 54), (45, 14), (46, 1), (46, 2), (47, 4), (47, 10), (48, 22), 
(48, 10), (49, 10), (50, 56), (51, 15), (52, 10), (52, 53), (53, 2),
(53, 6), (54, 2), (55, 57), (55, 42), (56, 12), (57, 17), (58, 17),
(59, 18), (59, 2), (60, 4), (61, 5), (61, 4), (61, 13), (62, 15),
(63, 2), (63, 12), (64, 2), (65, 4), (66, 5), (67, 57), (67, 19),
(68, 4), (68, 21), (69, 2), (69, 58), (70, 8), (70, 19), (71, 4),
(71, 13), (72, 4), (72, 21), (72, 55), (73, 10), (74, 17), (75, 16),
(76, 54), (76, 15), (77, 4), (78, 4), (79, 17), (80, 6), (80, 4), 
(81, 5), (81, 1), (82, 21), (82, 1), (82, 3), (83, 1), (83, 2), 
(84, 21), (84, 4), (85, 17), (86, 4), (86, 55), (86, 21), (86, 10),
(87, 16), (88, 2), (88, 3), (89, 17), (90, 41), (90, 4), (91, 2),
(91, 6), (92, 2), (92, 5), (92, 13), (93, 2), (94, 15), (94, 2), 
(94, 4), (95, 12), (95, 17), (96, 28), (97, 21), (97, 58), (98, 29),
(98, 18), (99, 24), (100, 2), (100, 23), (101, 2), (101, 6), (102, 5),
(103, 25), (103, 23), (104, 4), (104, 28), (104, 27), (105, 2), 
(105, 1), (106, 10), (106, 4), (107, 4), (107, 10); 


insert into igricePlatforme (igrica, platforma) values
(1, 1), (1, 2), (1, 3), (1, 6), (2, 2), (2, 3), (2, 1),
(3, 7), (3, 8), (3, 2), (3, 3), (3, 1), (4, 2), (4, 3),
(4, 1), (4, 4), (4, 5), (5, 1), (5, 2), (5, 3), (5, 4),
(5, 5), (6, 6), (6, 23), (7, 2), (7, 1), (8, 2), (8, 4),
(9, 2), (9, 1), (10, 1), (10, 2), (10, 3), (10, 6), (11, 15),
(11, 6), (12, 7), (12, 8), (12, 1), (13, 9), (14, 9), (15, 1),
(15, 2), (15, 3), (15, 6), (15, 4), (15, 5), (16, 1), (16, 21),
(16, 7), (16, 8), (17, 1), (17, 4), (17, 5), (17, 10), (18, 6), 
(19, 16), (19, 24), (19, 9), (19, 1), (20, 1), (20, 7), (20, 8),
(21, 1), (21, 24), (22, 6), (23, 7), (23, 8), (23, 1), (24, 1),
(24, 7), (24, 8), (25, 1), (25, 8), (25, 7), (26, 7), (27, 7), 
(27, 8), (28, 2), (28, 4), (29, 2), (30, 2), (30, 6), (30, 1),
(30, 3), (30, 4), (30, 5), (31, 1), (31, 3), (31, 2), (32, 6), 
(32, 1), (32, 2), (32, 3), (33, 6), (33, 1), (33, 2), (33, 3),
(34, 3), (34, 1), (34, 6), (35, 2), (36, 7), (36, 8), (36, 1), 
(37, 1), (37, 2), (37, 3), (38, 2), (38, 3), (38, 1), (39, 1),
(39, 2), (39, 3), (40, 1), (40, 2), (40, 3), (41, 2), (41, 1),
(42, 2), (42, 4), (43, 2), (43, 4), (44, 2), (44, 1), (44, 4),
(45, 4), (45, 1), (46, 4), (47, 4), (47, 1), (48, 2), (48, 3),
(48, 1), (48, 6), (49, 1), (49, 2), (49, 3), (49, 5), (49, 4),
(50, 1), (50, 3), (50, 2), (51, 1), (51, 6), (51, 2), (52, 3), 
(52, 1), (52, 6), (53, 2), (53, 1), (53, 3), (54, 1), (54, 2),
(54, 6), (55, 1), (55, 2), (55, 3), (55, 6), (55, 4), (55, 5),
(56, 6), (57, 2), (57, 4), (58, 7), (58, 2), (59, 1), (59, 2), 
(59, 3), (59, 6), (60, 2), (61, 7), (61, 8), (61, 1), (62, 1), 
(62, 6), (62, 4), (63, 1), (63, 2), (63, 3), (64, 1), (64, 21), 
(65, 24), (65, 9), (65, 7), (65, 8), (66, 1), (66, 2), (66, 3), 
(67, 1), (67, 2), (67, 3), (68, 7), (68, 8), (68, 1), (69, 1),
(69, 2), (69, 3), (70, 1), (70, 2), (70, 3), (71, 7), (71, 2),
(72, 7), (72, 8), (72, 1), (72, 2), (72, 3), (73, 6), (74, 19),
(74, 1), (75, 1), (75, 8), (75, 7), (76, 1), (76, 6), (76, 2),
(76, 3), (77, 24), (77, 2), (78, 2), (79, 26), (79, 1), (80, 7),
(80, 8), (80, 23), (80, 1), (80, 6), (81, 1), (81, 2), (81, 3),
(82, 2), (82, 3), (82, 1), (83, 2), (83, 3), (83, 1), (84, 1),
(84, 7), (84, 8), (85, 6), (85, 2), (85, 1), (86, 7), (86, 8),
(86, 1), (87, 1), (87, 2), (88, 1), (88, 21), (89, 19), (89, 18),
(89, 1), (90, 1), (90, 2), (90, 6), (91, 1), (91, 10), (92, 1),
(93, 1), (94, 19), (94, 20), (94, 7), (94, 8), (95, 19), (95, 27),
(96, 19), (96, 20), (97, 1), (98, 1), (98, 10), (99, 1), (99, 10), 
(100, 1), (100, 10), (101, 1), (101, 19), (102, 1), (102, 15), 
(103, 1), (103, 10), (104, 24), (104, 21), (104, 16), (104, 1), 
(105, 21), (105, 1), (106, 21), (106, 1), (106, 24), (107, 7), (107, 8), (107, 1);

SELECT TOP 1 * FROM igrice
ORDER BY NEWID();

DECLARE @zanr INT = 1;
DECLARE @platforma INT = 2;


SELECT TOP 1 i.*
FROM igrice i
JOIN igriceZanrovi iz ON i.sifra = iz.igrica
WHERE iz.zanr = @zanr
ORDER BY NEWID();


SELECT TOP 1 i.*
FROM igrice i
JOIN igricePlatforme ip ON i.sifra = ip.igrica
WHERE ip.platforma = @platforma
ORDER BY NEWID();


SELECT TOP 1 i.*
FROM igrice i
JOIN igriceZanrovi iz ON i.sifra = iz.igrica
JOIN igricePlatforme ip ON i.sifra = ip.igrica
WHERE iz.zanr = @zanr AND ip.platforma = @platforma
ORDER BY NEWID();


