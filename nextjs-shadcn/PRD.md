# **Product Requirements Document (PRD)**

## **Inventory Management System for EdTech Platform**

### **1\. Introduction & Executive Summary**

This document outlines the requirements for a centralized Inventory Management System (IMS) designed specifically for an Edtech platform that sells educational books across multiple channels. The current manual, Excel-based system is inefficient, prone to errors, and incapable of scaling with the business's growth. This leads to operational bottlenecks, potential revenue loss, and a suboptimal customer experience. The proposed IMS will automate and streamline all aspects of inventory, order fulfillment, and reporting, providing a robust, scalable solution that integrates seamlessly with existing operations. The goal is to enhance operational efficiency, improve data accuracy, provide valuable business insights, and ultimately support the company's growth.

### **2\. The Problem Statement**

The client is currently managing their entire book inventory and sales process using manual Excel sheets. This approach presents several critical challenges that hinder their operational efficiency and growth potential:

* **Lack of Centralization:** Data is fragmented across multiple spreadsheets, making it impossible to get a real-time, unified view of inventory levels across different warehouses and sales channels (Flipkart, Amazon, their own app, bulk orders).  
* **Manual Data Entry:** Manually updating sales, stock receipts, and refunds is time-consuming, labor-intensive, and highly susceptible to human error, leading to inaccurate stock counts and financial discrepancies.  
* **Inefficient Order Fulfillment:** There is no systematic process to track an order from placement to packaging and dispatch. This makes it difficult to verify the contents of a shipment, leading to disputes with customers over missing items.  
* **Poor Stock Visibility & Forecasting:** The current system offers no predictive capabilities. They struggle with knowing when to reorder books, leading to stockouts (lost sales) or overstocking (tied-up capital). Tracking partial deliveries from publishers further complicates this.  
* **Disconnected Customer Support:** The student support team lacks direct access to order and delivery information, making it difficult to resolve student queries about book deliveries and contents efficiently.  
* **Limited Reporting:** Generating daily sales reports, tracking performance per book, or analyzing closing stock is a cumbersome manual process, preventing data-driven decision-making.  
* **Scalability Issues:** The manual process cannot scale to handle increasing order volumes, expansion to new cities, or the addition of more products and sales channels.

### **3\. Proposed Solutions & Features**

Here is a breakdown of the core features designed to solve the identified problems.

#### **Feature 3.1: Centralized Inventory & Multi-Channel Integration**

* **Description:** A unified dashboard that provides a real-time, centralized view of all book inventory across all warehouses. The system will integrate directly with APIs from Amazon, Flipkart, and their proprietary app to automatically sync orders and update stock levels. Bulk orders will be managed through a dedicated module.  
* **Reason:** This eliminates the need for manual data entry from different sales channels. It creates a single source of truth for all inventory data, preventing stock discrepancies and enabling accurate tracking.  
* **Impact:**  
  * Reduces manual effort by 90%.  
  * Eliminates stockouts due to inaccurate data.  
  * Provides a clear, real-time overview of the entire inventory health at a glance.

#### **Feature 3.2: Advanced Warehouse & Stock Management**

* **Description:**  
  * **Multi-Warehouse Management:** Track stock levels, transfers, and locations within each warehouse (e.g., Aisle A, Rack 4).  
  * **Purchase Order (PO) Management:** Create and manage POs for publishers. The system will support tracking partial shipments against a single PO. When a partial delivery of 2,000 books arrives against a 10,000-book order, the system will update the stock received and show the remaining balance.  
  * **Stock Auditing & Cycle Counts:** Tools to facilitate regular stock checks to ensure data accuracy.  
* **Reason:** Manages the complexity of multiple storage locations and the reality of partial deliveries from publishers, providing a true picture of stock on hand versus stock on order.  
* **Impact:**  
  * Improves warehouse organization and efficiency.  
  * Provides clarity on outstanding deliveries from suppliers.  
  * Increases inventory accuracy to over 99%.

#### **Feature 3.3: Batch-Specific Book Allocation & Tracking**

* **Description:** A module to create, define, and manage "Student Batches" (e.g., "NEET 2025 Weekend Batch A"). Administrators can create "Book Sets" (a predefined collection of specific books) and assign these sets to one or more student batches. This creates a direct link between a group of students and the exact materials they are supposed to receive, streamlining bulk allocation.  
* **Reason:** The client's business model is centered around student batches. This feature aligns the inventory system with their core operational structure, simplifying the complex process of distributing specific sets of materials to large, distinct groups of students.  
* **Impact:**  
  * Simplifies the process of allocating books to hundreds of students at once.  
  * Ensures every student in a batch receives the correct, consistent set of materials.  
  * Provides clear reporting on which batches have received their book sets.  
  * Reduces manual coordination and potential errors between academic and operations teams.

#### **Feature 3.4: Integrated Student Doubt Resolution Portal**

* **Description:** A module within the IMS, accessible to the customer support team. When a student raises a doubt, the support agent can enter the student's Order ID to instantly view:  
  * Complete order details (books included).  
  * Shipment and delivery status.  
  * The digital record of the packaging process, including who packed it and the verification scans/photos.  
* **Reason:** This empowers the support team with all necessary information in one place, enabling them to answer questions and resolve issues on the first contact without needing to consult different departments or spreadsheets.  
* **Impact:**  
  * Improves first-call resolution rate for customer support.  
  * Enhances the student experience by providing fast and accurate information.  
  * Reduces the operational burden on the warehouse team from support queries.

#### **Feature 3.5: Reporting, Analytics & Forecasting**

* **Description:**  
  * **Real-time Dashboards:** Visual dashboards showing key metrics like daily sales (per book, per channel), top-selling books, and inventory value.  
  * **Automated Reports:** Automatically generate and email daily sales reports, closing stock reports, and low-stock alerts.  
  * **Sales Velocity & Forecasting:** The system will analyze historical sales data to calculate the sales velocity (units sold per day) for each book. Based on this and supplier lead times, it will predict future demand and suggest optimal reorder points.  
* **Reason:** Replaces manual report creation with automated, insightful analytics. The forecasting feature moves the business from a reactive to a proactive inventory strategy.  
* **Impact:**  
  * Enables data-driven decision-making for marketing, sales, and procurement.  
  * Prevents capital from being tied up in slow-moving stock.  
  * Ensures timely reordering to maximize sales opportunities.

#### **Feature 3.6: Simplified Returns & Refund Management (RMA)**

* **Description:** A dedicated Return Merchandise Authorization (RMA) module. When a book is returned, it is scanned back into the system. The system allows staff to mark its condition (e.g., "Good," "Damaged") and automatically updates the inventory count for sellable stock. This module integrates with the finance system to streamline the refund process.  
* **Reason:** Manual refund and return processing is error-prone. This feature creates a structured workflow, ensuring returned books are properly accounted for and refunds are processed efficiently.  
* **Impact:**  
  * Improves the accuracy of inventory by correctly processing returned items.  
  * Speeds up the refund process, improving customer satisfaction.  
  * Provides data on return rates per book.

### **4\. Anticipating Future Problems & Solutions**

A robust system not only solves current problems but also anticipates future needs.

* **Problem: Batch Tracking & Content Variation:** Different print runs or batches of the same book might have minor variations or different errata. If students from a specific online batch report a common issue, how do you know which print run they received?  
  * **Solution: Batch/Lot Number Tracking.** The system will allow for assigning a unique batch number to each set of books received from the publisher. This batch number is then associated with the orders, allowing for precise tracking of which student received which version of a book.  
* **Problem: User Access & Security:** As the team grows, not everyone should have permission to see financial data or create purchase orders.  
  * **Solution: Role-Based Access Control (RBAC).** The system will have predefined user roles (e.g., Warehouse Staff, Operations Head, Support Agent, Admin). Each role will have specific permissions, ensuring users can only access the information and functions relevant to their job.  
* **Problem: Kitting & Bundling:** The client may want to sell books as part of a "NEET Prep Kit" or a "JEE Advanced Bundle." How is inventory for these virtual products managed?  
  * **Solution: Product Bundling/Kitting.** The system will allow the creation of "virtual bundles." When a bundle is sold, the system will automatically deduct the inventory of each individual book included in that bundle.

### **5\. Success Metrics**

The success of the Inventory Management System will be measured by the following Key Performance Indicators (KPIs):

* **Inventory Accuracy:** Target \> 99% accuracy rate (physical count vs. system count).  
* **Reduction in Packing Errors:** Decrease in customer-reported missing items by 95%.  
* **Order Fulfillment Time:** Reduction in the average time from order placement to dispatch by 30%.  
* **Stockout Rate:** Reduction in instances of stockouts for high-demand books by 80%.  
* **Manual Labor Reduction:** Decrease in time spent on manual data entry and reporting by 90%.