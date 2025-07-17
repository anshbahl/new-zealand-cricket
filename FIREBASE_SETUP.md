# Firebase Setup Guide

## 1. Configure Firebase Credentials

Replace the placeholder values in `src/lib/firebase.ts` with your actual Firebase project configuration:

```typescript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-actual-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-actual-sender-id",
  appId: "your-actual-app-id"
};
```

## 2. Find Your Firebase Config

1. Go to the Firebase Console (https://console.firebase.google.com/)
2. Select your project
3. Click the gear icon (Project Settings)
4. Scroll down to "Your apps" section
5. Click on your web app or create a new one
6. Copy the configuration object

## 3. Firestore Database Setup

1. In Firebase Console, go to Firestore Database
2. Create a new database in production mode
3. Set up the following security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Sessions collection - users can only read/write their own sessions
    match /sessions/{sessionId} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
      allow create: if request.auth != null && request.auth.uid == request.resource.data.userId;
    }
    
    // Allow aggregated read access for analytics (optional - adjust based on your needs)
    match /sessions/{sessionId} {
      allow read: if request.auth != null;
    }
  }
}
```

## 4. Authentication Setup

1. In Firebase Console, go to Authentication
2. Click "Get started" if not already set up
3. Go to "Sign-in method" tab
4. Enable "Email/Password" provider
5. Save the changes

## 5. Test the Integration

1. Start your development server
2. You should see a login form
3. Create an account or log in
4. Test submitting a session via "Record New Session"
5. Check that data appears in your Firestore database
6. Test the CSV export functionality

## 6. Features Implemented

✅ **Firebase Authentication** - Email/password login system
✅ **Firestore Database** - Sessions stored in "sessions" collection
✅ **Real-time Updates** - Dashboard updates automatically when new sessions are added
✅ **Form Integration** - Mobile form submits directly to Firestore
✅ **Analytics Dashboard** - Pulls real-time data from Firestore
✅ **CSV Export** - Download session data as CSV file
✅ **User Management** - Each user can only see their own sessions (adjust rules as needed)

## 7. Data Structure

Each session document in Firestore contains:
- `activatorName`: String
- `association`: String (Auckland, Wellington, etc.)
- `school`: String
- `date`: String
- `time`: String
- `classPeriod`: String
- `yearGroups`: Array of strings
- `maleStudents`: Number
- `femaleStudents`: Number
- `sessionLength`: String
- `teacherEngagement`: String
- `sessionType`: String
- `geolocation`: Object with lat/lng or null
- `userId`: String (Firebase user ID)
- `createdAt`: Timestamp

## 8. Security Notes

- Users can only access their own session data
- Authentication is required for all operations
- Adjust Firestore rules based on your specific requirements
- Consider implementing role-based access if needed

Your dashboard is now fully connected to Firebase! 🎉