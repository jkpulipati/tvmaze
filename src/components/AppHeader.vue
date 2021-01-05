<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <div class="container">
      <div class="nav navbar-nav">
        <router-link to="/" class="nav-tem nav-link active">Home</router-link>
        <router-link to="/signUp" class="nav-tem nav-link active"
          >SignUp</router-link
        >
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "AppHeader"
};
</script>
