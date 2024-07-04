document.addEventListener('DOMContentLoaded', async () => {
    const postContainer = document.getElementById('post-container');
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');

    if (!userId || isNaN(userId) || userId < 1 || userId > 10) {
        const userInput = prompt('Please enter a valid user ID (1-10):');
        if (!userInput || isNaN(userInput) || userInput < 1 || userInput > 10) {
            alert('Invalid user ID. Please reload the page and enter a valid user ID.');
            throw new Error('Invalid user ID');
        }
        window.location.search = `userId=${userInput}`;
    }

    async function fetchPosts() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = await response.json();
        return posts;
    }

    function createPostCard(post) {
        return `
            <div class="card">
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </div>
        `;
    }

    const posts = await fetchPosts();
    posts.forEach(post => {
        const postCard = createPostCard(post);
        postContainer.innerHTML += postCard;
    });
});
