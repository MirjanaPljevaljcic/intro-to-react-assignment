function UserProfile({ user }) {
    return (
        <div>
            <img src={user.imgUrl} alt={user.name} />
            <h3>{user.name}</h3>
            <p>{user.email}</p>
        </div>
    );
}

export default UserProfile;