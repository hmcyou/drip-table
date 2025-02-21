/**
 * This file is part of the drip-table project.
 * @link     : https://drip-table.jd.com/
 * @author   : qianjing29 (qianjing29@jd.com)
 * @modifier : qianjing29 (qianjing29@jd.com)
 * @copyright: Copyright (c) 2020 JD Network Technology Co., Ltd.
 */
import { Switch } from 'antd';
import React, { ReactNode } from 'react';

import { DTGComponentBaseProperty } from '..';

interface Props extends DTGComponentBaseProperty<string | number | boolean> {
}

export default class SwitchComponent extends React.PureComponent<Props> {
  public static componentName = 'switch';

  private get checked() {
    const uiProps = this.props.schema['ui:props'] || {};
    if (uiProps.checkedValue && uiProps.unCheckedValue) {
      if (this.props.value === uiProps.checkedValue) {
        return true;
      }
      return false;
    }
    if (typeof this.props.value === 'string' || typeof this.props.value === 'number') {
      return false;
    }
    return !!this.props.value;
  }

  private encodeValue(checked: boolean) {
    const uiProps = this.props.schema['ui:props'] || {};
    if (uiProps.checkedValue && uiProps.unCheckedValue) {
      return checked ? uiProps.checkedValue as string | number : uiProps.unCheckedValue as string | number;
    }
    return checked;
  }

  public render() {
    const uiProps = this.props.schema['ui:props'] || {};

    return (
      <Switch
        {...uiProps}
        checked={this.checked}
        checkedChildren={uiProps.checkedChildren as ReactNode || '是'}
        unCheckedChildren={uiProps.uncheckedChildren as ReactNode || '否'}
        onChange={(checked: boolean) => {
          this.props.onChange?.(this.encodeValue(checked));
        }}
      />
    );
  }
}
