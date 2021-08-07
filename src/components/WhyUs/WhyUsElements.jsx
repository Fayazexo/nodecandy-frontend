import styled from 'styled-components'

export const WhyContainer = styled.div`
    height: 850px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;
    @media screen and (max-width: 1000px) {
        height: 1300px;
    }
    @media screen and (max-width: 768px) {
        height: 1600px;
    }
    @media screen and (max-width: 760px) {
        height: 1600px;
    }
    @media screen and (max-width: 580px) {
        height: 1650px;
    }
    @media screen and (max-width: 480px) {
        height: 1700px;
    }
    @media screen and (max-width: 450px) {
        height: 1700px;
    }
    @media screen and (max-width: 375px) {
        height: 1850px;
    }
    @media screen and (max-width: 350px) {
        height: 1800px;
    }
    @media screen and (max-width: 310px) {
        height: 1900px;
    }
`

export const WhyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1080px;
    transition: 0.3s ease-in-out all;
`

export const WhyTitle = styled.h1`
    margin-bottom: 100px;
    font-size: 30px;
    line-height: 1.1;
    @media screen and (max-width: 1000px) {
        font-size: 28px;
        margin-top: -50px
    }
    @media screen and (max-width: 760px) {
        font-size: 28px;
        margin-top: -50px
    }
    @media screen and (max-width: 580px) {
        font-size: 28px;
        margin-top: -50px
    }
    @media screen and (max-width: 480px) {
        font-size: 25px;
        margin-top: 100px;
    }
    @media screen and (max-width: 450px) {
        font-size: 20px;
        margin-top: 25px;
    }
    @media screen and (max-width: 350px) {
        font-size: 20px;
    
    }
    @media screen and (max-width: 310px) {
        font-size: 17px;
    }
    
`

export const WhyGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    padding: 10px;
    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
      transition: ease 0.3s all;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        transition: ease 0.3s all;
        margin: 20px 20px;
    }
    @media screen and (max-width: 580px) {
        transition: ease 0.3s all;
        margin: 15px 15px;
    }
    @media screen and (max-width: 480px) {
        transition: ease 0.3s all;
    }
`
export const WhyItemDescription = styled.div`
    margin-top: 20px;
    font-size: 14px;
    color: #bebebe;
    font-weight: 400;
    text-align: left;
    padding: 15px;
    transition: 0.3s ease-in-out all;
`

export const WhyItems = styled.div`
    background-color: #f9f9f9;
    height: 450px auto;
    width: 350px auto;
    border: 1.5px solid;
    border-color: #dfdfdf;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    transition: 0.3s ease-in-out all;
    &:hover {
        transform: scale(1.05);
        background-color: #ffffff;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
        cursor: pointer;
        transition: 0.3s ease-in-out all;
        & ${WhyItemDescription} {
            color: #1f1f1f;
            transition: 0.3s ease-in-out all;
        }
    }
`

export const WhyNumber = styled.h2`
    font-size: 40px;
    font-weight: 100;
    color: #dadada;
    margin-top: 10px;

`

export const WhyItemIcon = styled.h1`
    color: #b9189b;
    margin-top: 40px;
`

export const WhyItemTitle = styled.h2`
    font-size: 18px;
    margin-top: 20px;
    font-weight: 600;
`

