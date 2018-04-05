import path from 'path';
import transformAndWriteToFile from '../index';

test('can transformAndWriteToFile', () => {
  const smallMarkdownBody = `
        # h1 Heading 8-)
        ## h2 Heading
        ### h3 Heading
        #### h4 Heading
        ##### h5 Heading
        ###### h6 Heading
        `

  return transformAndWriteToFile({
    frontmatterMarkdown: {
      frontmatter: [
        { key: 'content'},
        { anotherKey: 'otherContent'}
      ],
      body: smallMarkdownBody
    },
    path: path.join(__dirname, 'snapshots'),
    fileName: 'test.md'
  });
})
