package api

import (
	"time"

	"gorm.io/gorm"
	"gorm.io/driver/postgres"
)

type Out struct {
	gorm.Model
	Id int `gorm:"primaryKey"`
	Game int
	Winner int
	Position int
	Round int
	Loser int
	Creativity int
	Aggression int
	Skill int
}

type Player struct {
	gorm.Model
	Id int `gorm:"primaryKey"`
	FirstName string
	LastName string
	Description string
	Instagram string
}

type Game struct {
	gorm.Model
	Id int `gorm:"primaryKey"`
	Time time.Time
	Rounds int
	Title string
}

func Migrate() (gorm.DB, error) {
	db, err := gorm.Open(postgres.New(postgres.Config{
		DSN: "",
	}))

	if err != nil {
		return (nil, err)
	}

	return db, nil
}