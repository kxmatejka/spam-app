import {MiddlewareFn} from 'type-graphql'
import {config, logger} from '../utils'

const randomIntInRange = (from: number, to: number) => Math.round(Math.random() * (to - from) + from)

const wait = (time: number = 1000) => new Promise((resolve) => setTimeout(resolve, time))

const isRoot = (root) => !root

export const AddLatency: MiddlewareFn = async ({root, info}, next) => {
  if (isRoot(root) && config.SERVER_ADD_LATENCY) {
    const latency = randomIntInRange(1000, 2000)
    logger.debug(`Added latency of ${latency} to ${info.fieldName}`)
    await wait(latency)
  }

  return next()
}
