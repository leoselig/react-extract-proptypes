export default function stubPropTypes(PropTypes) {
  const originalArrayOf = PropTypes.arrayOf;

  PropTypes.arrayOf = function(subType) {
    const computedPropType = originalArrayOf.call(PropTypes, subType);
    computedPropType.__computedPropType = 'arrayOf';
    computedPropType.__subType = subType;
    return computedPropType;
  };

  return function restorePropTypes() {
    PropTypes.arrayOf = originalArrayOf;
  };
}
