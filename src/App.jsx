import React from 'react'
import './App.css'
import Test2 from './Test2';
export default function App() {
  
  const img = ['https://i.imgur.com/8JIWpnw.jpg', 'https://i.imgur.com/PtepOpe.jpg', 'https://i.imgur.com/ePJKs8Q.jpg', 'https://i.imgur.com/snffLH3.jpg'];

  const product = ['White traditional long dress', 'Long sleeve denim jacket', 'Hush Puppies', "Athen's Skirt"];

  const price = [20, 40, 10, 15];

  const head = ['Monday Happy', 'Payday Surprise', 'First order', 'Vegetarian Food'];

  const code = ['#MONHPY', '#SRPSPYDY', '#HPYFRST', '#VEGANLOVE'];

  return (
    <>
      <div>
        <h1>Made by Anshuman Singh- (practise test-2)</h1><br /><br />
        <div className="container ">
          <div className="row">
            {
              img.map((val, key) => {
                return <div className='col-md-3'><Test2 image={img[key]} dress={product[key]} heading={head[key]} code={code[key]} val={price[key]} />
                  <br />
                </div>
              })
            }
          </div>
        </div>
      </div>
      <br />
    </>

  )
}
