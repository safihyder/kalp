import React,{forwardRef} from 'react'
import Spline  from '@splinetool/react-spline';
import './About.css'
const About = forwardRef((props,ref) => {
    return (
        <div ref={ref} id='about'>
            <div className='flex lg:flex-row flex-col-reverse gap-y-12 items-center justify-around mb-20 h-fit lg:h-[90vh]'>
                {/* <div class="pyramid-loader">
                    <div class="wrapper">
                        <span class="side side1"></span>
                        <span class="side side2"></span>
                        <span class="side side3"></span>
                        <span class="side side4"></span>
                        <span class="shadow"></span>
                    </div>
                </div> */}
                <div className='flex items-center  justify-center w-[90%] lg:w-[60%]'>
                    {/* <h1 className='text-[#42b1de] text-5xl font-bold mb-6'>About</h1> */}
                    <p className='text-white  lg:text-left text-center text-xl leading-8 w-[90%]'>The <b><span className='text-[#45b1df]'>Khatamul Ambia Library</span></b> in Poonch city stands as a beacon of knowledge and enlightenment, providing a rich resource for education, learning, and spiritual reflection. It was the vision and dedication of <b><span className='text-[#45b1df]'>Nazar Hussain Nehvi</span></b> that laid the foundation for this library, ensuring that future generations have access to a wealth of knowledge. His relentless efforts in creating this institution have transformed it into a hub for research, intellectual growth, and guidance for the community. Through his selfless contribution, Nazar Hussain Nehvi has left an enduring legacy, inspiring people to seek wisdom and understanding. </p>
                </div>
                <div className=' flex justify-center w-[100%] tablet:w-[35%] tablet:h-[100%]  h-[50vh] flex-col'>
                    <Spline scene="https://prod.spline.design/t7YMVyn9ie-UwJVh/scene.splinecode"/>
                {/* <img src="./NazarNehvi.png" alt=""  width={200}/> */}
                {/* <span className='text-center'>Alhaj Nazar Hussain Nehvi</span> */}
                </div>
            </div>
        </div>
    )
})

export default About