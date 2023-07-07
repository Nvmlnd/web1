async function renderAlbums() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums');
      const albums = await response.json();
  
      const container = document.getElementById('albums-container');
  
      albums.forEach(album => {
        const albumElement = createAlbumElement(album);
        container.appendChild(albumElement);
      });
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  function createAlbumElement(album) {
    const albumElement = document.createElement('div');
    albumElement.classList.add('album');
    albumElement.innerHTML = `
      <h2>${album.title}</h2>
      <p>User ID: ${album.userId}</p>
      <p>Album ID: ${album.id}</p>
    `;
    return albumElement;
  }
  
  // Приклад використання
  renderAlbums();
  