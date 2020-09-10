import * as React from "react";

export interface HelloProps {
  compiler: string;
  framework: string;
}

// 无状态的功能组件写法
// export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;

// 接近类写法
export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
  }
}
