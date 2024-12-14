import { 
  ShoppingOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined,
  PictureOutlined,
  GiftOutlined,
  EnvironmentOutlined,
  UserOutlined, 
  DashboardOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH} from 'configs/AppConfig';



const navTree = [
  {
    key: 'main',
    path: `${APP_PREFIX_PATH}/main`,
    title: 'sidenav.main',
    icon: '',
    breadcrumb: false,
    submenu: [
      {
        key: 'main-dashboard',
        path: `${APP_PREFIX_PATH}/main/dashboard`,
        title: 'sidenav.main.dashboard',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'main-catalog',
        path: `${APP_PREFIX_PATH}/main/catalog`,
        title: 'sidenav.main.catalog',
        icon: ShoppingCartOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'main-catalog-products',
            path: `${APP_PREFIX_PATH}/main/catalog/products`,
            title: 'sidenav.main.catalog.products',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'main-catalog-categories',
            path: `${APP_PREFIX_PATH}/main/catalog/categories`,
            title: 'sidenav.main.catalog.categories',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'main-catalog-collections',
            path: `${APP_PREFIX_PATH}/main/catalog/collections`,
            title: 'sidenav.main.catalog.collections',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'main-catalog-combo',
            path: `${APP_PREFIX_PATH}/main/catalog/combo`,
            title: 'sidenav.main.catalog.combo',
            icon: '',
            breadcrumb: false,
            submenu: []
          }
        ]
      },
      {
        key: 'main-orders',
        path: `${APP_PREFIX_PATH}/main/orders`,
        title: 'sidenav.main.orders',
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'main-clients',
        path: `${APP_PREFIX_PATH}/main/clients`,
        title: 'sidenav.main.clients',
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'main-clients-list',
            path: `${APP_PREFIX_PATH}/pages/user-list`,
            title: 'sidenav.main.clients.list',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'main-clients-groups',
            path: `${APP_PREFIX_PATH}/main/clients/groups`,
            title: 'sidenav.main.clients.groups',
            icon: '',
            breadcrumb: false,
            submenu: []
          }
        ]
      },
      {
        key: 'main-banners',
        path: `${APP_PREFIX_PATH}/main/banners`,
        title: 'sidenav.main.banners',
        icon: PictureOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'main-promocodes',
        path: `${APP_PREFIX_PATH}/main/promocodes`,
        title: 'sidenav.main.promocodes',
        icon: GiftOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'main-offline-points',
        path: `${APP_PREFIX_PATH}/main/offline-points`,
        title: 'sidenav.main.offline-points',
        icon: EnvironmentOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'main-offline-points-addresses',
            path: `${APP_PREFIX_PATH}/main/offline-points/addresses`,
            title: 'sidenav.main.offline-points.addresses',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'main-offline-points-geozones',
            path: `${APP_PREFIX_PATH}/main/offline-points/geozones`,
            title: 'sidenav.main.offline-points.geozones',
            icon: '',
            breadcrumb: false,
            submenu: []
          }
        ]
      },
      {
        key: 'main-employees',
        path: `${APP_PREFIX_PATH}/main/employees`,
        title: 'sidenav.main.employees',
        icon: TeamOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'main-mailing',
        path: `${APP_PREFIX_PATH}/main/mailing`,
        title: 'sidenav.main.mailing',
        icon: MailOutlined,
        breadcrumb: false,
        submenu: []
      }
    ]
  },
  {
    key: 'system',
    path: `${APP_PREFIX_PATH}/system`,
    title: 'sidenav.system',
    icon: '',
    breadcrumb: false,
    submenu: [
      {
        key: 'system-settings',
        path: `${APP_PREFIX_PATH}/system/settings`,
        title: 'sidenav.system.settings',
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'system-mobile-app',
        path: `${APP_PREFIX_PATH}/system/mobile-app`,
        title: 'sidenav.system.mobile-app',
        icon: MobileOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'system-logs',
        path: `${APP_PREFIX_PATH}/system/logs`,
        title: 'sidenav.system.logs',
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: []
      }
    ]
  }
];



const navigationConfig = [
  ...navTree,

]


export default navigationConfig;
