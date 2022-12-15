import React from "react";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({filter, setFilter, limit, setLimit}) => {
  return (
    <div className='postfilter__wrapper'>
      <MyInput
        placeholder="Search"
        value={filter.query}
        // onChange={searchPosts}
        onChange={e => setFilter({...filter, query: e.target.value})}
      />
      <div className='filter__select'>
          <MySelect
              value={filter.sort}
              onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
              defaultValue="Sorting"
              options={[
                  { value: "title", name: "By name" },
                  { value: "body", name: "According to the description" },
              ]}
          />
          <MySelect
              value={limit}
              onChange={value => setLimit(value)}
              defaultValue="Number of elements per page"
              options={[
                  {value: 5, name: '5'},
                  {value: 10, name: '10'},
                  {value: 25, name: '25'},
                  {value: -1, name: 'Show all'},
              ]}
          />
      </div>

    </div>
  );
};

export default PostFilter;
