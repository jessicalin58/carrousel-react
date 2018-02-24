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
      sliderFour: [],
      restImages: [],
      id: null,
      showResults: true,
      
      
    };
    this.handleClick = this.handleClick.bind(this);
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
  }

  handleClick = (id) => {

    // this.setState({ showResults: false});
    const imagesMap = this.state.sliderOne.map(testArray=> {
      const newImageMap = {...testArray};
      // console.log('id', newImageMap.itemData.id);
      // imageClicked.rating = 'liked';
      // console.log('imageClicke', newImageMap.itemData.id);
    
      // this.setState({ sliderOneIds: this.newImageMap.itemData.id });
      // console.log('new id state:',this.state.sliderOneIds);
      // console.log('test',this.state.sliderOne.slice(imageClicked));
      if (newImageMap.itemData.id !== id) {
        // console.log('3');
      }

      const subtractArray = newImageMap.itemData.id;
      // console.log('subtracted', subtractArray);

      // const sliceArray = subtractArray.slice(id);
    })
    // console.log(this)

    // console.log(this.state.newState.itemData.id );
    // if( this.state.newState.itemData.id == id ) {
    //   console.log('same');
    // }

    // Count to 16
    var number = 0;

   
    // Grab the position lopp
    while (this.state.newState[number].itemData.id !== id) {
      number++;
    }

    // if (this.state.newState[number].itemData.id == id) {
    //   console.log("same!");
    // }

    //Change like status
    var arraTest = number;
    this.state.newState[arraTest].rating = 'like';
    console.log('changed', this.state.newState);

    // // console.log('changed', this.state.sliderOne.rating[0] );
    // console.log(this.state.sliderOne[0]);
    // const a = this.state.sliderOne.filter(word => word.length > 1);
    // console.log('position', a);

    //Get the clicked position
    var numberTest = arraTest;

    //Swap the clicked item with a new one 
    const varTest = this.state.newState.splice(numberTest, 1, this.state.newState[arraTest]);
    console.log('new state',this.state.newState);


    // Delete the card based on postion clicked
    const removed = this.state.sliderOne.splice(arraTest, 1);
    this.setState({ sliderOne: this.state.sliderOne});
    console.log('sliderone', this.state.sliderOne);

    //Add another card 
    


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

        <Carousel >
          <h1>      
            {this.state.showResults ? <Wrapper>
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

            </Wrapper> : null} </h1>
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

              />
            ))}
          </Wrapper></h1>
        </Carousel>
      </div>
    );
  }
}

export default App;
