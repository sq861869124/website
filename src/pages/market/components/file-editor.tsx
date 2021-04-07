// Copyright (c) 2021 Terminus, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from 'react';
import 'ace-builds';
import AceEditor, { IAceEditorProps } from 'react-ace';

import 'ace-builds/src-noconflict/ext-searchbox';
import highlight from 'ace-builds/src-noconflict/ext-static_highlight';
import 'ace-builds/src-noconflict/theme-github';

import jsonMode from 'ace-builds/src-noconflict/mode-json';
import shMode from 'ace-builds/src-noconflict/mode-sh';

const supportLang = [
  'json',
];
const modeMap = {
  'ace/mode/json': jsonMode,
  'ace/mode/sh': shMode,
};

interface IProps extends IAceEditorProps{
  fileExtension: string;
  editorProps?: object;
  autoHeight?: boolean;
  options?: object;
  name?: string;
  value?: string;
  [prop: string]: any;
}

const FileEditor = ({ fileExtension, editorProps, options, autoHeight = false, style: editorStyle, name, value, ...rest }: IProps) => {
  const _rest = { ...rest };
  const style: any = { width: '100%', lineHeight: '1.8', ...editorStyle };
  let mode = fileExtension || 'sh';
  if (!supportLang.includes(mode)) {
    mode = 'sh';
  }
  React.useEffect(() => {
    if (!_rest.readOnly) {
      setTimeout(() => {
        // 编辑模式最后一行无法显示，很诡异的问题，需要主动触发一下resize
        window.dispatchEvent(new Event('resize'));
      }, 1000);
    }
  }, [_rest.readOnly]);
  const preDom = React.useRef(null);
  React.useEffect(() => {
    if (preDom.current && value) {
      highlight(preDom.current, {
        mode: new modeMap[`ace/mode/${mode}`].Mode(),
        theme: 'ace/theme/github',
        startLineNumber: 1,
        showGutter: true,
        trim: true,
      });
    }
  }, [mode, value]);
  if (_rest.readOnly) {
    return value ? (
      <pre data-mode={mode} ref={preDom} style={style}>
        {value}
      </pre>
    ) : (
      <pre style={{ height: '300px' }} />
    );
  }
  if (autoHeight) {
    style.height = '100%';
  } else if (!_rest.maxLines) {
    _rest.maxLines = 30;
  }
  return (
    <AceEditor
      mode={mode}
      theme="github"
      fontSize={12}
      style={style}
      editorProps={{ $blockScrolling: true, ...editorProps }}
      setOptions={{ ...options, useWorker: false }} // useWorker为true时切换编辑模式会有个报错
      value={value}
      {..._rest}
    />
  );
};
export default FileEditor;
