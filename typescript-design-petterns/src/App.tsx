import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DecoratorPatternView } from './decoratorPattern/PatternView'
import { HomePage } from './HomePage'
import { ThemeFactoryView } from './factoryPattern/PatternView'
import { ObserverPatternView } from './observerPattern/PatternView'
import { StrategyPatternView } from './strategyPattern/PatternView'
import { NavBar } from './NavBar'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/decorator-pattern' element={<DecoratorPatternView />} />
          <Route path='/factory-pattern' element={<ThemeFactoryView />} />
          <Route path='/observer-pattern' element={<ObserverPatternView />} />
          <Route path='/strategy-pattern' element={ <StrategyPatternView />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
