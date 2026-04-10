import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mission, Challenge, QuizChallenge, MatchingChallenge, FlashcardChallenge, SortingChallenge } from '../types';
import { Icon } from './Icon';
import { shuffleArray } from '../lib/shuffle';
import { CheckCircle2, XCircle, RotateCcw, ChevronRight, ChevronLeft } from 'lucide-react';

interface ChallengeModuleProps {
  mission: Mission;
  onComplete: () => void;
}

const ChallengeModule = React.memo(({ mission, onComplete }: ChallengeModuleProps) => {
  const challenge = mission.challenge;

  const renderChallenge = () => {
    switch (challenge.type) {
      case 'quiz':
      case 'scenario':
        return <Quiz challenge={challenge} onComplete={onComplete} />;
      case 'matching':
        return <Matching challenge={challenge} onComplete={onComplete} />;
      case 'flashcard':
        return <Flashcards challenge={challenge} onComplete={onComplete} />;
      case 'sorting':
        return <Sorting challenge={challenge} onComplete={onComplete} />;
      default:
        return <div>Challenge type not implemented.</div>;
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl text-blue-600 dark:text-blue-400">
          <Icon name="Trophy" size={24} />
        </div>
        <h3 className="text-2xl font-bold dark:text-white text-slate-900">{challenge.title}</h3>
      </div>
      {renderChallenge()}
    </div>
  );
});

export default ChallengeModule;

// --- SUB-CHALLENGE COMPONENTS ---

function Quiz({ challenge, onComplete }: { challenge: QuizChallenge, onComplete: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = challenge.questions[currentIndex];

  const handleAnswer = (index: number) => {
    setSelectedOption(index);
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentIndex < challenge.questions.length - 1) {
      setCurrentIndex(i => i + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={48} className="text-green-500" />
        </div>
        <h4 className="text-3xl font-bold mb-4 dark:text-white text-slate-900">Challenge Complete!</h4>
        <p className="text-slate-500 dark:text-slate-400 text-lg mb-10">You've successfully navigated the digital landscape.</p>
        <button onClick={onComplete} className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-2xl text-xl transition-all">
          Claim Badge
        </button>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      <p className="text-lg text-slate-500 dark:text-slate-400 mb-8">{challenge.intro}</p>
      
      <div className="space-y-8">
        <h4 className="text-2xl font-bold dark:text-white text-slate-900">{currentQuestion.text}</h4>
        
        <div className="grid gap-4">
          {currentQuestion.options.map((opt, i) => {
            const isSelected = selectedOption === i;
            const isCorrect = opt.correct;
            let statusClass = 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-200';
            
            if (showFeedback) {
              if (isCorrect) statusClass = 'bg-green-500/20 border-green-500 text-green-600 dark:text-green-400';
              else if (isSelected) statusClass = 'bg-red-500/20 border-red-500 text-red-600 dark:text-red-400';
              else statusClass = 'bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800 opacity-50 text-slate-400 dark:text-slate-500';
            }

            return (
              <button
                key={i}
                disabled={showFeedback}
                onClick={() => handleAnswer(i)}
                className={`p-6 rounded-2xl border-2 text-left text-lg font-semibold transition-all ${statusClass}`}
              >
                {opt.text}
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {showFeedback && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700"
            >
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">{currentQuestion.feedback}</p>
              <button 
                onClick={handleNext}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl text-lg transition-all"
              >
                {currentIndex === challenge.questions.length - 1 ? 'Finish Challenge' : 'Next Question'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Matching({ challenge, onComplete }: { challenge: MatchingChallenge, onComplete: () => void }) {
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matched, setMatched] = useState<string[]>([]);
  const [wrong, setWrong] = useState<[string, string] | null>(null);
  const [completed, setCompleted] = useState(false);

  const [leftItems] = useState(() => shuffleArray(challenge.pairs.map(p => p.left)));
  const [rightItems] = useState(() => shuffleArray(challenge.pairs.map(p => p.right)));

  const handleMatch = (right: string) => {
    if (!selectedLeft) return;

    const pair = challenge.pairs.find(p => p.left === selectedLeft);
    if (pair?.right === right) {
      setMatched(prev => {
        const next = [...prev, selectedLeft, right];
        if (next.length === challenge.pairs.length * 2) {
          window.setTimeout(() => setCompleted(true), 400);
        }
        return next;
      });
      setSelectedLeft(null);
    } else {
      setWrong([selectedLeft, right]);
      window.setTimeout(() => setWrong(null), 1000);
    }
  };

  if (completed) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={48} className="text-green-500" />
        </div>
        <h4 className="text-3xl font-bold mb-4 dark:text-white text-slate-900">Mission Complete!</h4>
        <p className="text-slate-500 dark:text-slate-400 text-lg mb-10">All pairs matched correctly.</p>
        <button
          onClick={onComplete}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-2xl text-xl transition-all"
        >
          Claim Reward
        </button>
      </div>
    );
  }

  if (completed) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={48} className="text-green-500" />
        </div>
        <h4 className="text-3xl font-bold mb-4 dark:text-white text-slate-900">Mission Complete!</h4>
        <p className="text-slate-500 dark:text-slate-400 text-lg mb-10">All pairs matched correctly.</p>
        <button
          onClick={onComplete}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-2xl text-xl transition-all"
        >
          Claim Reward
        </button>
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-8">
      <p className="text-lg text-slate-500 dark:text-slate-400">{challenge.intro}</p>
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          {leftItems.map(item => (
            <button
              key={item}
              disabled={matched.includes(item)}
              onClick={() => setSelectedLeft(item)}
              className={`w-full p-4 rounded-xl border-2 transition-all text-left font-medium ${
                matched.includes(item) 
                  ? 'bg-green-500/20 border-green-500 text-green-600 dark:text-green-400 opacity-50' 
                  : selectedLeft === item 
                    ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-500/20' 
                    : wrong?.[0] === item 
                      ? 'bg-red-500/20 border-red-500 text-red-600 dark:text-red-400' 
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-200'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="space-y-4">
          {rightItems.map(item => (
            <button
              key={item}
              disabled={matched.includes(item) || !selectedLeft}
              onClick={() => handleMatch(item)}
              className={`w-full p-4 rounded-xl border-2 transition-all text-left font-medium ${
                matched.includes(item) 
                  ? 'bg-green-500/20 border-green-500 text-green-600 dark:text-green-400 opacity-50' 
                  : wrong?.[1] === item 
                    ? 'bg-red-500/20 border-red-500 text-red-600 dark:text-red-400' 
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-200 disabled:opacity-30'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Flashcards({ challenge, onComplete }: { challenge: FlashcardChallenge, onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [viewedAll, setViewedAll] = useState(false);

  const handleNext = () => {
    setFlipped(false);
    if (index < challenge.cards.length - 1) {
      setIndex(i => i + 1);
    } else {
      setViewedAll(true);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center">
      <p className="text-lg text-slate-500 dark:text-slate-400 mb-12">{challenge.intro}</p>
      
      <div className="w-full max-w-md aspect-[4/3] perspective-1000">
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          onClick={() => setFlipped(!flipped)}
          className="relative w-full h-full cursor-pointer preserve-3d"
        >
          {/* Front */}
          <div className="absolute inset-0 bg-white dark:bg-slate-800 rounded-[2.5rem] border-4 border-slate-200 dark:border-slate-700 flex items-center justify-center p-8 backface-hidden shadow-xl dark:shadow-2xl">
            <h4 className="text-4xl font-bold text-center dark:text-white text-slate-900">{challenge.cards[index].front}</h4>
            <div className="absolute bottom-6 text-slate-400 dark:text-slate-500 text-sm font-bold uppercase tracking-widest">Click to Flip</div>
          </div>
          
          {/* Back */}
          <div className="absolute inset-0 bg-green-600 rounded-[2.5rem] border-4 border-green-500 flex items-center justify-center p-8 backface-hidden rotate-y-180 shadow-2xl">
            <p className="text-2xl font-semibold text-center leading-relaxed text-white">
              {challenge.cards[index].back}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-12 w-full max-w-md flex justify-between items-center">
        <button 
          onClick={() => { setIndex(i => i - 1); setFlipped(false); }}
          disabled={index === 0}
          className="p-4 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-white disabled:opacity-0 transition-all hover:bg-slate-200 dark:hover:bg-slate-700"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="text-lg font-bold text-slate-400 dark:text-slate-500">
          {index + 1} / {challenge.cards.length}
        </div>

        {viewedAll && index === challenge.cards.length - 1 ? (
          <button onClick={onComplete} className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-green-900/20">
            Finish
          </button>
        ) : (
          <button 
            onClick={handleNext}
            className="p-4 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-white transition-all hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
    </div>
  );
}

function Sorting({ challenge, onComplete }: { challenge: SortingChallenge, onComplete: () => void }) {
  const [items, setItems] = useState(challenge.items);
  const [wrong, setWrong] = useState<string | null>(null);

  const currentItem = items[0];

  const handleSort = (binId: string) => {
    const bin = challenge.bins.find(b => b.id === binId);
    if (bin?.accept.includes(currentItem.type)) {
      const newItems = items.slice(1);
      setItems(newItems);
      if (newItems.length === 0) {
        onComplete();
      }
    } else {
      setWrong(binId);
      setTimeout(() => setWrong(null), 500);
    }
  };

  if (!currentItem) return null;

  return (
    <div className="flex-1 flex flex-col">
      <p className="text-lg text-slate-500 dark:text-slate-400 mb-12">{challenge.intro}</p>
      
      <div className="flex-1 flex flex-col items-center justify-center mb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem.id}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            className="w-40 h-40 bg-white dark:bg-slate-800 rounded-[2.5rem] border-4 border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center gap-4 shadow-xl dark:shadow-2xl"
          >
            <span className="text-6xl">{currentItem.icon}</span>
            <span className="font-bold text-lg dark:text-white text-slate-900">{currentItem.name}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {challenge.bins.map(bin => (
          <button
            key={bin.id}
            onClick={() => handleSort(bin.id)}
            className={`p-8 rounded-[2rem] border-4 transition-all flex flex-col items-center gap-4 ${bin.color} ${wrong === bin.id ? 'animate-shake' : 'hover:scale-105'}`}
          >
            <span className="text-2xl font-bold">{bin.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
