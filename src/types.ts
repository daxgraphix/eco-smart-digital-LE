export type MissionStatus = 'locked' | 'unlocked' | 'completed';

export interface AvatarDefinition {
  id: string;
  svg: string;
}

export interface UserAvatar extends AvatarDefinition {
  color: string;
}

export interface MissionProgress {
  status: MissionStatus;
  knowledge: boolean;
  learn: boolean;
  challenge: boolean;
}

export interface UserProfile {
  username: string;
  avatar: UserAvatar;
  progress: Record<string, MissionProgress>;
  settings: {
    sound: boolean;
    theme: 'dark' | 'light';
    animations?: boolean;
    fontSize?: 'small' | 'medium' | 'large';
  };
}

export interface Option {
  text: string;
  correct: boolean;
}

export interface Question {
  text: string;
  options: Option[];
  feedback: string;
}

export interface QuizChallenge {
  type: 'quiz' | 'scenario';
  title: string;
  intro: string;
  questions: Question[];
}

export interface MatchingPair {
  left: string;
  right: string;
}

export interface MatchingChallenge {
  type: 'matching';
  title: string;
  intro: string;
  pairs: MatchingPair[];
}

export interface Flashcard {
  front: string;
  back: string;
}

export interface FlashcardChallenge {
  type: 'flashcard';
  title: string;
  intro: string;
  cards: Flashcard[];
}

export interface SortingItem {
  id: string;
  name: string;
  type: string;
  icon: string;
}

export interface SortingBin {
  id: string;
  name: string;
  color: string;
  accept: string[];
}

export interface SortingChallenge {
  type: 'sorting';
  title: string;
  intro: string;
  items: SortingItem[];
  bins: SortingBin[];
}

export type Challenge = QuizChallenge | MatchingChallenge | FlashcardChallenge | SortingChallenge;

export interface Mission {
  id: string;
  title: string;
  badgeName: string;
  icon: string;
  badgeIcon: string;
  description: string;
  knowledge: {
    title: string;
    pages: { text: string }[];
  };
  learn: {
    title: string;
    cards: { front: string; back: string }[];
  };
  challenge: Challenge;
}

export interface HandbookEntry {
  title: string;
  icon: string;
  color: string;
  content: string[];
}
