console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const body = document.getElementsByTagName("body");

const newPost = document.createElement("section");
newPost.classList.add("post");

const newPostContent = document.createElement("p");
newPostContent.classList.add("post__content");
newPostContent.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const newFooter = document.createElement("footer");
newFooter.classList.add("post__footer");

const newSapnUser = document.createElement("span");
newSapnUser.classList.add("post__username");
newSapnUser.textContent = "@username";

const newButtonLike = document.createElement("Button");
newButtonLike.classList.add("post__button");
newButtonLike.textContent = " ♥ Like";
newButtonLike.addEventListener("click", handleLikeButtonClick);

document.body.append(newPost);
newPost.append(newPostContent, newFooter);
newFooter.append(newSapnUser, newButtonLike);
