import React from 'react';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

// Clean up after each test
afterEach(() => {
  cleanup();
});

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: vi.fn(),
      replace: vi.fn(),
      prefetch: vi.fn(),
      back: vi.fn(),
    };
  },
  usePathname() {
    return '/';
  },
  useSearchParams() {
    return new URLSearchParams();
  },
}));

// Mock next/image
vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }: { src: string; alt: string }) =>
    React.createElement('img', { src, alt, ...props }),
}));

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((_query: string) => ({
    matches: false,
    media: _query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock localStorage with real in-memory behavior
let storage: Record<string, string> = {};
const localStorageMock = {
  getItem: vi.fn((key: string) => (key in storage ? storage[key] : null)),
  setItem: vi.fn((key: string, value: string) => {
    storage[key] = String(value);
  }),
  clear: vi.fn(() => {
    storage = {};
  }),
  removeItem: vi.fn((key: string) => {
    delete storage[key];
  }),
};

Object.defineProperty(window, 'localStorage', {
  writable: true,
  value: localStorageMock,
});
