function GridItem({ id, children }: { id: number; children: any }) {
  return (
    <div key={id} className="grid__item">
      {children}
    </div>
  );
}

export default GridItem;
