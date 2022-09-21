import blogData from "../data/blog"

const article = blogData.posts

    
        
function Article({title, preview, date = "January 1, 1970"}){
        return (
        <div>
         {article.map((posts)=>{
            title= posts.title
            date = posts.date
            preview = posts.preview
        return(
        <article key={posts.id}>
            <h3>{title}</h3>
             <small>{date}</small>
             <p>{preview}</p>
         </article>
       )})}
        
      </div>)
        
}
console.log(Article)
export default Article
