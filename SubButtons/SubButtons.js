import React, { Fragment } from 'react'
import classes from './SubButtons.module.css'
import { motion, AnimatePresence } from 'framer-motion'
const SubButtons = (props) => {
    // const[scope,animate]=useAnimate();
    // const [selectedSubsubButtons, setSelectedSubsubButtons] = useState({});
    const handleSubButtonClickHandler = (subgroupId) => {

        props.setonClickingCards(true);
        props.setSubbuttonId(subgroupId);
        props.setSubSubButtonId(null)
    }
    let names;
    if (props.ids === '1') {
        names = props.activeSubSubButton.slice(0, 19)
        //  console.log(names);   subgroupName                            
    }

    return (
        <React.Fragment>
            <AnimatePresence>
                {
                    !props.onClickingCards &&
                    <motion.div className={classes['MaindivSubButtons']}
                        initial={{ opacity: 0, x: -410, }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: 'spring', duration: 1.2 }}
                        key={props.ids}
                    >
                        {<motion.div className={classes['subButtons']}

                        >
                            {<h3>{props.MainArray[props.ids - 1].h3}</h3>}
                            {props.MainArray[props.ids - 1].Suboptions.flatMap((subgroup) => (
                                <motion.div
                                    whileHover={{ cursor: 'pointer', border: '1px solid rgb(172, 171, 171)' }}
                                    transition={{ type: 'spring', duration: 0.3 }}

                                    key={subgroup.id}
                                    style={{ marginBottom: subgroup.bottomMargin === '100' ? '100px' : '' }}
                                    onClick={() => { handleSubButtonClickHandler(subgroup.id) }}>
                                    <p key={subgroup.id}>{subgroup.name}</p>
                                    <p >
                                        {/* {names[props.subbuttonId-1].map((items)=>{
                                    return items.name
                                         })} */}
                                        {/* {console.log(names[subgroup.id-1].name)} */}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>}
                        {props.ids === '4' &&
                            props.waistcoatOptions && !props.onClickingCards &&
                            <div className={classes['subButtons']}
                            //  style={{marginTop:true?'100px':''}}
                            >
                                {<h3>{props.MainArray[props.ids - 1].h3}</h3>}
                                {props.MainArray[3].WaistcoatOtions.flatMap((subgroup) => (
                                    <div key={subgroup.id}
                                        style={{ marginBottom: subgroup.bottomMargin === '100' ? '100px' : '' }}
                                        onClick={() => { handleSubButtonClickHandler(subgroup.id) }}>
                                        <p key={subgroup.id}>{subgroup.name}</p>
                                        <p>
                                            {/* { props.MainArray[ids - 1].Suboptions[props.subbuttonId-1].Suboptions[active-1].name} */}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        }

                        {props.ids === '3' && 
                            props.extraTrousersOption && !props.onClickingCards &&
                            <div className={classes['subButtons']}
                            //  style={{marginTop:true?'100px':''}} 
                            >
                                {<h3>{props.MainArray[props.ids - 1].h3}</h3>}
                                {props.MainArray[2].ExtraTrousers.flatMap((subgroup) => (
                                    <div key={subgroup.id}
                                        style={{ marginBottom: subgroup.bottomMargin === '100' ? '100px' : '' }}
                                        onClick={() => { handleSubButtonClickHandler(subgroup.id) }}>
                                        <p key={subgroup.id}>{subgroup.name}</p>
                                        <p>
                                            {/* { props.MainArray[ids - 1].Suboptions[props.subbuttonId-1].Suboptions[active-1].name} */}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        }

                    </motion.div>}
            </AnimatePresence>
        </React.Fragment>
    )
}

export default SubButtons
