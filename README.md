# ClaritusTask

A Playwright-based testing project for automated testing.

## Project Overview

This project uses Playwright, a powerful end-to-end testing framework, to automate browser testing. It's built with Node.js and TypeScript.

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/subambharati/ClaritusTask.git
cd ClaritusTask
```

2. Install dependencies:
```bash
npm install
```

## Project Structure

- `/tests` - Contains all test files
- `/fixtures` - Test data and fixtures
- `/pages` - Page object models and page-specific utilities
- `playwright.config.js` - Playwright configuration file

## Running Tests

To run the tests on Chromium browser:
```bash
npx playwright test --project=chromium
```

For running all tests:
```bash
npx playwright test
```

For running tests in UI mode:
```bash
npx playwright test --ui
```

## Configuration

The project uses Playwright's configuration file (`playwright.config.js`) for test settings. You can modify this file to:
- Change browser settings
- Configure test timeouts
- Set up test retries
- Configure test reporters

## Dependencies

- @playwright/test: ^1.52.0
- @types/node: ^22.15.29

## Author

Subam Bharati