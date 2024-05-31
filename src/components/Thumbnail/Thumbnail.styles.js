import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  border-radius: 20px;
  transition: all 0.3s;
  object-fit: cover;
  height: ${({ recipeHeight }) => (recipeHeight ? `520px` : `auto`)};
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Text = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(0deg, #000, transparent);
    color: #fff;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 12px;
`;
