# **Curio**

## **Inventory Management App — Product Requirements Document**

---

# **1\. Product Overview**

**Curio** is an inventory and business management app designed to help businesses know **what they have in stock, where it is, what is being sold, what needs to be restocked, and how the business is performing financially**.

Curio brings inventory, sales, purchases, suppliers, expenses, locations, and business reports into one place.

The product should be simple enough for everyday staff to use while providing owners and managers with the information they need to understand and manage the business.

---

# **2\. The Problem Curio Solves**

Many businesses manage their inventory using a mixture of notebooks, spreadsheets, messages, memory, and separate systems.

This can make it difficult to answer basic questions such as:

* How much stock do we currently have?  
* Which products are running low?  
* Which products are out of stock?  
* Where is a particular product located?  
* Who changed the stock quantity?  
* What products were recently sold?  
* What stock have we purchased?  
* Which supplier provides a particular product?  
* How much money have we spent?  
* How much have we made?  
* Which products are selling well?  
* What is the business's actual profit?

These problems can lead to **stock shortages, excess stock, inaccurate records, missed sales, unnecessary spending, and difficulty understanding business performance**.

### **Curio's solution**

Curio gives businesses a centralized place to manage their inventory and related business activity.

Instead of simply showing a list of products, Curio connects:

**Purchases → Inventory → Sales → Expenses → Profit**

It also connects inventory to:

**Suppliers → Locations → Users → Activity History → Reports**

This gives the business a clearer picture of what is happening.

---

# **3\. Target Users**

Curio is designed primarily for **small and medium-sized businesses that need to manage physical inventory**.

## **Business Owners**

Owners need a complete view of their business.

They can use Curio to:

* Monitor inventory  
* Review sales  
* Track purchases  
* Monitor expenses  
* Understand profit  
* Review business reports  
* Monitor multiple locations  
* Manage employees and permissions  
* Review activity

---

## **Managers**

Managers need to manage day-to-day operations.

They can use Curio to:

* Add and update products  
* Receive stock  
* Remove stock  
* Record sales  
* Record purchases  
* Manage restocking  
* Manage stock transfers  
* Monitor inventory  
* Review operational reports

---

## **Staff**

Staff members need a simple way to perform everyday inventory tasks.

They can use Curio to:

* View permitted inventory  
* Add stock  
* Remove stock  
* Record sales  
* Check stock levels  
* Perform assigned inventory tasks

Their access should be limited according to their role.

---

# **4\. How Curio Is Used**

Curio is designed to become part of the business's everyday workflow.

### **Step 1 — Add products**

The business creates its inventory by adding products.

Each product can include:

* Item name  
* Quantity  
* Category  
* Price  
* Product image  
* Minimum stock level  
* Description

---

### **Step 2 — Add suppliers**

Businesses create supplier profiles and connect suppliers to the products they provide.

---

### **Step 3 — Add locations**

Businesses can create locations such as:

* Main Store  
* Warehouse  
* Branch 1  
* Branch 2

---

### **Step 4 — Receive stock**

When new products are purchased, the user records the purchase in Curio.

Curio increases the relevant stock quantity and keeps the purchase in the purchase history.

---

### **Step 5 — Sell products**

When a product is sold, the user records the sale.

Curio automatically reduces the relevant stock quantity.

---

### **Step 6 — Monitor stock**

The dashboard shows the current inventory situation.

Users can see:

* Available stock  
* Low-stock items  
* Out-of-stock items  
* Recent activity  
* Items requiring attention

---

### **Step 7 — Restock**

When products reach their minimum stock level, Curio places them on the Restock List.

The user can review the item, supplier, location, and stock level before recording the new purchase.

---

### **Step 8 — Move stock**

If stock needs to move between locations, users can create a stock transfer.

For example:

**Warehouse → Main Store**

Curio keeps a record of the transfer.

---

### **Step 9 — Track expenses**

Businesses can record expenses such as:

* Rent  
* Transportation  
* Packaging  
* Staff expenses  
* Electricity  
* Marketing  
* Other expenses

---

### **Step 10 — Review performance**

Owners and managers can use Curio's reports to understand:

* Sales  
* Purchases  
* Expenses  
* Profit  
* Inventory  
* Best-selling products  
* Stock trends  
* Supplier activity

---

# **5\. Product Goal**

The primary goal of Curio is to give businesses a reliable and easy-to-understand view of their:

* Current stock  
* Stock movements  
* Sales  
* Purchases  
* Suppliers  
* Expenses  
* Profit  
* Locations  
* Restocking needs  
* Business performance

The core experience should answer:

> **What do I have, where is it, what is changing, and what needs my attention?**

---

# **6\. Core Inventory**

Users can create inventory items containing:

* Item name  
* Quantity in stock  
* Category  
* Price  
* Product image  
* Minimum stock level  
* Description

Each item should clearly display its current stock status.

### **Stock statuses**

* **In Stock**  
* **Low Stock**  
* **Out of Stock**

Users can manually correct quantities when necessary.

They can also use dedicated:

* **Add Stock**  
* **Remove Stock**

actions.

---

# **7\. Stock History**

Every stock change should be recorded.

The history should show:

* Item  
* Quantity changed  
* Type of change  
* Date  
* Reason  
* User responsible  
* Location affected

Users should be able to review the history of an individual product as well as broader inventory activity.

This creates accountability and makes it easier to identify mistakes.

---

# **8\. Low-Stock & Restocking**

Each item has a minimum stock level.

When the quantity reaches that level, the item becomes **Low Stock**.

When quantity reaches zero, it becomes **Out of Stock**.

### **Restock List**

Curio automatically creates a Restock List containing items that need attention.

The list should show:

* Product  
* Current quantity  
* Minimum quantity  
* Supplier  
* Location  
* Stock status

Users can work through the list and record the relevant purchases.

---

# **9\. Search, Filtering & Sorting**

The inventory should remain easy to navigate even when there are many products.

### **Search**

Search by item name.

### **Filters**

Users can filter by:

* Category  
* Stock status  
* Location  
* Supplier

### **Sorting**

Users can sort by:

* Name  
* Quantity  
* Price  
* Recently updated  
* Stock status

---

# **10\. Dashboard**

The dashboard is the primary home screen.

It provides an immediate overview of the business.

### **Key information**

* Total inventory items  
* Total quantity in stock  
* Low-stock items  
* Out-of-stock items  
* Recent sales  
* Recent purchases  
* Recent inventory activity  
* Items requiring restocking  
* Sales  
* Expenses  
* Profit

### **Quick actions**

* Add Item  
* Add Stock  
* Remove Stock  
* Record Sale  
* Record Purchase  
* Add Expense  
* View Restock List  
* Transfer Stock

The dashboard should prioritize information requiring attention.

---

# **11\. Suppliers**

Curio should have a dedicated supplier section.

Users can create supplier profiles containing:

* Supplier name  
* Contact information  
* Products supplied  
* Purchase history

A supplier can provide multiple inventory items.

The Restock List should identify the relevant supplier where available.

---

# **12\. Sales**

Curio should include a simple sales workflow.

When a sale is recorded:

1. Select the product.  
2. Enter the quantity sold.  
3. Select the location.  
4. Record the sale.  
5. Inventory is automatically reduced.  
6. The sale appears in sales history.

### **Sales history**

Users can review:

* Product sold  
* Quantity  
* Selling price  
* Date  
* Location  
* User who recorded the sale

---

# **13\. Purchases**

Curio should record incoming stock purchases.

A purchase includes:

* Supplier  
* Products purchased  
* Quantities  
* Purchase cost  
* Date  
* Location receiving the stock

When a purchase is recorded, the relevant inventory increases.

### **Purchase history**

Users can review previous purchases and supplier activity.

This creates the complete flow:

**Purchase → Stock → Sale**

---

# **14\. Profit Tracking**

Curio should calculate profitability using sales and purchase information.

### **Product-level performance**

For individual products:

* Sales  
* Cost  
* Profit  
* Quantity sold

### **Overall performance**

For a selected period:

* Revenue  
* Cost of goods  
* Expenses  
* Profit

The financial information should be presented clearly and simply.

---

# **15\. Expense Tracking**

Users can record expenses separately from inventory purchases.

Expenses include:

* Amount  
* Category  
* Description  
* Date  
* Location where relevant

### **Expense categories**

* Rent  
* Transportation  
* Packaging  
* Staff expenses  
* Electricity  
* Marketing  
* Other

Users can review expense history and spending by category.

Expenses contribute to overall profit calculations.

---

# **16\. Reports & Analytics**

Curio should provide detailed but easy-to-understand reports.

### **Inventory reports**

* Current inventory  
* Low-stock products  
* Out-of-stock products  
* Inventory by category  
* Inventory by location

### **Sales reports**

* Sales over time  
* Products sold  
* Best-selling products  
* Sales by location

### **Purchase reports**

* Purchase history  
* Supplier spending  
* Products purchased  
* Purchases by location

### **Expense reports**

* Expenses over time  
* Expenses by category  
* Spending by location

### **Profit reports**

* Revenue  
* Inventory costs  
* Expenses  
* Profit  
* Product profitability

### **Comparisons**

Users can compare periods such as:

* This month vs last month  
* This week vs last week  
* Current period vs previous period

---

# **17\. Multiple Locations**

Curio supports businesses with multiple inventory locations.

Examples:

* Main Store  
* Warehouse  
* Branch 1  
* Branch 2

Inventory quantities are tracked separately for each location.

For example:

**Rice**

* Main Store: 20  
* Warehouse: 100  
* Branch 1: 15

Users can view:

* Stock at an individual location  
* Combined stock across all locations

---

# **18\. Stock Transfers**

Users can transfer inventory between locations.

A transfer records:

* Product  
* Quantity  
* Source location  
* Destination location  
* Date  
* Person responsible  
* Reason  
* Transfer status

### **Transfer statuses**

**Pending → In Transit → Received**

The transfer history remains available for review.

---

# **19\. Notifications**

Curio should notify users about important events.

### **Inventory notifications**

* Low stock  
* Out of stock  
* Restocking reminders

### **Business notifications**

* Important inventory activity  
* Significant stock changes  
* Completed stock transfers  
* Important reports

Users can control which notifications they receive.

---

# **20\. Activity History**

Curio should maintain a broader activity history.

Examples:

* Product created  
* Product updated  
* Stock added  
* Stock removed  
* Sale recorded  
* Purchase recorded  
* Expense added  
* Stock transferred  
* Supplier updated  
* User activity

Each activity should identify the relevant user and date.

---

# **21\. User Roles & Permissions**

Curio supports role-based access.

### **Admin**

Full access to:

* Inventory  
* Sales  
* Purchases  
* Expenses  
* Profit  
* Reports  
* Suppliers  
* Locations  
* Users  
* Settings

### **Manager**

Access to operational inventory and business activities, with restricted administrative controls.

### **Staff**

Access to everyday tasks required for their role, with restricted access to sensitive financial and administrative information.

The Admin should be able to control what each role can access.

---

# **22\. Recommended Navigation**

The primary navigation should include:

1. **Dashboard**  
2. **Inventory**  
3. **Sales**  
4. **Purchases**  
5. **Suppliers**  
6. **Restock**  
7. **Locations**  
8. **Expenses**  
9. **Reports**  
10. **Activity**  
11. **Users**  
12. **Settings**

---

# **23\. Important User Flows**

## **Adding a Product**

Dashboard → Add Item → Enter product information → Save → Product appears in Inventory.

## **Receiving Stock**

Inventory → Select Product → Add Stock → Enter quantity and purchase information → Save → Stock increases.

## **Selling a Product**

Sales → New Sale → Select product → Enter quantity → Select location → Record Sale → Stock decreases.

## **Restocking**

Restock List → Select item → Review supplier → Record Purchase → Stock increases → Item leaves the urgent Restock List when it is sufficiently stocked.

## **Moving Stock**

Locations → Transfer Stock → Select source → Select destination → Select product → Enter quantity → Confirm → Track transfer.

## **Reviewing Performance**

Dashboard → Reports → Select report → Select period → Review sales, purchases, expenses, and profit.

---

# **24\. Product Principles**

### **1\. Simple**

Everyday inventory actions should require minimal effort.

### **2\. Clear**

Users should always understand their current stock position.

### **3\. Action-oriented**

Curio should highlight what requires attention instead of simply displaying information.

### **4\. Accountable**

Important actions should have a clear history showing who did what and when.

### **5\. Connected**

Inventory, sales, purchases, suppliers, expenses, locations, and profit should work together rather than feeling like separate systems.

### **6\. Decision-friendly**

Reports should turn business activity into information that helps owners and managers understand their business.

---

# **25\. Initial Product Scope**

## **Essential Features**

* Inventory management  
* Add/remove stock  
* Manual stock corrections  
* Stock history  
* Categories  
* Low-stock alerts  
* Restock List  
* Search, filtering, and sorting  
* Dashboard  
* Multiple users and roles  
* Suppliers  
* Sales  
* Purchases  
* Profit tracking  
* Expenses  
* Reports  
* Multiple locations  
* Stock transfers  
* Notifications  
* Activity history

---

# **26\. Future Enhancements**

After the core Curio experience is established, potential future features include:

* Barcode scanning  
* Customer management  
* Customer purchase history  
* Discounts  
* Returns and refunds  
* Purchase orders  
* Supplier performance  
* Product variants  
* Expiry-date management  
* Automated restocking suggestions  
* Budget tracking  
* Custom reports  
* Data export  
* Business performance goals

These features should come after the core inventory experience is polished.

---

# **27\. Success Criteria**

Curio should succeed if a business owner can quickly answer:

**What do I have?**

**How much do I have?**

**Where is it?**

**What is running low?**

**What do I need to restock?**

**Who supplies it?**

**What have I purchased?**

**What have I sold?**

**How much have I spent?**

**How much have I made?**

**Which products are performing well?**

**What is happening in my business over time?**

The ultimate goal of Curio is to make inventory management **clear, organized, and actionable**, while giving businesses a single place to understand their stock and business performance.

---

# **28\. Implementation Plan**

> Ordered build sequence. Each phase ends with runnable local app + concrete deliverables. Do not skip phases — each phase is a dependency for the next.

## **Phase 0 — Project Foundation (Local Dev Ready)**

**Goal:** Runnable local skeleton with DB, auth shell, and navigation.

**Deliverables:**

* Next.js + TypeScript repo initialized with Tailwind CSS + shadcn/ui, ESLint/Prettier
* Prisma + SQLite wired (`prisma/schema.prisma`, `prisma/curio.db`, migrations working)
* Auth.js shell with login page, seeded users (Admin / Manager / Staff), session + role in middleware
* App shell layout with PRD §22 navigation: Dashboard, Inventory, Sales, Purchases, Suppliers, Restock, Locations, Expenses, Reports, Activity, Users, Settings
* Local run verified: `npm install`, `npx prisma migrate dev`, `npm run dev` → app at `http://localhost:3000`
* README updated with real run commands

## **Phase 1 — Core Inventory**

**Goal:** PRD §6 + §9 — create and manage products.

**Deliverables:**

* `Product` model: name, quantity (computed per-location in Phase 2, single-qty for now), category, price, costPrice, imagePath, minStockLevel, description, createdBy/updatedAt
* `Category` model + CRUD UI
* Inventory pages: list, create, edit, detail, delete (soft or confirm), manual quantity correction
* Stock statuses computed: In Stock / Low Stock / Out of Stock
* Search by name; filter by category/status; sort by name/quantity/price/recent/status
* Add Stock / Remove Stock actions with reason field (writes to StockHistory stub)
* Product image upload to local `public/uploads/products/` working end-to-end
* Empty/loading/error states for inventory list

## **Phase 2 — Multiple Locations, Transfers & Stock History**

**Goal:** PRD §7 + §17 + §18 — where stock is and how it moves.

**Deliverables:**

* `Location` model + CRUD (Main Store, Warehouse, Branch 1/2 seed)
* `StockLevel` model (productId + locationId + quantity, unique constraint) replacing single-qty; combined + per-location views
* `StockTransfer` model: product, qty, source, destination, date, responsible, reason, status Pending → In Transit → Received with status transitions enforcing inventory moves only on Received
* Transfer UI: create, list, approve/receive, history
* `StockHistory` full log: item, qtyChanged, type (purchase/sale/adjustment/transfer), date, reason, user, location; per-product history + global history page
* Inventory filters extended by location

## **Phase 3 — Suppliers, Purchases & Sales**

**Goal:** PRD §11 + §12 + §13 — Purchase → Stock → Sale flow.

**Deliverables:**

* `Supplier` model: name, contact, products supplied (M2M), purchase history view; supplier CRUD + detail page
* `Purchase` + `PurchaseItem` models: supplier, items/qty/cost, date, receiving location; recording purchase atomically increments `StockLevel` + writes `StockHistory`
* `Sale` + `SaleItem` models: product, qty, selling price, date, location, recordedBy; recording sale validates stock availability, atomically decrements + writes history
* Sales history + Purchases history pages with filters (date, location, supplier, user)
* Restock List v1: query `quantity <= minStockLevel` per location showing product, current/min qty, supplier, location, status; CTA → prefilled Purchase

## **Phase 4 — Dashboard & Notifications**

**Goal:** PRD §10 + §19 — home screen + attention-driving alerts.

**Deliverables:**

* Dashboard queries: total SKUs, total units, low-stock count, out-of-stock count, recent sales/purchases/activity, restock needs, period sales/expenses/profit summary
* Dashboard UI with quick actions: Add Item, Add/Remove Stock, Record Sale/Purchase, Add Expense, View Restock, Transfer Stock
* `Notification` model + dropdown/toast: low-stock, out-of-stock, restock reminder, transfer received, significant stock change; per-user read/unread + preferences page
* Background check on stock write that upserts notifications

## **Phase 5 — Expenses & Profit Tracking**

**Goal:** PRD §14 + §15 — true business performance.

**Deliverables:**

* `Expense` model: amount, category (Rent/Transportation/Packaging/Staff/Electricity/Marketing/Other), description, date, location; CRUD + history + by-category view
* Profit logic: product-level (revenue from Sales, COGS from Purchase costPrice/FIFO-average, profit, qty sold); period-level (Revenue − COGS − Expenses)
* Profit cards on Dashboard + product detail; unit tests for profit math
* Cost price captured at purchase time to support COGS

## **Phase 6 — Reports, Analytics & Activity History**

**Goal:** PRD §16 + §20 — decision-friendly reporting.

**Deliverables:**

* Reports pages with period picker + this-vs-last comparison: inventory (current/low/out/by-category/by-location), sales (over time/best-sellers/by-location), purchases (history/supplier spending/by-location), expenses (over time/by-category/by-location), profit (revenue/costs/expenses/profit/product profitability)
* Charts (e.g., Recharts) for sales over time, expenses by category, stock trends
* `ActivityLog` global feed: product created/updated, stock added/removed, sale/purchase/expense recorded, transfer, supplier update, user activity; each with user + timestamp
* CSV export v1 for inventory/sales/purchases (prepares Future Enhancement: data export)

## **Phase 7 — Roles, Users, Settings & Release Hardening**

**Goal:** PRD §21 + polish for local use.

**Deliverables:**

* `User` management UI (Admin only): invite/disable, assign Admin/Manager/Staff, per-module permission matrix enforced in server actions + middleware
* Settings page: business name, currency, default location, low-stock defaults, notification defaults
* Validation (Zod), error handling, audit coverage check (every mutating action writes History/Activity)
* Seed script + backup script for `curio.db` + uploads folder
* Final QA: full user flows from PRD §23 (Add Product, Receive, Sell, Restock, Move, Review Performance) verified locally

---

# **29\. Technical Decisions**

## **29.1 Framework — Next.js (React + App Router + TypeScript) + Tailwind CSS + shadcn/ui**

**Choice:** Next.js 14+ Full-stack web app, TypeScript, Tailwind CSS, shadcn/ui components, Zod validation, Recharts for reports.

**Why:**

* One repo serves UI + API (Server Actions / Route Handlers) — ideal for PRD flows like Record Sale → decrement stock → write history atomically.
* App Router + middleware natively supports role-gated routes (Admin/Manager/Staff per PRD §21).
* Runs locally with a single `npm run dev` on Windows with no extra servers.
* Recharts + server components cover Dashboard (§10) and Reports (§16) without a separate frontend build pipeline.

Local command: `npm run dev` → `http://localhost:3000`.

## **29.2 Database — FINAL CHOICE: SQLite (via Prisma ORM) for Local Development**

**Final choice:** SQLite file `prisma/curio.db` accessed via Prisma ORM (`better-sqlite3` driver). Schema models: User, Product, Category, Location, StockLevel, StockHistory, Supplier, Purchase, Sale, Expense, StockTransfer, Notification, ActivityLog.

**Why SQLite fits Curio PRD + local-run requirement:**

* PRD §25 Initial Scope is single-business SMB inventory (thousands of SKUs, not millions). SQLite handles this easily with ACID transactions, which is exactly what PRD §12/§13 need: Record Sale → validate stock → decrement StockLevel → write StockHistory/Sale in one atomic transaction. Same for Purchases and Transfers (§18).
* PRD §7 + §20 require full audit history (who changed what, when, where). SQLite's transactional guarantees prevent half-written stock + history states during local dev without running a server.
* Requirement “app + database must run locally on my computer”: SQLite is zero-install, zero-service, single file. On Windows this means `npx prisma migrate dev` just works — no Postgres install, no Docker Desktop, no port conflicts, no background service. Backup is copying `curio.db` + `public/uploads/`.
* Aligns with PRD §24 principles Simple/Clear: lowest operational overhead for Phase 0-7 while keeping schema Postgres-compatible via Prisma for later scale.

### Advantages of SQLite (for Curio):

* Zero-ops local: no server, works offline, instant `npm run dev`.
* ACID + single-file backup ideal for single-operator dev/testing of all PRD §23 flows (Add → Receive → Sell → Restock → Transfer → Reports).
* Sufficient performance for dashboard (§10) and reports (§16) aggregations at SMB scale.
* Prisma migration path to PostgreSQL later (change provider + connection string, no app-logic rewrite if we avoid SQLite-only raw SQL).

### Disadvantages / limits of SQLite (PRD-specific):

* Single-writer lock: if two terminals record sales simultaneously (e.g., Main Store + Branch 1 in production), writes serialize and can hit `SQLITE_BUSY`. Acceptable for local single-user dev, risky for multi-user production.
* No network server, replication, or row-level security — limits PRD §17/§21 multi-location concurrent use in production.
* Weaker concurrency tuning and advanced types vs. server DBs.

### Alternative Considered — PostgreSQL 16 (local via Docker / installer)

* **Pros:** Best for production multi-user: concurrent sales/purchases from multiple locations, robust permissions, connection pooling, replication, scales to hosted deployment. Handles PRD §17 + §18 + §21 at scale.
* **Cons:** Requires Postgres install or Docker on Windows, heavier setup/memory, more complex backup/restore for a non-technical owner, overkill for Phase 0-5 local dev velocity. Adds a second failure point (DB service down → app down) during development.

### Trade-off summary for Curio:

* Local speed + simplicity + offline + easy backup → SQLite wins for now.
* Concurrent multi-terminal writes + multi-store production + hosted scale → PostgreSQL wins later.
* Since current constraint is explicitly local dev and PRD Initial Scope (§25) excludes high-scale features, velocity and reliability of local setup outweigh concurrency needs.

### Decision & Rationale:

**Use SQLite for all local development (Phase 0–7). Keep Prisma schema Postgres-compatible and isolate raw SQL so a future switch to PostgreSQL is a migration, not a rewrite, when concurrent multi-location production demands it.**

## **29.3 Authentication — Auth.js (NextAuth v5) Credentials + Prisma Adapter**

**Choice:** Auth.js with Credentials provider, Prisma Adapter (session stored in SQLite), bcryptjs password hashing, role (`ADMIN/MANAGER/STAFF`) embedded in JWT/session, route middleware enforcement.

**Why:**

* Works 100% offline/locally — no cloud dependency (unlike Clerk/Supabase Auth/Auth0 which need external keys and violate local-first dev).
* Directly implements PRD §21 roles; server-side checks prevent Staff from accessing profit/admin routes.
* Seeded local users allow immediate testing of permission matrix.

Future: add OAuth or PIN-login without changing session/role model.

## **29.4 File / Image Storage — Local Filesystem**

**Choice:** Local directory `public/uploads/products/` (gitignored, created on boot), served statically by Next.js. DB stores relative path only. Uploads validated (type/size), resized with `sharp` (e.g., max 1200px, thumbnail 300px).

**Why:**

* Satisfies PRD product-image requirement (§6) with zero cloud cost and offline capability.
* Backup = copy folder alongside `curio.db`.
* Migration path: swap storage helper for S3-compatible (MinIO/AWS S3) later without changing DB schema — store key/path abstraction from Phase 1.

Limits: not shared across machines (acceptable for local dev); enforce 5 MB max, allow jpg/png/webp only.

## **29.5 Local Development Setup**

* Node.js LTS 20+, npm/pnpm, Git
* No Docker required for default path (only needed if switching to PostgreSQL later)
* Env: `.env` with `DATABASE_URL="file:./curio.db"`, `AUTH_SECRET=<generated>`, `UPLOAD_DIR=./public/uploads`
* Commands:
  * `npm install`
  * `npx prisma migrate dev --name init`
  * `npm run db:seed`
  * `npm run dev`
* Verify: open `http://localhost:3000`, login as seeded admin, run PRD §23 flows (Add → Receive → Sell → Restock → Transfer → Reports).


