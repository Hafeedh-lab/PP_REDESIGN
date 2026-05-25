import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

interface ProductSelectorContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const ProductSelectorContext = createContext<ProductSelectorContextValue | undefined>(undefined);

export function ProductSelectorProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);
  return (
    <ProductSelectorContext.Provider value={value}>{children}</ProductSelectorContext.Provider>
  );
}

export function useProductSelector(): ProductSelectorContextValue {
  const ctx = useContext(ProductSelectorContext);
  if (!ctx) throw new Error('useProductSelector must be used within ProductSelectorProvider');
  return ctx;
}
