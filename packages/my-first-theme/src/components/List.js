import React from 'react';
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"

const Items = styled.div`
  & > a {
    display: block;
    margin: 6px 0;
    font-size: 1.2em;
    color: steelblue;
    text-decoration: none;
  }
`

const PrevNextNav = styled.div`
  padding-top: 1.5em;

  & > button {
    background: #eee;
    text-decoration: none;
    padding: 0.5em 1em;
    color: #888;
    border: 1px solid #aaa;
    font-size: 0.8em;
    margin-right: 2em;
  }
  & > button:hover {
    cursor: pointer;
  }
`


const List = ({ state, actions }) => {
    const data = state.source.get(state.router.link)
  
    return (
      <div>
        {data.items.map((item) => {
          const post = state.source[item.type][item.id]
          return (
            <Items>
                <Link key={item.id} link={post.link}>
                {post.title.rendered}
                <br />
                </Link>
              
            </Items>
          )
        })}

        <PrevNextNav>
          {data.previous && (
            <button
              onClick={() => {
                actions.router.set(data.previous)
              }}
            >
              &#171; Prev
            </button>
          )}
          {data.next && (
            <button
              onClick={() => {
                actions.router.set(data.next)
              }}
            >
              Next &#187;
            </button>
          )}
        </PrevNextNav>
      </div>
    )
  }

export default connect(List)