export const prismicRepo = "hartelo"
export const defaultLanguage = "fi" as const
export const languages = ["fi", "en-us", "sv-se"] as const

export type Languages = ElementType<typeof languages>

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
    langs: languages,
  },
]

type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never
