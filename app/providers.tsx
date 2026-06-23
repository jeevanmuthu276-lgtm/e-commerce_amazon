'use client';

import { ReactNode } from 'react';
import { CartProvider } from '@/lib/cartStore';
import { UserProvider } from '@/lib/userStore';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <UserProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </UserProvider>
  );
}