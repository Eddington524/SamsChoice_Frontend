import React, { useEffect, useState } from 'react';
import { Page, Navbar, List, ListItem } from 'framework7-react';
import { PageRouteProps } from '@constants';
import { getPosts } from '@api';

const PostIndexPage = ({ f7route, f7router }: PageRouteProps) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await getPosts();
      setPosts(data);
    })();
  }, []);

  return (
    <Page noToolbar>
      <Navbar title="상품상세" backLink={true}></Navbar>
      <List>
        {posts.map(post => {
          <ListItem
            key={post.id}
            title={post.title}
            link={`/posts/${post.id}`}
            after={post.user.email.split('@')[0]}
          ></ListItem>;
        })}
      </List>
    </Page>
  );
};

export default React.memo(PostIndexPage);
