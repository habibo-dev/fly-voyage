"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import { pick, t, type Locale } from "./copy";

interface LangState {
  locale: Locale;
  dir: "ltr" | "rtl";
  setLocale: (locale: Locale) => void;
}

const LangContext = createContext<LangState>({
  locale: "fr",
  dir: "ltr",
  setLocale: () => {},
});

export function LanguageProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const value = useMemo<LangState>(() => {
    return {
      locale,
      dir: locale === "ar" ? "rtl" : "ltr",
      setLocale: (next) => {
        if (next === locale) return;
        void fetch("/api/lang", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ locale: next }),
        }).finally(() => {
          window.location.reload();
        });
      },
    };
  }, [locale]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

/** Locale-aware translation lookup. */
export function useT() {
  const { locale } = useLang();
  return (path: string) => t(locale, path);
}

/** Locale-aware picker for localized content values. */
export function usePick() {
  const { locale } = useLang();
  return (value: { fr: string; ar: string }) => pick(locale, value);
}
