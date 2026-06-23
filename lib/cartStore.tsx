import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from 'react';

// ─── Types ───────────────────────────────────────────────────────────────────

export interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  mrp: number;
  discountPercent: number;
  deliveryDate: string;
  quantity: number;
  size?: string;
}

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] };

interface CartContextValue extends CartState {
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

// ─── Reducer ─────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'amazon-cart-storage';

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'LOAD_CART':
      return { items: action.payload };

    case 'ADD_TO_CART': {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === action.payload.id
              ? { ...i, quantity: i.quantity + action.payload.quantity }
              : i
          ),
        };
      }
      return { items: [...state.items, action.payload] };
    }

    case 'REMOVE_FROM_CART':
      return { items: state.items.filter((i) => i.id !== action.payload) };

    case 'UPDATE_QUANTITY':
      return {
        items: state.items.map((i) =>
          i.id === action.payload.id
            ? { ...i, quantity: action.payload.quantity }
            : i
        ),
      };

    case 'CLEAR_CART':
      return { items: [] };

    default:
      return state;
  }
}

// ─── Context ─────────────────────────────────────────────────────────────────

const CartContext = createContext<CartContextValue | null>(null);

// ─── Provider ────────────────────────────────────────────────────────────────

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  // Load persisted cart on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: CartItem[] = JSON.parse(stored);
        dispatch({ type: 'LOAD_CART', payload: parsed });
      }
    } catch {
      // Ignore malformed storage data
    }
  }, []);

  // Persist cart on every change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
  }, [state.items]);

  const addToCart = (item: CartItem) =>
    dispatch({ type: 'ADD_TO_CART', payload: item });

  const removeFromCart = (id: string) =>
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });

  const updateQuantity = (id: string, quantity: number) =>
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });

  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useCartStore(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCartStore must be used inside <CartProvider>');
  }
  return ctx;
}