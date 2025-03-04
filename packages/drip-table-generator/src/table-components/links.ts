import { DripTableComponentAttrConfig } from '../typing';
import { basicColumnAttrComponents } from './configs';

export default {
  $id: '$display_links',
  'ui:type': 'link',
  type: 'string',
  group: '基础组件',
  fieldKey: 'links_qywxDIIO',
  title: '链接组件',
  paramName: '',
  default: '',
  attrSchema: [
    ...basicColumnAttrComponents,
    {
      name: 'ui:props.mode',
      group: '组件属性',
      'ui:title': '模式',
      'ui:type': 'radio',
      'ui:props': {
        options: [
          { label: '单链接', value: 'single' },
          { label: '多链接', value: 'multiple' },
        ],
      },
      type: 'string',
      default: 'single',
    },
    {
      name: 'ui:props.label',
      group: '组件属性',
      'ui:title': '链接文案',
      'ui:type': 'text',
      default: '',
      visible: (_1: unknown[], formData: Record<string, unknown>) => formData['ui:props.mode'] === 'single',
    },
    {
      name: 'ui:props.href',
      group: '组件属性',
      'ui:title': '链接地址',
      'ui:type': 'text',
      default: '',
      visible: (_1: unknown[], formData: Record<string, unknown>) => formData['ui:props.mode'] === 'single',
    },
    {
      name: 'ui:props.target',
      group: '组件属性',
      'ui:title': '链接打开方式',
      'ui:type': 'text',
      default: '',
      visible: (_1: unknown[], formData: Record<string, unknown>) => formData['ui:props.mode'] === 'single',
    },
    {
      name: 'ui:props.event',
      group: '组件属性',
      'ui:title': '事件名称',
      'ui:description': {
        title: '事件机制详见<a href="http://drip-table.jd.com/drip-table/functions/event" target="_blank">官网文档</a>',
        trigger: 'hover',
        type: 'icon',
      },
      'ui:type': 'text',
      default: '',
      visible: (_1: unknown[], formData: Record<string, unknown>) => formData['ui:props.mode'] === 'single',
    },
    {
      name: 'ui:props.operates',
      group: '组件属性',
      'ui:title': '字段配置',
      'ui:type': 'array-list',
      default: [],
      visible: (_1: unknown[], formData: Record<string, unknown>) => formData['ui:props.mode'] === 'multiple',
      'ui:props': {
        items: [
          {
            name: 'label',
            'ui:title': '链接文案',
            'ui:type': 'input',
            type: 'string',
            default: '',
          },
          {
            name: 'href',
            'ui:title': '链接地址',
            'ui:type': 'input',
            type: 'string',
            default: '',
          },
          {
            name: 'target',
            'ui:title': '链接打开方式',
            'ui:type': 'input',
            type: 'string',
            default: '',
          },
          {
            name: 'event',
            'ui:title': '事件名称',
            'ui:description': {
              title: '事件机制详见<a href="http://drip-table.jd.com/drip-table/functions/event" target="_blank">官网文档</a>',
              trigger: 'hover',
              type: 'icon',
            },
            'ui:type': 'input',
            type: 'string',
            default: '',
          },
        ],
      },
    },
  ],
  icon: '<svg t="1627278690307" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6409" width="48" height="48"><path d="M341.333333 512a42.666667 42.666667 0 0 0 42.666667 42.666667h256a42.666667 42.666667 0 0 0 0-85.333334H384a42.666667 42.666667 0 0 0-42.666667 42.666667z" p-id="6410"></path><path d="M384 682.666667H307.626667A176.213333 176.213333 0 0 1 128 527.786667 170.666667 170.666667 0 0 1 298.666667 341.333333h85.333333a42.666667 42.666667 0 0 0 0-85.333333H307.626667a262.4 262.4 0 0 0-262.826667 222.293333A256 256 0 0 0 298.666667 768h85.333333a42.666667 42.666667 0 0 0 0-85.333333zM981.333333 479.573333A262.826667 262.826667 0 0 0 715.093333 256h-64.426666C616.106667 256 597.333333 275.2 597.333333 298.666667a42.666667 42.666667 0 0 0 42.666667 42.666666h76.373333A176.213333 176.213333 0 0 1 896 496.213333 170.666667 170.666667 0 0 1 725.333333 682.666667h-85.333333a42.666667 42.666667 0 0 0 0 85.333333h85.333333a256 256 0 0 0 256-288.426667z" p-id="6411"></path></svg>',
} as DripTableComponentAttrConfig;
