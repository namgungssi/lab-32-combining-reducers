import React from 'react';
import Expense from '../expenses/Expense';
import CategoryForm from './Category-form';



class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitText: 'Update',
      formState: 'inactive',
      submitState: 'hidden'
    }
  }


  render() {
    return (
      <div className="category-item">

      <header id="categoryHeader">

      <CategoryForm handler={this.props.handleUpdate}
        handleDelete={this.props.handleDelete}
        category={this.props.category}
        submitText={this.state.submitText}
        formState={this.state.formState}
        submitState={this.state.submitState}/>
      </header>

      <Expense categoryId={this.props.category.id}
        categoryBudget={this.props.category.budget}/>

      </div>
    )
  }
}



export default CategoryItem;
