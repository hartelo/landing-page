import { navigate } from "gatsby"
import { useEffect, useState } from "react"
import { defaultLanguage, languages, Languages } from "../../prismic-config"

export const languageItemKey = "preferredLanguage" as const

export function useLangRedirect() {
  const [reloadTrigger, reload] = useState(0)
  const [currentLanguage] = useState<Languages>(
    (localStorage.getItem(languageItemKey) as Languages) ?? defaultLanguage
  )

  useEffect(() => {
    const { languageFromPath, pathWithoutLanguage } = removeLanguageFromPath(
      location.pathname ?? "/"
    )

    const language =
      (localStorage.getItem(languageItemKey) as Languages) ?? defaultLanguage

    if (language !== languageFromPath) {
      const url =
        language === defaultLanguage
          ? pathWithoutLanguage
          : `/${language}${
              pathWithoutLanguage === "/" ? "" : pathWithoutLanguage
            }/`
      // tslint:disable-next-line: no-floating-promises
      navigate(url)
    }
  }, [reloadTrigger])

  return {
    reload: (lang: Languages) => {
      localStorage.setItem(languageItemKey, lang)
      reload(x => x + 1)
    },
    currentLanguage,
  }
}

export function getPreferredSupportedLanguage() {
  const preferredLanguage =
    localStorage.getItem(languageItemKey) ||
    navigator.language.toLocaleLowerCase() ||
    defaultLanguage

  return preferredLanguageToSupportedLanguage(preferredLanguage)
}

function preferredLanguageToSupportedLanguage(preferredLanguage: string) {
  return (
    languages.find(
      lang => lang.substr(0, 2) === preferredLanguage.substr(0, 2)
    ) ?? defaultLanguage
  )
}

function removeLanguageFromPath(path: string) {
  for (const lang of languages) {
    const regex = new RegExp(`^/${lang}(\/|$)`)

    if (regex.test(path)) {
      const pathWithoutLanguage = path.substr(lang.length + 1) || "/"
      return { languageFromPath: lang, pathWithoutLanguage }
    }
  }

  return { languageFromPath: defaultLanguage, pathWithoutLanguage: path }
}
