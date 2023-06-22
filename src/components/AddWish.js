import React from 'react'

export default function AddWish() {
  return (
    <div>
        <form className='form'>
            <input type='text' className='addWish' placeholder='Add a new wish' name='title' value="New Task" />
            <input type='submit' className='sbmt' value='Add Task' />
            
        </form>
    </div>
  )
}
