import React from 'react'

const ContactCard = (props) => {
    const {id, name, email}=props.contact;
  return (
    <div className='item'>
        <i class="user circle icon"></i>
    <div className='content'>
        <div className='header'>{name}</div>
        <div>{email}</div>
    </div>
    <i className='trash alternate outline icon' style={{color:'red', marginTop:'7px'}}></i>
</div>
  )
}

export default ContactCard
