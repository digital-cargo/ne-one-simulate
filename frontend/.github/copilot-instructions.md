We develop a NextJS 15 React app. We are using TypeScript for the development. We are using TailwindCSS for styling. We are using ESLint and Prettier for linting and formatting. We are making heavy use of the shadcn ui library.

# Project structure
- All components are put in the `components` folder.

# Naming conventions
- All components are named with the conventions using kebab-case, e.g. `my-component.tsx`.


# This is the correct way to import Reactflow
```
import {ReactFlow,
    Background,
    ConnectionLineType,
    type Node,
    type Edge,
    BackgroundVariant
  } from "@xyflow/react";
  import '@xyflow/react/dist/style.css';
  ```