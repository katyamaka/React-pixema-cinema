import { BurgerIcon, SearchIcon } from "assets";
import { AuthDetails, BurgerMenu, PixemaLogo } from "components";
import { useToggle, useWindowSize } from "hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { Params } from "types/types";
import { BurgerButton, HeaderForm, Search, StyledHeader } from "./styles";
import { memo } from "react";
import { ModalFiltersWindow } from "components/Filter/Filter";

interface HeaderProps {
  params?: Params;
  setParams?: (searchValue: string) => void;
}

interface FormProps {
  search: string;
}

export const Header = memo(({ setParams }: HeaderProps) => {
  const { width = 0 } = useWindowSize();
  const { handleSubmit, register } = useForm<FormProps>();
  const [isOpenMenu, setIsOpenMenu] = useToggle();
  const [isOpenFilters, setIsOpenFilters] = useToggle();

  const onSubmit: SubmitHandler<FormProps> = ({ search }) => {
    if (setParams) {
      setParams(search);
    }
  };

  return (
    <StyledHeader>
      {width < 1440 && <PixemaLogo />}
      <HeaderForm onSubmit={handleSubmit(onSubmit)}>
        <Search {...register("search")} />
        <SearchIcon onClick={setIsOpenFilters} />
      </HeaderForm>
      {width >= 1440 ? (
        <AuthDetails />
      ) : (
        <BurgerButton onClick={setIsOpenMenu}>
          <BurgerIcon />
        </BurgerButton>
      )}
      {isOpenMenu && <BurgerMenu closeMenu={setIsOpenMenu} />}
      {isOpenFilters && <ModalFiltersWindow toggleModal={setIsOpenFilters} />}
    </StyledHeader>
  );
});
