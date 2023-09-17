# bun-vite-template

### Requisites:

- having [bun](https://bun.sh/docs/installation) installed locally
- (<span id="optional">optional</span>) having [gitmoji](https://gitmoji.dev) installed locally
  ```bash
  bun add -g gitmoji-cli
  ```

### Usage

Following the [bun docs](https://bun.sh/docs/templates) just run the command bellow

```bash
bun create https://github.com/AVX00/bun-vite-template myNewProject
```

### Next steps

If you decide to use husky for pre commit hooks run the command bellow

```bash
bunx husky install
```

optionally you can use [gitmoji](https://gitmoji.dev) to manage the commit process.

If you don't want to do so just remove the prepare-commit hook from .husky directory and skip [requisite 2](#optional)
