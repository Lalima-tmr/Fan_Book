function addPost() {
      var name = document.getElementById("text").value;
      var comment = document.getElementById("comment").value;
  
      var postBox = document.getElementById("post-box");
  
      // Create new post element
      var newPost = document.createElement("div");
      newPost.classList.add("mypost");
  
      // Create post content
      var postContent = document.createElement("p");
      postContent.innerHTML = "<strong>" + comment + "</strong><br>"+ " - " +name;
  
      // Append post content to new post element
      newPost.appendChild(postContent);
  
      // Append new post to post box
      postBox.appendChild(newPost);
  
      // Clear input fields
      document.getElementById("text").value = "";
      document.getElementById("comment").value = "";
    }
