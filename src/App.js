import React, { Component } from 'react';
// import logo from './logo.svg';
import ImageCard from "./Components/ImageCard";
import Wrapper from "./Components/Wrapper";
import items from "./items.json";
import './App.css';
// var createReactClass = require('create-react-class');

var Carousel = require('nuka-carousel');
var shuffle = require('shuffle-array'),
shuffledImages = items;

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
      sliderFour: []
   
    
    }
  }


  // state = {
  //   items
  // };
  componentWillMount(){

    // function getRandom(items) {
    //   return Math.floor(Math.random() * items.lenght);
    //   console.log(getRandom(items));
    // }

    // for (var i = 0; i < 3; i++) {
    //   // var newItems = this.setState(getRandom(newItems) ,1);
    //   console.log(items[i])
    //   this.setState({
    //     images: items[i]
    //   });
    //   // console.log(images);
    // }
    this.test();
    this.randomImage();
    this.randomImageTwo();
    this.randomImageThree();
    this.randomImageFour();
    this.testImage();
    this.sortRandom();
    this.firstLoop();
    this.secondLoop();
    this.thirdLoop();
    this.forthLoop();
  
   
  }

  testImage(){
    var list = shuffledImages, 
      length = list.length,
      i;
    for (i = 0; i < 16; i++) {
      // console.log(list[i]);
      this.state.newState[i] = list[i];
    }
    // console.log(this.state.newState);
    // this.setState(newState);
    // this.test();
  }

  firstLoop(){
    var listTwo = this.state.newState,
    length = listTwo.length,
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

  sortRandom() {
    var randomList = this.state.newState;
    length = randomList.length,
    j;

    for (var j = 0; j < Math.floor(Math.random() * 10); j++) {
      // console.log(randomList[j]);
    }
    // var randomTest = this.state.newState[Math.floor(Math.random() * this.state.newState.length)];
    // var newImageTest = this.state.test.concat(randomTest);
    // this.setState({ test: newState }), function () {
    //   // console.log(this.state.test);
    //   // console.log(newImageTest);
    // }


    // console.log(randomTest);
    // console.log(this.state.test);
    // console.log(this.state.test);

  } 

  randomImage(){
    var random = shuffledImages[Math.floor(Math.random() * shuffledImages.length)];
   
    var newImage = this.state.images.concat([random]);
    // console.log(newImage)
    this.setState({images: newImage}, function(){
      console.log(random);
    });
    // this.setState({
    //   images: random
    // })
    // console.log(random)
    // console.log(this.state.images);
  }

  randomImageTwo(){
    var randomTwo = items[Math.floor(Math.random() * items.length)];
    var newImageTwo = this.state.imagesTwo.concat([randomTwo]);
    this.setState({ imagesTwo: newImageTwo }, function () {
    });

  }

  randomImageThree(){
    var randomThree = items[Math.floor(Math.random() * items.length)];
    var newImageThree = this.state.imagesThree.concat([randomThree]);
    this.setState({ imagesThree: newImageThree }, function () {
    });
  }

  randomImageFour() {
    var randomFour = items[Math.floor(Math.random() * items.length)];
    var newImageFour = this.state.imagesFour.concat([randomFour]);
    this.setState({ imagesFour: newImageFour }, function () {
    });
  }

  test(){

    shuffle(shuffledImages);
  }

  render() {
   
    // console.log(shuffledImages);
    console.log("Slider One",this.state.sliderOne);
    console.log("Slider Two", this.state.sliderTwo);
    console.log("Slider Three", this.state.sliderThree);
    console.log("Slider Four", this.state.sliderFour);
    // console.log(this.state.items.itemData.id[18]);
    // console.log(this.state.images);
    // console.log(this.state.items);
    // console.log(this.state.items.itemData);
    
    // var list = items, 
    //   length = list.length,
    //   i;

    // for (i = 0; i < 2; i++) {
    //   console.log(list[i]);
    // }

    // var newState = {};
    // for(var i in items ){
    //   newState[i] = items;
    // }    
    // this.setState(newState);

    return (
      
      <div className="App">
        <header className="App-header">
          <p className="App-title">Top recommendations for you</p>
        </header>
        <Carousel>
          <h1>      
           <Wrapper>
            {this.state.sliderOne.map(sliderOne => (
              <ImageCard
                cover={sliderOne.cover}
                image={sliderOne.itemData.image}
                alt={sliderOne.id}
                key={sliderOne.key}
                id={sliderOne.id}
                rating={sliderOne.rating}
                name={sliderOne.name}
              />
            ))}

          </Wrapper></h1>
          <h1> <Wrapper>
            {this.state.sliderTwo.map(sliderTwo => (
              <ImageCard
                cover={sliderTwo.cover}
                image={sliderTwo.itemData.image}
                alt={sliderTwo.id}
                key={sliderTwo.key}
                id={sliderTwo.id}
                rating={sliderTwo.rating}
                name={sliderTwo.name}
                url={sliderTwo.url}
       
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
                id={sliderThree.id}
                rating={sliderThree.rating}
                name={sliderThree.name}
                url={sliderThree.url}

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
                id={sliderFour.id}
                rating={sliderFour.rating}
                name={sliderFour.name}
                url={sliderFour.url}

              />
            ))}
          </Wrapper></h1>
        </Carousel>
  

      </div>
    );
  }
}

export default App;
