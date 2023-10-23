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
$ npm install -g default
$ default COMMAND
running command...
$ default (--version)
default/0.0.0 darwin-x64 node-v20.5.0
$ default --help [COMMAND]
USAGE
  $ default COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`default hello PERSON`](#default-hello-person)
* [`default hello world`](#default-hello-world)
* [`default help [COMMANDS]`](#default-help-commands)
* [`default plugins`](#default-plugins)
* [`default plugins:install PLUGIN...`](#default-pluginsinstall-plugin)
* [`default plugins:inspect PLUGIN...`](#default-pluginsinspect-plugin)
* [`default plugins:install PLUGIN...`](#default-pluginsinstall-plugin-1)
* [`default plugins:link PLUGIN`](#default-pluginslink-plugin)
* [`default plugins:uninstall PLUGIN...`](#default-pluginsuninstall-plugin)
* [`default plugins:uninstall PLUGIN...`](#default-pluginsuninstall-plugin-1)
* [`default plugins:uninstall PLUGIN...`](#default-pluginsuninstall-plugin-2)
* [`default plugins update`](#default-plugins-update)

## `default hello PERSON`

Say hello

```
USAGE
  $ default hello PERSON -f <value>

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

_See code: [dist/commands/hello/index.ts](https://github.com/greet-cli/default/blob/v0.0.0/dist/commands/hello/index.ts)_

## `default hello world`

Say hello world

```
USAGE
  $ default hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ default hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [dist/commands/hello/world.ts](https://github.com/greet-cli/default/blob/v0.0.0/dist/commands/hello/world.ts)_

## `default help [COMMANDS]`

Display help for default.

```
USAGE
  $ default help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for default.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.17/src/commands/help.ts)_

## `default plugins`

List installed plugins.

```
USAGE
  $ default plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ default plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.3.0/src/commands/plugins/index.ts)_

## `default plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ default plugins:install PLUGIN...

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
  $ default plugins add

EXAMPLES
  $ default plugins:install myplugin 

  $ default plugins:install https://github.com/someuser/someplugin

  $ default plugins:install someuser/someplugin
```

## `default plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ default plugins:inspect PLUGIN...

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
  $ default plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.3.0/src/commands/plugins/inspect.ts)_

## `default plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ default plugins:install PLUGIN...

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
  $ default plugins add

EXAMPLES
  $ default plugins:install myplugin 

  $ default plugins:install https://github.com/someuser/someplugin

  $ default plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.3.0/src/commands/plugins/install.ts)_

## `default plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ default plugins:link PLUGIN

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
  $ default plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.3.0/src/commands/plugins/link.ts)_

## `default plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ default plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ default plugins unlink
  $ default plugins remove
```

## `default plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ default plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ default plugins unlink
  $ default plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.3.0/src/commands/plugins/uninstall.ts)_

## `default plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ default plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ default plugins unlink
  $ default plugins remove
```

## `default plugins update`

Update installed plugins.

```
USAGE
  $ default plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.3.0/src/commands/plugins/update.ts)_
<!-- commandsstop -->
