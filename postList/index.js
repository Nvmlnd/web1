async function renderPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
  
      const container = document.getElementById('posts-container');
  
      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        `;
        container.appendChild(postElement);
      });
    } catch (error) {
      console.log('Error:', error);
    }
  }
  

  renderPosts();
  