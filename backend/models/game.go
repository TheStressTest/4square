package models

import (
	"time"

	"gorm.io/gorm"
)

type Game struct {
	gorm.Model `json:"-"`
	Time time.Time `gorm:"not null;"`
	Rounds int `gorm:"not null;"`
	Title string
}