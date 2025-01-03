import NProgress from 'nprogress';
import { createRouter, createWebHashHistory } from 'vue-router';

const INTRODUCE = [
  {
    path: '/introduce/explain',
    name: 'explain',
    component: () => import('../view/introduce/explain/index.md'),
    meta: {
      title: '开发说明'
    }
  },
  {
    path: '/introduce/log',
    name: 'log',
    component: () => import('../view/introduce/log/index.md'),
    meta: {
      title: '更新日志'
    }
  }
];

const BASIC = [
  {
    path: '/basic/button',
    name: 'button',
    component: () => import('../view/basic/button/index.md'),
    meta: {
      title: 'Button 按钮'
    }
  },
  {
    path: '/basic/drawer',
    name: 'drawer',
    component: () => import('../view/basic/drawer/index.md'),
    meta: {
      title: 'Drawer 抽屉'
    }
  },
  {
    path: '/basic/modal',
    name: 'modal',
    component: () => import('../view/basic/modal/index.md'),
    meta: {
      title: 'Modal 对话框'
    }
  },
  {
    path: '/basic/tabs',
    name: 'tabs',
    component: () => import('../view/basic/tabs/index.md'),
    meta: {
      title: 'Tabs 标签页'
    }
  },
  {
    path: '/basic/upload',
    name: 'upload',
    component: () => import('../view/basic/upload/index.md'),
    meta: {
      title: 'Upload 上传'
    }
  },
  {
    path: '/basic/form',
    name: 'form',
    component: () => import('../view/basic/form/index.md'),
    meta: {
      title: 'Form 表单'
    }
  },
  {
    path: '/basic/table',
    name: 'table',
    component: () => import('../view/basic/table/index.md'),
    meta: {
      title: 'Table 表格'
    }
  }
];

const BUSINESS = [
  {
    path: '/business/title',
    name: 'title',
    component: () => import('../view/business/title/index.md'),
    meta: {
      title: 'Title 标题'
    }
  },
  {
    path: '/business/footer',
    name: 'footer',
    component: () => import('../view/business/footer/index.md'),
    meta: {
      title: 'Footer 底部固定'
    }
  },
  {
    path: '/business/link',
    name: 'link',
    component: () => import('../view/business/link/index.md'),
    meta: {
      title: 'Link 链接'
    }
  },
  {
    path: '/business/preview-download',
    name: 'previewDownload',
    component: () => import('../view/business/preview-download/index.md'),
    meta: {
      title: 'PreviewDownload'
    }
  },
  {
    path: '/business/page',
    name: 'page',
    component: () => import('../view/business/page/index.md'),
    meta: {
      title: 'Page 页面'
    }
  }
];

export const REDIRECT = {
  path: '/:pathMatch(.*)',
  redirect: INTRODUCE[0].path
};

export const ROUTERS = {
  INTRODUCE,
  BASIC,
  BUSINESS
};

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...INTRODUCE, ...BASIC, ...BUSINESS, REDIRECT],
  scrollBehavior() {
    document.getElementById('container').scrollTop = 0;
  }
});

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
