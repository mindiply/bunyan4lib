import Logger from "bunyan";

export interface ILogger {
  trace: (...prms: any[]) => void;
  debug: (...prms: any[]) => void;
  info: (...prms: any[]) => void;
  warn: (...prms: any[]) => void;
  error: (...prms: any[]) => void;
  fatal: (...prms: any[]) => void;
}

class NoOpsLog implements ILogger {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  trace(): void {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  debug(): void {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  info(): void {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  warn(): void {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  error(): void {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  fatal(): void {}
}

let log: ILogger | null = null;

export function bunyanLog(options: string | {}): ILogger {
  if (log) return log;

  if (typeof options === "string" && options.length > 0) {
    try {
      log = Logger.createLogger({ name: options });
    } catch (err) {
      log = new NoOpsLog();
    }
  }
  if (typeof options === "object") {
    log = options as ILogger;
  }
  if (!log) {
    log = new NoOpsLog();
  }

  return log;
}

module.exports = bunyanLog;
