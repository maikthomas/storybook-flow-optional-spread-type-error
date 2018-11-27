// @flow

import React from "react";
import "./App.css";

type OptionalProps = {|
  bar: string,
  baz: string
|};

type Props = {|
  foo: string,
  ...?OptionalProps
|};

const OptionalSpreadTyped = ({ foo, bar, baz }: Props) => {
  return <div />;
};

export default OptionalSpreadTyped;
