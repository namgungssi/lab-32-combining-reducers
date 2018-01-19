import React from 'react';

import {connect} from 'react-redux';

import CategoryForm from './Category-form';
import CategoryList from './Category-list';
import store from '../../lib/store';

import {createCategory, updateCategory, deleteCategory} from './categoryState/category-actions';

class Categories extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      submitText: 'Add Category'
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.category){
      this.setState(nextProps.category)
    }
  }

  render() {
    return (
      <div id="categoryWrapper">
      <CategoryForm submitText={this.state.submitText} handler={this.props.handleAddCategory} />
      <CategoryList
      categories={this.props.categories}
      handleDelete={this.props.handleDeleteCategory}
      handleUpdate={this.props.handleUpdateCategory}
      handleCategories={this.props.categories} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  categories: state
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleAddCategory: category => dispatch(createCategory(category)),
  handleUpdateCategory: category => dispatch(updateCategory(category)),
  handleDeleteCategory: category => dispatch(deleteCategory(category))
});

export default connect(mapStateToProps,mapDispatchToProps)(Categories);
