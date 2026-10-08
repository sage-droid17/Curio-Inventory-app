# Curio — Inventory Management App

Curio is an inventory and business management app that helps businesses know **what they have in stock, where it is, what is being sold, what needs to be restocked, and how the business is performing financially.**

It connects **Purchases → Inventory → Sales → Expenses → Profit**, plus **Suppliers → Locations → Users → Activity History → Reports** in one place.

> Core question Curio answers: **What do I have, where is it, what is changing, and what needs my attention?**

## 🌐 Live Demo

**https://curio-inventory.netlify.app**

Hosted on Netlify (static deployment, auto-deploys from the `master` branch).

## Problem It Solves

Many businesses manage inventory with notebooks, spreadsheets, messages, memory, and separate systems. That makes it hard to answer:

- How much stock do we have? What's low or out of stock? Where is it?
- Who changed stock, and what was sold or purchased?
- Which supplier provides what? How much was spent vs. made?
- Which products sell well? What is actual profit?

This leads to stock shortages, excess stock, inaccurate records, missed sales, unnecessary spending, and poor visibility.

Curio fixes this with a centralized, simple, accountable system for everyday staff and owners/managers.

## Who It Is For

Designed for **small and medium-sized businesses with physical inventory.**

- **Business Owners (Admin):** full access — inventory, sales, purchases, expenses, profit, reports, multi-location stock, users/permissions, settings, activity.
- **Managers:** day-to-day operations — products, stock in/out, sales, purchases, suppliers, restocking, transfers, expenses, reports. No user or settings admin.
- **Staff:** everyday tasks only — Dashboard, Inventory, Sales, History, Notifications. No financial or setup pages.

## Main Features

- **Dashboard:** totals, low/out-of-stock, recent sales/purchases/activity, restock needs, sales/expenses/profit; quick actions for common tasks.
- **Inventory:** items with name, quantity, category, price, image, barcode, expiry date, min stock level, description; statuses In Stock / Low Stock / Out of Stock; Add Stock / Remove Stock / manual corrections with reasons.
- **Multi-item sale cart:** build a cart across products, validate per-location stock, record in one step, or charge the cart total directly with Paystack.
- **Sales:** per-location deduction, recorded-by attribution, sales history with location filter; **returns/refunds** with reasons (revenue and profit netted automatically).
- **Purchases:** supplier + multi-item lines + cost + location → stock auto-increments, costs update, supplier links maintained.
- **Suppliers:** profiles with contact info, linked products, purchase history.
- **Restock List:** auto-built from minimum stock levels per location, with supplier context and one-click prefilled purchasing.
- **Locations & Transfers:** per-location tracking plus combined view; transfers with Pending → In Transit → Received status (stock moves only on receipt).
- **Expenses:** amount, category (Rent, Transportation, Packaging, Staff, Electricity, Marketing, Other), description, date, location; history filters and spending-by-category view.
- **Profit Tracking:** product-level (units sold, revenue, COGS, profit) and overall Revenue − COGS − Expenses, plus this-month figures.
- **Reports:** period picker (week/month/last month/all time) with previous-period comparisons, sales-over-time chart, best sellers, expenses by category, purchases by supplier, inventory snapshot, CSV export.
- **Barcode scanning (Phase 8):** per-product codes; scan-to-find/sell/receive/transfer via device camera (native BarcodeDetector), USB scanner, or typed code; unknown codes offer on-the-spot product creation.
- **Paystack test payments:** Paystack InlineJS V2 checkout in NGN (kobo conversion, unique references); successful payments recorded and added to revenue; cancelled/failed attempts logged with status; CSV export.
- **Notifications:** automatic low/out-of-stock and expiry alerts, transfer updates, large-change alerts; bell with dropdown, full notification centre, per-type preferences.
- **Expiry tracking:** per-product dates with expired/expiring-soon flags and alerts.
- **Users & password login:** Admin/Manager/Staff roles with a permission matrix, email + salted-hash passwords, sign-in screen, sessions, password change and admin resets.
- **Settings:** business name, currency, default location/minimum, JSON backup export/restore.
- **Search, Filter & Sort:** by name or barcode; filter by category/status/location; sort by name/qty/price/recency/status.

See `Curio PRD.md` for full requirements (§§1–27), the implementation plan (§28, incl. Phase 9), technical decisions (§29), and the requirements traceability checklist (§31).

## How to Run the Project

No install, no build step, no server required.

**Option A — double-click (simplest):**
1. Download or clone this repository.
2. Open `index.html` in Chrome or Edge.

**Option B — local server (recommended for camera scanning):**
1. In the project folder, run `python -m http.server 8000`.
2. Open `http://localhost:8000/` in Chrome or Edge.

**Option C — hosted:** open https://curio-inventory.netlify.app (required for camera scanning, installable app, and online checkout).

## Demo Login Accounts

The app opens on a sign-in screen. Use these seeded accounts (default password for all three is **`curio123`** — change it in Users after signing in):

| Role | Name | Email | Sees |
|---|---|---|---|
| Admin | Ama | ama@curio.shop | Everything, incl. Users and Settings |
| Manager | Kwame | kwame@curio.shop | Everything except Users and Settings |
| Staff | Abena | abena@curio.shop | Dashboard, Inventory, Sales, History, Notifications only |

Sample inventory, suppliers, locations, expenses, and history are preloaded. Use **Reset data** (top bar) to restore the starter dataset at any time.

## Testing Checklist (manually verified)

- [x] Sign in as each role; Staff cannot open financial/setup pages
- [x] Add Item → appears in Inventory with correct status
- [x] Add/Remove stock with reason → quantity + history update
- [x] Build a cart → Record Sale → stock decrements per location
- [x] Over-quantity sale is rejected with available-stock message
- [x] Return part of a sale → stock restored, revenue netted
- [x] Record purchase → stock increments, cost and supplier links update
- [x] Transfer Main Store → Branch → stock moves only on Received
- [x] Restock List flags low items → prefilled purchase clears them
- [x] Scan/Type a barcode → product found; unknown code offers creation
- [x] Paystack test checkout opens; success records payment and lifts Revenue; cancel records `cancelled` with no revenue change
- [x] Reports period switch updates all cards; CSV exports download
- [x] Backup export → Reset data → backup restore round-trips

## Tech Stack

- **Frontend:** single-file HTML + CSS + vanilla JavaScript (`index.html`, ~1,800 lines, no framework, no build)
- **Storage:** browser `localStorage` (offline-first; data stays on the device)
- **Payments:** Paystack InlineJS V2 via official CDN (`https://js.paystack.co/v2/inline.js`)
- **Camera scanning:** native `BarcodeDetector` API (no libraries)
- **Hosting:** Netlify static deploy from `master` (`netlify.toml`), auto-deploy on push
- **Docs/design:** `Curio PRD.md`, `design.html` (UI preview)

The PRD's §28–§29 additionally specify the planned full-stack path (Next.js + SQLite/Postgres + Auth.js) for production beyond this prototype.

## Important Notes & Limitations

- **Prototype, single device:** data lives in the browser that created it; clearing site data deletes it — use Settings → backup regularly.
- **Demo-grade auth:** passwords are salted and hashed, but everything runs client-side, so this is not real server-side security. Do not use for sensitive production data without the §29 backend.
- **Paystack is TEST MODE only:** the repo contains a Paystack **test** public key (`pk_test_…`, publishable by design — it cannot move real money). No secret key exists anywhere in this project. Real payments require server-side verification with an `sk_test_`/`sk_live_` secret, which is intentionally out of scope here.
- **Simplifications:** COGS uses current unit cost (not FIFO/average); no tax/VAT handling; single-currency display with NGN-only Paystack collection.

## Future Work

Server-verified live payments, real backend auth + multi-device sync, purchase orders, product variants, customer records, budgets, automated restocking suggestions, offline installable (PWA) packaging.

## Product Principles

Simple, Clear, Action-oriented, Accountable, Connected, Decision-friendly.

## Development Notes

Built iteratively with AI coding assistance; all features manually tested by the author (see checklist above). `design.html` is an early static UI mock kept for reference.
