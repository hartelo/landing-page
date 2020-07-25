declare module "prismic-reactjs" {
  interface Elements {
    heading1: "heading1"
    heading2: "heading2"
    heading3: "heading3"
    heading4: "heading4"
    heading5: "heading5"
    heading6: "heading6"
    paragraph: "paragraph"
    preformatted: "preformatted"
    strong: "strong"
    em: "em"
    listItem: "list-item"
    oListItem: "o-list-item"
    list: "group-list-item"
    oList: "group-o-list-item"
    image: "image"
    embed: "embed"
    hyperlink: "hyperlink"
    label: "label"
    span: "span"
  }

  type ElementType = Elements[keyof Elements]

  interface RichTextProps {
    Component?: React.ReactNode
    htmlSerializer?: HTMLSerializer<string>
    linkResolver?: (doc: any) => string
    serializeHyperlink?: (
      type: any,
      element: any,
      content: any,
      children: any,
      index: any
    ) => JSX.Element
    render: any
    renderAsText?(data: any): string
  }

  type HTMLSerializer<T> = (
    type: ElementType,
    element: any,
    text: string | null,
    children: T[],
    index: number
  ) => T

  export class RichText extends React.Component<RichTextProps, any> {
    asText(data: any): string
    asHtml(
      richText: any,
      linkResolver?: (doc: any) => string,
      serializer?: HTMLSerializer<string>
    ): string
    renderRichText(data: any): JSX.Element
    Elements: Elements
  }
}

declare module "prismic-richtext" {
  interface NODE_TYPES {
    heading1: "heading1"
    heading2: "heading2"
    heading3: "heading3"
    heading4: "heading4"
    heading5: "heading5"
    heading6: "heading6"
    paragraph: "paragraph"
    preformatted: "preformatted"
    strong: "strong"
    em: "em"
    listItem: "list-item"
    oListItem: "o-list-item"
    list: "group-list-item"
    oList: "group-o-list-item"
    image: "image"
    embed: "embed"
    hyperlink: "hyperlink"
    label: "label"
    span: "span"
  }

  var _default: {
    asText: any
    asTree: any
    serialize: any
    Elements: NODE_TYPES
  }
  export = _default
}

declare module "prismic-helpers" {
  interface Link {
    url: (link: any, linkResolver: (link: any) => string) => string
  }
  type PrismicDate = (date: string) => Date

  var helpers: {
    Link: Link
    Date: PrismicDate
  }

  export = helpers
}
