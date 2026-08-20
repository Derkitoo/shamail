import React, { useState, useEffect } from 'react';

const appData = {
  ui: {
    title: { fr: "Shamâ'il", ar: "الشمائل المحمدية" },
    subtitle: { fr: "Le Prophète comme si tu le voyais", ar: "كأنك تراه ﷺ" },
    favorites: { fr: "Favoris", ar: "المفضلة" },
    noFavorites: { fr: "Aucun chapitre sauvegardé.", ar: "لا توجد مفضلة حتى الآن." },
    copied: { fr: "Copié dans le presse-papier !", ar: "تم النسخ بنجاح!" },
    saved: { fr: "Ajouté aux favoris", ar: "تمت الإضافة للمفضلة" },
    removed: { fr: "Retiré des favoris", ar: "تمت الإزالة من المفضلة" },
    proof: { fr: "Hadith", ar: "الحديث" },
    searchPlaceholder: { fr: "Rechercher un terme, un hadith...", ar: "ابحث (السواك، الخاتم...)" },
    progress: { fr: "Progression", ar: "مستوى القراءة" },
    markRead: { fr: "Lu", ar: "مقروء" },
    noResults: { fr: "Aucun résultat trouvé.", ar: "لم يتم العثور على نتائج." },
    sharhBtn: { fr: "Explication savante (Sharh)", ar: "قراءة الشرح (الباجوري والقاري)" },
    quizTitle: { fr: "Quiz Shamâ'il", ar: "اختبر حفظك" },
    flipBtn: { fr: "Voir la réponse", ar: "الجواب" },
    sunnahAction: { fr: "Sunnah Pratique", ar: "سنة عملية" }
  },
  groups: [
    { id: 'apparence', icon: 'user', gradient: 'from-emerald-400 to-teal-500', title: { fr: "Apparence Physique", ar: "الخِلقة والصفات" }, desc: { fr: "Ses traits, ses cheveux, le sceau.", ar: "أوصافه الجسدية، شعره، وخاتم النبوة." } },
    { id: 'vetements', icon: 'shirt', gradient: 'from-amber-400 to-orange-500', title: { fr: "Vêtements & Parures", ar: "اللباس والزينة" }, desc: { fr: "Sa façon de s'habiller et ses affaires.", ar: "لباسه، خاتمه، وسلاحه." } },
    { id: 'attitude', icon: 'footprints', gradient: 'from-blue-400 to-indigo-500', title: { fr: "Attitude & Posture", ar: "الهيئة والجلسة" }, desc: { fr: "Sa démarche, sa façon de s'asseoir.", ar: "مشيته وجلوسه وتكأته." } },
    { id: 'nourriture', icon: 'utensils', gradient: 'from-rose-400 to-pink-500', title: { fr: "Nourriture & Boisson", ar: "الطعام والشراب" }, desc: { fr: "Ce qu'il mangeait et comment il buvait.", ar: "صفة أكله، خبزه، وشرابه." } },
    { id: 'parole', icon: 'message-circle', gradient: 'from-violet-400 to-purple-500', title: { fr: "Parole & Sourire", ar: "الكلام والتواصل" }, desc: { fr: "Sa façon de parler, de rire et de plaisanter.", ar: "كلامه، ضحكه، ومزاحه." } },
    { id: 'caractere', icon: 'heart', gradient: 'from-fuchsia-400 to-pink-600', title: { fr: "Noblesse d'Âme", ar: "الأخلاق والشمائل" }, desc: { fr: "Son humilité, sa pudeur, sa douceur.", ar: "تواضعه، حياؤه، وخلقه." } },
    { id: 'adoration', icon: 'moon-star', gradient: 'from-cyan-400 to-blue-600', title: { fr: "Adoration & Quotidien", ar: "العبادة والعيش" }, desc: { fr: "Sa prière, son jeûne, son sommeil.", ar: "صلاته، صومه، ونومه." } },
    { id: 'fin', icon: 'feather', gradient: 'from-slate-400 to-gray-600', title: { fr: "Noms & Fin de vie", ar: "الأسماء والوفاة" }, desc: { fr: "Ses noms, son âge et son décès.", ar: "أسماؤه، عمره، ووفاته." } }
  ],
  chapters: [
    { 
      group_id: 'apparence', bab: 1, 
      title: { fr: "Ses traits physiques", ar: "خلقه ﷺ" }, 
      content: { fr: "Il n'était ni trop grand ni trop petit. Il avait les épaules larges, un beau visage éclatant comme la pleine lune.", ar: "لم يكن بالطويل الممغط ولا بالقصير المتردد. يتلألأ وجهه تلألؤ القمر ليلة البدر." },
      dalil: { fr: "D'après Al-Barâ' ibn 'Âzib : « Le Prophète ﷺ était de taille moyenne, avec des épaules larges et une chevelure abondante. »", ar: "عن البراء بن عازب قال: «كان رسول الله ﷺ مربوعاً، بعيد ما بين المنكبين...»" },
      auth: 'sahih',
      sharh: { fr: "L'Imam Al-Bajuri explique que le terme 'Rab'a' (taille moyenne) dénote la perfection de ses proportions.", ar: "قال الإمام الباجوري: (مربوعاً) أي وسطاً بين الطول والقصر." },
      action: { fr: "Ayez une posture droite et digne aujourd'hui.", ar: "حافظ على هيئة معتدلة ووقار في مشيتك اليوم." }
    },
    { 
      group_id: 'apparence', bab: 2, 
      title: { fr: "Le sceau de la prophétie", ar: "خاتم النبوة" }, 
      content: { fr: "Il portait entre les épaules une petite excroissance (le sceau), de la même couleur que sa peau.", ar: "كان بين كتفيه غدة حمراء مثل بيضة الحمامة، وهي من علامات نبوته." },
      dalil: { fr: "D'après Jâbir ibn Samoura : « J'ai vu le Sceau entre ses épaules... »", ar: "عن جابر بن سمرة قال: «رأيت الخاتم بين كتفي رسول الله...»" },
      auth: 'sahih',
      sharh: { fr: "Ce sceau était une marque physique promise dans les anciens livres.", ar: "هذا الخاتم من العلامات التي وردت في الكتب السابقة." }
    }
  ],
  dictionary: [
    { word: "الممغط", type: "adjectif", def: { fr: "Le grand de taille, excessivement élancé.", ar: "الشديد الطول البائن." }, chapterKey: "apparence-1" },
    { word: "المتردد", type: "adjectif", def: { fr: "Celui dont les membres sont ramassés par une brièveté excessive.", ar: "المتناهي في القصر." }, chapterKey: "apparence-1" }
  ],
  quiz: [
    { q: { fr: "Quelle était la taille physique du Prophète ﷺ ?", ar: "كيف كانت قامة النبي ﷺ؟" }, a: { fr: "De taille moyenne (ni trop grand ni trop petit), avec de larges épaules.", ar: "مربوعاً (ليس بالطويل ولا بالقصير)، بعيد ما بين المنكبين." } }
  ]
};

export default function App() {
  const [lang, setLang] = useState('fr');
  const [theme, setTheme] = useState('light');
  const [fontScale, setFontScale] = useState(1.05);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const zoomText = (delta) => {
    const nextScale = Math.min(1.45, Math.max(0.75, Math.round((fontScale + delta) * 100) / 100));
    setFontScale(nextScale);
    document.documentElement.style.setProperty('--arabic-scale', nextScale);
  };

  return (
    <div class="max-w-lg mx-auto w-full min-h-screen flex flex-col relative bg-white/40 dark:bg-slate-900/40 shadow-2xl">
      <header class="px-4 py-3 flex items-center justify-between sticky top-0 glass-panel z-50 border-b border-white/50 dark:border-slate-700/50">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-sm">
            <span class="text-white text-xs font-bold">ﷺ</span>
          </div>
          <span class="font-extrabold text-lg tracking-tight text-slate-800 dark:text-white">{appData.ui.title[lang]}</span>
        </div>

        <div class="flex items-center gap-1.5">
          <div class="flex items-center bg-white/90 dark:bg-slate-800/90 p-0.5 rounded-full shadow-sm border border-slate-200/70 dark:border-slate-700/70">
            <button onClick={() => zoomText(-0.08)} class="w-7 h-7 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 font-black text-xs">A-</button>
            <button onClick={() => zoomText(0.08)} class="w-7 h-7 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 font-black text-xs">A+</button>
          </div>
          <button onClick={() => setLang(lang === 'fr' ? 'ar' : 'fr')} class="px-2.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-800 border text-xs font-bold">
            {lang === 'fr' ? 'عربي' : 'FR'}
          </button>
        </div>
      </header>

      <main class="flex-1 p-4">
        <div class="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-5 rounded-3xl border border-emerald-500/20 shadow-sm text-center mb-4">
          <div class="py-2.5 px-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 mb-3">
            <span class="text-xl font-bold text-emerald-800 dark:text-emerald-300">
              ﷺ اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَآلِهِ وَسَلِّمْ
            </span>
          </div>
          <h2 class="text-2xl font-extrabold text-slate-800 dark:text-white">Shamâ'il Muhammadiyya</h2>
          <p class="text-xs text-emerald-600 dark:text-emerald-400 font-medium">{appData.ui.subtitle[lang]}</p>
        </div>

        <div class="space-y-4">
          {appData.chapters.map(ch => (
            <div key={ch.bab} class="bg-white/90 dark:bg-slate-800/95 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <span class="text-xs font-bold text-slate-400 uppercase">Bâb {ch.bab}</span>
              <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-2">{ch.title[lang]}</h3>
              <p class="text-slate-600 dark:text-slate-300 text-sm mb-3">{ch.content[lang]}</p>
              <div class="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl text-xs italic text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700">
                {ch.dalil[lang]}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
