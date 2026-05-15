
```javascript
document.getElementById('changeColor').addEventListener('click', function() {
    var message = document.getElementById('message');
    message.style.color = 'red'; // Troca a cor das letras para vermelho
});
``````javascript
/* script.js */
document.getElementById('changeColor').addEventListener('click', function() {
    var message = document.getElementById('message');
    message.textContent = 'Olá Mundo!'; // Exibe o texto "Olá Mundo!"
    
    // Altera a cor aleatória a cada clique
    var colors = ['#FF6347', '#008000', '#FFFF00', '#0000FF', '#FF0000'];
    message.style.color = colors[Math.floor(Math.random() * colors.length)];
});
```