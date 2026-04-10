import type { UserProfile, MissionProgress } from '../types';
import { MISSIONS } from '../data/missions';
import { DEFAULT_AVATAR } from '../data/avatars';

const STORAGE_KEY = 'eco_warrior_profile';

export const DEFAULT_SETTINGS = {
  sound: true,
  theme: 'dark' as const,
  animations: true,
  fontSize: 'medium' as const,
};

export const createDefaultProgress = (): Record<string, MissionProgress> => {
  return Object.keys(MISSIONS).reduce((acc, id) => {
    acc[id] = { status: 'unlocked', knowledge: false, learn: false, challenge: false };
    return acc;
  }, {} as Record<string, MissionProgress>);
};

export const buildUserProfile = (username: string): UserProfile => ({
  username,
  avatar: {
    ...DEFAULT_AVATAR,
    color: '#22c55e',
  },
  progress: createDefaultProgress(),
  settings: { ...DEFAULT_SETTINGS },
});

export function safeParseJSON<T>(value: string): T | null {
  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
}

function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

function isMissionProgress(value: unknown): value is MissionProgress {
  return (
    typeof value === 'object' &&
    value !== null &&
    isString((value as any).status) &&
    ['locked', 'unlocked', 'completed'].includes((value as any).status) &&
    isBoolean((value as any).knowledge) &&
    isBoolean((value as any).learn) &&
    isBoolean((value as any).challenge)
  );
}

export function isUserProfile(value: unknown): value is UserProfile {
  if (typeof value !== 'object' || value === null) return false;

  const profile = value as any;
  if (!isString(profile.username)) return false;
  if (typeof profile.avatar !== 'object' || profile.avatar === null) return false;
  if (!isString(profile.avatar.id) || !isString(profile.avatar.color)) return false;
  if (typeof profile.settings !== 'object' || profile.settings === null) return false;
  if (!isBoolean(profile.settings.sound)) return false;
  if (!['dark', 'light'].includes(profile.settings.theme)) return false;
  if (profile.settings.animations !== undefined && !isBoolean(profile.settings.animations)) return false;
  if (profile.settings.fontSize !== undefined && !['small', 'medium', 'large'].includes(profile.settings.fontSize)) return false;

  if (typeof profile.progress !== 'object' || profile.progress === null) return false;
  return Object.keys(profile.progress).every(id => isMissionProgress(profile.progress[id]));
}

export function loadProfile(): UserProfile | null {
  if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') return null;

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;

  const parsed = safeParseJSON<unknown>(raw);
  if (parsed && isUserProfile(parsed)) {
    return {
      ...parsed,
      progress: { ...createDefaultProgress(), ...parsed.progress },
    };
  }

  return null;
}

export function saveProfile(profile: UserProfile): void {
  if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
}

export function clearProfile(): void {
  if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') return;
  window.localStorage.removeItem(STORAGE_KEY);
}
