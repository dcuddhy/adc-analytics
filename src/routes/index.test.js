import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';


// All cards on the table, I'm not appraching this as TDD.  I'll leave this here
// and if I have time, I'll write some tests.
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Index />, div);
  ReactDOM.unmountComponentAtNode(div);
});
