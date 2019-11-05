import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.delete('http://localhost:3333/contatos/'+this.props.obj._id)
            .then(res => this.props.atualizaDados(res.data))
            .catch(err => console.log(err));
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.nome}
          </td>
          <td>
            {this.props.obj.email}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Editar</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Deletar</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;