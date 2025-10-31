# portfolio

Ray さんのポートフォリオサイトです。

## Setup Guide

### Node version manager

Node.js の実行バージョンをコントロールするために、[mise](https://mise.jdx.dev/)を利用します。
利用しているバージョンは`mise.toml` で確認することができます。

### Node package manager

```bash
$ mise install
$ pnpm install
```

pnpm install で `packages` 内の node_modules も同時にインストールされます。

## Development

以下で記載しているもの以外で使用できるコマンドは `$ pnpm run` 等で確認してください。

### Local server

```bash
$ pnpm dev
```

`localhost` 上で Node サーバーを立ち上げます。これは通常の開発で使用します。
