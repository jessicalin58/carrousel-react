import React, { Component } from 'react';
import ImageCard from "./Components/ImageCard";
import ImageCard2 from "./Components/ImageCard";
import ImageCard3 from "./Components/ImageCard";
import ImageCard4 from "./Components/ImageCard";
import Wrapper from "./Components/Wrapper";
import items from "./items.json";
import './App.css';

//To make the API
var axios = require('axios');

//React based carousel
var Carousel = require('nuka-carousel');

//npm package to shuffle arrays.
var shuffle = require('shuffle-array'),
shuffledImages = items;

//Increase restImage for handleclick function 
var numberRest = 18;


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      items,
      test:[],
      newState: [],
      sliderOne: [],
      sliderTwo: [],
      sliderThree: [],
      sliderFour: [],
      restImages: [],
      id: null,
      pictures: [],
      shuffledImages,  
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){

    //API call with the movie data
    var th = this;
    this.serverRequest =
      axios.get('http://api.randomuser.me/?results=5')
        .then(function (result) {
          th.setState({
            persons: result.data.results
          });
        })   
  }

  componentWillMount(){

    this.randomizeJSON();
    this.Grab16();
    this.firstLoop();
    this.secondLoop();
    this.thirdLoop();
    this.forthLoop();
    this.grabRest();

  }


  // Grabbing 16 arrays to display inside the carrousel
  Grab16(){
    var list = shuffledImages, 
      i;
    for (i = 0; i < 16; i++) {
      
      this.state.newState[i] = list[i];
    }
  }

  //Setting the first slider arrays
  firstLoop(){
    var listTwo = this.state.newState,
    i;
    for(i = 0; i < 4; i++){
      this.state.sliderOne[i] = listTwo[i];
    }
  }

  //Setting the second slider arrays
  secondLoop() {
    var listThree = this.state.newState,
    j;

    for(j = 4; j < 8; j++) {
      this.state.sliderTwo[j] = listThree[j];
    }
  }

  //Setting the third slider arrays
  thirdLoop(){
    var listFour = this.state.newState,
      z;

    for (z = 8; z < 12; z++) {
      this.state.sliderThree[z] = listFour[z];
    }

  }

  //Setting the forth slider arrays
  forthLoop(){
    var listFive = this.state.newState,
      z;

    for (z = 12; z < 16; z++) {
      this.state.sliderFour[z] = listFive[z];
    }

  }

  //Arrays to be selected after click 
  grabRest(){
    var restList = shuffledImages,
      i;
    for (i = 17; i < 95; i++) {
      this.state.restImages[i] = restList[i];
    }
    console.log('Images to add',this.state.restImages);
  }

  // Randomize arrays function
  randomizeJSON(){
    shuffle(shuffledImages);
    this.setState({allshuffled: shuffledImages});
  }

  //First slider onClick function
  handleClick = (id) => {

    // Count to clicked id number
    var number = 0;
    // Find the array position 
    while (this.state.shuffledImages[number].itemData.id !== id) {
      number++;
    }

    //Change like status
    this.setState({arrayPosition: number});
    var arraTest = number;
    this.state.shuffledImages[arraTest].rating = 'like';
    // console.log('changed', this.state.newState);

    // Grab the position lopp
    if (this.state.restImages[numberRest] === this.state.restImages[17]) {
    } else {
      numberRest++;
    }

    console.log('state of clicked', this.state);


//////////////////////// SLIDE ONE//////////////////////////////////////////////////

    
    //Change the image clicked
    this.state.sliderOne.splice(arraTest, 1, this.state.shuffledImages[numberRest]);
    this.setState({ sliderOne: this.state.sliderOne });
    console.log('new state',this.state.newState);
    console.log('arratest', arraTest);

    //Delete if more than 4 inside array
    if (this.state.sliderOne > this.state.sliderOne[4]){
      this.state.sliderOne.pop();
      console.log('result', this.state.sliderOne);
    } else {
      console.log('nope');
    }

    //Change the positon of new card
    if( arraTest > 4) {
      // Count to clicked id number
      var positionNumber = 0;
      // Find the array position 
      while (this.state.sliderOne[positionNumber].itemData.id !== id) {
        positionNumber++;
      }
      this.state.sliderOne.splice(positionNumber, 1, this.state.shuffledImages[numberRest]);
      this.setState({ sliderOne: this.state.sliderOne });
    }
    
  }

  //Second slider onClick function
  handleClick2 = (id) => {
    // Count to clicked id number
    var number = 0;
    // Find the array position 
    while (this.state.shuffledImages[number].itemData.id !== id) {
      number++;
    }

    //Change like status
    this.setState({ arrayPosition: number });
    var arraTest = number;
    this.state.shuffledImages[arraTest].rating = 'like';
    // console.log('changed', this.state.newState);

    // Grab the position lopp
    if (this.state.restImages[numberRest] === this.state.restImages[17]) {
    } else {
      numberRest++;
    }

    console.log('state of clicked', this.state);

    //////////////////////// SLIDE TWO//////////////////////////////////////////////////

    //Change the image clicked
    this.state.sliderTwo.splice(arraTest, 1, this.state.shuffledImages[numberRest]);
    this.setState({ sliderTwo: this.state.sliderTwo });
    console.log('new state', this.state.newState);
    console.log('arratest', arraTest);


    //Change the positon of new card
    if (arraTest > 8) {
      // Count to clicked id number
      var positionNumber = 4;
      // Find the array position 
      while (this.state.sliderTwo[positionNumber].itemData.id !== id) {
        positionNumber++;
      }
    
      this.state.sliderTwo.splice(positionNumber, 1, this.state.shuffledImages[numberRest]);
      this.setState({ sliderTwo: this.state.sliderTwo });
    }

        //Delete if more than 4 inside array
    if (this.state.sliderTwo > this.state.sliderTwo[6]) {
      this.state.sliderTwo.pop();
   
    } else {
      console.log('nope');
    }

  }

  //Third slide onClick function
  handleClick3 = (id) => {

    // Count to clicked id number
    var number = 0;
    // Find the array position 
    while (this.state.shuffledImages[number].itemData.id !== id) {
      number++;
    }

    //Change like status
    this.setState({ arrayPosition: number });
    var arraTest = number;
    this.state.shuffledImages[arraTest].rating = 'like';
    // console.log('changed', this.state.newState);

    // Grab the position lopp
    if (this.state.restImages[numberRest] === this.state.restImages[17]) {
    } else {
      numberRest++;
    }

    console.log('state of clicked', this.state);

    //////////////////////// SLIDE THREE//////////////////////////////////////////////////


    //Change the image clicked
    this.state.sliderThree.splice(arraTest, 1, this.state.shuffledImages[numberRest]);
    this.setState({ sliderThree: this.state.sliderThree });
    console.log('new state', this.state.newState);
    console.log('arratest', arraTest);

    //Delete if more than 4 inside array
    if (this.state.sliderThree > this.state.sliderThree[12]) {
      this.state.sliderThree.pop();

    } else {
      console.log('nope');
    }

    //Change the positon of new card
    if (arraTest > 12) {

      // Count to clicked id number
      var positionNumber = 8;
      // Find the array position 
      while (this.state.sliderThree[positionNumber].itemData.id !== id) {
        positionNumber++;
      }

      this.state.sliderThree.splice(positionNumber, 1, this.state.shuffledImages[numberRest]);
      this.setState({ sliderThree: this.state.sliderThree });
    }

  }

  //Forth slider onClick function
  handleClick4 = (id) => {

    // Count to clicked id number
    var number = 0;
    // Find the array position 
    while (this.state.shuffledImages[number].itemData.id !== id) {
      number++;
    }

    //Change like status
    this.setState({ arrayPosition: number });
    var arraTest = number;
    this.state.shuffledImages[arraTest].rating = 'like';
    // console.log('changed', this.state.newState);

    // Grab the position lopp
    if (this.state.restImages[numberRest] === this.state.restImages[17]) {
    } else {
      numberRest++;
    }

    console.log('state of clicked', this.state);

    //////////////////////// SLIDE FOUR //////////////////////////////////////////////////


    //Change the image clicked
    this.state.sliderFour.splice(arraTest, 1, this.state.shuffledImages[numberRest]);
    this.setState({ sliderFour: this.state.sliderFour });
    console.log('new state', this.state.newState);
    console.log('arratest', arraTest);

    //Delete if more than 4 inside array
    if (this.state.sliderFour > this.state.sliderFour[13]) {
      this.state.sliderFour.pop();

    } else {
      console.log('nope');
    }

    //Change the positon of new card
    if (arraTest > 16) {

      // Count to clicked id number
      var positionNumber = 12;
      // Find the array position 
      while (this.state.sliderFour[positionNumber].itemData.id !== id) {
        positionNumber++;
      }

      this.state.sliderFour.splice(positionNumber, 1, this.state.shuffledImages[numberRest]);
      this.setState({ sliderFour: this.state.sliderFour });
    }

  }


  render() {
 
    return (
      
      <div className="App">
        <header className="App-header">
          <p className="App-title">Top recommendations for you</p>
        </header>
        
  
        <Carousel >
          <h1>      
         <Wrapper>
            {this.state.sliderOne.map(sliderOne => (              
              <ImageCard
                cover={sliderOne.cover}
                image={sliderOne.itemData.image}
                alt={sliderOne.id}
                key={sliderOne.key}
                id={sliderOne.itemData.id}
                rating={sliderOne.rating}
                name={sliderOne.name}
                handleClick={this.handleClick.bind(this)}
              />         
            ))}
            </Wrapper> </h1>
          <h1> <Wrapper>
            {this.state.sliderTwo.map(sliderTwo => (
              <ImageCard2
                cover={sliderTwo.cover}
                image={sliderTwo.itemData.image}
                alt={sliderTwo.id}
                key={sliderTwo.key}
                id={sliderTwo.itemData.id}
                rating={sliderTwo.rating}
                name={sliderTwo.name}
                url={sliderTwo.url}
                handleClick={this.handleClick2.bind(this)}
              />
            ))}
          </Wrapper></h1>
          <h1> <Wrapper>
            {this.state.sliderThree.map(sliderThree => (
              <ImageCard3
                cover={sliderThree.cover}
                image={sliderThree.itemData.image}
                alt={sliderThree.id}
                key={sliderThree.key}
                id={sliderThree.itemData.id}
                rating={sliderThree.rating}
                name={sliderThree.name}
                url={sliderThree.url}
                handleClick={this.handleClick3.bind(this)}

              />
            ))}
          </Wrapper></h1>
          <h1> <Wrapper>
            {this.state.sliderFour.map(sliderFour => (
              <ImageCard4
                cover={sliderFour.cover}
                image={sliderFour.itemData.image}
                alt={sliderFour.id}
                key={sliderFour.key}
                id={sliderFour.itemData.id}
                rating={sliderFour.rating}
                name={sliderFour.name}
                url={sliderFour.url}
                handleClick={this.handleClick4.bind(this)}

              />
            ))}
          </Wrapper></h1>
        </Carousel>
      </div>
    );
  }
}


export default App;
