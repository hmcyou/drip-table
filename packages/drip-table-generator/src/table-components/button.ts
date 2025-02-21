import { DripTableComponentAttrConfig } from '../typing';
import { generateColumnAttrComponentsByNames, styleAttributesSchema, titleConfig } from './configs';

export default {
  $id: '$display_buttons',
  'ui:type': 'button',
  type: 'string',
  group: '基础组件',
  fieldKey: 'buttons_qywxDIIO',
  title: '按钮组件',
  paramName: '',
  default: '',
  attrSchema: generateColumnAttrComponentsByNames([
    titleConfig('按钮'),
    {
      name: 'options.mode',
      group: '属性',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
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
      name: 'options.label',
      group: '属性',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '按钮文案',
      'ui:type': 'text',
      default: '按钮',
      type: 'string',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] === 'single',
    },
    {
      name: 'options.buttonType',
      group: '属性',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '按钮类型',
      'ui:type': 'radio',
      'ui:props': {
        mode: 'button',
        buttonStyle: 'solid',
        size: 'small',
        options: [
          { label: '默认', value: void 0 },
          { label: '主按钮', value: 'primary' },
          { label: '虚线按钮', value: 'dashed' },
          { label: '文本按钮', value: 'text' },
          { label: '链接按钮', value: 'link' },
        ],
      },
      default: void 0,
      type: 'string',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] === 'single',
    },
    {
      name: 'options.size',
      group: '属性',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
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
      type: 'string',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] === 'single',
    },
    {
      name: 'options.shape',
      group: '属性',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '按钮形状',
      'ui:type': 'radio',
      'ui:props': {
        options: [
          { label: '圆形', value: 'circle' },
          { label: '圆角', value: 'round' },
          { label: '默认', value: void 0 },
        ],
      },
      default: void 0,
      type: 'string',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] === 'single',
    },
    {
      name: 'options.ghost',
      group: '属性',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '背景透明',
      'ui:type': 'switch',
      'ui:props': {
        uncheckedChildren: '否',
        checkedChildren: '是',
      },
      default: false,
      type: 'boolean',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] === 'single',
    },
    {
      name: 'options.danger',
      group: '属性',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '危险按钮',
      'ui:type': 'switch',
      'ui:props': {
        uncheckedChildren: '否',
        checkedChildren: '是',
      },
      default: false,
      type: 'boolean',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] === 'single',
    },
    {
      name: 'options.event',
      group: '属性',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '事件名称',
      'ui:description': {
        title: '事件机制详见<a href="https://drip-table.jd.com/drip-table/props/on-event" target="_blank">官网文档</a>',
        trigger: 'hover',
        type: 'icon',
      },
      'ui:type': 'text',
      default: '',
      type: 'string',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] === 'single',
    },
    {
      name: 'options.closePopover',
      group: '属性',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '关闭浮窗ID',
      'ui:type': 'text',
      default: '',
      type: 'string',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] === 'single',
    },
    {
      name: 'options.icon',
      group: '属性',
      'ui:title': '按钮图标',
      'ui:type': 'select',
      'ui:props': {
        optionsParam: '$$PROPS_ICONS_OPTIONS$$',
        allowClear: true,
        style: { width: '100%' },
      },
      type: 'string',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] === 'single',
    },
    {
      name: 'options.iconPosition',
      group: '属性',
      'ui:title': '图标位置',
      'ui:type': 'select',
      'ui:props': {
        options: [{ label: '左', value: 'left' }, { label: '右', value: 'right' }],
        allowClear: true,
        style: { width: '100%' },
      },
      type: 'string',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] === 'single',
    },
    {
      name: 'options.buttons',
      group: '属性',
      'ui:title': '多按钮配置',
      'ui:type': 'array-list',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      default: [],
      type: 'array',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] === 'multiple',
      'ui:props': {
        mode: 'narrow',
        items: [
          {
            name: 'label',
            'ui:title': '按钮文案',
            'ui:description': {
              title: '支持字符串模板写法{{rec.id}}',
              trigger: 'hover',
              type: 'icon',
            },
            'ui:type': 'input',
            default: '',
            type: 'string',
          },
          {
            name: 'buttonType',
            'ui:title': '按钮类型',
            'ui:type': 'select',
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
            group: '属性',
            'ui:title': '按钮形状',
            'ui:type': 'radio',
            'ui:props': {
              mode: 'button',
              buttonStyle: 'solid',
              size: 'small',
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
            group: '属性',
            'ui:title': '背景透明',
            'ui:type': 'switch',
            'ui:props': {
              uncheckedChildren: '否',
              checkedChildren: '是',
            },
            default: false,
          },
          {
            name: 'danger',
            group: '属性',
            'ui:title': '危险按钮',
            'ui:type': 'switch',
            'ui:props': {
              uncheckedChildren: '否',
              checkedChildren: '是',
            },
            default: false,
          },
          {
            name: 'options.icon',
            group: '属性',
            'ui:title': '按钮图标',
            'ui:type': 'select',
            'ui:props': {
              optionsParam: '$$PROPS_ICONS_OPTIONS$$',
              allowClear: true,
              style: { width: '100%' },
            },
            type: 'string',
          },
          {
            name: 'disableFunc',
            group: '属性',
            'ui:title': '禁用判断',
            'ui:type': 'text',
            'ui:props': {
              style: { width: '100%' },
              placeholder: 'value对应dataIndex的值，rec对应rowData的值,return语句写法案例: `return value === 1',

            },
            'ui:description': {
              title: '根据逻辑语句返回的布尔值决定该组件是否被禁用,true为禁用,false为正常',
              trigger: 'hover',
              type: 'icon',
            },
            type: 'string',
          },
          {
            name: 'event',
            'ui:title': '事件名称',
            'ui:description': {
              title: '事件类型为"drip-button-click", 事件机制详见<a href="https://drip-table.jd.com/drip-table/props/on-event" target="_blank">官网文档</a>',
              trigger: 'hover',
              type: 'icon',
            },
            'ui:type': 'input',
            type: 'string',
            default: '',
          },
          {
            name: 'closePopover',
            'ui:title': '关闭浮窗ID',
            'ui:type': 'input',
            type: 'string',
            default: '',
          },
        ],
      },
    },
    {
      name: 'options.margin',
      group: '属性',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '按钮间隔',
      'ui:type': 'number',
      type: 'number',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] === 'multiple',
    },
    {
      name: 'options.popconfirm',
      group: '属性',
      subGroup: '二次确认配置',
      'ui:layout': { labelCol: 8, wrapperCol: 16 },
      'ui:title': '启用二次确认',
      'ui:description': {
        title: '二次确认框仅支持单按钮模式，要在多按钮模式下使用建议搭配组合组件使用',
        trigger: 'hover',
        type: 'icon',
      },
      'ui:type': 'switch',
      type: 'boolean',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] !== 'multiple',
    },
    {
      name: 'options.popconfirm.title',
      group: '属性',
      subGroup: '二次确认配置',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '提示标题',
      'ui:description': {
        title: '支持模板字符串，例如：确认要删除“{{props.record.name}}”？',
        trigger: 'hover',
        type: 'icon',
      },
      'ui:type': 'input',
      type: 'string',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] !== 'multiple' && !!formData?.['options.popconfirm'],
    },
    {
      name: 'options.popconfirm.content',
      group: '属性',
      subGroup: '二次确认配置',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '提示内容',
      'ui:description': {
        title: '确认要执行删除“{{props.record.name}}”这个操作吗？',
        trigger: 'hover',
        type: 'icon',
      },
      'ui:type': 'input',
      type: 'string',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] !== 'multiple' && !!formData?.['options.popconfirm'],
    },
    {
      name: 'options.popconfirm.overlayInnerStyle',
      group: '属性',
      subGroup: '二次确认配置',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '浮窗样式',
      'ui:type': 'switch',
      type: 'boolean',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] !== 'multiple' && !!formData?.['options.popconfirm'],
    },
    {
      name: 'options.popconfirm.overlayInnerStyle.borderRadius',
      group: '属性',
      subGroup: '二次确认配置',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '浮窗圆角半径',
      'ui:type': 'number',
      'ui:props': {},
      type: 'string',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] !== 'multiple' && !!formData?.['options.popconfirm'] && !!formData?.['options.popconfirm.overlayInnerStyle'],
    },
    {
      name: 'options.popconfirm.contentIcon',
      group: '属性',
      subGroup: '二次确认配置',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '提示图标',
      'ui:type': 'select',
      'ui:props': {
        optionsParam: '$$PROPS_ICONS_OPTIONS$$',
        allowClear: true,
        style: { width: '100%' },
      },
      type: 'string',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] !== 'multiple' && !!formData?.['options.popconfirm'],
    },
    {
      name: 'options.popconfirm.contentIconStyle',
      group: '属性',
      subGroup: '二次确认配置',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '提示图标样式',
      'ui:type': 'switch',
      type: 'boolean',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] !== 'multiple' && !!formData?.['options.popconfirm'],
    },
    {
      name: 'options.popconfirm.contentIconStyle.color',
      group: '属性',
      subGroup: '二次确认配置',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '提示图标颜色',
      'ui:type': 'color-picker',
      'ui:props': {},
      type: 'string',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] !== 'multiple' && !!formData?.['options.popconfirm'] && !!formData?.['options.popconfirm.contentIconStyle'],
    },
    {
      name: 'options.popconfirm.contentIconStyle.marginRight',
      group: '属性',
      subGroup: '二次确认配置',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '提示图标右边距',
      'ui:type': 'number',
      type: 'number',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] !== 'multiple' && !!formData?.['options.popconfirm'] && !!formData?.['options.popconfirm.contentIconStyle'],
    },
    {
      name: 'options.popconfirm.placement',
      group: '属性',
      subGroup: '二次确认配置',
      'ui:layout': { labelCol: 8, wrapperCol: 16 },
      'ui:title': '提示框展示位置',
      'ui:type': 'select',
      'ui:props': {
        options: [
          { label: '顶部', value: 'top' },
          { label: '左侧', value: 'left' },
          { label: '右侧', value: 'right' },
          { label: '底部', value: 'bottom' },
          { label: '顶部左侧', value: 'topLeft' },
          { label: '顶部右侧', value: 'topRight' },
          { label: '底部左侧', value: 'bottomLeft' },
          { label: '底部右侧', value: 'bottomRight' },
          { label: '左上', value: 'leftTop' },
          { label: '左下', value: 'leftBottom' },
          { label: '右上', value: 'rightTop' },
          { label: '右下', value: 'rightBottom' },
        ],
      },
      type: 'string',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] !== 'multiple' && !!formData?.['options.popconfirm'],
    },
    {
      name: 'options.popconfirm.cancelText',
      group: '属性',
      subGroup: '二次确认配置',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '取消文案',
      'ui:type': 'input',
      type: 'string',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] !== 'multiple' && !!formData?.['options.popconfirm'],
    },
    {
      name: 'options.popconfirm.cancelStyle',
      group: '属性',
      subGroup: '二次确认配置',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '取消按钮样式',
      'ui:type': 'switch',
      type: 'boolean',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] !== 'multiple' && !!formData?.['options.popconfirm'],
    },
    {
      name: 'options.popconfirm.cancelStyle.color',
      group: '属性',
      subGroup: '二次确认配置',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '取消文字颜色',
      'ui:type': 'color-picker',
      'ui:props': {},
      type: 'string',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] !== 'multiple' && !!formData?.['options.popconfirm'] && !!formData?.['options.popconfirm.cancelStyle'],
    },
    {
      name: 'options.popconfirm.cancelStyle.backgroundColor',
      group: '属性',
      subGroup: '二次确认配置',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '取消按钮背景色',
      'ui:type': 'color-picker',
      'ui:props': {},
      type: 'string',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] !== 'multiple' && !!formData?.['options.popconfirm'] && !!formData?.['options.popconfirm.cancelStyle'],
    },
    {
      name: 'options.popconfirm.cancelStyle.borderRadius',
      group: '属性',
      subGroup: '二次确认配置',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '取消按钮圆角半径',
      'ui:type': 'number',
      type: 'number',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] !== 'multiple' && !!formData?.['options.popconfirm'] && !!formData?.['options.popconfirm.cancelStyle'],
    },
    {
      name: 'options.popconfirm.cancelStyle.height',
      group: '属性',
      subGroup: '二次确认配置',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '取消按钮高度',
      'ui:type': 'input',
      type: 'string',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] !== 'multiple' && !!formData?.['options.popconfirm'] && !!formData?.['options.popconfirm.cancelStyle'],
    },
    {
      name: 'options.popconfirm.cancelStyle.border',
      group: '属性',
      subGroup: '二次确认配置',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '取消按钮边框样式',
      'ui:type': 'input',
      type: 'string',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] !== 'multiple' && !!formData?.['options.popconfirm'] && !!formData?.['options.popconfirm.cancelStyle'],
    },
    {
      name: 'options.popconfirm.cancelStyle.padding',
      group: '属性',
      subGroup: '二次确认配置',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '取消按钮内边距',
      'ui:type': 'input',
      type: 'string',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] !== 'multiple' && !!formData?.['options.popconfirm'] && !!formData?.['options.popconfirm.cancelStyle'],
    },
    {
      name: 'options.popconfirm.cancelStyle.transform',
      group: '属性',
      subGroup: '二次确认配置',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '取消按钮位移',
      'ui:type': 'input',
      type: 'number',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] !== 'multiple' && !!formData?.['options.popconfirm'] && !!formData?.['options.popconfirm.cancelStyle'],
    },
    {
      name: 'options.popconfirm.confirmText',
      group: '属性',
      subGroup: '二次确认配置',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '确认文案',
      'ui:type': 'input',
      type: 'string',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] !== 'multiple' && !!formData?.['options.popconfirm'],
    },
    {
      name: 'options.popconfirm.confirmStyle',
      group: '属性',
      subGroup: '二次确认配置',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '确认按钮样式',
      'ui:type': 'switch',
      type: 'boolean',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] !== 'multiple' && !!formData?.['options.popconfirm'],
    },
    {
      name: 'options.popconfirm.confirmStyle.color',
      group: '属性',
      subGroup: '二次确认配置',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '确认文字颜色',
      'ui:type': 'color-picker',
      'ui:props': {},
      type: 'string',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] !== 'multiple' && !!formData?.['options.popconfirm'] && !!formData?.['options.popconfirm.confirmStyle'],
    },
    {
      name: 'options.popconfirm.confirmStyle.backgroundColor',
      group: '属性',
      subGroup: '二次确认配置',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '确认按钮背景色',
      'ui:type': 'color-picker',
      'ui:props': {},
      type: 'string',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] !== 'multiple' && !!formData?.['options.popconfirm'] && !!formData?.['options.popconfirm.confirmStyle'],
    },
    {
      name: 'options.popconfirm.confirmStyle.borderRadius',
      group: '属性',
      subGroup: '二次确认配置',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '确认按钮圆角半径',
      'ui:type': 'number',
      type: 'number',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] !== 'multiple' && !!formData?.['options.popconfirm'] && !!formData?.['options.popconfirm.confirmStyle'],
    },
    {
      name: 'options.popconfirm.confirmStyle.height',
      group: '属性',
      subGroup: '二次确认配置',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '确认按钮高度',
      'ui:type': 'input',
      type: 'string',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] !== 'multiple' && !!formData?.['options.popconfirm'] && !!formData?.['options.popconfirm.confirmStyle'],
    },
    {
      name: 'options.popconfirm.confirmStyle.border',
      group: '属性',
      subGroup: '二次确认配置',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '确认按钮边框样式',
      'ui:type': 'input',
      type: 'string',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] !== 'multiple' && !!formData?.['options.popconfirm'] && !!formData?.['options.popconfirm.confirmStyle'],
    },
    {
      name: 'options.popconfirm.confirmStyle.padding',
      group: '属性',
      subGroup: '二次确认配置',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '确认按钮内边距',
      'ui:type': 'input',
      type: 'string',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] !== 'multiple' && !!formData?.['options.popconfirm'] && !!formData?.['options.popconfirm.confirmStyle'],
    },
    {
      name: 'options.popconfirm.confirmStyle.transform',
      group: '属性',
      subGroup: '二次确认配置',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '确认按钮位移',
      'ui:type': 'input',
      type: 'number',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] !== 'multiple' && !!formData?.['options.popconfirm'] && !!formData?.['options.popconfirm.confirmStyle'],
    },
    'dataTranslation',
    'disable',
    'hidden',
    'hidable',
    'fixed',
    'sorter',
    'sortDirections',
    'filters',
    'filtersMaxSelect',
    'defaultFilteredValue',
    'description',
    // styles
    'width',
    'align',
    'verticalAlign',
    ...styleAttributesSchema,
  ]),
  icon: '<svg t="1710732389139" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7891" width="64" height="64"><path d="M389.12 671.36a90.24 90.24 0 0 0 37.76-80 90.24 90.24 0 0 0-18.56-58.88 88.32 88.32 0 0 0-54.4-28.8 90.24 90.24 0 0 0 42.24-29.44 85.76 85.76 0 0 0 15.36-51.84 82.56 82.56 0 0 0-28.8-64 124.16 124.16 0 0 0-83.2-24.96H134.4v360.96h165.12a161.28 161.28 0 0 0 89.6-23.04zM192 376.96h96a87.68 87.68 0 0 1 53.76 12.8 45.44 45.44 0 0 1 16.64 39.04 53.12 53.12 0 0 1-16.64 42.88 94.08 94.08 0 0 1-55.04 12.8H192z m0 270.08V529.92h101.76a95.36 95.36 0 0 1 58.24 14.08 54.4 54.4 0 0 1 19.2 46.72 49.28 49.28 0 0 1-24.32 45.44 118.4 118.4 0 0 1-55.04 10.88zM503.04 627.2a71.68 71.68 0 0 0 14.08 48 64 64 0 0 0 49.28 17.28h42.88v-44.16H576a22.4 22.4 0 0 1-14.72-5.12 28.16 28.16 0 0 1-4.48-16V475.52h60.16v-44.16h-60.8V346.24l-53.12 22.4v64H454.4v44.16h48.64zM712.96 535.04a78.72 78.72 0 0 1 21.76-49.92 55.04 55.04 0 0 1 39.68-16c40.96 0 64 22.4 64 64v156.8h53.76V531.2c0-71.68-33.28-107.52-97.92-107.52a93.44 93.44 0 0 0-44.16 10.24 114.56 114.56 0 0 0-34.56 29.44v-32h-56.32v261.12h53.76z" fill="#5A5A5A" p-id="7892"></path><path d="M102.4 870.4h819.2A102.4 102.4 0 0 0 1024 768V256a102.4 102.4 0 0 0-102.4-102.4H102.4A102.4 102.4 0 0 0 0 256v512a102.4 102.4 0 0 0 102.4 102.4zM64 256a38.4 38.4 0 0 1 38.4-38.4h819.2a38.4 38.4 0 0 1 38.4 38.4v512a38.4 38.4 0 0 1-38.4 38.4H102.4A38.4 38.4 0 0 1 64 768z" fill="#5A5A5A" p-id="7893"></path></svg>',
} as DripTableComponentAttrConfig;
