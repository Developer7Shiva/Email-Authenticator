

# Email Authentication Using NodeJs

This application provides a user registration and email verification system implemented using the and Node.js, ExpressJs. It allows users verify their accounts, after registering the user will receive a verification email with a unique token, and verify their email addresses to activate their accounts.

## Installation

Follow these steps to set up the application:

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/Developer7Shiva/Email-Authenticator.git
   ```

2. Navigate to the project directory:
   ```
   cd Email-Authenticator
   ```

3. Set up the workspace:
   - Navigate to the `Email-Authenticator` directory:
     ```
     cd Email-Authenticator
     ```
   - Install the dependencies:
     ```
     npm install
     ```


## Configuration

Before running the application, you need to configure some environment variables:

 **`Configuration`**:
   - Create a `.env` file in the `backend` directory.
   - Set the following variables in the `.env` file:
     ```
     MONGO_URI=<your-mongodb-uri>
     JWT_SECRET=<your-jwt-secret>
     EMAIL_USER=<your-email-username>
     EMAIL_PASS=<your-email-password>
     ```

## Usage

To run the application, follow these steps:

1. Start the server:
   - Navigate to the `Email-Authenticator` directory:
     ```
     cd Email-Authenticator
     ```
   - Run the following command:
     ```
     npm start
     ```
3. To Access the server :
   Open your API Testing tool and go to :
   `http://localhost:3000/api/users` OR `http://localhost:8085/api/users`.

   Here I'm used Postman API Testing Tool:
   - Paste the Url in Postman URL Placeholder
   - Change the HTTP Method Post
   - Add the requestion body in JSON Format, like:
    {
        "name" : "Enter Name",
        "email": "Enter Your Email",
        "password":"Create Password"
    }
   - Trigger the Request and you will get the Verification in your Email Address
   - Check you Inbox
   - Once Received Just Click the URL You are account get activated.



## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

---

### Contact Information 📞

If you have any further inquiries or need additional information, please feel free to contact me via email:

- Email: developer7siva@gmail.com
