import { NextRequest, NextResponse } from 'next/server';
import { logger } from '@/lib/logger';

/**
 * API Route for client-side log ingestion
 * Allows frontend to send logs to the server for centralized logging
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      level = 'info',
      message,
      context,
      metadata,
    } = body;

    // Extract request info for enhanced logging
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';
    const referer = request.headers.get('referer') || '';

    const logData = {
      context: context || 'client',
      ip: ip.replace('::ffff:', ''),
      userAgent: userAgent.substring(0, 200),
      metadata: {
        ...metadata,
        referer,
        source: 'client-side',
      },
    };

    // Route to appropriate log level
    switch (level) {
      case 'debug':
        logger.debug(message, logData);
        break;
      case 'warn':
        logger.warn(message, logData);
        break;
      case 'error':
        logger.error(message, metadata?.error, logData);
        break;
      case 'info':
      default:
        logger.info(message, logData);
        break;
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    logger.error('Failed to process client log', error);
    return NextResponse.json(
      { success: false, error: 'Invalid log format' },
      { status: 400 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Log endpoint is active. Use POST to submit logs.' },
    { status: 200 }
  );
}
