export interface ProjectRecord {
  slug: string;
  title: string;
  summary: string;
  status: string;
  period: string;
  role: string;
  technologies: string[];
  highlights: string[];
  relatedPost?: string;
  repository?: string;
}

export const projects: ProjectRecord[] = [
  {
    slug: "smart-agriculture",
    title: "SmartAgriculture 智慧农业监测系统",
    summary:
      "一个基于 STM32F407 的课程/实践项目，围绕环境监测与远程控制搭建。项目实现了 LCD1602 数据显示、DHT11 温湿度采集、MQ-2 烟雾检测、光照检测、MPU6050 姿态显示，以及蓝牙远程阈值调节和报警控制。",
    status: "已完成可运行版本，并附带多份调试与集成说明",
    period: "2025",
    role: "独立开发与集成调试",
    technologies: [
      "STM32F407",
      "C",
      "LCD1602",
      "DHT11",
      "MQ-2",
      "MPU6050",
      "蓝牙串口",
      "Keil"
    ],
    highlights: [
      "实现环境数据采集、显示、报警与远程阈值控制的完整链路",
      "蓝牙命令支持双位数字指令，能够查询状态、调整阈值、启停报警",
      "项目仓库内保留了系统调试说明、蓝牙调试指南和 MPU6050 角度显示集成文档，便于继续维护"
    ],
    repository: "https://github.com/erinmi4/SmartAgriculture"
  },
  {
    slug: "embedded-audio-thesis",
    title: "音频事件识别模型的嵌入式部署",
    summary:
      "本科毕设项目，目标是把音频分类模型压缩并部署到 ESP32 一类的嵌入式设备上，完成从数据采集、特征处理到端侧推理的完整链路。",
    status: "已完成初版，持续整理实验与总结",
    period: "2025 - 2026",
    role: "独立完成方案设计、实验验证与部署探索",
    technologies: ["ESP32", "Python", "音频处理", "log-mel", "深度学习部署"],
    highlights: [
      "围绕端侧音频识别搭建完整实验流程，而不是只停留在模型训练阶段",
      "处理了本地录音数据采集、分析与公开数据结合的问题",
      "重点面对相近音频类别难区分、资源受限设备部署成本高的实际挑战"
    ],
    relatedPost: "/posts/毕设总结/"
  },
  {
    slug: "astro-blog-rebuild",
    title: "个人博客重建与维护系统",
    summary:
      "把旧的损坏 GitHub Pages 静态产物重建为基于 Astro 的源码仓库，建立文章、页面、标签、分类、归档、搜索和自动部署的一整套博客工作流。",
    status: "进行中",
    period: "2026",
    role: "需求整理、架构迁移、前端重构、部署流程搭建",
    technologies: ["Astro", "TypeScript", "Markdown", "GitHub Actions", "KaTeX"],
    highlights: [
      "从仅剩发布产物的仓库恢复出可维护的源码结构",
      "建立了 Markdown 内容集合、搜索、数学公式支持与自动部署",
      "把博客从一次性页面改造成长期写作和展示的平台"
    ],
    repository: "https://github.com/erinmi4/erinmi4.github.io"
  },
  {
    slug: "study-workflow",
    title: "修考学习与知识管理工作流",
    summary:
      "围绕修考准备搭建的一套个人学习系统，把 Obsidian、Anki、NotebookLM 和 Gemini 串联起来，用于记录、提问、制卡、复习和任务闭环。",
    status: "持续迭代中",
    period: "2026",
    role: "个人学习系统设计与执行者",
    technologies: ["Obsidian", "Anki", "NotebookLM", "Gemini", "Markdown"],
    highlights: [
      "将课程学习、错题、复习卡片和反思统一纳入一个闭环",
      "降低了多科并行时的信息碎片化问题",
      "后续会继续沉淀为更稳定的长期学习方法"
    ],
    relatedPost: "/posts/如何在多任务需求的情况下有条不紊地完成任务/"
  }
];
