package models

import "gorm.io/gorm"

type Player struct {
	gorm.Model `json:"-"`
	FirstName string `gorm:"not null;default:null" json:"first_name"`
	LastName string `gorm:"not null;default:null" json:"last_name"`
	Description string `json:"description"`
	Instagram string `json:"instagram"`
}
