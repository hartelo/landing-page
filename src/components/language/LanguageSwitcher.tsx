import React from "react"
import { languages, Languages } from "../../../prismic-config"
import { useLangRedirect } from "../../hooks"
import { assertUnreachable } from "../../utils"

const languageMap = (language: Languages): string => {
  switch (language) {
    case "fi":
      return "FI"
    case "en-us":
      return "EN"
    case "sv-se":
      return "SE"
    default:
      return assertUnreachable(language)
  }
}

export const LanguageSwitcher: React.FC = () => {
  const { reload } = useLangRedirect()

  return (
    <>
      {languages.map(lang => (
        <button key={lang} onClick={() => reload(lang)}>
          {languageMap(lang)}
        </button>
      ))}
    </>
  )
}
