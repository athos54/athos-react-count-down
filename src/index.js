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
    if(this.state.segundos==="00" && this.state.minutos==="00" && this.state.horas==="00" && this.state.dias==="00"){
      this.pararTimer();
    }else{
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
  }

  pararTimer(){
    console.log('parar')
    clearInterval(this.timerID);
    this.setState({
      dias:"00",
      horas:"00",
      minutos:"00",
      segundos:"00",
    })
    this.cambiarColor();
  }

  cambiarColor(){
    var cajas = document.querySelectorAll('.ont')
    var time=0;
    cajas.forEach(caja=>{
      // caja.style.WebkitTransition = "all 2s"; // Code for Safari 3.1 to 6.0
      // caja.style.transition = "all 2s";       // Standard syntax
      // caja.classList.remove("color");
      setTimeout(()=>{
        caja.classList.toggle("finish");
      },time);
      time +=100
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
          <div className="ont color">
            <div className="numbers">
              <span className="tipo">Dias</span>
                {this.state.dias}
              </div>
            </div>
          <div className="ont color">
            <div className="numbers">
              <span className="tipo">Horas</span>
                {this.state.horas}
              </div>
            </div>
          <div className="ont color">
            <div className="numbers">
              <span className="tipo">Minutos</span>
                {this.state.minutos}</div>
              </div>
          <div className="ont color">
            <div className="numbers">
              <span className="tipo">Segundos</span>
                {this.state.segundos}
              </div>
            </div>
        </div>
    );
  }
}

ReactDOM.render(
  <Timer />,
  document.getElementById('root')
);

export default Timer;
