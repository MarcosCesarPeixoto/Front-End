import React, {Component} from 'react';

class Person extends Component{
  // criando um construtor
  constructor(props) {
    super(props);

    this.state = {
      name: "Lucas",
      age: 33,
      genre: 'm'
    }
  }

  changePerson = () => {
    this.setState({
      name: 'Mara',
      age: 46,
      genre: 'f'
    });
  }

  // criando método render
  render(state) {
    let artigo;
    if(this.state.genre ==='m'){
      artigo = 'o';
    }else if(this.state.genre ==='f'){
      artigo = 'a';
    }


    return(
      <div>
        <p>Eu sou {artigo} {this.state.name} e tenho {this.state.age} anos. </p>
        <button type="button" onClick={this.changePerson}>Trocar Pessoa</button>
      </div>
    );
  }

}

export default Person;
