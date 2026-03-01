/* eslint-disable @typescript-eslint/no-empty-object-type */
import { DepHubError } from './error.js';

/**
 * Options for creating a DepHubError instance
 * @interface CreateErrorOptions
 */
export interface CreateErrorOptions {
  /**
   * Error code to identify the type of error
   * @default 'ERR_DEPHUB'
   */
  code?: string;
  /**
   * Additional context details to include with the error
   * @default {}
   */
  details?: ErrorDetails;
  /**
   * Custom name for the error type
   * @default 'DepHubError'
   */
  name?: string;
}

/**
 * Additional context details for the error
 * @interface ErrorDetails
 */
export interface ErrorDetails extends Record<string, unknown> {}

/**
 * Creates a standardized DepHubError instance with consistent options
 * @param message - Human readable error description
 * @param options - Configuration options for error creation
 * @returns A new DepHubError instance
 * @example
 * ```typescript
 * const error = createError('Invalid user input provided', {
 *   code: 'ERR_INVALID_INPUT',
 *   details: { field: 'email', value: 'invalid' },
 *   name: 'ValidationError'
 * });
 * ```
 * @example
 * ```typescript
 * // Simple usage with just a message
 * const error = createError('Database connection failed');
 * ```
 */
export const createError = (
  message: string,
  options: CreateErrorOptions = {},
): DepHubError =>
  new DepHubError(message, options.code, options.details, options.name);
