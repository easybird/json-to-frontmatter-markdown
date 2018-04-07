/* @flow */
type TFrontMatter = {
  [string]: string | Array<string>
};

export type TFrontMatterMarkdown = {
  frontmatter: Array<TFrontMatter>,
  body: string
};

function transformToMarkdownString(frontmatterMarkdown: TFrontMatterMarkdown) {
  let markdownString = `---`;
  frontmatterMarkdown.frontmatter.forEach(frontmatter =>
    Object.entries(frontmatter).forEach(([key, value]) => {
      markdownString = `${markdownString}\n${key}: ${value}`;
    })
  );

  markdownString = `${markdownString}\n---`;
  markdownString = `${markdownString}\n${frontmatterMarkdown.body}`;
  // TODO implement the transform
  return markdownString;
}

export default transformToMarkdownString;
