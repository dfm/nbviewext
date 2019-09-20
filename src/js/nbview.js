(function () {

  console.log("************************");
  console.log("Time for some RENDERING!");
  console.log("************************");

  window.onload = function () {

    var els = document.getElementsByTagName("pre");
    if (els.length < 1) return;
    var notebook = nb.parse(JSON.parse(els[0].textContent));
    var rendered = notebook.render();
    rendered.querySelectorAll('pre code').forEach(function (block) {
      hljs.highlightBlock(block);
    });
    els[0].parentNode.replaceChild(rendered, els[0]);

  };

})();
