


const commentForm = document.querySelector('#comment-form');
const commentInput = document.querySelector('#comment-input')
const commentList = document.querySelector('#list');
const parentList = document.createElement('ul');
parentList.id = 'parentList'
commentList.append(parentList)



commentForm.addEventListener('submit' , (e) => {
  //prevents refresh on comment submit
  e.preventDefault() 

  //creates a list element, sets text to the input on the form, adds list to parentList(ul)
  const addComment = () => {
    const newComment = document.createElement('li')
    newComment.innerText = commentInput.value
    parentList.append(newComment)
  }

  //Calls addComent() on each submission, clears the input box.
  addComment()
  commentForm.reset()
})



