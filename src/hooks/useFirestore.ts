import { useState, useEffect } from 'react';
import { 
  collection, 
  addDoc, 
  query, 
  orderBy, 
  limit, 
  onSnapshot, 
  where,
  Timestamp,
  getDocs 
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

export interface SessionData {
  id?: string;
  activatorName: string;
  association: string;
  school: string;
  date: string;
  time: string;
  classPeriod: string;
  yearGroups: string[];
  maleStudents: number;
  femaleStudents: number;
  sessionLength: string;
  teacherEngagement: string;
  sessionType: string;
  geolocation: { lat: number; lng: number } | null;
  userId: string;
  createdAt: Timestamp;
}

export const useFirestore = () => {
  const [sessions, setSessions] = useState<SessionData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Add a new session
  const addSession = async (sessionData: Omit<SessionData, 'id' | 'createdAt'>) => {
    try {
      const docRef = await addDoc(collection(db, 'sessions'), {
        ...sessionData,
        createdAt: Timestamp.now()
      });
      return docRef.id;
    } catch (error) {
      throw error;
    }
  };

  // Get sessions with real-time updates
  const getSessions = (userId?: string) => {
    try {
      let q = query(
        collection(db, 'sessions'),
        orderBy('createdAt', 'desc'),
        limit(50)
      );

      if (userId) {
        q = query(
          collection(db, 'sessions'),
          where('userId', '==', userId),
          orderBy('createdAt', 'desc'),
          limit(50)
        );
      }

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const sessionsData: SessionData[] = [];
        snapshot.forEach((doc) => {
          sessionsData.push({
            id: doc.id,
            ...doc.data()
          } as SessionData);
        });
        setSessions(sessionsData);
        setLoading(false);
      }, (error) => {
        setError(error.message);
        setLoading(false);
      });

      return unsubscribe;
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
      return () => {};
    }
  };

  // Get analytics data
  const getAnalytics = async () => {
    try {
      const q = query(collection(db, 'sessions'));
      const snapshot = await getDocs(q);
      
      const allSessions: SessionData[] = [];
      snapshot.forEach((doc) => {
        allSessions.push({
          id: doc.id,
          ...doc.data()
        } as SessionData);
      });

      // Calculate analytics
      const totalSessions = allSessions.length;
      const totalParticipants = allSessions.reduce((sum, session) => 
        sum + session.maleStudents + session.femaleStudents, 0
      );
      
      const schoolsReached = new Set(allSessions.map(s => s.school)).size;
      const regionsActive = new Set(allSessions.map(s => s.association)).size;
      
      // Regional breakdown
      const regionCounts = allSessions.reduce((acc: any, session) => {
        acc[session.association] = (acc[session.association] || 0) + 1;
        return acc;
      }, {});

      return {
        totalSessions,
        totalParticipants,
        schoolsReached,
        regionsActive,
        regionCounts,
        recentSessions: allSessions.slice(0, 10)
      };
    } catch (error) {
      throw error;
    }
  };

  // Export to CSV
  const exportToCSV = () => {
    const csvContent = [
      ['Date', 'School', 'Association', 'Activator', 'Session Type', 'Male Students', 'Female Students', 'Total Participants', 'Year Groups', 'Session Length', 'Teacher Engagement'].join(','),
      ...sessions.map(session => [
        session.date,
        session.school,
        session.association,
        session.activatorName,
        session.sessionType,
        session.maleStudents,
        session.femaleStudents,
        session.maleStudents + session.femaleStudents,
        session.yearGroups.join('; '),
        session.sessionLength,
        session.teacherEngagement
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cricket-sessions-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return {
    sessions,
    loading,
    error,
    addSession,
    getSessions,
    getAnalytics,
    exportToCSV
  };
};