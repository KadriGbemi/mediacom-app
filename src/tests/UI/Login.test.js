import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from '../../pages/public/Login';
// import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

describe('Login Component', () => {
  it('checks if Login Component is rendered', () => {
    const wrapper = shallow(<Login />);
    console.log('Login wrapper', wrapper.debug());
    //   expect(wrapper.find(Foo)).to.have.lengthOf(3);
  });
});
