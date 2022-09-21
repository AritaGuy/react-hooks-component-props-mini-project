
function About({about, image = "https://via.placeholder.com/215 (Links to an external site.)"}){
    return(
        <aside>
           <img alt="blogo logo" src={image}/>
           <p>{about}</p>
        </aside>
    )
}

export default About