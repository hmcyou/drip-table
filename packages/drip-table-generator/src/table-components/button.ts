import { DripTableComponentAttrConfig } from '../typing';
import { basicColumnAttrComponents } from './configs';

const iconOptions = ['StepBackwardOutlined', 'StepForwardOutlined', 'QuestionCircleOutlined'].map(key => ({ value: key, label: key, icon: key }));

export default {
  $id: '$display_buttons',
  'ui:type': 'button',
  type: 'string',
  group: '基础组件',
  fieldKey: 'buttons_qywxDIIO',
  title: '按钮组件',
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
          { label: '单按钮', value: 'single' },
          { label: '多按钮', value: 'multiple' },
        ],
      },
      type: 'string',
      default: 'single',
    },
    {
      name: 'ui:props.label',
      group: '组件属性',
      'ui:title': '按钮文案',
      'ui:type': 'text',
      default: '',
      visible: (_1: unknown[], formData: Record<string, unknown>) => formData['ui:props.mode'] === 'single',
    },
    {
      name: 'ui:props.icon',
      group: '组件属性',
      'ui:title': '按钮图标',
      'ui:type': 'auto-complete',
      'ui:props': {
        options: iconOptions,
      },
      default: '',
      visible: (_1: unknown[], formData: Record<string, unknown>) => formData['ui:props.mode'] === 'single',
    },
    {
      name: 'ui:props.buttonType',
      group: '组件属性',
      'ui:title': '按钮类型',
      'ui:type': 'radio',
      'ui:props': {
        options: [
          { label: '默认', value: '' },
          { label: '主按钮', value: 'primary' },
          { label: '虚线按钮', value: 'dashed' },
          { label: '文本按钮', value: 'text' },
          { label: '链接按钮', value: 'link' },
        ],
      },
      default: '',
      visible: (_1: unknown[], formData: Record<string, unknown>) => formData['ui:props.mode'] === 'single',
    },
    {
      name: 'ui:props.size',
      group: '组件属性',
      'ui:title': '按钮尺寸',
      'ui:type': 'radio',
      'ui:props': {
        options: [
          { label: '大', value: 'large' },
          { label: '中', value: 'middle' },
          { label: '小', value: 'small' },
        ],
      },
      default: 'middle',
      visible: (_1: unknown[], formData: Record<string, unknown>) => formData['ui:props.mode'] === 'single',
    },
    {
      name: 'ui:props.shape',
      group: '组件属性',
      'ui:title': '按钮形状',
      'ui:type': 'radio',
      'ui:props': {
        options: [
          { label: '圆形', value: 'circle' },
          { label: '圆角', value: 'round' },
          { label: '默认', value: '' },
        ],
      },
      default: '',
      visible: (_1: unknown[], formData: Record<string, unknown>) => formData['ui:props.mode'] === 'single',
    },
    {
      name: 'ui:props.ghost',
      group: '组件属性',
      'ui:title': '是否背景透明',
      'ui:type': 'switch',
      'ui:props': {
        uncheckedChildren: '否',
        checkedChildren: '是',
      },
      default: false,
      visible: (_1: unknown[], formData: Record<string, unknown>) => formData['ui:props.mode'] === 'single',
    },
    {
      name: 'ui:props.danger',
      group: '组件属性',
      'ui:title': '是否危险按钮',
      'ui:type': 'switch',
      'ui:props': {
        uncheckedChildren: '否',
        checkedChildren: '是',
      },
      default: false,
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
      name: 'ui:props.margin',
      group: '组件属性',
      'ui:title': '按钮间隔',
      'ui:type': 'number',
      visible: (_1: unknown[], formData: Record<string, unknown>) => formData['ui:props.mode'] === 'multiple',
    },
    {
      name: 'buttons',
      group: '组件属性',
      'ui:title': '字段配置',
      'ui:type': 'array-list',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      default: [],
      visible: (_1: unknown[], formData: Record<string, unknown>) => formData['ui:props.mode'] === 'multiple',
      'ui:props': {
        items: [
          {
            name: 'label',
            'ui:title': '按钮文案',
            'ui:type': 'input',
            default: '',
            type: 'string',
          },
          {
            name: 'icon',
            'ui:title': '按钮图标',
            'ui:type': 'auto-complete',
            'ui:props': {
              options: iconOptions,
            },
            default: '',
          },
          {
            name: 'buttonType',
            'ui:title': '按钮类型',
            'ui:type': 'radio',
            'ui:props': {
              options: [
                { label: '默认', value: '' },
                { label: '主按钮', value: 'primary' },
                { label: '虚线按钮', value: 'dashed' },
                { label: '文本按钮', value: 'text' },
                { label: '链接按钮', value: 'link' },
              ],
            },
            default: '',
          },
          {
            name: 'size',
            'ui:title': '按钮尺寸',
            'ui:type': 'radio',
            'ui:props': {
              options: [
                { label: '大', value: 'large' },
                { label: '中', value: 'middle' },
                { label: '小', value: 'small' },
              ],
            },
            default: 'middle',
          },
          {
            name: 'shape',
            group: '组件属性',
            'ui:title': '按钮形状',
            'ui:type': 'radio',
            'ui:props': {
              options: [
                { label: '圆形', value: 'circle' },
                { label: '圆角', value: 'round' },
                { label: '默认', value: '' },
              ],
            },
            default: '',
          },
          {
            name: 'ghost',
            group: '组件属性',
            'ui:title': '是否背景透明',
            'ui:type': 'switch',
            'ui:props': {
              uncheckedChildren: '否',
              checkedChildren: '是',
            },
            default: false,
          },
          {
            name: 'danger',
            group: '组件属性',
            'ui:title': '是否危险按钮',
            'ui:type': 'switch',
            'ui:props': {
              uncheckedChildren: '否',
              checkedChildren: '是',
            },
            default: false,
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
  icon: '<svg t="1641556690789" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3528" width="14" height="14"><path d="M789.333333 1024h-554.666666A234.922667 234.922667 0 0 1 0 789.333333v-554.666666C0 105.301333 105.258667 0 234.666667 0h554.666666C918.741333 0 1024 105.301333 1024 234.666667v554.666666c0 129.365333-105.258667 234.666667-234.666667 234.666667zM234.666667 42.666667A192.213333 192.213333 0 0 0 42.666667 234.666667v554.666666C42.666667 895.189333 128.810667 981.333333 234.666667 981.333333h554.666666c105.856 0 192-86.144 192-192v-554.666666C981.333333 128.810667 895.189333 42.666667 789.333333 42.666667h-554.666666z" p-id="3529"></path><path d="M704 725.333333h-384a21.333333 21.333333 0 0 1-21.333333-21.333333v-384a21.333333 21.333333 0 0 1 21.333333-21.333333h384a21.333333 21.333333 0 0 1 21.333333 21.333333v384a21.333333 21.333333 0 0 1-21.333333 21.333333zM341.333333 682.666667h341.333334V341.333333H341.333333v341.333334z" p-id="3530"></path></svg>',
} as DripTableComponentAttrConfig;
