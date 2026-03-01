import { logger } from '@dephub/logger';

import { DepHubError } from './error.js';

/**
 * Logs errors in a consistent format across the DepHub ecosystem
 * @param error - The error instance to log (any type supported)
 * @param context - Optional context message describing where the error occurred
 * @example
 * ```typescript
 * try {
 *   riskyOperation();
 * } catch (error) {
 *   logError(error, 'Failed to execute risky operation');
 * }
 * ```
 * @example
 * ```typescript
 * // With just an error
 * logError(new DepHubError('Operation failed'));
 * ```
 */
export const logError = (error: unknown, context: string = 'Error'): void => {
  if (error instanceof DepHubError) {
    logger.error(`${context}:`, error.toString());

    if (error.details && Object.keys(error.details).length > 0) {
      logger.log('Error details:', error.details);
    }

    if (error.stack) {
      logger.log('Stack trace:', error.stack);
    }
  } else {
    // Handle non-DepHubError instances
    const errorMessage = error instanceof Error ? error.message : String(error);
    logger.error(`${context}:`, errorMessage);

    if (error instanceof Error && error.stack) {
      logger.log('Stack trace:', error.stack);
    }
  }
};
