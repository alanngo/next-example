import { people } from "../../constants/people"
// needed to generate each page based on every person
export const getStaticPaths = async () => {
    const paths = people.map(person =>
        ({ params: { id: String(person.id) } })
    )
    return { paths, fallback: false }
}
// map single person to props
export const getStaticProps = async (context) => {
    const id = context.params.id
    return { props: { person: people.filter(p => p.id === Number(id))[0] } }
}
const Details = ({ person }) => {
    return (
        <>
            <h1>First Name: <span style={{color: "red"}}>{person.firstName}</span></h1>
            <h1>Last Name: <span style={{color: "red"}}>{person.lastName}</span></h1>
            <h1>Email: <span style={{color: "red"}}>{person.email}</span></h1>
            <h1>Gender: <span style={{color: "red"}}>{person.gender}</span></h1>
        </>
    )
}
export default Details