/* @flow */
import type { TFrontMatterMarkdown} from './transformToMarkdownString';
import transformToMarkdownString from './transformToMarkdownString';
import writeToFile from './writeToFile';

type TTransformFrontMatterMarkdown = { frontmatterMarkdown: TFrontMatterMarkdown, path: string, fileName: string };

function transformAndWriteToFile({frontmatterMarkdown, path, fileName}: TTransformFrontMatterMarkdown) {
  const transformedMarkdown = transformToMarkdownString(frontmatterMarkdown)
  return writeToFile({ content: transformedMarkdown, path, fileName});
}

export default transformAndWriteToFile
