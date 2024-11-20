# StoreForYou

An e-commerce platform that vends a specialised selection of personalised products, implemented by Node.js and React. Compared to its competitors, this site will have fewer product options (avoid overwhelming the customer with choices and maintain the quality of products). On the other hand, its personalisation capabilities will be greater, more versatile, and user-friendly.

# Running the App

## Installations

Use the prebuilt installer for [Node.js](https://nodejs.org/en/download/prebuilt-installer) or visit their site to choose another installation method.
To check if the installation was completed correctly, open your command line tool and type `node -v`
Since we’re using React, we want to ensure NPM was installed correctly. Type into your command line tool: `npm -v`

## Setting up MongoDB

1) Go to [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) to setup an account or login to an existing one
2) Navigate to the Clusters tab and create a new shared cluster; ensure your IP address is whitelisted and that you have read/write access to the database (can be edited in the Network Access and Database Access tabs, respectively)
3) In your cluster dashboard, open "Browse Collections"; create and name a database for the site
4) Navigate back to the Clusters tab. Select "Connect", followed by "Connect your application", and copy and keep the connection string for the next part of the setup

## Running the Application

1) Ensure you have [Git](https://git-scm.com/) installed and working on your desktop
2) Open a Command Prompt terminal and cpy the repository URL. Clone it to your environment using `git clone _repoURL_`
3) Open the folder in your File Explorer and open the .env for editing (pathway should look something like Group5_StoreForYou\doc\sprint0\Setup\backend). Point the `MONGO_URI` variable to the connection string you copied and saved earlier -> `MONGO_URI`=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.sbuzm.mongodb.net/YOUR_DATABASE_NAME?retryWrites=true&w=majority
4) In your command terminal, navigate to the backend folder and run the following commands:
`npm install` _Installs necessary dependencies_
`npm start` _Connects to the database_
6) In a new terminal, navigate to the frontend folder and run the following commands:
`npm install`
`npm start`
8) A window should have automatically opened to the React App. If not, you can open the frontend at `http://localhost:3000`. You can interact with and test the features on this page, while the backend APIs interact with the MongoDB database

## Key Features

**Shop Owner**

* Automatic inventory tracking  
* Low stock alerts  
* Manual addition of products  
* A view of consolidated information about all orders

**Shopper**

* Ability to save card and account info  
* Guest check-out  
* Wishlist  
* Alerts about products, sales, status of an order, etc.  
* Reviews  
* Search bar and filtering capabilities

## Contributing

All team members are encouraged to contribute through the following process:
**Communication:** Primarily via Discord to ensure prompt discussions and quick feedback. Major updates/ issues can be communicated through email.
**Version Control:** Before pushing changes to the main branch, confirm that all changes align with project requirements and team approvals.
**Documentation:** Use the shared Google Docs for collaborative documentation; upon approval, they will be formatted and uploaded to Git. Task assignments and project progress can be tracked on our Trello board, where tasks should be updated regularly.

## License

[MIT](https://choosealicense.com/licenses/mit/)
