import * as React from 'react';
import { CounterService } from '../CounterService';

export default function useCountState() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const counter$ = CounterService.onCounter$().subscribe(setCount);

    return () => counter$.unsubscribe();
  }, []);

  return { count };
}
