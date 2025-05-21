// URL de la API (usando JSON Server)
const API_URL = 'http://localhost:3000/posts';

// Elementos del DOM
const postForm = document.getElementById('postForm');
const postsContainer = document.getElementById('postsContainer');

// Función para cargar los posts
async function loadPosts() {
    try {
        const response = await fetch(API_URL);
        const posts = await response.json();
        
        postsContainer.innerHTML = '';
        
        if (posts.length === 0) {
            postsContainer.innerHTML = '<p class="no-posts">No hay artículos todavía. ¡Sé el primero en publicar!</p>';
            return;
        }
        
        posts.forEach(post => {
            const postCard = createPostCard(post);
            postsContainer.appendChild(postCard);
        });
    } catch (error) {
        console.error('Error al cargar los posts:', error);
        postsContainer.innerHTML = '<p class="error">Error al cargar los artículos. Por favor intenta más tarde.</p>';
    }
}

// Función para crear la tarjeta de un post
function createPostCard(post) {
    const postCard = document.createElement('div');
    postCard.className = 'post-card';
    
    // Imagen aleatoria para el post (puedes cambiarlo por imágenes reales)
    const randomImage = Math.floor(Math.random() * 3) + 1;
    const imageUrl = `images/image22.jpg`;
    
    postCard.innerHTML = `
        <div class="post-image" style="background-image: url(${imageUrl})"></div>
        <div class="post-content">
            <h3 class="post-title">${post.title}</h3>
            <div class="post-meta">
                <i class="fas fa-user"></i>
                <span>${post.author}</span>
                <i class="fas fa-calendar-alt"></i>
                <span>${new Date(post.date || Date.now()).toLocaleDateString()}</span>
            </div>
            <p class="post-excerpt">${post.content.substring(0, 150)}...</p>
            <a href="#" class="read-more">Leer más</a>
        </div>
    `;
    
    return postCard;
}

// Función para manejar el envío del formulario
async function handleFormSubmit(event) {
    event.preventDefault();
    
    const title = document.getElementById('postTitle').value;
    const author = document.getElementById('postAuthor').value;
    const content = document.getElementById('postContent').value;
    
    const newPost = {
        title,
        author,
        content,
        date: new Date().toISOString()
    };
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        });
        
        if (response.ok) {
            // Limpiar el formulario
            postForm.reset();
            // Recargar los posts
            loadPosts();
            
            // Mostrar mensaje de éxito
            alert('¡Artículo publicado con éxito!');
        } else {
            throw new Error('Error al publicar el artículo');
        }
    } catch (error) {
        console.error('Error al publicar el artículo:', error);
        alert('Hubo un error al publicar tu artículo. Por favor intenta nuevamente.');
    }
}

// Event listeners
postForm.addEventListener('submit', handleFormSubmit);

// Cargar los posts al iniciar la página
document.addEventListener('DOMContentLoaded', loadPosts);