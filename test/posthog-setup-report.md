# PostHog post-wizard report

The wizard has completed a deep integration of your Next.js App Router project with PostHog. Here's what was done:

- **`instrumentation-client.ts`** (new) — Initialises PostHog on the client side via Next.js's built-in instrumentation hook. Uses a reverse proxy path (`/ingest`) and enables automatic exception capture.
- **`next.config.ts`** (updated) — Added reverse-proxy rewrites so PostHog requests route through `/ingest` (less likely to be blocked by ad blockers). Added `skipTrailingSlashRedirect: true`.
- **`.env.local`** (new) — Stores `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST`.
- **`app/page.tsx`** (updated) — Added `"use client"` and `posthog.capture()` calls for `deploy_now_clicked`, `documentation_clicked`, and `templates_link_clicked`.
- **`app/navbar/Navbar.tsx`** (updated) — Added `posthog.capture()` calls for `nav_link_clicked` (desktop + mobile), `login_button_clicked` (desktop + mobile), and `mobile_menu_toggled`.
- **`app/navbar/ActivityBar.tsx`** (updated) — Added `posthog.capture()` for `activity_bar_item_clicked` with the panel ID as a property.
- **`app/practice/PhotoGalleryTracker.tsx`** (new) — Tiny client component that fires `photo_gallery_viewed` on mount, used from the server-rendered practice page.
- **`app/practice/page.tsx`** (updated) — Renders `<PhotoGalleryTracker />` to capture the gallery view event.

## Events

| Event name | Description | File |
|---|---|---|
| `nav_link_clicked` | User clicks a navigation link in the top navbar (Home, Projects, Blog, Contact). | `app/navbar/Navbar.tsx` |
| `login_button_clicked` | User clicks the Login button in the navbar on desktop or mobile. | `app/navbar/Navbar.tsx` |
| `mobile_menu_toggled` | User opens or closes the mobile hamburger menu in the navbar. | `app/navbar/Navbar.tsx` |
| `activity_bar_item_clicked` | User switches the active panel in the VSCode-style activity bar sidebar. | `app/navbar/ActivityBar.tsx` |
| `deploy_now_clicked` | User clicks the Deploy Now CTA button on the home page. | `app/page.tsx` |
| `documentation_clicked` | User clicks the Documentation link on the home page. | `app/page.tsx` |
| `templates_link_clicked` | User clicks the Templates link in the home page description text. | `app/page.tsx` |
| `photo_gallery_viewed` | User views the photo gallery page, marking the top of the photo browsing funnel. | `app/practice/page.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/485652/dashboard/1759642)
- [Nav link clicks over time](https://us.posthog.com/project/485652/insights/WUodATPk)
- [Login button clicks (by source)](https://us.posthog.com/project/485652/insights/UAdf5uZd)
- [CTA clicks — Deploy, Docs, Templates](https://us.posthog.com/project/485652/insights/meenNecl)
- [Activity bar panel switches](https://us.posthog.com/project/485652/insights/WmQgtQfP)
- [Photo gallery views](https://us.posthog.com/project/485652/insights/odNj5IY0)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` to `.env.example` and any monorepo/bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
