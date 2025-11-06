package models

import (
	"time"

	"gorm.io/gorm"
)

type Board struct {
	gorm.Model
	Name    string `json:"name"`
	OwnerID uint   `json:"owner_id"`
	Lists   []List `json:"lists" gorm:"constraint:OnDelete:CASCADE;"`
}

type List struct {
	gorm.Model
	Name     string `json:"name"`
	BoardID  uint   `json:"board_id"`
	Cards    []Card `json:"cards" gorm:"constraint:OnDelete:CASCADE;"`
	Position int    `json:"position"` // used for ordering lists
}

type Card struct {
	gorm.Model
	Title       string     `json:"title"`
	Description string     `json:"description"`
	ListID      uint       `json:"list_id"`
	Position    int        `json:"position"` // used for ordering cards
	Activities  []Activity `json:"activities" gorm:"constraint:OnDelete:CASCADE;"`
}

type Activity struct {
	gorm.Model
	CardID    uint      `json:"card_id"`
	UserID    uint      `json:"user_id"`
	Action    string    `json:"action"`
	Timestamp time.Time `json:"timestamp"`
}
