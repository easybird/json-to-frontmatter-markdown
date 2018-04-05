/* @flow */
type TFrontMatter = {
  [string]: string | Array<string>
}

export type TFrontMatterMarkdown = {
  frontmatter: Array<TFrontMatter>,
  body: string
}

function transformToMarkdownString(frontmatterMarkdown: TFrontMatterMarkdown) {
  // TODO implement the transform
  return 'test';
}

export default transformToMarkdownString;
