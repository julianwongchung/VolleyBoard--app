# VolleyBoard Test Suite

This directory contains automated tests for the VolleyBoard application using Vitest and React Testing Library.

## Test Files

### Component Tests
- **App.test.tsx** - Integration tests for the main App component and routing
- **Home.test.tsx** - Tests for the Home page component
- **Navigation.test.tsx** - Tests for the Navigation component
- **Scoreboard.test.tsx** - Tests for the Scoreboard component with score manipulation
- **Teams.test.tsx** - Tests for the Teams management component
- **Settings.test.tsx** - Tests for the Settings page component

### Data Tests
- **constants.test.tsx** - Tests for mock data and constants validation

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in UI mode (interactive)
```bash
npm run test:ui
```

### Run tests with coverage report
```bash
npm run test:coverage
```

### Run tests in watch mode
```bash
npm test -- --watch
```

### Run specific test file
```bash
npm test Home.test.tsx
```

## Test Coverage

The test suite covers:
- ✅ Component rendering
- ✅ User interactions (clicks, form inputs)
- ✅ Navigation and routing
- ✅ State management (score updates)
- ✅ Data validation
- ✅ UI element presence
- ✅ Accessibility features

## Test Structure

Each test file follows this structure:
1. **Imports** - Required testing utilities and components
2. **Mocks** - Mock functions for navigation and external dependencies
3. **Describe blocks** - Group related tests
4. **beforeEach** - Setup before each test
5. **it/test blocks** - Individual test cases
6. **Assertions** - Verify expected behavior

## Writing New Tests

When adding new tests:
1. Create a new `.test.tsx` file in the `test/` directory
2. Import the component and testing utilities
3. Mock any external dependencies (router, APIs, etc.)
4. Write descriptive test cases
5. Use meaningful assertions

Example:
```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MyComponent from '../views/MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(
      <BrowserRouter>
        <MyComponent />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

## Best Practices

1. **Test user behavior, not implementation details**
2. **Use accessible queries** (getByRole, getByLabelText, getByText)
3. **Keep tests isolated** - Each test should be independent
4. **Mock external dependencies** - Don't rely on actual APIs or navigation
5. **Write descriptive test names** - Clearly state what is being tested
6. **Test edge cases** - Not just the happy path

## Continuous Integration

These tests are designed to run in CI/CD pipelines. They:
- Run in jsdom environment (simulated browser)
- Don't require a real browser
- Complete quickly
- Provide clear error messages

## Troubleshooting

### Tests failing due to missing dependencies
```bash
npm install
```

### Tests failing due to import errors
Ensure all components are properly exported and paths are correct.

### Tests timing out
Increase timeout in vitest.config.ts if needed.

### Mock not working
Verify mock is defined before the component import.
