import {rerenderEntireTee} from "./rerender";

/** @format */

let state = {
profilePage:{ posts:[
        {id:1,message:'hi' },
        {id:2,message:'hello' },
        {id:3,message:'velcombec' },
        {id:4,message:'privit' },
        {id:5,message:'hiiii' },
        {id:6,message:'salam' },
    ],
newPostText:'',
},


    messagesPage: {
        dialog:[
            {id:1,name:'Denys'},
            {id:2,name:'Vitali'},
            {id:3,name:'Victor'},
            {id:4,name:'Volodymyr'},
            {id:5,name:'Adam'},
        ],
      message:[
            {id:1,messag:'hhhsal'},
            {id:2,messag :'hhhdsfdassal'},
            {id:3,messag:'hhhsassssssl'},
            {id:4,messag:'hhhsal'},
            {id:5,messag:'hhhsasdfasdal'},
            {id:6,messag:'hhhasdfsal'},
        ],},

};
  export let addPost = () => {
    let newPost = {
        id:7,
        message: state.profilePage.newPostText,
    }
      state.profilePage.posts.push(newPost);
      state.profilePage.newPostText='';
      rerenderEntireTee(state);
  };

  export let updateNewPostText =(newText)=>{
        state.profilePage.newPostText=newText;

      rerenderEntireTee(state);
  }

export default state;