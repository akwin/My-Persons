import React, { useEffect } from 'react';
import classes from './Cockpit.module.css'

const cockpit = (props) => {
    useEffect (() => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {
            alert('Saved data to the cloud!');
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []); 

    useEffect(() => {
        console.log('[Cockpit.js] in second useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in second useEffect');
        };
    });


    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold)
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title} </h1>
            <p className={assignedClasses.join('')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}> Toggle Persons
            </button>
        </div>
    )
};

export default React.memo(cockpit);


 