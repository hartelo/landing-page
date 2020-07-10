export const prismicRepo = "hartelo"
export const defaultLanguage = "fi"
export const langs = ["fi", "en-us", "sv-fi"]

export const linkResolver = (doc: any) => {
  if (doc.type === "page") return `/${doc.uid}`
  return "/"
}
