/** @format */
const NEW_POST_TEXT = "NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

let initialState = {
  posts: [
    { id: 1, message: "hi" },
    { id: 2, message: "hello" },
    { id: 3, message: "velcombec" },
    { id: 4, message: "privit" },
    { id: 5, message: "hiiii" },
    { id: 6, message: "salam" },
  ],
  newPostText: "",
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 6,
        message: state.newPostText,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    default:
      return state;
  }
};

export const addPostAC = () => ({ type: ADD_POST });
export const updateNewPostTextAC = (text) => ({
  type: NEW_POST_TEXT,
  newText: text,
});

export default profileReduser;
