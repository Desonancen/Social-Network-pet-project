import React from 'react'
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {reduxForm, Field} from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
    <Field name="newPostText" component={Textarea}  placeholder="Make your post" validate={[required, maxLength10]}/>
    </div>
    <div>
    <button>Add post</button>
    </div>
    </form>)
}

AddNewPostForm = reduxForm ({form:"ProfileAddNewPostForm"}) (AddNewPostForm);

const MyPosts = React.memo( (props) => {

    let postElements = props.posts.map( p => <Post message={p.message} likes={p.likesCount}/> );

    let newPostElement = React.createRef();

    let onAddPosts = (values) => {
        props.addPosts(values.newPostText); 
    }

  return (
      <div className="classes.postsBlock">
      <h3>My posts</h3>
      <AddNewPostForm onSubmit={onAddPosts} />
  <div className= {classes.posts}>
  {postElements}
  </div>
      </div>
  )
});



export default MyPosts;
