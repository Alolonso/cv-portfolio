import React from 'react';

const useImportData = () => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        fetch('https://alolonso.github.io/cv-database/db.json')
        .then(response => response.json())
        .then(response => setData(response))
        .catch(() => setError("An error occurred while obtaining the data"))
        .finally(() => setLoading(false))
    }, []);

    const {
        academic,
        courses,
        experience,
        languages,
        soft,
        technologies,
        tools,
        web,
        projects
    } = data

    return {
        academic,
        courses,
        experience,
        languages,
        soft,
        technologies,
        tools,
        web,
        projects,
        loading,
        error
    }
}

export const CvContext = React.createContext()

export const CvProvider = ({ children }) => {

    const {
        academic,
        courses,
        experience,
        languages,
        soft,
        technologies,
        tools,
        web,
        projects,
        loading,
        error
    } = useImportData()

    return (
        <CvContext.Provider value={ {
            academic,
            courses,
            experience,
            languages,
            soft,
            technologies,
            tools,
            web,
            projects,
            loading,
            error
        } }>
            { children }
        </CvContext.Provider>
    )
}