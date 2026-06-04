export type Platform = "iOS" | "macOS" | "Web" | "Chrome";
export type Status = "Live" | "Beta" | "Coming Soon";

export interface Feature {
  icon: string; // Material Symbols name
  title: string;
  description: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  platforms: Platform[];
  tags: string[];
  status: Status;
  /** Material Symbols icon name used when no custom image */
  icon: string;
  /** Tailwind gradient classes for the fallback tile background */
  accent: string;
  /** Path under /public for a real app icon (e.g. /icons/sonance.png) */
  iconImage?: string;
  repo: string;
  downloadUrl?: string;
  downloadLabel?: string;
  features: Feature[];
  howItWorks: string[];
  tech: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    slug: "sonance",
    name: "Sonance",
    tagline: "A real-time chromatic instrument tuner with sub-cent pitch detection.",
    description:
      "Sonance listens through the microphone, detects pitch in real time, and displays tuning feedback on a curved gauge. FFT plus autocorrelation gives sub-cent accuracy for any instrument.",
    platforms: ["iOS"],
    tags: ["iOS", "Audio"],
    status: "Live",
    icon: "graphic_eq",
    accent: "from-[#2D9B63] to-[#E6A821]",
    iconImage: "/icons/sonance.png",
    repo: "https://github.com/ImagineBowl/Sonance",
    downloadUrl: "https://apps.apple.com/app/sonance/id6775628127",
    downloadLabel: "App Store",
    features: [
      { icon: "music_note", title: "Chromatic tuning", description: "Real-time A440 chromatic detection with note name and octave." },
      { icon: "speed", title: "Sub-cent accuracy", description: "FFT plus normalized autocorrelation refine pitch in the time domain." },
      { icon: "tune", title: "Live cent offset", description: "Color-coded feedback shows in-tune, close, and out-of-tune states." },
      { icon: "animation", title: "Animated gauge", description: "A spring-physics needle gauge responds instantly to your playing." },
    ],
    howItWorks: [
      "AVAudioEngine taps the microphone input.",
      "A Hanning-windowed FFT finds the rough pitch.",
      "Autocorrelation refines the frequency for sub-cent precision.",
      "The note and cent offset render on the live gauge.",
    ],
    tech: ["SwiftUI", "AVFoundation", "Accelerate / FFT"],
    featured: true,
  },
  {
    slug: "raven",
    name: "Raven",
    tagline: "A local-first audiobook player with on-device Whisper transcripts.",
    description:
      "Drop audio folders in Files, listen with background playback and lock screen controls, track progress per book and chapter, and generate searchable transcripts locally with Whisper.",
    platforms: ["iOS"],
    tags: ["iOS", "Audio", "AI"],
    status: "Beta",
    icon: "headphones",
    accent: "from-[#1a1a1a] to-[#4a4a4a]",
    iconImage: "/icons/raven.png",
    repo: "https://github.com/ImagineBowl/Raven",
    downloadLabel: "Join Beta",
    features: [
      { icon: "folder", title: "Local library", description: "Drop audiobook folders in Files or add them from inside the app." },
      { icon: "play_circle", title: "Full playback", description: "Speed control, skip, sleep timer, and resume where you left off." },
      { icon: "lock", title: "Background audio", description: "Lock screen and AirPods controls with artwork." },
      { icon: "subtitles", title: "On-device transcripts", description: "WhisperKit transcription with search and SRT/VTT export." },
    ],
    howItWorks: [
      "Add audiobook folders via Files or the in-app picker.",
      "Raven scans and imports your library automatically.",
      "Play with background audio and per-chapter progress.",
      "Generate searchable transcripts locally with Whisper.",
    ],
    tech: ["SwiftUI", "SwiftData", "AVFoundation", "WhisperKit"],
    featured: true,
  },
  {
    slug: "qurandaily",
    name: "QuranDaily",
    tagline: "Read and listen to the Quran daily with synced recitation and translation.",
    description:
      "A native iOS app for reading and listening to the Quran. Browse surahs and juz, read Arabic with translation, search by reference, and follow synced ayah-by-ayah recitation with offline support.",
    platforms: ["iOS"],
    tags: ["iOS"],
    status: "Beta",
    icon: "menu_book",
    accent: "from-[#19c37d] to-[#adc6ff]",
    repo: "https://github.com/ImagineBowl/QuranDaily",
    downloadLabel: "Join Beta",
    features: [
      { icon: "auto_stories", title: "Read", description: "Arabic text with translation, adjustable font size and theme." },
      { icon: "search", title: "Smart search", description: "Find by surah name, ayah reference, or ayah text." },
      { icon: "graphic_eq", title: "Synced audio", description: "Highlight the current ayah and auto-scroll as recitation advances." },
      { icon: "cloud_off", title: "Offline", description: "Download Quran text and recitation for offline use." },
    ],
    howItWorks: [
      "Browse surahs and juz or jump to any ayah.",
      "Read Arabic alongside translation.",
      "Play recitation from any ayah with synced highlighting.",
      "Download content for fully offline reading and listening.",
    ],
    tech: ["SwiftUI", "AVPlayer", "alquran.cloud API"],
  },
  {
    slug: "eqfi",
    name: "EQfi",
    tagline: "An AI-powered system-wide equalizer that auto-tunes your sound with a local LLM.",
    description:
      "EQfi lives in your menu bar, detects what you're listening to, looks up genre metadata, generates an EQ profile with a local LLM (Ollama), and applies it to all system audio — no third-party audio drivers.",
    platforms: ["macOS"],
    tags: ["macOS", "Audio", "AI"],
    status: "Beta",
    icon: "equalizer",
    accent: "from-[#ff7a45] to-[#ffb595]",
    repo: "https://github.com/ImagineBowl/EQfi",
    downloadLabel: "Download",
    features: [
      { icon: "auto_awesome", title: "AI mode", description: "Detects now playing, looks up genre, and generates an EQ with Ollama." },
      { icon: "tune", title: "Manual mode", description: "Eight-band sliders with built-in and custom presets." },
      { icon: "speaker", title: "Native system EQ", description: "Core Audio tap and aggregate device — no third-party drivers." },
      { icon: "shield", title: "Local-first", description: "Ollama runs on your Mac; no cloud AI required." },
    ],
    howItWorks: [
      "EQfi reads now-playing metadata via AppleScript.",
      "Genre is resolved via Spotify or MusicBrainz.",
      "A local LLM generates an eight-band EQ profile.",
      "The profile is applied system-wide through a Core Audio tap.",
    ],
    tech: ["SwiftUI", "Core Audio", "Ollama", "Spotify / MusicBrainz"],
  },
  {
    slug: "viberite",
    name: "VibeRite",
    tagline: "A native writing assistant that improves selected text anywhere, powered by local Ollama.",
    description:
      "A native macOS writing assistant that improves selected text anywhere on your system using local Ollama — a private, system-wide tool with no cloud connectivity.",
    platforms: ["macOS"],
    tags: ["macOS", "AI"],
    status: "Beta",
    icon: "stylus_note",
    accent: "from-[#adc6ff] to-[#7c5cff]",
    repo: "https://github.com/ImagineBowl/VibeRite",
    downloadLabel: "Download",
    features: [
      { icon: "edit_note", title: "Improve anywhere", description: "Refine selected text in any app with a single shortcut." },
      { icon: "shield", title: "Fully private", description: "Runs entirely on local Ollama — nothing leaves your Mac." },
      { icon: "bolt", title: "System-wide", description: "Works across every text field on macOS." },
      { icon: "tune", title: "Your models", description: "Bring your own local model and prompts." },
    ],
    howItWorks: [
      "Select text in any macOS app.",
      "Trigger VibeRite with a global shortcut.",
      "Local Ollama rewrites or improves the selection.",
      "The improved text replaces your selection in place.",
    ],
    tech: ["SwiftUI", "Ollama", "macOS Accessibility"],
  },
  {
    slug: "audioconverter",
    name: "AudioConverter",
    tagline: "A fast, beautiful audio converter supporting MP3, WAV, FLAC, AAC, OGG, and M4A.",
    description:
      "A full-featured audio conversion platform with both browser-based and server-based conversion. Convert between MP3, WAV, FLAC, AAC, OGG, and M4A with a clean, responsive interface.",
    platforms: ["Web"],
    tags: ["Web", "Audio"],
    status: "Live",
    icon: "sync_alt",
    accent: "from-[#4b8eff] to-[#19c37d]",
    repo: "https://github.com/ImagineBowl/AudioConverter",
    downloadLabel: "Open App",
    features: [
      { icon: "library_music", title: "Many formats", description: "Convert between MP3, WAV, FLAC, AAC, OGG, and M4A." },
      { icon: "bolt", title: "Fast conversions", description: "Server-side FFmpeg for quick, reliable processing." },
      { icon: "devices", title: "Responsive", description: "Works beautifully on desktop and mobile." },
      { icon: "lock", title: "Secure", description: "Files are processed securely and never retained." },
    ],
    howItWorks: [
      "Choose your source and target format.",
      "Upload your audio file in the browser.",
      "FFmpeg converts it locally or on the server.",
      "Download the converted file instantly.",
    ],
    tech: ["FFmpeg", "FFmpeg.wasm", "Tailwind CSS", "Node.js"],
  },
  {
    slug: "ai-page-summarizer",
    name: "AI Page Summarizer",
    tagline: "Summarize any webpage in one click, with your choice of local Ollama, ChatGPT, or Gemini Nano.",
    description:
      "An open-source Chrome extension that summarizes the active tab in one click. Pick local Ollama, your ChatGPT browser session, or on-device Gemini Nano — no single vendor lock-in.",
    platforms: ["Chrome"],
    tags: ["Web", "AI"],
    status: "Live",
    icon: "summarize",
    accent: "from-[#7c5cff] to-[#4b8eff]",
    repo: "https://github.com/ImagineBowl/AI-Page-Summarizer",
    downloadLabel: "Get Extension",
    features: [
      { icon: "bolt", title: "One-click summaries", description: "Summarize the active tab right from the popup." },
      { icon: "hub", title: "Three backends", description: "Local Ollama, ChatGPT session, or on-device Gemini Nano." },
      { icon: "shield", title: "Private by default", description: "Default Ollama mode keeps everything on your machine." },
      { icon: "extension", title: "No build step", description: "Plain JavaScript, Manifest V3 — load unpacked and go." },
    ],
    howItWorks: [
      "Open any article or page.",
      "Click the extension and choose your AI backend.",
      "The page text is extracted and summarized.",
      "Read the summary in the popup or via notification.",
    ],
    tech: ["JavaScript", "Manifest V3", "Ollama", "Gemini Nano"],
  },
];

export const GITHUB_ORG = "https://github.com/ImagineBowl";
export const CONTACT_EMAIL = "aminhas933@gmail.com";

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export const platformFilters: ("All" | Platform)[] = [
  "All",
  "iOS",
  "macOS",
  "Web",
];
