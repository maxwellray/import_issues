# Import Issues

This is a minimal repository to reproduce WebStorm import
issues when working in a Typescript+pnpm+Turborepo monorepo.

## Problem Description
WebStorm is unable to resolve auto-import for exported members of the installed monorepo package. Import is available 
using `Alt+Enter` context menu.
![Import Suggestion](images/Import%20Suggestion.png "Import Suggestion")

## Setup

### Install
```shell
$ pnpm i
$ pnpm run watch
```

### IDE Configuration
Below are images showing relevant settings for IDE configuration
![Typescript Language Settings](images/Typescript%20Language%20Settings.png "Typescript Language Settings")
![Typescript Code Style Import Settings](images/Typescript%20Code%20Style%20Import%20Settings.png "Typescript Code Style Import Settings")
![Typescript Code Style Import Exact Ignore](images/Typescript%20Code%20Style%20Import%20Exact%20Ignore.png "Typescript Code Style Import Exact Ignore")

## Reproduction of Issue
1. Open `apps/test_app/src/AnotherModule.ts` in the editor
2. Try to access the `myFunction` method in `SomeFile` module via auto-import