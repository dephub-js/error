# @dephub/error 🚨

> Lightweight error constructor for Node.js and browsers. Create, customize, and log errors with ease — **your errors, your rules**.

[![NPM version](https://img.shields.io/npm/v/@dephub/error.svg?style=flat)](https://www.npmjs.com/package/@dephub/error)
[![ESM-only](https://img.shields.io/badge/ESM-only-brightgreen?style=flat)](https://nodejs.org/)

---

## Features ✨

- 🏗️ **Structured Errors** - Custom error codes, details, and names
- 📊 **JSON Serialization** - Convert errors to structured objects
- 🎯 **TypeScript Ready** - Full type safety with zero configuration
- 🪶 **Lightweight** - Minimal dependencies, focused functionality
- 🌐 **Universal** - Works in Node.js and browsers
- 📝 **Consistent Logging** - Unified error logging with `lumilog`

---

## Installation 📦

```bash
npm install @dephub/error
# or
pnpm add @dephub/error
# or
yarn add @dephub/error
```

---

## Usage 🎯

### Basic Error Creation

```ts
import { createError, logError } from '@dephub/error';

// Create structured errors
const error = createError('Invalid user input', {
  code: 'ERR_VALIDATION_FAILED',
  details: { field: 'email', value: 'invalid' },
  name: 'ValidationError',
});

// Log with context
logError(error, 'User registration failed');
```

### Error Handling & Serialization

```ts
import { DepHubError, createError } from '@dephub/error';

// Constructor style
const error1 = new DepHubError(
  'Database connection failed',
  'ERR_DB_CONNECTION',
);

// Create function (recommended)
const error2 = createError('File not found', {
  code: 'ERR_FILE_NOT_FOUND',
  details: { path: '/some/file.txt' },
});

// Convert to JSON
console.log(error2.toJSON());
// { code: 'ERR_FILE_NOT_FOUND', details: { path: ... }, message: ... }
```

---

## API Reference 📚

### `DepHubError`

Core error class extending native `Error`.

```ts
class DepHubError extends Error {
  constructor(
    message: string,
    code?: string,
    details?: ErrorDetails,
    name?: string,
  );

  readonly name: string;
  readonly code: string;
  readonly details: ErrorDetails;

  toJSON(): Readonly<ErrorJSON>;
  toString(): string;
}
```

### `createError`

Creates `DepHubError` instances with simplified syntax.

```ts
function createError(
  message: string,
  options?: CreateErrorOptions,
): DepHubError;

interface CreateErrorOptions {
  code?: string; // Error code (default: 'ERR_DEPHUB')
  details?: ErrorDetails; // Additional context (default: {})
  name?: string; // Error type name (default: 'DepHubError')
}
```

### `logError`

Logs errors in consistent format across DepHub ecosystem.

```ts
function logError(error: unknown, context?: string): void;
```

---

## License 📄

MIT License – see [LICENSE](LICENSE).
**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
