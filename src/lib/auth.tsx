import React, { createContext, useContext, useEffect, useState } from 'react';

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  created_at: string;
}

export interface AuthSession {
  token: string;
  user: UserProfile;
  expires_at: string;
}

interface AuthContextType {
  user: UserProfile | null;
  session: AuthSession | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: false,
});

const SESSION_KEY = 'zuntra_secure_session';

function loadStoredSession(): AuthSession | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const value = JSON.parse(raw) as AuthSession;
    if (!value?.token || !Number.isFinite(Date.parse(value.expires_at)) || Date.parse(value.expires_at) <= Date.now()) {
      return null;
    }
    return value;
  } catch {
    return null;
  }
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<AuthSession | null>(loadStoredSession);

  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === SESSION_KEY || !e.key) {
        setSession(loadStoredSession());
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <AuthContext.Provider value={{ user: session?.user ?? null, session, loading: false }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
