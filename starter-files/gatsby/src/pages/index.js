import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Card from '../components/ColouredCard';

const HomepageStyles = styled.div`
  width: 70%;
  max-width: 1014px;
  margin: auto;
  margin-top: 16vh;

  & #colouredDiv {
    /* background-color: bisque;
    height: 100vh;
    position: absolute; */
  }

  p {
    font-family: 'Merriweather';
    font-weight: 400;
    font-size: 5.5rem;
  }
`;

export default function SelectedWorks() {
  return (
    <>
      <Layout>
        <HomepageStyles>
          <div>
            <p>
              Hello World. Here are some photographs I have made. I also make
              websites. The rest of the time I take my small dog to cafes. I
              live in Aotearoa - New Zealand.
            </p>
          </div>
        </HomepageStyles>
      </Layout>
    </>
  );
}
