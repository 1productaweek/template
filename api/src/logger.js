import pino from 'pino'
import pinoPretty from 'pino-pretty'

const logger = pino({
  level: 'debug',
  prettyPrint: {
    levelFirst: true,
  },
  prettifier: process.env.NODE_ENV === 'development' && pinoPretty,
})

export default logger
