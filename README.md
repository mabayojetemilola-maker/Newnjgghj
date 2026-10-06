# Little Planet Academy – School Portal

Static multi-page website + Firebase-powered Student & Admin portal.

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Landing page (school offers) |
| `academics.html` | Sections & curriculum |
| `about.html` | About the school |
| `gallery.html` | Photos |
| `contact.html` | Contact / WhatsApp |
| `login.html` | Student Login & Create Account (Full Name + Password + Class) |
| `student.html` | Student dashboard – view results, pay fees (Paystack) |
| `admin.html` | Admin dashboard – students, scheme of work, results, fees, payments |

## Environment / Config Variables

Already embedded in `firebase-config.js`. For reference (Next.js style):

```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyCesCuRwXiRl23s-sWQZhMONbywp_y2-Hg
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=little-land-2f320.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=little-land-2f320
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=little-land-2f320.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=570474037175
NEXT_PUBLIC_FIREBASE_APP_ID=1:570474037175:web:6621298101ae434f14b232
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_live_f84ba4467efff671733cdacd92bf1143dd0dae81
```

## Firebase Setup (Required once)

1. Firebase Console → project **little-land-2f320**
2. Authentication → Sign-in method → enable **Email/Password**
3. Firestore Database → Create database
4. Create first admin (see below)

## Create the first Admin account

1. Open login.html → Create Account (e.g. full name "Admin User", any class, password)
2. Firebase Console → Firestore → users collection → open that user document
3. Change field `role` from `"student"` to `"admin"`
4. Log out and log in again → goes to admin.html

## How features work

- **Login / Register**: Full Name + Password (+ Class on register). Email is auto-generated as name@littleland.school for Firebase Auth.
- **Admin → Students**: See all full names. Click Upload Results or Remove.
- **Results**: Choose term → 7 subject rows (Subject, Grade, Score). Auto total. On save, positions recalculated for the whole class+term.
- **Scheme of Work**: Admin adds/edits scheme per **Class + Term + Subject** (free-text outline). Students see the scheme for their class by term.
- **Fees**: Admin adds category (School Fees, Hostel…), amount, select classes. Students pay with Paystack.
- **Payments**: Admin sees successful Paystack payments.

## Deploy

Upload the entire folder (all HTML + CSS + JS + images + firebase-config.js) to Vercel / Netlify / GitHub Pages.

WhatsApp: 0803 662 0721
