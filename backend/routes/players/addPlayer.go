package players

import (
	"backend/database"
	"backend/models"

	"github.com/gofiber/fiber/v2"
)

func AddPlayer(ctx *fiber.Ctx) error {

	if err := database.DB.Create(&models.Player{
		FirstName: ctx.Get("firstName"),
		LastName: ctx.Get("lastName"),
		Description: ctx.Get("description"),
		Instagram: ctx.Get("instagram"),
	}).Error; err != nil {

		ctx.JSON(map[string]string{"error": err.Error()})
		return ctx.SendStatus(400)
	}

	return ctx.SendStatus(200)
}