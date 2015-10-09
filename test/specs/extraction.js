import React from 'react';
import extractPropTypes from '../../src/extractPropDefinitions';
import stubPropTypes from '../../src/stubPropTypes';
import createComponentWithPropTypes from '../createComponentWithPropTypes'

describe('extraction', function() {

  function createComponentAndExtract(propTypes) {
    return extractPropTypes(
      createComponentWithPropTypes(propTypes)
    );
  }

  describe('of primitves', function() {

    it('string', function() {
      expect(
        createComponentAndExtract({
          someString: React.PropTypes.string
        })
      ).to.deep.equal([{
        name: 'someString',
        type: 'string'
      }]);
    });

    it('number', function() {
      expect(
        createComponentAndExtract({
          someNumber: React.PropTypes.number
        })
      ).to.deep.equal([{
        name: 'someNumber',
        type: 'number'
      }]);
    });

    it('boolean', function() {
      expect(
        createComponentAndExtract({
          someBoolean: React.PropTypes.bool
        })
      ).to.deep.equal([{
        name: 'someBoolean',
        type: 'boolean'
      }]);
    });

    it('function', function() {
      expect(
        createComponentAndExtract({
          someFunction: React.PropTypes.func
        })
      ).to.deep.equal([{
        name: 'someFunction',
        type: 'function'
      }]);
    });

    it('object', function() {
      expect(
        createComponentAndExtract({
          someObject: React.PropTypes.object
        })
      ).to.deep.equal([{
        name: 'someObject',
        type: 'object'
      }]);
    });

    it('array', function() {
      expect(
        createComponentAndExtract({
          someArray: React.PropTypes.array
        })
      ).to.deep.equal([{
        name: 'someArray',
        type: 'array'
      }]);
    });

    it('node', function() {
      expect(
        createComponentAndExtract({
          someNode: React.PropTypes.node
        })
      ).to.deep.equal([{
        name: 'someNode',
        type: 'node'
      }]);
    });

    it('element', function() {
      expect(
        createComponentAndExtract({
          someElement: React.PropTypes.element
        })
      ).to.deep.equal([{
        name: 'someElement',
        type: 'element'
      }]);
    });

  });

  describe('complex', function() {

    var restorePropTypes;

    beforeEach(function() {
      restorePropTypes = stubPropTypes(React.PropTypes);
    });

    afterEach(function() {
      restorePropTypes();
    });

    it('arrayOf()', function() {
      expect(
        createComponentAndExtract({
          someArrayOfStrings: React.PropTypes.arrayOf(
            React.PropTypes.string
          )
        })
      ).to.deep.equal([{
        name: 'someArrayOfStrings',
        type: 'arrayOf',
        subType: {
          type: 'string'
        }
      }]);
    });

    it.only('arrayOf() deep', function() {
      expect(
        createComponentAndExtract({
          someArrayOfArrays: React.PropTypes.arrayOf(
            React.PropTypes.arrayOf(
              React.PropTypes.string
            )
          )
        })
      ).to.deep.equal([{
        name: 'someArrayOfArrays',
        type: 'arrayOf',
        subType: {
          type: 'arrayOf',
          subType: {
            type: 'string'
          }
        }
      }]);
    });

  });

});
