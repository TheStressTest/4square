package database

import (
	"backend/models"
	"fmt"
	"log"
	"os"

	"gopkg.in/yaml.v2"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

var DB *gorm.DB

type Config struct {
	Server struct {
		Port int `yaml:"port"`
	} `yaml:"server"`

	Database struct {
		User string `yaml:"user"`
		Password string `yaml:"password"`
		DBName string `yaml:"dbname"`
		Port int `yaml:"port"`
		Address string `yaml:"address"`
	} `yaml:"database"`
}

func GetConfig() (Config, error) {
	c := Config{}

	cbytes, err := os.ReadFile(os.Getenv("CONFIG_PATH"))

	if err != nil {
		return c, nil
	}

	err = yaml.Unmarshal(
		cbytes,
		&c,
	)

	if err != nil {
		return c, err
	}

	return c, nil
}

func Migrate() {

	log.Println("Opening config...")
	config, err := GetConfig()

	if err != nil {
		log.Fatal(err)
	}

	log.Println("Connecting...")

	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%d",
		config.Database.Address,
		config.Database.User,
		config.Database.Password,
		config.Database.DBName,
		config.Database.Port,
	)

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{
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