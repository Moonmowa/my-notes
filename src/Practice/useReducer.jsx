import { useEffect, useReducer } from "react"

export default function Form() {
    const initalState = {
        formValues: {
            name: '',
            age: '',
            address: '',
        }
    }
    const formReducer = (state, action) => {
        console.log('action', action);
        switch (action.type) {
            case 'CHANGE':
                return { ...state, formValues: {...state.formValues, [action.field]: action.value}}
            default:
                break;
        }
    }

    const [state, dispatch] = useReducer(formReducer, initalState);

    useEffect(() => {
        console.log('state', state);
        return () => {

        }
    }, [state])
    return <>
        <input type="text" value={state.formValues.name} onChange={(e) => dispatch({ type: 'CHANGE', field: 'name', value: e.target.value })} />
        <input type="text" value={state.formValues.age} onChange={(e) => dispatch({ type: 'CHANGE', field: 'age', value: e.target.value })} />
        <input type="text" value={state.formValues.address} onChange={(e) => dispatch({ type: 'CHANGE', field: 'address', value: e.target.value })} />
    </>
}