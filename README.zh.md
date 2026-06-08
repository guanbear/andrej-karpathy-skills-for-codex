# Andrej Karpathy Skills For Codex

面向 Codex 的 Karpathy 风格 coding-agent 纪律：先理解，再动手；保持简单；小范围精确修改；定义目标并验证。

本项目不是 Andrej Karpathy 官方项目，也不是 OpenAI 官方项目。

## 致敬与借鉴

这个项目明确致敬并借鉴：

- Andrej Karpathy 关于 coding agent 行为问题的公开观察。
- [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills)：把 Karpathy 风格指导整理成 Claude Code、Cursor 和通用 skill 的社区项目。
- [duolahypercho/andrej-karpathy-skills](https://github.com/duolahypercho/andrej-karpathy-skills)：Codex-first 的社区改编版本。

本项目是为 Codex 重新组织和表述的版本，不逐字复制上游文本，也不声称这些思想属于本项目原创。

## 名字是否合适

`andrej-karpathy-skills-for-codex` 好懂、好搜，但公开发布时会稍微显得像官方或本人维护。更稳妥的展示名是：

```text
karpathy-guidelines-for-codex
```

仓库名继续叫 `andrej-karpathy-skills-for-codex` 也可以，只要 README 和 attribution 写清楚“借鉴/启发/非官方”。

## 它做什么

这个 skill 让 Codex 在写代码、改 bug、review、重构时遵循四个检查：

1. 先理解，再动手。
2. 保持实现简单。
3. 只改任务需要的地方。
4. 定义目标并做最小有效验证。

## License

上游社区项目使用 MIT License，本项目也使用 MIT License。
