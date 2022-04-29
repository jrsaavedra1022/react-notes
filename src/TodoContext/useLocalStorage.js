import React from 'react';

function useLocalStorage (itemName, initialValue) {

    const [ error, setError ] = React.useState(false);
    const [ loading, setLoading ] = React.useState(true);
    const [ item, setItems ] = React.useState(initialValue);

    React.useEffect(() => {
        setTimeout(() => {
        try{
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItems;

            if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItems = initialValue;
            }else{
            parsedItems = JSON.parse(localStorageItem);
            }

            setItems(parsedItems);
            setLoading(false);
        }catch(error){
            setError(error);
        }

        }, 3000)
    });

    const saveItems = (newItems) => {
        try{
        const stringifiedItems = JSON.stringify(newItems);
        localStorage.setItem(itemName, stringifiedItems);
        setItems(newItems);
        }catch(error){
        setError(error);
        }
    }

    return {
        item, saveItems, loading, error
    }
}

export  { useLocalStorage };