<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex">
        <NuxtLink to="/products" class="font-bold">Nuxt Dojo Merch</NuxtLink>        
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
    <footer class="container mx-auto p-4 flex justify-between border-t-2">
      <Navbar class="w-full" />
    </footer>
  </div>
</template>

<script setup>
const user = useSupabaseUser();

const client = useSupabaseAuthClient();

const logout = async () => {
  await client.auth.signOut();

  // const { error } = await client.auth.signOut();
  // if (error) {
  //   console.log("something went wrong");
  // } else {
  //   console.log("user logout, redirect to login page");
  //   navigateTo("/");
  // }
};

</script>

<style scoped>
.btn-logout {
  color: #12b488;
  font-weight: 600;
}
</style>
