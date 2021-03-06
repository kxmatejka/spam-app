import * as pino from 'pino'

class Logger {
  private driver

  constructor (level: string = 'debug', pretty: boolean = true) {
    this.driver = pino({
      level,
      prettyPrint: pretty
    }).child({})
  }

  public debug (message: string): void {
    this.driver.debug(message)
  }

  public info (message: string): void {
    this.driver.info(message)
  }

  public warn (message: string): void {
    this.driver.warn(message)
  }

  public error (message: string): void {
    this.driver.error(message)
  }

  public fatal (message: string): void {
    this.driver.fatal(message)
  }
}

export const logger = new Logger()
