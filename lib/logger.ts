/**
 * Centralized Logger Utility
 * Provides structured logging for server-side operations
 */

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  context?: string;
  requestId?: string;
  method?: string;
  url?: string;
  statusCode?: number;
  duration?: number;
  ip?: string;
  userAgent?: string;
  error?: string;
  stack?: string;
  metadata?: Record<string, unknown>;
}

function formatLog(entry: LogEntry): string {
  return JSON.stringify(entry);
}

function createLogEntry(
  level: LogLevel,
  message: string,
  data?: Partial<Omit<LogEntry, 'level' | 'message' | 'timestamp'>>
): LogEntry {
  return {
    level,
    message,
    timestamp: new Date().toISOString(),
    ...data,
  };
}

export const logger = {
  debug(message: string, data?: Partial<Omit<LogEntry, 'level' | 'message' | 'timestamp'>>) {
    if (process.env.NODE_ENV === 'development' || process.env.LOG_LEVEL === 'debug') {
      const entry = createLogEntry('debug', message, data);
      console.log(formatLog(entry));
    }
  },

  info(message: string, data?: Partial<Omit<LogEntry, 'level' | 'message' | 'timestamp'>>) {
    const entry = createLogEntry('info', message, data);
    console.log(formatLog(entry));
  },

  warn(message: string, data?: Partial<Omit<LogEntry, 'level' | 'message' | 'timestamp'>>) {
    const entry = createLogEntry('warn', message, data);
    console.warn(formatLog(entry));
  },

  error(message: string, error?: Error | unknown, data?: Partial<Omit<LogEntry, 'level' | 'message' | 'timestamp'>>) {
    const errorData: Partial<LogEntry> = { ...data };
    
    if (error instanceof Error) {
      errorData.error = error.message;
      errorData.stack = error.stack;
    } else if (error) {
      errorData.error = String(error);
    }

    const entry = createLogEntry('error', message, errorData);
    console.error(formatLog(entry));
  },

  /**
   * Log a request lifecycle event
   */
  request(
    method: string,
    url: string,
    data?: {
      statusCode?: number;
      duration?: number;
      ip?: string;
      userAgent?: string;
      metadata?: Record<string, unknown>;
    }
  ) {
    const entry = createLogEntry('info', 'HTTP Request', {
      context: 'http',
      method,
      url,
      ...data,
    });
    console.log(formatLog(entry));
  },

  /**
   * Log page render events (for server components)
   */
  pageView(
    path: string,
    data?: {
      duration?: number;
      metadata?: Record<string, unknown>;
    }
  ) {
    const entry = createLogEntry('info', 'Page View', {
      context: 'page',
      url: path,
      ...data,
    });
    console.log(formatLog(entry));
  },

  /**
   * Log server action executions
   */
  action(
    actionName: string,
    data?: {
      duration?: number;
      success?: boolean;
      error?: string;
      metadata?: Record<string, unknown>;
    }
  ) {
    const level = data?.success === false ? 'error' : 'info';
    const entry = createLogEntry(level, `Server Action: ${actionName}`, {
      context: 'action',
      ...data,
    });
    console.log(formatLog(entry));
  },

  /**
   * Log build/startup events
   */
  system(message: string, data?: Partial<Omit<LogEntry, 'level' | 'message' | 'timestamp'>>) {
    const entry = createLogEntry('info', message, {
      context: 'system',
      ...data,
    });
    console.log(formatLog(entry));
  },
};

export default logger;
