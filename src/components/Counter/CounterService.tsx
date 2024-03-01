import { BehaviorSubject } from 'rxjs';

const counter$ = new BehaviorSubject<number>(0);
export const CounterService = {
  // observable
  onCounter$: () => counter$.asObservable(),
  // set
  increment: () => counter$.next(counter$.value + 1),
  decrement: () => counter$.next(counter$.value - 1),
};
