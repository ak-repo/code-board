# user-frontend



frontend/
│
├── public/
│   ├── index.html
│   └── icons/
│
├── src/
│   ├── api/                  # Axios/Fetch wrappers calling API Gateway
│   │   ├── authApi.ts
│   │   ├── trelloApi.ts
│   │   ├── gitApi.ts
│   │   ├── searchApi.ts
│   │   ├── notificationApi.ts
│   │   └── index.ts
│   │
│   ├── assets/               # Static assets (images, svgs)
│   │
│   ├── components/           # Shared UI components (buttons, modals, etc.)
│   │
│   ├── hooks/                # Custom React hooks
│   │
│   ├── layouts/              # Page wrappers (DashboardLayout, AdminLayout)
│   │
│   ├── modules/              # Feature-based structure
│   │   ├── auth/             # Login, Register, Profile
│   │   ├── trello/           # Boards, Lists, Cards
│   │   ├── git/              # Repositories, Issues, PRs
│   │   ├── notifications/    # Realtime events, alerts
│   │   ├── search/           # Global search bar + results
│   │   ├── activity/         # Activity feeds
│   │   └── admin/            # Admin Dashboard
│   │       ├── Dashboard.tsx
│   │       ├── Users.tsx
│   │       ├── Roles.tsx
│   │       ├── SystemHealth.tsx
│   │       └── Logs.tsx
│   │
│   ├── routes/
│   │   ├── AppRoutes.tsx
│   │   ├── PrivateRoute.tsx
│   │   └── AdminRoute.tsx
│   │
│   ├── store/                # Redux/Zustand/Context for global state
│   │   ├── authStore.ts
│   │   ├── boardStore.ts
│   │   ├── repoStore.ts
│   │   └── uiStore.ts
│   │
│   ├── styles/               # Global styles, Tailwind config
│   │
│   ├── utils/                # Helpers, constants, formatters
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── tailwind.config.js
├── tsconfig.json
└── package.json
