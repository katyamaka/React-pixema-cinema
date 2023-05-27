import { css } from "styled-components";
import { Media } from "./media";
import { Color } from "./colors";

const H1 = css`
  font-family: "Exo 2";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;

  ${Media.MD} {
    font-size: 32px;
    line-height: 48px;
  }

  ${Media.XXS} {
    font-size: 28px;
    line-height: 42px;
  }
`;

const H2 = css`
  font-family: "Exo 2";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;

  ${Media.XXS} {
    font-size: 20px;
  }
`;

const H3 = css`
  font-family: "Exo 2";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;

  ${Media.XXS} {
    font-size: 18px;
    line-height: 28px;
  }
`;

const S1 = css`
  font-family: "Exo 2";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
`;

const S2 = css`
  font-family: "Exo 2";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

const S3 = css`
  font-family: "Exo 2";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

const B1 = css`
  font-family: "Exo 2", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.WHITE_THEME};
`;

export const Typography = { H1, H2, H3, S1, S2, S3, B1 };
