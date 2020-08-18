import { motion } from "framer-motion"
import React, { useState } from "react"
import styled from "styled-components"
import { LanguageSwitcher } from "./language/LanguageSwitcher"

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <NavigationContainer>
      <p>LEL</p>
      <motion.ul variants={variants}>
        <LanguageSwitcher />
      </motion.ul>
    </NavigationContainer>
  )
}

const NavigationContainer = styled(motion.nav)`
  position: fixed;
  display: flex;
  flex-direction: row;
  background-color: red;
`
