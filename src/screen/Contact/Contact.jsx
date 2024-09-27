import React, { forwardRef } from 'react'
import Button from '../../components/Animations/Button'
import Form from '../../components/Form/Form'
const Contact = forwardRef((props,ref) => {
    return (
        <div ref={ref} id='contact'>
            <div className='flex flex-col-reverse tablet:flex-row gap-y-12 items-center justify-around mb-20 h-fit tablet:h-[100vh]'>
                <div className='flex flex-col items-center justify-center tablet:w-[50%] h-[100%]' >

                    {/* <img src='./bluebook.png' width={250} height={250} alt="" /> */}
                    <Form/>
                </div>
                <div className='tablet:w-[50%] flex flex-col items-center '>
                    <h1 className='text-[rgb(66,177,222)] text-5xl font-bold my-6'><span>Contact</span></h1>
                    <Button/>
                </div>

            </div>
        </div>

    )
})

export default Contact