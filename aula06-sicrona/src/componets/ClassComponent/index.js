import { Component } from "react";

export default class ClassComponent extends Component{

    render(){

        return(
            <>
                {
                    this.props.convidados.map((item, index) => <li key={index.toString()}>{item.nome} trará {item.trara}</li>) 
                }
                   
            </>
        );

    }

      


}