package game

import (
	"backend/database"
	"backend/models"
	"time"

	"github.com/gofiber/fiber/v2"
)

func AddGame(ctx *fiber.Ctx) error {

	game := &models.Game{Time: time.Now()}

	if err := database.DB.Create(game).Error; err != nil {
		ctx.JSON(map[string]string{"error": err.Error()})
		return ctx.SendStatus(400)
	}

	ctx.JSON(map[string]uint{"id": game.ID})
	return ctx.SendStatus(200)
}