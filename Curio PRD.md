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

