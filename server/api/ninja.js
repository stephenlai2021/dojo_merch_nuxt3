export default defineEventHandler(async (event) => {
  // const { name } = getQuery(event)
  // return { message: `Hello, ${name}` }
  
  // const { age } = await getBody(event)
  // return { message: `Hello, ${name}! You are ${age} years old` }

  const { currencyKey } = useRuntimeConfig()
  const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`)
  return data
})