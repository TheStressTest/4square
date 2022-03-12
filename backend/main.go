package main

import (
	"backend/api"
	"backend/database"
)

func main() {
	database.Migrate()
	api.Init()
}