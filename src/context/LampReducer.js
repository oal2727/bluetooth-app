export const LampReducer = (state,action)=>{
    switch(action.type){
        case 'TOOGLE_BLUETOH':
            return {
                ...state,bluetoothState:action.payload
            };
        case 'SET_BLUETOH':
            return{
                ...state,
                bluetoothData:action.payload
            }
        case 'SET_DEVICES':
            return{
                ...state,
                hosts:action.payload
            }
        default:
            return state;
    }

}