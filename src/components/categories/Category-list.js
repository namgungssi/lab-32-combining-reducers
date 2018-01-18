import React from 'react';
import {connect} from 'react-redux';
import CategoryItem from './Category-item';



class CategoryList extends React.Component {
  render() {

    const categories = this.props.categories.categories;
    let border="";
    if(!categories.length) border="no_show";
    else border="show";

    return (
      <div id="kanban" className={border}>
      {
        categories.map(category =>
          <CategoryItem handleDelete={this.props.handleDelete}
          handleUpdate={this.props.handleUpdate}
          key={category.id} category={category}
          />)
        }
        </div>
      )
    }
  }



  export default CategoryList;
