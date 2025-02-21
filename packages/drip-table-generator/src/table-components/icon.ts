import { DripTableComponentAttrConfig } from '../typing';
import { generateColumnAttrComponentsByNames, styleAttributesSchema, titleConfig } from './configs';

export default {
  $id: '$display_icons',
  'ui:type': 'icon',
  type: 'string',
  group: '基础组件',
  fieldKey: 'icon_qywxDIIO',
  title: '图标组件',
  paramName: '',
  default: '',
  attrSchema: generateColumnAttrComponentsByNames([
    titleConfig('图标'),
    {
      name: 'options.mode',
      group: '属性',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '图标来源',
      'ui:type': 'radio',
      'ui:props': {
        options: [
          { label: '图标库', value: 'library' },
          { label: '自定义', value: 'custom' },
        ],
      },
      type: 'string',
      default: 'library',
    },
    {
      name: 'options.icon',
      group: '属性',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '内置图标',
      'ui:description': {
        title: '图标样式目前不支持在线配，后面会推出，目前可以通过【配置编辑】功能编写',
        trigger: 'hover',
        type: 'icon',
      },
      'ui:type': 'select',
      'ui:props': {
        optionsParam: '$$PROPS_ICONS_OPTIONS$$',
        allowClear: true,
        style: { width: '100%' },
      },
      default: 'HomeOutlined',
      type: 'string',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] === 'library',
    },
    {
      name: 'options.icon.render',
      group: '属性',
      'ui:title': '自定义图标',
      'ui:type': 'code-editor',
      'ui:layout': {
        labelCol: 6,
        wrapperCol: 18,
        extraRow: true,
        customHelpMsg: true,
      },
      'ui:props': {
        style: {
          height: 120,
          marginTop: '-16px',
          marginBottom: '16px',
        },
      },
      'ui:wrapperStyle': {},
      type: 'string',
      default: 'return "<div style=\'border:1px solid #f00;\'>"+rec.name+"</div>"',
      visible: (_1: unknown, formData?: Record<string, unknown>) => formData?.['options.mode'] === 'custom',
    },
    {
      name: 'options.event',
      group: '属性',
      'ui:layout': { labelCol: 6, wrapperCol: 18 },
      'ui:title': '事件名称',
      'ui:description': {
        title: '点击图标触发的事件名，事件机制详见<a href="https://drip-table.jd.com/drip-table/props/on-event" target="_blank">官网文档</a>',
        trigger: 'hover',
        type: 'icon',
      },
      'ui:type': 'text',
      default: '',
      type: 'string',
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
  icon: '<svg t="1711335449524" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14130" width="64" height="64"><path d="M888.98 281.33L647.05 39.04A23.984 23.984 0 0 0 630.07 32H208c-44.18 0-80 35.82-80 80v800c0 44.18 35.82 80 80 80h608c44.18 0 80-35.82 80-80V298.29c0-6.36-2.52-12.46-7.02-16.96z m-249.21-159L807 289.8H639.77V122.33zM832 912c0 8.82-7.18 16-16 16H208c-8.82 0-16-7.18-16-16V112c0-8.82 7.18-16 16-16h375.77v249.8H832V912z" p-id="14131"></path><path d="M360.54 597.32c-9.95-5.67-25.92-11-47.91-15.97-29.81-5.67-43.65-15.6-41.52-29.81 1.41-14.91 13.13-22.71 35.13-23.42 25.55 0 40.09 11.36 43.65 34.07l45.78-8.52c-8.52-42.59-39.39-63.51-92.63-62.82-50.41 2.13-77.37 22.36-80.91 60.69-1.43 32.65 19.16 53.6 61.75 62.82 6.39 1.43 15.97 4.26 28.75 8.52 4.96 1.43 8.52 2.5 10.65 3.19 19.86 7.1 29.44 17.4 28.75 30.88-1.43 18.47-14.56 28.05-39.39 28.75-31.24 0.71-48.97-15.26-53.23-47.91l-44.72 9.58c9.22 49.69 42.59 74.16 100.08 73.46 55.36-1.43 84.11-23.42 86.24-66.01-0.73-25.56-14.22-44.73-40.47-57.5zM560.44 494.05l-52.17 159.7c-1.43 3.56-3.56 9.58-6.39 18.1-0.72 2.13-1.06 3.56-1.06 4.26h-1.06c-1.43-4.26-3.91-11.71-7.45-22.36l-55.36-159.7H386.9l86.24 222.52h52.17l85.17-222.52h-50.04zM597.45 604.77c2.83 73.11 39.74 111.42 110.73 114.98 51.8 0 85.52-15.97 101.14-47.91v-81.98H698.6v37.26h67.07v31.94c-11.36 15.62-30.18 23.42-56.43 23.42-39.76-2.83-60.69-28.38-62.82-76.66 2.83-46.85 22.71-72.03 59.62-75.59 28.38 0 47.55 11.01 57.49 33l42.59-15.97c-15.62-37.61-49.34-56.43-101.14-56.43-68.13 3.58-103.98 41.54-107.53 113.94z" p-id="14132"></path></svg>',
} as DripTableComponentAttrConfig;
