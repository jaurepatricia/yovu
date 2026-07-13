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
type Language = { code: string; name: string };

const COUNTRIES: Country[] = [
  { code: "CA", name: "Canada", flag: canadaFlag },
  { code: "US", name: "United States", flag: unitedStatesFlag },
  { code: "INT", name: "International", icon: Globe },
];

const LANGUAGES: Language[] = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "es", name: "Español" },
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
  const [countryOpen, setCountryOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const country = COUNTRIES.find((c) => c.code === countryCode) ?? COUNTRIES[0];
  const language = LANGUAGES.find((l) => l.code === languageCode) ?? LANGUAGES[0];

  return (
    <div className="hidden items-center gap-2 sm:flex">
      {/* Country selector */}
      <Popover open={countryOpen} onOpenChange={setCountryOpen}>
        <PopoverTrigger asChild>
          <button
            aria-label={`Country: ${country.name}`}
            className="flex items-center gap-1.5 rounded-full border border-border py-1.5 pl-2.5 pr-2 transition-colors hover:bg-accent"
          >
            <CountryGlyph country={country} />
            <ChevronDown className="size-4 text-ink/50" />
          </button>
        </PopoverTrigger>
        <PopoverContent align="center" className="w-52 p-1">
          <ul className="flex flex-col">
            {COUNTRIES.map((c) => (
              <li key={c.code}>
                <button
                  onClick={() => {
                    setCountryCode(c.code);
                    setCountryOpen(false);
                  }}
                  className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-left text-sm text-ink/80 transition-colors hover:bg-accent hover:text-ink"
                >
                  <CountryGlyph country={c} />
                  <span className="flex-1 font-medium text-ink">{c.name}</span>
                  {c.code === countryCode && <Check className="size-4 text-ink/70" />}
                </button>
              </li>
            ))}
          </ul>
        </PopoverContent>
      </Popover>

      {/* Language selector */}
      <Popover open={languageOpen} onOpenChange={setLanguageOpen}>
        <PopoverTrigger asChild>
          <button
            aria-label={`Language: ${language.name}`}
            className="flex items-center gap-1.5 rounded-full border border-border py-1.5 pl-3 pr-2 text-sm font-medium text-ink transition-colors hover:bg-accent"
          >
            {language.name}
            <ChevronDown className="size-4 text-ink/50" />
          </button>
        </PopoverTrigger>
        <PopoverContent align="center" className="w-44 p-1">
          <ul className="flex flex-col">
            {LANGUAGES.map((l) => (
              <li key={l.code}>
                <button
                  onClick={() => {
                    setLanguageCode(l.code);
                    setLanguageOpen(false);
                  }}
                  className="flex w-full items-center justify-between gap-3 rounded-md px-2 py-2 text-left text-sm font-medium text-ink/80 transition-colors hover:bg-accent hover:text-ink"
                >
                  <span>{l.name}</span>
                  {l.code === languageCode && <Check className="size-4 text-ink/70" />}
                </button>
              </li>
            ))}
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
}
