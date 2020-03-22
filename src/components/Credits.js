import React from "react";
import styled from "styled-components";
import Collapsible from "react-collapsible";

const CreditsStyled = styled.nav`
  text-align: left;

  .Collapsible__trigger {
    color: black;
    background-color: whitesmoke;
    cursor: pointer;
    padding: 0.2rem;
    :hover {
      background-color: #00ffbf;
    }
  }
  .Collapsible__contentOuter {
    max-width: 300px;

    :hover {
      .Collapsible__contentInner {
      }
    }
  }
  .Collapsible__contentInner {
    padding: 0.5rem;

    a {
      color: #00ffbf;
    }
  }
`;

const StyledListItem = styled.li`
  list-style-type: none;
  padding: 1rem;
`;

const Credits = () => {
  return (
    <CreditsStyled>
      <Collapsible trigger="Credits">
        <p>Art used:</p>
        <ul>
          <StyledListItem>
            "Metatron Menu" forked from{" "}
            <a href="https://github.com/MGrudule/metatron">@MGrudule</a>{" "}
          </StyledListItem>
        </ul>
        <hr />
        <p>Tech used:</p>
        <ul>
          <StyledListItem>
            Powered by{" "}
            <a href="https://meet.jit.si">
              JitSi Open Source Video Conferencing
            </a>
          </StyledListItem>
          <StyledListItem>
            Made with 💝 by{" "}
            <a href="https://github.com/interspacechat">interspace.chat</a>
          </StyledListItem>
        </ul>
      </Collapsible>
    </CreditsStyled>
  );
};

export default Credits;
