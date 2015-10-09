import {Component} from 'react';

export default function createComponentWithPropTypes(propTypes) {

  class ComponentWithPropTypes extends Component {

    static propTypes = propTypes;

    render() {
      return null;
    }

  }

  return ComponentWithPropTypes;

}
