# Varnam Webpage Embed Plugin

Embed Varnam input tool in any webpage input fields, contenteditable.

```html
<textarea id="input"></textarea>

<link href="https://api.varnamproject.com/embed.css" rel="stylesheet" />
<script src="https://api.varnamproject.com/embed.js"></script>
<script type="text/javascript">
  const input = document.getElementById("input");
  plugVarnam(input, {
    schemeID: "ml",
  });
</script>
```
