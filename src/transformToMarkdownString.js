/* @flow */
import leftPad from "left-pad";

type TFrontMatter = {
  [string]: string | Array<string>
};

export type TFrontMatterMarkdown = {
  frontmatter: Array<TFrontMatter>,
  body: string
};

function newLineAndIndent(markdownString, depth) {
  if (depth === 0) {
    return `${markdownString}\n`;
  }

  return `${markdownString}\n${leftPad('', depth*2)}`;
}

function transformMarkdownKeyValueToString(
  key,
  value,
  markdownString,
  depth = 0
) {
  try {
    if (typeof value === "object") {
      if (value instanceof Array) {
        const arrayString = `${value.map(item => `"${item}"`)}`;
        return `${newLineAndIndent(
          markdownString,
          depth
        )}${key}: [${arrayString}]`;
      } else if (value instanceof Error) {
        return markdownString;
      } else {
        return Object.entries(value).reduce(
          (accString, [entryKey, entryValue]) => {
            return `${transformMarkdownKeyValueToString(
              entryKey,
              entryValue,
              accString,
              depth + 1
            )}`;
          },
          `${newLineAndIndent(markdownString, depth)}${key}:`
        );
      }
    } else {
      return `${newLineAndIndent(markdownString, depth)}${key}: "${value}"`;
    }
  } catch (err) {
    return `${newLineAndIndent(markdownString, depth)}${key}: ${JSON.stringify(
      value
    )}`;
  }
}

function transformToMarkdownString(frontmatterMarkdown: TFrontMatterMarkdown) {
  let markdownString = `---`;
  frontmatterMarkdown.frontmatter.forEach(frontmatterField =>
    Object.entries(frontmatterField).forEach(([key, value]) => {
      markdownString = transformMarkdownKeyValueToString(
        key,
        value,
        markdownString
      );
    })
  );

  markdownString = `${markdownString}\n---`;
  try {
    markdownString = `${markdownString}\n${frontmatterMarkdown.body}`;
  } catch (e) {
    markdownString = `${markdownString}\n${JSON.stringify(
      frontmatterMarkdown.body
    )}`;
  }
  // TODO implement the transform
  return markdownString;
}

export default transformToMarkdownString;
