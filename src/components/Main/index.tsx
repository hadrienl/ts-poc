import * as React from 'react';
import IncrementButton from '../IncrementButton';

export class Main extends React.Component {
  public state = {
    count: Number(localStorage.getItem('count')),
  };

  public render() {
    const { count } = this.state;

    return (
      <div>
        <IncrementButton
          text="Incrémenter"
          initialValue={count}
          onChange={this.change} />
         <p>{count}</p>
      </div>
     );
  }

  private change = (count: number) => {
    localStorage.setItem('count', count.toString());
    this.setState({ count });
  }
};
