import { CounterService } from './CounterService';
import useCountState from './hooks/useCountState';

export function Counter() {
  const { count } = useCountState();

  return (
    <div>
      <DecrementButton />
      <span>{count}</span>
      <IncrementButton />
    </div>
  );
}

export function IncrementButton() {
  return <button onClick={CounterService.increment}>++++</button>;
}

export function DecrementButton() {
  return <button onClick={CounterService.decrement}>----</button>;
}
