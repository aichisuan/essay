import {
  SettingOutlined,
  DashboardOutlined,
} from '@ant-design/icons-vue';
import type { VNode } from 'vue';


const getMyComponend = (component: VNode) => ({
  render: () => component,
});

// 
export const settingOutlinedIcon = getMyComponend(SettingOutlined as unknown as VNode);

export const dashboardOutlinedIcon = getMyComponend(DashboardOutlined as unknown as VNode);

