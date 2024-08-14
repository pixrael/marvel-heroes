import { ChangeEventHandler } from 'react';
import './switch-button.scss';

function SwitchButton({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <label className="switch">
      <input type="checkbox" onChange={onChange} checked={checked} />
      <span className="slider"></span>
    </label>
  );
}

export default SwitchButton;
