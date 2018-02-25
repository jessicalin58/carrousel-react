import React, { Component } from 'react';
import ImageCard from "./Components/ImageCard";
import Wrapper from "./Components/Wrapper";
import items from "./items.json";

import './App.css';
// var createReactClass = require('create-react-class');
// var ReactDOM = require('react-dom');
// var axios = require('axios');

var Carousel = require('nuka-carousel');
var shuffle = require('shuffle-array'),
shuffledImages = items;

//Increase restImage
var numberRest = 18;


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      items,
      images: [],
      imagesTwo: [],
      imagesThree: [],
      imagesFour: [],
      test:[],
      newState: [],
      sliderOne: [],
      sliderTwo: [],
      sliderThree: [],
      sliderFour: [],
      restImages: [],
      id: null,

      pictures: [],

      shuffledImages
      
      
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){

    fetch('http://randomuser.me/api/?results=500')
    .then(results =>{
      return results.json();
    }).then(data => {
      let pictures = data.results.map((pic) => {
        return(
          <div key={pic.results}>
          <img src={pic.picture.medium} />
          </div>
        )
      })
      this.setState({pictures: pictures});
      console.log('pictures', this.state.pictures);

    })
   
  }


  componentWillMount(){

    this.randomizeJSON();
    this.randomImage();
    this.Grab16();
    this.firstLoop();
    this.secondLoop();
    this.thirdLoop();
    this.forthLoop();
    this.grabRest();
    console.log('state,huddled',this.state.shuffledImages);
  }

  Grab16(){
    var list = shuffledImages, 
      length = list.length,
      i;
    for (i = 0; i < 16; i++) {
      this.state.newState[i] = list[i];
    }
  }

  firstLoop(){
    var listTwo = this.state.newState,
    i;
    for(i = 0; i < 4; i++){
      this.state.sliderOne[i] = listTwo[i];
    }
  }

  secondLoop() {
    var listThree = this.state.newState,
    length = listThree.length,
    j;

    for(j = 4; j < 8; j++) {
      this.state.sliderTwo[j] = listThree[j];
    }
  }

  thirdLoop(){
    var listFour = this.state.newState,
      length = listFour.length,
      z;

    for (z = 8; z < 12; z++) {
      this.state.sliderThree[z] = listFour[z];
    }

  }

  forthLoop(){
    var listFive = this.state.newState,
      length = listFive.length,
      z;

    for (z = 12; z < 16; z++) {
      this.state.sliderFour[z] = listFive[z];
    }

  }

  grabRest(){
    var restList = shuffledImages,
      length = restList.length,
      i;
    for (i = 17; i < 95; i++) {
      this.state.restImages[i] = restList[i];
    }
    console.log('Images to add',this.state.restImages);
  }

  randomImage(){
    var random = shuffledImages[Math.floor(Math.random() * shuffledImages.length)];
   
    var newImage = this.state.images.concat([random]);
    // console.log(newImage)
    this.setState({images: newImage}, function(){
      // console.log(random);
    });
    // this.setState({
    //   images: random
    // })
    // console.log(random)
    // console.log(this.state.images);
  }


  randomizeJSON(){
    shuffle(shuffledImages);
    this.setState({allshuffled: shuffledImages});
  }

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
    console.log('changed', this.state.newState);

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


  render() {
    console.log('result', this.state.persons);
    // console.log(shuffledImages);
    console.log("Slider One",this.state.sliderOne);
    console.log("Slider Two", this.state.sliderTwo);
    console.log("Slider Three", this.state.sliderThree);
    console.log("Slider Four", this.state.sliderFour);

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
              <ImageCard
                cover={sliderTwo.cover}
                image={sliderTwo.itemData.image}
                alt={sliderTwo.id}
                key={sliderTwo.key}
                id={sliderTwo.itemData.id}
                rating={sliderTwo.rating}
                name={sliderTwo.name}
                url={sliderTwo.url}
                handleClick={this.handleClick.bind(this)}
              />
            ))}
          </Wrapper></h1>
          <h1> <Wrapper>
            {this.state.sliderThree.map(sliderThree => (
              <ImageCard
                cover={sliderThree.cover}
                image={sliderThree.itemData.image}
                alt={sliderThree.id}
                key={sliderThree.key}
                id={sliderThree.itemData.id}
                rating={sliderThree.rating}
                name={sliderThree.name}
                url={sliderThree.url}
                handleClick={this.handleClick.bind(this)}

              />
            ))}
          </Wrapper></h1>
          <h1> <Wrapper>
            {this.state.sliderFour.map(sliderFour => (
              <ImageCard
                cover={sliderFour.cover}
                image={sliderFour.itemData.image}
                alt={sliderFour.id}
                key={sliderFour.key}
                id={sliderFour.itemData.id}
                rating={sliderFour.rating}
                name={sliderFour.name}
                url={sliderFour.url}
                handleClick={this.handleClick.bind(this)}

              />
            ))}
          </Wrapper></h1>
        </Carousel>
      </div>
    );
  }
}


export default App;
