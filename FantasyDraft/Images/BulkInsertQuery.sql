Use FantasyDraft
GO

IF OBJECT_ID('Player') IS NOT NULL
	DROP TABLE Player
GO


CREATE TABLE Player (
	Id int NOT NULL PRIMARY KEY,
	Rank int,
	Team VARCHAR(150),
	Name VARCHAR(150),
	Points int,
	Position VARCHAR(150),
)

GO



BULK INSERT Player
FROM 'C:\Users\natha\OneDrive\Desktop\FANTASTYcsv.csv'
WITH (
	FORMAT = 'CSV',
	FIRSTROW = 2,
	FIELDTERMINATOR = ',',
	ROWTERMINATOR = '\n'
)
GO

SELECT * FROM Player