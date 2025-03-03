/**
 * This file is part of the drip-table project.
 * @link     : https://drip-table.jd.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2021 JD Network Technology Co., Ltd.
 */

/**
 * 获取对象指定下标值
 * @param data 基础对象
 * @param indexes 下标或下标数组
 * @param defaultValue 默认值
 * @returns 值
 */
export const indexValue = (data: unknown, indexes: string | string[], defaultValue: unknown = void 0) => {
  if (typeof data !== 'object' || !data) {
    return void 0;
  }
  if (typeof indexes === 'string') {
    return data[indexes];
  }
  if (Array.isArray(indexes)) {
    return indexes.reduce((d, key) => (d ? d[key] : void 0), data);
  }
  return defaultValue;
};

/**
 * 格式化变量用于提供给渲染函数
 * @param v 任意数据
 * @returns 渲染字符串
 */
export const stringify = (v: unknown) => {
  if (typeof v === 'object' && v !== null) {
    try {
      v = JSON.stringify(v);
    } catch {}
  }
  if (v === void 0) {
    return '';
  }
  return String(v);
};
