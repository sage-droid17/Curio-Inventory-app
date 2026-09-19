# Curio — Inventory Management App

Curio is an inventory and business management app that helps businesses know **what they have in stock, where it is, what is being sold, what needs to be restocked, and how the business is performing financially.**

It connects **Purchases → Inventory → Sales → Expenses → Profit**, plus **Suppliers → Locations → Users → Activity History → Reports** in one place.

> Core question Curio answers: **What do I have, where is it, what is changing, and what needs my attention?**

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

- **Business Owners:** monitor inventory, sales, purchases, expenses, profit, reports, multi-location stock, employees/permissions, activity.
- **Managers:** add/update products, receive/remove stock, record sales/purchases, manage restocking and transfers, monitor inventory, review operational reports.
- **Staff:** view permitted inventory, add/remove stock, record sales, check levels, perform assigned tasks (role-limited access).

## Main Features

- **Inventory:** items with name, quantity, category, price, image, min stock level, description; statuses: In Stock / Low Stock / Out of Stock; Add Stock / Remove Stock / manual corrections.
- **Dashboard:** totals, low/out-of-stock, recent sales/purchases/activity, restock needs, sales/expenses/profit; quick actions for common tasks.
- **Stock History & Activity History:** item, qty changed, type, date, reason, user, location.
- **Low-Stock & Restock List:** auto-list when qty hits min-level, with supplier and location context.
- **Search, Filter & Sort:** search by name; filter by category/status/location/supplier; sort by name/qty/price/recent/status.
- **Suppliers:** profiles with contact, products supplied, purchase history.
- **Sales:** select product + qty + location → auto-decrement stock + sales history.
- **Purchases:** supplier + products + cost + location → auto-increment stock + purchase history. Flow: Purchase → Stock → Sale.
- **Locations & Transfers:** per-location tracking + combined view; transfers with Pending → In Transit → Received status.
- **Expenses:** amount, category (Rent, Transportation, Packaging, Staff, Electricity, Marketing, Other), description, date, location.
- **Profit Tracking:** product-level (sales/cost/profit/qty sold) and period-level (Revenue - COGS - Expenses).
- **Reports:** inventory, sales, purchases, expenses, profit; period comparisons (this month vs last, etc.).
- **Roles & Permissions:** Admin / Manager / Staff with Admin-controlled access.
- **Notifications:** low/out-of-stock, transfer updates, important activity.

See `Curio PRD.md` for full requirements.

## How to Run the Project

Current status: **PRD only — no implementation yet.**

1. Clone / open this folder:
   ```
   C:\Users\user\Desktop\CURIO
   ```
2. Read the spec: `Curio PRD.md`
3. Implementation (TBD): once scaffolded, run steps will be added here (e.g. `npm install`, `npm run dev`).

## Product Principles

Simple, Clear, Action-oriented, Accountable, Connected, Decision-friendly.
