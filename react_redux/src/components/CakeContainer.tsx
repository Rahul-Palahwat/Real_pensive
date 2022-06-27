import React from 'react'
import { buyCake } from '../redux'

import { connect } from 'react-redux'

interface Props{
  numOfCakes:any;
  buyCake:any;
}

function CakeContainer(props:Props) {
  return (
    <div>
      <h2>No of cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}


// step 1
const mapStateToProps = (state: { numOfCakes: any }) => {
  return{
    numOfCakes: state.numOfCakes
  }
}

// step 2
const mapDispatchToProps = (dispatch: (arg0: { type: string }) => any) => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

// Step 3 



export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer)
