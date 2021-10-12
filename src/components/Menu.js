import { StaticQuery, graphql } from "gatsby";
import React from "react";
import tw, { styled } from "twin.macro";
import { Link } from "gatsby";
import stringToSlug from "../../lib/string-to-slug";
import { useLocation } from "@reach/router";

const Container = styled.nav(({ open }) => [
  tw`fixed top-0 right-0 z-50 flex flex-col items-center h-full py-8 overflow-auto text-black transition-all duration-500 ease-in-out transform translate-x-full bg-white shadow-lg`,
  open && tw`translate-x-0`,
]);

const Item = styled(Link)(({ current }) => [
  tw`block w-full px-24 py-2 text-2xl text-center transition-all duration-500 ease-in-out font-wild hover:text-primary`,
  current === true && tw`text-primary`,
]);

const Title = tw.li`flex mb-8 flex-col items-center justify-center font-wild text-4xl text-center after:(bg-primary h-1 w-8 content[''])`;

const Close = styled.button`
  ${tw`text-2xl font-bold text-white rounded-full font-mont bg-primary transition-all duration-500 ease-in-out transform hover:(rotate-180 bg-dark)`}
  width: 55px;
  height: 55px;
`;

const Menu = ({ onClose, ...rest }) => {
  const { pathname } = useLocation();
  return (
    <Container {...rest}>
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(
              limit: 1000
              filter: {
                frontmatter: {
                  title: { ne: "" }
                  meta: { noIndex: { ne: true } }
                }
              }
            ) {
              nodes {
                frontmatter {
                  title
                }
              }
            }
          }
        `}
        render={(data) => (
          <ul>
            <Title>Menu</Title>
            <li>
              <Item to="/" current={pathname === "/"}>
                Home
              </Item>
            </li>
            {data.allMarkdownRemark.nodes.map(({ frontmatter }, i) => {
              const slug = "/" + stringToSlug(frontmatter.title) + "/";
              return (
                <li key={i}>
                  <Item to={slug} current={slug === pathname}>
                    {frontmatter.title}
                  </Item>
                </li>
              );
            })}
            <li>
              <Item to="/contact/" current={pathname === "/contact/"}>
                Contact
              </Item>
            </li>
            <li tw="absolute bottom-4 -translate-x-1/2 left-1/2">
              <Close onClick={onClose}>&times;</Close>
            </li>
          </ul>
        )}
      />
    </Container>
  );
};

export default Menu;
