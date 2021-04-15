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
import { isZh } from '~/i18n';
import mainLeft from '~/images/home/main-l.png';
import mainRight from '~/images/home/main-r.png';
import mainCenter from '~/images/home/main-c.png';
import mainCenterEn from '~/images/home/main-c-en.png';
import projectManagement from '~/images/home/Pic2.png';
import projectManagementEn from '~/images/home/Pic2-en.png';
import projectManagementMale from '~/images/home/Pic2-1.png';
import projectManagementFemale from '~/images/home/Pic2-2.png';
import codeRepo from '~/images/home/Pic3.png';
import api from '~/images/home/Pic7.png';
import cicd from '~/images/home/Pic4.png';
import monitor from '~/images/home/Pic5.png';
import monitorEn from '~/images/home/Pic5-en.png';
import log from '~/images/home/Pic-log.png';
import logEn from '~/images/home/Pic-log-en.png';
import multiCloud from '~/images/home/Pic9.png';
import multiCloudEn from '~/images/home/Pic9-en.png';
import banner from '~/images/home/banner/earth.png'

const zhImgMap = {
  banner,
  mainLeft,
  mainRight,
  mainCenter,
  projectManagement,
  projectManagementMale,
  projectManagementFemale,
  codeRepo,
  api,
  cicd,
  monitor,
  log,
  multiCloud,
};

const enImgMap = {
  banner,
  mainLeft,
  mainRight,
  mainCenter: mainCenterEn,
  projectManagement: projectManagementEn,
  projectManagementMale,
  projectManagementFemale,
  codeRepo,
  api,
  cicd,
  monitor: monitorEn,
  log: logEn,
  multiCloud: multiCloudEn,
};


export default isZh() ? zhImgMap : enImgMap;
