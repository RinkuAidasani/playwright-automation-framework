# Playwright Automation Framework

## Overview

This project demonstrates a scalable end-to-end automation framework built with **Playwright**, **TypeScript**, and the **Page Object Model (POM)**. It showcases modern QA automation practices, including reusable page objects, data-driven testing, cross-browser execution, and HTML reporting.

## Features

- Playwright with TypeScript
- Page Object Model (POM)
- Cross-browser execution (Chromium, Firefox, WebKit)
- Data-driven testing using JSON
- HTML reporting
- Modular project structure
- AI-assisted test design examples

## Project Structure

```
pages/          Page Object classes
tests/          End-to-end test cases
test-data/      Test data (JSON)
utils/          Reusable helper classes
generated/      Example generated test cases
prompts/        AI prompt templates
```

## Test Scenarios

- Valid Login
- Invalid Login
- Locked User Login

## Run the Tests

```bash
npm install
npx playwright test
```

## Run in Headed Mode

```bash
npx playwright test --headed
```

## View HTML Report

```bash
npx playwright show-report
```

## Tech Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions
- Visual Studio 2022

## Future Enhancements

- Shopping Cart Automation
- Checkout Flow
- API Testing
- Accessibility Testing
- CI/CD Pipeline Integration