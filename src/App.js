import React from 'react'
import Counter from './components/task2-state_management/Counter'
import HandleIncrementCallback from './components/task3-Eventhandling-callbacks/HandleIncrementCallback'
import DataFetcher from './components/task4-Datafetching/DataFetcher'
import DataFetcher_Hooks from './components/task5-hooks/DataFetcher_Hooks'
import Profile from './components/task-component_creation/Profile'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Routes from './components/task6-routing/Components/Routes'
import Navigation from './components/task6-routing/Components/Navigation'
import About from './components/task6-routing/Components/About'
import Home from './components/task6-routing/Components/Home'
import TodoApp from './components/task7-Redux/TodoApp'


function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path='/todo' element={<TodoApp/>}/>
          <Route exact path ="/hooksdatafecthing" element={<DataFetcher_Hooks/>}/>
          <Route exact path='/Datafetcherclass' element={<DataFetcher/>}/>
          {/* <Route exact path='/eventHandling' element={}/> */}
          <Route exact path='/HandleIncrementCallback' element={<HandleIncrementCallback/>}/>
          <Route exact path='/Profile' element={<Profile/>}/>
          <Route exact path='/Counter' element={<Counter />}/>

        </Routes>
      </Router>
      {/* <Counter /> */}
      {/* <Profile/> */}
      {/* <HandleIncrementCallback/> */}
      {/* <DataFetcher/> */}
      {/* <DataFetcher_Hooks/> */}

    </>
  )
}

export default App