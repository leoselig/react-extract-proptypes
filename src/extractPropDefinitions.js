import _ from 'lodash';
import {PropTypes} from 'react';

function extractPrimitivePropType(propType) {
  const propDefinition = {
    type: null
  };
  switch (propType) {
    case PropTypes.string:
      propDefinition.type = 'string';
      break;
    case PropTypes.number:
      propDefinition.type = 'number';
      break;
    case PropTypes.bool:
      propDefinition.type = 'boolean';
      break;
    case PropTypes.object:
      propDefinition.type = 'object';
      break;
    case PropTypes.func:
      propDefinition.type = 'function';
      break;
    case PropTypes.array:
      propDefinition.type = 'array';
      break;
    case PropTypes.node:
      propDefinition.type = 'node';
      break;
    case PropTypes.element:
      propDefinition.type = 'element';
      break;
  }
  return propDefinition;
}

function extractPropDefinition(propType, propName) {
  const propDefinition = {
    type: null
  };
  if (propType.hasOwnProperty('__computedPropType')) {
    propDefinition.type = propType['__computedPropType'];
    propDefinition.subType = extractPropDefinition(propType.__subType);
    return propDefinition;
  } else {
    _.extend(propDefinition, extractPrimitivePropType(propType)
    );
  }

  return propDefinition;
}

export default function extractPropDefinitions(Component) {

  return _.map(_.keys(Component.propTypes), (propName) => {
    const propDefinition = extractPropDefinition(Component.propTypes[propName], propName);
    propDefinition.name = propName;
    return propDefinition;
  });

}
