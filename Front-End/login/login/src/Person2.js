import React, {Component} from 'react';

class Person2 extends Component{
  // criando um construtor
  constructor(props) {
    super(props);

    this.state = {
      name: "Gabriel",
      age: 21,
      genre: 'm'
    }
  }

  changePerson = () => {
    this.setState({
      name: 'Lais',
      age: 20,
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
        <div class="form-group">
          <label for="formGroupExampleInput">Usuário</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Usuário"></input>
        </div>
        <p>Eu sou {artigo} {this.state.name} e tenho {this.state.age} anos. </p>
        <button type="button" onClick={this.changePerson}>Trocar Pessoa</button>
      </div>
    );
  }

}

export default Person2;
