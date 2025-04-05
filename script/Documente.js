function updateFileName() {
    const fileInput = document.getElementById('file-upload');
    const fileNameDisplay = document.getElementById('file-name');
    fileNameDisplay.textContent = "Nu a fost selectat niciun fișier.";
    if (fileInput.files.length > 0) {
        fileNameDisplay.textContent = fileInput.files[0].name;
    } else {
        fileNameDisplay.textContent = "Nu a fost selectat niciun fișier.";
    }
}

document.getElementById('button-input').addEventListener('click', function() {
    const fileInput = document.getElementById('file-upload');
    const fileNameDisplay = document.getElementById('file-name');
    
    if (fileInput.files.length > 0) {
        const notification = document.getElementById('success-notification');
        notification.classList.remove('hidden');
        
        // Reset the file input and display text
        fileInput.value = ''; // This clears the selected file
        fileNameDisplay.textContent = "Nu a fost selectat niciun fișier.";
        
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 3000);

    } else {
        alert("Vă rugăm să selectați un fișier mai întâi!");
    }
});

// You can keep this version or use the one above, as they do similar things
function updateFileName() {
    const fileInput = document.getElementById('file-upload');
    const fileName = fileInput.files.length > 0 ? fileInput.files[0].name : "Nu a fost selectat niciun fișier.";
    document.getElementById('file-name').textContent = fileName;
}