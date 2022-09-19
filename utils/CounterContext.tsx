import { useReducer, useContext, createContext } from "react"
import type { ReactNode } from "react"
import { stat } from "fs"

const defaultState = { count: 0}

export type Action = 'increment' | 'decrement'
export type State = typeof defaultState
export type Dispatch = (action: Action) => void

type CounterContextType = {
    state: State,
    dispatch: Dispatch
}

export const CounterContext = createContext<CounterContextType | undefined>(undefined)


const counterReducer = (state: State, action: Action): State => {
    switch(action) {
        case 'increment': 
        return {
            count: state.count + 1
        }
        case 'decrement': return {
            count: state.count - 1
        }
        default: state
    }
    return state
}

const CounterProvider = ({children}: {children: ReactNode}) => {
    
    const [state, dispatch] = useReducer(counterReducer, defaultState)

    return (
        <CounterContext.Provider value={{state, dispatch}}>
            {children}
        </CounterContext.Provider>
    )
}

// export const useCounter = () => {
//     const context = useContext(CounterContext)

//     if (!context) throw new Error('UseCounter must be use inseide a CounterProvider')

//     return
// }

export default CounterProvider;