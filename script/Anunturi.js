document.addEventListener('DOMContentLoaded', function() {
    // Get all elements
    const addButton = document.getElementById('add-post-btn');
    const titleInput = document.getElementById('post-title');
    const contentInput = document.getElementById('post-content');
    const postsContainer = document.getElementById('posts-list');
    const imageInput = document.getElementById('img'); // Make sure this is your file input element
    const nameInput = document.getElementById('date-pers');

    // Add event listener to button
    addButton.addEventListener('click', function() {
        // Get input values
        const title = titleInput.value.trim() +" - " + nameInput.value.trim();
        const content = contentInput.value.trim();
        const date = new Date().toLocaleString(); // Better date formatting
        const imageFile = imageInput.files[0]; // Get the selected image file
        
        // Validate inputs
        if (!title || !content) {
            alert('Please enter both title and content!');
            return;
        }

        // Create post element
        const postElement = document.createElement('div');
        postElement.className = 'post';
        
        // Add title
        const titleElement = document.createElement('h3');
        titleElement.textContent = title;
        postElement.appendChild(titleElement);
        
        // Add image if provided
        if (imageFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imgElement = document.createElement('img');
                imgElement.src = e.target.result;
                imgElement.className = 'post-image';
                imgElement.alt = 'Post image';
                postElement.appendChild(imgElement);
                
                // Add content and date after image
                addContentAndDate();
            };
            reader.readAsDataURL(imageFile);
        } else {
            // Add content and date without waiting for image
            addContentAndDate();
        }
        
        function addContentAndDate() {
            // Add content
            const contentElement = document.createElement('p');
            contentElement.textContent = content;
            postElement.appendChild(contentElement);
            
            // Add date
            const dateElement = document.createElement('h6');
            dateElement.textContent = date;
            postElement.appendChild(dateElement);
        }

        // Add to container (at the top)
        postsContainer.prepend(postElement);

        // Clear inputs
        titleInput.value = '';
        contentInput.value = '';
        imageInput.value = ''; // Clear file input
    });
});