package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, world!")
	})
	//localhost:4444 Displays Greeting in the browser
	log.Print("Server starting at localhost:4444")
	http.ListenAndServe(":4444", r)
}
