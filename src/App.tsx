import './app.css';

import { Counter } from './components/Counter/Counter';

export default function App() {
  return (
    <div className="container">
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}
