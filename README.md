### README: Frontend - "Fundit" (React)

**Overview:**
The "Fundit" frontend is a React application designed for fundraising activities. This documentation provides setup and operational guidelines.

**Environment Setup:**
- Place a `.env` file in the root of the frontend folder.
- Include `REACT_APP_PUBLIC_KEY` in `.env` for our stripe account publishable key.

**Running the Frontend:**
1. In the frontend directory, execute `npm install`.
2. Start with `npm start`.

**Stripe Integration:**
- Stripe handles transactions.
- The return URL is set to the frontend's hosted URL for post-payment redirection.

**Structure:**
- Standard React app structure.
- UI elements for fundraising are key components.
- All data in the frontend are served by a `data.json` file located in the `Api` folder.

---

### Updated Backend Documentation: "Fundit"

**Overview:**
This section of the documentation details the backend setup of "Fundit," which is built using an Express server and includes CORS (Cross-Origin Resource Sharing) functionality.

**Environment Setup:**
- The backend requires a `.env` file in its root directory.
- The `.env` file should define the `STRIPE_SECRET_KEY` for our stripe account secret key.

**CORS Configuration:**
- The server is configured with CORS to allow requests from the hosted frontend URL.
- The frontend URL is a value to the object key `origin` `{origin: frontend URL}` and the object is passed as an argument to the CORS function for security and to enable cross-origin requests.

**Running the Backend:**
1. Navigate to the backend directory.
2. Run `npm install` to install dependencies.
3. Start the server with `npm start`.

**Server Functionality:**
- Manages API requests and processes donations.
- Ensures secure communication with the frontend.

---

**Test Card for Stripe Payment**
- Card Number -  4242 4242 4242 4242
- Expiry Date - 12/25 (or any other date)
- CVV - 573 (or any random 3 digit number)

