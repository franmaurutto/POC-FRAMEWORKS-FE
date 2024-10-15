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
  background-color: #ffcccb; 
  padding: 1rem; 
}

.navbar ul {
  list-style-type: none; 
  padding: 0; 
}

.navbar li {
  display: inline; 
  margin-right: 15px; 
}

.navbar a {
  color: white; 
  text-decoration: none; 
}

.navbar a:hover {
  text-decoration: underline; 
}
</style>
