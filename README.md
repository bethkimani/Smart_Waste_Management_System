## Smart Waste Management System
Welcome to the Smart Waste Management System, a React-based web application designed to revolutionize waste management. This project reimagines the "Choose Your Skip Size" page from wewantwaste.co.uk with a completely different design while preserving functionality, optimized for mobile and desktop browsers. The system empowers users, admins, and drivers with AI-driven dashboards, leveraging tools like Gemini for verification and automation.


### Login to Dashboard After Clicking "Request a Pickup"
## Click the "Request a Pickup" button on the homepage to open a 

modal with User, Admin, or Driver login options.

Select your role (User, Admin, Driver) and enter your email/username and password.

### how to see the task you assigned ,you login as user and the  got to the raise request section



AI-powered verification (Gemini) validates credentials and ensures secure login.

Upon successful login, redirect to the respective dashboard: 

User (Report Waste, Track Process, Rewards), Admin (Manage 

Requests, Violations), or Driver (Collect Waste, Route Map).

Users can report waste with photo uploads, automatically 

notifying drivers and admins via AI-driven automation.





## Project Overview
This application integrates a website with web-based dashboards for three roles:
    • Users: Request pickups, report waste with photos, track processes, and earn rewards. 
    • Admins: Monitor users, teams, and payments, with automated violation billing. 
    • Drivers: Register with vehicle details, view routes, collect waste, and receive automated payments. 
The system uses AI (Gemini) for verification and automation, aligning with modern development practices. Future backend development will utilize Node.js, Express.js, and PostgreSQL.


## My Development Approach
As a Mid-Level Full-Stack Developer applying for the REM Waste role, I approached this project with a structured process:
    1. Research: Studied the current system at wewantwaste.co.uk and identified user needs for a smart waste management solution. 
    2. Wireframes & Sketches: Drew initial wireframes and designs on paper to plan the layout, later converting them into Figma designs (time constraints limited full Figma completion). 
    3. Frontend Development: Built the React frontend first, focusing on clean, responsive code with Tailwind CSS, integrating API data from https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft. 
    4. Backend Planning: Planned to implement the backend using Node.js and Express.js, with PostgreSQL for data management, to be developed in the next phase. 
This phased approach ensures a solid foundation, leveraging AI tools like Bolt.new and GitHub Copilot for efficient coding and quality enhancement.
### Features
### General
    • Responsive Design: Optimized for mobile and desktop browsers. 
    • Clean Code: Maintainable React components with UI/UX improvements. 
    • Data Integration: Populates skip options from the provided API endpoint. 
### User Features
    • Dashboard: Post-login view with waste reporting, request status, and rewards. 
    • Report Waste: Upload photos, specify location, and select waste type. 
    • Request Pickup: Modal with postcode, waste type, skip selection, collection date, and payment. 
    • Track Process: Real-time updates on driver pickup progress. 
    • Waste Chat: Communication channel for users, admins, and drivers. 
    • Rewards & Leaderboard: Points for reporting waste, with a leaderboard to attract users. 
### Admin Features
    • Dashboard: Overview of all users, teams, and payment progress. 
    • Automated Tasks: Verifies requests, notifies drivers, generates receipts, and handles violation billing. 
### Driver Features
    • Dashboard: Post-login view with route maps, trip history, and collect waste section. 
    • Driver Registration: Upload vehicle/truck details and match with user requests. 
    • Collect Waste: Upload waste photos, with AI verification and automated payment/receipt generation. 
    • Trip Metrics: Displays number of trips and users served. 
### Setup Instructions
To set up and run the Smart Waste Management System locally on your machine, follow these steps:
    1. Clone the Repository: 
        ◦ Open your terminal and run the following command to clone the repository: 
         
          Copy
          git clone https://github.com/your-username/smart-waste-management-system.git
        ◦ Replace your-username with your GitHub username and the repository URL with your actual repo link. 
    2. Navigate to the Project Directory: 
        ◦ Change into the project directory: 
          
          Copy
          cd smart-waste-management-system
    3. Install Dependencies: 
        ◦ Install the required Node.js packages using npm: 
          
          Copy
          npm install
        ◦ Ensure you have Node.js and npm installed. If not, download them from nodejs.org. 
    4. Start the Development Server: 
        ◦ Run the following command to start the Vite development server: 
          
          Copy
          npm run dev
        ◦ Open your browser and navigate to http://localhost:5173 (or the port specified in the terminal) to view the application. 
    5. 
Development Notes
    • Vite Configuration: Uses Vite with a vite.config.js file for React and asset serving. Ensure the public folder contains static assets like logo.png. 
    • API Data: Fetch skip sizes from https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft. Network access is required. 
    • Styling: Employs Tailwind CSS for responsive, maintainable styling. 
    • AI Tools: Utilized Bolt.new and GitHub Copilot to accelerate development and enhance code quality, aligning with AI-first development practices. 
