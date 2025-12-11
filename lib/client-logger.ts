'use client';

/**
 * Client-side Logger
 * Sends logs to the server API for centralized logging
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface ClientLogOptions {
  context?: string;
  metadata?: Record<string, unknown>;
}

async function sendLog(
  level: LogLevel,
  message: string,
  options?: ClientLogOptions
) {
  try {
    await fetch('/api/log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        level,
        message,
        context: options?.context,
        metadata: options?.metadata,
      }),
    });
  } catch (error) {
    // Fallback to console if API fails
    console.error('Failed to send log to server:', error);
  }
}

export const clientLogger = {
  debug(message: string, options?: ClientLogOptions) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[DEBUG] ${message}`, options?.metadata);
    }
    sendLog('debug', message, options);
  },

  info(message: string, options?: ClientLogOptions) {
    console.log(`[INFO] ${message}`, options?.metadata);
    sendLog('info', message, options);
  },

  warn(message: string, options?: ClientLogOptions) {
    console.warn(`[WARN] ${message}`, options?.metadata);
    sendLog('warn', message, options);
  },

  error(message: string, error?: Error | unknown, options?: ClientLogOptions) {
    const errorData = error instanceof Error 
      ? { errorMessage: error.message, stack: error.stack }
      : { errorMessage: String(error) };
    
    console.error(`[ERROR] ${message}`, error);
    sendLog('error', message, {
      ...options,
      metadata: {
        ...options?.metadata,
        error: errorData,
      },
    });
  },

  /**
   * Log user interactions (clicks, form submissions, etc.)
   */
  interaction(action: string, element?: string, options?: ClientLogOptions) {
    const message = element ? `User ${action}: ${element}` : `User ${action}`;
    sendLog('info', message, {
      context: 'interaction',
      ...options,
    });
  },

  /**
   * Log page navigation events
   */
  navigation(from: string, to: string, options?: ClientLogOptions) {
    sendLog('info', `Navigation: ${from} -> ${to}`, {
      context: 'navigation',
      ...options,
      metadata: {
        ...options?.metadata,
        fromPath: from,
        toPath: to,
      },
    });
  },

  /**
   * Log performance metrics
   */
  performance(metric: string, value: number, unit: string = 'ms', options?: ClientLogOptions) {
    sendLog('info', `Performance: ${metric}`, {
      context: 'performance',
      ...options,
      metadata: {
        ...options?.metadata,
        metric,
        value,
        unit,
      },
    });
  },
};

export default clientLogger;
