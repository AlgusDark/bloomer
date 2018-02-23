import * as React from "react";

import { getHTMLProps, combineModifiers } from "./../src/helpers";

describe("getHTMLProps", () => {
  const props = {
    href: "#",
    onClick: f => f
  };

  it("should return props when no removeFunctions are passed", () => {
    expect(getHTMLProps(props)).toEqual(props);
  });

  it("should remove props with more than one function as parameter", () => {
    const removeHref = props => {
      const { href, ...rest } = props;
      return rest;
    };

    const removeOnClick = props => {
      const { onClick, ...rest } = props;
      return rest;
    };

    expect(getHTMLProps(props, removeHref, removeOnClick)).toEqual({});
  });
});

describe("combineModifiers", () => {
  it("should return an empty object when only props are passed", () => {
    const props = {
      testAny: true,
      testSome: true,
      testNothing: false
    };
    expect(combineModifiers(props)).toEqual({});
  });

  it("should return combined Object when get*ModifiersFunctions are passed", () => {
    const props = {
      testAny: true,
      testSome: true,
      testNothing: false
    };

    const getTestAnyModifiers = props => ({ "test-any": props.testAny });
    const getTestSomeModifiers = props => ({ "test-some": props.testSome });
    const getFailModifiers = props => ({ "test-fail": props.testFail });

    const combined = combineModifiers(
      props,
      getTestAnyModifiers,
      getTestSomeModifiers,
      getFailModifiers
    );
    expect(combined).toEqual({ "test-any": true, "test-some": true });
  });
});
