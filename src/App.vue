<template>
  <div class="container fixed-top">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <router-link
        to="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
      >
        <span class="log-text">News Online</span>
      </router-link>

      <ul class="nav nav-pills">
        <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
        <li class="nav-item"><router-link to="/sports" class="nav-link">Sports</router-link></li>
        <li class="nav-item"><router-link to="/movies" class="nav-link">Movies</router-link></li>
        <li class="nav-item"><router-link to="/travel" class="nav-link">Travel</router-link></li>
        <li class="nav-item">
          <router-link to="/technology" class="nav-link">Technology</router-link>
        </li>
      </ul>
    </header>
  </div>

  <div class="container main">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style lang="scss">
@import './assets/styles.scss';
</style>
