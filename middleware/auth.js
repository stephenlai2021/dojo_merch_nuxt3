export default defineNuxtRouteMiddleware(to => {
  const user = useSupabaseUser()
  // console.log('user: ', user)

  // if (!user.value) {
  //   navigateTo('/')
  // }

  if (!user.value && to.path === '/products') {
    navigateTo('/')
  } 
  if (user.value && to.path === '/') {
    navigateTo('products')
  }
})