const Total = ({quantities}) => {
    let total = 0
    quantities.forEach(value => total += value)

    return <p>Number of exercises {total}</p>
}

export default Total