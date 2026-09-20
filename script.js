const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

function sendMessage() {
    const message = userInput.value.trim();

    if (message === "") {
        return;
    }

    addMessage(message, "user");

    userInput.value = "";

    setTimeout(function () {
        const response = getFitBuddyResponse(message);
        addMessage(response, "bot");
    }, 500);
}

function addMessage(message, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");

    if (sender === "user") {
        messageDiv.classList.add("user-message");

        messageDiv.innerHTML = `
            <strong>You:</strong>
            <p>${message}</p>
        `;
    } else {
        messageDiv.classList.add("bot-message");

        messageDiv.innerHTML = `
            <strong>FitBuddy:</strong>
            <p>${message}</p>
        `;
    }

    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function quickMessage(message) {
    userInput.value = message;
    sendMessage();
}

function getFitBuddyResponse(message) {

    const text = message.toLowerCase();

    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {
        return "Hi! 👋 I'm FitBuddy. I'm here to help you with workouts, nutrition and fitness motivation. What would you like help with?";
    }

    if (
        text.includes("workout") ||
        text.includes("exercise") ||
        text.includes("training")
    ) {
        return "🏋️ Here's a simple beginner workout: 10 squats, 10 lunges, 10 wall push-ups, 20 jumping jacks and a 20-second plank. Repeat 2–3 times at a comfortable pace.";
    }

    if (
        text.includes("food") ||
        text.includes("nutrition") ||
        text.includes("eat") ||
        text.includes("diet") ||
        text.includes("healthy")
    ) {
        return "🥗 Try to build balanced meals with vegetables or fruit, a protein source, whole grains or other carbohydrates, and healthy fats. Drink enough water throughout the day.";
    }

    if (
        text.includes("motivation") ||
        text.includes("motivated") ||
        text.includes("lazy")
    ) {
        return "🔥 Remember: you don't have to be perfect. Start small, stay consistent and celebrate your progress. One workout at a time!";
    }

    if (
        text.includes("weight") ||
        text.includes("lose weight") ||
        text.includes("fat")
    ) {
        return "💪 Healthy weight management usually involves regular physical activity, balanced eating, adequate sleep and sustainable habits. Avoid extreme diets and focus on gradual progress.";
    }

    if (
        text.includes("water") ||
        text.includes("hydration")
    ) {
        return "💧 Staying hydrated is important, especially when exercising. Drink water regularly and increase your fluid intake when you are sweating heavily or exercising in hot conditions.";
    }

    if (
        text.includes("stretch") ||
        text.includes("stretching")
    ) {
        return "🧘 Try gentle stretches for your major muscle groups. Hold each comfortable stretch for about 15–30 seconds and avoid bouncing or forcing a painful range of motion.";
    }

    if (
        text.includes("beginner") ||
        text.includes("start")
    ) {
        return "🌱 Welcome to your fitness journey! Start with 15–20 minutes of comfortable activity, such as walking and simple bodyweight exercises. Increase gradually as you become fitter.";
    }

    return "🤖 I'm still learning! Try asking me about workouts, nutrition, hydration, stretching or motivation.";
}


/* Press Enter to send a message */
userInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});
