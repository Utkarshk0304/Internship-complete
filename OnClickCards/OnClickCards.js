import classes from './OnClickCards.module.css'
import RenderCards from '../RenderOnClick/RederCards';
import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
const OnClickCards = (props) => {
    const GoToPrevPage = () => {
        props.setonClickingCards(false);
    }   
    // console.log( props.MainArray[2].ExtraTrousers[props.subbuttonId - 1].name);
    
    return (    
        <motion.div className={classes['optionCards']}
        initial={{opacity:1,x:400}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:300,transition:{duration:0.1}}}
        transition={{type:'tween',duration:0.4}}
        key={props.ids} 
        >

            {/* // props.onClickingCards &&  */}
            <div 
            
                onClick={GoToPrevPage}
            > 
                <motion.svg 
                initial={{rotate:360}}
                animate={{rotate:0,transition:{duration:0.5}}}
                whileTap={{rotate:180}}
                transition={{type:'tween',duration:0.2}}
                xmlns="http://www.w3.org/2000/svg" className={classes['goBackSvg']} width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                    <path
                     d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                </motion.svg>
            </div>  
            <p className={classes['ButtonNames']}>
                { !props.waistcoat && !props.extraTrousers && props.MainArray[props.ids - 1].Suboptions[props.subbuttonId - 1].name}
                {   props.waistcoat && !props.extraTrousers&& props.MainArray[props.ids - 1].WaistcoatOtions[props.subbuttonId - 1].name }
                {   !props.waistcoat &&props.extraTrousers && props.MainArray[props.ids - 1].ExtraTrousers[props.subbuttonId - 1].name }
            </p>
            {  !props.waistcoat && !props.extraTrousers && props.MainArray[props.ids - 1].Suboptions[props.subbuttonId - 1].Suboptions.flatMap((subgroup) =>
            (  
                <RenderCards  
                    ids={props.ids}
                    subbuttonId={props.subbuttonId}
                    setSubSubButtonId={props.setSubSubButtonId}
                    subSubButtonId={props.subSubButtonId}
                    MainMainName={props.MainArray[props.ids - 1].name}
                    mainName={props.MainArray[props.ids - 1].Suboptions[props.subbuttonId - 1].name}
                    key={subgroup.id}
                    id={subgroup.id}
                    name={subgroup.name}
                    renderLayers={subgroup.renderLayers}
                    p={subgroup.p}
                    img={subgroup.img}
                    mainButtonName={props.mainButtonName}
                    setActiveSubSubButton={props.setActiveSubSubButton}
                    activeSubSubButton={props.activeSubSubButton}
                    waistcoatOptions={props.waistcoatOptions}
                    setWaistcoatOptions={props.setWaistcoatOptions}
                    extraTrousersOption={props.extraTrousersOption}
                    setExtraTrousersOption={props.setExtraTrousersOption}
                >
                </RenderCards>
            )
            )}
            { 
            // props.waistcoatOptions && 
             props.waistcoat &&
                props.MainArray[3].WaistcoatOtions[props.subbuttonId - 1].Suboptions.flatMap((subgroup) =>
                (
                    <RenderCards
                    ids={props.ids}
                    subbuttonId={props.subbuttonId}
                    setSubSubButtonId={props.setSubSubButtonId}
                    subSubButtonId={props.subSubButtonId}
                    MainMainName={props.MainArray[props.ids - 1].name}
                    mainName={props.MainArray[props.ids - 1].WaistcoatOtions[props.subbuttonId - 1].name}
                    key={subgroup.id}
                    id={subgroup.id}
                    name={subgroup.name}
                    renderLayers={subgroup.renderLayers}
                    p={subgroup.p}
                    img={subgroup.img}
                    mainButtonName={props.mainButtonName}
                    subButtonName={props.subButtonName}
                    setActiveSubSubButton={props.setActiveSubSubButton}
                    activeSubSubButton={props.activeSubSubButton}
                    waistcoatOptions={props.waistcoatOptions}
                    setWaistcoatOptions={props.setWaistcoatOptions}
                    extraTrousersOption={props.extraTrousersOption}
                    setExtraTrousersOption={props.setExtraTrousersOption}
                >
                </RenderCards>))
            }
          { 
            // props.waistcoatOptions && 
             props.extraTrousers &&
                props.MainArray[2].ExtraTrousers[props.subbuttonId - 1].Suboptions.flatMap((subgroup) =>
                (
                    <RenderCards
                    ids={props.ids}
                    subbuttonId={props.subbuttonId}
                    setSubSubButtonId={props.setSubSubButtonId}
                    subSubButtonId={props.subSubButtonId}
                    MainMainName={props.MainArray[props.ids - 1].name}
                    mainName={props.MainArray[props.ids - 1].ExtraTrousers[props.subbuttonId - 1].name}
                    key={subgroup.id}
                    id={subgroup.id}
                    name={subgroup.name}
                    renderLayers={subgroup.renderLayers}
                    p={subgroup.p}
                    img={subgroup.img}
                    mainButtonName={props.mainButtonName}
                    subButtonName={props.subButtonName}
                    setActiveSubSubButton={props.setActiveSubSubButton}
                    activeSubSubButton={props.activeSubSubButton}
                    waistcoatOptions={props.waistcoatOptions}
                    setWaistcoatOptions={props.setWaistcoatOptions}
                    extraTrousersOption={props.extraTrousersOption}
                    setExtraTrousersOption={props.setExtraTrousersOption}
                   
                >
                </RenderCards>))
            }

           
        </motion.div>
    )
}
export default React.memo(OnClickCards);