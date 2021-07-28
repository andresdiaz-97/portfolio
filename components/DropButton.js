import { DropdownButton, Dropdown } from "react-bootstrap";

const DropButton = () => {
  return (
    <DropdownButton
      id='dropdown-button-dark'
      title='ENG'
      variant='dark'
      menuVariant='dark'
    >
      <Dropdown.Item href='#/action-1'>ENG</Dropdown.Item>
      <Dropdown.Item href='#/action-2'>ESP</Dropdown.Item>
    </DropdownButton>
  );
};

export default DropButton;
