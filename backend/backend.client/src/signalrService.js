import * as signalR from "@microsoft/signalr";

const hubConnection = new signalR.HubConnectionBuilder()
    .withUrl("http://localhost:5237/chathub") // Adjust if needed
    .withAutomaticReconnect()
    .configureLogging(signalR.LogLevel.Information)
    .build();

export const startConnection = async () => {
    try {
        await hubConnection.start();
        console.log("Connected to SignalR Hub");
    } catch (err) {
        console.error("Connection error:", err);
        setTimeout(startConnection, 5000); // Retry on failure
    }
};

export const addMessageListener = (callback) => {
    hubConnection.on("ReceiveMessage", callback);
};

export const sendMessage = async (user, message) => {
    if (hubConnection.state === signalR.HubConnectionState.Connected) {
        await hubConnection.send("SendMessage", user, message);
    }
};