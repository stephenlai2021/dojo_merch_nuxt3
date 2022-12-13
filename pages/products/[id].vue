<template>
  <div>
    <Head>
      <Title>Nuxt Dojo | {{ product.title }}</Title>
      <Meta  name="description" :content="product.description" />
    </Head>
  </div>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

const { id } = useRoute().params;

const uri = "https://fakestoreapi.com/products/" + id;

// const { data: product } = useFetch(uri, { key: id })
const { data: product } = await useFetch(uri)
if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
}

/* fetch is slow */
// const product = ref({});
// fetch(uri)
//   .then((res) => res.json())
//   .then((json) => {
//     product.value = json;
//     console.log("product: ", json);
//   });
</script>

<style scoped></style>
