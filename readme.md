# ⚡ Electricity Bill Calculator (Web App)

A responsive web application built with HTML, CSS, and JavaScript that calculates electricity bills based on user input. The app uses a slab-based billing system and includes a 20% surcharge on the final bill.

## 📋 Project Description

This project allows users to input the number of electricity units consumed and calculates the total bill based on the following conditions:

## 🧮 Billing Logic

| Units Consumed          | Rate per Unit  |
|-------------------------|----------------|
| First 50 units          | ₹0.50          |
| Next 100 units (51–150) | ₹0.75          |
| Next 100 units (151–250)| ₹1.20          |
| Above 250 units         | ₹1.50          |

> 💡 A **20% surcharge** is added to the total bill amount.

## 🧰 Features

- Input field for total units consumed
- Slab-based calculation of electricity charges
- Automatic application of 20% surcharge
- Real-time calculation with JavaScript
- Responsive UI with clean CSS design

## 🌐 Technologies Used

- **HTML** – Page structure and form
- **CSS** – Styling and layout
- **JavaScript** – Billing logic and DOM manipulation
