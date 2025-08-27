## Development Setup

To run the project in development mode, you need to start both the frontend (Vite) and backend (Django) servers. This requires two terminal windows.

**Before starting:**  
1. **Python (Django backend):**  
   - Open a terminal in the project root:  
     `C:\Coding\starship-combat-tracker>`
   - Create and activate a virtual environment, then install Python dependencies:
     ```bash
     python -m venv venv
     venv\Scripts\activate  # On Windows
     pip install -r requirements.txt
     ```

2. **Node.js (Vite frontend):**  
   - Open a terminal in the frontend directory:  
     `C:\Coding\starship-combat-tracker\starship_combat_tracker>`
   - Install Node.js dependencies:
     ```bash
     npm install
     ```

**Running the development servers:**

1. **Terminal 1: Start Vite (Frontend)**
    ```bash
    npm run dev
    ```
    (Run this in `C:\Coding\starship-combat-tracker\starship_combat_tracker`)

    This will start the Vite development server, usually at [http://localhost:5173](http://localhost:5173).

2. **Terminal 2: Start Django (Backend)**
    ```bash
    python manage.py runserver
    ```
    (Run this in `C:\Coding\starship-combat-tracker\starship_combat_tracker`)

    This will start the Django development server, usually at [http://localhost:8000](http://localhost:8000).

Make sure both servers are running for test