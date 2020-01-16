import React, { Component } from 'react'
import {runQuery } from './helpers/runQuery';


class ObjectDescription extends Component {

    state = {
        value: []
      }  

    componentDidMount(){
        const url ="https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-39/sparql"
        const query = `
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        PREFIX dc: <http://purl.org/dc/elements/1.1/>
        PREFIX dct: <http://purl.org/dc/terms/>
        PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
        PREFIX edm: <http://www.europeana.eu/schemas/edm/>
        PREFIX foaf: <http://xmlns.com/foaf/0.1/>

        SELECT (SAMPLE(?cho)as ?choSample) (SAMPLE(?title)as ?titleSample) ?description ?typeLabel ?img WHERE {

        <https://hdl.handle.net/20.500.11840/termmaster1397> skos:narrower* ?type .
        ?type skos:prefLabel ?typeLabel .

        ?cho edm:object ?type .
        ?cho dc:title ?title .
  		?cho dc:description ?description .
        ?cho edm:isShownBy ?img.
        FILTER langMatches(lang(?title), "ned")
        } 
        `;
        runQuery(url, query)
        .then(json => {
            const result = json.results.bindings;
            console.log(result);

            this.setState({
                value: result
            });

        });
    }


    render(){
        return (
            <div> 
                {this.state.value.map((item, index)=>{
                   return <p key={index}>{item.description.value.replace(/<\/?[^>]+(>|$)/g, " ")}</p>
                })}
            </div>
        )
    }
}

export default ObjectDescription;