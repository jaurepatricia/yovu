import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import canadaFlag from "@/assets/nav/canada.svg";
import unitedStatesFlag from "@/assets/nav/united-states.svg";

type LocaleCode = "en-CA" | "fr-CA" | "en-US" | "es-US";

const LOCALES: {
  code: LocaleCode;
  flag: string;
  country: string;
  language: string;
}[] = [
  { code: "en-CA", flag: canadaFlag, country: "Canada", language: "English" },
  { code: "fr-CA", flag: canadaFlag, country: "Canada", language: "Français" },
  {
    code: "en-US",
    flag: unitedStatesFlag,
    country: "United States",
    language: "English",
  },
  {
    code: "es-US",
    flag: unitedStatesFlag,
    country: "United States",
    language: "Spanish",
  },
];

const STORAGE_KEY = "yovu-locale";
const DEFAULT_LOCALE: LocaleCode = "en-CA";

export function LocaleToggle() {
  const [locale, setLocale] = useState<LocaleCode>(DEFAULT_LOCALE);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? (localStorage.getItem(STORAGE_KEY) as LocaleCode | null)
        : null;
    const initial = stored && LOCALES.some((l) => l.code === stored) ? stored : DEFAULT_LOCALE;
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
          className="inline-flex size-9 items-center justify-center rounded-full border border-border transition-colors hover:bg-accent"
        >
          <img src={active.flag} alt="" aria-hidden className="size-5 rounded-full object-cover" />
        </button>
      </PopoverTrigger>
      <PopoverContent align="center" className="w-56 p-1">
        <ul className="flex flex-col">
          {LOCALES.map((l) => {
            const isActive = l.code === locale;
            return (
              <li key={l.code}>
                <button
                  onClick={() => select(l.code)}
                  className="flex w-full items-center justify-between gap-3 rounded-md px-2 py-2 text-left text-sm font-medium text-ink/80 transition-colors hover:bg-accent hover:text-ink"
                >
                  <span>
                    {l.country} - {l.language}
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
