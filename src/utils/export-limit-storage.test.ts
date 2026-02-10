import { describe, it, expect, beforeEach } from 'vitest';
import {
  persistExportsUsed,
  readStoredExportsUsed,
} from '@/utils/export-limit-storage';

describe('export-limit storage helpers', () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.cookie = 'snipforge_exports_used=; max-age=0; path=/';
    document.cookie = 'snapcode_exports_used=; max-age=0; path=/';
  });

  it('persists and reads from localStorage + cookie', () => {
    persistExportsUsed(3);
    expect(window.localStorage.getItem('snipforge_exports_used')).toBe('3');
    expect(document.cookie.includes('snipforge_exports_used=3')).toBe(true);
    expect(readStoredExportsUsed()).toBe(3);
  });

  it('reads value from cookie when localStorage missing', () => {
    document.cookie = 'snipforge_exports_used=4; path=/';
    window.localStorage.removeItem('snipforge_exports_used');
    expect(readStoredExportsUsed()).toBe(4);
  });

  it('migrates legacy snapcode storage key', () => {
    window.localStorage.setItem('snapcode_exports_used', '2');
    expect(readStoredExportsUsed()).toBe(2);
    expect(window.localStorage.getItem('snipforge_exports_used')).toBe('2');
  });

  it('defaults to 0 when nothing stored', () => {
    expect(readStoredExportsUsed()).toBe(0);
  });
});
