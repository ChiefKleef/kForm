import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
require('ignore-styles');
import register from 'ignore-styles';
register(['.styl']);

import FormGuide from './FormGuide.jsx';
const renderer = TestUtils.createRenderer();

const errorMessage = <span className={'fa fa-warning'} />

describe('FormGuide', () => {
  describe('On error = true', () => {
    const iconName = 'user';
    renderer.render(<FormGuide error={true} message="Login" compId="Login" icon={iconName} />);
    const actual = renderer.getRenderOutput();
    it('should contain the errorMessage', () => {
      expect(actual).toIncludeJSX(errorMessage);
    });
    const icon = <span className={`form-guide-icon fa fa-${iconName}`} />;
    it('should contain the specified icon', () => {
      expect(actual).toIncludeJSX(icon);
    });
  });
});
