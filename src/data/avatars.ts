import type { AvatarDefinition } from '../types';

export const AVATARS: AvatarDefinition[] = [
  {
    id: 'bot1',
    svg: '<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C9.23858 2 7 4.23858 7 7V11C7 11.5523 7.44772 12 8 12H16C16.5523 12 17 11.5523 17 11V7C17 4.23858 14.7614 2 12 2Z" class="avatar-colorable" fill="currentColor"/><path d="M6 14C6 13.4477 6.44772 13 7 13H17C17.5523 13 18 13.4477 18 14V17C18 19.2091 16.2091 21 14 21H10C7.79086 21 6 19.2091 6 17V14Z" fill="#94a3b8"/><rect x="9" y="15" width="6" height="4" rx="1" fill="#0f172a"/><circle cx="10" cy="7" r="1.5" fill="white"/><circle cx="14" cy="7" r="1.5" fill="white"/></svg>',
  },
  {
    id: 'bot2',
    svg: '<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="14" height="14" rx="7" class="avatar-colorable" fill="currentColor"/><rect x="4" y="11" width="16" height="8" rx="4" fill="#94a3b8"/><rect x="8" y="8" width="8" height="5" rx="2.5" fill="#1e293b"/><path d="M9 10.5H15" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M4 16L2 19M20 16L22 19" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/></svg>',
  },
  {
    id: 'bot3',
    svg: '<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" class="avatar-colorable" fill="currentColor"/><path d="M12 16C14.2091 16 16 14.2091 16 12H8C8 14.2091 9.79086 16 12 16Z" fill="#1e293b"/><path d="M9.5 10C10.3284 10 11 9.32843 11 8.5C11 7.67157 10.3284 7 9.5 7C8.67157 7 8 7.67157 8 8.5C8 9.32843 8.67157 10 9.5 10Z" fill="white"/><path d="M14.5 10C15.3284 10 16 9.32843 16 8.5C16 7.67157 15.3284 7 14.5 7C13.6716 7 13 7.67157 13 8.5C13 9.32843 13.6716 10 14.5 10Z" fill="white"/><path d="M18 5L20 3M6 5L4 3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  },
  {
    id: 'bot4',
    svg: '<svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="8" width="16" height="12" rx="2" class="avatar-colorable" fill="currentColor"/><path d="M8 8V6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V8" fill="#94a3b8"/><circle cx="12" cy="14" r="3" fill="#1e293b"/><path d="M12 12.5V15.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>',
  },
];

export const AVATAR_COLORS = ['#22c55e', '#3b82f6', '#f97316', '#a855f7', '#facc15', '#0891b2'];

export const DEFAULT_AVATAR: AvatarDefinition = AVATARS[0];
