import { useState, type ComponentType } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import canadaFlag from "@/assets/nav/canada.svg";
import unitedStatesFlag from "@/assets/nav/united-states.svg";

type Country = {
  code: string;
  name: string;
  flag?: string;
  icon?: ComponentType<{ className?: string }>;
};
type Language = { code: string; name: string; short: string };

const COUNTRIES: Country[] = [
  { code: "CA", name: "Canada", flag: canadaFlag },
  { code: "US", name: "United States", flag: unitedStatesFlag },
  { code: "INT", name: "International", icon: Globe },
];

const LANGUAGES: Language[] = [
  { code: "en", name: "English", short: "EN" },
  { code: "fr", name: "Français", short: "FR" },
  { code: "es", name: "Español", short: "ES" },
];

function CountryGlyph({ country }: { country: Country }) {
  if (country.flag) {
    return (
      <img src={country.flag} alt="" aria-hidden className="size-5 rounded-full object-cover" />
    );
  }
  const Icon = country.icon ?? Globe;
  return <Icon className="size-5 text-ink/70" />;
}

export function LocaleToggle() {
  const [countryCode, setCountryCode] = useState("CA");
  const [languageCode, setLanguageCode] = useState("en");
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<"country" | "language" | null>(null);

  const country = COUNTRIES.find((c) => c.code === countryCode) ?? COUNTRIES[0];
  const language = LANGUAGES.find((l) => l.code === languageCode) ?? LANGUAGES[0];

  const toggle = (key: "country" | "language") =>
    setExpanded((prev) => (prev === key ? null : key));

  return (
    <div className="hidden sm:block">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            aria-label={`Country and language: ${country.name}, ${language.name}`}
            className="flex items-center gap-1.5 rounded-full border border-border py-1.5 pl-2.5 pr-2 transition-colors hover:bg-accent"
          >
            <CountryGlyph country={country} />
            <span className="text-sm font-medium text-ink">{language.short}</span>
            <ChevronDown className="size-4 text-ink/50" />
          </button>
        </PopoverTrigger>
        <PopoverContent align="end" className="w-56 p-1">
          {/* Country */}
          <button
            type="button"
            onClick={() => toggle("country")}
            aria-expanded={expanded === "country"}
            className="flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm font-medium text-ink transition-colors hover:bg-accent"
          >
            <span>Country</span>
            <ChevronDown
              className={`size-4 text-ink/50 transition-transform ${
                expanded === "country" ? "rotate-180" : ""
              }`}
            />
          </button>
          {expanded === "country" && (
            <ul className="flex flex-col pb-1">
              {COUNTRIES.map((c) => (
                <li key={c.code}>
                  <button
                    type="button"
                    onClick={() => {
                      setCountryCode(c.code);
                      setOpen(false);
                    }}
                    className="flex w-full items-center justify-between rounded-md py-2 pl-4 pr-2 text-left text-sm text-ink/80 transition-colors hover:bg-accent hover:text-ink"
                  >
                    <span>{c.name}</span>
                    {c.code === countryCode && <Check className="size-4 text-ink/70" />}
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="my-1 border-t border-border" />

          {/* Language */}
          <button
            type="button"
            onClick={() => toggle("language")}
            aria-expanded={expanded === "language"}
            className="flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm font-medium text-ink transition-colors hover:bg-accent"
          >
            <span>Language</span>
            <ChevronDown
              className={`size-4 text-ink/50 transition-transform ${
                expanded === "language" ? "rotate-180" : ""
              }`}
            />
          </button>
          {expanded === "language" && (
            <ul className="flex flex-col pb-1">
              {LANGUAGES.map((l) => (
                <li key={l.code}>
                  <button
                    type="button"
                    onClick={() => {
                      setLanguageCode(l.code);
                      setOpen(false);
                    }}
                    className="flex w-full items-center justify-between rounded-md py-2 pl-4 pr-2 text-left text-sm text-ink/80 transition-colors hover:bg-accent hover:text-ink"
                  >
                    <span>{l.name}</span>
                    {l.code === languageCode && <Check className="size-4 text-ink/70" />}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
}
