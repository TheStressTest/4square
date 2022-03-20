package players

import (
	"backend/database"
	"backend/models"
	"strconv"

	"github.com/gofiber/fiber/v2"
)

func RemovePlayer(ctx *fiber.Ctx) error {
	i, err := strconv.Atoi(ctx.Get("id"))

	if err != nil {
		ctx.JSON(map[string]string{"error": err.Error()})
		return ctx.SendStatus(400)
	}

	if err := database.DB.Delete(&models.Player{}, i).Error; err != nil {
		ctx.JSON(map[string]string{"error": err.Error()})
		return ctx.SendStatus(400)
	}

	ctx.JSON(map[string]string{"id": ctx.Get("id")})
	return ctx.SendStatus(200)
}