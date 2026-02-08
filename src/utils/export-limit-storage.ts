const STORAGE_KEY = 'snapcode_exports_used';
const COOKIE_NAME = 'snapcode_exports_used';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function readCookie(): number | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie
    .split('; ')
    .find((entry) => entry.startsWith(`${COOKIE_NAME}=`));
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

export function readStoredExportsUsed(): number {
  if (typeof window !== 'undefined') {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw !== null) {
        const parsed = parseInt(raw, 10);
        if (!Number.isNaN(parsed)) {
          return parsed;
        }
      }
    } catch {
      // ignore
    }
  }

  const cookieValue = readCookie();
  return cookieValue ?? 0;
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
