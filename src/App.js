import './App.css';

import react, { Component } from 'react'; 
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';




export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
    person: {
      fullName:"Sarra Hamroun" ,
      bio: "loves animals", 
      imgSrc: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fperson&psig=AOvVaw3e19XIFdN4P47x2DxFpeWw&ust=1683979719623000&source=images&cd=vfe&ved=0CBIQjhxqFwoTCKDgt7nf7_4CFQAAAAAdAAAAABAE", 
      profession: "student",
    },
    shows: false,
    count: 0,
  }
}
  toggle = () => {
  this.setState({shows: !this.state.shows});
  console.log(this.state.shows)
}
/*  profile = () => {
    return(
      <>
        <img src={this.state.imgSrc} alt="person" />;
        <h3> {this.state.fullName}</h3>;
        <h3> {this.state.bio}</h3>;
        <h3> {this.state.profession}</h3>;
      </>
    )
  }*/
  componentDidMount(){
    setInterval(()=>(
      this.setState(prevState=>({
        count: prevState.count + 0.5
  }))
    ),1000)
  }

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.toggle} >show</Button>
        { this.state.shows ? 
        (<><img src={this.state.imgSrc} alt="person" />
          <h3> {this.state.fullName}</h3>
          <h3> {this.state.bio}</h3>
          <h3> {this.state.profession}</h3>
          </>): null }
          <h3> {this.state.count} sec...</h3>
      </>
    )
  }
}

