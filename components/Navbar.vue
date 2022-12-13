<template>
  <!-- <div class="w-full"> -->
  <div>
    <ul class="w-full flex gap-4 ml-auto">
      <li v-if="route.path !== '/products'">
        <NuxtLink to="/products" class="btn">Products</NuxtLink>
      </li>
      <li v-if="user" class="ml-auto">
        <button class="btn-logout" @click="logout">Logout</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
const route = useRoute()
const user = useSupabaseUser()
const client = useSupabaseAuthClient();

const logout = async () => {
  const { error } = await client.auth.signOut();
  if (error) {
    console.log("something went wrong");
  } else {
    console.log("user logout, redirect to login page");
    navigateTo("/");
  }
};

</script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}

.btn-logout {
  color: #12b488;
  font-weight: 600;
}
</style>
