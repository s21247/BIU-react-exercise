
function Page(props){
    return (
        <>
        <h1>Popular web browsers</h1>
        <h2>{props.title}</h2>
            <img src={props.image} alt={"zdjecie"}/>
            <p>{props.description}</p>

        </>
    )
}

export default Page;