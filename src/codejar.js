import { CodeJar } from "codejar";
  import Prism from 'prismjs';
  import {withLineNumbers} from 'codejar/linenumbers';

const node = document.querySelector(".editor");

const rainbow = (ch, i) => {
  let red = Math.round(Math.sin(0.01 * i + 0) * 127 + 128);
  let green = Math.round(Math.sin(0.01 * i + (2 * Math.PI) / 3) * 127 + 128);
  let blue = Math.round(Math.sin(0.01 * i + (4 * Math.PI) / 3) * 127 + 128);
  return `<span style="color: rgb(${red}, ${green}, ${blue})">{ch}</span>`;
};

const lolcat = (editor) => {
  const code = editor.textContent.split("").map(rainbow).join("");
  editor.innerHTML = code;
};

const jar = CodeJar(node, lolcat);

jar.updateCode((editor) => {
  const code = editor.textContent;
  editor.innerHTML = code;
});

const content = (editor) => {
  const code = editor.textContent;
  editor.innerHTML = code;
};

jar.updateCode(content);