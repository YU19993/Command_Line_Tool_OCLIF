oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g greet-cli
$ greet-cli COMMAND
running command...
$ greet-cli (--version)
greet-cli/0.0.0 darwin-x64 node-v20.5.0
$ greet-cli --help [COMMAND]
USAGE
  $ greet-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`greet-cli hello PERSON`](#greet-cli-hello-person)
* [`greet-cli hello world`](#greet-cli-hello-world)
* [`greet-cli help [COMMANDS]`](#greet-cli-help-commands)
* [`greet-cli plugins`](#greet-cli-plugins)
* [`greet-cli plugins:install PLUGIN...`](#greet-cli-pluginsinstall-plugin)
* [`greet-cli plugins:inspect PLUGIN...`](#greet-cli-pluginsinspect-plugin)
* [`greet-cli plugins:install PLUGIN...`](#greet-cli-pluginsinstall-plugin-1)
* [`greet-cli plugins:link PLUGIN`](#greet-cli-pluginslink-plugin)
* [`greet-cli plugins:uninstall PLUGIN...`](#greet-cli-pluginsuninstall-plugin)
* [`greet-cli plugins:uninstall PLUGIN...`](#greet-cli-pluginsuninstall-plugin-1)
* [`greet-cli plugins:uninstall PLUGIN...`](#greet-cli-pluginsuninstall-plugin-2)
* [`greet-cli plugins update`](#greet-cli-plugins-update)

## `greet-cli hello PERSON`

Say hello

```
USAGE
  $ greet-cli hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/Project/greet-cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `greet-cli hello world`

Say hello world

```
USAGE
  $ greet-cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ greet-cli hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [dist/commands/hello/world.ts](https://github.com/Project/greet-cli/blob/v0.0.0/dist/commands/hello/world.ts)_

## `greet-cli help [COMMANDS]`

Display help for greet-cli.

```
USAGE
  $ greet-cli help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for greet-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.17/src/commands/help.ts)_

## `greet-cli plugins`

List installed plugins.

```
USAGE
  $ greet-cli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ greet-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.3.0/src/commands/plugins/index.ts)_

## `greet-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ greet-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ greet-cli plugins add

EXAMPLES
  $ greet-cli plugins:install myplugin 

  $ greet-cli plugins:install https://github.com/someuser/someplugin

  $ greet-cli plugins:install someuser/someplugin
```

## `greet-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ greet-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ greet-cli plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.3.0/src/commands/plugins/inspect.ts)_

## `greet-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ greet-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ greet-cli plugins add

EXAMPLES
  $ greet-cli plugins:install myplugin 

  $ greet-cli plugins:install https://github.com/someuser/someplugin

  $ greet-cli plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.3.0/src/commands/plugins/install.ts)_

## `greet-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ greet-cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ greet-cli plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.3.0/src/commands/plugins/link.ts)_

## `greet-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ greet-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ greet-cli plugins unlink
  $ greet-cli plugins remove
```

## `greet-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ greet-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ greet-cli plugins unlink
  $ greet-cli plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.3.0/src/commands/plugins/uninstall.ts)_

## `greet-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ greet-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ greet-cli plugins unlink
  $ greet-cli plugins remove
```

## `greet-cli plugins update`

Update installed plugins.

```
USAGE
  $ greet-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.3.0/src/commands/plugins/update.ts)_
<!-- commandsstop -->
