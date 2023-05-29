import styled from "styled-components";
import { Media, Color } from "ui";

const StyledModalFiltersWindow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(4, auto);
  width: clamp(320px, 100%, 518px);
  padding: 48px 40px 48px;

  background-color: ${Color.DARK};

  ${Media.XXS} {
    border-radius: 0;
  }

  ${Media.SM} {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`;

const FiltersHeader = styled.div`
  place-self: start stretch;
  grid-column: 1 / 3;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;

  button {
    padding: 0;

    background: none;
  }
`;

const Title = styled.h3`
  color: ${Color.WHITE};
`;

const SubTitle = styled.h4`
  color: ${Color.WHITE};
`;

const Tab = styled.button`
  place-self: start stretch;
  padding: 16px;
  border: 2px solid ${Color.GREEN};
`;

const SortByContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1);
`;

const FilterstForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1);
`;

export {
  StyledModalFiltersWindow,
  Title,
  SubTitle,
  FiltersHeader,
  SortByContainer,
  Tab,
  FilterstForm,
};
