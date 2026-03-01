import type { ErrorDetails } from './create.js';

/**
 * Standardized error class for DepHub ecosystem with enhanced capabilities
 * @class DepHubError
 * @extends Error
 */
export class DepHubError extends Error {
  public readonly code: string;
  public readonly details: ErrorDetails;
  public readonly name: string;

  /**
   * Creates a new DepHubError instance
   * @param message - Human readable error description
   * @param code - Machine-readable error code
   * @param details - Additional context information
   * @param name - Specific error type name
   */
  constructor(
    message: string,
    code: string = 'ERR_DEPHUB',
    details: ErrorDetails = {},
    name: string = 'DepHubError',
  ) {
    super(message);

    this.name = name;
    this.code = code;
    this.details = details;

    // Maintain proper prototype chain and stack trace
    Object.setPrototypeOf(this, DepHubError.prototype);

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, DepHubError);
    }
  }

  /**
   * Serializes the error to a plain object for logging/transmission
   * @returns Structured error representation without circular references
   * @example
   * ```typescript
   * const error = new DepHubError('Failed operation', 'ERR_OPERATION_FAILED');
   * console.log(error.toJSON());
   * // Output: { code: 'ERR_OPERATION_FAILED', details: {}, message: 'Failed operation', name: 'DepHubError' }
   * ```
   */
  toJSON(): Readonly<{
    code: string;
    details: ErrorDetails;
    message: string;
    name: string;
    stack?: string;
  }> {
    return Object.freeze({
      code: this.code,
      details: this.details,
      message: this.message,
      name: this.name,
      stack: this.stack,
    });
  }

  /**
   * Returns a string representation of the error
   * @returns Formatted error string with code and message
   */
  toString(): string {
    return `[${this.code}] ${this.name}: ${this.message}`;
  }
}
