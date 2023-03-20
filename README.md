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

## Demo

[**See this codepen**](https://codepen.io/subins2000/pen/bGxxBeX)

## Other

Thanks to [this vite template](https://github.com/AndrewBastin/vue3-embedded-library-template) for making things easier.

Release posts:

- https://twitter.com/SubinSiby/status/1637470104626814978?s=19
- https://aana.site/@subins2000/110050565970026218
