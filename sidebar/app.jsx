var Alert = ReactBootstrap.Alert;
var ButtonGroup = ReactBootstrap.ButtonGroup;
var Button = ReactBootstrap.Button;
var DropdownButton = ReactBootstrap.DropdownButton;
var MenuItem = ReactBootstrap.MenuItem;
var Panel = ReactBootstrap.Panel;


const panelInstance = (
    <Panel>
      Basic panel example
    </Panel>
  );

function handleClick() {
  React.render(panelInstance, demo);
}

const buttonGroupInstance = (
  <ButtonGroup vertical>
    <Button onClick={handleClick}>Create div</Button>
    <Button>Button</Button>
    <DropdownButton title="Dropdown" id="bg-vertical-dropdown-1">
      <MenuItem eventKey="1">Dropdown link</MenuItem>
      <MenuItem eventKey="2">Dropdown link</MenuItem>
    </DropdownButton>
    <Button>Button</Button>
    <Button>Button</Button>
    <DropdownButton title="Dropdown" id="bg-vertical-dropdown-2">
      <MenuItem eventKey="1">Dropdown link</MenuItem>
      <MenuItem eventKey="2">Dropdown link</MenuItem>
    </DropdownButton>
    <DropdownButton title="Dropdown" id="bg-vertical-dropdown-3">
      <MenuItem eventKey="1">Dropdown link</MenuItem>
      <MenuItem eventKey="2">Dropdown link</MenuItem>
    </DropdownButton>
  </ButtonGroup>
);

React.render(buttonGroupInstance, demo);