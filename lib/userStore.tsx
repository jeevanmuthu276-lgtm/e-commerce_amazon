'use client';
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

// ─── Types ───────────────────────────────────────────────────────────────────

export interface User {
  id: number;
  name: string;
  email: string;
}

interface UserContextValue {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const STORAGE_KEY = 'amazon-user-storage';

// ─── Context ─────────────────────────────────────────────────────────────────

const UserContext = createContext<UserContextValue | null>(null);

// ─── Provider ────────────────────────────────────────────────────────────────

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUserState] = useState<User | null>(() => {
    // Load persisted user on first render
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? (JSON.parse(stored) as User) : null;
    } catch {
      return null;
    }
  });

  // Persist user to localStorage on every change
  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

  const setUser = (user: User) => setUserState(user);
  const logout = () => setUserState(null);

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useUserStore(): UserContextValue {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error('useUserStore must be used inside <UserProvider>');
  }
  return ctx;
}