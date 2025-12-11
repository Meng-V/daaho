/**
 * Next.js Instrumentation
 * This file runs once when the server starts (Next.js 13+)
 * Used for server-side logging, monitoring, and telemetry initialization
 */

export async function register() {
  // Only run on the server
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { logger } = await import('./lib/logger');
    
    logger.system('Server starting', {
      metadata: {
        nodeVersion: process.version,
        environment: process.env.NODE_ENV,
        platform: process.platform,
        pid: process.pid,
      },
    });

    // Log uncaught exceptions
    process.on('uncaughtException', (error) => {
      logger.error('Uncaught Exception', error, {
        context: 'system',
      });
    });

    // Log unhandled promise rejections
    process.on('unhandledRejection', (reason) => {
      logger.error('Unhandled Rejection', reason as Error, {
        context: 'system',
      });
    });

    // Log when server is shutting down
    process.on('SIGTERM', () => {
      logger.system('Server shutting down (SIGTERM)', {
        metadata: { signal: 'SIGTERM' },
      });
    });

    process.on('SIGINT', () => {
      logger.system('Server shutting down (SIGINT)', {
        metadata: { signal: 'SIGINT' },
      });
    });

    logger.system('Instrumentation registered successfully');
  }

  // Edge runtime logging
  if (process.env.NEXT_RUNTIME === 'edge') {
    const { logger } = await import('./lib/logger');
    logger.system('Edge runtime initialized');
  }
}

/**
 * Called when there's an error during request handling
 * Available in Next.js 15+
 */
export function onRequestError(
  err: { digest: string } & Error,
  request: {
    path: string;
    method: string;
    headers: { [key: string]: string };
  },
  context: {
    routerKind: 'Pages Router' | 'App Router';
    routePath: string;
    routeType: 'render' | 'route' | 'action' | 'middleware';
    renderSource: 'react-server-components' | 'react-server-components-payload' | 'server-rendering';
    revalidateReason: 'on-demand' | 'stale' | undefined;
    renderType: 'dynamic' | 'dynamic-resume';
  }
) {
  // Dynamic import to avoid issues
  import('./lib/logger').then(({ logger }) => {
    logger.error('Request Error', err, {
      context: 'request',
      method: request.method,
      url: request.path,
      metadata: {
        digest: err.digest,
        routerKind: context.routerKind,
        routePath: context.routePath,
        routeType: context.routeType,
        renderSource: context.renderSource,
        revalidateReason: context.revalidateReason,
        renderType: context.renderType,
      },
    });
  });
}
