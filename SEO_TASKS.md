# SEO Improvement Task List

This file tracks the status of SEO improvements for the Elite Elecon website.

## ✅ Already Implemented
1. **Create a unique page title for every page** - Each page passes a custom title to the Layout component.
2. **Add a meta description for every page** - Unique descriptions are provided for Home, About, Services, Projects, and Contact.
3. **Ensure your sitemap is submitted and working** - `@astrojs/sitemap` is configured in `astro.config.mjs`.
4. **Create and verify a robots.txt file** - Located at `public/robots.txt`.
5. **Add structured data (Schema markup)** - Enhanced `LocalBusiness` schema implemented in `Layout.astro` with social links, opening hours, and geo-coordinates.
9. **Add internal links between pages** - Navbar and Footer provide comprehensive internal linking.
10. **Make sure your website is fully mobile-friendly** - Fully responsive design using Tailwind CSS.
11. **Add Open Graph tags** - Implemented in `src/components/common/SEO.astro`.
14. **Add Google Analytics to track visitors** - Tracking script added to `SEO.astro` (requires replacing `G-XXXXXXXXXX` with a real ID).

## 🛠️ Possible to Add / Improve
6. **Optimize all images** - Ensure all images use Astro's `<Image />` component for better compression and lazy loading.
7. **Improve website loading speed and performance** - General optimization of scripts and assets.
8. **Create separate SEO pages for each service** - Breakdown the main services page into individual detailed pages (e.g., `/services/hvac`).
15. **Regularly update your website** - Keep the projects portfolio updated with latest work.

## 🚫 Not Possible (Codebase Scope)
12. **Create a Google Business Profile** - Must be managed through Google Business dashboard.
13. **Get backlinks from other websites** - Requires external SEO outreach and link-building strategies.
