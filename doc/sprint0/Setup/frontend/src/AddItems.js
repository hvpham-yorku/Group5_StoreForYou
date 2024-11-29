import React, { useRef, useState } from 'react';
import './AddItems.css';


function AddItems(){
   const [upload, setUpload]=useState(null); 
   const upInput=useRef();

   const picPreview=(event)=>{
  
    const pre=event.target.files[0];
    

    if(pre){
        const fileRead= new FileReader(); 
        fileRead.readAsDataURL(pre);
        fileRead.onloadend=()=>{
             setUpload(fileRead.result);
            }     
    }
   };
  
    return(
        <div>
            <div className='titlewindow'>Listing Detail</div>
    <div>
    <div className='uploadwindow'>
        </div>
        <form> 
            <div><h2>PHOTOS & VIDEO</h2></div>
            <br />
        <div className='picture'>
           
            <label for='upload' className='index'>
             
           {upload?(<div>
           
                <br></br>
                <img className='uploaded' src={upload} alt="null" />
                <br></br>
                <div><button className='clearFile' onClick={()=>setUpload(null)}>Clear Choice</button></div>
                
            </div>
            
            ):(
           <div>
            <img className='image' src='/camera.png' alt='null' onClick={() => upInput.current.click()}></img>
            <br>
            </br><div>
            <input className='inputA' id='before' type='file' name='uploaded' onChange={picPreview}  ref={upInput} accept='.mp4, .jpg, .png'multiple ></input>
            <span className='addtext' >Add Photo & Video</span></div>
            </div>)
            }  
          
          </label>
          </div>
    </form>
        </div>
        
        <br/>
     
        <div className='infobox'>
           <div className='titleshow'><h2>DETAILS</h2></div> 
    <form>
           <div className='textbox'>
            <label> 
            <div className='textline'>
            <span className='prefix'>Category</span><span className='content'><input className='inputB' placeholder='required'/></span> </div>
            
            <div className='textline'>
            <span className='prefix'>Quantity</span><span className='content'><input className='inputB' placeholder='optional'/></span></div>
            
            <div className='textline'>
            <span className='prefix'>Size</span><span className='content'><input className='inputB' placeholder='required'/></span></div>

            <div className='textline'>
            <span className='prefix'>Brand</span><span className='content'><input className='inputB' placeholder='optional'/></span></div>
            
            <div className='textline'>
            <span className='prefix'>Description</span><span className='content'><input className='inputB' placeholder='required'/></span></div>

            <div className='textline'>
            <span className='prefix'>Price</span><span className='content'><input className='inputB' placeholder='required'/></span></div>
            
            <div >
            <span className='prefix'>Additional Info</span><span className='content'><input className='inputB' placeholder='optional'/></span></div>
            
            </label>
            
           </div>
     

     </form>

    </div>

</div>
    );

}


export default AddItems;