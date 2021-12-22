import { people } from "../../constants/people"

const People = ({ /* props go here */ }) =>
(
    <>
        {
            people.map(e =>
            (
                <>
                    <a href={`/people/${e.id}`} key={e.id}>
                        <h3 key={e.id}>{e.firstName} {e.lastName}</h3>
                    </a>
                </>
            ))
        }
    </>
)
export default People
