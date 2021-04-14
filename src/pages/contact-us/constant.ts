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
import i18n from '~/i18n';

export const COMPANY_SIZE = [
  { value: i18n.t('20 people or less'), name: i18n.t('20 people or less') },
  { value: i18n.t('21-100 people'), name: i18n.t('21-100 people') },
  { value: i18n.t('101-500 people'), name: i18n.t('101-500 people') },
  { value: i18n.t('501-1000 people'), name: i18n.t('501-1000 people') },
  { value: i18n.t('More than 1000 people'), name: i18n.t('More than 1000 people') },
];

export const IT_SIZE = [
  { value: i18n.t('10 people or less'), name: i18n.t('10 people or less') },
  { value: i18n.t('11-50 people'), name: i18n.t('11-50 people') },
  { value: i18n.t('51-100 people'), name: i18n.t('51-100 people') },
  { value: i18n.t('101-200 people'), name: i18n.t('101-200 people') },
  { value: i18n.t('More than 200 people'), name: i18n.t('More than 200 people') },
];


export const PURPOSE = [
  { value: i18n.t('corporate business consulting'), name: i18n.t('corporate business consulting') },
  { value: i18n.t('join as a partner'), name: i18n.t('join as a partner') },
  { value: i18n.t('personal study'), name: i18n.t('personal study') },
  { value: i18n.t('other'), name: i18n.t('other') },
];

export const NAME_MAP = {
  realname: i18n.t('actual name'),
  mobile: i18n.t('phone number'),
  position: i18n.t('position'),
  email: i18n.t('business email address'),
  company: i18n.t('company name'),
  company_size: i18n.t('enterprise size'),
  it_size: i18n.t('IT department size'),
  purpose: i18n.t('purpose of application'),
  otherPurpose: i18n.t('purpose of application'),
};
