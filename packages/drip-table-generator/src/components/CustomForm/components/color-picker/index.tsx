/**
 * This file is part of the drip-table project.
 * @link     : https://drip-table.jd.com/
 * @author   : helloqian12138 (johnhello12138@163.com)
 * @modifier : helloqian12138 (johnhello12138@163.com)
 * @copyright: Copyright (c) 2020 JD Network Technology Co., Ltd.
 */
import 'rc-color-picker/assets/index.css';

import ColorPicker from 'rc-color-picker';
import React from 'react';

import { DTGComponentPropertySchema } from '@/typing';

import styles from './index.module.css';

interface Props {
  schema: DTGComponentPropertySchema;
  fieldOptions?: { label: string; value: string }[];
  value?: string;
  onChange?: (value: string) => void;
}

export default class ColorPickerComponent extends React.PureComponent<Props> {
  /**
   * 将alpha通道值(透明度)转成16进制字符串
   *
   * @private
   * @param {number} alpha alpha通道值(透明度)
   * @returns  {string} 16进制字符串
   *
   * @memberof ColorPickerComponent
   */
  private alphaToHex(alpha: number) {
    const alphaDec = Math.floor((alpha / 100) * 255);
    return alphaDec.toString(16);
  }

  /**
   * 从16进制颜色字符串中提取alpha通道值(透明度)
   *
   * @private
   * @param {string} color 16进制颜色字符串
   * @returns  {number} alpha通道值(透明度)
   *
   * @memberof ColorPickerComponent
   */
  private colorToAlpha(color?: string) {
    if (!color) { return 100; }
    if (color.length === 5) {
      const num = Number.parseInt(color.slice(4), 16);
      return Math.floor((num / 15) * 100);
    }
    if (color.length === 9) {
      const num = Number.parseInt(color.slice(7), 16);
      return Math.floor((num / 255) * 100);
    }
    return 100;
  }

  public render() {
    const uiProps = this.props.schema['ui:props'] || {};
    return (
      <ColorPicker
        placement="bottomLeft"
        alpha={this.colorToAlpha(this.props.value)}
        defaultAlpha={100}
        color={this.props.value}
        defaultColor={uiProps.defaultColor || '#000000'}
        onChange={(colors) => {
          this.props.onChange?.(colors.color + this.alphaToHex(colors.alpha));
        }}
      >
        <span className={styles.trigger} />
      </ColorPicker>
    );
  }
}
