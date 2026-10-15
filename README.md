# Sakthivel Arumugam - Portfolio + Blog (React + Express + MongoDB + Firebase)

```
blog-portfolio/
├── backend/    Express API, MongoDB (Mongoose), Firebase Admin token checks
└── frontend/   React (Create React App) + Tailwind, Firebase Auth, admin panel
```

## 1. MongoDB Atlas
1. Create a free cluster, add a database user, and allow your IP under Network Access.
2. Copy the connection string (Connect -> Drivers).
3. The `blogPortfolio` database and `blogs` collection are created automatically on first insert.

## 2. Firebase
1. Create a project at https://console.firebase.google.com
2. Build -> Authentication -> Sign-in method -> enable **Email/Password**.
3. Project settings -> General -> add a **Web app**, copy the config values (frontend `.env`).
4. Project settings -> Service accounts -> **Generate new private key**. Save it as
   `backend/serviceAccountKey.json` (never commit it).

## 3. Backend
```bash
cd backend
cp .env.example .env      # fill in MONGO_URI and ADMIN_EMAILS
npm install
npm run seed              # optional: 3 sample posts
npm run dev               # http://localhost:5000
```
Open http://localhost:5000/api/blogs - you should see `[]` or the seeded posts.

## 4. Frontend
```bash
cd frontend
cp .env.example .env      # paste the Firebase web config
npm install
npm start                 # http://localhost:3000
```
Restart the dev server after editing any `.env`.

## 5. Make yourself admin
Put your email in `ADMIN_EMAILS` in `backend/.env` (comma-separated for several admins),
restart the backend, then sign up in the app with that same email.
An "Admin panel" link appears in the navbar.

## API
| Method | Route | Access |
|---|---|---|
| GET | /api/blogs | public |
| GET | /api/blogs/:id | public |
| POST | /api/blogs | admin |
| PUT | /api/blogs/:id | admin |
| DELETE | /api/blogs/:id | admin |
| GET | /api/auth/admin-check | logged in |

Admin routes require `Authorization: Bearer <Firebase ID token>`. The backend verifies the
token with Firebase Admin and checks the email against `ADMIN_EMAILS`, so the panel is
protected on the server, not just hidden in the UI.

## Test checklist
1. Sign up -> user appears in Firebase Console -> Authentication.
2. Log out, log in. Try a wrong password and a duplicate email to see the error messages.
3. Log in as the admin email -> open /admin -> add, edit, view, delete a post.
4. Confirm the document in Atlas (blogPortfolio -> blogs).
5. Log in as a non-admin and open /admin -> redirected home; a direct POST to the API returns 403.

## Troubleshooting
- **CORS error:** `CLIENT_URL` in backend `.env` must match the frontend origin exactly (no trailing slash).
- **Mongo connection fails:** check the Atlas IP allowlist and URL-encode special characters in the password.
- **Admin link missing:** the Firebase account email must match `ADMIN_EMAILS`; restart the backend after changes.
- **Firebase "operation-not-allowed":** enable Email/Password in the Firebase console.

## Personalizing the portfolio
All portfolio content (summary, skills, experience, projects, education) lives in
`frontend/src/data/resume.js`. Paste your LinkedIn / GitHub URLs and project live-demo
links there; empty links are hidden automatically. The downloadable resume is
`frontend/public/Sakthivel_Arumugam_Resume.pdf`.

Routes: `/` portfolio, `/blog` blog list, `/blog/:id` post, `/login`, `/signup`, `/admin`.
