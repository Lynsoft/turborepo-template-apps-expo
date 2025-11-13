# React Native Expo Template

This template is a modern Expo + React Native setup that ships with:

- Biome as the primary linter and formatter
- Expo Router (file-based routing)
- NativeWind (Tailwind CSS for React Native) with automatic class sorting
- TypeScript (strict mode) and Expo's ESLint flat config
- Lefthook for Git hooks with automated code quality checks
- Conventional commit message validation
- Sentry for error tracking and performance monitoring

It’s designed to give you fast feedback, consistent code style, and minimal tool conflicts.

---

## Quick start

1) Install dependencies (pnpm is recommended)

```bash
pnpm install
```

2) Start the app

```bash
pnpm start
```

From Expo CLI, you can open:
- a development build
- the Android emulator
- the iOS simulator
- Expo Go

Edit files inside the `app/` directory. Routing is file-based (via Expo Router).

---

## Tooling stack

- **Biome**: formatter, linter, import organizer
- **ESLint**: Expo's flat config for Expo/React Native checks (via `expo lint`)
- **NativeWind + Tailwind**: utility-first styling in React Native
- **TypeScript**: strict, Expo base tsconfig
- **Lefthook**: Git hooks for automated code quality and commit validation
- **Sentry**: error tracking, performance monitoring, and session replay

Biome replaces Prettier as the formatter and provides most linting. We keep Expo's ESLint for Expo-specific rules. Biome does not conflict with ESLint because formatting is handled exclusively by Biome, and ESLint is not used to format.

---

## Biome integration

Biome is configured in `biome.jsonc` to:
- Format code consistently
- Organize and sort imports
- Enforce React/JSX best practices (React domain)
- Enforce code-quality rules (see below)
- Automatically sort Tailwind/NativeWind utility classes

VS Code is configured to use Biome as the default formatter and to apply Biome fixes/organize-imports on save.

### Biome scripts

Use these commands during development:

- `pnpm run biome:check` — Format, lint, and organize imports (read-only)
- `pnpm run biome:fix` — Same as check, but applies fixes (`--write`)
- `pnpm run biome:format` — Only format files (`--write`)
- `pnpm run biome:lint` — Run the linter (read-only)
- `pnpm run biome:lint:fix` — Run the linter and apply safe fixes

When to use what:
- During day-to-day dev: rely on format-on-save and import organization from the editor.
- Pre-commit/CI: `pnpm run biome:check`
- To auto-fix locally: `pnpm run biome:fix`

### ESLint with Expo

This template retains Expo’s ESLint config for Expo-specific linting:

- Run it with: `pnpm run lint` (alias for `expo lint`)
- ESLint does not handle formatting in this setup — Biome does.

This separation avoids conflicts while keeping useful Expo rules.

---

## Git hooks with Lefthook

This template includes Lefthook for automated code quality checks via Git hooks. Lefthook runs automatically on commits and pushes to ensure code quality and consistent commit messages.

### Automated checks

**Pre-commit hooks:**
- **Biome check**: Automatically runs linting and formatting on staged files
- **Auto-staging**: Fixed files are automatically staged for commit
- **Fast execution**: Runs in parallel for optimal performance

**Pre-push hooks:**
- **TypeScript check**: Runs `tsc --noEmit` to catch type errors before pushing
- **Build validation**: Ensures your code compiles without errors

**Commit message validation:**
- **Conventional commits**: Enforces proper commit message format
- **Format validation**: Checks type, scope, description length, and formatting
- **Helpful guidance**: Clear error messages with examples when validation fails

**Post-checkout/merge hooks:**
- **Auto dependency install**: Runs `pnpm install` when package files change

### Conventional commit format

Commit messages must follow the conventional commit format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Valid types:**
- `feat` — New feature
- `fix` — Bug fix
- `docs` — Documentation changes
- `style` — Code style changes (formatting, etc.)
- `refactor` — Code refactoring
- `test` — Adding or updating tests
- `chore` — Maintenance tasks
- `perf` — Performance improvements
- `ci` — CI/CD changes
- `build` — Build system changes
- `revert` — Revert previous commit

**Examples:**
```bash
git commit -m "feat: add user authentication"
git commit -m "fix(auth): resolve login issue"
git commit -m "docs: update README with setup instructions"
```

### Managing hooks

Lefthook is automatically installed when you run `pnpm install`. You can also:

```bash
# Reinstall hooks
npx lefthook install

# Run hooks manually
npx lefthook run pre-commit
npx lefthook run pre-push

# Skip hooks (use sparingly)
LEFTHOOK=0 git commit -m "emergency fix"
```

---

## Error tracking with Sentry

This template includes Sentry for comprehensive error tracking, performance monitoring, and session replay. Sentry helps you catch and debug issues in production before your users report them.

### Features included

**Error tracking:**
- Automatic crash reporting for JavaScript and native crashes
- Detailed error context with stack traces, breadcrumbs, and user data
- Real-time error notifications and alerts

**Performance monitoring:**
- App startup time tracking
- Screen load performance
- Network request monitoring
- Custom performance metrics

**Session replay:**
- Visual reproduction of user sessions leading to errors
- Touch interactions, navigation, and UI state changes
- Privacy-focused with automatic PII scrubbing

### Configuration

Sentry is pre-configured and ready to use:

**Initialization** (`app/_layout.tsx`):
```typescript
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'YOUR_SENTRY_DSN',
  sendDefaultPii: true,
  replaysSessionSampleRate: 0.1,  // 10% of sessions
  replaysOnErrorSampleRate: 1,    // 100% of error sessions
  integrations: [Sentry.mobileReplayIntegration()],
});

export default Sentry.wrap(function RootLayout() {
  // Your app component
});
```

**Metro configuration** (`metro.config.js`):
- Integrated with Sentry's Metro plugin for source map upload
- Automatic release tracking and deployment notifications

**Build integration** (`app.json`):
- Expo plugin configured for automatic source map upload
- Release management and version tracking

### Usage examples

**Manual error reporting:**
```typescript
import * as Sentry from '@sentry/react-native';

// Capture exceptions
try {
  riskyOperation();
} catch (error) {
  Sentry.captureException(error);
}

// Capture custom messages
Sentry.captureMessage('Something went wrong', 'error');

// Add user context
Sentry.setUser({
  id: 'user123',
  email: 'user@example.com',
  username: 'john_doe'
});

// Add custom tags and context
Sentry.setTag('feature', 'authentication');
Sentry.setContext('device', {
  model: 'iPhone 15',
  os: 'iOS 17.0'
});
```

**Performance monitoring:**
```typescript
// Track custom transactions
const transaction = Sentry.startTransaction({
  name: 'User Login',
  op: 'authentication'
});

// Add spans for detailed timing
const span = transaction.startChild({
  op: 'api.request',
  description: 'POST /auth/login'
});

try {
  await loginUser();
  transaction.setStatus('ok');
} catch (error) {
  transaction.setStatus('internal_error');
  Sentry.captureException(error);
} finally {
  span.finish();
  transaction.finish();
}
```

### Environment setup

1. **Get your Sentry DSN** from your Sentry project settings
2. **Update the DSN** in `app/_layout.tsx` (replace the example DSN)
3. **Set up authentication token** for build-time features:

```bash
# Copy the example environment file
cp .env.example .env

# Add your Sentry auth token
echo "SENTRY_AUTH_TOKEN=your_auth_token_here" >> .env
```

4. **Configure organization and project** in `app.json`:
```json
{
  "plugins": [
    [
      "@sentry/react-native/expo",
      {
        "organization": "your-org",
        "project": "your-project"
      }
    ]
  ]
}
```

### Development vs Production

**Development mode:**
- Errors are logged to console and sent to Sentry
- Session replay is disabled by default
- Spotlight integration available (uncomment in `_layout.tsx`)

**Production builds:**
- Full error tracking and performance monitoring
- Session replay enabled for error sessions
- Source maps automatically uploaded during build
- Release tracking and deployment notifications

### Best practices

**Error boundaries:**
```typescript
import * as Sentry from '@sentry/react-native';

const ErrorBoundary = Sentry.withErrorBoundary(YourComponent, {
  fallback: ({ error, resetError }) => (
    <View>
      <Text>Something went wrong</Text>
      <Button title="Try again" onPress={resetError} />
    </View>
  ),
});
```

**Privacy considerations:**
- PII scrubbing is enabled by default
- Sensitive data is automatically filtered
- Custom data scrubbing can be configured
- Session replay respects privacy settings

**Performance optimization:**
- Sample rates are configured to balance insight and performance
- Error sessions are always captured for debugging
- Regular sessions are sampled at 10% to manage quota

### Monitoring and alerts

Set up alerts in your Sentry dashboard for:
- New error types
- Error rate spikes
- Performance degradation
- Release health issues

---

## NativeWind + Tailwind class sorting

Tailwind CSS utility classes used with NativeWind (e.g. in `className`) are automatically sorted by Biome’s `useSortedClasses` rule. This keeps class order consistent without relying on Prettier plugins.

Notes:
- Sorting runs via Biome’s linter rule and is applied on save.
- Works with common helpers like `clsx`, `cn`, `cva`, and `tw`.

---

## Code quality guidelines

Biome enforces the following rules in this template:

- Cognitive complexity limit: functions over a complexity of 15 are flagged
- No explicit `any`: disallowed in TypeScript
- Import organization: imports are automatically grouped and sorted
- React domain rules: a curated set of React/JSX best practices

Keep functions small and focused. If a function exceeds the complexity threshold, split it into smaller units.

---

## Project structure and workflow

- File-based routing: edit screens under `app/` (see Expo Router docs)
- Reset starter code: when ready to start fresh, run:

```bash
pnpm run reset-project
```

This moves the starter code to `app-example/` and creates a blank `app/` with minimal files.

### Common scripts

**Development:**
- `pnpm start` — Launch Expo CLI
- `pnpm ios` — Open in iOS simulator
- `pnpm android` — Open in Android emulator
- `pnpm web` — Run in web

**Code quality:**
- `pnpm lint` — Run Expo’s ESLint checks
- Biome commands — see “Biome scripts” above
- Git hooks run automatically via Lefthook (see "Git hooks" section)

---

## Editor setup (VS Code)

Recommended extensions:
- Expo Tools: `expo.vscode-expo-tools`
- Biome: `biomejs.biome`

Editor behavior:
- Biome is the default formatter
- Format on save is enabled
- Biome applies safe fixes and organizes imports on save

This is preconfigured in `.vscode/settings.json` and `.vscode/extensions.json`.

---

## Getting help and learning more

- **Expo docs**: https://docs.expo.dev/
- **Expo Router** (file-based routing): https://docs.expo.dev/router/introduction
- **NativeWind**: https://www.nativewind.dev/
- **Biome**: https://biomejs.dev/
- **Lefthook**: https://lefthook.dev/
- **Conventional Commits**: https://www.conventionalcommits.org/
- **Sentry React Native**: https://docs.sentry.io/platforms/react-native/

Happy building! 🚀
