import React, { Component, useState} from 'react';
import {usePopper} from 'react-popper';
import './Menu_Button'

const Dropdown = ({text}) => {
    const [showing, setShowing] = useState(false);
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: "bottom", 
        modifiers: [{ name: "arrow", options: { element: arrowElement } }]
    });
    console.log(showing);
    return (
        <div 
            onMouseLeave={() => setShowing(false)}
        >
            <div  onClick={() => setShowing(!showing)}
                className="Button"
                ref={setReferenceElement}
            >
                <div className="text">{text}</div>
            </div>
            {
                (showing)
                ?
                <div>
                    
                    <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
                        <div className="Menu_dropdown"> 
                            <ul>
                                <li>Ação</li>
                                <li>Aventura</li>
                                <li>Teste 3</li>
                                <li>Teste 4</li>
                                <li>Teste 5</li>
                                <li>Teste 6</li>
                            </ul>
                        </div>
                        <div ref={setArrowElement} style={styles.arrow} />
                    </div>
                </div>
                :
                null
            }
        </div>
    );
}

export default Dropdown;