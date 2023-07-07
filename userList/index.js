async function renderUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
  
      const container = document.getElementById('users-container');
  
      users.forEach(user => {
        const userElement = document.createElement('div');
        userElement.classList.add('user');
        userElement.innerHTML = `
          <h2>${user.name}</h2>
          <p>Username: ${user.username}</p>
          <p>Email: ${user.email}</p>
          <p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
          <p>Phone: ${user.phone}</p>
          <p>Website: ${user.website}</p>
          <p>Company: ${user.company.name}</p>
        `;
        container.appendChild(userElement);
      });
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  renderUsers();
  