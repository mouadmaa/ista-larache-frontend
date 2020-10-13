import styled, { css } from 'styled-components'

interface ActivityCardContainerProps {
  reverse: boolean
}

const getActivityCardContainerStyles = (activityCardContainerProps: ActivityCardContainerProps) => {
  return activityCardContainerProps.reverse && activityCardReverseStyles
}

export const ActivityCardContainer = styled.section`
  ${getActivityCardContainerStyles}

  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.color.primaryWhite};
  padding: 2rem;
  margin: 3rem 0;
  max-width: 125rem;
  box-shadow: ${({ theme }) => theme.shadow.white};
  align-items: center;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.4s;

  @media screen and (max-width: 37.5em) {
    flex-direction: column;
    margin-top: 6rem;
  }

  :hover {
    transform: translateY(-0.2rem) scale(1.01);
    box-shadow: ${({ theme }) => theme.shadow.black};
  }
`

const activityCardReverseStyles = css`
  flex-direction: row-reverse;

  > div :first-of-type {
    transform: translateX(5rem);

    @media screen and (max-width: 50em) {
      transform: translateX(4rem);
    }

    @media screen and (max-width: 37.5em) {
      width: 100%;
      transform: translate(0, -4rem);
    }
  }

  > div :last-of-type {
    transform: translateX(2.5rem);
    width: 100%;

    @media screen and (max-width: 50em) {
      transform: translateX(1.5rem);
    }

    @media screen and (max-width: 37.5em) {
      max-width: 90%;
      transform: translate(0, -1.5rem);
    }
  }

  @media screen and (max-width: 37.5em) {
    flex-direction: column;
    margin-top: 6rem;
  }
`

export const ActivityCardImageContainer = styled.div`
  width: 34rem;
  height: 20rem;
  min-width: 34rem;
  position: relative;
  border-radius: 0.8rem;
  transform: translateX(-5rem);
  box-shadow: ${({ theme }) => theme.shadow.white};
  transition: 0.3s;

  @media screen and (max-width: 50em) {
    transform: translateX(-4rem);
  }

  @media screen and (max-width: 37.5em) {
    width: 100%;
    transform: translate(0, -4rem);
  }

  :hover {
    box-shadow: ${({ theme }) => theme.shadow.black};
  }

  ::before {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0, 0);
    content: '';
    background: linear-gradient(to right bottom, rgba(38, 118, 171, 0.9), rgba(44, 138, 199, 0.2));
    box-shadow: ${({ theme }) => theme.shadow.white};
    border-radius: 0.8rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 0.8rem;
  }
`

export const ActivityCardContent = styled.div`
  transform: translateX(-2.5rem);
  width: 100%;

  @media screen and (max-width: 50em) {
    transform: translateX(-1.5rem);
  }

  @media screen and (max-width: 37.5em) {
    max-width: 90%;
    transform: translate(0, -1.5rem);
  }

  div :first-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;

    span {
      display: inline-block;
      font-size: 1.2rem;
      font-weight: 500;
      margin: 0.2rem 0;
    }

    span :first-of-type {
      color: #f2f8f8;
      padding: 0.2rem 0.6rem;
      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.color.primary};;
    }
  }

  h3 {
    font-size: 1.6rem;
    margin: 0.8rem 0;
    color: ${({ theme }) => theme.color.primary};
  }

  div :last-of-type {
    font-size: 1.2rem;
    margin-bottom: 0.6rem !important;
  }
`
