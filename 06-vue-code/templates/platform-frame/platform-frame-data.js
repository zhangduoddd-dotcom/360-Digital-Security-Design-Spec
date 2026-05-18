window.PLATFORM_FRAME_CONFIG = {
  icons: {
    logo: './asset/icons/svg_21e691e3.svg',
    defaultMenu: './asset/icons/svg_1f7be3ff.svg',
    arrowDown: './asset/icons/svg_c4750d0b.svg',
    collapse: './asset/icons/svg_c7bf2c0f.svg',
    back: './asset/icons/svg_9875e337.svg',
    system: './asset/icons/svg_ca19bca3.svg',
    visual: './asset/icons/svg_eaa4c907.svg',
    notice: './asset/icons/svg_2b713e10.svg',
    user: './asset/icons/svg_e33526de.svg'
  },

  topStatus: {
    text: '360全网安全大脑持续守护',
    days: 328,
    subscriptionCount: 8,
    organizationName: '总公司全局',
    userName: '超级管理员'
  },

  topPopovers: {
    organizationPopover: ['总公司全局', '华北一区', '华东一区'],
    noticePopover: ['暂无未读通知', '查看消息中心'],
    settingPopover: ['系统设置', '偏好设置'],
    userPopover: ['个人中心', '账号设置', '退出登录']
  },

  topNavData: [
    { id: 'home', label: '首页' },
    { id: 'intel', label: '情报' },
    { id: 'alert', label: '告警', children: ['告警列表', '告警规则', '告警统计'] },
    { id: 'linkage', label: '联动' },
    { id: 'special', label: '专项' },
    { id: 'config', label: '配置', active: true, children: ['业务管理', '平台配置', '系统管理'] }
  ],

  menuData: [
    {
      id: 'business',
      label: '业务管理',
      icon: './asset/icons/svg_1f7be3ff.svg',
      expanded: true,
      children: [
        {
          id: 'log-access',
          label: '日志接入管理',
          active: true,
          expanded: true,
          children: [
            { id: 'new-log-source', label: '新增日志源' },
            { id: 'collect-task', label: '采集任务配置' },
            { id: 'parse-template', label: '解析规则模板' }
          ]
        },
        { id: 'multi-source', label: '多源信息接入管理' },
        { id: 'ai-token', label: 'AI Token 授权' },
        { id: 'platform-auth', label: '平台授权' }
      ]
    },
    { id: 'upgrade', label: '升级管理', icon: './asset/icons/svg_1f7be3ff.svg' },
    {
      id: 'system',
      label: '系统管理',
      icon: './asset/icons/svg_1f7be3ff.svg',
      expanded: false,
      children: [
        { id: 'user-center', label: '用户中心' },
        { id: 'role-permission', label: '角色权限' },
        { id: 'audit-log', label: '审计日志' },
        { id: 'platform-config', label: '平台配置' },
        { id: 'network-config', label: '网络配置' },
        { id: 'general-config', label: '通用配置' }
      ]
    },
    { id: 'disabled-demo', label: '禁用菜单示例', icon: './asset/icons/svg_1f7be3ff.svg', disabled: true }
  ],

  defaultActiveTop: 'config',
  defaultActiveMenu: 'log-access'
};