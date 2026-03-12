export default defineEventHandler((event) => {
  const method = getMethod(event)
  const path = getRequestURL(event).pathname
  console.log(`[${new Date().toISOString()}] ${method} ${path}`)
})
