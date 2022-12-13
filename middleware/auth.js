export default defineNuxtRouteMiddleware(to => {
  const user = useSupabaseUser()

  if (!user.value && to.path === '/products') {
    navigateTo('/')
  } 
  if (user.value && to.path === '/') {
    navigateTo('products')
  }
})