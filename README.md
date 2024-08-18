AffordMed

AffordMed is a healthcare platform designed to make affordable medical services accessible to everyone. The platform connects users with affordable healthcare providers, offers detailed medical information, and helps manage medical records efficiently.
Table of Contents

    Project Overview
    Features
    Technology Stack
    Installation
    Usage
    Contributing
    License
    Contact

Project Overview

AffordMed aims to bridge the gap between healthcare providers and patients by providing an easy-to-use platform where users can find affordable medical services, manage their medical records, and stay informed about their health.
Features

    User Authentication: Secure login and registration.
    Search Healthcare Providers: Users can search for doctors, clinics, and hospitals based on location and price.
    Medical Record Management: Users can store and manage their medical records securely.

Technology Stack

    Frontend: React.js
    Backend: Django REST Framework
    Database: SQLite (for development)
    Version Control: Git and GitHub

Installation
Prerequisites

Before you begin, ensure you have met the following requirements:

    Node.js and npm installed on your machine.
    Python 3.x and pip installed.

Steps to Install

    Clone the Repository

    bash

git clone https://github.com/AvulaRudra/22695A0528.git
cd AffordMed

Backend Setup

    Navigate to the backend directory:

    bash

cd backend

Install the required Python packages:

bash

pip install -r requirements.txt

Apply migrations to set up the database:

bash

python manage.py migrate

visit: http://127.0.0.1:8000/api/categories/mobile/products/1/
![Screenshot from 2024-08-18 13-46-28](https://github.com/user-attachments/assets/4b3320c6-a991-4955-abec-dab5352b9ae4)


Start the Django server:

bash

    python manage.py runserver

Frontend Setup

    Navigate to the frontend directory:

    bash

cd ../frontend

Install the required npm packages:

bash

npm install

Start the React development server:

bash

        npm start

    Access the Application
        Visit http://localhost:3000 in your browser to access the frontend.
        The backend API is available at http://127.0.0.1:8000.
![image](https://github.com/user-attachments/assets/2964b189-cee0-43b3-94e0-ad4274e2e59e)



If you have any questions, suggestions, or feedback, feel free to contact the project maintainer:

    Name: Rudra Sekhar Reddy Avula
    GitHub: AvulaRudra

