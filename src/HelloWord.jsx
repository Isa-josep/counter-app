import ProTypes from 'prop-types';


export const FirtApp=({title})=> {
    // console.log(props);
    return (
        <>
        <span>{title}</span>
        <h1>Hello, World!!!</h1>
        </>
    );    
}

FirtApp.propTypes={
    title: ProTypes.string.isRequired
    
}

FirtApp.defaultProps={
    name: 'Undefined',
    title: 'Undefined'
}