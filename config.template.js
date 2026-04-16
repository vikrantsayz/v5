// ╔══════════════════════════════════════════════════════════════════════════╗
// ║  𝐕ɪᴋʀᴀɴᴛ ⚡  —  config.template.js                                     ║
// ║  GitHub ke Secrets section mein ye names add karo:                       ║
// ║                                                                           ║
// ║  Secret Name           →  Value                                           ║
// ║  ─────────────────────────────────────────                               ║
// ║  VIKRANT_GROQ_KEY      →  gsk_xxxx... (groq.com)                        ║
// ║  VIKRANT_OR_KEY        →  sk-or-xxxx (openrouter.ai)                    ║
// ║  VIKRANT_HF_TOKEN      →  hf_xxxx... (huggingface.co)                   ║
// ║  VIKRANT_TG_TOKEN      →  1234567:AAHfxxx... (@BotFather se)            ║
// ║  VIKRANT_TG_ADMIN      →  987654321 (@userinfobot se apna ID)           ║
// ║  VIKRANT_ADMIN_PASS    →  koi bhi strong password (admin login ke liye) ║
// ║                                                                           ║
// ║  ⚠️  Is file ko commit karo — config.js ko kabhi commit mat karo!        ║
// ╚══════════════════════════════════════════════════════════════════════════╝

window.VIKRANT_CONFIG = {

  // ─── AI PROVIDERS (Free APIs) ───────────────────────────────────────────

  // ① GROQ — sabse fast, sabse bada free tier ★ RECOMMENDED
  //    Free key: https://console.groq.com/keys
  GROQ_KEY:          '__VIKRANT_GROQ_KEY__',
  GROQ_MODEL:        'llama-3.3-70b-versatile',
  // Other Groq models: 'mixtral-8x7b-32768' | 'gemma2-9b-it' | 'llama3-70b-8192'

  // ② OPENROUTER — 100+ models, many permanently free
  //    Free key: https://openrouter.ai/keys  (no credit card needed)
  OPENROUTER_KEY:    '__VIKRANT_OR_KEY__',
  OPENROUTER_MODEL:  'meta-llama/llama-3.2-3b-instruct:free',
  // Other free OR models:
  //   'google/gemma-2-9b-it:free' | 'qwen/qwen-2-7b-instruct:free'
  //   'mistralai/mistral-7b-instruct:free' | 'microsoft/phi-3-mini-128k-instruct:free'

  // ③ HUGGING FACE — always free inference
  //    Free token: https://huggingface.co/settings/tokens → type: Read
  HF_TOKEN:          '__VIKRANT_HF_TOKEN__',
  HF_MODEL:          'mistralai/Mistral-7B-Instruct-v0.3',

  // ─── NO KEY NEEDED (built-in free services) ────────────────────────────
  //  ✅ Piston API       — code execution, 80+ languages
  //  ✅ Pollinations.ai  — AI image generation, unlimited
  //  ✅ Wikipedia API    — concept search & summaries
  //  ✅ Web Speech API   — voice input / text-to-speech
  //  ✅ LocalStorage     — flashcards, notes, bookmarks, stats

  // ─── TELEGRAM BOT ──────────────────────────────────────────────────────
  //  Step 1: @BotFather → /newbot → token milega
  //  Step 2: @userinfobot → apna Telegram ID milega
  TG_BOT_TOKEN:      '__VIKRANT_TG_TOKEN__',
  TG_ADMIN_ID:        __VIKRANT_TG_ADMIN__,    // number, quotes nahi

  // ─── ADMIN PANEL (👑 King Section) ────────────────────────────────────
  //  Ye password admin panel kholne ke liye chahiye
  //  GitHub Secret mein daalo — kabhi HTML/JS mein hardcode mat karo!
  ADMIN_PASSWORD:    '__VIKRANT_ADMIN_PASS__',

  // ─── APP DEFAULTS (Admin panel se change ho sakte hain) ───────────────
  APP_NAME:          '𝐕ɪᴋʀᴀɴᴛ ⚡',
  APP_AVATAR:        '🧑‍💻',                // emoji ya image URL
  APP_ROLE:          'AI Teacher · CS & Tech',
  APP_DESCRIPTION:   'Your personal AI teacher for CS, Programming, Networking, DSA, AI/ML and everything tech.',
  CUSTOM_INSTRUCTIONS: '',                   // Extra AI instructions

  // ─── BEHAVIOUR ──────────────────────────────────────────────────────────
  DEFAULT_PROVIDER:  'groq',               // 'groq' | 'openrouter' | 'hf'
  AUTO_FALLBACK:     true,                 // provider fail → next try
  MAX_HISTORY:       24,                   // context window messages
  BOT_POLLING:       true,
  BOT_INTERVAL:      4000,
};

// ── Config check (browser console mein dikhega) ─────────────────────────
(function(){
  const c = window.VIKRANT_CONFIG, w = [];
  if (!c.GROQ_KEY || c.GROQ_KEY.includes('__'))        w.push('⚠ Groq key not set');
  if (!c.TG_BOT_TOKEN || c.TG_BOT_TOKEN.includes('__')) w.push('⚠ Telegram token not set');
  if (!c.TG_ADMIN_ID || c.TG_ADMIN_ID === 0)            w.push('⚠ Telegram admin ID not set');
  if (!c.ADMIN_PASSWORD || c.ADMIN_PASSWORD.includes('__')) w.push('⚠ Admin password not set (👑 panel will be locked)');
  if (w.length) { console.group('𝐕ɪᴋʀᴀɴᴛ ⚡ Config Issues'); w.forEach(x=>console.warn(x)); console.groupEnd(); }
  else console.log('%c𝐕ɪᴋʀᴀɴᴛ ⚡ Config ✅ All secrets loaded!','color:#00e5b0;font-weight:bold');
})();
