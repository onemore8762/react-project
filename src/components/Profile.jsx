import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className="content">
            <div>
                <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"></img>
            </div>
            <div>
                ava + description
            </div>

            <div className={s.posts}>
                My posts
                <div>
                    New posts
                </div>
                <div className={s.item}>
                    Post 1
                </div>
                <div className={s.item}>
                    Post 2
                </div>
            </div>
        </div>
);
}

export default Profile;