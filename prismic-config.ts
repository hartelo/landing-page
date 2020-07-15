export const prismicRepo = "hartelo"
export const defaultLanguage = "fi"
export const langs = ["fi", "en-us", "sv-se"]

export const linkResolver = (doc: any) => {
  if (doc.type === "page") return `/${doc.uid}`
  return "/"
}

export const pages = [
  {
    type: "Homepage",
    match: "/:lang?",
    path: "/:lang?",
    component: require.resolve("./src/templates/Homepage.tsx"),
    langs,
  },
]
