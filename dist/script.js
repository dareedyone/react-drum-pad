function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class Drum extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleClick",





    event => {
      event.target.querySelector('audio').play();
      this.setState({
        display: event.target.querySelector('audio').id });

      // console.log(event.target.querySelector('audio'));
    });_defineProperty(this, "handleKeyPress",

    event => {

      let keyCode = event.which || event.keycode;
      switch (keyCode) {
        case 81:
          document.getElementById("heater-1").click();
          break;
        case 87:
          document.getElementById("heater-2").click();
          break;
        case 69:
          document.getElementById("heater-3").click();
          break;
        case 65:
          document.getElementById("heater-4").click();
          break;
        case 83:
          document.getElementById("clap").click();
          break;
        case 68:
          document.getElementById("Open-HH").click();
          break;
        case 90:
          document.getElementById("kicknhat").click();
          break;
        case 88:
          document.getElementById("kick").click();
          break;
        case 67:
          document.getElementById("Closed-HH").click();
          break;}


    });this.state = { display: "display here" };}



  render() {
    return (
      React.createElement(React.Fragment, null,
      React.createElement("div", { id: "display", className: "text-center" }, this.state.display),
      React.createElement("div", { onKeyDown: this.handleKeyPress, className: "" },

      React.createElement("button", { onClick: this.handleClick, id: "heater-1", className: "drum-pad" }, "Q", React.createElement("audio", { id: "Q", className: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" }, "Your browser does not support the audio element.")),


      React.createElement("button", { onClick: this.handleClick, id: "heater-2", className: "drum-pad" }, "W", React.createElement("audio", { id: "W", className: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" }, "Your browser does not support the audio element.")),


      React.createElement("button", { onClick: this.handleClick, id: "heater-3", className: "drum-pad" }, "E", React.createElement("audio", { id: "E", className: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" }, "Your browser does not support the audio element.")),


      React.createElement("button", { onClick: this.handleClick, id: "heater-4", className: "drum-pad" }, "A", React.createElement("audio", { id: "A", className: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" }, "Your browser does not support the audio element.")),


      React.createElement("button", { onClick: this.handleClick, id: "clap", className: "drum-pad" }, "S", React.createElement("audio", { id: "S", className: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" }, "Your browser does not support the audio element.")),


      React.createElement("button", { onClick: this.handleClick, id: "Open-HH", className: "drum-pad" }, "D", React.createElement("audio", { id: "D", className: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" }, "Your browser does not support the audio element.")),


      React.createElement("button", { onClick: this.handleClick, id: "kicknhat", className: "drum-pad" }, "Z", React.createElement("audio", { id: "Z", className: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" }, "Your browser does not support the audio element.")),


      React.createElement("button", { onClick: this.handleClick, id: "kick", className: "drum-pad" }, "X", React.createElement("audio", { id: "X", className: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" }, "Your browser does not support the audio element.")),


      React.createElement("button", { onClick: this.handleClick, id: "Closed-HH", className: "drum-pad" }, "C", React.createElement("audio", { id: "C", className: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }, "Your browser does not support the audio element.")))));






  }}


ReactDOM.render(React.createElement(Drum, null), document.getElementById("drum-machine"));