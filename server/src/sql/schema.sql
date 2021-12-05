-- NOTE: I figured we'd want this for the section on SQL
PRAGMA foreign_keys;

-- NOTE: For the SQL assignment, we could have them normalize
-- this database farther. Perhaps they can learn about SERIAL and
-- then go implement a way to change a room_name without losing
-- references by using a FOREIGN KEY into a rooms table with an 
-- int primary key.
CREATE TABLE songs (
	id int NOT NULL PRIMARY KEY,
	song_title text NOT NULL,
	notes varchar NOT NULL
);

INSERT INTO songs (id, song_title, notes) 
VALUES (1, 'Ode to Joy (Dubstep Remix)', 'E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4');

INSERT INTO songs (id, song_title, notes)
VALUES (2, 'Sonata No.11', 'G4 G4 G4 B4 E3 E5 E5 E5 D3 C3 B4 B4 B4 F#4 F#4 F#4 E4');

INSERT INTO songs (id, song_title, notes)
VALUES (3, 'Ed Sheeran', 'G3 D4 E4 G4 G3 G4 G3 G3 G3 A4 G4 E3 E3 G4 B4');

INSERT INTO songs (id, song_title, notes)
VALUES (4, 'Canon In D', 'D3 A2 B2 F#2 G2 D2 G2 A2 D3 F#5 A2 E5 B2 D5');

INSERT INTO songs (id, song_title, notes)
VALUES (5, 'My Heart Will Go On', 'F4 G4 G4 D3 A4 G4 F4 G4 C3 C5 A4 F4 D4');

INSERT INTO songs (id, song_title, notes) 
VALUES (6, 'Twinkle Twinkle Little Star', 'C5 C5 G5 G5 A5 A5 G5 F5 F5 E5 E5 D5 D5 C5');