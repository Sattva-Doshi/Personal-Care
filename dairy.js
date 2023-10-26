function addEntry() {

    const title = document.getElementById('entryTitle').value;
    const date = document.getElementById('entryDate').value;
    const content = document.getElementById('entryContent').value;

    if (title && date && content) {
        const entryList = document.getElementById('entry-list');
        const entryDiv = document.createElement('div');

        entryDiv.classList.add('entry');
        entryDiv.innerHTML =
        `<h3>${title}</h3>
        <p><strong>Date:</strong> ${date}</p>
        <p>${content}</p>`;

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.onclick = function () {
            entryDiv.remove();
        };
        
        entryDiv.appendChild(deleteButton);
        entryList.appendChild(entryDiv);
        document.getElementById('diaryForm').reset();

    } else {
        alert('Please enter title, date, and content.');
    }

}

