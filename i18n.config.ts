import en from "./lang/en-US.json";
import fr from "./lang/fr-FR.json";
import ar from "./lang/ar-AR.json";
import pl from "./lang/pl-PL.json";

export default defineI18nConfig(() => ({
  legacy: false,
  langDir: "./lang",
  messages: { "en-US": en, "fr-FR": fr, "ar-AR": ar, "pl-PL": pl },
  baseUrl: import.meta.env.VITE_BASE_URL,
  locales: [
    {
      code: "en",
      iso: "en-US",
      isCatchallLocale: true,
    },
    {
      code: "fr",
      iso: "fr-FR",
    },
    {
      code: "ar",
      iso: "ar-AR",
    },
    {
      code: "pl",
      iso: "pl-PL",
    },
  ],
}));
