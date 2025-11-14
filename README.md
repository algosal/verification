# ✅ **README.md**

```md
# Letter Verification System

A secure verification portal for official letters issued by **Salman Saeed**.  
Each letter includes a unique verification number (UUID or manual code).  
This system allows recipients or agencies to confirm authenticity instantly.

---

## 🚀 Features

### 🔹 Frontend (React)

- Clean, professional “royal” UI
- Verification form with live API lookup
- Animated, gold-accent visual theme
- Displays verification status (valid, revoked, pending, error)
- Shows recipient, subject, date, and notes
- Works on mobile and desktop

### 🔹 Backend (PHP + MySQL)

- Lightweight REST API endpoint
- Validates verification codes
- Returns structured JSON
- Supports UUID-based verification numbers
- MySQL table includes:
  - verification number
  - recipient name/title
  - subject
  - date sent
  - file URL
  - notes
  - status: valid / revoked / pending

---

## 📦 Project Structure
```

verification/
├── public/
├── src/
│ ├── components/
│ │ ├── VerificationForm/
│ │ │ ├── VerificationForm.jsx
│ │ │ ├── VerificationForm.css
│ │ │ ├── VerificationFormLogic.js
│ │ ├── VerificationResult/
│ │ │ ├── VerificationResult.jsx
│ │ │ ├── VerificationResult.css
│ ├── App.js
│ ├── App.css
├── package.json

````

---

## 🔧 Installation & Setup

### 1️⃣ Clone Repo

```sh
git clone https://github.com/algosal/verification.git
cd verification
````

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Run Development Server

```sh
npm start
```

Your app will be running at:

```
http://localhost:3000
```

---

## 🗄️ API Endpoint

The verification API is hosted at:

```
https://salmansaeed.us/verification/api/verify.php?code=YOUR_CODE_HERE
```

### Example Response

```json
{
  "status": "valid",
  "verification_number": "6267250010",
  "recipient_name": "Commander Keith Koster",
  "recipient_title": "Commander, American Legion Department of New York",
  "subject": "Letter of Appreciation",
  "date_sent": "2025-11-11",
  "file_url": null,
  "notes": null
}
```

---

## 🛢️ Database Schema

```sql
CREATE TABLE letters (
  id INT AUTO_INCREMENT PRIMARY KEY,
  verification_number VARCHAR(50) UNIQUE NOT NULL,
  recipient_name VARCHAR(100),
  recipient_title VARCHAR(100),
  date_sent DATE,
  subject VARCHAR(200),
  status VARCHAR(20) DEFAULT 'valid',
  file_url VARCHAR(300),
  notes TEXT
);
```

---

## 🌐 Deployment

Your `package.json` already includes:

```json
"homepage": "https://salmansaeed.us"
```

To build for production:

```sh
npm run build
```

Upload the contents of the `build/` folder to your hosting environment.

---

## 🛡️ Purpose

This verification system is designed to ensure:

- Authenticity of outgoing correspondence
- Public trust
- Transparency
- Administrative accuracy

Each letter issued by **Salman Saeed** carries a verification watermark and number that can be confirmed here.

---

## 👑 Author

**Salman Saeed**
Visionary, Builder, Believer in Neville Goddard’s principles.
Official Verification Portal — _Built to Last._
