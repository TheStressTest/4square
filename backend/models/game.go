package models

import (
	"time"
)

type Game struct {
	ID uint `gorm:"primaryKey;autoIncrement" json:"id"`

	Time time.Time `gorm:"not null;" json:"time"`
}