<template>
  <header id="header" class="d-flex justify-content-center align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="d-flex justify-content-between justify-content-center align-items-center">
            <router-link to="/" class="text-light py-2 logo">ALMember</router-link>
            <nav class="d-flex py-2">
              <ul class="d-flex nav-items">
                <li class="nav-item"><router-link to="/login" class="text-light px-2"><i class="fa-solid fa-user "></i>Login</router-link></li>
                <li class="nav-item"><router-link to="/register" class="text-light px-2">Register</router-link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "headerPages",
};
</script>

<style scoped></style>

<style scoped></style>
