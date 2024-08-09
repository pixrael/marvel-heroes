import { ReactNode } from 'react';
import './one-row-grid.scss';

function OneRowGrid({ children }: { children: any }) {
  return (
    <div className="one-row-grid">
      {children.map((child: ReactNode, i: number) => (
        <div key={i} className="one-row-grid__item">
          {child}
        </div>
      ))}
    </div>
  );
}

export default OneRowGrid;
