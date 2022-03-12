package models

import "gorm.io/gorm"

type Player struct {
	gorm.Model
	FirstName string `gorm:"not null;default:null"`
	LastName string `gorm:"not null;default:null"`
	Description string
	Instagram string
}
