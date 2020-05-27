import React, { Component } from 'react';

class Main extends Component {
    render (){
        return(
            <div className="card text-left">
              <img className="card-img-top" src="holder.js/100px180/" alt=""/>
              <div className="card-body">
                <h4 className="card-title">Title</h4>
                <p className="card-text">Body</p>
              </div>
            </div>
        )
    }
}

// function Main() {
// 	return (
// 		<div className="Main">
// 			Main
// 		</div>
// 	);
// }

export default Main;
