import './App.css';
import Body from './components/Body'
import GallaryFooter from './components/GallaryFooter';
import Header from './components/header';



function App(props) {
  return (
    <div>
     <Header/>

      <Body Data={props.lake}/>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
