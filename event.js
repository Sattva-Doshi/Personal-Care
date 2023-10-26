document.addEventListener("DOMContentLoaded", () => {
    const titleInput = document.getElementById("title");
    const dateInput = document.getElementById("date");
    const timeInput = document.getElementById("time");
    const reminderInput = document.getElementById("reminder");
    const eventList = document.getElementById("event-list");
    const addEventButton = document.getElementById("add-event");

    addEventButton.addEventListener("click", addEvent);

    function addEvent() {
        const title = titleInput.value;
        const date = dateInput.value;
        const time = timeInput.value;
        const hasReminder = reminderInput.checked;

        if (title === "" || date === "") return;

        const eventItem = document.createElement("li");
        eventItem.innerHTML = `
            <h3>${title}</h3>
            <strong>Date:</strong> ${date}<br>
            <strong>Time:</strong> ${time || "Not specified"}<br>
            <strong>Reminder:</strong> ${hasReminder ? "Set" : "Not set"}
            <button class="delete-button">X</button>
        `;

        eventItem.querySelector(".delete-button").addEventListener("click", () => {
            eventList.removeChild(eventItem);
        });

        eventList.appendChild(eventItem);

        titleInput.value = "";
        dateInput.value = "";
        timeInput.value = "";
        reminderInput.checked = false;
    }
});
