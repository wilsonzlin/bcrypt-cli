# bcrypt-cli

CLI to generate the bcrypt hash of a plaintext password.

## Usage

```bash
npx @wzlin/bcrypt-cli -p PLAINTEXT_PASSWORD
```

To enter the password in a prompt instead of passing it as part of the command:

```bash
npx @wzlin/bcrypt-cli
```

## Options

### `--password`/`-p`

Password to hash. If omitted, password will be requested via a private prompt.

### `--rounds`/`-r`

Amount of key expansion rounds to do. If omitted, defaults to 15.

## Install

To install it as a command:

```bash
npm i -g bcrypt-cli
```

After installation, it can be used directly:

```bash
bcrypt-cli [...options]
```
