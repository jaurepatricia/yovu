import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type LocaleCode = "en-CA" | "fr-CA" | "en-US" | "es-MX";

const LOCALES: {
  code: LocaleCode;
  flag: string;
  country: string;
  language: string;
}[] = [
  { code: "en-CA", flag: "🇨🇦", country: "Canada", language: "English" },
  { code: "fr-CA", flag: "🇨🇦", country: "Canada", language: "French" },
  { code: "en-US", flag: "🇺🇸", country: "United States", language: "English" },
  { code: "es-MX", flag: "🇲🇽", country: "Mexico", language: "Spanish" },
];

const STORAGE_KEY = "yovu-locale";

function detectDefault(): LocaleCode {
  if (typeof navigator === "undefined") return "en-CA";
  const nav = navigator.language;
  const match = LOCALES.find((l) => l.code.toLowerCase() === nav.toLowerCase());
  return match?.code ?? "en-CA";
}

export function LocaleToggle() {
  const [locale, setLocale] = useState<LocaleCode>("en-CA");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? (localStorage.getItem(STORAGE_KEY) as LocaleCode | null)
        : null;
    const initial =
      stored && LOCALES.some((l) => l.code === stored) ? stored : detectDefault();
    setLocale(initial);
    document.documentElement.lang = initial;
  }, []);

  const active = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  const select = (code: LocaleCode) => {
    setLocale(code);
    localStorage.setItem(STORAGE_KEY, code);
    document.documentElement.lang = code;
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          aria-label={`Change country and language, current: ${active.country} ${active.language}`}
          className="inline-flex size-9 items-center justify-center rounded-full border border-border text-base leading-none transition-colors hover:bg-accent"
        >
          <span aria-hidden className="text-[18px] leading-none">
            {active.flag}
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-56 p-1">
        <ul className="flex flex-col">
          {LOCALES.map((l) => {
            const isActive = l.code === locale;
            return (
              <li key={l.code}>
                <button
                  onClick={() => select(l.code)}
                  className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-left text-sm text-ink/80 transition-colors hover:bg-accent hover:text-ink"
                >
                  <span aria-hidden className="text-[18px] leading-none">
                    {l.flag}
                  </span>
                  <span className="flex-1">
                    <span className="font-medium text-ink">{l.country}</span>
                    <span className="text-ink/60"> — {l.language}</span>
                  </span>
                  {isActive && <Check className="size-4 text-ink/70" />}
                </button>
              </li>
            );
          })}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
