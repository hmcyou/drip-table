---
title: 排序 sorter
toc: content
---

## 排序 columns.sorter

- 描述：数据排序设置
- 类型：`string`
- 默认值：`undefined`
- 注：

1. 函数通过 `props.column` 获取当前列 `schema`；
2. 函数通过 `props.leftValue` 获取当前对比函数左侧数据值；
3. 函数通过 `props.rightValue` 获取当前对比函数右侧数据值；
4. 函数通过 `props.leftRecord` 获取当前对比函数左侧行数据；
5. 函数通过 `props.rightRecord` 获取当前对比函数右侧行数据；
6. 需要配合表格事件 `onSorterChange` 或 `onChange` 调整传入的 `dataSource` 条目顺序，如下示例：

```jsx
/**
 * transform: true
 * defaultShowCode: true
 * hideActions: ["CSB"]
 */
import { message } from "antd";
import React from "react";
import DripTable from "drip-table";

const schema = {
  columns: [
    {
      key: "mock_1",
      title: "商品名称",
      dataIndex: "name",
      component: "text",
      options: { mode: "single", maxRow: 1 },
      sorter: 'return props.leftValue == props.rightValue ? 0 : props.leftValue > props.rightValue ? 1 : -1',
    },
    {
      key: "mock_2",
      title: "商品详情",
      align: "center",
      dataIndex: "description",
      component: "text",
      options: { mode: "single", ellipsis: true, maxRow: 1 },
      sorter: 'return props.leftRecord.description == props.rightRecord.description ? 0 : props.leftRecord.description > props.rightRecord.description ? 1 : -1',
    },
    {
      key: 'mock_3',
      title: '库存状态',
      width: 150,
      align: 'center',
      dataIndex: 'status',
      description: '这是一条提示信息',
      component: 'text',
      options: {
        mode: 'single',
        i18n: {
          onSale: '售卖中',
          soldOut: '已售罄',
        },
      },
      sorter: 'return props.leftValue == props.rightValue ? 0 : props.leftValue > props.rightValue ? 1 : -1',
      sortDirections: ['ascend'],
    },
  ],
};

const dataSource = Array(100).fill(0).map((_, i) => ({
  id: i + 1,
  name: `商品${i + 1}`,
  price: 7999,
  status: Math.random() > 0.5 ? "onSale" : "soldOut",
  description: "商品是为了出售而生产的劳动成果，是人类社会生产力发展到一定历史阶段的产物，是用于交换的劳动产品。",
}));

const Demo = () => {
  const [ds, setDS] = React.useState(dataSource);
  return (
    <DripTable
      schema={schema}
      dataSource={ds}
      onChange={({ sorter }) => {
        if (sorter.comparer) {
          setDS([...dataSource].sort(sorter.comparer))
        } else {
          setDS(dataSource)
        }
        message.info(`排序：${JSON.stringify(sorter)}。`);
        console.log('onChange', sorter);
      }}
    />
  );
};

export default Demo;
```
