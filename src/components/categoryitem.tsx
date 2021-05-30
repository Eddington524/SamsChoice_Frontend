import React, { useEffect, useState } from 'react';
import { currency } from '@js/utils';
import { Page, Navbar, List, ListItem } from 'framework7-react';
import { PageRouteProps } from '@constants';
import { getItemFromCategory } from '@api';
import { classNames } from 'react-select/src/utils';

const CategoryItemIndexPage = ({ f7route, f7router }: PageRouteProps) => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await getItemFromCategory(f7route.params.id);
      setLists(data);
    })();
  }, []);
  console.log('리스트', lists);

  return (
    <Page>
      <Navbar title={'상품리스트'} backLink={true}></Navbar>
      <List noHairlines className="mt-0 text-sm font-thin">
        {lists && (
          <ul>
            {lists.map(item => (
              <React.Fragment key={item.id}>
                <div className="w-1/2 inline-flex grid-list-item relative">
                  <ListItem
                    mediaItem
                    link={`/items/${item.id}`}
                    title={`${item.name}`}
                    subtitle={`${currency(Number(item.price))}원`}
                    className="w-full"
                  >
                    <img slot="media" alt="" src={item.image[0]} className="w-40 h-40 m-auto radius rounded shadow" />
                  </ListItem>
                </div>
              </React.Fragment>
            ))}
          </ul>
        )}
      </List>
    </Page>
  );
};

export default React.memo(CategoryItemIndexPage);
