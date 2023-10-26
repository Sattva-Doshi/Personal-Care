document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-password');
    const passwordsList = document.getElementById('passwords');
  
    addButton.addEventListener('click', function () {
        const source = document.getElementById('source').value;
        const password = document.getElementById('password').value;
  
        if (source && password) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${source}</span>
                <button class="copy-button">Copy</button>
                <button class="delete-button">Delete</button>
            `;

            passwordsList.appendChild(listItem);
            

            const copyButton = listItem.querySelector('.copy-button');
            copyButton.addEventListener('click', function () {
                copyToClipboard(password);
            });
  
            const deleteButton = listItem.querySelector('.delete-button');
            deleteButton.addEventListener('click', function () {
                listItem.remove();
            });
  
            document.getElementById('source').value = '';
            document.getElementById('password').value = '';
        }
    });
  
    function copyToClipboard(text) {
        const tempInput = document.createElement('input');
        tempInput.value = text;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('Password copied to clipboard.');
    }
  });