package players

import (
	"backend/database"
	"backend/models"

	"github.com/gofiber/fiber/v2"
)

func GetPlayers(ctx *fiber.Ctx) error {
	var results []models.Player

	database.DB.Find(&results)

	return ctx.JSON(results)
}