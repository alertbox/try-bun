# Tryout Bun

[<img align="right" alt="Bun, an incredibly faster all-in-one JS/TS runtime" width="128rem" src="https://camo.githubusercontent.com/cc7b5924f05d4f0743ce6d7969405545cb997e58dec5f9d5f8718011c7d446ae/68747470733a2f2f62756e2e73682f6c6f676f4032782e706e67" />][bun-homepage]

This template repo serves as a flavor of linux-based quick-starter development container for use with [VS Code Remote - Containers and GitHub Codespaces][gh-codespaces-quickstart].

> Originally, this dev container was created to [try out bun without having to install it locally][gh-bun-discussion-win-support], especially on Windows.

### What's in it:

- Bun, all-in-one JS runtime latest binaries
- [VS Code extensions](/.devcontainer/devcontainer.json) for JS/TS and other related work
- Git and GitHub CLI for versioning
- ZSH integrated Terminal for shell
- Docker CLI with Compose v2

[bun-homepage]: https://bun.sh
[gh-codespaces-quickstart]: https://docs.github.com/en/codespaces/getting-started/quickstart
[gh-bun-discussion-win-support]: https://github.com/oven-sh/bun/discussions/361#discussioncomment-3118535



## Using This Template

If you are completely new to bun, [Awesome Bun][awesome-list-bun] is a good source to start with.

Next, you want to create a copy of this template. It is easy as forking. The repo is marked as a `Template` so you will only have to [Use This Template][gh-use-this] and follow the instructions.

[awesome-list-bun]: https://github.com/apvarun/awesome-bun#videos
[gh-use-this]: https://github.com/kosalanuwan/vscode-remote-try-bun/generate



## Things to Try

First, you want to ensure source code is Reopened in Container. Then you'll be able to work with it like you would locally.

With VS Code:
- Open a New Terminal
- Type `bun run test-project/server.js`
  > Browse http://localhost:3000 on your favorite web browser to see the result.

## Feedback

If you have any technical problems with Bun, you are better off [asking Bun's Discord community directly][bun-discord], since you'll end up getting a much faster response back that way.

[bun-discord]: https://bun.sh/discord

## Contributing

The official repo to contribute would be  [@oven-sh/bun][gh-bun-repo].

[gh-bun-repo]: https://github.com/oven-sh/bun/#readme

## License

Copyright (c) Kosala Nuwan Perera. All rights reserved.

The source code is license under the [MIT license](LICENSE).