import React from 'react';



class CategoryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.category || {name:'', budget:0},

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.formState = this.props.formState;
    this.submitState = this.props.submitState;
    this.deleteButton = this.props.submitText !== 'Update' ? 'invisible' : '';
  }


  handleSubmit(e) {
    e.preventDefault();
    this.state.budget = parseInt(this.state.budget);
    this.props.handler( Object.assign({}, this.state));
    if(this.props.submitText !== 'Update') this.setState({name: '', budget: 0});
    else {
      this.submitState = 'hidden';
      this.formState = 'inactive';
    }
  }


  handleChange(e) {
    this.setState({[e.target.name]:(e.target.value).toUpperCase()});
  }


  render() {
    return (

      <form id="formDefault" onSubmit={this.handleSubmit} >
      <div id="categoryForm">

      <input
      className={this.formState}
      id="categoryName"
      type="text"
      name="name"
      value={this.state.name}
      required
      placeholder="category"
      onChange={this.handleChange}
      />

      <input
      className={this.formState}
      id="budgetAmt"
      type="number"
      name="budget"
      value={this.state.budget}
      required
      placeholder="$"
      onChange={this.handleChange}
      />

      <a id='deleteButton' className={this.deleteButton} href="#" onClick={()=>this.props.handleDelete(this.props.category.id)}>X</a>
      </div>

      <input
      id='categorySubmitButton'
      className={this.submitState}
      type='submit'
      value={this.props.submitText}/>
      </form>
    )
  }
}



export default CategoryForm;
