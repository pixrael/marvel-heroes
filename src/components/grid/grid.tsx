import './grid.scss';

function Grid({ children }: { children: any }) {
  return <div className="grid">{...children}</div>;
}

export default Grid;
