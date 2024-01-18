import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (


        <div className="container">
            <div className="col"> <div className="image"><Link to="/thirdpost"><img src="./img/Без названия (1).jpeg" alt="" /></Link> </div>
                <div className="name">

                    <h1><Link className='perehod' to="/thirdpost" >Photoshop-Wed-Design</Link></h1>
                    <b className="price">$290</b>

                </div>
                <h6>25 Reviews</h6>
                <div className="opis-name">
                    <p className="opis">Celebrate succes right,the only way,apple.To <br /> succed you must beleive.When you belirve,<br />you will succed.</p>
                    </div>
                <div className="grafic">
                    <div className="year"><h3>1 year</h3>
                    <p className="course">Course</p>
                    </div>
                    <div className="class-size">
                        <h3>25</h3>

                        <p className="size">Class-size</p>
                        </div>
                    <div className="rabota">
                        <h3>7:00-10:00</h3>
                        <p className="duration">Class Duration</p>
                    </div>

                </div>
            </div>


            
            <div className="col">
                <div className="image"><Link to="/thirdpost"><img src="./img/Без названия (2).jpeg" alt="" /></Link></div> <div className="name">
                <h1><Link className='perehod' to="/thirdpost" >Photoshop-Wed-Design</Link></h1>
                    <b className="price">$290</b>
                    <br />
                </div><h6>25 Reviews</h6>
                <div className="opis-name"><p className="opis">Celebrate succes right,the only way,apple.To <br /> succed you must beleive.When you belirve, <br />you will succed.</p></div>
                <div className="grafic"><div className="year"><h3>1 year</h3><p className="course">Course</p></div>
                    <div className="class-size"><h3>25</h3>
                        <p className="size">Class-size</p></div>
                    <div className="rabota">
                        <h3>7:00-10:00</h3>
                        <p className="duration">Class Duration</p>
                    </div>

                </div>
            </div>
            <div className="col"> <div className="image"><Link to="/thirdpost"><img src="./img/Без названия.jpeg" alt="" /></Link></div> <div className="name">
            <h1><Link className='perehod' to="/thirdpost" >Photoshop-Wed-Design</Link></h1>
                <b className="price">$290</b>
                <br />
            </div><h6>25 Reviews</h6>
                <div className="opis-name"><p className="opis">Celebrate succes right,the only way,apple.To <br /> succed you must beleive.When you belirve,<br />you will succed.</p></div>
                <div className="grafic"><div className="year"><h3>1 year</h3><p className="course">Course</p></div>
                    <div className="class-size"><h3>25</h3>
                        <p className="size">Class-size</p></div>
                    <div className="rabota">
                        <h3>7:00-10:00</h3>
                        <p className="duration">Class Duration</p>
                    </div>

                </div>
            </div>
        </div>



    )
}

export default Home