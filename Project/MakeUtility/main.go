package main

import (
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
	_ "github.com/joho/godotenv/autoload"
	"gopkg.in/olahol/melody.v1"
)

// Factory Method
func main() {
	r := gin.Default()
	m := melody.New()
	// rendering out the chat template below
	r.Use(static.Serve("/", static.LocalFile("./public", true)))
	// getting content and sender of chat message
	r.GET("/ws", func(c *gin.Context) {
		m.HandleRequest(c.Writer, c.Request)
	})
	// updating the chat to display the messages
	m.HandleMessage(func(s *melody.Session, msg []byte) {
		m.Broadcast(msg)
	})
	// running it in localhost: port 5000
	r.Run(":5000")

}
