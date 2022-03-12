package players

import (
	"backend/database"
	"backend/models"

	"github.com/gofiber/fiber/v2"
)

func GetPlayers(ctx *fiber.Ctx) error {
	// result := map[string]interface{}{}
	var results []models.Player

	database.DB.Find(&results)

	// database.DB.Model(&models.Player{})
	return ctx.JSON(results)
}