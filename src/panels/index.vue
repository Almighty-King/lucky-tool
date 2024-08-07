<script setup lang="ts">
chrome.devtools.inspectedWindow.eval(
    `
      console.log('iframe');
      const iframes = window.document.querySelectorAll('iframe');
      let currentIframe;
      console.log(iframes);
      for (let iframe of iframes) {
        console.log(iframe.src.replace('/iframe', ''), window.location.href)
        if (iframe.src.replace('/iframe', '') === window.location.href) {
          currentIframe = iframe;
          break;
        }
      }

      if (currentIframe) {
        currentIframe.contentWindow.LUCKY_DEV = true;
      }
    `,
    function(result, isException) {
      if (isException) {
        console.log("Error: " + isException.value);
      } else {
        console.log("Success: " + result);
      }
    }
);
</script>

<template>
  <a-avatar>A</a-avatar>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
