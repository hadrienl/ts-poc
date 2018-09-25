import * as React from 'react';
import { IHeader } from './interfaces';

export class Header extends React.Component<IHeader> {
  public render() {
    return <header>{this.upperTitle()}</header>;
  }

  private upperTitle() {
    const { title } = this.props;
    return title.toUpperCase();
  }
};
