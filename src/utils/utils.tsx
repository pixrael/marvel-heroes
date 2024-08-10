export const getInputSearchDebounce = (
  func: (value: React.SetStateAction<string>) => void
) => {
  return (event: React.ChangeEvent<HTMLInputElement>) => {
    func(event.target.value);
  };
};
