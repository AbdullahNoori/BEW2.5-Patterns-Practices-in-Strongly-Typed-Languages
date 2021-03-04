// implement the websockets client functionality for the frontend
// removes front elements from From Javascript DOM using the document.querySelector() function
const input = document.querySelector('#textarea')
const messages = document.querySelector('#messages')
const username = document.querySelector('#username')
const send = document.querySelector('#send')


// Connects to the Websockets server and creates a listener for onmessage event
// Allows me to receive the incomming messages
const url = "ws://" + window.location.host + "/ws";
const ws = new WebSocket(url);

ws.onmessage = function (msg) {
    insertMessage(JSON.parse(msg.data))
};
// send messages with onclick event on the send button.
send.onclick = () => {
    const message = {
		username: username.value,
		content: input.value,
    }

    ws.send(JSON.stringify(message));
    input.value = "";
};

// Method to insert the received message into the text area using the Javascript DOM
function insertMessage(messageObj) {
	// Creates a div object which will hold the message
	const message = document.createElement('div')

	// Sets the attribute of the message 
	message.setAttribute('class', 'chat text-white', 'message')
	console.log("name: " +messageObj.username + " content: " + messageObj.content)
	message.textContent = `${messageObj.username}: ${messageObj.content}`


	// Appends the message to my chat div
	messages.appendChild(message)

	// Inserts the message as the first message of our chat
	messages.insertBefore(message, messages.firstChild)
}



// package main

// import (
// 	"fmt"
// 	"time"
// )

// func main() {
// 	d := time.Date(2000, 2, 1, 12, 30, 0, 0, time.UTC)
// 	day := d.Day()

// 	fmt.Printf("day = %v\n", day)

// }






