# webpack-vue-ts
# this is a demo of how to config webpack
# but i met a error follow:
#   Uncaught TypeError: Cannot set property 'render' of undefined
#   at normalizeComponent...
# it may caused by empty scripts blocks(https://github.com/vuejs/vue-cli/issues/2430)
# when I remove the script block it work but it is not the right answer;