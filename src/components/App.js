// create your App component here

/* 
Deliverables
- use the `useState` hook for the `image` and `likes` variables
-when the New Corgi Button is clicked , use the`handleNewCorgiClick` function to fetch a random Corgi
image.use image response from fetch to set the image variable
-when the like button is clicked,create an event handle that will increment the number of likes
in.state.Use the callback version of the state setter function too set the new numbe rof likes.
*/

function App(){
    const [image, setImage] =useState("https://dog.ceo/api/breeds/image/random")
   const [likes,setlikes] =useState(20)
   
   
    function  handleNewCorgiClick() {
   fetch("https://dog.ceo/api/breeds/image/random")
   .then((response) => response.json())
   .then(({image}) => {
   setImage(image)
   
   })
   
   function handleLikeClick(){
       setlikes(likes + 1)
   }
   return (
   
   <div>
   <h1>Corgifinder</h1>
   <div className="button">
   <button onClick={handleNewCorgiClick}>New Corgi Please</button>
   <button onClick={handleLikeClick}>Likes:{likes}</button>
   </div>
   <img src={image} alt="Random Corgi"/>
   </div>
   
   );
   
   }
   
   }
   
   export default App
   