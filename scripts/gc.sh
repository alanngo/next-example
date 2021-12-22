COMP=${1:-"MyComponent"}
echo "const ${COMP^} = ({ /* props go here */}) =>{
    return (
        <>implement $COMP</>
    )
}
export default ${COMP^}" >> "components/${COMP^}.jsx"