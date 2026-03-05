const express = require('express');
const app = express();
const port = 8080;

// Lista de animales de la granja
const animals = [
  { name: 'Vaca', sound: 'Muuu' },
  { name: 'Oveja', sound: 'Beeee' },
  { name: 'Cerdo', sound: 'Oink' },
  { name: 'Gallo', sound: 'Kikirikí' },
  // ESTE ES EL NUEVO ANIMAL PARA EL PASO 4.2
  { name: 'Pollito', sound: 'Pío Pío' } 
];

app.get('/', (req, res) => {
  // Elige un animal al azar cada vez que se refresca la página
  const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
  
  res.send(`
    <html>
      <body style="text-align: center; font-family: sans-serif; background-color: #f0f8ff;">
        <h1>¡Bienvenido a la Granja Automatizada!</h1>
        <div style="font-size: 50px; margin: 20px;">🚜 🐥 🐄</div>
        <h2>El animal de ahora es: <span style="color: #e67e22;">${randomAnimal.name}</span></h2>
        <p style="font-size: 24px;">Y hace: <strong>"${randomAnimal.sound}"</strong></p>
        <hr>
        <p>Imagen generada y desplegada automáticamente mediante <b>GitHub Actions</b>.</p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Aplicación escuchando en http://localhost:${port}`);
});

module.exports = app; // Exportamos para los tests
