const Total = ({quantities}) => {
    const total = quantities.reduce((total, value) => total + value)

    return <p>Number of exercises {total}</p>
}

export default Total