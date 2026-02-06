const { createClient } = require('redis')

const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379'

const redisClient = createClient({
  url: redisUrl
})

redisClient.on('error', (err) => {
  console.error('❌ Redis Error:', err.message)
})

redisClient.on('connect', () => {
  console.log('✅ Redis Connected')
})

async function connectRedis() {
  if (!redisClient.isOpen) {
    await redisClient.connect()
  }
}

module.exports = {
  redisClient,
  connectRedis
}
