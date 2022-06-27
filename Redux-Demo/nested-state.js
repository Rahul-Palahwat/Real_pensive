const redux = require('redux')

const createStore = redux.createStore

// to get immer for updating nested objects 
const produce = require('immer').produce


const initialState={
    name:'Rahul',
    address:{
        village:'Nagla Anta',
        city:'Hathras',
        state:'Uttar Pradesh',
    },
}

const VILLAGE_UPDATE = 'VILLAGE_UPDATE'

const villageUpdate=(vil)=>{
    return{
        type: VILLAGE_UPDATE,
        payload:vil
    }

}

const reducer=(state = initialState,action)=>{
    switch(action.type){
        case VILLAGE_UPDATE:
            // return{
            //     ...state,
            //     address: {
            //         ...state.address,
            //         village: action.payload,
            //     }
            // }
            return produce(state, (draft) => {
                draft.address.village= action.payload
            })
        default: return state
    }
}


const store = redux.createStore(reducer)
console.log("Initial value", store.getState())


const unsubscribe = store.subscribe(()=>{
    console.log("Updated value", store.getState())
})

store.dispatch(villageUpdate("Amra Nagra"))

unsubscribe()
