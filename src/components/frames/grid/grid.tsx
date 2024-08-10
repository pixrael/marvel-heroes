import { ReactNode } from 'react';
import './grid.scss';

function Grid({ children }: { children: any }) {
  return (
    <div className="grid">
      {children.map((child: ReactNode, i: number) => (
        <div
          key={i}
          className={`grid__item ${i % 2 === 0 ? 'flexstart' : 'flexend'}`}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

export default Grid;
