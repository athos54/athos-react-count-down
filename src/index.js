import React from 'react';
import ReactDOM from 'react-dom';
import './Timer.css';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dias:("0" + (this.props.dias)).slice(-2),
      horas:("0" + (this.props.horas)).slice(-2),
      minutos:("0" + (this.props.minutos)).slice(-2),
      segundos:("0" + (this.props.segundos)).slice(-2),
      };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if(this.state.segundos===0,this.state.minutos===0,this.state.horas===0,this.state.dias===0){
      this.pararTimer();
    }
    if(this.state.segundos>0){
      this.descontarSegundo();
    }else{
      if(this.state.minutos>0){
        this.descontarMinuto();
      }else{
        if(this.state.horas>0){
          this.descontarHora();
        }else{
          this.descontarDia()
        }
      }
    }
  }

  pararTimer(){
    this.componentWillUmount();
    this.setState({
      dias:"00",
      horas:"00",
      minutos:"00",
      segundos:"00",
    })
  }

  descontarDia(){
    this.setState({
      dias:("0" + (this.state.dias-1)).slice(-2),
      horas:("0" + (this.state.horas+23)).slice(-2),
      minutos:("0" + (this.state.minutos+59)).slice(-2),
      segundos:("0" + (this.state.minutos+59)).slice(-2),
    })
  }

  descontarHora(){
    this.setState({
      horas:("0" + (this.state.horas-1)).slice(-2),
      minutos:("0" + (this.state.minutos+59)).slice(-2),
      segundos:("0" + (this.state.minutos+59)).slice(-2),
    })
  }

  descontarMinuto(){
    this.setState({
      minutos:("0" + (this.state.minutos-1)).slice(-2),
      segundos:("0" + (this.state.minutos+59)).slice(-2),
    })
  }

  descontarSegundo(){
    this.setState({
      segundos:("0" + (this.state.segundos-1)).slice(-2)
    })
  }

  render() {
    return (
        <div>
          <h1>Hello, world!</h1>
          <div className="ont">
            <div className="numbers">
              <span className="tipo">Dias</span>
                {this.state.dias}
              </div>
            </div>
          <div className="ont"><div className="numbers"><span className="tipo">Horas</span>{this.state.horas}</div></div>
          <div className="ont"><div className="numbers"><span className="tipo">Minutos</span>{this.state.minutos}</div></div>
          <div className="ont"><div className="numbers"><span className="tipo">Segundos</span>{this.state.segundos}</div></div>
        </div>
    );
  }
}

ReactDOM.render(
  <Timer />,
  document.getElementById('root')
);

export default Timer;
