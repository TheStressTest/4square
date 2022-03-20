package models

type Out struct {
	ID uint `gorm:"primaryKey;autoIncrement" json:"id"`

	GameID int `gorm:"not null" json:"game"`
	Game Game

	WinnerID int `gorm:"not null" json:"winner"`
	Winner Player

	Position int `gorm:"not null" json:"position"`
	Round int

	LoserID int `gorm:"not null" json:"loser"`
	Loser Player

	Creativity int `gorm:"not null" json:"creativity"`
	Aggression int `gorm:"not null" json:"aggression"`
	Skill int `gorm:"not null" json:"skill"`
}
