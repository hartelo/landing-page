import { motion, Variants } from "framer-motion"
import React, { useMemo, useState } from "react"
import styled from "styled-components"
import { languages, Languages } from "../../../prismic-config"
import { useLangRedirect } from "../../hooks"
import { useStore } from "../../store/Store"
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

export const LanguageSwitcher: React.FC<{ isDesktop?: boolean }> = ({
  isDesktop,
}) => {
  const { state } = useStore()
  const [isOpen, setIsOpen] = useState<boolean | null>(null)
  const { reload, currentLanguage } = useLangRedirect()

  const animateTextColor = state.backgroundColor === "white" ? "green" : "white"

  const languageOptions = useMemo(() => {
    return (
      <>
        {languages
          .filter(l => l !== currentLanguage)
          .map(lang => (
            <motion.div
              variants={listItemVariants(!!isDesktop)}
              initial={false}
            >
              <LanguageOption
                key={lang}
                onClick={() => reload(lang)}
                animate={animateTextColor}
                variants={languageColorVariants}
              >
                {languageMap(lang)}
              </LanguageOption>
            </motion.div>
          ))}
      </>
    )
  }, [currentLanguage, reload])

  return (
    <motion.div animate={animateTextColor}>
      <CurrentLanguage
        variants={languageColorVariants}
        onClick={() => setIsOpen(open => !open)}
      >
        {languageMap(currentLanguage)}
      </CurrentLanguage>
      <LanguageOptionList
        variants={listVariants}
        animate={isOpen ? "open" : "closed"}
        initial={false}
      >
        {languageOptions}
      </LanguageOptionList>
    </motion.div>
  )
}

const languageColorVariants: Variants = {
  white: {
    color: "#ffffff",
  },
  green: {
    color: "#52926c",
  },
}

const listVariants: Variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const listItemVariants = (isDesktop: boolean): Variants => ({
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: isDesktop ? -50 : 50,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
})

const CurrentLanguage = motion.custom(styled.button`
  background: none;
  border: none;
  padding: 0;
  padding-bottom: 0.35rem;
  text-decoration: none;

  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;

  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`)

const LanguageOption = styled(motion.li)`
  padding: 0.35rem 0;
  font-size: 1.2;
  color: #ffffff;

  cursor: pointer;
`

const LanguageOptionList = styled(motion.ul)`
  padding: 0;
  margin: 0;
  list-style-type: none;
  text-align: center;
`
