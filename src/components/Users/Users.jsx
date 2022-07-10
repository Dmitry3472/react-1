import React from "react";
import styles from "./users.module.css";

let Users = (props) => {
  debugger;
  if (props.users.length === 0) {
    debugger;
    props.setUsers([
      {
        id: 1,
        photoUrl: "https://klike.net/uploads/posts/2020-05/1590914808_5.jpg",
        followed: false,
        fullname: "Dmitry1",
        status: "My page1!",
        location: { city: "Ufa", country: "Russia" },
      },
      {
        id: 2,
        photoUrl: "https://klike.net/uploads/posts/2020-05/1590914808_5.jpg",
        followed: true,
        fullname: "Dmitry2",
        status: "My page2!",
        location: { city: "Moscow", country: "Georgia" },
      },
      {
        id: 3,
        photoUrl: "https://klike.net/uploads/posts/2020-05/1590914808_5.jpg",
        followed: true,
        fullname: "Dmitry3",
        status: "My page3!",
        location: { city: "Kiev", country: "Latvia" },
      },
      {
        id: 4,
        photoUrl: "https://klike.net/uploads/posts/2020-05/1590914808_5.jpg",
        followed: false,
        fullname: "Dmitry4",
        status: "My page4!",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 5,
        photoUrl: "https://klike.net/uploads/posts/2020-05/1590914808_5.jpg",
        followed: true,
        fullname: "Dmitry5",
        status: "My page5!",
        location: { city: "Sochi", country: "Ukrain" },
      },
    ]);
  }
  debugger;
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.Id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              ) : (
                <button onClick={() => props.follow(u.id)}>Follow</button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullname}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
