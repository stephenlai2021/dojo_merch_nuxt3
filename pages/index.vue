<template>
  <div>
    <form
      @submit.prevent="() => (isSignup ? signUp() : login())"
      class="flex flex-col gap-2 max-w-md mx-auto mt-8"
    >
      <input
        type="email"
        placeholder="Email"
        v-model="email"
        class="p-2 bg-gray-600 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        v-model="password"
        class="p-2 bg-gray-600 rounded"
      />
      <button type="submit" class="p-2 text-white bg-green-500 rounded">
        <span v-if="isSignup">Sign up</span>
        <span v-else>Log in</span>
      </button>
    </form>
    <button
      @click="isSignup = !isSignup"
      class="w-full mt-8 text-sm text-center underline text-slate-300"
    >
      <span v-if="isSignup">Have an account? Log in instead</span>
      <span v-else>Create a new account</span>
    </button>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"], // protect route on server
});

const email = ref("");
const password = ref("");
const isSignup = ref(false);

const route = useRoute();
const user = useSupabaseUser();
const client = useSupabaseAuthClient();

const signUp = async () => {
  const { user, error } = await client.auth.signUp({
    email: email.value,
    password: password.value,
  });
  console.log("user", user);
  console.log("error", error);
};

const login = async () => {
  const { user, error } = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  console.log("user", user);
  console.log("error", error);
};

/* protect route on client side */
onBeforeRouteLeave(() => {
  watchEffect(() => {
    if (!user.value && route.path === "/") {
      navigateTo("/");
    }
  });
});

watchEffect(() => {
  if (user.value) {
    navigateTo("/products");
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
