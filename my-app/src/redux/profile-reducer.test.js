import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

it('length post should be incremented', () => {
 // 1. test data
  let action = addPostActionCreator("it-kamasutra.com");
  let state = {
    posts:[
        {id:1, message:'Hi, I love u', likesCount:5},
        {id:2, message:'Sorry for that', likesCount:2},
        {id:3, message:'I like Dark Souls', likesCount:20},
        {id:4, message:'Dude, are u mad??', likesCount:10},
        {id:5, message:'Cool', likesCount:30},
        {id:6, message:'Great job', likesCount:50},
      ],
};
//2. action
  let newState = profileReducer({state},{action})  

  // 3. expectation
  expect (newState.posts.length).toBe(7);
});


it('message of new post should be correct', () => {
    // 1. test data
     let action = addPostActionCreator("it-kamasutra.com");
     let state = {
       posts:[
           {id:1, message:'Hi, I love u', likesCount:5},
           {id:2, message:'Sorry for that', likesCount:2},
           {id:3, message:'I like Dark Souls', likesCount:20},
           {id:4, message:'Dude, are u mad??', likesCount:10},
           {id:5, message:'Cool', likesCount:30},
           {id:6, message:'Great job', likesCount:50},
         ],
   };
   //2. action
     let newState = profileReducer({state},{action})  
   
     // 3. expectation
     expect (newState.posts[4].message).toBe('Dude, are u mad??');
   });

   it('after deleting length of messages should be decrement', () => {
    // 1. test data
     let action = deletePost(1);
     let state = {
       posts:[
           {id:1, message:'Hi, I love u', likesCount:5},
           {id:2, message:'Sorry for that', likesCount:2},
           {id:3, message:'I like Dark Souls', likesCount:20},
           {id:4, message:'Dude, are u mad??', likesCount:10},
           {id:5, message:'Cool', likesCount:30},
           {id:6, message:'Great job', likesCount:50},
         ],
   };
   //2. action
     let newState = profileReducer(state,action)  
   
     // 3. expectation
     expect (newState.postslenght).toBe(5);
   });

   it('after deleting length of messages shouldn`t be decrement if id is incorrect', () => {
    // 1. test data
     let action = deletePost(1000);
     let state = {
        posts:[
            {id:1, message:'Hi, I love u', likesCount:5},
            {id:2, message:'Sorry for that', likesCount:2},
            {id:3, message:'I like Dark Souls', likesCount:20},
            {id:4, message:'Dude, are u mad??', likesCount:10},
            {id:5, message:'Cool', likesCount:30},
            {id:6, message:'Great job', likesCount:50},
          ],
    };
   //2. action
     let newState = profileReducer(state,action)  
   
     // 3. expectation
     expect (newState.postslenght).toBe(6);
   });
