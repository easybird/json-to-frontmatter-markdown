# json-to-frontmatter-markdown

This library is still under construction.
If feature requests, shoot and/or help implement.

-----

Features, the following request, will result in the below markdown file:
```javascript
  jsonToFrontMatterMarkdown({
    frontMatter: [
        { var1: 'this is a string'},
        { var2: 'this is another string'},
    ],
    body: `
      # h1 Heading 8-)
      ## h2 Heading
      ### h3 Heading
      #### h4 Heading
      ##### h5 Heading
      ###### h6 Heading
    `
    })
```  

Result:
```markdown
---
var1: this is a string
var2: this is another string
---

# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
```
