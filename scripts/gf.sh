FOLDER=${1:-"nested"}
NESTED="pages/$FOLDER"
mkdir ${NESTED,,}
echo "const ${FOLDER^} = ({ /* props go here */}) =>{
    return (
        <>$FOLDER root</>
    )
}
export default ${FOLDER^}" >> "${NESTED,,}/index.jsx"