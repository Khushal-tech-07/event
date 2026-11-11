import React, { useState, useEffect } from "react";
import { SEO } from "../components/common/SEO";
import { LEARNING_PATHS, COSMIC_QUIZ_QUESTIONS } from "../data/learning";
import { 
  GraduationCap, CheckCircle2, Circle, Trophy, 
  HelpCircle, RotateCcw, ChevronRight, BookOpen, Sparkles, Award 
} from "lucide-react";

export const Academy: React.FC = () => {
  // 1. Learning Paths Completed Modules (Stored in localStorage)
  const [completedModules, setCompletedModules] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem("event_horizon_completed_modules");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [activeModuleModal, setActiveModuleModal] = useState<{
    pathTitle: string;
    moduleId: string;
    title: string;
    summary: string;
    readTime: string;
    keyPoints: string[];
  } | null>(null);

  // 2. Quiz State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Save progress
  useEffect(() => {
    try {
      localStorage.setItem("event_horizon_completed_modules", JSON.stringify(completedModules));
    } catch (e) {
      console.error(e);
    }
  }, [completedModules]);

  const toggleModuleCompletion = (moduleId: string) => {
    setCompletedModules((prev) =>
      prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  // Quiz evaluation
  const handleSelectAnswer = (questionId: number, optionIndex: number) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const calculateScore = () => {
    let score = 0;
    COSMIC_QUIZ_QUESTIONS.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  const currentQ = COSMIC_QUIZ_QUESTIONS[currentQuestionIndex];
  const totalQuestions = COSMIC_QUIZ_QUESTIONS.length;
  const answeredCount = Object.keys(selectedAnswers).length;

  return (
    <div className="relative min-h-screen text-slate-100 pt-24 pb-20">
      <SEO
        title="Cosmic Academy - Learning Paths & Astrophysics Quiz"
        description="Structured beginner-to-advanced astrophysics learning paths, personal progress tracking, and interactive 10-question cosmic mastery quiz."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* HERO HEADER */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/40 text-xs font-mono text-violet-300">
            <GraduationCap className="w-4 h-4 text-violet-400" />
            <span>ASTROPHYSICS ACADEMY</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            Cosmic <span className="text-violet-400 violet-glow">Academy</span>
          </h1>

          <p className="font-subheading text-slate-300 text-sm sm:text-base leading-relaxed">
            Master celestial mechanics, general relativity, and observational astronomy through 
            structured learning modules and interactive knowledge evaluations.
          </p>
        </section>

        {/* 1. LEARNING PATHS WITH LOCAL STORAGE PROGRESS */}
        <section className="space-y-8">
          <div>
            <h2 className="font-heading text-2xl font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#ff8a3d]" /> Curriculum & Learning Paths
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Check off completed lessons as you advance. Your progress is saved automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEARNING_PATHS.map((path) => {
              const completedInPath = path.modules.filter((m) =>
                completedModules.includes(m.id)
              ).length;
              const progressPercent = Math.round(
                (completedInPath / path.modules.length) * 100
              );

              return (
                <div
                  key={path.id}
                  className="rounded-2xl glass-panel border border-slate-700/80 p-6 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className={`px-2.5 py-0.5 rounded-full border ${
                        path.level === "Beginner"
                          ? "bg-emerald-950/70 border-emerald-500/40 text-emerald-300"
                          : path.level === "Intermediate"
                          ? "bg-amber-950/70 border-amber-500/40 text-amber-300"
                          : "bg-purple-950/70 border-purple-500/40 text-purple-300"
                      }`}>
                        {path.level}
                      </span>
                      <span className="text-slate-400">{path.duration}</span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-white">
                      {path.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {path.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="space-y-1.5 pt-2">
                      <div className="flex justify-between text-[11px] font-mono text-slate-400">
                        <span>Progress: {progressPercent}%</span>
                        <span>{completedInPath}/{path.modules.length} modules</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#ff8a3d] to-violet-500 transition-all duration-500"
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Modules List */}
                  <div className="space-y-2 pt-4 border-t border-white/5">
                    {path.modules.map((mod) => {
                      const isDone = completedModules.includes(mod.id);
                      return (
                        <div
                          key={mod.id}
                          className="p-3 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-between gap-3 text-xs transition-colors"
                        >
                          <button
                            onClick={() => toggleModuleCompletion(mod.id)}
                            className="text-slate-400 hover:text-white shrink-0"
                            title={isDone ? "Mark incomplete" : "Mark completed"}
                          >
                            {isDone ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <Circle className="w-4 h-4 text-slate-600" />
                            )}
                          </button>

                          <span
                            onClick={() =>
                              setActiveModuleModal({
                                pathTitle: path.title,
                                moduleId: mod.id,
                                title: mod.title,
                                summary: mod.summary,
                                readTime: mod.readTime,
                                keyPoints: mod.keyPoints,
                              })
                            }
                            className={`flex-1 cursor-pointer hover:text-[#ff8a3d] transition-colors line-clamp-1 ${
                              isDone ? "text-slate-400 line-through" : "text-white"
                            }`}
                          >
                            {mod.title}
                          </span>

                          <span className="text-[10px] font-mono text-slate-500 shrink-0">
                            {mod.readTime}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 2. ASTROPHYSICS QUIZ SECTION */}
        <section id="quiz" className="p-6 sm:p-10 rounded-3xl glass-card-accent border border-slate-700/80 shadow-2xl space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ff8a3d] uppercase tracking-wider">
                <Trophy className="w-4 h-4 text-[#ff8a3d]" />
                <span>INTERACTIVE ASTROPHYSICS EVALUATION</span>
              </div>
              <h2 className="font-heading text-2xl font-bold text-white">
                Cosmic Mastery Quiz
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                10 multiple-choice physics questions. Immediate feedback and detailed scientific explanations.
              </p>
            </div>

            {/* Answered progress counter */}
            <div className="px-4 py-2 rounded-xl bg-black/60 border border-slate-700 text-xs font-mono text-slate-300">
              Answered: <span className="text-[#ff8a3d] font-bold">{answeredCount}</span> of {totalQuestions}
            </div>
          </div>

          {!quizSubmitted ? (
            /* ACTIVE QUIZ SCREEN */
            <div className="space-y-6">
              {/* Question Navigation Bubbles */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {COSMIC_QUIZ_QUESTIONS.map((q, idx) => {
                  const isCurrent = currentQuestionIndex === idx;
                  const isAnswered = selectedAnswers[q.id] !== undefined;
                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentQuestionIndex(idx)}
                      className={`w-8 h-8 rounded-lg text-xs font-mono font-medium transition-all border ${
                        isCurrent
                          ? "bg-[#ff8a3d] text-slate-950 border-[#ff8a3d] font-bold"
                          : isAnswered
                          ? "bg-violet-950/60 border-violet-500/40 text-violet-300"
                          : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              {/* Current Question Card */}
              <div className="p-6 sm:p-8 rounded-2xl glass-panel space-y-6">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-400">
                    Question {currentQuestionIndex + 1} of {totalQuestions} • {currentQ.category}
                  </span>
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-bold text-white leading-snug">
                  {currentQ.question}
                </h3>

                {/* Options List */}
                <div className="space-y-3">
                  {currentQ.options.map((option, optIdx) => {
                    const isSelected = selectedAnswers[currentQ.id] === optIdx;
                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectAnswer(currentQ.id, optIdx)}
                        className={`w-full p-4 rounded-xl text-left text-xs sm:text-sm transition-all border flex items-center justify-between ${
                          isSelected
                            ? "bg-[#ff8a3d]/20 border-[#ff8a3d] text-white shadow-[0_0_15px_rgba(255,138,61,0.2)] font-medium"
                            : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-mono text-xs ${
                            isSelected ? "bg-[#ff8a3d] text-slate-950 font-bold" : "bg-white/10 text-slate-400"
                          }`}>
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>{option}</span>
                        </div>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-[#ff8a3d]" />}
                      </button>
                    );
                  })}
                </div>

                {/* Bottom Navigation */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <button
                    onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                    disabled={currentQuestionIndex === 0}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300 disabled:opacity-40"
                  >
                    ← Previous
                  </button>

                  {currentQuestionIndex < totalQuestions - 1 ? (
                    <button
                      onClick={() => setCurrentQuestionIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
                      className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:text-white"
                    >
                      Next Question →
                    </button>
                  ) : (
                    <button
                      onClick={() => setQuizSubmitted(true)}
                      disabled={answeredCount === 0}
                      className="px-6 py-2 rounded-xl bg-[#ff8a3d] text-slate-950 font-bold text-xs hover:bg-[#ff9d5c] transition-colors disabled:opacity-40"
                    >
                      Submit Answers & Review
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* RESULTS SCREEN */
            <div className="space-y-8">
              <div className="p-8 rounded-2xl bg-black/60 border border-slate-700 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#ff8a3d]/20 border border-[#ff8a3d]/40 flex items-center justify-center text-[#ff8a3d] mx-auto shadow-[0_0_20px_rgba(255,138,61,0.4)]">
                  <Award className="w-8 h-8" />
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                  Quiz Completed!
                </h3>

                <div className="text-3xl font-extrabold font-mono text-[#ff8a3d]">
                  {calculateScore()} / {totalQuestions}
                </div>

                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  {calculateScore() >= 8
                    ? "Astounding! You possess master-level command of relativistic mechanics and cosmological principles."
                    : calculateScore() >= 5
                    ? "Solid performance! You have a good foundation in astrophysics. Review the scientific explanations below to level up."
                    : "Great effort! Space physics is deep and counterintuitive. Check the explanations below to master the fundamentals."}
                </p>

                <button
                  onClick={() => {
                    setSelectedAnswers({});
                    setQuizSubmitted(false);
                    setCurrentQuestionIndex(0);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-mono text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Quiz</span>
                </button>
              </div>

              {/* Explanations List */}
              <div className="space-y-4">
                <h4 className="font-heading text-lg font-bold text-white">
                  Answer Breakdown & Explanations:
                </h4>

                {COSMIC_QUIZ_QUESTIONS.map((q, idx) => {
                  const userAnswer = selectedAnswers[q.id];
                  const isCorrect = userAnswer === q.correctIndex;

                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-2xl border ${
                        isCorrect
                          ? "bg-emerald-950/30 border-emerald-500/30"
                          : "bg-rose-950/30 border-rose-500/30"
                      } space-y-2`}
                    >
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className={isCorrect ? "text-emerald-400 font-bold" : "text-rose-400 font-bold"}>
                          Q{idx + 1}: {isCorrect ? "CORRECT (+1)" : "INCORRECT"}
                        </span>
                        <span className="text-slate-400">{q.category}</span>
                      </div>

                      <div className="text-sm font-semibold text-white">{q.question}</div>

                      <div className="text-xs text-slate-300 font-mono">
                        <div>Correct Answer: <span className="text-emerald-300 font-bold">{q.options[q.correctIndex]}</span></div>
                        {userAnswer !== undefined && !isCorrect && (
                          <div className="text-rose-300">Your Answer: {q.options[userAnswer]}</div>
                        )}
                      </div>

                      <div className="p-3 rounded-xl bg-black/40 text-xs text-slate-300 leading-relaxed mt-2 border border-white/5">
                        <span className="font-bold text-[#ff8a3d]">Scientific Context: </span>
                        {q.explanation}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </section>

        {/* LESSON DETAILS MODAL */}
        {activeModuleModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setActiveModuleModal(null)}
            />

            <div className="relative w-full max-w-xl bg-[#090b18] border border-slate-700 rounded-3xl shadow-2xl p-6 sm:p-8 z-10 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#ff8a3d]">
                  {activeModuleModal.pathTitle} • {activeModuleModal.readTime}
                </span>
                <button
                  onClick={() => setActiveModuleModal(null)}
                  className="text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <h3 className="font-heading text-xl font-bold text-white">
                {activeModuleModal.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activeModuleModal.summary}
              </p>

              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                  Core Principles to Remember:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {activeModuleModal.keyPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#ff8a3d] font-bold mt-0.5">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => {
                    toggleModuleCompletion(activeModuleModal.moduleId);
                    setActiveModuleModal(null);
                  }}
                  className="px-5 py-2 rounded-xl bg-[#ff8a3d] text-slate-950 font-bold text-xs hover:bg-[#ff9d5c] transition-colors"
                >
                  {completedModules.includes(activeModuleModal.moduleId)
                    ? "Keep Completed"
                    : "Mark as Completed ✓"}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
