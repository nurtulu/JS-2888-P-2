document.addEventListener('DOMContentLoaded', async () => {
    const userContainer = document.getElementById('user-container');

    async function fetchUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        return users;
    }

    function createUserCard(user) {
        return `
            <div class="card">
                <h2>${user.name}</h2>
                <div class="section">
                    <i class="fas fa-user"></i>
                    <p><strong>ID:</strong> ${user.id}</p> 
                </div>

                 <div class="section">
                    <p><strong>Username:</strong> ${user.username}</p>
                </div>

                <div class="section">
                    <i class="fas fa-location-dot"></i>
                    <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                </div>

                <div class="section">
                    <i class="fas fa-building"></i>
                    <p><strong>Company:</strong> ${user.company.name}</p>
                </div>

                <div class="section">
                    <i class="fas fa-envelope"></i>
                    <p>${user.email}</p>
                </div>

                <div class="section">
                    <i class="fas fa-phone"></i>
                    <p>${user.phone}</p>  
                </div>

                <div class="section">
                    <i class="fas fa-globe"></i>
                    <p>${user.website}</p>
                </div>
                
                <a href="posts.html?userId=${user.id}" class="view-posts">View Posts</a>
            </div>
        `;
    }

    const users = await fetchUsers();
    users.forEach(user => {
        const userCard = createUserCard(user);
        userContainer.innerHTML += userCard;
    });
});
