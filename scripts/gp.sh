COMP=${1:-"MyComponent"}
NESTED=${2:-"."}
echo "const ${COMP^} = ({ /* props go here */}) =>{
    return (
        <>implement $COMP</>
    )
}
export default ${COMP^}" >> "pages/${NESTED,,}/${COMP,,}.jsx"