////////////////////////
// Bootstrap Elements //
////////////////////////

// var Alert = ReactBootstrap.Alert;
var ButtonGroup = ReactBootstrap.ButtonGroup;
var Button = ReactBootstrap.Button;
var DropdownButton = ReactBootstrap.DropdownButton;
var MenuItem = ReactBootstrap.MenuItem;
var Panel = ReactBootstrap.Panel;

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

<<<<<<< HEAD

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
    var panels = this.props.data.map(function (panel) {
                    return (
                      <PanelInstance author={panel.author} text={panel.text} />
                    );
                });
=======
var PanelSet = React.createClass({
  render: function(){
    var panels = this.props.state;
    if(this.props.state!=="")
      panels = this.props.state.data.map(function (panel) {
        return (
          <PanelInstance author={panel.author} text={panel.text} />
        );
      });
>>>>>>> 550c50ba922c83aae3287041080001a18b6d5f68
    return(
      <div id="panels">
        {panels}
      </div>
    );
  }
});

var ButtonGroupInstance = React.createClass({
  handleClick: function() {
<<<<<<< HEAD
    this.props.onShowCommentsClick();
=======
    React.render(<PanelSet state={this.props.state}/>, document.getElementById('panels'));
>>>>>>> 550c50ba922c83aae3287041080001a18b6d5f68
  },
  render: function(){
    return(
      <ButtonGroup vertical>
<<<<<<< HEAD
        <Button onClick={this.handleClick}>Show Comments</Button>
=======
        <Button onClick={this.handleClick}>Create div</Button>
>>>>>>> 550c50ba922c83aae3287041080001a18b6d5f68
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


// This component represent the whole page
var Page = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
<<<<<<< HEAD
  loadCommentsFromServer: function() {
=======
  componentDidMount: function() {
>>>>>>> 550c50ba922c83aae3287041080001a18b6d5f68
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
<<<<<<< HEAD
  handleShowComments: function() {
    this.loadCommentsFromServer();
  },
=======
>>>>>>> 550c50ba922c83aae3287041080001a18b6d5f68
  render: function(){
    return(
      <div>
        <div id="options">
<<<<<<< HEAD
          <ButtonGroupInstance
          onShowCommentsClick={this.handleShowComments}/>
        </div>
        <PanelSet data={this.state.data}/>
=======
          <ButtonGroupInstance state={this.state}/>
        </div>
        <PanelSet state=""/>
>>>>>>> 550c50ba922c83aae3287041080001a18b6d5f68
      </div>
    );
  }
});

React.render(<Page url="data.json"/>, demo);