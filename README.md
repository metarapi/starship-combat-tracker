## Development Setup

To run the project in development mode, you need to start both the frontend (Vite) and backend (Django) servers. This requires two terminal windows:

**Before starting:** Create and activate a virtual environment, then install dependencies:

```bash
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
pip install -r requirements.txt
```

1. **Terminal 1: Start Vite (Frontend)**
    ```bash
    npm run dev
    ```
    This will start the Vite development server, usually at [http://localhost:5173](http://localhost:5173).

2. **Terminal 2: Start Django (Backend)**
    ```bash
    python manage.py runserver
    ```
    This will start the Django development server, usually at [http://localhost:8000](http://localhost:8000).

Make sure both servers are running for full functionality during development.