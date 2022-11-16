
import Dropdown from "./shared/dropdown";
import { UsersDropdownProps } from "./../interfaces/components/props"

const UsersDropdown = ({ users, eventHandler }: UsersDropdownProps): JSX.Element => {
  return (
    <Dropdown
      id="users-dropdown"
      label="Choose User to Display"
      options={users}
      onChange={eventHandler}
      valueProp="id"
      optionLabelProp="name"
    />
  );
};

export default UsersDropdown;
