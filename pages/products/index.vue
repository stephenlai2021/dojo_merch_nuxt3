<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products" :key="p.id">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"], // check user status when page refreshed
});

definePageMeta({
  layout: "products",
});

useHead({
  title: "Nuxt Dojo | Merch",
  meta: [{ name: "description", content: "Nuxt 3 Merch" }],
});

const { data: products } = await useFetch("https://fakestoreapi.com/products");
// console.log("products: ", products);

const user = useSupabaseUser();
watchEffect(() => {
  if (!user.value) {
    navigateTo("/");
  }
});
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
