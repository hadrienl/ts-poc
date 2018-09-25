import * as React from 'react';
import { Button } from '@blueprintjs/core';
import { IIncrementButton } from './interfaces';

export class IncrementButton extends React.Component<IIncrementButton> {
  public state = {
    count: this.props.initialValue || 0,
  };

  public render() {
    const { text } = this.props;

    return (
      <Button
        text={text}
        onClick={this.increment} />
     );
  }

  private increment = () => {
    const { onChange } = this.props;
    const { count } = this.state;
    const newCount = count + 1;

    this.setState({ count: newCount });
    if (onChange) {
      onChange(newCount);
    }
  }
}

export default IncrementButton
