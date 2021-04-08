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

// https://ant.design/docs/react/customize-theme-cn#Ant-Design-%E7%9A%84%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F
module.exports = (themeColor) => {
  return {
    '@primary-color': themeColor,
    '@success-color': 'rgba(0, 183, 121, 1)',
    '@error-color': 'rgba(223, 52, 9, 1)',
    '@warning-color': 'rgba(254, 171, 0, 1)',
    '@link-color': themeColor,
    '@progress-remaining-color': '#E1E7FF',
    '@font-size-base': '14px',
    '@input-height-base': '32px',
    '@input-height-lg': '36px',
    '@input-height-sm': '28px',
    '@btn-height-base': '32px',
    '@btn-height-lg': '36px',
    '@btn-height-sm': '28px',
    '@btn-padding-sm': '0 11px;',
    '@border-radius-base': '3px;',
    '@font-family':
      '"Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Arial, sans-serif',
  };
};
