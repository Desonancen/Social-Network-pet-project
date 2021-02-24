import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://icdn.lenta.ru/images/2020/08/05/12/20200805123026612/wide_4_3_326db87d153dc33f5d71c8e6f55b9327.jpg" alt="avatar" />
      {props.message}
            <div>
                <span>{props.likes} like</span>
            </div>
        </div>
    );
}



export default Post;
