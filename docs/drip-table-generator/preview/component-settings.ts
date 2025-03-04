export default {
  mode: 'add' as 'add' | 'replace',
  components: [
    {
      'ui:type': 'custom::TextComponent',
      type: 'string',
      group: '业务组件',
      fieldKey: 'text_qywxDIIO',
      title: '业务文本',
      attrSchema: [
        {
          name: 'dataIndex',
          required: true,
          'ui:title': '字段选择',
          'ui:type': 'select',
          'ui:props': {
            optionsParam: '$$FIELD_KEY_OPTIONS$$',
          },
          type: 'string',
        },
        {
          name: 'fontSize',
          'ui:title': '字体大小',
          'ui:type': 'number',
          'ui:description': {
            trigger: 'hover',
            type: 'icon',
            title: '控制表格该列默认字体大小，默认单位为“px”，支持手动指定单位后缀。',
          },
          default: 12,
          min: 12,
        },
        {
          name: 'noDataValue',
          'ui:title': '兜底文案',
          'ui:type': 'input',
          'ui:description': {
            trigger: 'hover',
            type: 'icon',
            title: '当数据不下发时展示的兜底文案',
          },
          default: '',
          visible: 'return formData.dataIndex',
        },
        {
          name: 'description',
          'ui:title': '组件说明',
          'ui:type': 'render-html',
          default: '<span style="color:red;">这是一条说明</span>',
        },
      ],
    },
  ],
};
