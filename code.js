const js = `const py = _PY;\nconsole.log(py);`;
const py = `js = _JS\nprint(js)`;
const fnlpy = JSON.stringify(py.replace("_JS", JSON.stringify(js)));
const rslt = js.replace("_PY", fnlpy);
console.log(rslt);