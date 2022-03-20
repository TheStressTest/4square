package models

type Player struct {
	ID uint `gorm:"primarykey;autoincrement" json:"id"`

	FirstName string `gorm:"not null;default:null" json:"first_name"`

	LastName string `gorm:"not null;default:null" json:"last_name"`

	Description string `json:"description"`

	Instagram string `json:"instagram"`
}
