import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nome: '',
      email: '',
    }
  }
  onChangePersonName(e) {
    this.setState({
      nome: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })  
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      nome: this.state.nome,
      email: this.state.email,
    };
    axios.post('http://localhost:3333/contatos', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      nome: '',
      email: '',
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Novo Contato</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Nome: </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.nome}
                      onChange={this.onChangePersonName}
                      />
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      />
                </div>

                <div className="form-group">
                    <input type="submit" 
                      value="Registrar Contato " 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}