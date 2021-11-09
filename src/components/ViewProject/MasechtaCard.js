import React, {useState, useEffect} from 'react'
import styles from '../../css/ViewProject.module.css'
import {useDBcontext} from '../../contexts/DBcontext'

function MasechtaCard(props) {

    const {signUp, currentId} = useDBcontext()
    
    const [learner, setLearner] = useState("")
    const [nameSwitch, setNameSwitch] = useState(false)
    const [signingUp, setSigningUp] = useState(false)

    const handleKeyDown = async () => {
        signUp(currentId, props.seder, props.masechta, learner)
    }
    
    return (
        <div className={styles.masechtaCard}>
            <p>{props.masechta}</p>
            {!signingUp ? 
            <input 
                className={styles.icon} 
                type="button" 
                value={props.learner == null ? "+" : nameSwitch ? props.learner : props.complete ? "completed" : "in progress"}
                onClick={() => {props.learner !== null ? setNameSwitch(!nameSwitch) : setSigningUp(true)}} 
                >
            </input>
            :
            <input 
                className={styles.icon} 
                type="text" 
                value={learner}
                onChange={e => setLearner(e.target.value)}
                onKeyDown={() => {handleKeyDown()}} 
                >
            </input>}
        </div>
    )
}

export default MasechtaCard