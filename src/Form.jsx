import React, { Component } from 'react';


class Form extends Component {
constructor(props) {
    super(props);
    this.state = {
      lastname: '',
      firstname: '',
      email: '',
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
   }

   submitForm(e) {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
     };
      const url = "http://92.175.11.66:3001/api/quests/employees/";
        
    e.preventDefault();
    fetch(url, config)
    .then(res => res.json())
    .then(res => {
   if (res.error) {
     alert(res.error);
   } else {
     alert(`Film enregistré avec l'ID ${res}!`);
   }
  }).catch(e => {
   console.error(e);
   alert('Erreur lors de l\'ajout du film');
  });
   }

   render() { 
    return ( 
<div className="Form">
 <h1>Quel est ton film préféré frérot ?</h1>

 <form onSubmit={this.submitForm}>
   <fieldset>
     <legend>Dit moi tout, je le garde en secret</legend>
     <div className="form-data">
       <label htmlFor="lastname">Nom du Film</label>
       <input
         type="text"
         id="lastname"
         name="lastname"
         onChange={this.onChange}
         value={this.state.lastname}
       />
     </div>

     <div className="form-data">
       <label htmlFor="firstname">URL du poster</label>
       <input
         type="text"
         id="firstname"
         name="firstname"
         onChange={this.onChange}
         value={this.state.firstname}
       />
     </div>

     <div className="form-data">
       <label htmlFor="email">E-miel</label>
       <input
         type="email"
         id="email"
         name="email"
         onChange={this.onChange}
         value={this.state.email}
       />
     </div>

      <div className="form-data">
       <label htmlFor="firstname">Décris moi ton film comme tu l'aime!</label>
       <input
         type="text"
         id="firstname"
         name="firstname"
         onChange={this.onChange}
         value={this.state.firstname}
       />
     </div>


     <hr />
     <div className="form-data">
       <input type="submit" value="Soumet-moi" />
     </div>
   </fieldset>
 </form>
</div>

     );
}
}

export default Form;
