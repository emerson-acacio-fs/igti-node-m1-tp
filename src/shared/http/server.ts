import 'express-async-errors'
import 'config/winston'
import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'

import { errors } from 'celebrate'
import { AppError } from 'shared/errors/AppError'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (_, res: Response) => {
  res.send('Hello World!')
})

// Gestão de erros
app.use(errors())
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    res
      .status(error.statusCode)
      .json({ status: 'error', message: error.message })
    next()
  }
  res.status(500).json({ status: 'error', message: 'Internal server error' })
  next()
})

app.listen(3333, () => {
  logger.info('Server started on port 3333!')
})
