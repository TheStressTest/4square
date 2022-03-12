package database

import (
	"backend/models"
	"log"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

var DB *gorm.DB

func Migrate() {
	log.Println("Connecting...")
	db, err := gorm.Open(postgres.Open("host=database user=postgres password=postgres dbname=postgres port=5432"), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Info),
	})
	if err != nil {
		log.Fatal(err)
		os.Exit(1)
	}

	log.Println("Migrating...")
	db.AutoMigrate(&models.Game{}, &models.Player{}, &models.Out{})
	log.Println("Finished!")

	DB = db
}