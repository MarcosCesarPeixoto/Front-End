import React, {Component} from 'react';

class UsuarioEntrada extends Component{

  // criando método render
  render() {
    return(
      <center>
        <div class="col-xs-12 col-md-6">
          <div class="border border-info px-2 p-3 shadow p-3 mb-5 bg-white rounded">
            <form >
              <div class="form-group">
                <label for="formGroupExampleInput">Usuário</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Usuário"></input>
              </div>
            </form>
          </div>
        </div>
      </center>
    );
  }

}

export default UsuarioEntrada;
