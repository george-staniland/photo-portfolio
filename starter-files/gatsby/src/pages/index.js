import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Card from '../components/ColouredCard';

const HomepageStyles = styled.div`
  width: 49%;
  max-width: 1026px;
  margin: auto;
  margin-top: 16vh;

  & #colouredDiv {
    /* background-color: bisque;
    height: 100vh;
    position: absolute; */
  }

  @media (max-width: 1320px) {
    width: 55%;
  }

  @media (max-width: 942px) {
    width: 75%;
  }

  @media (max-width: 550px) {
    width: 86%;
    background: cornflowerblue;
    p {
      font-size: 9vw;
    }
  }

  p {
    font-family: 'Merriweather';
    font-weight: 400;
    font-size: 3.2vw;
  }
`;

export default function SelectedWorks() {
  return (
    <>
      <Layout>
        <HomepageStyles>
          <div id="colouredDiv">
            <div>
              <p>
                Hello World. Here are some photographs I have made. I also make
                websites. The rest of the time I take my small dog to cafes. I
                live in Aotearoa - New Zealand.
              </p>
            </div>
          </div>
        </HomepageStyles>
      </Layout>
    </>
  );
}
