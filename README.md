# json-to-frontmatter-markdown

This library has only one feature:
Transform a javascript object to markdown with frontmatter, and write it to a markdown file on a specified location.
-----

The following request, will result in the below markdown file on location /Users/user/path/to/dir/fileName.md:
```javascript
  transformAndWriteToFile({
    frontmatterMarkdown: {
      frontMatter: [
        { var1: 'this is a string'},
        { var2: ['this is an array', 'element2']},
      ],
      body: `
        # h1 Heading 8-)
        ## h2 Heading
        ### h3 Heading
        #### h4 Heading
        ##### h5 Heading
        ###### h6 Heading
        `
      },
      path: '/Users/user/path/to/dir',
      fileName: 'fileName.md'
    })
```  

Result:
```markdown
---
var1: this is a string
var2: this is an array,element2
---
# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
```

----
If you have a feature request or issues, don't hesitate to log an issue.🙏
