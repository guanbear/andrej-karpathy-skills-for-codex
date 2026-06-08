# Andrej Karpathy Skills For Codex

[![License: MIT](https://img.shields.io/badge/License-MIT-0f766e.svg)](LICENSE)
[![Codex Skill](https://img.shields.io/badge/Codex-Skill-111827.svg)](skills/karpathy-guidelines-for-codex/SKILL.md)
[![Plugin Ready](https://img.shields.io/badge/Codex-Plugin%20Ready-2563eb.svg)](.codex-plugin/plugin.json)
[![Release](https://img.shields.io/badge/Release-v0.1.0-7c3aed.svg)](CHANGELOG.md)

[English](README.md)

面向 Codex 的 Karpathy 风格 coding-agent 纪律：先理解，再动手；保持简单；小范围精确修改；定义目标并验证。

这个项目把一组实用的 coding-agent 原则整理成可复用的 Codex skill。它不是为了让 agent 显得更复杂，而是让 Codex 在日常软件开发里更稳：只改真正需要改的地方，并能说明为什么这样改。

> 独立社区项目。灵感来自 Andrej Karpathy 的公开观察和社区 skill 项目。本项目不隶属于 Andrej Karpathy、OpenAI、Multica AI 或 Duola，也不代表它们的官方立场。

## 致谢与灵感来源

这个项目明确致谢并借鉴以下来源：

- Andrej Karpathy 关于 coding agent 行为和失败模式的公开观察，尤其是先理解再改代码、避免大范围无依据修改这类实践原则。
- [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills)：把 Karpathy 风格 coding-agent 指导整理成 Claude Code、Cursor 和可复用 skill 工作流的社区项目。
- [duolahypercho/andrej-karpathy-skills](https://github.com/duolahypercho/andrej-karpathy-skills)：Codex-first 的社区改编版本，帮助验证了 Codex-native 包装形式。

本仓库是面向 Codex 的重新组织和重新表述版本。不声称这些底层思想属于本项目原创，也避免逐字复制上游文本。

## 它给 Codex 增加什么

这个 skill 给 Codex 增加四个工作检查：

1. 先理解，再动手。
2. 保持解法简单。
3. 小范围精确修改。
4. 定义目标并验证结果。

适合在写代码、做 code review、调试 bug、重构代码时使用。

## 作为本地 Skill 安装

在本地 clone 后运行安装脚本：

```bash
./scripts/install-local-skill.sh
```

脚本会把 skill 软链接到：

```text
~/.agents/skills/karpathy-guidelines-for-codex
```

也可以手动把 skill 目录复制到 Codex 会扫描的位置：

```bash
mkdir -p ~/.agents/skills
cp -R skills/karpathy-guidelines-for-codex ~/.agents/skills/
```

如果 Codex 没有立刻识别，重启 Codex。

显式调用：

```text
$karpathy-guidelines-for-codex review this patch
```

也可以自然语言触发：

```text
Apply Karpathy-style coding-agent discipline while fixing this bug.
```

## 作为 Codex Plugin 使用

本仓库包含 Codex plugin manifest：

```text
.codex-plugin/plugin.json
```

本地开发 plugin 时，可以把这个仓库加入 Codex plugin marketplace，或按你的 Codex plugin 发布流程打包。

## 作为 Custom Instructions 使用

如果你不想安装 skill 或 plugin，可以把 [instruction.md](instruction.md) 的内容复制到 Codex Custom Instructions。

## 项目结构

```text
.
├── .codex-plugin/plugin.json
├── skills/karpathy-guidelines-for-codex/SKILL.md
├── instruction.md
├── README.md
├── README.zh-CN.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── SECURITY.md
└── NOTICE.md
```

## 为什么做这个

Coding agent 很强，但也容易出现一些朴素而真实的问题：

- 改太多；
- 解决了一个比用户需求更大的问题；
- 在代码库还没要求之前就发明抽象；
- 跳过验证；
- 把重要假设藏在回答后面。

这个 skill 的作用是把这些失败模式放到台面上。它不是要让 Codex 变慢或变得流程化，而是给 Codex 一个紧凑的工作检查表，让它在真实代码库里更稳。

## 名字说明

仓库名 `andrej-karpathy-skills-for-codex` 更容易搜索，也能直接说明灵感来源。Codex 内部的 skill 名更谨慎：

```text
karpathy-guidelines-for-codex
```

这个拆分是有意的：仓库名方便发现，skill 名避免看起来像官方或本人维护。

## 范围

这个包只面向 Codex。它不包含 `CLAUDE.md`、Cursor rules、Copilot instructions 或其他运行时适配器。

## License

MIT。见 [LICENSE](LICENSE)。
