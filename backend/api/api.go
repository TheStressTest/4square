package api

import (
	playerPath "backend/routes/players"
	"log"

	"github.com/gofiber/fiber/v2"
)

func Init() {
	app := fiber.New()

	playerGroup := app.Group("/players")

	playerGroup.Post("/createPlayer", playerPath.AddPlayer)
	playerGroup.Get("/queryPlayers", playerPath.GetPlayers)

	err := app.Listen(":8080")

	if err != nil {
		log.Fatal(err)
	}
}