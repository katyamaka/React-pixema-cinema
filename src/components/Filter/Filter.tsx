import { CloseIcon } from "assets";
import { Button, ModalWrapper, Portal } from "components";
import { PortalTarget } from "config";
import {
  FiltersHeader,
  FilterstForm,
  SortByContainer,
  StyledModalFiltersWindow,
  SubTitle,
  Tab,
  Title,
} from "./styles";
import Select from "react-select";

interface Props {
  toggleModal: (isOpen: boolean) => void;
}

const options = [
  { value: "", label: "all types" },
  {
    value: "movie",
    label: "Movie",
  },
  {
    value: "series",
    label: "Series",
  },
  {
    value: "episode",
    label: "Episode",
  },
];

const year = [
  {
    value: "2002",
    label: "2002",
  },
  {
    value: "2001",
    label: "2001",
  },
  {
    value: "2003",
    label: "2003",
  },
];

export const ModalFiltersWindow = ({ toggleModal }: Props) => {
  const closeModal = () => {
    toggleModal(false);
  };

  return (
    <Portal target={PortalTarget.MODAL}>
      <ModalWrapper>
        <StyledModalFiltersWindow>
          <FiltersHeader>
            <Title>Filters</Title>
            <Button onClick={closeModal}>
              <CloseIcon />
            </Button>
          </FiltersHeader>
          <SortByContainer>
            <Select isMulti options={options} />
          </SortByContainer>
          <FilterstForm>
            <Select isMulti options={year} />
          </FilterstForm>
        </StyledModalFiltersWindow>
      </ModalWrapper>
    </Portal>
  );
};
