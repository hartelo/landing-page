import { motion, Variants } from "framer-motion"
import React, { useMemo, useState } from "react"
import styled from "styled-components"
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
  const [isOpen, setIsOpen] = useState<boolean | null>(null)
  const { reload, currentLanguage } = useLangRedirect()

  const languageOptions = useMemo(() => {
    return (
      <>
        {languages
          .filter(l => l !== currentLanguage)
          .map(lang => (
            <LanguageOption
              key={lang}
              variants={listItemVariants}
              initial={false}
              onClick={() => reload(lang)}
            >
              {languageMap(lang)}
            </LanguageOption>
          ))}
      </>
    )
  }, [currentLanguage, reload])

  return (
    <div>
      <CurrentLanguage onClick={() => setIsOpen(open => !open)}>
        {languageMap(currentLanguage)}
      </CurrentLanguage>
      <LanguageOptionList
        variants={listVariants}
        animate={isOpen ? "open" : "closed"}
        initial={false}
      >
        {languageOptions}
      </LanguageOptionList>
    </div>
  )
}

const listVariants: Variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const listItemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const CurrentLanguage = styled.button`
  background: none;
  border: none;
  padding: 0;
  padding-bottom: 0.35rem;
  text-decoration: none;

  font-size: 1.2rem;
  font-weight: 600;

  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`

const LanguageOption = styled(motion.li)`
  padding: 0.35rem 0;
  font-size: 1.2;

  cursor: pointer;
`

const LanguageOptionList = styled(motion.ul)`
  padding: 0;
  margin: 0;
  list-style-type: none;
`
