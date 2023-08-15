import React from 'react';

const useImportData = () => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        fetch('https://alolonso.github.io/certi/base.json')
        .then(response => response.json())
        .then(response => setData(response))
    }, []);

    const {
        academic,
        courses,
        experience,
        languages,
        soft,
        technologies,
        tools,
        web
    } = data

    return {
        academic,
        courses,
        experience,
        languages,
        soft,
        technologies,
        tools,
        web
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
        web
    } = useImportData()

    const [locate, setlocate] = React.useState("home");

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
            locate,
            setlocate
        } }>
            { children }
        </CvContext.Provider>
    )
}











// import { useImportData } from './ImportData';


// const useImportData = () => {
//     const [data, setData] = React.useState([]);
//     const [loading, setLoading] = React.useState(true);
//     const [error, setError] = React.useState(false);
    
//     React.useEffect(() => {
//         try {
//             fetch('https://alolonso.github.io/certi/base.json')
//                 .then(response => response.json())
//                 .then(response => setData(response));
//                 setLoading(false);
//         } catch(error) {
//             setLoading(false);
//             setError(true);
//         }
//     }, []);

//     return {data, loading, error};
// }

// export const CvContext = React.createContext()

// export const CvProvider = ({ children }) => {
//     const {data, loading, error} = useImportData()

//     return (
//         <CvContext.Provider value={ {data, loading, error} }>
//             { children }
//         </CvContext.Provider>
//     )
// }

