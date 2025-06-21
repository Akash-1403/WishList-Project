import { useState } from 'react';
import { v4 as uuid } from 'uuid';
// now we use the uuid name instead of v4.

// import './App.css'

function App() {

  // it add anything to the wishlist if you type on searchbar.
  const [wishList, setWishList] = useState('');


  const onWishlistChange = (e) => {
    const { value } = e.target;   // same as this --> const value = e.target.value
    setWishList(value)
  }
  // console.log(wishList);

  const [arrOfWishlist, setarrOfWishlist] = useState([]);

  const onAddClick = () => {
    setarrOfWishlist([...arrOfWishlist, { id: uuid(), wishList: wishList, isCompleted: false }])
    setWishList('');
  }
  // console.log(arrOfWishlist);

  const onDeleteClick = (id) => {
    // console.log(id)
    const filteredArr = arrOfWishlist.filter(wishList => wishList.id !== id)
    setarrOfWishlist(filteredArr)
  }

  const onWishCheckChange = (e,id) => {
    // console.log(e.target.checked)
   const updateWishList = arrOfWishlist.map(wishList => wishList.id === id ? {...wishList, isCompleted: !wishList.isCompleted} : wishList);
   setarrOfWishlist(updateWishList);
  }


console.log(arrOfWishlist)

  return (
    <>

      <div className="main-div">

        <h1>Your Wishlist </h1>

        <div>
          <input value={wishList} onChange={onWishlistChange} className="searchbar" type="text" placeholder="Add your wishlist here" />

          <button onClick={onAddClick} className="search-btn"  >Add</button>
        </div>

        <div className='delete'>
          {
            /*  to render the arrayOfWishlist
             here we destructuring the arrofWishList , into three names , so now we dont need to write the wishList.id , now we write directly id  */
            arrOfWishlist.map(({id, wishList,isCompleted}) => (
              <div className='deleteBox' key={id} >
                <label>
                  <input checked={isCompleted} type='checkbox' onChange={(e)=> onWishCheckChange(e,id)} />
                  <span className={isCompleted ? 'strike' : ''} >{wishList}</span>
                </label>
                <button onClick={() => onDeleteClick(id)} className='deleteIcon'>

                  <img src="./image.png" alt="deleteimg" className='deleteImg' />
                </button>
              </div>


            ))
          }
        </div>
      </div>

    </>
  )
}

export default App
