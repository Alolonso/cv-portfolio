import React from 'react';

export const useImportData = () => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    
    React.useEffect(() => {
        try {
            fetch('https://alolonso.github.io/certi/base.json')
                .then(response => response.json())
                .then(response => setData(response));
                setLoading(false);
        } catch(error) {
            setLoading(false);
            setError(true);
        }
    }, []);

    return {data, loading, error};
}