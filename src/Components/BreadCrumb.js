import styled from "styled-components";

const Container = styled.div`
  background-color: #fffae6;
  width: 50%;
  padding-bottom: 0.5rem;
  top: 1rem;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  border-radius: 10%;
`;

const UL = styled.ul`
  list-style: none;
  display: flex;

  li {
    display: flex;
    margin: 0 3rem;
  }
  li span {
    height: 25px;
    width: 25px;
    background-color: #ff8a00;
    border-radius: 50%;
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  li a {
    text-decoration: none;
    color: inherit;
    margin-left: 0.5rem;
    &:hover {
      color: #ff8a00;
      cursor: pointer;
    }
  }
`;

const BreadCrumb = ({ setPage, pages }) => {
  return (
    <Container>
      <UL>
        <li>
          <span>1.</span>
          <a onClick={() => setPage(pages[0])}>Delivery</a>
        </li>
        <li>
          <span>2.</span>
          <a onClick={() => setPage(pages[1])}>Payment</a>
        </li>
        <li>
          <span>3.</span>
          <a href="#">Finish</a>
        </li>
      </UL>
    </Container>
  );
};

export default BreadCrumb;
