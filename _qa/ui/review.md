# 《Moonlit Draw》开场身份识别视觉 QA

## Context

- Game/build: Moonlit Draw，本地 Vite 构建
- Review target: 首次进入的玩家方位交代、`YOU` 标签、首次点击后的标签延续
- Requirements and visual bible: `doc/requirements.md`、`doc/visual.md`
- Viewports/devices: 390×844、320×568，Pointer 输入
- Evidence paths: `player-intro-390x844.png`、`player-wide-390x844.png`、`player-set-390x844.png`、`player-wide-320x568-before.png`、`player-wide-320x568.png`

## Executive assessment

- Decision: Pass with fixes
- Strongest quality: 月夜近景先确认左侧玩家，再自然揭示对手
- Largest risk: 已修复的短屏标题/标签垂直碰撞
- P0/P1/P2 counts: 0 / 0 / 0（修复前 P1：1）

## Scorecard

| Category | Score 1–5 | Evidence | Required action |
|---|---:|---|---|
| Hierarchy | 5 | 玩家近景、`YOU`、双人全景顺序明确 | 无 |
| Coherence | 4 | 标签沿用月光蓝与深蓝系统 | 无 |
| Readability | 4 | 月亮高亮背景上仍有深底、白字和描边箭头 | 无 |
| Game feel | 4 | 点击不被镜头阻塞，SET 状态继续标注 1.1 秒 | 无 |
| Asset quality | 4 | 标签与低多边形道场风格整合 | 无 |
| Responsive UX | 5 | 320×568 无横向溢出，标题与标签间距 30 px | 无 |
| Polish | 4 | 箭头轻微呼吸，支持减少动态 | 无 |

## Finding

- Severity: P1（已修复）
- Screen/location: 320×568 开场全景
- Observation: 初版 `YOU` 标签覆盖副标题的一部分。
- Impact: 身份提示与标题同时降低可读性。
- Concrete fix: 高度小于 650 px 时将标题上收至 24 px，并缩短副标题间距、字号。
- Verification evidence: `player-wide-320x568-before.png` → `player-wide-320x568.png`

## Foundation audit

- Functional emoji icons: 严格审计无发现；新增身份箭头为 SVG。
- Icon-family consistency: 使用现有内联实心 SVG 语言。
- Touch targets: 本次无新增交互控件；全屏 Pointer 区域不变。
- Contrast and color independence: `YOU` 白字深底，并用月光蓝箭头指向角色。
- Focus and input behavior: 运镜不锁输入；首次点击仍立即进入等待态。
- State coverage: 检查 ATTRACT 近景、ATTRACT 全景、SET 与短屏全景。
- Localization and overflow: `YOU` 为短标签；320 px 宽无水平溢出。

## Art-direction audit

- Palette and typography: 月光蓝、深夜蓝与 Oswald HUD 一致。
- Composition: 标签位于左侧人物头顶，不遮挡对手或底部操作提示。
- Asset perspective/lighting/detail: 3D 角色、道场与既有光照未改变。
- UI/world integration: 标签使用逐帧世界坐标投影，不会与角色脱节。
- Motion and VFX: 280 ms 停留 + 1.35 秒拉远；减少动态模式跳过运镜。

## Iteration evidence

- First-pass captures: `player-wide-320x568-before.png`
- Fixes completed: 短屏标题区上收。
- Matched recheck captures: `player-wide-320x568.png`
- Remaining exceptions and reasons: 无。

## Final recommendation

- Final average: 4.3
- Categories below 3: 0
- Decision: Pass
