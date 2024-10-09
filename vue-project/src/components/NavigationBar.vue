<template>
  <nav class="navbar">
    <ul>
      <li>
        <router-link to="/">Inicio</router-link>
      </li>
      <li>
        <router-link to="/about">Acerca de</router-link>
      </li>
      <li>
        <router-link to="/welcome">Bienvenida</router-link>
      </li>
    </ul>
  </nav>
</template>

<style>
.navbar {
  background-color: #ffcccb; /* Cambiado a color rosa pastel */
  padding: 1rem; /* Espaciado interno */
}

.navbar ul {
  list-style-type: none; /* Quitar viñetas de la lista */
  padding: 0; /* Quitar padding de la lista */
}

.navbar li {
  display: inline; /* Mostrar elementos de la lista en línea */
  margin-right: 15px; /* Espaciado entre enlaces */
}

.navbar a {
  color: white; /* Color de texto blanco */
  text-decoration: none; /* Sin subrayado */
}

.navbar a:hover {
  text-decoration: underline; /* Subrayar al pasar el mouse */
}
</style>
