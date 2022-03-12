package models

import (
	"gorm.io/gorm"
)

type Out struct {
	gorm.Model

	GameID int `gorm:"not null"`
	Game Game

	WinnerID int `gorm:"not null"`
	Winner Player

	Position int `gorm:"not null"`
	Round int

	LoserID int `gorm:"not null"`
	Loser Player

	Creativity int `gorm:"not null"`
	Aggression int `gorm:"not null"`
	Skill int `gorm:"not null"`
}
