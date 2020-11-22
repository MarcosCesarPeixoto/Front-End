import React, {Component} from 'react';

class UsuarioSaida extends Component {
  render() {
    return(
      <center>
        <div class="col-xs-12 col-md-6">
          <div class="border border-info px-2 p-3 shadow p-3 mb-5 bg-white rounded">
            <p align="Justify">Usuário: {this.props.usuario}</p>
            <p align="Justify">Parágrafo 2 - Texto qualquer</p>
          </div>
        </div>
      </center>
    );
  }
}

export default UsuarioSaida;