import Part from './Part'

const Content = ({info}) => {
    return(
        info.map(part => { return <Part key={part.id} info={part} /> })
    )
}
export default Content