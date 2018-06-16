# Palette Zeplin Extension

This utility assists in rapid UI development by providing component snippets from the Palette project directly in Zeplin.

![plugin preview](./assets/plugin-preview.gif)

## Installation

```
$ git clone https://github.com/artsy/palette-zeplin-extension.git
$ cd palette-zeplin-extension
$ yarn install
$ yarn build
$ open dist
```

Then in Zeplin.app, open the `Extensions > Manage Project Extensions` menu. In the extensions window, hold down the <kbd>alt</kbd> key and click the `Add Local Extension` button in the top-right corner. In the modal panel, click the `Browse` button and drag the `manifest.json` file from the Finder window that was opened previously with the `open .` command.
