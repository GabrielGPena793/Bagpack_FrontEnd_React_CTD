import { Component } from "react";

export default class ClassComponent extends Component{

    render(){

        return(
            <>
                {
                    this.props.convidados.map(({nome, trara}, index) => <li key={index.toString()}>{nome} trará {trara}</li>) 
                }
                   
            </>
        );

    }

      


}