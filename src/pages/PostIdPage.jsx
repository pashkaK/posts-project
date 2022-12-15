import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import PostService from './../API/PostService';

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    const [fetchComments, isCommentsLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })
    
    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    // if (!comments.length) {
    //     return (
    //         <div>
    //             <h1>You have opened the post page with ID = {params.id}
    //             </h1>
    //             <div> No comments found!</div>
    //         </div>
    //     )
    // }
    return (
        <div className='post__page'>
            <h1 className='post__page-title'>You have opened the post page with ID = {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id}. {post.title}</div>
            }
            {isCommentsLoading
                ? <Loader/> 
                : <div>
                    <h2 className='comments__title'>Comments</h2>
                    {comments.map(comm => 
                        <div key={comm.id} style={{marginTop: 15}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>    
                    )}
                </div> 
            }
        </div>
    );
};

export default PostIdPage;