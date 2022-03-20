package players

import (
	"backend/database"
	"backend/models"

	"github.com/gofiber/fiber/v2"
)

func AddPlayer(ctx *fiber.Ctx) error {

	player :=
		&models.Player{
			FirstName: ctx.Get("first_name"),
			LastName: ctx.Get("last_name"),
			Description: ctx.Get("description"),
			Instagram: ctx.Get("instagram"),
		}

	if err := database.DB.Create(player).Error; err != nil {

		ctx.JSON(map[string]string{"error": err.Error()})
		return ctx.SendStatus(400)
	}

	ctx.JSON(player)
	return ctx.SendStatus(200)
}