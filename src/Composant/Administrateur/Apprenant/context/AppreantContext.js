import React, {useState} from 'react'


export const ApprenantContext = React.createContext()


const ApprenantProvider = (props) =>{



    const data = {
        nom:"",
        prenom:"",
        email:"",
        mobile:"",
        password:""
    }

    const [apprenant] = useState([data])

    return(
        <ApprenantContext.Provider value={{apprenant}}>
            {props.children}
        </ApprenantContext.Provider>
    )
}

export default ApprenantProvider;