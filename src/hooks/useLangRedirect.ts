import { navigate } from "gatsby"
import { useEffect } from "react"
import { defaultLanguage, langs } from "../../prismic-config"

const languageItemKey = "preferredLanguage" as const

export function useLangRedirect() {
  useEffect(() => {
    const { languageFromPath, pathWithoutLanguage } = removeLanguageFromPath(
      location.pathname ?? "/"
    )

    const preferredLanguage =
      localStorage.getItem(languageItemKey) ||
      navigator.language.toLocaleLowerCase() ||
      defaultLanguage

    const preferredSupportedLanguage = preferredLanguageToSupportedLanguage(
      preferredLanguage
    )

    if (
      languageFromPath === defaultLanguage &&
      preferredSupportedLanguage !== defaultLanguage
    ) {
      // tslint:disable-next-line: no-floating-promises
      navigate(`/${preferredSupportedLanguage}${pathWithoutLanguage ?? "/"}`)
      return
    }
  }, [])
}

function preferredLanguageToSupportedLanguage(preferredLanguage: string) {
  return (
    langs.find(lang => lang.substr(0, 2) === preferredLanguage.substr(0, 2)) ??
    defaultLanguage
  )
}

function removeLanguageFromPath(path: string) {
  for (const lang of langs) {
    const regex = new RegExp(`^/${lang}(\/|$)`)

    if (regex.test(path)) {
      const pathWithoutLanguage = path.substr(lang.length + 1) || "/"
      return { languageFromPath: lang, pathWithoutLanguage }
    }
  }

  return { languageFromPath: defaultLanguage, pathWithoutLanguage: path }
}
