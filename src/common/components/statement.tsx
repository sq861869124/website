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

import * as React from 'react';

const IF = ({ children, check }: any) => {
  if (!children) return null;
  const bool = typeof check === 'function' ? check() : check;

  if (React.Children.count(children) === 1) {
    return bool ? children : null;
  }
  const ifSection = [] as any;
  const elseSection = [] as any;
  let hasElse = false;
  React.Children.forEach(children, (child) => {
    if (child && child.type && child.type.displayName === 'ELSE') {
      hasElse = true;
    }
    if (hasElse) {
      elseSection.push(child);
    } else {
      ifSection.push(child);
    }
  });
  if (bool) {
    return (
      <React.Fragment>
        {...ifSection}
      </React.Fragment>
    );
  } else if (hasElse) {
    return (
      <React.Fragment>
        {...elseSection}
      </React.Fragment>
    );
  }
  return null;
};

IF.ELSE = ELSE;

function ELSE() {
  return null;
}

ELSE.displayName = 'ELSE';

export { IF };

