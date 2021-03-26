import blogData from '../model/blogpostmodel';
const blogs =[];
class blogController{
static createblogpost =(req,res)=>{
    

const blogid = blogs.length + 1;
let {
    title,
    content,
    timestamp,
    userId
}=req.body;



const blog = new blogData(blogid,title,content,timestamp,userId);
blogs.push(blog);
const data = blogs.find(blog=>blog.blogid===blogid);


if(!data){
    return res.status(417).json(
        {
           status:417,
           message:"blog failed to be registed",
        }
    )
}

return res.status(201).json(
    {
        status:201,
        message:"blog created is successfull",
        data
    }
)

}

static getAllBlog =(req,res)=>{
    const data = blogs;
    return res.status(200).json({
        status:200,
           message:"this is all blogs",
           data
    
    })
};
static  getOneBlog =(req,res)=>{
    const blogid =  req.params.Id;
  const data = blogs.find(blog =>blog.data===parseInt(blogid));
  if(!data){
    return res.status(201).json({
        status:201,
        message:"this is one blogId",
        data
    })
  }

}


static deleteOneBlog =(req,res)=>{
    const blogid =  req.params.id;
  const dataIndex = blogs.findIndex(blog =>blog.blogid===parseInt(blogid));
  
  console.log(dataIndex);
   if(dataIndex ===-1){
       return res.status(404).json({
           status:404,
           message:"not found",

       });
   }
   const remove= blogs.splice(dataIndex,1);

  return res.status(200).json({
    status:200,
    message:"index is found",
    dataIndex

})
}
static updateOneBlog =(req,res)=>{
    const blogid = parseInt(req.params.id);
    const dataIndex = blogs.findIndex(blog =>blog.blogid===parseInt(blogid));
    
    console.log(dataIndex);
     if(dataIndex ===-1){
         return res.status(404).json({
             status:404,
             message:"not found",
  
         });
     }

let {
    title,
    content,
    timestamp,
    userId
}=req.body;
const blog = new blogData(blogid,title,content,timestamp,userId);
blogs[dataIndex]=blog;
const data = blogs.find(blog=>blog.blogid===blogid);

if(!data){
    return res.status(417).json(
        {
           status:417,
           message:"blog failed to be updated",
        }
    )
}

return res.status(200).json(
    {
        status:200,
        message:"blog updated is successfull",
        data
    })


}
}


export default blogController;