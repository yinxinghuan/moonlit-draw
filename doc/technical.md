# 《Moonlit Draw》技术文档

## 1. 技术栈

- JavaScript ES Modules、Three.js `0.160.0`、WebGL、Web Audio API。
- Vite `5.x` 构建，`base: './'`，产物输出至 `dist/`。
- HTML/CSS HUD 覆盖在 Three.js Canvas 之上，平台能力通过 `aigram-bridge.js` 接入。

## 2. 目录结构

- `index.html`：HUD、身份标签、结算页、榜单、输入绑定与平台 API。
- `game.js`：决斗状态机、相机、3D 场景、持刀动作、刀光粒子和程序化音频。
- `cartridge/moonlit-dojo.js`：月夜道场文案、角色池、数值、颜色与刀法配置。
- `builders/`、`lib/prims.js`：低多边形角色与几何体构建。
- `public/`：平台桥接和封面；`_qa/ui/`：关键状态的视觉复验证据。

## 3. 核心模块

- 状态机：`ATTRACT → SET → DRAW → RESOLVE → DEAD`；首次点击只从展示态进入等待态。
- 开场识别：`introClock` 驱动玩家近景到双人全景；玩家头部世界坐标逐帧投影为 HUD 坐标，`markerHold` 控制标签消失时间；减少动态偏好下直接使用全景但保留标签。
- 响应式相机：根据水平视场和 `FRAME_HALF_W` 计算 `camZ`，窄屏仍同时容纳双方。
- 排行榜与存储：最佳反应写入 `moonlit-draw.best`；平台可用时提交胜场并读取排行榜、发送超越通知。
- 音频：首次交互解锁 AudioContext，振荡器与噪声生成环境、提示、刀声和结果音效。

## 4. 扩展点

- 改反应难度：修改 `cartridge/moonlit-dojo.js` 的 `tuning`。
- 改开场镜头：修改 `game.js` 的 `snapToPlayerIntro()`、`updateCamera()` 和 `markerHold`。
- 改身份标签样式/文案：修改 `index.html` 的 `#playerId` 与 `cartridge/moonlit-dojo.js` 的 `copy.playerLabel`。
- 换角色或场景：修改 `builders/` 与 cartridge 的 `fighters`、`world`、`colors`。
- 加平台能力：在 `index.html` 现有 `window.Aigram` 排行榜流程附近扩展。
