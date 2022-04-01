import React from 'react'
import Blogs from './Blogs'
import Form from '../src/components/Form'
import Todo from './Todo'
import Map from './components/Map'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      {/* <Todo /> */}
      {/* <Form /> */}
      {/* <Blogs /> */}
      <div className="map_and_form">
        <div className="container">
          <div className="row">
            <Map />
            <Form />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App