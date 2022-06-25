import winston from 'winston'

const myLoggerFormat = winston.format.printf(
  ({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`
  },
)
global.logger = winston.createLogger({
  level: 'silly',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'my-log.log' }),
  ],
  format: winston.format.combine(
    winston.format.label({ label: 'my-app' }),
    winston.format.timestamp(),
    myLoggerFormat,
  ),
})
