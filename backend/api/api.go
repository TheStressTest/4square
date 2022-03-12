package api

import (
	"backend/database"
	"backend/routes/game"
	"backend/routes/players"
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
)

func Init() {
	app := fiber.New()

	playerGroup := app.Group("/players")

	playerGroup.Post("/createPlayer", players.AddPlayer)
	playerGroup.Get("/queryPlayers", players.GetPlayers)
	playerGroup.Delete("/deletePlayer", players.RemovePlayer)

	gameGroup := app.Group("/games")

	gameGroup.Post("/createGame", game.AddGame)

	log.Println("Getting port from config...")

	config, err := database.GetConfig()

	if err != nil {
		log.Fatal(err)
	}

	err = app.Listen(fmt.Sprintf(":%d", config.Server.Port))

	if err != nil {
		log.Fatal(err)
	}
}