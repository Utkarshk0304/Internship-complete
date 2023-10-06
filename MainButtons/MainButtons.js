import classes from './MainButtons.module.css'
import React, { useState, Fragment } from 'react';
import OnClickCards from '../OnClickCards/OnClickCards'
import SubButtons from '../../SubButtons/SubButtons';
import { motion, AnimatePresence } from 'framer-motion';

const MainButtons = (props) => {  
    const [onClickMainButtons, setOnClickMainButtons] = useState(false)
    const [hover, sethover] = useState(true);
    const handleMainButtonClickHandler = (groupId) => {  //click handler for main buttons
        sethover(true)
        setOnClickMainButtons(!onClickMainButtons) 
        props.setonClickingCards(false)
        props.setIds(groupId);
        props.setSubSubButtonId(null) 
        if (groupId === '4') {
            handleWaistcoatState(true); // Pass `true` to set `waistcoat` to `true`  
        } else {
            handleWaistcoatState(false); // Pass `false` to set `waistcoat` to `false`
        }  
        if (groupId === '3') {
            handleExtraTrousersState(true); // Pass `true` to set `ExtraTrousers` to `true`
        } else {
            handleExtraTrousersState(false); // Pass `false` to set `ExtraTrousers` to `false`
        }  
    }
    const SelectedSubButton = (event) => {
        return event;  // name of Sub sub button
    }
    const handleWaistcoatState = (newWaistcoatValue) => {
        props.setWaistcoat(newWaistcoatValue); // Use a callback function with setWaistcoat to update the state immediately
    };
    const handleExtraTrousersState = (newExtraTrousersValue) => {
        props.setExtraTrousers(newExtraTrousersValue); // Use a callback function with setWaistcoat to update the state immediately
    };
    return (
        <React.Fragment>
            <motion.div  // it will render the main buttons
                className={classes['MainButtonSection']}
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', duration: 1.5 }}
              
            >
                {/* { !props.onClickingCards && */}
                <motion.div className={classes['right-Side-Section']}
                >
                    {props.MainArray.map((group) => (
                        <motion.button
                            animate={{ borderLeft: group.id === props.ids && hover ? '1px solid rgb(163, 161, 161)' : '' }}
                            whileHover={{ borderLeft: '1px solid rgb(163, 161, 161)' }}
                            transition={{ type: 'spring', }}
                            key={group.id} type="button"
                            className={classes["button-button"]}
                            onClick={() => handleMainButtonClickHandler(group.id)}
                            style={{
                                color: group.id === props.ids && hover ? 'black' : '',
                                backgroundColor: group.id === props.ids && hover ? "#d1d0d0" : '',
                            }}
                            onMouseEnter={() => { sethover(false) }}
                            onMouseLeave={() => { sethover(true) }}
                        >
                            {group.name}
                        </motion.button>
                    ))}
                </motion.div>
            </motion.div >

            <AnimatePresence>
                <SubButtons  // render sub buttons   
                    onClickingCards={props.onClickingCards}
                    ids={props.ids}
                    setonClickingCards={props.setonClickingCards}
                    setDropDown={props.setDropDown}
                    setSubbuttonId={props.setSubbuttonId}
                    MainArray={props.MainArray}
                    subSubButtonId={props.subSubButtonId}
                    subbuttonId={props.subbuttonId}
                    setSubSubButtonId={props.setSubSubButtonId}
                    waistcoatOptions={props.waistcoatOptions}
                    setWaistcoatOptions={props.setWaistcoatOptions}
                    waistcoat={props.waistcoat}
                    extraTrousersOption={props.extraTrousersOption}
                    setExtraTrousersOption={props.setExtraTrousersOption}
                    ExtraTrousers={props.ExtraTrousers}
                    activeSubSubButton={props.activeSubSubButton}
                ></SubButtons>
            </AnimatePresence>   
            
            <AnimatePresence>
                {props.onClickingCards &&  // renders lowest layer of buttons
                    <div className={classes['On-Click-Cards']}>
                        <OnClickCards 
                            MainArray={props.MainArray}
                            ids={props.ids}
                            subbuttonId={props.subbuttonId}
                            setSubSubButtonId={props.setSubSubButtonId}
                            subSubButtonId={props.subSubButtonId}
                            SelectedSubButton={SelectedSubButton}
                            mainButtonName={props.MainArray[props.ids - 1].name}
                            setonClickingCards={props.setonClickingCards}
                            onClickingCards={props.onClickingCards}
                            setDropDown={props.setDropDown}
                            setActiveSubSubButton={props.setActiveSubSubButton}
                            activeSubSubButton={props.activeSubSubButton}
                            waistcoatOptions={props.waistcoatOptions}
                            setWaistcoatOptions={props.setWaistcoatOptions}
                            setWaistcoat={props.setWaistcoat}
                            waistcoat={props.waistcoat}
                            extraTrousersOption={props.extraTrousersOption}
                            setExtraTrousersOption={props.setExtraTrousersOption}
                            extraTrousers={props.extraTrousers}
                            setExtraTrousers={props.setExtraTrousers} 
                        ></OnClickCards>
                    </div>
                }
            </AnimatePresence>

        </React.Fragment>

    );
}
export default React.memo(MainButtons);