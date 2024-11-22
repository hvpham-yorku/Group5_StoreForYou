# StoreForYou

StoreForYou is an e-commerce platform designed to offer a specialized selection of personalized products. Unlike traditional competitors, this platform prioritizes quality over quantity, minimizing product overwhelm while maximizing customization options. Personalization features are intuitive, versatile, and user-friendly, creating a unique shopping experience for customers.

---

## Running the App

### **Installations**
1. **Node.js Installation**
   - Download and install Node.js from the [official site](https://nodejs.org/).
   - Verify the installation:
     ```bash
     node -v
     ```

2. **NPM Installation**
   - Since we’re using React, ensure NPM is installed (it comes with Node.js). Verify its installation:
     ```bash
     npm -v
     ```

---

### **Setting up MongoDB**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create an account or log in.
2. Navigate to the **Clusters** tab and create a new shared cluster:
   - Whitelist your IP address in **Network Access**.
   - Ensure your user account has **read/write access** in **Database Access**.
3. In your cluster dashboard, open **Browse Collections** and create a new database for the site.
4. Navigate back to the **Clusters** tab. Select **Connect**, followed by **Connect your application**, and copy the connection string for later use.

---

### **Running the Application**
1. **Clone the Repository**
   - Ensure Git is installed and clone the repository to your local environment:
     ```bash
     git clone <repoURL>
     ```

2. **[Optional]Edit the Environment File**
   - Open the project folder, locate the `.env` file, and set the `MONGO_URI` variable using the connection string:
     ```
     MONGO_URI=mongodb+srv://YOUR_USERNAME:PASSWORD@cluster0.sbuzm.mongodb.net/YOUR_DATABASE_NAME?retryWrites=true&w=majority
     ```

3. **Start the Backend**
   - Navigate to the `backend` folder and run:
     ```bash
     npm install
     npm start
     ```

4. **Start the Frontend**
   - Open a new terminal, navigate to the `frontend` folder, and run:
     ```bash
     npm install
     npm start
     ```

5. **Access the App**
   - A window should automatically open to the React App. If not, open it manually at [http://localhost:3000](http://localhost:3000). You can interact with the app and test features while the backend APIs interact with the MongoDB database.
   - Test user account: test@example.com ; password: test123

---

## Key Features

### **For Shop Owners**
- Automatic inventory tracking.
- Low-stock alerts.
- Manual addition of products.
- Consolidated view of all orders.

### **For Shoppers**
- Save card and account information.
- Guest checkout.
- Wishlist functionality.
- Alerts for products, sales, and order status.
- Product reviews.
- Search bar with advanced filtering.

---

## Contributing

### **Guidelines**
1. **Communication**
   - Primary channel: Discord for team discussions and feedback.
   - Use email for major updates or issues.

2. **Version Control**
   - Confirm all changes align with project requirements and team approvals before pushing to the main branch.

3. **Documentation**
   - Collaborative documentation is managed via shared Google Docs. Once approved, these are formatted and uploaded to the repository.

4. **Task Management**
   - Use the Trello board to assign tasks and track project progress.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
