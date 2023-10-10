//import { CodeJar } from "https://medv.io/codejar/codejar.js";
import { Codejar } from 'codejar'

const highlight = (editor2) => {
  // highlight.js does not trims old tags,
  // let's do it by this hack.
  editor2.textContent = editor2.textContent;
  hljs.highlightBlock(editor2);
};

const editor2 = document.querySelector(".editor2");
const jar2 = new CodeJar(editor, highlight);

function test() {
    editor2.className = "editor language-html";
    jar2.updateCode(`<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>CodeJar</title>

  <meta name="author" content="Anton Medvedev">
  <meta name="description" content="Micro Code Editor">
</head>
<body>
  <h1>CodeJar — Micro Code Editor</h1>
</body>
</html>`);

    jar2.updateOptions({ tab: "  " });
 
}

test()