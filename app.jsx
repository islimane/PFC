////////////////////////
// Bootstrap Elements //
////////////////////////

// var Alert = ReactBootstrap.Alert;
var ButtonGroup = ReactBootstrap.ButtonGroup;
var Button = ReactBootstrap.Button;
var DropdownButton = ReactBootstrap.DropdownButton;
var MenuItem = ReactBootstrap.MenuItem;
var Panel = ReactBootstrap.Panel;



/////////
// App //
/////////

var PanelInstance = React.createClass({
  render: function(){
    return(
      <Panel>
        <h3>Author: {this.props.author}</h3>
        {this.props.text}
      </Panel>
    );
  }
});

var PanelSet = React.createClass({
  render: function(){
    var panels = this.props.state;
    if(this.props.state!=="")
      panels = this.props.state.data.map(function (panel) {
        return (
          <PanelInstance author={panel.author} text={panel.text} />
        );
      });
    return(
      <div id="panels">
        {panels}
      </div>
    );
  }
});

var ButtonGroupInstance = React.createClass({
  handleClick: function() {
    React.render(<PanelSet state={this.props.state}/>, document.getElementById('panels'));
  },
  render: function(){
    return(
      <ButtonGroup vertical>
        <Button onClick={this.handleClick}>Create div</Button>
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
  }
});

var Page = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function(){
    return(
      <div>
        <div id="options">
          <ButtonGroupInstance state={this.state}/>
        </div>
        <PanelSet state=""/>
      </div>
    );
  }
});

React.render(<Page url="data.json"/>, demo);