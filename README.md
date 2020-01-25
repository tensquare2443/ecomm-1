# Content Management System/Ecomm Application
## This app uses: Vue, Vue Router, AWS Lambda, Amazon API Gateway, AWS Amplify, DynamoDB, AWS S3  

**View the app here:** https://master.d14rlnokhxjfgx.amplifyapp.com/  

This application is an e-commerce website which also includes a content management system. The app contains a "front-end", where users would purchase products, and an admin area, where the site owner manages these products.  

To get to the admin area, go here: https://master.d14rlnokhxjfgx.amplifyapp.com/#/admin/sign-in  

You can login using "admin1" as the username and "abc123" as the password. Feel free to upload a product or make a change to an existing product, but please remember to revert any changes made and delete any product added afterwards.  

# Front-End:  
The front-end currently essentially consists of three main parts: the "products" route, the "product" route, and a "cart" page.  

## Products Route:  
When a products page is requested, the user is fetched multiple products based on the url path. This url path is encoded into the DynamoDB table partition key in a way that allows both a dynamic and organized front-end site structure.  
For example, the admin who adds products to his or her site from the admin area can choose any combination of "folders" the product should be located in. So an electronics site owner who adds a 4K, 54 inch TV to the site can place that TV in any folder, which could be "/products/televisions/4K/", "/products/televisions/", "/products/tvs/50-60inch", etc. When the route chosen is requested, this new TV is fetched, along with any other TVs chosen to be located at that route. So, this route is nearly infinitely customizable, and is fit for immediate use, even for companies in need of an unusual setup. In addition, these url paths, at which the products are located, can be edited through the site's admin area at any time.  

## Product Route:  
A single product and its relevant information is fetched from the DynamoDB table for the user on navigation to a product page. This includes product images, in-stock data, categories, tags, options such as colors and sizes, etc. The user can select the options needed, and add this product to the shopping cart.  

## Cart Route:  
The cart route gives a basic summary of what the user will be buying and leads to the "checkout" route which, when built, will likely be built using Stripe Elements.  

# Admin Area:  
The admin area consists of three parts: the "view products" area, the "add product" form, and the "edit product" form.  

## Add Product Form  
Here, the admin adds a new product to the DynamoDB table by entering and submitting any information relevant to this new product. This includes price data, stock data, product options such as color, images, product location, and more.  

## View Products Route  
Here, the admin can view all products uploaded, and can navigate to the "edit product" form.  

## Edit Products Form  
The admin can use this form to either delete a product, or make a number of edits.  

# Other Details  

## User Authentication  
All admin routes are protected through the use of temporary tokens (jsonwebtokens).  

## Relevant Repositories  
The code for the six lambda functions (get one product, get many products, add one product, delete one product, sign in user, and authenticate user) that interact with the two DynamoDB tables (a products table and a users table) is located here: https://github.com/tensquare2443/ecomm-app_lambda-functions
