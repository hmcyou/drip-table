/**
 * This file is part of the drip-table project.
 * @link     : https://drip-table.jd.com/
 * @author   : qianjing29 (qianjing29@jd.com)
 * @modifier : qianjing29 (qianjing29@jd.com)
 * @copyright: Copyright (c) 2020 JD Network Technology Co., Ltd.
 */

import React from 'react';
import MonacoEditor, { monaco as Monaco } from 'react-monaco-editor';

import { DTGComponentBaseProperty } from '..';

interface Props extends DTGComponentBaseProperty<string> {}

export default class CodeEditorComponent extends React.PureComponent<Props> {
  public static componentName = 'code-editor';

  private markerListener?: Monaco.IDisposable;

  public render() {
    const uiProps = this.props.schema['ui:props'] || {};

    return (
      <div style={uiProps.style}>
        <MonacoEditor
          width="100%"
          height={uiProps.style?.height as number || 320}
          language={uiProps.language as string || 'javascript'}
          theme="vs-dark"
          value={this.props.value as string}
          onChange={(value) => { this.props.onChange?.(value || ''); }}
          editorDidMount={(editor, monaco) => {
            this.markerListener?.dispose();
            this.markerListener = monaco.editor.onDidChangeMarkers((uris) => {
              const editorUri = editor.getModel()?.uri;
              if (editorUri) {
                const markerChanged = uris.find(uri => uri.path === editorUri.path);
                if (markerChanged) {
                  const markers = monaco.editor.getModelMarkers({ resource: editorUri });
                  const errorMessages = markers.map(item => item.message).join('\n');
                  this.props.onValidate?.(errorMessages);
                }
              }
            });
          }}
        />
      </div>
    );
  }
}
