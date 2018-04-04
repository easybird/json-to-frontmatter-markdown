/* @flow */

type TFrontMatterMarkdown = {
  frontmatter: Array<*>,
  body: string
}

function transformToMarkdownString(frontmatterMarkdown: TFrontMatterMarkdown) {
  console.log('transformToMarkdownString')
  return 'test';
}

export default transformToMarkdownString;
