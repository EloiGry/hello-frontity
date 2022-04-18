

import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import List from "./List"
import Post from "./Post"
import Page from "./Page"

const Global = styled.div`
  font-family: system-ui, Verdana, Arial, sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  & > a {
    margin-right: 1em;
    color: steelblue;
    text-decoration: none;
  }
`

const Button = styled.button`
  background: transparent;
  border: none;
  color: #aaa;

  :hover {
    cursor: pointer;
    color: #888;
  }
`

const Header = styled.header`
  background-color: #e5edee;
  border-width: 0 0 8px 0;
  border-style: solid;
  border-color: ${ props => props.isPostType ? ( props.isPage ? 'lightsteelblue' : 'lightseagreen' ) : 'maroon'};;
`

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link)
  console.log("state", state);
  console.log("actions", actions);

  return (
    <Global>
      <Header isPostType={data.isPostType} isPage={data.isPage}>
        <h1>Hello Frontity</h1>
        { state.theme.isUrlVisible
        ? <>Current URL: {state.router.link} <Button onClick={actions.theme.toggleUrl}>&#x3c; Hide URL</Button></>
        : <Button onClick={actions.theme.toggleUrl}>Show URL &#x3e;</Button>
      }
        <Menu>
          <Link link="/">Home</Link>
          <br />
          <Link link="/page/2">More posts</Link>
          <br />
          <Link link="/about-us">About Us</Link>
        </Menu>
      </Header>
      <hr />
      <main>
        <Switch>
          <List when={data.isArchive}>This is a list</List>
          <Post when={data.isPost}>This is a post</Post>
          <Page when={data.isPage}>This is a page</Page>
        </Switch>
      </main>

    </Global>
  )
}

export default connect(Root)