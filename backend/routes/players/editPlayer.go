package players

import (
	"backend/database"
	"backend/models"

	"github.com/gofiber/fiber/v2"
)

func EditPlayer(ctx *fiber.Ctx) error {
	database.DB.Find(&models.Player{}, 14).Updates(ctx.Request().Header)
	return nil
}