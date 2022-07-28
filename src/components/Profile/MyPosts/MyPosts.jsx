import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className="content">
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                
            </div>

            <div className={s.posts}>
                <Post message="Hi, how are you?" like="25"/>
                <Post message="It's my first post" like="15"/>
                
            </div>
        </div>

    );
}

export default MyPosts;