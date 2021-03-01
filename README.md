# Hello WASM

Base on [console.log](https://rustwasm.github.io/docs/wasm-bindgen/examples/console-log.html) without bundle. Please see results in the console.

<script type="module">
  import init, { run } from './pkg/hello_wasm.js';
  (async function load() { await init(); run(); })();
</script>
