import React from 'react'

export default function Test2(props) {
    return (
        <>

            <div className='card' >
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="card-title">
                        <h5 className="card-item">{props.dress}
                        <div className='size'>
                        <button className="button1"></button>
                        <button className="button2"></button>
                        <button className="button3"></button>
                    </div></h5>
                        <h5 className="card-text">MRP-{props.val}
                        <div className='size'>
                        <button className="button1">S</button>
                        <button className="button2">M</button>
                        <button className="button3">L</button>
                        </div>
                        </h5>
                    </div>
                </div>
                <button>BUY</button>
            </div>
            <br />
            <div className="card card-below"><div className="card-item1">
                <span className="heading">{props.heading}</span>
                <h5 className="code">{props.code}</h5>

            </div>
                <div className="card-item2">
                    <h5 className='discount'>20%</h5>
                    <span className='discount'> Off</span>

                </div></div>

            <div>
            </div>

        </>
    );
}
