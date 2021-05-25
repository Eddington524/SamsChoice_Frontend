
import React, { useEffect, useState } from 'react';
import { Page, Navbar} from 'framework7-react';
import { PageRouteProps } from '@constants';
import { getPost } from '@api';

const PostShowPage = ({ f7route, f7router }:PageRouteProps) =>{
    const postId = f7route.params.id;
    const [post, setPost] = useState(null);
        useEffect(() => {
        (async () => {
            const { data } = await getPost(postId);
            setPost(data);
        })();
    }, []);

    return( 
      <Page noToolbar>
        <Navbar title={post?.title} backLink={true}></Navbar>
        <div className="p-3">
          <h1 className="text-xl font-bold">post?.title</h1>
          <p className="mt-3">post?.content</p>
        </div>
      </Page> 
    );
};

export default React.memo(PostShowPage);