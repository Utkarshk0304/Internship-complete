import { motion } from 'framer-motion';
import './RenderCards.css';
import React from 'react';
import _ from 'lodash';
const RenderCards = (props) => {
    console.log(props.img);



    const propsId = props.id;
    return (  
        <motion.div className={` ${props.subSubButtonId === props.id ? 'ifSelected ' : 'DisplayCards'}`}
            style={{
                border: props.activeSubSubButton.some(item => _.isEqual(props.renderLayers, item)) ? '1px solid black' : ''
            }}
            onClick={(event) => { 
                props.setSubSubButtonId(propsId)
                const updatedSubButtonData = [...props.activeSubSubButton];
                if (props.ids >= 1 && props.ids <= 2 && props.subbuttonId >= 1 && props.subbuttonId <= 15) {
                    const index = (props.ids - 1) * 15 + (props.subbuttonId - 1);
                    updatedSubButtonData[index] = props.renderLayers;
                }
                if (props.name === 'Yes Please!') { 
                    props.setWaistcoatOptions(true)
                }  
                if (props.name === 'No thanks.') {
                    props.setWaistcoatOptions(false)
                }
                if (props.name === 'Yes please') {
                    props.setExtraTrousersOption(true)
                }  
                if (props.name === 'No Thanks') {
                    props.setExtraTrousersOption(false)
                }

                props.setActiveSubSubButton(updatedSubButtonData)
            }}>
            <div className='RenderCardsP'>
                {props.name}
                <p className='RenderCardsDescription'>{props.p}</p>
            </div>
            <img  src={require(`../Images/${props.MainMainName}/${props.mainName}/${props.img}.avif`)} alt='' id='CardsImage'>
            </img>
        </motion.div>
    )
}
export default React.memo(RenderCards);