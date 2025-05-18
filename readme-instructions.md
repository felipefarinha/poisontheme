```json
{
  "name": "poison-theme",
  "version": "1.0.0",
  "icon": "assets/icon.jpg",
  "description": "Dark theme Poison for Visual Studio Code.",
  "author": "FelipeFarinha",
  "scripts": {
    "package": "vsce package",
    "publish": "vsce publish"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/felipefarinha/poisontheme.git"
  },
  "keywords": ["theme", "tema", "dark", "color scheme", "poison"],
  "publisher": "vsce create-publisher <Fahryn>,
  "engines": {
    "vscode": "^1.0.0"
  },
  "categories": ["Themes"],
  "contributes": {
    "themes": [
      {
        "label": "Poison",
        "uiTheme": "vs-dark",
        "path": "./themes/Poison-theme.json"
      }
    ]
  },
  "license": "MIT",
  "devDependencies": {
    "vsce": "^2.15.0"
  }
}
```

### Comandos

<code>npm init -y</code>
<code>npm add vsce -D</code>
<code>npm run package</code>
