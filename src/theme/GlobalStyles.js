import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 *,*::before,*::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Manrope", sans-serif;
    }
    a {
        text-transform: none;
        text-decoration: none;
        color: unset;
    }
    .text-center{
        text-align:center;
    }
    .font-size-64{
        font-size: 64px;
        font-weight: 800;
        line-height: 84px;
    }
    .font-size-32{
        font-size: 32px;
        font-weight:700;
        line-height: 48px;
    }
    .font-size-48{
        font-size: 48px;
        font-weight:700;
        line-height: 67px;
    }
    .font-size-40{
        font-size: 40px;
        font-weight:700;
        line-height: 56px;
    }
    .font-size-18{
        font-size: 18px;
        font-weight:600;
        line-height: 32px;
    }
    .font-size-16{
        font-size: 16px;
        font-weight:600;
        line-height: 28px;
    }
`;
