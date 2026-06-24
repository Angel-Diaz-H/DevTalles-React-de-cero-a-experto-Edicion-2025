---
name: react-devtalles-style
description: Enforces the React development patterns, folder organization, hook design guidelines, and testing methodologies of the DevTalles React course.
---

# React Development Style Guide (DevTalles Course Style)

When creating or modifying React code in this project, you MUST adhere to the following principles and standards:

## 1. Domain/Feature-based Structure

Organize codebase files by domain (e.g., `admin`, `heroes`, `auth`) rather than placing all components or pages in a single global directory.

- Pages go under `src/<domain>/pages/`
- Layouts go under `src/<domain>/layouts/`
- Domain-specific components go under `src/<domain>/components/`
- Domain-specific hooks go under `src/<domain>/hooks/` or a shared `src/hooks/` if generic.
- Use path aliases `@/` pointing to `src/`.

## 2. Custom Hooks Return Structure

When defining custom hooks, structure the return statement with explicit sections using comment headers:

```typescript
export const useFeature = () => {
  // 1. Internal states and refs
  // 2. Effects (useEffect, layouts, etc.)

  return {
    // Props. (Raw properties or states)
    stateVar,

    // Computed. (Derived state variables calculated on render)
    isReady: stateVar === "ready",

    // Methods. (Actions to modify state)
    triggerAction,
  };
};
```

## 3. Routing Separation

- Centralize routing in `src/router/app.router.tsx`.
- Use React Router's object-based declarations (`createBrowserRouter` or `createHashRouter`).
- Implement `lazy()` loading for secondary pages to optimize loading performance.

## 4. Co-located Testing

- Place test files in the same directory as the files they test (e.g., `my-component.tsx` and `my-component.test.tsx`).
- Use Vitest and `@testing-library/react`.
- When testing routers or components, mock layout and route dependencies using `vi.mock`.
- Ensure routes are covered by snapshot testing (`toMatchSnapshot()`) to prevent regression.

## 5. TypeScript Typing

- Write fully-typed code. Avoid `any`.
- Derive union types from literal objects using `keyof typeof` when mapping configurations or styling constants.
