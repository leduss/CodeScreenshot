const STORAGE_KEY = 'snipforge_exports_used';
const COOKIE_NAME = 'snipforge_exports_used';
const LEGACY_STORAGE_KEY = 'snapcode_exports_used';
const LEGACY_COOKIE_NAME = 'snapcode_exports_used';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function readCookieByName(name: string): number | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie
    .split('; ')
    .find((entry) => entry.startsWith(`${name}=`));
  if (!match) return null;
  const parts = match.split('=');
  if (parts.length < 2) return null;
  const valueString = parts[1];
  if (!valueString) return null;
  const value = parseInt(valueString, 10);
  return Number.isNaN(value) ? null : value;
}

function writeCookie(value: number) {
  if (typeof document === 'undefined') return;
  document.cookie = `${COOKIE_NAME}=${value}; max-age=${COOKIE_MAX_AGE}; path=/`;
}

function readLocalStorageNumber(key: string): number | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(key);
    if (raw === null) return null;
    const parsed = parseInt(raw, 10);
    return Number.isNaN(parsed) ? null : parsed;
  } catch {
    return null;
  }
}

export function readStoredExportsUsed(): number {
  const currentStorageValue = readLocalStorageNumber(STORAGE_KEY);
  if (currentStorageValue !== null) {
    return currentStorageValue;
  }

  const currentCookieValue = readCookieByName(COOKIE_NAME);
  if (currentCookieValue !== null) {
    persistExportsUsed(currentCookieValue);
    return currentCookieValue;
  }

  const legacyStorageValue = readLocalStorageNumber(LEGACY_STORAGE_KEY);
  if (legacyStorageValue !== null) {
    persistExportsUsed(legacyStorageValue);
    return legacyStorageValue;
  }

  const legacyCookieValue = readCookieByName(LEGACY_COOKIE_NAME);
  if (legacyCookieValue !== null) {
    persistExportsUsed(legacyCookieValue);
    return legacyCookieValue;
  }

  return 0;
}

export function persistExportsUsed(value: number) {
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(STORAGE_KEY, value.toString());
    } catch {
      // ignore failure
    }
  }
  writeCookie(value);
}
