import React, { useCallback,useState,useEffect,useContext } from 'react';


export const ChildComponent = (props) => {

    const triggerInvokedFromParent = () => {
      console.log('TriggerInvokedFromParent');
      alert('trigger invoked')
    };
  
    useEffect(() => {
      triggerInvokedFromParent();
    }, [props.trigger]);
  
    return <span>ChildComponent</span>;
  };